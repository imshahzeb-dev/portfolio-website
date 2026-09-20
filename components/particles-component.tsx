"use client"

import { useEffect, useRef } from "react"

/**
 * Hero constellation field.
 *
 * Replaces tsparticles, which was measured at 21 fps under a 4x CPU throttle
 * (61 fps with the canvas removed) and cost 62 kB of route JS. The engine was
 * doing an O(n²) pass over 100 particles every frame, drawing each dot and link
 * as its own canvas call, on a retina-backed 2880x2160 buffer that it repainted
 * whether or not the hero was on screen.
 *
 * This does the same job with:
 *  - a uniform grid, so link lookup is O(n) against 9 neighbouring cells
 *  - alpha-bucketed batching: every link is drawn in one of 4 Path2D strokes
 *    and every dot in a single fill, so ~5 draw calls per frame instead of ~600
 *  - device pixel ratio capped at 1.5 (retina doubled the fill rate for a field
 *    of 2 px dots nobody inspects)
 *  - the loop parked entirely when the hero scrolls away or the tab is hidden
 *  - a single static frame under prefers-reduced-motion
 */

const LINK_DIST = 132
const LINK_DIST_SQ = LINK_DIST * LINK_DIST
const HOVER_DIST = 150
const HOVER_DIST_SQ = HOVER_DIST * HOVER_DIST
const MAX_DPR = 1.5
const TARGET_FPS = 48
const FRAME_MS = 1000 / TARGET_FPS
/** One particle per this many CSS px² of hero, then clamped. */
const AREA_PER_PARTICLE = 17000

interface P {
  x: number
  y: number
  vx: number
  vy: number
  r: number
}

export function ParticlesComponent() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d", { alpha: true })
    if (!ctx) return

    const host = canvas.parentElement ?? canvas
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    // Phones and low-core machines get a thinner field.
    const cores = navigator.hardwareConcurrency ?? 4
    const budget = cores <= 4 ? 0.55 : 1

    let w = 0
    let h = 0
    let dpr = 1
    let particles: P[] = []
    let cols = 0
    let rows = 0
    let grid: number[][] = []
    let raf = 0
    let last = 0
    let visible = true
    let onScreen = true
    const pointer = { x: -9999, y: -9999, active: false }

    const rand = (a: number, b: number) => a + Math.random() * (b - a)

    function build() {
      const rect = host.getBoundingClientRect()
      w = Math.max(1, Math.round(rect.width))
      h = Math.max(1, Math.round(rect.height))
      dpr = Math.min(window.devicePixelRatio || 1, MAX_DPR)

      canvas!.width = Math.round(w * dpr)
      canvas!.height = Math.round(h * dpr)
      canvas!.style.width = `${w}px`
      canvas!.style.height = `${h}px`
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0)

      const target = Math.round(((w * h) / AREA_PER_PARTICLE) * budget)
      const count = Math.max(18, Math.min(88, target))

      particles = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: rand(-0.45, 0.45),
        vy: rand(-0.45, 0.45),
        r: rand(1.5, 3.1),
      }))

      cols = Math.max(1, Math.ceil(w / LINK_DIST))
      rows = Math.max(1, Math.ceil(h / LINK_DIST))
      grid = Array.from({ length: cols * rows }, () => [])
    }

    // 4 alpha buckets → 4 stroke calls for every link on screen.
    const buckets: Path2D[] = []

    function draw() {
      ctx!.clearRect(0, 0, w, h)

      for (let i = 0; i < grid.length; i++) grid[i]!.length = 0
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]!
        const cx = Math.min(cols - 1, Math.max(0, (p.x / LINK_DIST) | 0))
        const cy = Math.min(rows - 1, Math.max(0, (p.y / LINK_DIST) | 0))
        grid[cy * cols + cx]!.push(i)
      }

      for (let b = 0; b < 4; b++) buckets[b] = new Path2D()

      // Only compare against the 9 cells around each particle, and only the
      // forward half of them, so each pair is visited once.
      for (let cy = 0; cy < rows; cy++) {
        for (let cx = 0; cx < cols; cx++) {
          const cell = grid[cy * cols + cx]!
          if (!cell.length) continue
          for (let ny = cy; ny <= cy + 1; ny++) {
            if (ny >= rows) continue
            for (let nx = cx - 1; nx <= cx + 1; nx++) {
              if (nx < 0 || nx >= cols) continue
              if (ny === cy && nx < cx) continue
              const other = grid[ny * cols + nx]!
              if (!other.length) continue
              for (let a = 0; a < cell.length; a++) {
                const ia = cell[a]!
                const pa = particles[ia]!
                for (let bi = 0; bi < other.length; bi++) {
                  const ib = other[bi]!
                  if (ib <= ia) continue
                  const pb = particles[ib]!
                  const dx = pa.x - pb.x
                  const dy = pa.y - pb.y
                  const d2 = dx * dx + dy * dy
                  if (d2 > LINK_DIST_SQ) continue
                  const t = 1 - d2 / LINK_DIST_SQ
                  let bucket = (t * 4) | 0
                  if (bucket > 3) bucket = 3
                  const path = buckets[bucket]!
                  path.moveTo(pa.x, pa.y)
                  path.lineTo(pb.x, pb.y)
                }
              }
            }
          }
        }
      }

      ctx!.lineWidth = 1.15
      for (let b = 0; b < 4; b++) {
        ctx!.strokeStyle = `rgba(255,255,255,${0.075 + b * 0.075})`
        ctx!.stroke(buckets[b]!)
      }

      // Links from the cursor to nearby particles — grid-scoped, not a full pass.
      if (pointer.active) {
        const cx = Math.min(cols - 1, Math.max(0, (pointer.x / LINK_DIST) | 0))
        const cy = Math.min(rows - 1, Math.max(0, (pointer.y / LINK_DIST) | 0))
        const near = new Path2D()
        for (let ny = cy - 1; ny <= cy + 1; ny++) {
          if (ny < 0 || ny >= rows) continue
          for (let nx = cx - 1; nx <= cx + 1; nx++) {
            if (nx < 0 || nx >= cols) continue
            for (const i of grid[ny * cols + nx]!) {
              const p = particles[i]!
              const dx = p.x - pointer.x
              const dy = p.y - pointer.y
              if (dx * dx + dy * dy > HOVER_DIST_SQ) continue
              near.moveTo(pointer.x, pointer.y)
              near.lineTo(p.x, p.y)
            }
          }
        }
        ctx!.strokeStyle = "rgba(255,255,255,0.3)"
        ctx!.stroke(near)
      }

      // Every dot in one fill.
      const dots = new Path2D()
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]!
        dots.moveTo(p.x + p.r, p.y)
        dots.arc(p.x, p.y, p.r, 0, Math.PI * 2)
      }
      ctx!.fillStyle = "rgba(255,255,255,0.78)"
      ctx!.fill(dots)
    }

    function step(now: number) {
      raf = requestAnimationFrame(step)
      if (now - last < FRAME_MS) return
      last = now

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]!
        p.x += p.vx
        p.y += p.vy
        if (p.x < -20) p.x = w + 20
        else if (p.x > w + 20) p.x = -20
        if (p.y < -20) p.y = h + 20
        else if (p.y > h + 20) p.y = -20
      }
      draw()
    }

    function start() {
      if (raf || reduced) return
      last = 0
      raf = requestAnimationFrame(step)
    }
    function stop() {
      if (!raf) return
      cancelAnimationFrame(raf)
      raf = 0
    }
    function sync() {
      if (visible && onScreen) start()
      else stop()
    }

    build()
    draw()
    if (!reduced) start()

    // Park the loop whenever the hero is not on screen or the tab is hidden.
    const io = new IntersectionObserver(
      ([e]) => {
        onScreen = !!e?.isIntersecting
        sync()
      },
      { threshold: 0 }
    )
    io.observe(host)

    const onVis = () => {
      visible = document.visibilityState === "visible"
      sync()
    }
    document.addEventListener("visibilitychange", onVis)

    let resizeTimer: ReturnType<typeof setTimeout>
    const ro = new ResizeObserver(() => {
      clearTimeout(resizeTimer)
      resizeTimer = setTimeout(() => {
        build()
        draw()
      }, 180)
    })
    ro.observe(host)

    const onMove = (e: PointerEvent) => {
      const rect = host.getBoundingClientRect()
      pointer.x = e.clientX - rect.left
      pointer.y = e.clientY - rect.top
      pointer.active = true
    }
    const onLeave = () => {
      pointer.active = false
    }
    const pointerHost: HTMLElement = host.closest("section") ?? host
    const finePointer = !reduced && window.matchMedia("(pointer: fine)").matches
    if (finePointer) {
      pointerHost.addEventListener("pointermove", onMove, { passive: true })
      pointerHost.addEventListener("pointerleave", onLeave, { passive: true })
    }

    return () => {
      stop()
      io.disconnect()
      ro.disconnect()
      clearTimeout(resizeTimer)
      document.removeEventListener("visibilitychange", onVis)
      pointerHost.removeEventListener("pointermove", onMove)
      pointerHost.removeEventListener("pointerleave", onLeave)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full"
    />
  )
}

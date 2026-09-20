"use client"

import Image from "next/image"
import { Suspense, lazy, useCallback, useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

// Lazy so the ~1 MB runtime never lands in the initial bundle.
const Spline = lazy(() => import("@splinetool/react-spline"))

/** The part of the Spline Application we drive. */
interface SplineApp {
  stop: () => void
  play: () => void
  dispose?: () => void
}

interface SplineSceneProps {
  scene: string
  /** Pre-rendered still of the same scene, shown immediately. */
  poster: string
  posterAlt?: string
  className?: string
}

/**
 * Hosted Spline 3D scene, upgraded onto a poster rather than blocking on it.
 *
 * Measured: parsing the 725 kB scene and starting the runtime is a single
 * 1344 ms main-thread task — the page cannot respond to input for over a
 * second, and that was happening on every desktop visit. It was also mounting
 * on phones where the canvas is `display:none`, so 873 kB shipped for something
 * nobody could see.
 *
 * So: the poster (23 kB WebP, captured from this exact scene) paints straight
 * away, and the live scene is only fetched when it can be afforded —
 *   • lg and up, pointer devices, motion not reduced
 *   • not on Save-Data, slow connections, or low memory / low core counts
 *   • and only once the visitor actually moves the cursor over the hero
 * and it is paused via stop()/play() whenever it scrolls away or the tab is
 * backgrounded, then disposed on unmount.
 */
export function SplineScene({ scene, poster, posterAlt = "", className }: SplineSceneProps) {
  const holderRef = useRef<HTMLDivElement>(null)
  const appRef = useRef<SplineApp | null>(null)
  const [allowed, setAllowed] = useState(false)
  const [shouldLoad, setShouldLoad] = useState(false)
  const [live, setLive] = useState(false)

  useEffect(() => {
    const big = window.matchMedia("(min-width: 1024px)")
    const fine = window.matchMedia("(pointer: fine)")
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)")

    const capable = () => {
      const nav = navigator as Navigator & {
        deviceMemory?: number
        connection?: { saveData?: boolean; effectiveType?: string }
      }
      if (nav.connection?.saveData) return false
      if (nav.connection?.effectiveType && /(^|-)(2g|3g)$/.test(nav.connection.effectiveType)) return false
      if (typeof nav.deviceMemory === "number" && nav.deviceMemory < 4) return false
      if ((nav.hardwareConcurrency ?? 8) < 4) return false
      return true
    }

    const evaluate = () => setAllowed(big.matches && fine.matches && !reduced.matches && capable())
    evaluate()
    big.addEventListener("change", evaluate)
    reduced.addEventListener("change", evaluate)
    return () => {
      big.removeEventListener("change", evaluate)
      reduced.removeEventListener("change", evaluate)
    }
  }, [])

  // Load on intent, not on arrival.
  //
  // Idle scheduling was not enough: requestIdleCallback fires almost at once on
  // a fast machine and the parse is a single indivisible 1.3 s task, so the
  // freeze simply moved a few hundred ms later. The interactive value of this
  // scene is that it tracks the cursor, which only matters to someone who moves
  // the cursor — so that is the trigger. Visitors who never interact keep the
  // poster and pay nothing; visitors who do get the live scene about a second
  // later, on an already-interactive page.
  useEffect(() => {
    if (!allowed || shouldLoad) return
    const el = holderRef.current
    const host = el?.closest("section") ?? el
    if (!host) return

    let timer: ReturnType<typeof setTimeout> | undefined
    const trigger = () => {
      // A short settle so a cursor sweeping past the page does not trigger it.
      timer = setTimeout(() => setShouldLoad(true), 120)
      cleanup()
    }
    const cancel = () => {
      if (timer) clearTimeout(timer)
      timer = undefined
    }
    function cleanup() {
      host!.removeEventListener("pointermove", trigger)
      host!.removeEventListener("focusin", trigger)
    }

    host.addEventListener("pointermove", trigger, { passive: true, once: true })
    host.addEventListener("focusin", trigger, { once: true })

    return () => {
      cancel()
      cleanup()
    }
  }, [allowed, shouldLoad])

  // Park the render loop off screen / in a background tab.
  useEffect(() => {
    if (!live) return
    const el = holderRef.current
    if (!el) return

    let onScreen = true
    let tabVisible = document.visibilityState === "visible"
    const sync = () => {
      const app = appRef.current
      if (!app) return
      if (onScreen && tabVisible) app.play()
      else app.stop()
    }

    const io = new IntersectionObserver(([e]) => { onScreen = !!e?.isIntersecting; sync() }, { threshold: 0 })
    io.observe(el)
    const onVis = () => { tabVisible = document.visibilityState === "visible"; sync() }
    document.addEventListener("visibilitychange", onVis)

    return () => {
      io.disconnect()
      document.removeEventListener("visibilitychange", onVis)
      appRef.current?.stop()
    }
  }, [live])

  useEffect(() => () => { appRef.current?.dispose?.(); appRef.current = null }, [])

  const onLoad = useCallback((app: SplineApp) => {
    appRef.current = app
    setLive(true)
  }, [])

  return (
    <div ref={holderRef} className={cn("relative h-full w-full", className)}>
      {/* Poster: instant, and the only thing most constrained devices ever get. */}
      <Image
        src={poster}
        alt={posterAlt}
        fill
        priority
        sizes="(min-width: 1024px) 52vw, 1px"
        className={cn(
          "object-contain object-center transition-opacity duration-700",
          live ? "opacity-0" : "opacity-100"
        )}
      />
      {allowed && shouldLoad && (
        <div
          className="absolute inset-0 transition-opacity duration-700"
          style={{ opacity: live ? 1 : 0 }}
        >
          <Suspense fallback={null}>
            <Spline scene={scene} className="h-full w-full" onLoad={onLoad} />
          </Suspense>
        </div>
      )}
    </div>
  )
}

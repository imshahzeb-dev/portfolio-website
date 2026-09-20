"use client"

import { useCallback, useRef } from "react"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { SplineScene } from "@/components/spline-scene"
import { Spotlight } from "@/components/spotlight"
import { Icon } from "@/components/icons"

const EASE = [0.16, 1, 0.3, 1] as const

const TAGS = [
  "GenAI",
  "RAG pipelines",
  "Agentic workflows",
  "Fine-tuning",
  "On-premise LLM",
  "MLOps",
]

// Hosted Spline scene — the robot used on the AI & ML page.
const SCENE = "https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"

/**
 * Dedicated hero for /services/ai-machine-learning — the flagship service, so
 * it gets the 3D robot rather than the standard banner.
 *
 * The robot canvas is pinned to the right half and tracks the cursor across the
 * whole section, including over the text column.
 */
export function AiMlHero() {
  const sectionRef = useRef<HTMLElement>(null)
  const splineRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  })

  const headlineY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"])
  const robotY = useTransform(scrollYProgress, [0, 1], ["0%", "16%"])
  const glowOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  // Spline only listens on its own canvas, so forward pointer moves from the
  // whole section, remapped from section space into canvas space.
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const canvas = splineRef.current?.querySelector("canvas")
    if (!canvas || !sectionRef.current) return

    const section = sectionRef.current.getBoundingClientRect()
    const box = canvas.getBoundingClientRect()
    const relX = (e.clientX - section.left) / section.width
    const relY = (e.clientY - section.top) / section.height

    canvas.dispatchEvent(
      new PointerEvent("pointermove", {
        bubbles: true,
        cancelable: true,
        clientX: box.left + relX * box.width,
        clientY: box.top + relY * box.height,
        pointerId: 1,
        pointerType: "mouse",
        isPrimary: true,
        buttons: e.buttons,
      })
    )
  }, [])

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      aria-labelledby="aiml-hero-heading"
      className="relative flex min-h-screen w-full items-center overflow-hidden bg-[#071528]"
    >
      {/* ── Robot: right half, parallaxed ─────────────────────────────────── */}
      <motion.div
        ref={splineRef}
        style={{ y: robotY, width: "52vw" }}
        className="pointer-events-none absolute right-0 top-0 hidden h-full lg:block"
        aria-hidden="true"
      >
        <SplineScene
          scene={SCENE}
          poster="/images/ai-robot-poster.webp"
        />
      </motion.div>

      {/* Blend the canvas into the text column and soften both edges */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(to right, #071528 26%, rgba(7,21,40,0.92) 44%, rgba(7,21,40,0.18) 64%, transparent 76%, rgba(7,21,40,0.55) 92%, #071528 100%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-40 bg-gradient-to-b from-[#071528] to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-40 bg-gradient-to-t from-[#071528] to-transparent"
      />

      {/* Grid texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[1] opacity-[0.05] [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:60px_60px]"
      />

      {/* Radial top glow, fading out on scroll */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 z-[2] h-[600px]"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 40% -10%, rgba(0,89,232,0.35) 0%, transparent 70%)",
          opacity: glowOpacity,
        }}
      />

      <Spotlight size={420} className="z-[2] hidden lg:block" />

      {/* ── Copy ───────────────────────────────────────────────────────────── */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="flex flex-col justify-center py-32 lg:max-w-[52%] lg:py-40">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-white/50">
              <li>
                <Link href="/" className="transition-colors hover:text-white">
                  Home
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li>
                <Link href="/services" className="transition-colors hover:text-white">
                  Services
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li className="text-[#FF9958]">AI &amp; ML</li>
            </ol>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: EASE }}
            className="mb-6 flex items-center gap-3"
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#0059E8]/40 bg-[#0059E8]/15">
              <Icon name="brain" size={24} className="text-[#4d92ff]" />
            </span>
            <span className="rounded-full border border-[#FF9958]/30 bg-[#FF9958]/10 px-3 py-1 text-sm font-semibold uppercase tracking-[0.14em] text-[#FF9958]">
              Core service
            </span>
          </motion.div>

          <motion.h1
            id="aiml-hero-heading"
            style={{ y: headlineY }}
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08, ease: EASE }}
            className="display-four mb-6 font-bold text-white"
          >
            AI woven in.
            <br />
            <span className="inherit-type text-white/45">Not bolted on.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.16, ease: EASE }}
            className="mb-10 max-w-lg text-lg leading-relaxed text-white/70"
          >
            Production-grade generative AI, RAG pipelines, agentic workflows, and custom ML
            models. Intelligence designed into your architecture from day one.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24, ease: EASE }}
            className="flex flex-wrap gap-3"
          >
            <Link
              href="/contact"
              className="group relative flex items-center gap-2 overflow-hidden rounded-full bg-[#0059E8] px-7 py-3.5 font-medium text-white shadow-[0_8px_30px_-8px_rgba(0,89,232,0.9)] transition-all duration-300 hover:bg-[#0046BA]"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 -translate-x-full skew-x-[-12deg] bg-white/15 transition-transform duration-700 group-hover:translate-x-[220%]"
              />
              Start a project
              <Icon name="arrow-right" className="transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
            <Link
              href="/portfolio"
              className="flex items-center gap-2 rounded-full border border-white/25 px-7 py-3.5 font-medium text-white/80 transition-all duration-200 hover:border-white/60 hover:text-white"
            >
              See our work
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.36, ease: EASE }}
            className="mt-10 flex flex-wrap gap-2"
          >
            {TAGS.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm font-medium text-white/60"
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <div aria-hidden className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-white/25 pt-2">
          <div className="h-1.5 w-1 animate-bounce rounded-full bg-white/60" />
        </div>
      </div>
    </section>
  )
}

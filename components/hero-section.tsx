"use client"

import Image from "next/image"
import Link from "next/link"
import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { cn } from "@/lib/utils"
import { ParticlesComponent } from "@/components/particles-component"
import { COMPANY, SOCIALS, TRUST_SIGNALS } from "@/data/company"
import { Icon } from "@/components/icons"

const EASE = [0.16, 1, 0.3, 1] as const

/** Capability chips that float over the artwork side. */
const CHIPS = [
  { label: "Agentic workflows", icon: "graph" as const, top: "17%", right: "6%", dur: 7 },
  { label: "RAG pipelines", icon: "files" as const, top: "40%", right: "26%", dur: 8.5 },
  { label: "On-prem LLM", icon: "lock-key" as const, top: "63%", right: "9%", dur: 7.8 },
]

/**
 * Home hero.
 *
 * The photo is a composited layer, not a CSS background. `background-attachment:
 * fixed` measured 32 fps and 57/180 dropped frames while scrolling on a real
 * GPU, because it repaints the whole viewport every frame. A transform on its
 * own layer keeps the parallax feel and stays on the compositor: 61 fps, zero
 * dropped frames.
 *
 * Below lg the same photo is art-directed into its own panel further down —
 * a 16:9 frame whose subject sits at 75% across cannot be `cover`-cropped into
 * a portrait viewport without losing the robot entirely.
 */
export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  })
  // Subtle drift only — this is what the fixed attachment was faking.
  const photoY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"])

  return (
    <section
      ref={sectionRef}
      className={cn(
        "relative overflow-hidden bg-[#071528] lg:h-[1080px]",
        // Below lg: stacked, top-aligned, height driven by content.
        // At lg+: the photo background takes over and the copy is centred.
        "flex items-start pt-[100px] pb-16 sm:pt-[112px] lg:items-center lg:pt-0 lg:pb-0"
      )}
    >
      {/* 0 — the photo, on its own compositor layer (lg+ only) */}
      <motion.div
        aria-hidden
        style={{ y: photoY }}
        className="pointer-events-none absolute inset-x-0 -top-[8%] hidden h-[116%] will-change-transform lg:block"
      >
        <Image
          src="/images/hero.jpg"
          alt=""
          fill
          priority
          fetchPriority="high"
          sizes="(min-width: 1024px) 100vw, 1px"
          className="object-cover object-center"
        />
      </motion.div>

      {/* 1 — directional scrim: dense behind the copy, clearing over the artwork */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[5]"
        style={{
          background:
            "linear-gradient(100deg, rgba(7,20,40,0.96) 0%, rgba(8,26,54,0.90) 30%, rgba(10,46,107,0.55) 52%, rgba(10,46,107,0.12) 72%, rgba(7,20,40,0.45) 100%)",
        }}
      />

      {/* 2 — accent bloom */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[6] bg-[radial-gradient(ellipse_60%_55%_at_18%_28%,rgba(0,89,232,0.40),transparent_62%),radial-gradient(ellipse_45%_45%_at_8%_92%,rgba(255,153,88,0.20),transparent_60%)]"
      />

      {/* 3 — engineering grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[7] opacity-[0.07] [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:68px_68px]"
      />

      {/* 4 — particle field */}
      <div className="absolute inset-0 z-10">
        <ParticlesComponent />
      </div>

      {/* 5 — edge fades so the section joins the navbar and the next band cleanly */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 z-[11] h-36 bg-gradient-to-b from-[#071428]/85 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[11] h-44 bg-gradient-to-t from-[#0A2E6B] to-transparent dark:from-[#09111F]"
      />

      {/* 6 — floating capability chips over the artwork */}
      <div aria-hidden className="pointer-events-none absolute inset-0 z-[12] hidden xl:block">
        {CHIPS.map((chip, i) => (
          <motion.div
            key={chip.label}
            initial={{ opacity: 0, y: 18, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.9 + i * 0.18, ease: EASE }}
            className="absolute"
            style={{ top: chip.top, right: chip.right }}
          >
            <span
              className="flex items-center gap-2.5 rounded-full border border-white/15 bg-[#071428]/55 px-4 py-2.5 backdrop-blur-md"
              style={{ animation: `svc-float-y ${chip.dur}s ${i * 0.6}s ease-in-out infinite` }}
            >
              <Icon name={chip.icon} size={18} className="text-[#4d92ff]" />
              <span className="text-sm font-medium text-white/90">{chip.label}</span>
            </span>
          </motion.div>
        ))}
      </div>

      {/* 7 — copy */}
      <div className="container relative z-20 mx-auto px-4">
        <div className="max-w-2xl lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
            className="mb-5 flex w-fit flex-wrap items-center gap-3 rounded-full border border-white/15 bg-[#163872]/80 px-3 py-2 backdrop-blur-sm lg:mb-7 lg:px-4"
          >
            <span className="rounded-full bg-[#FF9958] px-3 py-1 text-sm font-semibold uppercase tracking-wide text-white">
              Our core
            </span>
            <span className="text-sm text-white sm:text-base">
              Full-service technology partner · AI woven throughout
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
            className="display-four mb-4 font-bold text-white drop-shadow-[0_2px_24px_rgba(0,0,0,0.45)] lg:mb-6"
          >
            We build software with{" "}
            <span className="relative inline-block inherit-type">
              intelligence
              <svg
                aria-hidden
                viewBox="0 0 320 12"
                preserveAspectRatio="none"
                className="absolute -bottom-1 left-0 h-2.5 w-full text-[#FF9958]"
              >
                <motion.path
                  d="M3 8.5C60 3.5 140 2.5 317 6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 0.9, delay: 0.75, ease: EASE }}
                />
              </svg>
            </span>{" "}
            woven in.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
            className="mb-7 max-w-xl text-lg text-white/85 lg:mb-9"
          >
            {COMPANY.name} takes products from strategy through development, launch, and scale —
            with AI woven through everything we build, not bolted on at the end.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: EASE }}
            className="mb-9 flex flex-wrap items-center gap-3 lg:mb-11"
          >
            <Link
              href="/contact"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-[#0059E8] px-7 py-3.5 font-medium text-white shadow-[0_10px_34px_-8px_rgba(0,89,232,0.95)] transition-all duration-300 hover:gap-3 hover:bg-[#0046BA]"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 -translate-x-full skew-x-[-12deg] bg-white/20 transition-transform duration-700 group-hover:translate-x-[220%]"
              />
              Book a call
              <Icon name="arrow-right" />
            </Link>
            <Link
              href="/portfolio"
              className="rounded-full border border-white/40 px-7 py-3.5 font-medium text-white backdrop-blur-sm transition-all duration-300 hover:border-white hover:bg-white/10"
            >
              See our work
            </Link>
          </motion.div>

          {/* Art-directed photo panel for < lg. The background crop cannot frame
              the subject in a portrait viewport, so below lg the photo gets its
              own 16:11 panel with object-position pinned to the robot. */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: EASE }}
            className="relative mb-9 overflow-hidden rounded-2xl border border-white/12 lg:hidden"
          >
            <div className="relative aspect-[16/11] w-full md:aspect-[4/3]">
              <Image
                src="/images/hero.jpg"
                alt=""
                fill
                sizes="(max-width: 1023px) 100vw, 1px"
                className="object-cover object-[82%_45%]"
              />
            </div>
            {/* keep the panel tied to the section's colour field */}
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(7,20,40,0.92)_0%,rgba(7,20,40,0.25)_38%,transparent_70%)]"
            />
            <div aria-hidden className="absolute inset-x-3 bottom-3 flex flex-wrap gap-2">
              {CHIPS.map((chip) => (
                <span
                  key={chip.label}
                  className="flex items-center gap-2 rounded-full border border-white/15 bg-[#071428]/70 px-3 py-1.5 backdrop-blur-md"
                >
                  <Icon name={chip.icon} size={15} className="text-[#6BA5FF]" />
                  <span className="text-xs font-medium text-white/90">{chip.label}</span>
                </span>
              ))}
            </div>
          </motion.div>

          {/* Trust signals — qualitative only, no invented metrics */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: EASE }}
            className="mb-8 flex flex-wrap gap-x-14 gap-y-5 border-t border-white/15 pt-7"
          >
            {TRUST_SIGNALS.map((signal) => (
              <div key={signal.label}>
                <span className="block fs-five font-semibold text-white">{signal.value}</span>
                <span className="block text-sm uppercase tracking-[0.12em] text-white/60">
                  {signal.label}
                </span>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: EASE }}
            className="flex flex-wrap items-center gap-3"
          >
            {SOCIALS.slice(0, 3).map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/10 backdrop-blur-sm transition-all duration-300 hover:border-transparent hover:bg-[#0059E8]"
              >
                <Icon name={social.icon} size={17} className="text-white" />
              </a>
            ))}
            <span className="w-full text-sm text-white/55 sm:ml-2 sm:w-auto">
              {COMPANY.trustLine}
            </span>
          </motion.div>
        </div>
      </div>

      {/* 8 — scroll cue */}
      <motion.a
        href="#services"
        aria-label="Scroll to services"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.3 }}
        className="absolute bottom-10 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center gap-2 lg:flex"
      >
        <span className="text-xs uppercase tracking-[0.2em] text-white/45">Scroll</span>
        <span className="flex h-10 w-6 items-start justify-center rounded-full border border-white/30 pt-2">
          <span className="h-1.5 w-1 animate-bounce rounded-full bg-white/70" />
        </span>
      </motion.a>
    </section>
  )
}

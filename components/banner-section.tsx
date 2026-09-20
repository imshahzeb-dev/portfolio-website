"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"
import { Breadcrumb } from "@/components/breadcrumb"
import { Spotlight } from "@/components/spotlight"

const EASE = [0.16, 1, 0.3, 1] as const

interface BannerSectionProps {
  title: string
  eyebrow?: string
  description?: string
  breadcrumbItems: { label: string; href?: string }[]
  /** Optional scene shown on the right at lg+. */
  illustration?: ReactNode
  /** Small qualitative chips under the lede. */
  stats?: Array<{ value: string; label: string }>
}

/**
 * Standard inner-page banner: dark blue field with layered glow, drifting orbs,
 * a cursor spotlight and an optional illustration, then the breadcrumb trail.
 * Top padding clears the fixed navbar.
 */
export function BannerSection({
  title,
  eyebrow,
  description,
  breadcrumbItems,
  illustration,
  stats,
}: BannerSectionProps) {
  return (
    <>
      <div className="relative overflow-hidden bg-[#0A2E6B] pt-[140px] pb-[70px] dark:bg-[#09111F] md:pt-[170px] md:pb-[90px]">
        {/* Depth: radial glow, faint grid, drifting orbs — all decorative */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(0,89,232,0.45),transparent_55%),radial-gradient(circle_at_85%_100%,rgba(255,153,88,0.18),transparent_50%)]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:56px_56px]"
        />
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-[#0059E8]/25 blur-3xl"
          animate={{ y: [0, 26, 0], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -right-16 bottom-0 h-64 w-64 rounded-full bg-[#FF9958]/15 blur-3xl"
          animate={{ y: [0, -22, 0], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 13, repeat: Infinity, ease: "easeInOut", delay: 1.4 }}
        />
        <Spotlight size={380} className="z-[1] hidden lg:block" />

        <div className="container relative z-[2] mx-auto px-4">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
            <div className={illustration ? "lg:col-span-7" : "lg:col-span-12 max-w-3xl"}>
              {eyebrow && (
                <motion.span
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: EASE }}
                  className="mb-3 block text-sm font-semibold uppercase tracking-[0.16em] text-[#FF9958]"
                >
                  {eyebrow}
                </motion.span>
              )}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.05, ease: EASE }}
                className="fs-one font-semibold text-white"
              >
                {title}
              </motion.h1>
              {description && (
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.12, ease: EASE }}
                  className="mt-4 max-w-2xl text-lg text-white/75"
                >
                  {description}
                </motion.p>
              )}

              {stats && stats.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
                  className="mt-8 flex flex-wrap gap-x-14 gap-y-5 border-t border-white/10 pt-6"
                >
                  {stats.map((stat) => (
                    <div key={stat.label}>
                      <span className="block fs-five font-semibold text-white">{stat.value}</span>
                      <span className="block text-sm uppercase tracking-[0.12em] text-white/55">
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </motion.div>
              )}
            </div>

            {illustration && (
              <motion.div
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.9, delay: 0.2, ease: EASE }}
                className="hidden justify-center lg:col-span-5 lg:flex lg:justify-end"
                aria-hidden
              >
                {illustration}
              </motion.div>
            )}
          </div>
        </div>
      </div>

      <Breadcrumb items={breadcrumbItems} />
    </>
  )
}

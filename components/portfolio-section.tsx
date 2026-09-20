"use client"

import { useState } from "react"
import Link from "next/link"
import { caseArt } from "@/components/illustrations/hero-art"
import { cn } from "@/lib/utils"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { Icon } from "@/components/icons"
import {
  portfolioCategories,
  portfolioItems,
  type PortfolioCategory,
} from "@/data/portfolio"

interface PortfolioSectionProps {
  showHeading?: boolean
  showFilters?: boolean
  /** Cap the number of cards — used for the homepage teaser. */
  limit?: number
  showCta?: boolean
}

export function PortfolioSection({
  showHeading = true,
  showFilters = true,
  limit,
  showCta = false,
}: PortfolioSectionProps) {
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory>("All")

  const filtered =
    activeCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory)

  const visible = limit ? filtered.slice(0, limit) : filtered

  return (
    <section className="pt-[120px] pb-[120px] bg-[rgb(var(--b1))]">
      <div className="container mx-auto px-4">
        {showHeading && (
          <SectionHeading
            eyebrow="Our work"
            title="Products we've taken from concept to scale."
            description="Real client platforms across PropTech, HealthTech, FinTech, energy, music and AI. Outcome metrics are published only once the client shares them."
            className="mb-10 lg:mb-14"
          />
        )}

        {showFilters && (
          <div className="flex flex-wrap justify-center gap-3 mb-10 lg:mb-14">
            {portfolioCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                aria-pressed={activeCategory === category}
                className={cn(
                  "px-6 py-2.5 rounded-full text-base font-medium transition-all",
                  activeCategory === category
                    ? "bg-[#0059E8] text-white"
                    : "bg-[#F5F9FF] dark:bg-[#0B2451] text-gray-700 dark:text-gray-300 hover:bg-[#CEE3FF] dark:hover:bg-[#0E2C63]"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {visible.map((item, index) => (
            <Reveal key={item.id} delay={Math.min(index, 5) * 0.07} className="h-full">
              <Link
                href={`/portfolio/${item.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-xl border border-[#CEE3FF] dark:border-[#0E2C63] bg-white dark:bg-[#0B2451] transition-all duration-300 hover:border-[#0059E8] hover:shadow-xl"
              >
                <div className="relative flex h-56 items-center justify-center overflow-hidden bg-[#0A2E6B] dark:bg-[#09111F]">
                  {/* Decorative field behind the isometric scene */}
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:32px_32px]"
                  />
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-0 transition-opacity duration-500 group-hover:opacity-100 opacity-70"
                    style={{
                      background: `radial-gradient(ellipse 60% 60% at 50% 55%, ${item.accent}26, transparent 70%)`,
                    }}
                  />
                  <span className="relative transition-transform duration-500 group-hover:scale-105">
                    {(() => {
                      const { Art } = caseArt(item.slug)
                      return <Art color={item.accent} size={228} />
                    })()}
                  </span>
                  <span className="absolute left-4 top-4 rounded-full bg-black/30 px-3 py-1 text-sm font-medium text-white backdrop-blur-sm">
                    {item.industry}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <span className="mb-2 text-sm font-semibold uppercase tracking-[0.12em] text-[#FF9958]">
                    {item.category}
                  </span>
                  <h3 className="fs-six font-semibold text-gray-900 dark:text-white mb-2 transition-colors group-hover:text-[#0059E8] dark:group-hover:text-[#FF9958]">
                    {item.client}
                  </h3>
                  <p className="text-base text-gray-600 dark:text-gray-300 mb-5 flex-1">
                    {item.tagline}
                  </p>
                  <span className="inline-flex items-center gap-2 font-medium text-[#0059E8] dark:text-[#4d92ff] transition-all group-hover:gap-3">
                    Read case study
                    <Icon name="arrow-right" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        {showCta && (
          <Reveal className="mt-12 text-center">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 rounded-full bg-[#0059E8] px-8 py-3.5 font-medium text-white transition-all duration-300 hover:gap-3 hover:bg-[#0046BA]"
            >
              All case studies
              <Icon name="arrow-right" />
            </Link>
          </Reveal>
        )}
      </div>
    </section>
  )
}

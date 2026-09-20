"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { ENGAGEMENT_MODELS } from "@/data/company"
import { Icon } from "@/components/icons"
import { IconTile } from "@/components/icon-tile"

interface EngagementSectionProps {
  showHeading?: boolean
  /** Compact cards for the homepage; detailed cards for /how-we-work. */
  detailed?: boolean
}

/**
 * The four engagement models from content.md §4. This replaces the template's
 * invented pricing tiers — TechnoSX publishes engagement models, not prices.
 */
export function EngagementSection({
  showHeading = true,
  detailed = false,
}: EngagementSectionProps) {
  return (
    <section className="pt-[120px] pb-[120px] bg-[rgb(var(--b1))]">
      <div className="container mx-auto px-4">
        {showHeading && (
          <SectionHeading
            eyebrow="How we work"
            title="Engagement that fits how you build."
            description="Four ways to work with us. Most clients start with one and move between them as the work changes."
            className="mb-12 lg:mb-16"
          />
        )}

        <div
          className={cn(
            "grid gap-6",
            detailed ? "grid-cols-1 lg:grid-cols-2" : "grid-cols-1 md:grid-cols-2 xl:grid-cols-4"
          )}
        >
          {ENGAGEMENT_MODELS.map((model, index) => (
            <Reveal key={model.slug} delay={index * 0.08} className="h-full">
              <div className="group flex h-full flex-col rounded-xl border border-[#CEE3FF] dark:border-[#0E2C63] bg-white dark:bg-[#0B2451] p-7 transition-all duration-300 hover:border-[#0059E8] hover:shadow-xl">
                <IconTile name={model.icon} className="mb-5" />

                <h3 className="fs-six font-semibold text-gray-900 dark:text-white mb-3">
                  {model.name}
                </h3>
                <p className="text-base text-gray-600 dark:text-gray-300 mb-5">
                  {model.description}
                </p>

                {detailed && (
                  <ul className="mb-6 space-y-2.5">
                    {model.includes.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-base text-gray-600 dark:text-gray-300"
                      >
                        <Icon name="check-circle" className="text-xl text-[#0059E8] flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                <div className="mt-auto pt-4 border-t border-[#CEE3FF] dark:border-[#0E2C63]">
                  <span className="block text-sm font-semibold uppercase tracking-[0.12em] text-[#FF9958] mb-1">
                    Best for
                  </span>
                  <p className="text-base text-gray-600 dark:text-gray-300">{model.bestFor}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {!detailed && (
          <Reveal className="mt-12 text-center">
            <Link
              href="/how-we-work"
              className="inline-flex items-center gap-2 rounded-full bg-[#0059E8] px-8 py-3.5 font-medium text-white transition-all duration-300 hover:gap-3 hover:bg-[#0046BA]"
            >
              How we work
              <Icon name="arrow-right" />
            </Link>
          </Reveal>
        )}
      </div>
    </section>
  )
}

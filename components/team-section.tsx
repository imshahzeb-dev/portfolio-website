"use client"

import Link from "next/link"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { TEAM_STATEMENT, teamDisciplines } from "@/data/team"
import { Icon } from "@/components/icons"
import { IconTile } from "@/components/icon-tile"

interface TeamSectionProps {
  showHeading?: boolean
  showCta?: boolean
}

/**
 * The team, presented by discipline.
 *
 * content.md forbids inventing names, photos or headcount, so this section
 * describes the practices that staff an engagement rather than fabricating
 * individual profiles. TODO(founder): swap in real profiles when available.
 */
export function TeamSection({ showHeading = true, showCta = true }: TeamSectionProps) {
  return (
    <section className="pt-[120px] pb-[120px] bg-[#F5F9FF] dark:bg-[#0B2451]">
      <div className="container mx-auto px-4">
        {showHeading && (
          <SectionHeading
            eyebrow="Our team"
            title="Senior-only, across every discipline."
            description={TEAM_STATEMENT}
            className="mb-12 lg:mb-16"
          />
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {teamDisciplines.map((discipline, index) => (
            <Reveal key={discipline.id} delay={Math.min(index, 7) * 0.06} className="h-full">
              <div className="group flex h-full flex-col rounded-xl border border-[#CEE3FF] dark:border-[#0E2C63] bg-white dark:bg-[#09111F] p-6 transition-all duration-300 hover:border-[#0059E8] hover:shadow-xl">
                <div className="mb-5 flex items-center justify-between">
                  <IconTile name={discipline.icon} />
                  <span className="rounded-full bg-[#FF9958]/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-[#FF9958]">
                    {discipline.focus}
                  </span>
                </div>

                <h3 className="fs-six font-semibold text-gray-900 dark:text-white mb-3">
                  {discipline.name}
                </h3>
                <p className="mb-5 flex-1 text-base text-gray-600 dark:text-gray-300">
                  {discipline.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {discipline.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-[#CEE3FF] dark:border-[#0E2C63] px-3 py-1 text-sm text-gray-600 dark:text-gray-400"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {showCta && (
          <Reveal className="mt-12 text-center">
            <Link
              href="/careers"
              className="inline-flex items-center gap-2 rounded-full bg-[#0059E8] px-8 py-3.5 font-medium text-white transition-all duration-300 hover:gap-3 hover:bg-[#0046BA]"
            >
              Join the team
              <Icon name="arrow-right" />
            </Link>
          </Reveal>
        )}
      </div>
    </section>
  )
}

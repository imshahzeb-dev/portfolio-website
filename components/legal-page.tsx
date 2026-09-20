"use client"

import { Reveal } from "@/components/reveal"
import { Icon } from "@/components/icons"

export interface LegalSection {
  heading: string
  body?: string[]
  list?: string[]
}

interface LegalPageProps {
  lastUpdated: string
  intro: string
  sections: LegalSection[]
}

/** Shared long-form layout for the privacy policy and terms pages. */
export function LegalPage({ lastUpdated, intro, sections }: LegalPageProps) {
  return (
    <section className="pt-[100px] pb-[120px] bg-[rgb(var(--b1))]">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <p className="mb-6 text-sm font-semibold uppercase tracking-[0.14em] text-[#FF9958]">
              Last updated: {lastUpdated}
            </p>
            <p className="mb-12 border-l-4 border-[#0059E8] pl-5 text-lg leading-[170%] text-gray-700 dark:text-gray-200">
              {intro}
            </p>
          </Reveal>

          {sections.map((section, index) => (
            <Reveal key={section.heading} delay={Math.min(index, 6) * 0.03} className="mb-10">
              <h2 className="fs-four font-semibold text-gray-900 dark:text-white mb-4">
                {index + 1}. {section.heading}
              </h2>
              {section.body?.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 40)}
                  className="mb-4 text-lg leading-[175%] text-gray-600 dark:text-gray-300"
                >
                  {paragraph}
                </p>
              ))}
              {section.list && (
                <ul className="mb-4 space-y-3">
                  {section.list.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Icon name="check-circle" className="mt-1 flex-shrink-0 text-xl text-[#0059E8]" />
                      <span className="text-lg text-gray-600 dark:text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

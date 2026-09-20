"use client"

import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { VALUES } from "@/data/company"
import { IconTile } from "@/components/icon-tile"

/** The four operating values from content.md §2. */
export function ValuesSection() {
  return (
    <section className="pt-[120px] pb-[120px] bg-[#0A2E6B] dark:bg-[#09111F]">
      <div className="container mx-auto px-4">
        <SectionHeading
          eyebrow="What we hold to"
          title="Four things we don't compromise on."
          tone="onDark"
          className="mb-12 lg:mb-16"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {VALUES.map((value, index) => (
            <Reveal key={value.title} delay={index * 0.08} className="h-full">
              <div className="group h-full rounded-xl border border-white/10 bg-white/[0.03] p-7 transition-all duration-300 hover:border-[#FF9958]/50 hover:bg-white/[0.06]">
                <IconTile name={value.icon} tone="onDark" className="mb-5" />
                <h3 className="fs-six font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-base text-white/70">{value.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

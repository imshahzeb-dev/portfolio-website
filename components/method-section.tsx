"use client"

import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { IconTile } from "@/components/icon-tile"

const STEPS = [
  {
    step: "01",
    name: "Diagnose",
    icon: "stethoscope" as const,
    body: "We start with the problem, not the feature list. Technical diagnosis covers the architecture, the data you already hold, and where intelligence actually belongs.",
  },
  {
    step: "02",
    name: "Prioritise",
    icon: "list-checks" as const,
    body: "The smallest valuable slice first. We name what is deliberately deferred so the roadmap stays honest and scope creep is visible.",
  },
  {
    step: "03",
    name: "Build",
    icon: "code" as const,
    body: "Senior engineers ship in short cycles with QA and security wired into the pipeline as gates, not as a review before release.",
  },
  {
    step: "04",
    name: "Scale",
    icon: "trend-up" as const,
    body: "Launch is the middle, not the end. Observability, cost control and ongoing support keep the product fast as usage grows.",
  },
]

/** The delivery method — the lifecycle promise, made concrete. */
export function MethodSection() {
  return (
    <section className="pt-[120px] pb-[120px] bg-[#F5F9FF] dark:bg-[#0B2451]">
      <div className="container mx-auto px-4">
        <SectionHeading
          eyebrow="The method"
          title="Diagnose · Prioritise · Build · Scale"
          description="Concept and strategy, development, launch, scaling, ongoing support — one team accountable across all of it."
          className="mb-12 lg:mb-16"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {STEPS.map((item, index) => (
            <Reveal key={item.step} delay={index * 0.1} className="h-full">
              <div className="relative h-full rounded-xl border border-[#CEE3FF] dark:border-[#0E2C63] bg-white dark:bg-[#09111F] p-7 transition-all hover:border-[#0059E8] hover:shadow-xl">
                <span className="absolute right-6 top-5 text-4xl font-bold text-[#0059E8]/10 dark:text-white/10">
                  {item.step}
                </span>
                <IconTile name={item.icon} className="mb-5" />
                <h3 className="fs-six font-semibold text-gray-900 dark:text-white mb-3">
                  {item.name}
                </h3>
                <p className="text-base text-gray-600 dark:text-gray-300">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

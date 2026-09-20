import type { Metadata } from "next"
import Link from "next/link"
import { BannerSection } from "@/components/banner-section"
import { ValuesSection } from "@/components/values-section"
import { MethodSection } from "@/components/method-section"
import { TeamSection } from "@/components/team-section"
import { CtaBand } from "@/components/cta-band"
import { Reveal } from "@/components/reveal"
import { IllustrationPanel } from "@/components/illustration-panel"
import { AboutArt } from "@/components/illustrations/hero-art"
import { COMPANY, TRUST_SIGNALS } from "@/data/company"
import { Icon } from "@/components/icons"

export const metadata: Metadata = {
  title: "About",
  description:
    "TechnoSX is a full-service technology partner founded in 2025 in Islamabad — AI-native by design, senior-only, delivering end to end for clients worldwide.",
}

const STORY = [
  "TechnoSX exists to be the partner that builds intelligence in from the start. Too many teams bolt AI on at the end, ship before they understand the problem, and scale complexity instead of solving it.",
  "We work end-to-end — strategy, architecture, build, launch, scale, support — with AI woven through everything. Founded in 2025 in Islamabad by a senior team, we're AI-native by design: hands-on, fast, and free of legacy process.",
]

export default function AboutPage() {
  return (
    <>
      <BannerSection
        eyebrow="About us"
        title="A technology partner, not a vendor."
        description={COMPANY.oneLiner}
        breadcrumbItems={[{ label: "About" }]}
        stats={TRUST_SIGNALS}
        illustration={<AboutArt size={320} />}
      />

      {/* Story */}
      <section className="pt-[120px] pb-[120px] bg-[rgb(var(--b1))]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <Reveal>
              <span className="mb-2 block text-lg font-semibold text-[#FF9958]">Who we are</span>
              <h2 className="fs-two font-semibold text-gray-900 dark:text-white mb-6">
                Built to take products from concept to scale.
              </h2>
              {STORY.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 32)}
                  className="mb-5 text-lg leading-[175%] text-gray-600 dark:text-gray-300"
                >
                  {paragraph}
                </p>
              ))}
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="rounded-full bg-[#0059E8] px-7 py-3.5 font-medium text-white transition-all hover:bg-[#0046BA]"
                >
                  Book a call
                </Link>
                <Link
                  href="/careers"
                  className="rounded-full border border-[#CEE3FF] dark:border-[#0E2C63] px-7 py-3.5 font-medium text-gray-700 dark:text-gray-200 transition-all hover:border-[#0059E8] hover:text-[#0059E8]"
                >
                  Work with us
                </Link>
              </div>
            </Reveal>

            {/* The banner already carries the trust signals, so this column
                gets the illustration plus our honesty note about metrics. */}
            <div className="flex flex-col gap-5">
              <Reveal delay={0.1}>
                <IllustrationPanel
                  accent="#4d92ff"
                  className="h-[320px] rounded-2xl border border-[#CEE3FF] dark:border-[#0E2C63] md:h-[400px]"
                >
                  <AboutArt color="#4d92ff" size={300} />
                </IllustrationPanel>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="rounded-xl border border-dashed border-[#FF9958]/50 bg-[#FF9958]/5 p-6">
                  <p className="text-base text-gray-600 dark:text-gray-300">
                    We publish qualitative trust signals rather than invented statistics. Project
                    counts, client numbers and NPS go up here once they're real and verifiable.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Lifecycle strip */}
          <Reveal className="mt-16 rounded-xl border border-[#CEE3FF] dark:border-[#0E2C63] bg-[#F5F9FF] dark:bg-[#0B2451] p-8">
            <span className="mb-4 block text-sm font-semibold uppercase tracking-[0.16em] text-[#FF9958]">
              Our lifecycle promise
            </span>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-3">
              {[
                "Concept & strategy",
                "Development",
                "Launch",
                "Scaling",
                "Ongoing support",
              ].map((stage, index, all) => (
                <span key={stage} className="flex items-center gap-4">
                  <span className="fs-six font-medium text-gray-900 dark:text-white">{stage}</span>
                  {index < all.length - 1 && (
                    <Icon name="arrow-right" size={18} className="text-[#0059E8]" />
                  )}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <ValuesSection />
      <MethodSection />
      <TeamSection />
      <CtaBand />
    </>
  )
}

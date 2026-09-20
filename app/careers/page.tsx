import type { Metadata } from "next"
import Link from "next/link"
import { BannerSection } from "@/components/banner-section"
import { CareersArt } from "@/components/illustrations/hero-art"
import { CtaBand } from "@/components/cta-band"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { CONTACT } from "@/data/company"
import { Icon } from "@/components/icons"
import { IconTile } from "@/components/icon-tile"
import {
  CAREER_STATS,
  CAREER_VALUES,
  HIRING_STEPS,
  OPEN_ROLES,
  PERKS,
} from "@/data/careers"

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join a senior-only, AI-native team in Islamabad delivering end to end for clients worldwide. Open engineering, design, product and QA roles.",
}

export default function CareersPage() {
  return (
    <>
      <BannerSection
        eyebrow="Careers"
        title="Build AI-native products with a senior team."
        description="No juniors on client work, no legacy process, no busywork. You own outcomes, not tickets."
        breadcrumbItems={[{ label: "Careers" }]}
        stats={CAREER_STATS}
        illustration={<CareersArt size={320} />}
      />

      {/* Ascent scene */}
      <section className="pt-[80px] pb-[40px] bg-[rgb(var(--b1))]">
        <div className="container mx-auto px-4">
          <Reveal className="flex justify-center">
            <div className="relative flex w-full max-w-3xl items-center justify-center overflow-hidden rounded-2xl border border-[#CEE3FF] bg-[#0A2E6B] py-6 dark:border-[#0E2C63] dark:bg-[#09111F]">
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:48px_48px]"
              />
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_60%_at_50%_60%,rgba(0,89,232,0.35),transparent_70%)]"
              />
              <span className="relative">
                <CareersArt size={420} />
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="pt-[80px] pb-[120px] bg-[rgb(var(--b1))]">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="Why here"
            title="What you'd be joining."
            className="mb-12 lg:mb-16"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {CAREER_VALUES.map((value, index) => (
              <Reveal key={value.title} delay={index * 0.08} className="h-full">
                <div className="group flex h-full gap-5 rounded-xl border border-[#CEE3FF] dark:border-[#0E2C63] bg-white dark:bg-[#0B2451] p-7 transition-all hover:border-[#0059E8] hover:shadow-xl">
                  <IconTile name={value.icon} />
                  <div>
                    <h3 className="fs-six font-semibold text-gray-900 dark:text-white mb-2">
                      {value.title}
                    </h3>
                    <p className="text-base text-gray-600 dark:text-gray-300">{value.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Perks */}
      <section className="pt-[120px] pb-[120px] bg-[#0A2E6B] dark:bg-[#09111F]">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="The package"
            title="How we look after the team."
            tone="onDark"
            className="mb-12 lg:mb-16"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
            {PERKS.map((perk, index) => (
              <Reveal key={perk.title} delay={Math.min(index, 7) * 0.05} className="h-full">
                <div className="flex h-full items-center gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-6 transition-all hover:border-[#FF9958]/50 hover:bg-white/[0.06]">
                  <Icon name={perk.icon} size={22} className="shrink-0 text-[#6BA5FF]" />
                  <span className="text-base font-medium text-white">{perk.title}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Open roles */}
      <section id="roles" className="pt-[120px] pb-[120px] bg-[rgb(var(--b1))]">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="Open roles"
            title="Where we're hiring."
            description="Don't see your role? Send us what you've shipped — we make room for people who raise the bar."
            className="mb-12 lg:mb-16"
          />

          <div className="mx-auto max-w-4xl space-y-4">
            {OPEN_ROLES.map((role, index) => (
              <Reveal key={role.id} delay={Math.min(index, 5) * 0.06}>
                <div className="group flex flex-col gap-5 rounded-xl border border-[#CEE3FF] dark:border-[#0E2C63] bg-white dark:bg-[#0B2451] p-7 transition-all hover:border-[#0059E8] hover:shadow-xl lg:flex-row lg:items-center">
                  <div className="flex-1">
                    <div className="mb-3 flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-[#0059E8]/10 px-3 py-1 text-sm font-medium text-[#0059E8]">
                        {role.department}
                      </span>
                      <span className="rounded-full bg-[#F5F9FF] dark:bg-[#0E2C63] px-3 py-1 text-sm text-gray-600 dark:text-gray-300">
                        {role.location}
                      </span>
                      <span className="rounded-full bg-[#F5F9FF] dark:bg-[#0E2C63] px-3 py-1 text-sm text-gray-600 dark:text-gray-300">
                        {role.type}
                      </span>
                    </div>
                    <h3 className="fs-six font-semibold text-gray-900 dark:text-white mb-2">
                      {role.title}
                    </h3>
                    <p className="text-base text-gray-600 dark:text-gray-300">{role.blurb}</p>
                  </div>

                  <a
                    href={`mailto:${CONTACT.email}?subject=${encodeURIComponent(
                      `Application — ${role.title}`
                    )}`}
                    className="flex flex-shrink-0 items-center justify-center gap-2 rounded-full bg-[#0059E8] px-7 py-3 font-medium text-white transition-all hover:gap-3 hover:bg-[#0046BA]"
                  >
                    Apply
                    <Icon name="arrow-right" />
                  </a>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mx-auto mt-8 max-w-4xl rounded-xl border border-dashed border-[#FF9958]/50 bg-[#FF9958]/5 p-6">
            <p className="text-base text-gray-600 dark:text-gray-300">
              These openings are indicative while we finalise the hiring plan. Applications are
              read either way — send us what you've shipped at{" "}
              <a
                href={`mailto:${CONTACT.email}`}
                className="font-medium text-[#0059E8] hover:underline"
              >
                {CONTACT.email}
              </a>
              .
            </p>
          </Reveal>
        </div>
      </section>

      {/* Hiring process */}
      <section className="pt-[120px] pb-[120px] bg-[#F5F9FF] dark:bg-[#0B2451]">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="The process"
            title="Four steps, no ghosting."
            className="mb-12 lg:mb-16"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {HIRING_STEPS.map((step, index) => (
              <Reveal key={step.step} delay={index * 0.09} className="h-full">
                <div className="relative h-full rounded-xl border border-[#CEE3FF] dark:border-[#0E2C63] bg-white dark:bg-[#09111F] p-7">
                  <span className="mb-4 block text-4xl font-bold text-[#0059E8]/15">
                    {step.step}
                  </span>
                  <h3 className="fs-six font-semibold text-gray-900 dark:text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-base text-gray-600 dark:text-gray-300">{step.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-12 text-center">
            <Link
              href="#roles"
              className="inline-flex items-center gap-2 rounded-full bg-[#0059E8] px-8 py-3.5 font-medium text-white transition-all hover:gap-3 hover:bg-[#0046BA]"
            >
              See open roles
              <Icon name="arrow-down" />
            </Link>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Not the right time to apply?"
        description="Tell us what you're working on anyway. We keep track of people we'd want on a team."
        primary={{ label: "Say hello", href: "/contact" }}
        secondary={{ label: "About TechnoSX", href: "/about" }}
      />
    </>
  )
}

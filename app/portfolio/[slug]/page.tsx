import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { caseArt } from "@/components/illustrations/hero-art"
import { BannerSection } from "@/components/banner-section"
import { CtaBand } from "@/components/cta-band"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { getCaseStudy, portfolioItems } from "@/data/portfolio"
import { services } from "@/data/services"
import { Icon } from "@/components/icons"

export function generateStaticParams() {
  return portfolioItems.map((item) => ({ slug: item.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const study = getCaseStudy(slug)
  if (!study) return { title: "Case study not found" }

  return {
    title: `${study.client} case study`,
    description: study.description,
  }
}

/** Map a service title back to its slug so the chips link somewhere real. */
function serviceHref(title: string) {
  const match = services.find((s) => s.title === title)
  return match ? `/services/${match.slug}` : "/services"
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const study = getCaseStudy(slug)
  if (!study) notFound()

  const others = portfolioItems.filter((item) => item.slug !== study.slug).slice(0, 3)

  return (
    <>
      <BannerSection
        eyebrow={study.industry}
        title={study.title}
        description={study.tagline}
        breadcrumbItems={[{ label: "Work", href: "/portfolio" }, { label: study.client }]}
      />

      <section className="pt-[120px] pb-[120px] bg-[rgb(var(--b1))]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Body */}
            <div className="lg:col-span-2">
              <Reveal>
                <div className="relative mb-10 flex h-[340px] items-center justify-center overflow-hidden rounded-xl border border-[#CEE3FF] bg-[#0A2E6B] dark:border-[#0E2C63] dark:bg-[#09111F] md:h-[420px]">
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:42px_42px]"
                  />
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-0"
                    style={{
                      background: `radial-gradient(ellipse 55% 60% at 50% 55%, ${study.accent}33, transparent 70%)`,
                    }}
                  />
                  <span className="relative">
                    {(() => {
                      const { Art } = caseArt(study.slug)
                      return <Art color={study.accent} size={400} />
                    })()}
                  </span>
                </div>
              </Reveal>

              <Reveal>
                <h2 className="fs-three font-semibold text-gray-900 dark:text-white mb-4">
                  The project
                </h2>
                <p className="text-lg leading-[170%] text-gray-600 dark:text-gray-300 mb-10">
                  {study.description}
                </p>
              </Reveal>

              <Reveal>
                <h2 className="fs-three font-semibold text-gray-900 dark:text-white mb-6">
                  What we built
                </h2>
                <ul className="space-y-4 mb-10">
                  {study.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-start gap-3 rounded-xl border border-[#CEE3FF] dark:border-[#0E2C63] bg-white dark:bg-[#0B2451] p-5"
                    >
                      <Icon name="check-circle" className="mt-0.5 flex-shrink-0 text-xl text-[#0059E8]" />
                      <span className="text-base text-gray-700 dark:text-gray-200">
                        {highlight}
                      </span>
                    </li>
                  ))}
                </ul>
              </Reveal>

              {/* Honest gap — no invented outcome metrics. */}
              <Reveal>
                <div className="rounded-xl border border-dashed border-[#FF9958]/50 bg-[#FF9958]/5 p-6">
                  <h3 className="fs-six font-semibold text-gray-900 dark:text-white mb-2">
                    Outcome metrics
                  </h3>
                  <p className="text-base text-gray-600 dark:text-gray-300">
                    We publish performance numbers and client testimonials only once the client
                    has shared and approved them. Ask us on a call and we'll walk you through
                    the detail we're able to discuss.
                  </p>
                </div>
              </Reveal>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <Reveal delay={0.1}>
                <div className="lg:sticky lg:top-28 rounded-xl border border-[#CEE3FF] dark:border-[#0E2C63] bg-white dark:bg-[#0B2451] p-7">
                  <dl className="space-y-6">
                    <div>
                      <dt className="mb-1 text-sm font-semibold uppercase tracking-[0.12em] text-[#FF9958]">
                        Client
                      </dt>
                      <dd className="fs-six font-semibold text-gray-900 dark:text-white">
                        {study.client}
                      </dd>
                    </div>
                    <div>
                      <dt className="mb-1 text-sm font-semibold uppercase tracking-[0.12em] text-[#FF9958]">
                        Industry
                      </dt>
                      <dd className="text-base text-gray-700 dark:text-gray-200">
                        {study.industry}
                      </dd>
                    </div>
                    <div>
                      <dt className="mb-2 text-sm font-semibold uppercase tracking-[0.12em] text-[#FF9958]">
                        Services
                      </dt>
                      <dd className="flex flex-wrap gap-2">
                        {study.services.map((serviceTitle) => (
                          <Link
                            key={serviceTitle}
                            href={serviceHref(serviceTitle)}
                            className="rounded-full border border-[#CEE3FF] dark:border-[#0E2C63] px-3 py-1.5 text-sm text-gray-700 dark:text-gray-200 transition-colors hover:border-[#0059E8] hover:text-[#0059E8]"
                          >
                            {serviceTitle}
                          </Link>
                        ))}
                      </dd>
                    </div>
                    <div>
                      <dt className="mb-2 text-sm font-semibold uppercase tracking-[0.12em] text-[#FF9958]">
                        Stack
                      </dt>
                      <dd className="flex flex-wrap gap-2">
                        {study.stack.map((tech) => (
                          <span
                            key={tech}
                            className="rounded bg-[#F5F9FF] dark:bg-[#0E2C63] px-2.5 py-1 text-sm text-gray-700 dark:text-gray-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </dd>
                    </div>
                  </dl>

                  <a
                    href={study.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-7 flex w-full items-center justify-center gap-2 rounded-full bg-[#0059E8] px-6 py-3 font-medium text-white transition-all hover:bg-[#0046BA]"
                  >
                    Visit site
                    <Icon name="arrow-up-right" />
                  </a>
                  <Link
                    href="/contact"
                    className="mt-3 flex w-full items-center justify-center gap-2 rounded-full border border-[#CEE3FF] dark:border-[#0E2C63] px-6 py-3 font-medium text-gray-700 dark:text-gray-200 transition-all hover:border-[#0059E8] hover:text-[#0059E8]"
                  >
                    Start a similar project
                  </Link>
                </div>
              </Reveal>
            </aside>
          </div>
        </div>
      </section>

      {/* More work */}
      <section className="pt-[80px] pb-[120px] bg-[#F5F9FF] dark:bg-[#0B2451]">
        <div className="container mx-auto px-4">
          <SectionHeading eyebrow="More work" title="Other case studies" className="mb-10 lg:mb-14" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {others.map((item, index) => (
              <Reveal key={item.slug} delay={index * 0.08} className="h-full">
                <Link
                  href={`/portfolio/${item.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-xl border border-[#CEE3FF] dark:border-[#0E2C63] bg-white dark:bg-[#09111F] transition-all hover:border-[#0059E8] hover:shadow-xl"
                >
                  <span className="relative flex h-44 items-center justify-center overflow-hidden bg-[#0A2E6B] dark:bg-[#09111F]">
                    <span
                      aria-hidden
                      className="pointer-events-none absolute inset-0"
                      style={{
                        background: `radial-gradient(ellipse 60% 60% at 50% 55%, ${item.accent}26, transparent 70%)`,
                      }}
                    />
                    <span className="relative transition-transform duration-500 group-hover:scale-105">
                      {(() => {
                        const { Art } = caseArt(item.slug)
                        return <Art color={item.accent} size={184} />
                      })()}
                    </span>
                  </span>
                  <div className="flex flex-1 flex-col p-6">
                    <span className="mb-2 text-sm font-semibold uppercase tracking-[0.12em] text-[#FF9958]">
                      {item.industry}
                    </span>
                    <h3 className="fs-six font-semibold text-gray-900 dark:text-white mb-2">
                      {item.client}
                    </h3>
                    <p className="mb-4 flex-1 text-base text-gray-600 dark:text-gray-300">
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
        </div>
      </section>

      <CtaBand secondary={{ label: "All case studies", href: "/portfolio" }} />
    </>
  )
}

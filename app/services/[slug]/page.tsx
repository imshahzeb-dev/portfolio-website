import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { BannerSection } from "@/components/banner-section"
import { AiMlHero } from "@/components/ai-ml-hero"
import { FAQSection } from "@/components/faq-section"
import { CtaBand } from "@/components/cta-band"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { serviceArt } from "@/components/illustrations/hero-art"
import { getService, services } from "@/data/services"
import { getServiceDetail } from "@/data/service-detail"
import { Icon } from "@/components/icons"
import { IconTile } from "@/components/icon-tile"

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const detail = getServiceDetail(slug)
  const service = getService(slug)
  if (!detail || !service) return { title: "Service not found" }

  return {
    title: detail.seoTitle.replace(" — TechnoSX", ""),
    description: detail.seoDescription,
  }
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const service = getService(slug)
  const detail = getServiceDetail(slug)

  if (!service || !detail) notFound()

  const { Art, accent } = serviceArt(service.slug)

  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3)

  return (
    <>
      {/* The flagship service gets the 3D hero; the rest use the standard banner. */}
      {service.slug === "ai-machine-learning" ? (
        <AiMlHero />
      ) : (
        <BannerSection
          eyebrow={service.title}
          title={detail.headline}
          description={detail.subheadline}
          breadcrumbItems={[
            { label: "Services", href: "/services" },
            { label: service.shortTitle },
          ]}
          stats={[
            { value: String(detail.subCapabilities.length), label: "Capabilities" },
            { value: String(detail.process.length), label: "Process steps" },
            { value: String(detail.techStack.length), label: "Tools" },
          ]}
          illustration={<Art color={accent} size={320} />}
        />
      )}

      {/* Capabilities */}
      <section className="pt-[120px] pb-[120px] bg-[rgb(var(--b1))]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <Reveal className="lg:col-span-1">
              <span className="mb-2 block text-lg font-semibold text-[#FF9958]">
                Capabilities
              </span>
              <h2 className="fs-three font-semibold text-gray-900 dark:text-white mb-4">
                What this service covers
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                Every engagement is staffed with senior engineers who have shipped this work at
                scale — no juniors supervised from a distance.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[#0059E8] px-7 py-3.5 font-medium text-white transition-all hover:gap-3 hover:bg-[#0046BA]"
              >
                Discuss your project
                <Icon name="arrow-right" />
              </Link>
            </Reveal>

            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {detail.subCapabilities.map((capability, index) => (
                <Reveal key={capability} delay={Math.min(index, 8) * 0.04}>
                  <div className="flex h-full items-start gap-3 rounded-xl border border-[#CEE3FF] dark:border-[#0E2C63] bg-white dark:bg-[#0B2451] p-5 transition-all hover:border-[#0059E8] hover:shadow-lg">
                    <Icon name="check-circle" className="mt-0.5 flex-shrink-0 text-xl text-[#0059E8]" />
                    <span className="text-base text-gray-700 dark:text-gray-200">
                      {capability}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="pt-[120px] pb-[120px] bg-[#0A2E6B] dark:bg-[#09111F]">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="How we deliver"
            title="The process, step by step."
            tone="onDark"
            className="mb-12 lg:mb-16"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {detail.process.map((step, index) => (
              <Reveal key={step.step} delay={index * 0.09} className="h-full">
                <div className="relative h-full rounded-xl border border-white/10 bg-white/[0.03] p-7 transition-all hover:border-[#FF9958]/50 hover:bg-white/[0.06]">
                  <span className="mb-4 block text-4xl font-bold text-[#FF9958]/30">
                    {step.step}
                  </span>
                  <h3 className="fs-six font-semibold text-white mb-3">{step.title}</h3>
                  <p className="text-base text-white/70">{step.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Tech stack */}
      <section className="pt-[120px] pb-[120px] bg-[#F5F9FF] dark:bg-[#0B2451]">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="Tooling"
            title="The stack we work in."
            description="Chosen for the problem, not for novelty. If something in your stack works, we keep it."
            className="mb-10 lg:mb-14"
          />
          <Reveal className="flex flex-wrap justify-center gap-3">
            {detail.techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-[#CEE3FF] dark:border-[#0E2C63] bg-white dark:bg-[#09111F] px-5 py-2.5 text-base font-medium text-gray-700 dark:text-gray-200 transition-all hover:border-[#0059E8] hover:text-[#0059E8]"
              >
                {tech}
              </span>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Service FAQs */}
      <FAQSection
        items={detail.faqs}
        eyebrow="FAQs"
        title={`${service.shortTitle} — common questions`}
        description="Direct answers, including where we'd tell you not to build something."
      />

      {/* Related services */}
      <section className="pb-[120px] bg-[rgb(var(--b1))]">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="Keep exploring"
            title="Related services"
            className="mb-10 lg:mb-14"
          />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {related.map((item, index) => (
              <Reveal key={item.slug} delay={index * 0.08} className="h-full">
                <Link
                  href={`/services/${item.slug}`}
                  className="group flex h-full flex-col rounded-xl border border-[#CEE3FF] dark:border-[#0E2C63] bg-white dark:bg-[#0B2451] p-7 transition-all hover:border-[#0059E8] hover:shadow-xl"
                >
                  <IconTile name={item.icon} size="sm" className="mb-4" />
                  <h3 className="fs-six font-semibold text-gray-900 dark:text-white mb-2">
                    {item.shortTitle}
                  </h3>
                  <p className="mb-5 flex-1 text-base text-gray-600 dark:text-gray-300">
                    {item.description}
                  </p>
                  <span className="inline-flex items-center gap-2 font-medium text-[#0059E8] dark:text-[#4d92ff] transition-all group-hover:gap-3">
                    Explore
                    <Icon name="arrow-right" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title={`Need ${service.shortTitle}?`}
        description="Tell us where you are now and what success looks like. We'll come back with how we'd approach it."
        secondary={{ label: "All services", href: "/services" }}
      />
    </>
  )
}

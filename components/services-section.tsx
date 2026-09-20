"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { SERVICE_GROUPS, services, type Service } from "@/data/services"
import { Icon } from "@/components/icons"
import { IconTile } from "@/components/icon-tile"

interface ServicesSectionProps {
  /** Group the cards under Core / Build / Run & Scale / Assure headings. */
  grouped?: boolean
  showHeading?: boolean
  showCta?: boolean
}

function ServiceCard({ service, index }: { service: Service; index: number }) {
  return (
    <Reveal delay={Math.min(index, 5) * 0.06} className="h-full">
      <Link
        href={`/services/${service.slug}`}
        className={cn(
          "group flex h-full flex-col rounded-xl border p-7 transition-all duration-300",
          "border-white/10 bg-white/[0.03] hover:border-[#0059E8] hover:bg-[#0b2451]",
          service.featured && "border-[#FF9958]/40 bg-[#0b2451]/60"
        )}
      >
        <IconTile
          name={service.icon}
          tone={service.featured ? "accent" : "onDark"}
          className="mb-5"
        />

        {service.featured && (
          <span className="mb-2 w-fit rounded-full bg-[#FF9958]/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-[#FF9958]">
            Our core
          </span>
        )}

        <h3 className="fs-six font-semibold text-white mb-3">{service.title}</h3>
        <p className="text-white/70 text-base mb-6 flex-1">{service.description}</p>

        <span className="inline-flex items-center gap-2 text-[#4d92ff] group-hover:text-[#FF9958] font-medium transition-all group-hover:gap-3">
          Explore service
          <Icon name="arrow-right" />
        </span>
      </Link>
    </Reveal>
  )
}

export function ServicesSection({
  grouped = false,
  showHeading = true,
  showCta = true,
}: ServicesSectionProps) {
  return (
    <section className="pt-[120px] pb-[120px] bg-[#0A2E6B] dark:bg-[#09111F]">
      <div className="container mx-auto px-4">
        {showHeading && (
          <SectionHeading
            eyebrow="What we do"
            title="One partner, the full product lifecycle."
            description="Ten services across four groups — from the AI layer at our core to the quality and security work that keeps a product live."
            tone="onDark"
            className="mb-12 lg:mb-16"
          />
        )}

        {grouped ? (
          <div className="space-y-16">
            {SERVICE_GROUPS.map((group) => {
              const groupServices = services.filter((s) => s.group === group.key)
              return (
                <div key={group.key}>
                  <Reveal className="mb-7 flex flex-col gap-2 border-b border-white/10 pb-4 md:flex-row md:items-end md:justify-between">
                    <h3 className="fs-four font-semibold text-white">
                      <span className="inherit-type text-[#FF9958]">{group.label}</span>
                    </h3>
                    <p className="text-white/60 text-base md:max-w-xl md:text-right">
                      {group.blurb}
                    </p>
                  </Reveal>
                  <div
                    className={cn(
                      "grid gap-6",
                      groupServices.length === 1
                        ? "grid-cols-1"
                        : "grid-cols-1 sm:grid-cols-2 xl:grid-cols-3"
                    )}
                  >
                    {groupServices.map((service, index) => (
                      <ServiceCard key={service.slug} service={service} index={index} />
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => (
              <ServiceCard key={service.slug} service={service} index={index} />
            ))}
          </div>
        )}

        {showCta && (
          <Reveal className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-full bg-[#0059E8] px-8 py-3.5 font-medium text-white transition-all duration-300 hover:gap-3 hover:bg-[#0046BA]"
            >
              All ten services
              <Icon name="arrow-right" />
            </Link>
          </Reveal>
        )}
      </div>
    </section>
  )
}

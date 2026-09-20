import type { Metadata } from "next"
import { BannerSection } from "@/components/banner-section"
import { WorkArt } from "@/components/illustrations/hero-art"
import { portfolioItems } from "@/data/portfolio"
import { PortfolioSection } from "@/components/portfolio-section"
import { CtaBand } from "@/components/cta-band"

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Case studies from TechnoSX — AI career platforms, property management, healthcare analytics, energy SaaS, invoicing and music tech.",
}

export default function PortfolioPage() {
  return (
    <>
      <BannerSection
        eyebrow="Our work"
        title="Products we've taken from concept to scale."
        description="Real client platforms across PropTech, HealthTech, FinTech, energy, music and AI."
        breadcrumbItems={[{ label: "Work" }]}
        stats={[
          { value: String(portfolioItems.length), label: "Case studies" },
          { value: "6", label: "Industries" },
          { value: "Global", label: "Delivery" },
        ]}
        illustration={<WorkArt size={320} />}
      />
      <PortfolioSection showHeading={false} />
      <CtaBand
        title="Your product could be next."
        description="Tell us what you're building and we'll tell you how we'd approach it."
        secondary={{ label: "See our services", href: "/services" }}
      />
    </>
  )
}

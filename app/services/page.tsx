import type { Metadata } from "next"
import { BannerSection } from "@/components/banner-section"
import { ServicesSection } from "@/components/services-section"
import { EngagementSection } from "@/components/engagement-section"
import { MethodSection } from "@/components/method-section"
import { TechEcosystem } from "@/components/tech-ecosystem"
import { ServicesOverviewArt } from "@/components/illustrations/hero-art"
import { services } from "@/data/services"
import { CtaBand } from "@/components/cta-band"

export const metadata: Metadata = {
  title: "Services",
  description:
    "Ten services across AI & ML, custom software, web and mobile, cloud and DevOps, data and BI, e-commerce, design, QA, security and database administration.",
}

export default function ServicesPage() {
  return (
    <>
      <BannerSection
        eyebrow="What we do"
        title="One partner, the full product lifecycle."
        description="Concept and strategy, development, launch, scaling and ongoing support — with AI woven through everything we build."
        breadcrumbItems={[{ label: "Services" }]}
        stats={[
          { value: String(services.length), label: "Services" },
          { value: "4", label: "Groups" },
          { value: "Senior", label: "Only delivery" },
        ]}
        illustration={<ServicesOverviewArt size={320} />}
      />
      <ServicesSection grouped showHeading={false} showCta={false} />
      <TechEcosystem />
      <MethodSection />
      <EngagementSection />
      <CtaBand />
    </>
  )
}

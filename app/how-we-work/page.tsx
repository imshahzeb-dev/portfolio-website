import type { Metadata } from "next"
import { BannerSection } from "@/components/banner-section"
import { EngagementArt } from "@/components/illustrations/hero-art"
import { ENGAGEMENT_MODELS } from "@/data/company"
import { EngagementSection } from "@/components/engagement-section"
import { MethodSection } from "@/components/method-section"
import { FAQSection } from "@/components/faq-section"
import { CtaBand } from "@/components/cta-band"
import { getFaqsByCategory } from "@/data/faqs"

export const metadata: Metadata = {
  title: "How We Work",
  description:
    "Four engagement models — full project outsourcing, staff augmentation, dedicated teams and end-to-end product partnerships — plus the method behind every build.",
}

export default function HowWeWorkPage() {
  return (
    <>
      <BannerSection
        eyebrow="How we work"
        title="Engagement that fits how you build."
        description="We offer flexible engagement models to match how you want to build. Most clients start with one and move between them as the work changes."
        breadcrumbItems={[{ label: "How We Work" }]}
        stats={[
          { value: String(ENGAGEMENT_MODELS.length), label: "Engagement models" },
          { value: "4", label: "Method steps" },
          { value: "You", label: "Own the code" },
        ]}
        illustration={<EngagementArt size={320} />}
      />
      <EngagementSection showHeading={false} detailed />
      <MethodSection />
      <FAQSection
        items={[...getFaqsByCategory("Engagement"), ...getFaqsByCategory("Delivery")]}
        eyebrow="Engagement FAQs"
        title="How the working relationship runs."
        description="Scope, staffing, ownership and handover — answered before there's a contract."
      />
      <CtaBand
        title="Not sure which model fits?"
        description="Describe the work and we'll recommend one — including saying when you don't need us at all."
        secondary={{ label: "See our services", href: "/services" }}
      />
    </>
  )
}

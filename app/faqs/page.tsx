import type { Metadata } from "next"
import { BannerSection } from "@/components/banner-section"
import { FaqArt } from "@/components/illustrations/hero-art"
import { faqs } from "@/data/faqs"
import { FAQSection } from "@/components/faq-section"
import { CtaBand } from "@/components/cta-band"

export const metadata: Metadata = {
  title: "FAQs",
  description:
    "Answers on how TechnoSX works — engagement models, senior-only delivery, code ownership, adding AI to an existing product, and on-premise LLM deployment.",
}

export default function FAQsPage() {
  return (
    <>
      <BannerSection
        eyebrow="FAQs"
        title="Questions we get asked most."
        description="Direct answers on how we work, what we charge for, and where we'd tell you not to build something."
        breadcrumbItems={[{ label: "FAQs" }]}
        stats={[
          { value: String(faqs.length), label: "Answered here" },
          { value: "< 1 day", label: "Reply time" },
        ]}
        illustration={<FaqArt size={320} />}
      />
      <FAQSection showHeading={false} />
      <CtaBand
        title="Still have a question?"
        description="Ask it directly. We answer technical questions before there's a contract."
        secondary={{ label: "Read the blog", href: "/blog" }}
      />
    </>
  )
}

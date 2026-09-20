import type { Metadata } from "next"
import { BannerSection } from "@/components/banner-section"
import { ContactForm } from "@/components/contact-form"
import { FAQSection } from "@/components/faq-section"
import { getFaqsByCategory } from "@/data/faqs"
import { ContactArt } from "@/components/illustrations/hero-art"

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell us what you're building. TechnoSX replies to every enquiry within one working day — from a senior engineer, not a salesperson.",
}

export default function ContactPage() {
  return (
    <>
      <BannerSection
        eyebrow="Get in touch"
        title="Tell us what you're building."
        description="We'll tell you exactly how we'd approach it — including the parts we think are wrong, and the parts you don't need to build at all."
        breadcrumbItems={[{ label: "Contact" }]}
        stats={[
          { value: "< 1 day", label: "Reply time" },
          { value: "Engineer", label: "Not a salesperson" },
        ]}
        illustration={<ContactArt size={320} />}
      />
      <ContactForm showHeading={false} />
      <FAQSection
        items={getFaqsByCategory("Working with us")}
        eyebrow="Before you write"
        title="A few things worth knowing."
      />
    </>
  )
}

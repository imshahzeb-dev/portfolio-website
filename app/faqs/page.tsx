import { Navbar } from "@/components/navbar"
import { BannerSection } from "@/components/banner-section"
import { FAQSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"

export default function FAQsPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <BannerSection
        title="FAQs"
        description="Build responsive, mobile-first projects on the web with the world's most popular front-end component library."
        breadcrumbItems={[{ label: "FAQs" }]}
      />
      <FAQSection />
      <Footer />
    </div>
  )
}

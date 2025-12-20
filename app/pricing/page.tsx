import { Navbar } from "@/components/navbar"
import { BannerSection } from "@/components/banner-section"
import { PricingSection } from "@/components/pricing-section"
import { Footer } from "@/components/footer"

export default function PricingPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <BannerSection
        title="Pricing"
        description="Build responsive, mobile-first projects on the web with the world's most popular front-end component library."
        breadcrumbItems={[{ label: "Price" }]}
      />
      <PricingSection />
      <Footer />
    </div>
  )
}

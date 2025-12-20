import { Navbar } from "@/components/navbar"
import { BannerSection } from "@/components/banner-section"
import { PortfolioSection } from "@/components/portfolio-section"
import { Footer } from "@/components/footer"

export default function PortfolioPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <BannerSection
        title="Portfolio"
        description="Explore our recent projects and see how we've helped businesses transform with technology."
        breadcrumbItems={[{ label: "Portfolio" }]}
      />
      <PortfolioSection />
      <Footer />
    </div>
  )
}

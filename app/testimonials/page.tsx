import { Navbar } from "@/components/navbar"
import { BannerSection } from "@/components/banner-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { Footer } from "@/components/footer"

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <BannerSection
        title="Testimonials"
        description="Build responsive, mobile-first projects on the web with the world's most popular front-end component library."
        breadcrumbItems={[{ label: "Testimonials" }]}
      />
      <TestimonialsSection />
      <Footer />
    </div>
  )
}

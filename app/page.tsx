import { ParticlesComponent } from "@/components/particles-component"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <div className="min-h-screen mx-auto text-white overflow-hidden relative">
        <div className="bg-[#196aea]/40">
          <Navbar />
        </div>
        <HeroSection />
        <ParticlesComponent />
      </div>
      <ServicesSection />
      <Footer />
    </>
  )
}

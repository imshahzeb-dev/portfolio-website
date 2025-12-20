import { ParticlesComponent } from "@/components/particles-component"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { PortfolioSection } from "@/components/portfolio-section"
import { PricingSection } from "@/components/pricing-section"
import { TeamSection } from "@/components/team-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { BlogSection } from "@/components/blog-section"
import { FAQSection } from "@/components/faq-section"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <div id="home" className="min-h-screen mx-auto text-white overflow-hidden relative">
        <HeroSection />
        <ParticlesComponent />
      </div>
      <div id="services">
        <ServicesSection />
      </div>
      <div id="portfolio">
        <PortfolioSection />
      </div>
      <div id="pricing">
        <PricingSection />
      </div>
      <div id="team">
        <TeamSection />
      </div>
      <div id="testimonials">
        <TestimonialsSection />
      </div>
      <div id="blog">
        <BlogSection />
      </div>
      <div id="faqs">
        <FAQSection />
      </div>
      <div id="contact">
        <ContactForm />
      </div>
      <Footer />
    </>
  )
}

import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { AiThesisSection } from "@/components/ai-thesis-section"
import { MethodSection } from "@/components/method-section"
import { TechEcosystem } from "@/components/tech-ecosystem"
import { EngagementSection } from "@/components/engagement-section"
import { PortfolioSection } from "@/components/portfolio-section"
import { TeamSection } from "@/components/team-section"
import { BlogSection } from "@/components/blog-section"
import { FAQSection } from "@/components/faq-section"
import { CtaBand } from "@/components/cta-band"

export default function Home() {
  return (
    <>
      <section id="home" className="relative overflow-hidden">
        <HeroSection />
      </section>

      <section id="services" className="cv-section">
        <ServicesSection />
      </section>

      <section id="ai" className="cv-section">
        <AiThesisSection />
      </section>

      <div className="cv-section">
        <TechEcosystem />
      </div>

      <section id="method" className="cv-section">
        <MethodSection />
      </section>

      <section id="how-we-work" className="cv-section">
        <EngagementSection />
      </section>

      <section id="work" className="cv-section">
        <PortfolioSection limit={3} showFilters={false} showCta />
      </section>

      <section id="team" className="cv-section">
        <TeamSection />
      </section>

      <section id="blog" className="cv-section">
        <BlogSection limit={3} showCta />
      </section>

      <section id="faqs" className="cv-section">
        <FAQSection limit={6} showCta />
      </section>

      <div className="cv-section">
        <CtaBand />
      </div>
    </>
  )
}

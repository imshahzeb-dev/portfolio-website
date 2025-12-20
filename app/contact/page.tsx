import { Navbar } from "@/components/navbar"
import { BannerSection } from "@/components/banner-section"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <BannerSection
        title="Contact"
        description="Build responsive, mobile-first projects on the web with the world's most popular front-end component library."
        breadcrumbItems={[{ label: "Contact" }]}
      />
      <ContactForm />
      <Footer />
    </div>
  )
}

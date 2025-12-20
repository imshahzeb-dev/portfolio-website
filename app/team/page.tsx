import { Navbar } from "@/components/navbar"
import { BannerSection } from "@/components/banner-section"
import { TeamSection } from "@/components/team-section"
import { Footer } from "@/components/footer"

export default function TeamPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <BannerSection
        title="Team"
        description="Build responsive, mobile-first projects on the web with the world's most popular front-end component library."
        breadcrumbItems={[{ label: "Team" }]}
      />
      <TeamSection />
      <Footer />
    </div>
  )
}

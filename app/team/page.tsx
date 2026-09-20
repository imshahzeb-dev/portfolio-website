import type { Metadata } from "next"
import { BannerSection } from "@/components/banner-section"
import { TeamSection } from "@/components/team-section"
import { ValuesSection } from "@/components/values-section"
import { CtaBand } from "@/components/cta-band"
import { TEAM_STATEMENT, teamDisciplines } from "@/data/team"
import { TeamArt } from "@/components/illustrations/hero-art"

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Senior-only delivery across AI/ML, product engineering, mobile, design, platform, data, QA and security. A senior team in Islamabad, delivering worldwide.",
}

export default function TeamPage() {
  return (
    <>
      <BannerSection
        eyebrow="Our team"
        title="Senior-only, across every discipline."
        description={TEAM_STATEMENT}
        breadcrumbItems={[{ label: "Our Team" }]}
        stats={[
          { value: String(teamDisciplines.length), label: "Disciplines" },
          { value: "Senior", label: "Only team" },
          { value: "Islamabad", label: "+ Remote" },
        ]}
        illustration={<TeamArt size={320} />}
      />
      <TeamSection showHeading={false} />
      <ValuesSection />
      <CtaBand
        title="Want to work with this team?"
        description="Whether you're hiring us or joining us, start with a conversation."
        secondary={{ label: "Open roles", href: "/careers" }}
      />
    </>
  )
}

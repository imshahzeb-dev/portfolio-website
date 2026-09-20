import type { Metadata } from "next"
import { BannerSection } from "@/components/banner-section"
import { BlogArt } from "@/components/illustrations/hero-art"
import { blogPosts } from "@/data/blog"
import { BlogSection } from "@/components/blog-section"
import { CtaBand } from "@/components/cta-band"

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Engineering notes from TechnoSX on AI architecture, adding AI to existing products, and choosing a software development partner.",
}

export default function BlogPage() {
  return (
    <>
      <BannerSection
        eyebrow="Insights"
        title="Engineering notes, not marketing posts."
        description="What we've learned building AI-native products — written for the people who have to make the architectural decisions."
        breadcrumbItems={[{ label: "Blog" }]}
        stats={[
          { value: String(blogPosts.filter((p) => p.published).length), label: "Articles" },
          { value: "Engineering", label: "Written by" },
        ]}
        illustration={<BlogArt size={320} />}
      />
      <BlogSection showHeading={false} />
      <CtaBand
        title="Got a harder question?"
        description="We answer technical questions before there's a contract. Ask us directly."
        secondary={{ label: "Read the FAQs", href: "/faqs" }}
      />
    </>
  )
}

import { Navbar } from "@/components/navbar"
import { BannerSection } from "@/components/banner-section"
import { BlogSection } from "@/components/blog-section"
import { Footer } from "@/components/footer"

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <BannerSection
        title="Blog"
        description="Stay updated with the latest trends and insights in technology and business solutions."
        breadcrumbItems={[{ label: "Blog" }]}
      />
      <BlogSection />
      <Footer />
    </div>
  )
}

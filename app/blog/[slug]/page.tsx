import { Navbar } from "@/components/navbar"
import { BannerSection } from "@/components/banner-section"
import { Footer } from "@/components/footer"
import { blogPosts } from "@/data/blog"
import Image from "next/image"
import { notFound } from "next/navigation"

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export default function BlogDetailsPage({
  params,
}: {
  params: { slug: string }
}) {
  const post = blogPosts.find((p) => p.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <BannerSection
        title={post.title}
        breadcrumbItems={[{ label: "Blog", href: "/blog" }, { label: post.title }]}
      />

      <section className="pt-[120px] pb-[120px]">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-8">
            <Image
              src={post.image}
              alt={post.title}
              width={800}
              height={500}
              className="w-full h-auto rounded-lg"
            />
          </div>

          <div className="flex items-center gap-6 text-sm text-gray-500 dark:text-gray-400 mb-6">
            <span className="flex items-center gap-2">
              <i className="ph ph-calendar"></i>
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
            <span className="flex items-center gap-2">
              <i className="ph ph-user"></i>
              {post.author}
            </span>
            <span className="flex items-center gap-2">
              <i className="ph ph-folder"></i>
              {post.category}
            </span>
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">
              {post.excerpt}
            </p>

            <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4">
              Introduction
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Technox is a HTML5 template based on Sass and Bootstrap 5 with
              modern and creative multipurpose design you can use Best services &
              IT solutions. This template is perfect for IT companies, tech
              startups, and digital agencies looking to establish a strong online
              presence.
            </p>

            <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4">
              Key Features
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Our platform offers a comprehensive suite of features designed to
              meet the evolving needs of modern businesses:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-6 space-y-2">
              <li>Responsive and mobile-first design</li>
              <li>Modern and clean user interface</li>
              <li>Built with latest web technologies</li>
              <li>SEO optimized for better visibility</li>
              <li>Cross-browser compatibility</li>
              <li>Easy to customize and extend</li>
            </ul>

            <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4">
              Benefits for Your Business
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Implementing the right IT solutions can transform your business
              operations, improve efficiency, and drive growth. Our services are
              designed to help you stay ahead of the competition and achieve your
              business goals.
            </p>

            <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4">
              Conclusion
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              We are committed to delivering exceptional IT solutions that help
              businesses thrive in the digital age. Contact us today to learn
              more about how we can help transform your business with technology.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

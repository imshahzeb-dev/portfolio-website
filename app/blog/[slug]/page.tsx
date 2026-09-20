import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { postArt } from "@/components/illustrations/hero-art"
import { BannerSection } from "@/components/banner-section"
import { CtaBand } from "@/components/cta-band"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { blogPosts, getBlogPost } from "@/data/blog"
import { Icon } from "@/components/icons"

export function generateStaticParams() {
  return blogPosts.filter((post) => post.published).map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPost(slug)
  if (!post) return { title: "Article not found" }

  return {
    title: post.seoTitle.replace(" — TechnoSX", ""),
    description: post.seoDescription,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
      tags: post.tags,
    },
  }
}

function formatDate(value: string) {
  return new Date(value).toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

export default async function BlogDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getBlogPost(slug)
  if (!post || !post.published) notFound()

  const related = blogPosts
    .filter((item) => item.published && item.slug !== post.slug)
    .slice(0, 2)

  return (
    <>
      <BannerSection
        eyebrow={post.category}
        title={post.title}
        breadcrumbItems={[{ label: "Blog", href: "/blog" }, { label: post.title }]}
      />

      <article className="pt-[80px] pb-[120px] bg-[rgb(var(--b1))]">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <div className="mb-8 flex flex-wrap items-center gap-6 text-base text-gray-500 dark:text-gray-400">
                <span className="flex items-center gap-2">
                  <Icon name="calendar" />
                  {formatDate(post.publishedAt)}
                </span>
                <span className="flex items-center gap-2">
                  <Icon name="clock" />
                  {post.readingTime} min read
                </span>
                <span className="flex items-center gap-2">
                  <Icon name="user" />
                  {post.author}
                </span>
              </div>

              <div className="relative mb-10 flex h-[300px] items-center justify-center overflow-hidden rounded-xl border border-[#CEE3FF] bg-[#0A2E6B] dark:border-[#0E2C63] dark:bg-[#09111F] md:h-[380px]">
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:42px_42px]"
                />
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background: `radial-gradient(ellipse 55% 60% at 50% 55%, ${post.accent}33, transparent 70%)`,
                  }}
                />
                <span className="relative">
                  {(() => {
                    const { Art } = postArt(post.slug)
                    return <Art color={post.accent} size={380} />
                  })()}
                </span>
              </div>

              <p className="mb-10 border-l-4 border-[#FF9958] pl-5 text-xl leading-[165%] text-gray-700 dark:text-gray-200">
                {post.excerpt}
              </p>
            </Reveal>

            {post.sections.map((section, index) => (
              <Reveal key={index} className="mb-10">
                {section.heading && (
                  <h2 className="fs-three font-semibold text-gray-900 dark:text-white mb-5">
                    {section.heading}
                  </h2>
                )}
                {section.body.map((paragraph, pIndex) => (
                  <p
                    key={pIndex}
                    className="mb-5 text-lg leading-[175%] text-gray-600 dark:text-gray-300"
                  >
                    {paragraph}
                  </p>
                ))}
                {section.list && (
                  <ul className="mb-5 space-y-3">
                    {section.list.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <Icon name="check-circle" className="mt-1 flex-shrink-0 text-xl text-[#0059E8]" />
                        <span className="text-lg text-gray-600 dark:text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </Reveal>
            ))}

            <Reveal className="mt-12 flex flex-wrap items-center gap-3 border-t border-[#CEE3FF] dark:border-[#0E2C63] pt-8">
              <span className="font-medium text-gray-900 dark:text-white">Tagged:</span>
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[#CEE3FF] dark:border-[#0E2C63] px-4 py-1.5 text-sm text-gray-600 dark:text-gray-300"
                >
                  {tag}
                </span>
              ))}
            </Reveal>
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="pb-[120px] bg-[#F5F9FF] dark:bg-[#0B2451] pt-[80px]">
          <div className="container mx-auto px-4">
            <SectionHeading eyebrow="Keep reading" title="Related articles" className="mb-10" />
            <div className="mx-auto grid max-w-4xl grid-cols-1 md:grid-cols-2 gap-6">
              {related.map((item, index) => (
                <Reveal key={item.slug} delay={index * 0.08} className="h-full">
                  <Link
                    href={`/blog/${item.slug}`}
                    className="group flex h-full flex-col overflow-hidden rounded-xl border border-[#CEE3FF] dark:border-[#0E2C63] bg-white dark:bg-[#09111F] transition-all hover:border-[#0059E8] hover:shadow-xl"
                  >
                    <span className="relative flex h-44 items-center justify-center overflow-hidden bg-[#0A2E6B] dark:bg-[#09111F]">
                      <span
                        aria-hidden
                        className="pointer-events-none absolute inset-0"
                        style={{
                          background: `radial-gradient(ellipse 60% 60% at 50% 55%, ${item.accent}26, transparent 70%)`,
                        }}
                      />
                      <span className="relative transition-transform duration-500 group-hover:scale-105">
                        {(() => {
                          const { Art } = postArt(item.slug)
                          return <Art color={item.accent} size={190} />
                        })()}
                      </span>
                    </span>
                    <div className="flex flex-1 flex-col p-6">
                      <span className="mb-2 text-sm font-semibold uppercase tracking-[0.12em] text-[#FF9958]">
                        {item.category}
                      </span>
                      <h3 className="fs-six font-semibold text-gray-900 dark:text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="mb-4 flex-1 text-base text-gray-600 dark:text-gray-300 line-clamp-3">
                        {item.excerpt}
                      </p>
                      <span className="inline-flex items-center gap-2 font-medium text-[#0059E8] dark:text-[#4d92ff] transition-all group-hover:gap-3">
                        Read article
                        <Icon name="arrow-right" />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBand secondary={{ label: "All articles", href: "/blog" }} />
    </>
  )
}

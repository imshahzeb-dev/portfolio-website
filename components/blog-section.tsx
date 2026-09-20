"use client"

import Link from "next/link"
import { postArt } from "@/components/illustrations/hero-art"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { blogPosts } from "@/data/blog"
import { Icon } from "@/components/icons"

interface BlogSectionProps {
  showHeading?: boolean
  limit?: number
  showCta?: boolean
}

function formatDate(value: string) {
  return new Date(value).toLocaleDateString("en-GB", {
    year: "numeric",
    month: "short",
    day: "numeric",
  })
}

export function BlogSection({ showHeading = true, limit, showCta = false }: BlogSectionProps) {
  const published = blogPosts
    .filter((post) => post.published)
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())

  const visible = limit ? published.slice(0, limit) : published

  return (
    <section className="pt-[120px] pb-[120px] bg-[#F5F9FF] dark:bg-[#0B2451]">
      <div className="container mx-auto px-4">
        {showHeading && (
          <SectionHeading
            eyebrow="Insights"
            title="Engineering notes, not marketing posts."
            description="What we've learned building AI-native products — written for the people who have to make the architectural decisions."
            className="mb-12 lg:mb-16"
          />
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {visible.map((post, index) => (
            <Reveal key={post.slug} delay={index * 0.08} className="h-full">
              <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-[#CEE3FF] dark:border-[#0E2C63] bg-white dark:bg-[#09111F] transition-all duration-300 hover:border-[#0059E8] hover:shadow-xl">
                <Link
                  href={`/blog/${post.slug}`}
                  className="relative flex h-48 items-center justify-center overflow-hidden bg-[#0A2E6B] dark:bg-[#09111F]"
                >
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:32px_32px]"
                  />
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-0"
                    style={{
                      background: `radial-gradient(ellipse 60% 60% at 50% 55%, ${post.accent}26, transparent 70%)`,
                    }}
                  />
                  <span className="relative transition-transform duration-500 group-hover:scale-105">
                    {(() => {
                      const { Art } = postArt(post.slug)
                      return <Art color={post.accent} size={214} />
                    })()}
                  </span>
                  <span className="absolute left-4 top-4 rounded bg-[#FF9958] px-3 py-1 text-sm font-semibold text-white">
                    {post.category}
                  </span>
                </Link>

                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-3 flex flex-wrap items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                    <span className="flex items-center gap-1.5">
                      <Icon name="calendar" />
                      {formatDate(post.publishedAt)}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Icon name="clock" />
                      {post.readingTime} min read
                    </span>
                  </div>

                  <h3 className="fs-six font-semibold text-gray-900 dark:text-white mb-3 line-clamp-2 transition-colors group-hover:text-[#0059E8] dark:group-hover:text-[#FF9958]">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>
                  <p className="mb-5 flex-1 text-base text-gray-600 dark:text-gray-300 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 font-medium text-[#0059E8] dark:text-[#4d92ff] transition-all hover:gap-3"
                  >
                    Read article
                    <Icon name="arrow-right" />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {showCta && (
          <Reveal className="mt-12 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 rounded-full bg-[#0059E8] px-8 py-3.5 font-medium text-white transition-all duration-300 hover:gap-3 hover:bg-[#0046BA]"
            >
              All articles
              <Icon name="arrow-right" />
            </Link>
          </Reveal>
        )}
      </div>
    </section>
  )
}

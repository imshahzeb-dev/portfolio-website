"use client"

import { blogPosts } from "@/data/blog"
import Image from "next/image"
import Link from "next/link"

export function BlogSection() {
  return (
    <section className="pt-[120px] pb-[120px]">
      <div className="container mx-auto px-4">
        <div className="process_heading w-full text-center mb-8 lg:mb-15">
          <span className="text-lg font-semibold text-orange-400 mb-2 block">
            Our Blog
          </span>
          <h2 className="text-4xl font-semibold text-gray-900 dark:text-white mb-3 lg:mb-6">
            Latest News & Articles
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Stay updated with the latest trends and insights in technology and
            business solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8 lg:mt-15">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="group bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded text-sm font-semibold">
                  {post.category}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
                  <span className="flex items-center gap-1">
                    <i className="ph ph-calendar"></i>
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </span>
                  <span className="flex items-center gap-1">
                    <i className="ph ph-user"></i>
                    {post.author}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 line-clamp-2 group-hover:text-blue-500 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-600 font-medium transition-colors"
                >
                  Read More
                  <i className="ph ph-arrow-right"></i>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

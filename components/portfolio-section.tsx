"use client"

import { portfolioItems } from "@/data/portfolio"
import Image from "next/image"
import { useState } from "react"

type CategoryType = "All" | "Branding" | "Design" | "Development" | "Solution"

export function PortfolioSection() {
  const [activeCategory, setActiveCategory] =
    useState<CategoryType>("All")

  const categories: CategoryType[] = [
    "All",
    "Branding",
    "Design",
    "Development",
    "Solution",
  ]

  const filteredItems =
    activeCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory)

  return (
    <section className="pt-[120px] pb-[120px]">
      <div className="container mx-auto px-4">
        <div className="process_heading w-full text-center mb-8 lg:mb-15">
          <span className="text-lg font-semibold text-orange-400 mb-2 block">
            Our Portfolio
          </span>
          <h2 className="text-4xl font-semibold text-gray-900 dark:text-white mb-3 lg:mb-6">
            Our Recent Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Build responsive, mobile-first projects on the web with the world's
            most popular front-end component library.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-8 lg:mb-15">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full text-lg font-medium transition-all ${
                activeCategory === category
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-lg cursor-pointer"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={400}
                height={300}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-orange-400 text-sm font-semibold mb-1">
                  {item.category}
                </span>
                <h3 className="text-white text-xl font-semibold mb-2">
                  {item.title}
                </h3>
                {item.description && (
                  <p className="text-gray-200 text-sm">{item.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

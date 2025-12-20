"use client"

import { Breadcrumb } from "./breadcrumb"

interface BannerSectionProps {
  title: string
  description?: string
  breadcrumbItems: { label: string; href?: string }[]
}

export function BannerSection({
  title,
  description,
  breadcrumbItems,
}: BannerSectionProps) {
  return (
    <>
      {/* Banner */}
      <div className="banner relative h-[300px] md:h-[400px] bg-gradient-to-r from-blue-900 to-blue-700">
        <div className="banner_bg_color opacity-75 flex items-center justify-center h-full">
          <div className="process_heading w-full text-center px-4">
            <h4 className="text-3xl md:text-5xl text-orange-400 font-semibold mb-2">
              {title}
            </h4>
            {description && (
              <span className="text-white text-lg block max-w-2xl mx-auto">
                {description}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <Breadcrumb items={breadcrumbItems} />
    </>
  )
}

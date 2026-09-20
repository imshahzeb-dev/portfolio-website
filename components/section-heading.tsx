"use client"

import { cn } from "@/lib/utils"
import { Reveal } from "@/components/reveal"

interface SectionHeadingProps {
  /** Small orange label above the title. */
  eyebrow?: string
  title: string
  description?: string
  /** Light theme sits on the dark blue sections; default sits on page background. */
  tone?: "default" | "onDark"
  align?: "center" | "left"
  className?: string
}

/**
 * The site's standard section header: orange eyebrow → 40px heading → lede.
 * Extracted so every section shares the same rhythm.
 */
export function SectionHeading({
  eyebrow,
  title,
  description,
  tone = "default",
  align = "center",
  className,
}: SectionHeadingProps) {
  const onDark = tone === "onDark"

  return (
    <Reveal
      className={cn(
        "process_heading w-full",
        align === "center" ? "text-center mx-auto" : "text-left",
        className
      )}
    >
      {eyebrow && (
        <span className="text-lg font-semibold text-[#FF9958] mb-2 block">{eyebrow}</span>
      )}
      <h2
        className={cn(
          "fs-two font-semibold mb-3 lg:mb-6",
          onDark ? "text-white" : "text-gray-900 dark:text-white"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "text-lg max-w-2xl",
            align === "center" && "mx-auto",
            onDark ? "text-white/80" : "text-gray-600 dark:text-gray-300"
          )}
        >
          {description}
        </p>
      )}
    </Reveal>
  )
}

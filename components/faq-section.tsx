"use client"

import { useState } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { faqs as defaultFaqs } from "@/data/faqs"
import { Icon } from "@/components/icons"

interface FaqItem {
  question: string
  answer: string
}

interface FAQSectionProps {
  /** Defaults to the general FAQ list; service pages pass their own. */
  items?: FaqItem[]
  eyebrow?: string
  title?: string
  description?: string
  showHeading?: boolean
  limit?: number
  showCta?: boolean
}

export function FAQSection({
  items,
  eyebrow = "FAQs",
  title = "Questions we get asked most.",
  description = "If yours isn't here, ask it directly — we answer technical questions before there's a contract.",
  showHeading = true,
  limit,
  showCta = false,
}: FAQSectionProps) {
  const source: FaqItem[] = items ?? defaultFaqs
  const visible = limit ? source.slice(0, limit) : source
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="pt-[120px] pb-[120px] bg-[rgb(var(--b1))]">
      <div className="container mx-auto px-4">
        {showHeading && (
          <SectionHeading
            eyebrow={eyebrow}
            title={title}
            description={description}
            className="mb-12 lg:mb-16"
          />
        )}

        <div className="mx-auto max-w-4xl space-y-4">
          {visible.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <Reveal key={faq.question} delay={Math.min(index, 6) * 0.04}>
                <div
                  className={cn(
                    "rounded-xl border transition-all duration-300",
                    isOpen
                      ? "border-[#0059E8] bg-white dark:bg-[#0B2451] shadow-lg"
                      : "border-[#CEE3FF] dark:border-[#0E2C63] bg-white dark:bg-[#0B2451]"
                  )}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 p-5 text-left md:p-7"
                  >
                    <span className="flex items-center gap-4">
                      <span
                        className={cn(
                          "flex h-9 w-9 flex-shrink-0 items-center justify-center rounded transition-colors",
                          isOpen ? "bg-[#0059E8]" : "bg-[#F5F9FF] dark:bg-[#0E2C63]"
                        )}
                      >
                        <Icon name="question" className={cn(
                            "text-lg",
                            isOpen ? "text-white": "text-[#0059E8]")} />
                      </span>
                      <span className="fs-six font-semibold text-gray-900 dark:text-white">
                        {faq.question}
                      </span>
                    </span>
                    <Icon name="caret-down" className={cn(
                        "flex-shrink-0 text-xl text-[#0059E8] transition-transform duration-300",
                        isOpen && "rotate-180")} />
                  </button>

                  <div
                    className={cn(
                      "grid overflow-hidden transition-all duration-300",
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-6 pl-[4.25rem] text-base leading-[165%] text-gray-600 dark:text-gray-300 md:px-7 md:pl-[5.25rem]">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>

        {showCta && (
          <Reveal className="mt-12 text-center">
            <Link
              href="/faqs"
              className="inline-flex items-center gap-2 rounded-full bg-[#0059E8] px-8 py-3.5 font-medium text-white transition-all duration-300 hover:gap-3 hover:bg-[#0046BA]"
            >
              All FAQs
              <Icon name="arrow-right" />
            </Link>
          </Reveal>
        )}
      </div>
    </section>
  )
}

"use client"

import Link from "next/link"
import { Reveal } from "@/components/reveal"

interface CtaBandProps {
  title?: string
  description?: string
  primary?: { label: string; href: string }
  secondary?: { label: string; href: string }
}

/**
 * Closing call to action. Sits directly above the footer on every page so no
 * page ends on a dead end.
 */
export function CtaBand({
  title = "Ready to build something that thinks?",
  description = "Tell us what you're building. We'll tell you exactly how we'd approach it — including the parts we think are wrong.",
  primary = { label: "Book a discovery call", href: "/contact" },
  secondary = { label: "See our work", href: "/portfolio" },
}: CtaBandProps) {
  return (
    <section className="pt-[60px] pb-[60px] bg-[#0A2E6B] dark:bg-[#0B2451]">
      <div className="container mx-auto px-4">
        <Reveal className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0E3881] to-[#0A2E6B] px-6 py-10 md:px-14 md:py-14">
          <div className="flex flex-col lg:flex-row lg:items-center gap-8 justify-between">
            <div className="max-w-2xl">
              <h2 className="fs-three font-semibold text-white mb-3">{title}</h2>
              <p className="text-white/80 text-lg">{description}</p>
            </div>
            <div className="flex flex-wrap gap-3 flex-shrink-0">
              <Link
                href={primary.href}
                className="bg-[#0059E8] hover:bg-[#0046BA] text-white px-7 py-3 rounded-full font-medium transition-all duration-300"
              >
                {primary.label}
              </Link>
              <Link
                href={secondary.href}
                className="border border-white/40 hover:border-white hover:bg-white/10 text-white px-7 py-3 rounded-full font-medium transition-all duration-300"
              >
                {secondary.label}
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

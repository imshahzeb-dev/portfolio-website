import Link from "next/link"
import { PRIMARY_NAV } from "@/data/company"

export const metadata = { title: "Page not found" }

/**
 * 404. Lives at the app root so it inherits the navbar and footer from the
 * root layout — a missing page is still a page with a way out.
 */
export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-[#0A2E6B] dark:bg-[#09111F] pt-[180px] pb-[140px]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,89,232,0.4),transparent_60%)]"
      />
      <div className="container relative mx-auto px-4 text-center">
        <span className="mb-4 block text-sm font-semibold uppercase tracking-[0.2em] text-[#FF9958]">
          Error 404
        </span>
        <h1 className="display-four font-bold text-white mb-5">This page doesn't exist.</h1>
        <p className="mx-auto mb-10 max-w-xl text-lg text-white/75">
          The link may be out of date, or the page may have moved. Here's where everything lives.
        </p>

        <div className="mb-12 flex flex-wrap justify-center gap-3">
          <Link
            href="/"
            className="rounded-full bg-[#0059E8] px-7 py-3.5 font-medium text-white transition-all hover:bg-[#0046BA]"
          >
            Back to home
          </Link>
          <Link
            href="/contact"
            className="rounded-full border border-white/40 px-7 py-3.5 font-medium text-white transition-all hover:border-white hover:bg-white/10"
          >
            Contact us
          </Link>
        </div>

        <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
          {PRIMARY_NAV.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white/70 transition-colors hover:text-[#FF9958]"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { SiteLogo } from "@/components/site-logo"
import { MORE_NAV, PRIMARY_CTA, PRIMARY_NAV } from "@/data/company"
import { SERVICE_GROUPS, services } from "@/data/services"
import { Icon } from "@/components/icons"
import { IconTile } from "@/components/icon-tile"

export function Navbar() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)

  // Only the home page has a transparent-over-hero navbar; every other page
  // sits on a banner, so the solid background is correct from the start.
  const isHome = pathname === "/"
  const solid = isScrolled || !isHome || isMenuOpen

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close the mobile drawer whenever the route changes.
  useEffect(() => {
    setIsMenuOpen(false)
    setMobileServicesOpen(false)
  }, [pathname])

  const core = services.find((s) => s.group === "core")

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/")

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        solid ? "bg-[#0A2E6B] shadow-lg" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 py-4 lg:py-5 flex justify-between items-center">
        <Link href="/" aria-label="TechnoSX — home" className="text-white">
          <SiteLogo size={34} />
        </Link>

        {/* ── Desktop nav ───────────────────────────────────────────────── */}
        <nav className="hidden lg:flex items-center gap-7">
          <Link
            href="/"
            className={cn(
              "transition-colors duration-300",
              isActive("/") ? "text-[#FF9958] font-semibold" : "text-white hover:text-[#FF9958]"
            )}
          >
            Home
          </Link>

          {/* Services mega-menu */}
          <div className="group relative">
            <Link
              href="/services"
              aria-haspopup="true"
              className={cn(
                "flex items-center gap-1 transition-colors duration-300",
                isActive("/services")
                  ? "text-[#FF9958] font-semibold"
                  : "text-white hover:text-[#FF9958]"
              )}
            >
              Services
              <Icon
                name="caret-down"
                size={14}
                className="transition-transform duration-300 group-hover:rotate-180 group-focus-within:rotate-180"
              />
            </Link>

            {/* Opens on hover and on keyboard focus — hover alone left the whole
                menu unreachable by keyboard. */}
            {/* Anchored to the viewport, not the trigger: centring on the
                trigger pushed the panel off-screen at ~1024px, where the nav
                sits further left. The pt-4 band keeps the hover bridge. */}
            <div
              className={cn(
                "fixed left-1/2 top-[62px] -translate-x-1/2 pt-4",
                "invisible translate-y-1 opacity-0 transition-all duration-300",
                "group-hover:visible group-hover:translate-y-0 group-hover:opacity-100",
                "group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100"
              )}
            >
              <div className="w-[min(880px,calc(100vw-2rem))] overflow-hidden rounded-2xl border border-[#CEE3FF] bg-white shadow-2xl dark:border-[#0E2C63] dark:bg-[#0B2451]">
                <div className="grid grid-cols-12">
                  {/* Featured: the core service, merchandised rather than left
                      as a one-item column with dead space beside it. */}
                  <div className="col-span-4 border-r border-[#CEE3FF] bg-[#F5F9FF] p-6 dark:border-[#0E2C63] dark:bg-[#0E2C63]/40">
                    <span className="mb-4 block text-xs font-semibold uppercase tracking-[0.14em] text-[#FF9958]">
                      {SERVICE_GROUPS[0]?.label}
                    </span>
                    {core && (
                      <Link href={`/services/${core.slug}`} className="group/f block">
                        <IconTile name={core.icon} tone="accent" interactive={false} className="mb-4" />
                        <span className="mb-1.5 block fs-six font-semibold text-gray-900 transition-colors group-hover/f:text-[#0059E8] dark:text-white dark:group-hover/f:text-[#FF9958]">
                          {core.title}
                        </span>
                        <span className="mb-4 block text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                          {core.description}
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-sm font-medium text-[#0059E8] transition-all group-hover/f:gap-2.5 dark:text-[#6BA5FF]">
                          Explore
                          <Icon name="arrow-right" size={14} />
                        </span>
                      </Link>
                    )}
                  </div>

                  {/* The three remaining groups, one column each */}
                  <div className="col-span-8 grid grid-cols-3 gap-x-4 p-6">
                    {SERVICE_GROUPS.slice(1).map((group) => (
                      <div key={group.key}>
                        <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.14em] text-[#FF9958]">
                          {group.label}
                        </span>
                        <ul className="space-y-0.5">
                          {services
                            .filter((s) => s.group === group.key)
                            .map((service) => (
                              <li key={service.slug}>
                                <Link
                                  href={`/services/${service.slug}`}
                                  className="group/item flex items-center gap-2.5 rounded-lg px-2 py-2 transition-colors hover:bg-[#F5F9FF] dark:hover:bg-[#0E2C63]"
                                >
                                  <Icon
                                    name={service.icon}
                                    size={18}
                                    className="shrink-0 text-[#0059E8] dark:text-[#6BA5FF]"
                                  />
                                  <span className="text-sm font-medium text-gray-900 transition-colors group-hover/item:text-[#0059E8] dark:text-white dark:group-hover/item:text-[#FF9958]">
                                    {service.shortTitle}
                                  </span>
                                </Link>
                              </li>
                            ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between border-t border-[#CEE3FF] bg-[#F5F9FF]/60 px-6 py-3.5 dark:border-[#0E2C63] dark:bg-[#09111F]/40">
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2 text-sm font-medium text-[#0059E8] transition-all hover:gap-3 dark:text-[#FF9958]"
                  >
                    All {services.length} services
                    <Icon name="arrow-right" size={15} />
                  </Link>
                  <Link
                    href="/how-we-work"
                    className="text-sm text-gray-600 transition-colors hover:text-[#0059E8] dark:text-gray-300 dark:hover:text-[#FF9958]"
                  >
                    How we work
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {PRIMARY_NAV.filter((l) => l.href !== "/services").map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "transition-colors duration-300",
                isActive(link.href)
                  ? "text-[#FF9958] font-semibold"
                  : "text-white hover:text-[#FF9958]"
              )}
            >
              {link.label}
            </Link>
          ))}

          {/* More dropdown */}
          <div className="relative group">
            <button
              className={cn(
                "flex items-center gap-1 transition-colors duration-300",
                MORE_NAV.some((l) => isActive(l.href))
                  ? "text-[#FF9958] font-semibold"
                  : "text-white hover:text-[#FF9958]"
              )}
            >
              More
              <Icon name="caret-down" className="text-sm" />
            </button>
            <div className="absolute right-0 top-full pt-4 opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300">
              <div className="w-52 rounded-xl border border-[#CEE3FF] dark:border-[#0E2C63] bg-white dark:bg-[#0B2451] shadow-2xl py-2">
                {MORE_NAV.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "block px-4 py-2 transition-colors",
                      isActive(link.href)
                        ? "text-[#0059E8] dark:text-[#FF9958] font-semibold bg-[#F5F9FF] dark:bg-[#0E2C63]"
                        : "text-gray-700 dark:text-gray-200 hover:bg-[#F5F9FF] dark:hover:bg-[#0E2C63]"
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href={PRIMARY_CTA.href}
            className="hidden md:inline-block bg-[#0059E8] hover:bg-[#0046BA] text-white px-6 py-3 rounded-full font-medium transition-all duration-300"
          >
            {PRIMARY_CTA.label}
          </Link>
          <button
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            className="w-11 h-11 rounded-full bg-[#0059E8] hover:bg-[#0046BA] flex items-center justify-center lg:hidden transition-colors"
          >
            <Icon name={isMenuOpen ? "x" : "list"} size={22} className="text-white" />
          </button>
        </div>
      </div>

      {/* ── Mobile drawer ───────────────────────────────────────────────── */}
      {isMenuOpen && (
        <div className="lg:hidden bg-[#0A2E6B] border-t border-white/10 max-h-[calc(100vh-72px)] overflow-y-auto">
          <nav className="container mx-auto px-4 py-4 flex flex-col">
            <Link href="/" className="py-3 text-white border-b border-white/10">
              Home
            </Link>

            <button
              onClick={() => setMobileServicesOpen((open) => !open)}
              className="py-3 text-white border-b border-white/10 flex items-center justify-between"
              aria-expanded={mobileServicesOpen}
            >
              Services
              <Icon name="caret-down" className={cn(
                  "transition-transform",
                  mobileServicesOpen && "rotate-180")} />
            </button>
            {mobileServicesOpen && (
              <div className="pl-3 py-2 border-b border-white/10">
                <Link href="/services" className="block py-2 text-[#FF9958] font-medium">
                  All services
                </Link>
                {services.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="flex items-center gap-2 py-2 text-white/80 hover:text-white"
                  >
                    <Icon name={service.icon} size={18} className="text-[#4d92ff]" />
                    {service.shortTitle}
                  </Link>
                ))}
              </div>
            )}

            {[...PRIMARY_NAV.filter((l) => l.href !== "/services"), ...MORE_NAV].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "py-3 border-b border-white/10",
                  isActive(link.href) ? "text-[#FF9958] font-semibold" : "text-white"
                )}
              >
                {link.label}
              </Link>
            ))}

            <Link
              href={PRIMARY_CTA.href}
              className="mt-5 mb-2 bg-[#0059E8] hover:bg-[#0046BA] text-white text-center px-6 py-3 rounded-full font-medium transition-colors"
            >
              {PRIMARY_CTA.label}
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

"use client"

import Link from "next/link"
import { SiteLogo } from "@/components/site-logo"
import {
  COMPANY,
  CONTACT,
  LEGAL_NAV,
  MORE_NAV,
  PRIMARY_NAV,
  SOCIALS,
} from "@/data/company"
import { services } from "@/data/services"
import { Icon } from "@/components/icons"

/**
 * Site footer. Rendered once in the root layout, so every route — including
 * 404s and dynamic detail pages — ends with it.
 */
export function Footer() {
  const year = new Date().getFullYear()
  const companyLinks = [...PRIMARY_NAV.filter((l) => l.href !== "/services"), ...MORE_NAV]

  return (
    <footer className="bg-[#0A2E6B] dark:bg-[#071528]">
      <div className="pt-[80px] pb-[40px]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10">
            {/* Company */}
            <div>
              <Link href="/" aria-label="TechnoSX — home" className="text-white inline-block mb-5">
                <SiteLogo size={38} animated={false} />
              </Link>
              <p className="text-white/75 text-base leading-[160%] mb-6">
                {COMPANY.oneLiner}
              </p>
              <Link
                href="/contact"
                className="inline-block px-6 py-3 bg-[#0059E8] hover:bg-[#0046BA] text-white rounded-full font-medium transition-all"
              >
                Book a call
              </Link>

              {/* <div className="mt-8">
                <h4 className="fs-six text-white mb-3">Follow us</h4>
                <div className="flex flex-wrap gap-3">
                  {SOCIALS.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="w-11 h-11 rounded-full bg-white/10 hover:bg-[#0059E8] flex justify-center items-center transition-all"
                    >
                      <Icon name={social.icon} size={18} className="text-white" />
                    </a>
                  ))}
                </div>
              </div> */}
            </div>

            {/* Services */}
            <div>
              <h4 className="fs-five text-white mb-5">Services</h4>
              <ul className="space-y-2.5">
                {services.map((service) => (
                  <li key={service.slug}>
                    <Link
                      href={`/services/${service.slug}`}
                      className="flex items-center gap-2 text-white/75 hover:text-[#FF9958] transition-colors"
                    >
                      <Icon name="caret-right" className="text-xs text-[#0059E8]" />
                      <span className="text-base">{service.shortTitle}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company links */}
            <div>
              <h4 className="fs-five text-white mb-5">Company</h4>
              <ul className="space-y-2.5">
                {companyLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="flex items-center gap-2 text-white/75 hover:text-[#FF9958] transition-colors"
                    >
                      <Icon name="caret-right" className="text-xs text-[#0059E8]" />
                      <span className="text-base">{link.label}</span>
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/how-we-work"
                    className="flex items-center gap-2 text-white/75 hover:text-[#FF9958] transition-colors"
                  >
                    <Icon name="caret-right" className="text-xs text-[#0059E8]" />
                    <span className="text-base">Engagement models</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="fs-five text-white mb-5">Get in touch</h4>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <Icon name="map-pin" className="text-[#FF9958] text-2xl flex-shrink-0" />
                  <span className="text-white/75 text-base">
                    {CONTACT.address.join(", ")}
                  </span>
                </li>
                <li className="flex gap-3">
                  <Icon name="envelope" className="text-[#FF9958] text-2xl flex-shrink-0" />
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="text-white/75 hover:text-white text-base transition-colors"
                  >
                    {CONTACT.email}
                  </a>
                </li>
                <li className="flex gap-3">
                  <Icon name="phone" className="text-[#FF9958] text-2xl flex-shrink-0" />
                  <a
                    href={`tel:${CONTACT.phone.replace(/[^+\d]/g, "")}`}
                    className="text-white/75 hover:text-white text-base transition-colors"
                  >
                    {CONTACT.phone}
                  </a>
                </li>
                <li className="flex gap-3">
                  <Icon name="clock" className="text-[#FF9958] text-2xl flex-shrink-0" />
                  <span className="text-white/75 text-base">{CONTACT.hours}</span>
                </li>
              </ul>

              <p className="mt-6 text-white/50 text-sm leading-relaxed">
                Founded {COMPANY.founded} · {COMPANY.location} · {COMPANY.delivery} delivery
              </p>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              © {year} {COMPANY.legalName}. All rights reserved.
            </p>
            <div className="flex gap-6">
              {LEGAL_NAV.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white/60 hover:text-white text-sm transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

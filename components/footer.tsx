"use client"

import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <section className="bg-[rgb(var(--h1))] footer_section">
      <div className="pt-[120px] pb-[120px]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {/* Company Info Column */}
            <div className="col-span-1 xl:col-span-1">
              <div className="mb-3 lg:mb-6">
                <Image
                  src="/assets/images/logo.png"
                  alt="logo"
                  width={150}
                  height={40}
                />
              </div>
              <p className="text-white text-lg leading-[130%] mb-8">
                We have 14+ years experience. Helping you overcome technology
                challenges. Join the thriving technox it solution agency.
              </p>
              <div className="my-3 sm:my-5 md:my-10">
                <button className="px-6 py-3 bg-[#0059E8] hover:bg-[#0046BA] text-white rounded-full hover:shadow-lg transition-all">
                  Request demo
                </button>
              </div>
              <div>
                <h4 className="text-2xl text-white mb-2 md:mb-4">
                  Our Social info
                </h4>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="#"
                    className="w-12 h-12 rounded-full bg-white/10 hover:bg-[#0059E8] flex justify-center items-center transition-all"
                  >
                    <i className="ph ph-facebook-logo text-xl text-white"></i>
                  </Link>
                  <Link
                    href="#"
                    className="w-12 h-12 rounded-full bg-white/10 hover:bg-[#0059E8] flex justify-center items-center transition-all"
                  >
                    <i className="ph ph-x-logo text-xl text-white"></i>
                  </Link>
                  <Link
                    href="#"
                    className="w-12 h-12 rounded-full bg-white/10 hover:bg-[#0059E8] flex justify-center items-center transition-all"
                  >
                    <i className="ph ph-linkedin-logo text-xl text-white"></i>
                  </Link>
                  <Link
                    href="#"
                    className="w-12 h-12 rounded-full bg-white/10 hover:bg-[#0059E8] flex justify-center items-center transition-all"
                  >
                    <i className="ph ph-instagram-logo text-xl text-white"></i>
                  </Link>
                  <Link
                    href="#"
                    className="w-12 h-12 rounded-full bg-white/10 hover:bg-[#0059E8] flex justify-center items-center transition-all"
                  >
                    <i className="ph ph-youtube-logo text-xl text-white"></i>
                  </Link>
                </div>
              </div>
            </div>

            {/* Services Column */}
            <div className="col-span-1">
              <h4 className="text-2xl text-white mb-3 md:mb-5">Our Services</h4>
              <div className="space-y-2 md:space-y-3">
                {[
                  "Web Design",
                  "App Development",
                  "Cloud Services",
                  "Domain & Hosting",
                  "SEO Optimization",
                  "Social Media",
                  "Data Security",
                  "IT Consulting",
                ].map((service, index) => (
                  <Link
                    key={index}
                    href="/services"
                    className="flex items-center gap-2 hover:text-blue-400 transition-colors"
                  >
                    <Image
                      src="/assets/images/point.png"
                      alt="point"
                      width={16}
                      height={16}
                    />
                    <span className="text-lg text-white font-medium">
                      {service}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Information Column */}
            <div className="col-span-1">
              <h4 className="text-2xl text-white mb-3 md:mb-5">Information</h4>
              <div className="space-y-2 md:space-y-3">
                {[
                  { name: "About Us", href: "/about" },
                  { name: "Team", href: "/team" },
                  { name: "Services", href: "/services" },
                  { name: "Portfolio", href: "/portfolio" },
                  { name: "Blog", href: "/blog" },
                  { name: "Contact", href: "/contact" },
                  { name: "FAQs", href: "/faqs" },
                  { name: "Pricing", href: "/pricing" },
                ].map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    className="flex items-center gap-2 hover:text-blue-400 transition-colors"
                  >
                    <Image
                      src="/assets/images/point.png"
                      alt="point"
                      width={16}
                      height={16}
                    />
                    <span className="text-lg text-white font-medium">
                      {link.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact Column */}
            <div className="col-span-1">
              <h4 className="text-2xl text-white mb-3 md:mb-5">Contact Us</h4>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <i className="ph ph-map-pin text-blue-400 text-2xl flex-shrink-0"></i>
                  <p className="text-white text-lg">
                    123 Main Street, Suite 100
                    <br />
                    New York, NY 10001
                  </p>
                </div>
                <div className="flex gap-3">
                  <i className="ph ph-phone text-blue-400 text-2xl flex-shrink-0"></i>
                  <p className="text-white text-lg">+1 (555) 123-4567</p>
                </div>
                <div className="flex gap-3">
                  <i className="ph ph-envelope text-blue-400 text-2xl flex-shrink-0"></i>
                  <p className="text-white text-lg">info@technox.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-white/70 text-base">
                © 2024 TechnoxIt. All rights reserved.
              </p>
              <div className="flex gap-6">
                <Link
                  href="/terms"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Terms & Conditions
                </Link>
                <Link
                  href="/privacy"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

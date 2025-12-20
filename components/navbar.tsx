"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

export function Navbar() {
    const pathname = usePathname()
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const menuItems = [
        { name: "About", href: "/about" },
        { name: "Portfolio", href: "/portfolio" },
        { name: "Pricing", href: "/pricing" },
        { name: "FAQs", href: "/faqs" },
        { name: "Contact", href: "/contact" },
        { name: "Terms & Conditions", href: "/terms" },
        { name: "Privacy Policy", href: "/privacy" },
    ]

    return (
        <header className="container overflow-x-hidden mx-auto px-4 py-6 flex justify-between items-center relative z-50">
            <div className="flex items-center">
                <Link href="/">
                    <Image
                        src="/assets/images/logo.png"
                        alt="TechnoX IT Logo"
                        width={200}
                        height={50}
                        className="h-10 w-auto"
                    />
                </Link>
            </div>
            <nav className="hidden lg:flex items-center space-x-8">
                <Link
                    href="/"
                    className={`text-white hover:text-orange-400 transition-all duration-300 ${pathname === "/" ? "border-b-2 border-orange-400 pb-1" : ""
                        }`}
                >
                    Home
                </Link>
                <Link
                    href="/services"
                    className={`text-white hover:text-orange-400 transition-all duration-300 ${pathname === "/services" ? "border-b-2 border-orange-400 pb-1" : ""
                        }`}
                >
                    Services
                </Link>
                <Link
                    href="/testimonials"
                    className={`text-white hover:text-orange-400 transition-all duration-300 ${pathname === "/testimonials" ? "border-b-2 border-orange-400 pb-1" : ""
                        }`}
                >
                    Testimonials
                </Link>
                <Link
                    href="/team"
                    className={`text-white hover:text-orange-400 transition-all duration-300 ${pathname === "/team" ? "border-b-2 border-orange-400 pb-1" : ""
                        }`}
                >
                    Team
                </Link>
                <div className="relative group">
                    <button className="text-white hover:text-orange-400 transition-all duration-300 flex items-center gap-1">
                        Menu
                        <i className="ph-bold ph-caret-down"></i>
                    </button>
                    <div className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                        <div className="py-2">
                            {menuItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
                <Link
                    href="/blog"
                    className={`text-white hover:text-orange-400 transition-all duration-300 ${pathname === "/blog" ? "border-b-2 border-orange-400 pb-1" : ""
                        }`}
                >
                    Blog
                </Link>
            </nav>
            <div className="flex items-center gap-4">
                <Link href="/contact" className="hidden xl:block">
                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full font-medium transition-all duration-300">
                        Get Quotes
                    </button>
                </Link>
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center lg:hidden"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-white"
                    >
                        <line x1="4" x2="20" y1="12" y2="12" />
                        <line x1="4" x2="20" y1="6" y2="6" />
                        <line x1="4" x2="20" y1="18" y2="18" />
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="absolute top-full left-0 right-0 bg-blue-900 shadow-lg lg:hidden mt-2 rounded-lg mx-4">
                    <nav className="flex flex-col p-4 space-y-2">
                        <Link href="/" className="text-white hover:text-orange-400 py-2" onClick={() => setIsMenuOpen(false)}>
                            Home
                        </Link>
                        <Link href="/services" className="text-white hover:text-orange-400 py-2" onClick={() => setIsMenuOpen(false)}>
                            Services
                        </Link>
                        <Link href="/testimonials" className="text-white hover:text-orange-400 py-2" onClick={() => setIsMenuOpen(false)}>
                            Testimonials
                        </Link>
                        <Link href="/team" className="text-white hover:text-orange-400 py-2" onClick={() => setIsMenuOpen(false)}>
                            Team
                        </Link>
                        <Link href="/blog" className="text-white hover:text-orange-400 py-2" onClick={() => setIsMenuOpen(false)}>
                            Blog
                        </Link>
                        {menuItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="text-white hover:text-orange-400 py-2"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    )
} 
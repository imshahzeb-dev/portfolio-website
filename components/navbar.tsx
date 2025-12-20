"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"

export function Navbar() {
    const pathname = usePathname()
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const [activeSection, setActiveSection] = useState("home")

    useEffect(() => {
        // Check if we're on a different page (not home page)
        if (pathname !== '/') {
            // Extract page name from pathname (e.g., /portfolio -> portfolio)
            const pageName = pathname.replace('/', '')
            setActiveSection(pageName)
            return // Don't set up scroll listener for other pages
        }

        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }

            // Scroll spy: determine which section is currently visible (only on home page)
            const sections = ["home", "services", "portfolio", "pricing", "team", "testimonials", "blog", "faqs", "contact"]
            const scrollPosition = window.scrollY + 150 // Offset for better detection

            for (const sectionId of sections) {
                const element = document.getElementById(sectionId)
                if (element) {
                    const { top, bottom } = element.getBoundingClientRect()
                    const elementTop = top + window.scrollY
                    const elementBottom = bottom + window.scrollY

                    if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
                        setActiveSection(sectionId)
                        break
                    }
                }
            }
        }

        handleScroll() // Call once on mount
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [pathname])

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        e.preventDefault()

        // If we're not on the home page, navigate to home page first
        if (pathname !== '/') {
            window.location.href = '/' + targetId
            return
        }

        // If we're on home page, scroll to the section
        const element = document.querySelector(targetId)
        if (element) {
            const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80
            window.scrollTo({
                top: offsetTop,
                behavior: 'auto' // Changed from 'smooth' to 'auto' for instant scroll
            })
        }
        setIsMenuOpen(false)
    }

    const menuItems = [
        { name: "Portfolio", href: "#portfolio", id: "portfolio" },
        { name: "Pricing", href: "#pricing", id: "pricing" },
        { name: "FAQs", href: "#faqs", id: "faqs" },
        { name: "Contact", href: "#contact", id: "contact" },
    ]

    // Check if any menu item is currently active
    const isMenuItemActive = menuItems.some(item => activeSection === item.id)

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            isScrolled
                ? "bg-[#0A2E6B] shadow-lg"
                : "bg-transparent"
        }`}>
            <div className="container mx-auto px-4 py-6 flex justify-between items-center">
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
                <a
                    href="#home"
                    onClick={(e) => scrollToSection(e, '#home')}
                    className={`transition-all duration-300 cursor-pointer ${
                        activeSection === 'home'
                            ? 'text-orange-400 font-semibold'
                            : 'text-white hover:text-orange-400'
                    }`}
                >
                    Home
                </a>
                <a
                    href="#services"
                    onClick={(e) => scrollToSection(e, '#services')}
                    className={`transition-all duration-300 cursor-pointer ${
                        activeSection === 'services'
                            ? 'text-orange-400 font-semibold'
                            : 'text-white hover:text-orange-400'
                    }`}
                >
                    Services
                </a>
                <a
                    href="#testimonials"
                    onClick={(e) => scrollToSection(e, '#testimonials')}
                    className={`transition-all duration-300 cursor-pointer ${
                        activeSection === 'testimonials'
                            ? 'text-orange-400 font-semibold'
                            : 'text-white hover:text-orange-400'
                    }`}
                >
                    Testimonials
                </a>
                <a
                    href="#team"
                    onClick={(e) => scrollToSection(e, '#team')}
                    className={`transition-all duration-300 cursor-pointer ${
                        activeSection === 'team'
                            ? 'text-orange-400 font-semibold'
                            : 'text-white hover:text-orange-400'
                    }`}
                >
                    Team
                </a>
                <div className="relative group">
                    <button className={`hover:text-orange-400 group-hover:text-orange-400 transition-all duration-300 flex items-center gap-1 ${
                        isMenuItemActive
                            ? 'text-orange-400 font-semibold'
                            : 'text-white'
                    }`}>
                        Menu
                        <i className="ph-bold ph-caret-down"></i>
                    </button>
                    <div className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                        <div className="py-2">
                            {menuItems.map((item) => (
                                <a
                                    key={item.href}
                                    href={item.href}
                                    onClick={(e) => scrollToSection(e, item.href)}
                                    className={`block px-4 py-2 transition-colors cursor-pointer ${
                                        activeSection === item.id
                                            ? 'bg-orange-50 dark:bg-gray-700 text-orange-500 dark:text-orange-400 font-semibold'
                                            : 'text-gray-700 dark:text-gray-200 hover:bg-orange-50 dark:hover:bg-gray-700 hover:text-orange-500 dark:hover:text-orange-400'
                                    }`}
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
                <a
                    href="#blog"
                    onClick={(e) => scrollToSection(e, '#blog')}
                    className={`transition-all duration-300 cursor-pointer ${
                        activeSection === 'blog'
                            ? 'text-orange-400 font-semibold'
                            : 'text-white hover:text-orange-400'
                    }`}
                >
                    Blog
                </a>
            </nav>
            <div className="flex items-center gap-4">
                <Link href="/contact" className="hidden xl:block">
                    <button className="bg-[#0059E8] hover:bg-[#0046BA] text-white px-6 py-3 rounded-full font-medium transition-all duration-300">
                        Get Quotes
                    </button>
                </Link>
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="w-10 h-10 rounded-full bg-[#0059E8] flex items-center justify-center lg:hidden"
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
                <div className="absolute top-full left-0 right-0 bg-[#0A2E6B] shadow-lg lg:hidden mt-2 rounded-lg mx-4">
                    <nav className="flex flex-col p-4 space-y-2">
                        <a
                            href="#home"
                            className={`py-2 cursor-pointer ${
                                activeSection === 'home'
                                    ? 'text-orange-400 font-semibold'
                                    : 'text-white hover:text-orange-400'
                            }`}
                            onClick={(e) => scrollToSection(e, '#home')}
                        >
                            Home
                        </a>
                        <a
                            href="#services"
                            className={`py-2 cursor-pointer ${
                                activeSection === 'services'
                                    ? 'text-orange-400 font-semibold'
                                    : 'text-white hover:text-orange-400'
                            }`}
                            onClick={(e) => scrollToSection(e, '#services')}
                        >
                            Services
                        </a>
                        <a
                            href="#testimonials"
                            className={`py-2 cursor-pointer ${
                                activeSection === 'testimonials'
                                    ? 'text-orange-400 font-semibold'
                                    : 'text-white hover:text-orange-400'
                            }`}
                            onClick={(e) => scrollToSection(e, '#testimonials')}
                        >
                            Testimonials
                        </a>
                        <a
                            href="#team"
                            className={`py-2 cursor-pointer ${
                                activeSection === 'team'
                                    ? 'text-orange-400 font-semibold'
                                    : 'text-white hover:text-orange-400'
                            }`}
                            onClick={(e) => scrollToSection(e, '#team')}
                        >
                            Team
                        </a>
                        <a
                            href="#blog"
                            className={`py-2 cursor-pointer ${
                                activeSection === 'blog'
                                    ? 'text-orange-400 font-semibold'
                                    : 'text-white hover:text-orange-400'
                            }`}
                            onClick={(e) => scrollToSection(e, '#blog')}
                        >
                            Blog
                        </a>
                        {menuItems.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                className={`py-2 cursor-pointer ${
                                    activeSection === item.id
                                        ? 'text-orange-400 font-semibold'
                                        : 'text-white hover:text-orange-400'
                                }`}
                                onClick={(e) => scrollToSection(e, item.href)}
                            >
                                {item.name}
                            </a>
                        ))}
                    </nav>
                </div>
            )}
            </div>
        </header>
    )
} 
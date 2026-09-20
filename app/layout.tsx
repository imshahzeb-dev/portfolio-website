import type { Metadata } from "next"
import type React from "react"
import "@/app/globals.css"
import { Inter, Montserrat } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { COMPANY } from "@/data/company"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

export const metadata: Metadata = {
  title: {
    default: `${COMPANY.name} — Full-Service Technology Partner`,
    template: `%s — ${COMPANY.name}`,
  },
  description: COMPANY.oneLiner,
  keywords: [
    "software development company",
    "AI software development company",
    "full-service software partner",
    "custom software development",
    "generative AI development company",
    "software development company Islamabad",
    "AI development company Pakistan",
  ],
  openGraph: {
    title: `${COMPANY.name} — Full-Service Technology Partner`,
    description: COMPANY.oneLiner,
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${montserrat.variable}`}
    >
      <body suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {/* Navbar and Footer live here so every route — including dynamic
              detail pages and the 404 — gets both without repeating them. */}
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}

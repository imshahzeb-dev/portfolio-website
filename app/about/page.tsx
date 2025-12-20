import { Navbar } from "@/components/navbar"
import { BannerSection } from "@/components/banner-section"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <BannerSection
        title="About Us"
        description="Build responsive, mobile-first projects on the web with the world's most popular front-end component library."
        breadcrumbItems={[{ label: "About" }]}
      />

      {/* About Content */}
      <section className="pt-[120px] pb-[120px]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-lg font-semibold text-orange-400 mb-2 block">
                Who We Are
              </span>
              <h2 className="text-4xl font-semibold text-gray-900 dark:text-white mb-6">
                We Are Leading IT Solutions Provider
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                We have 14+ years experience. Helping you overcome technology
                challenges. Join the thriving technox it solution agency.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                Technox is a HTML5 template based on Sass and Bootstrap 5 with
                modern and creative multipurpose design you can use Best
                services & IT solutions.
              </p>
              <ul className="space-y-3">
                {[
                  "Expert Team Members",
                  "24/7 Customer Support",
                  "Quality Assurance",
                  "Affordable Pricing",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 text-gray-700 dark:text-gray-300"
                  >
                    <i className="ph ph-check-circle text-blue-500 text-2xl"></i>
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg p-8 text-white">
                <h3 className="text-3xl font-bold mb-4">14+</h3>
                <p className="text-xl">Years of Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

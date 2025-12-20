import { Navbar } from "@/components/navbar"
import { BannerSection } from "@/components/banner-section"
import { Footer } from "@/components/footer"

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <BannerSection
        title="Terms & Conditions"
        description="Please read these terms and conditions carefully before using our services."
        breadcrumbItems={[{ label: "Terms Conditions" }]}
      />

      <section className="pt-[120px] pb-[120px]">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4">
              1. Introduction
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Welcome to TechnoxIt. These terms and conditions outline the rules
              and regulations for the use of our website and services.
            </p>

            <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4">
              2. Intellectual Property Rights
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Unless otherwise stated, TechnoxIt and/or its licensors own the
              intellectual property rights for all material on this website. All
              intellectual property rights are reserved.
            </p>

            <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4">
              3. Restrictions
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              You are specifically restricted from all of the following:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-6 space-y-2">
              <li>Publishing any website material in any other media</li>
              <li>
                Selling, sublicensing and/or otherwise commercializing any
                website material
              </li>
              <li>Publicly performing and/or showing any website material</li>
              <li>
                Using this website in any way that is or may be damaging to this
                website
              </li>
              <li>
                Using this website in any way that impacts user access to this
                website
              </li>
            </ul>

            <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4">
              4. Your Content
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              In these terms and conditions, "Your Content" shall mean any audio,
              video text, images or other material you choose to display on this
              website. By displaying Your Content, you grant TechnoxIt a
              non-exclusive, worldwide irrevocable, sub licensable license to
              use, reproduce, adapt, publish, translate and distribute it in any
              and all media.
            </p>

            <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4">
              5. Limitation of Liability
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              In no event shall TechnoxIt, nor any of its officers, directors and
              employees, be held liable for anything arising out of or in any way
              connected with your use of this website whether such liability is
              under contract. TechnoxIt, including its officers, directors and
              employees shall not be held liable for any indirect, consequential
              or special liability arising out of or in any way related to your
              use of this website.
            </p>

            <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4">
              6. Contact Information
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              If you have any questions about these Terms & Conditions, please
              contact us at info@technox.com
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

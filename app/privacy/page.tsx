import { Navbar } from "@/components/navbar"
import { BannerSection } from "@/components/banner-section"
import { Footer } from "@/components/footer"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <BannerSection
        title="Privacy Policy"
        description="Learn how we collect, use, and protect your personal information."
        breadcrumbItems={[{ label: "Privacy Policy" }]}
      />

      <section className="pt-[120px] pb-[120px]">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4">
              1. Information We Collect
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              We collect information that you provide directly to us, including
              when you create an account, use our services, make a purchase,
              request customer support, or communicate with us.
            </p>

            <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4">
              2. How We Use Your Information
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-6 space-y-2">
              <li>Provide, maintain, and improve our services</li>
              <li>Process transactions and send related information</li>
              <li>Send you technical notices and support messages</li>
              <li>Respond to your comments and questions</li>
              <li>
                Monitor and analyze trends, usage, and activities in connection
                with our services
              </li>
            </ul>

            <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4">
              3. Information Sharing
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              We do not share your personal information with third parties except
              as described in this Privacy Policy. We may share information in
              the following circumstances:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-6 space-y-2">
              <li>With your consent</li>
              <li>To comply with laws or respond to legal requests</li>
              <li>To protect our rights and prevent fraud</li>
              <li>With service providers who work on our behalf</li>
            </ul>

            <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4">
              4. Data Security
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              We take reasonable measures to help protect information about you
              from loss, theft, misuse, unauthorized access, disclosure,
              alteration, and destruction.
            </p>

            <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4">
              5. Your Rights
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              You have the right to access, update, or delete your personal
              information at any time. You can also opt out of receiving
              promotional communications from us by following the instructions in
              those messages.
            </p>

            <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4">
              6. Cookies
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              We use cookies and similar tracking technologies to track activity
              on our website and hold certain information. You can instruct your
              browser to refuse all cookies or to indicate when a cookie is being
              sent.
            </p>

            <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4">
              7. Changes to This Policy
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              We may update this Privacy Policy from time to time. We will notify
              you of any changes by posting the new Privacy Policy on this page
              and updating the "Last Updated" date.
            </p>

            <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4">
              8. Contact Us
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              If you have any questions about this Privacy Policy, please contact
              us at privacy@technox.com
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

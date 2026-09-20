import type { Metadata } from "next"
import { BannerSection } from "@/components/banner-section"
import { LegalPage } from "@/components/legal-page"
import { COMPANY, CONTACT } from "@/data/company"

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "The terms governing use of the TechnoSX website, and how they relate to the contracts that govern client engagements.",
}

// TODO(founder): have this reviewed by counsel before launch.
export default function TermsPage() {
  return (
    <>
      <BannerSection
        eyebrow="Legal"
        title="Terms & Conditions"
        description="The terms that govern use of this website. Client work is governed by its own signed agreement."
        breadcrumbItems={[{ label: "Terms & Conditions" }]}
      />
      <LegalPage
        lastUpdated="18 September 2026"
        intro={`These terms govern your use of the ${COMPANY.name} website. They do not govern client engagements — those are covered by a separate signed agreement, which takes precedence over anything on this page.`}
        sections={[
          {
            heading: "Acceptance",
            body: [
              "By using this website you accept these terms. If you do not accept them, please do not use the site.",
            ],
          },
          {
            heading: "Intellectual property",
            body: [
              `Unless stated otherwise, ${COMPANY.name} or its licensors own the content, design and code of this website. You may read, share and quote it with attribution. You may not republish it as your own.`,
              "Intellectual property created during a client engagement is assigned per the engagement contract. Our default position is that the client owns the code, the infrastructure and the accounts.",
            ],
          },
          {
            heading: "Acceptable use",
            body: ["You agree not to use this website in any of the following ways."],
            list: [
              "To attempt to gain unauthorised access to the site or its infrastructure",
              "To scrape, mirror or republish the content commercially without permission",
              "To impersonate TechnoSX or misrepresent an association with us",
              "In any way that damages the site or impairs another person's use of it",
            ],
          },
          {
            heading: "Content you send us",
            body: [
              "Anything you submit through the contact form or send us by email remains yours. You grant us only the permission needed to read it, respond to it, and — if we work together — act on it. We treat unsolicited confidential information as confidential, but please do not send trade secrets before an NDA is in place.",
            ],
          },
          {
            heading: "No professional advice",
            body: [
              "Content on this site, including articles and service descriptions, is general information about how we work. It is not technical, legal or financial advice for your specific situation. Engagement-specific recommendations are given under contract.",
            ],
          },
          {
            heading: "Accuracy",
            body: [
              "We publish only what we can stand behind. We do not publish invented metrics, client logos or testimonials. Where a number, case study outcome or client detail is not yet confirmed by the client, we say so rather than estimate it.",
            ],
          },
          {
            heading: "Third-party links",
            body: [
              "This site links to client products and third-party tools. We do not control those sites and are not responsible for their content, availability or practices.",
            ],
          },
          {
            heading: "Limitation of liability",
            body: [
              `To the fullest extent permitted by law, ${COMPANY.name}, its officers, directors and employees are not liable for any indirect, consequential or special loss arising from your use of this website. Liability arising from client work is governed by the limits set out in the engagement contract.`,
            ],
          },
          {
            heading: "Governing law",
            body: [
              `These terms are governed by the laws of Pakistan, where ${COMPANY.name} is established. Engagement contracts may specify a different governing law by agreement.`,
            ],
          },
          {
            heading: "Changes",
            body: [
              "We may revise these terms. The date at the top of this page reflects the current version. Continued use of the site after a change means you accept the revised terms.",
            ],
          },
          {
            heading: "Contact",
            body: [`Questions about these terms can be sent to ${CONTACT.email}.`],
          },
        ]}
      />
    </>
  )
}

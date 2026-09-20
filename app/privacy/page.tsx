import type { Metadata } from "next"
import { BannerSection } from "@/components/banner-section"
import { LegalPage } from "@/components/legal-page"
import { CONTACT } from "@/data/company"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How TechnoSX collects, uses, stores and protects personal information — including client project data and data residency options.",
}

// TODO(founder): have this reviewed by counsel before launch.
export default function PrivacyPage() {
  return (
    <>
      <BannerSection
        eyebrow="Legal"
        title="Privacy Policy"
        description="How we collect, use and protect information — for visitors to this site and for clients we work with."
        breadcrumbItems={[{ label: "Privacy Policy" }]}
      />
      <LegalPage
        lastUpdated="18 September 2026"
        intro="TechnoSX is a technology partner handling client systems and, at times, client data. This policy explains what we collect through this website and how we treat information entrusted to us during an engagement."
        sections={[
          {
            heading: "Information we collect",
            body: [
              "Through this website we collect only what you give us: the name, email address, company, service interest and message you submit through the contact form, plus any information you include in an email or during a call.",
            ],
            list: [
              "Contact details you submit through forms on this site",
              "Correspondence you send us by email or during calls",
              "Basic, aggregated analytics about how pages on this site are used",
            ],
          },
          {
            heading: "How we use it",
            body: ["We use the information you provide to respond to your enquiry and, if we work together, to deliver the engagement. We do not sell it, and we do not add you to a marketing sequence you did not ask for."],
            list: [
              "Responding to enquiries and scoping proposed work",
              "Delivering, supporting and improving engagements we are contracted for",
              "Meeting legal, accounting and contractual obligations",
            ],
          },
          {
            heading: "Client and project data",
            body: [
              "During an engagement we may be granted access to your systems, repositories and data. That access is governed by the engagement contract and any NDA in place, which take precedence over this policy.",
              "Access is limited to the engineers assigned to your engagement, granted on a least-privilege basis, and revoked at the end of the work. Secrets are held in a managed secrets store, never in a committed environment file.",
            ],
          },
          {
            heading: "Data residency and on-premise options",
            body: [
              "Where data sensitivity or regulation requires it, we design for data residency — including deploying models and services entirely on infrastructure you control, so that data never leaves your environment. Tell us your constraints before the architecture is set and we will build to them.",
            ],
          },
          {
            heading: "Sharing",
            body: ["We do not share personal information with third parties except in the limited circumstances below."],
            list: [
              "With your consent",
              "With subprocessors strictly necessary to operate our business, under contract",
              "To comply with law or respond to a valid legal request",
              "To protect our rights, safety, or prevent fraud",
            ],
          },
          {
            heading: "Security",
            body: [
              "We apply the same standards to our own systems that we apply on client work: least-privilege access, managed secrets, dependency and vulnerability scanning, and encryption in transit and at rest. No system is perfectly secure, and we do not claim otherwise.",
            ],
          },
          {
            heading: "Retention",
            body: [
              "Enquiry data is retained only as long as it is useful for the conversation it belongs to, and then deleted. Engagement records are retained for the period required by contract and applicable law.",
            ],
          },
          {
            heading: "Your rights",
            body: [
              `You can request access to, correction of, or deletion of the personal information we hold about you at any time by writing to ${CONTACT.email}. We will respond within the period required by applicable law.`,
            ],
          },
          {
            heading: "Cookies",
            body: [
              "This site uses only what is needed to remember your theme preference and to produce aggregated page analytics. We do not run advertising trackers or sell behavioural data. Your browser can refuse cookies without breaking the site.",
            ],
          },
          {
            heading: "Changes",
            body: [
              "We may update this policy. Material changes will be reflected in the date at the top of this page. Continued use of the site after an update means you accept the revised policy.",
            ],
          },
          {
            heading: "Contact",
            body: [`Questions about this policy can be sent to ${CONTACT.email}.`],
          },
        ]}
      />
    </>
  )
}

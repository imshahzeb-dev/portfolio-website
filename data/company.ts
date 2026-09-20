import type { IconName } from "@/components/icons"

/**
 * Company facts, navigation and engagement models.
 *
 * Source of truth: the founder content doc (canonical).
 * Hard rule from that document: never fabricate metrics, client names, logos
 * or testimonials. Anything not in content.md is marked TODO(founder).
 */

export const COMPANY = {
  name: "TechnoSX",
  legalName: "TechnoSX",
  oneLiner:
    "TechnoSX is a full-service technology partner that combines artificial intelligence with end-to-end software engineering.",
  positioning:
    "Full-service technology partner. AI woven through everything — not bolted on at the end.",
  lifecycle: "Concept & strategy → development → launch → scaling → ongoing support.",
  founded: "2025",
  location: "Islamabad, Pakistan",
  teamSize: "10+ senior engineers",
  delivery: "Global",
  personality: ["Intelligent", "Precise", "Confident", "Trustworthy", "Clean"],
  trustLine: "AI at our core. Senior engineers. End-to-end delivery.",
} as const

export const CONTACT = {
  // TODO(founder): confirm the street address and the public inbox.
  address: ["Islamabad", "Pakistan"],
  email: "hello@technosx.com",
  phone: "+92 313 2575060",
  hours: "Mon – Fri, 9:00 – 18:00 PKT",
} as const

export interface SocialLink {
  label: string
  href: string
  icon: IconName
}

// TODO(founder): replace the placeholder hrefs with the real profiles.
export const SOCIALS: SocialLink[] = [
  { label: "LinkedIn", href: "https://www.linkedin.com/", icon: "linkedin" },
  { label: "X", href: "https://x.com/", icon: "x-logo" },
  { label: "GitHub", href: "https://github.com/", icon: "github" },
  { label: "Facebook", href: "https://www.facebook.com/", icon: "facebook" },
  { label: "Instagram", href: "https://www.instagram.com/", icon: "instagram" },
]

// ── Values (content.md §2) ───────────────────────────────────────────────────

export interface CompanyValue {
  title: string
  body: string
  icon: IconName
}

export const VALUES: CompanyValue[] = [
  {
    title: "AI woven in, not bolted on",
    body: "Intelligence built into architecture from day one, not retrofitted in sprint 20.",
    icon: "brain",
  },
  {
    title: "Senior-only delivery",
    body: "Every engagement is staffed with engineers who have shipped at scale.",
    icon: "seal-check",
  },
  {
    title: "End-to-end ownership",
    body: "We take accountability from strategy through launch and beyond.",
    icon: "target",
  },
  {
    title: "Secure by design",
    body: "Security is architecture, not a checklist item before go-live.",
    icon: "shield-check",
  },
]

// ── Trust signals (qualitative only — content.md §2 forbids invented metrics) ─

export const TRUST_SIGNALS: Array<{ value: string; label: string }> = [
  { value: "2025", label: "Founded" },
  { value: "10+", label: "Senior engineers" },
  { value: "Islamabad", label: "Head office" },
  { value: "Global", label: "Delivery" },
]

// ── Engagement models (content.md §4) ────────────────────────────────────────

export interface EngagementModel {
  slug: string
  name: string
  description: string
  icon: IconName
  bestFor: string
  includes: string[]
}

export const ENGAGEMENT_MODELS: EngagementModel[] = [
  {
    slug: "full-project-outsourcing",
    name: "Full project outsourcing",
    description: "We own and deliver the whole project end to end.",
    icon: "package",
    bestFor: "Founders and teams without in-house engineering capacity.",
    includes: [
      "Discovery, strategy and architecture",
      "Full build with a dedicated senior squad",
      "QA, security review and launch",
      "Post-launch support and iteration",
    ],
  },
  {
    slug: "staff-augmentation",
    name: "Staff augmentation",
    description: "Extend your in-house team with our senior engineers.",
    icon: "users-three",
    bestFor: "Teams that need specific senior capability, fast.",
    includes: [
      "Engineers embedded in your process and tooling",
      "Your rituals, your backlog, your definition of done",
      "Scale the number of engineers up or down monthly",
      "Knowledge transfer built into the engagement",
    ],
  },
  {
    slug: "dedicated-teams",
    name: "Dedicated teams",
    description: "A committed team that works as a true extension of yours.",
    icon: "buildings",
    bestFor: "Long-running product work that needs continuity.",
    includes: [
      "A stable, named team assigned only to you",
      "Product manager, engineers, designer and QA",
      "Shared roadmap and joint planning",
      "Predictable monthly cost",
    ],
  },
  {
    slug: "product-partnership",
    name: "End-to-end product partnerships",
    description: "We partner across the full product lifecycle.",
    icon: "partnership",
    bestFor: "Companies that want a technology partner, not a vendor.",
    includes: [
      "Strategy and technical diagnosis up front",
      "Build, launch, scale and support under one roof",
      "AI layer designed into the architecture from day one",
      "Ongoing accountability for outcomes, not tickets",
    ],
  },
]

// ── Navigation ───────────────────────────────────────────────────────────────

export interface NavLink {
  label: string
  href: string
}

export const PRIMARY_NAV: NavLink[] = [
  { label: "Services", href: "/services" },
  { label: "How We Work", href: "/how-we-work" },
  { label: "Work", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
]

export const MORE_NAV: NavLink[] = [
  { label: "Our Team", href: "/team" },
  { label: "Careers", href: "/careers" },
  { label: "FAQs", href: "/faqs" },
  { label: "Contact", href: "/contact" },
]

export const LEGAL_NAV: NavLink[] = [
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
]

export const PRIMARY_CTA = { label: "Book a call", href: "/contact" } as const

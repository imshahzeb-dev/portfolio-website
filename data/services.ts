import type { IconName } from "@/components/icons"

/**
 * Canonical service taxonomy — exactly 10 services in 4 groups.
 * Source: the founder content doc §3. Never rename, merge or drop items.
 */

export type ServiceGroup = "core" | "build" | "run-scale" | "assure"

export interface Service {
  id: number
  slug: string
  title: string
  shortTitle: string
  description: string
  group: ServiceGroup
  icon: IconName
  featured?: boolean
}

export const services: Service[] = [
  // ── Core ───────────────────────────────────────────────────────────────────
  {
    id: 1,
    slug: "ai-machine-learning",
    title: "AI & Machine Learning",
    shortTitle: "AI & ML",
    description:
      "Generative AI, agentic workflows, custom ML models, and secure on-premise hosting.",
    group: "core",
    icon: "brain",
    featured: true,
  },

  // ── Build ──────────────────────────────────────────────────────────────────
  {
    id: 2,
    slug: "custom-software",
    title: "Custom Software & Product Development",
    shortTitle: "Custom Software",
    description: "End-to-end software and SaaS products, from strategy through launch.",
    group: "build",
    icon: "cube",
  },
  {
    id: 3,
    slug: "web-mobile",
    title: "Web & Mobile Development",
    shortTitle: "Web & Mobile",
    description: "Fast, robust web apps and native or cross-platform mobile apps.",
    group: "build",
    icon: "device-mobile",
  },
  {
    id: 4,
    slug: "ecommerce",
    title: "E-commerce",
    shortTitle: "E-commerce",
    description: "Shopify, WooCommerce, Magento, and custom commerce platforms.",
    group: "build",
    icon: "shopping-cart",
  },
  {
    id: 5,
    slug: "ui-ux-design",
    title: "UI/UX Design",
    shortTitle: "UI/UX Design",
    description: "Research-driven interfaces and reusable design systems.",
    group: "build",
    icon: "pen-nib",
  },

  // ── Run & Scale ────────────────────────────────────────────────────────────
  {
    id: 6,
    slug: "cloud-devops",
    title: "Cloud & DevOps",
    shortTitle: "Cloud & DevOps",
    description: "AWS, Azure, GCP. CI/CD, Kubernetes, and infrastructure automation.",
    group: "run-scale",
    icon: "cloud",
  },
  {
    id: 7,
    slug: "data-bi",
    title: "Data & Business Intelligence",
    shortTitle: "Data & BI",
    description:
      "Data engineering, analytics, and visualisation with Power BI and Tableau.",
    group: "run-scale",
    icon: "chart-bar",
  },
  {
    id: 8,
    slug: "database-administration",
    title: "Database Administration",
    shortTitle: "Database",
    description: "Reliable design, optimisation, and maintenance across SQL and NoSQL.",
    group: "run-scale",
    icon: "database",
  },

  // ── Assure ─────────────────────────────────────────────────────────────────
  {
    id: 9,
    slug: "quality-assurance",
    title: "Quality Assurance",
    shortTitle: "QA",
    description: "Manual, automated, and performance testing baked into delivery.",
    group: "assure",
    icon: "check-square",
  },
  {
    id: 10,
    slug: "cybersecurity",
    title: "Cybersecurity",
    shortTitle: "Cybersecurity",
    description: "Security architecture, zero-trust, and vulnerability management.",
    group: "assure",
    icon: "shield-check",
  },
]

export const SERVICE_GROUPS: Array<{ key: ServiceGroup; label: string; blurb: string }> = [
  {
    key: "core",
    label: "Core",
    blurb: "The differentiator. AI is designed into the architecture, not added at the end.",
  },
  {
    key: "build",
    label: "Build",
    blurb: "Everything it takes to get a product designed, built and launched.",
  },
  {
    key: "run-scale",
    label: "Run & Scale",
    blurb: "The infrastructure and data foundations that keep a product fast and reliable.",
  },
  {
    key: "assure",
    label: "Assure",
    blurb: "Quality and security treated as engineering disciplines, not gates before release.",
  },
]

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug)
}

export function getServicesByGroup(group: ServiceGroup): Service[] {
  return services.filter((s) => s.group === group)
}

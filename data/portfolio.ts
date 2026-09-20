/**
 * Case study data — real projects from the founder content doc, §7.
 * No fabricated metrics, logos or testimonials. Screenshots and outcome
 * numbers stay TODO(founder) until the client provides them.
 */

export type PortfolioCategory =
  | "All"
  | "AI & ML"
  | "Product"
  | "Data & BI"
  | "Platform"

export interface PortfolioItem {
  id: number
  slug: string
  title: string
  client: string
  tagline: string
  description: string
  /** What we actually built — no metrics, no claims. */
  highlights: string[]
  category: Exclude<PortfolioCategory, "All">
  industry: string
  url: string
  services: string[]
  stack: string[]
  /** Accent for the card's isometric illustration. */
  accent: string
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    slug: "careerscript",
    title: "CareerScript — AI Career Platform",
    client: "CareerScript",
    tagline: "AI-powered career intelligence for modern professionals.",
    description:
      "AI-powered career platform that analyses resumes, matches roles, and generates personalised career roadmaps. Uses LLMs and structured matching to surface opportunities humans miss.",
    highlights: [
      "LLM-powered resume analysis and gap detection",
      "Semantic role matching against job market data",
      "Personalised career roadmap generation",
      "Interview preparation with AI feedback",
    ],
    category: "AI & ML",
    industry: "HR Tech / AI",
    url: "https://careerscript.xyz",
    services: ["AI & Machine Learning", "Custom Software & Product Development"],
    stack: ["Next.js", "TypeScript", "Python", "LLM APIs", "pgvector", "PostgreSQL"],
    accent: "#4d92ff",
  },
  {
    id: 2,
    slug: "inosio",
    title: "Inosio — Property Management Platform",
    client: "Inosio",
    tagline: "Automating the rental lifecycle end to end.",
    description:
      "Property management platform that automates leasing, maintenance, and tenant communication for property managers and residents. Built to reduce manual work and improve response times at scale.",
    highlights: [
      "Automated leasing workflow from inquiry to signed lease",
      "Maintenance request routing and status tracking",
      "Tenant communication portal with push notifications",
      "Real-time occupancy and revenue reporting",
    ],
    category: "Product",
    industry: "PropTech",
    url: "https://inosio.com",
    services: ["Custom Software & Product Development", "Web & Mobile Development"],
    stack: ["React", "Node.js", "PostgreSQL", "AWS", "React Native"],
    accent: "#0059E8",
  },
  {
    id: 3,
    slug: "engagemed",
    title: "EngageMed — Healthcare Engagement Platform",
    client: "EngageMed",
    tagline: "Connecting providers and patients with intelligent analytics.",
    description:
      "Healthcare engagement platform connecting providers and patients, with analytics built on FastAPI, Snowflake, and Power BI. Improves patient outcomes through timely, data-driven interventions.",
    highlights: [
      "Provider–patient engagement tracking across care journeys",
      "Snowflake data warehouse with dbt transformations",
      "Power BI dashboards for clinical and operational teams",
      "FastAPI backend with HIPAA-aware data handling",
    ],
    category: "Data & BI",
    industry: "HealthTech",
    url: "https://engagemed.com",
    services: [
      "Custom Software & Product Development",
      "Data & Business Intelligence",
      "Cloud & DevOps",
    ],
    stack: ["FastAPI", "Snowflake", "dbt", "Power BI", "Python", "Azure"],
    accent: "#7DD6FF",
  },
  {
    id: 4,
    slug: "ensek",
    title: "ENSEK — Energy Management SaaS",
    client: "ENSEK",
    tagline: "Enterprise SaaS for utilities, built to scale.",
    description:
      "Energy management SaaS for utilities, built on the MERN stack with a reusable component system and typed services. Handles complex billing, metering, and customer management at enterprise scale.",
    highlights: [
      "MERN stack with TypeScript and a reusable component library",
      "Complex billing engine for energy tariff structures",
      "Metering data ingestion and validation pipeline",
      "Role-based access control for enterprise teams",
    ],
    category: "Platform",
    industry: "Energy / Utilities",
    url: "https://ensek.com",
    services: [
      "Custom Software & Product Development",
      "Web & Mobile Development",
      "Cloud & DevOps",
    ],
    stack: ["MongoDB", "Express", "React", "Node.js", "TypeScript", "Kubernetes"],
    accent: "#7DD6FF",
  },
  {
    id: 5,
    slug: "invoicestracker",
    title: "InvoicesTracker — Financial Management Tool",
    client: "InvoicesTracker",
    tagline: "Billing, payments, and reporting in one place.",
    description:
      "Invoicing and financial tracking tool that helps businesses manage billing, payments, and real-time reporting in one place. Designed for clarity and speed.",
    highlights: [
      "Invoice creation, sending, and status tracking",
      "Payment reconciliation and overdue alerts",
      "Real-time cashflow and revenue dashboards",
      "Multi-currency support",
    ],
    category: "Product",
    industry: "FinTech",
    url: "https://invoicestracker.com",
    services: ["Custom Software & Product Development", "Web & Mobile Development"],
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Stripe", "Redis"],
    accent: "#4d92ff",
  },
  {
    id: 6,
    slug: "loopdsp",
    title: "Loop DSP — Music Platform",
    client: "Loop DSP",
    tagline: "Artists managing their music business in one platform.",
    description:
      "Music platform that helps artists manage their catalogue, plan campaigns, and track revenue across channels. Built for independent artists and labels at every scale.",
    highlights: [
      "Catalogue management with metadata and rights tracking",
      "Campaign planning and release scheduling tools",
      "Revenue tracking across streaming and sync channels",
      "Analytics dashboard for release performance",
    ],
    category: "Data & BI",
    industry: "Music Tech",
    url: "https://loopdsp.com",
    services: [
      "Custom Software & Product Development",
      "Web & Mobile Development",
      "Data & Business Intelligence",
    ],
    stack: ["React", "Node.js", "PostgreSQL", "BigQuery", "AWS"],
    accent: "#9BC4FF",
  },
]

export const portfolioCategories: PortfolioCategory[] = [
  "All",
  "AI & ML",
  "Product",
  "Data & BI",
  "Platform",
]

export function getCaseStudy(slug: string): PortfolioItem | undefined {
  return portfolioItems.find((item) => item.slug === slug)
}

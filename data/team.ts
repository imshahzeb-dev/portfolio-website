import type { IconName } from "@/components/icons"

/**
 * Team content.
 *
 * The founder content doc §2 forbids fabricating names, photos or headcount
 * beyond the hard facts. So the team is presented by discipline rather than by
 * invented individuals. Real names and photos are TODO(founder).
 */

export interface TeamDiscipline {
  id: number
  name: string
  focus: string
  description: string
  icon: IconName
  skills: string[]
}

export const teamDisciplines: TeamDiscipline[] = [
  {
    id: 1,
    name: "AI & ML Engineering",
    focus: "Our core practice",
    description:
      "Designs the intelligence layer — retrieval, agents, evaluation and deployment — as first-class architecture rather than a feature bolted on at the end.",
    icon: "brain",
    skills: ["RAG pipelines", "Agentic systems", "Fine-tuning", "MLOps", "On-prem LLMs"],
  },
  {
    id: 2,
    name: "Product Engineering",
    focus: "Build",
    description:
      "Owns features end to end, from data model to deployed UI. Typed, tested and documented — the codebase is yours to keep and extend.",
    icon: "cube",
    skills: ["TypeScript", "Next.js", "Node.js", "Python", "REST & GraphQL"],
  },
  {
    id: 3,
    name: "Mobile Engineering",
    focus: "Build",
    description:
      "Native and cross-platform apps that feel native on both stores, with the performance budget treated as a requirement rather than an aspiration.",
    icon: "device-mobile",
    skills: ["React Native", "Expo", "iOS", "Android", "Offline-first"],
  },
  {
    id: 4,
    name: "Product Design",
    focus: "Build",
    description:
      "Research-driven interfaces and reusable design systems — from discovery and wireframes through to tokens and developer handoff.",
    icon: "pen-nib",
    skills: ["User research", "Prototyping", "Design systems", "Figma", "Accessibility"],
  },
  {
    id: 5,
    name: "Platform & DevOps",
    focus: "Run & Scale",
    description:
      "Builds the CI/CD, observability and cloud foundations that let a small team ship reliably and repeatedly, on AWS, Azure or GCP.",
    icon: "cloud",
    skills: ["Terraform", "Kubernetes", "GitHub Actions", "OpenTelemetry", "FinOps"],
  },
  {
    id: 6,
    name: "Data & Analytics",
    focus: "Run & Scale",
    description:
      "Turns raw events into trustworthy decisions — pipelines, semantic layers and dashboards that report the same number in every room.",
    icon: "chart-bar",
    skills: ["Snowflake", "dbt", "Airflow", "Power BI", "Tableau"],
  },
  {
    id: 7,
    name: "Quality Engineering",
    focus: "Assure",
    description:
      "Shift-left QA embedded from sprint one — test strategy, automation and regression suites wired into the pipeline as gates, not afterthoughts.",
    icon: "check-square",
    skills: ["Playwright", "Vitest", "Load testing", "Test strategy", "CI gates"],
  },
  {
    id: 8,
    name: "Security Engineering",
    focus: "Assure",
    description:
      "Secure by design — threat modelling, zero-trust patterns, secrets management and dependency scanning applied from the first commit.",
    icon: "shield-check",
    skills: ["OWASP Top 10", "Zero-trust", "OAuth 2.0 / OIDC", "Secrets management", "GDPR"],
  },
]

/** Honest team line from content.md §6 — no invented headcount or photos. */
export const TEAM_STATEMENT =
  "A senior team in Islamabad, delivering end-to-end for clients worldwide."

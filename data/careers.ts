import type { IconName } from "@/components/icons"

/**
 * Careers content — ported from the reference repo's careers page.
 *
 * TODO(founder): OPEN_ROLES, PERKS and HIRING_STEPS are placeholder content so
 * the page can be reviewed with realistic data. Replace with the real openings,
 * benefits and interview process before launch. CAREER_STATS and CAREER_VALUES
 * come from the real positioning in content.md and are accurate.
 */

export interface CareerValue {
  icon: IconName
  title: string
  body: string
}

export interface Perk {
  icon: IconName
  title: string
}

export interface OpenRole {
  id: string
  title: string
  department: string
  location: string
  type: string
  blurb: string
}

export interface HiringStep {
  step: string
  title: string
  body: string
}

export const CAREER_STATS: Array<{ value: string; label: string }> = [
  { value: "2025", label: "Founded" },
  { value: "Senior", label: "Only team" },
  { value: "Remote", label: "+ Islamabad" },
  { value: "Global", label: "Delivery" },
]

export const CAREER_VALUES: CareerValue[] = [
  {
    icon: "brain",
    title: "AI woven in, not bolted on",
    body: "Intelligence is built into architecture from day one. You'll design AI-native systems, not retrofit features onto legacy code.",
  },
  {
    icon: "seal-check",
    title: "Senior-only delivery",
    body: "Every engagement is staffed by engineers who have shipped at scale. No juniors on client work — just a team that holds a high bar.",
  },
  {
    icon: "target",
    title: "End-to-end ownership",
    body: "You own outcomes, not tickets. Make architectural decisions and see them through, from strategy to launch and beyond.",
  },
  {
    icon: "shield-check",
    title: "Secure by design",
    body: "Security is architecture, not a checklist item before go-live. We design for it from the first commit.",
  },
]

export const PERKS: Perk[] = [
  { icon: "globe", title: "Remote-first, flexible hours" },
  { icon: "users-three", title: "Senior-only peers" },
  { icon: "target", title: "Ownership from day one" },
  { icon: "cpu", title: "AI-native tooling" },
  { icon: "book-open", title: "Annual learning budget" },
  { icon: "code", title: "Modern stack, no legacy" },
  { icon: "lightning", title: "Real impact, no busywork" },
  { icon: "sparkle", title: "Work on frontier problems" },
]

export const OPEN_ROLES: OpenRole[] = [
  {
    id: "senior-ai-ml-engineer",
    title: "Senior AI / ML Engineer",
    department: "Engineering",
    location: "Islamabad / Remote",
    type: "Full-time",
    blurb:
      "Design and ship production LLM pipelines, RAG systems, and agentic workflows for client products where AI is core, not a bolt-on.",
  },
  {
    id: "senior-fullstack-engineer",
    title: "Senior Full-Stack Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    blurb:
      "Own features end to end across TypeScript, React, and Node — from data model to deployed UI — on products that go live and stay live.",
  },
  {
    id: "senior-product-designer",
    title: "Senior Product Designer (UI/UX)",
    department: "Design",
    location: "Islamabad / Remote",
    type: "Full-time",
    blurb:
      "Turn complex product problems into interfaces people love to use — research, prototyping, and design systems at a Stripe/Linear bar.",
  },
  {
    id: "platform-devops-engineer",
    title: "Platform / DevOps Engineer",
    department: "Infrastructure",
    location: "Remote",
    type: "Full-time",
    blurb:
      "Build the CI/CD, observability, and cloud foundations that let small teams ship reliably — AWS, Kubernetes, and infra-as-code.",
  },
  {
    id: "technical-product-manager",
    title: "Technical Product Manager",
    department: "Product",
    location: "Islamabad",
    type: "Full-time",
    blurb:
      "Sit between founders and engineers — scope the smallest valuable slice, protect the roadmap, and keep delivery honest.",
  },
  {
    id: "qa-automation-engineer",
    title: "QA Automation Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    blurb:
      "Own test strategy and automation for products that can't break in production — from the test pyramid to CI gates.",
  },
]

export const HIRING_STEPS: HiringStep[] = [
  {
    step: "01",
    title: "Intro call",
    body: "A 30-minute conversation with a founder about your background and what you want to build next.",
  },
  {
    step: "02",
    title: "Technical deep-dive",
    body: "We talk through systems you've actually shipped — the decisions, the trade-offs, and what you'd do differently.",
  },
  {
    step: "03",
    title: "Practical session",
    body: "A paired session on a real-world problem. No whiteboard trivia, no algorithm gotchas — just how you actually work.",
  },
  {
    step: "04",
    title: "Team + offer",
    body: "Meet the people you'd work with, then a fast, transparent offer. No drawn-out loops or ghosting.",
  },
]

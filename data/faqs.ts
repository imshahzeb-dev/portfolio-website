/**
 * General FAQs — answers derived from the canonical positioning in
 * the founder content doc (§1–§4). Per-service FAQs live in data/service-detail.ts.
 */

export interface FAQ {
  id: number
  question: string
  answer: string
  category: "Working with us" | "Engagement" | "AI & Engineering" | "Delivery"
}

export const faqs: FAQ[] = [
  {
    id: 1,
    category: "Working with us",
    question: "What exactly does “full-service technology partner” mean?",
    answer:
      "It means we cover the whole lifecycle — concept and strategy, development, launch, scaling, and ongoing support — rather than taking a slice of it. You do not need to assemble a design shop, a dev shop, a DevOps contractor and a QA vendor. One team is accountable from the first architecture decision through to production support.",
  },
  {
    id: 2,
    category: "AI & Engineering",
    question: "What do you mean by “AI woven in, not bolted on”?",
    answer:
      "Bolted-on AI is a feature added in sprint 20 that calls an LLM API and displays the result. The data model, event system and caching layer were never designed for it, so it never improves. Woven-in AI starts with an architectural decision: where intelligence belongs in the system and what data it needs to be good. That question shapes the schema, the event model and the API surface before a single feature is built.",
  },
  {
    id: 3,
    category: "AI & Engineering",
    question: "Do I have to be building an AI product to work with you?",
    answer:
      "No. AI and machine learning is our core service and our differentiator, but the majority of our work is end-to-end software engineering — web and mobile apps, SaaS platforms, cloud infrastructure, data pipelines, design and QA. If AI does not belong in your product, we will tell you so rather than sell it to you.",
  },
  {
    id: 4,
    category: "Engagement",
    question: "What engagement models do you offer?",
    answer:
      "Four: full project outsourcing, where we own and deliver the whole project end to end; staff augmentation, where our senior engineers extend your in-house team; dedicated teams, a committed team that works as a true extension of yours; and end-to-end product partnerships across the full lifecycle. Most clients start with one and move between them as the work changes.",
  },
  {
    id: 5,
    category: "Engagement",
    question: "Can you start with a single feature instead of a whole product?",
    answer:
      "Yes. Whether you need a single feature shipped or want us to own the full product lifecycle, the engagement is scoped to that. We would rather prove the working relationship on a well-defined slice than start with a twelve-month commitment neither side can evaluate.",
  },
  {
    id: 6,
    category: "Delivery",
    question: "Who will actually work on my project?",
    answer:
      "Senior engineers who have shipped at scale. Senior-only delivery is one of our four operating values — we do not staff client work with juniors and supervise them at a distance. You get the names and backgrounds of the specific people on your engagement before it starts.",
  },
  {
    id: 7,
    category: "Delivery",
    question: "How do you handle quality and security?",
    answer:
      "Both are engineering disciplines here, not gates before release. QA is integrated from sprint one with a testing pyramid of roughly 70% unit, 20% integration and 10% end-to-end, plus automated CI gates. Security is designed in — OWASP Top 10 validation on every engagement, short-lived tokens, secrets management, and dependency scanning in the pipeline.",
  },
  {
    id: 8,
    category: "AI & Engineering",
    question: "Can you add AI to a product we already have, without a rewrite?",
    answer:
      "Usually yes. It starts with a capability audit of what your product already knows — order history, session logs, search queries, support tickets — followed by a data gap analysis. New AI capability is then built alongside the existing system using the strangler fig pattern, behind a feature flag, so the current product keeps working and rollback is instant.",
  },
  {
    id: 9,
    category: "AI & Engineering",
    question: "Can AI run on our own infrastructure instead of a third-party API?",
    answer:
      "Yes. We deploy open-source models such as LLaMA and Mistral on your own infrastructure using vLLM or Ollama. This is our secure on-premise track, built for regulated industries, sensitive IP, and anyone with data residency requirements.",
  },
  {
    id: 10,
    category: "Working with us",
    question: "Where are you based, and can you work with our timezone?",
    answer:
      "We are headquartered in Islamabad, Pakistan, and deliver globally. Engagements run with deliberate overlap against your working hours, with asynchronous written updates covering the rest.",
  },
  {
    id: 11,
    category: "Delivery",
    question: "Who owns the code and what does handover look like?",
    answer:
      "You own the code, the infrastructure and the accounts — always. Handover includes documentation, architecture decision records, and onboarding sessions for your internal team. The goal of every engagement is a codebase your team can own and extend without us.",
  },
  {
    id: 12,
    category: "Working with us",
    question: "How do we start?",
    answer:
      "Book a discovery call. Tell us what you are building and we will tell you exactly how we would approach it — including the parts we think are wrong, and the parts you do not need to build at all.",
  },
]

export function getFaqsByCategory(category: FAQ["category"]): FAQ[] {
  return faqs.filter((f) => f.category === category)
}

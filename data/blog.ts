/**
 * Blog posts — real long-form content from the founder content doc.
 * Sections render directly as JSX; no markdown parser needed.
 *
 * Content rules (content.md §9):
 * - Never fabricate metrics, names, or testimonials
 * - Expand technically on the keyword; never reframe the positioning
 */

export interface BlogSection {
  heading?: string
  body: string[]
  list?: string[]
}

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  sections: BlogSection[]
  publishedAt: string
  updatedAt?: string
  tags: string[]
  category: string
  readingTime: number
  seoTitle: string
  seoDescription: string
  published: boolean
  /** Accent for the post's isometric illustration. */
  accent: string
  author: string
}

export const blogPosts: BlogPost[] = [
  // ── Post 1 ────────────────────────────────────────────────────────────────
  {
    slug: "ai-woven-in-vs-bolted-on",
    accent: "#4d92ff",
    author: "TechnoSX",
    title: "AI Woven In vs Bolted On — The Architectural Difference",
    excerpt:
      "Most products treat AI as a feature added after the fact. The ones that win treat it as a layer that shapes every architectural decision from day one. Here is what that actually looks like in practice.",
    publishedAt: "2025-05-12",
    tags: ["AI Architecture", "Engineering", "Product Strategy"],
    category: "Engineering",
    readingTime: 6,
    seoTitle: "AI Woven In vs Bolted On — TechnoSX",
    seoDescription:
      "Most AI integrations fail because AI was an afterthought. Learn the architectural difference between AI-native products and ones where AI is a retrofitted feature.",
    published: true,
    sections: [
      {
        body: [
          "The phrase 'AI woven in, not bolted on' gets used a lot. What it actually means architecturally is almost never explained.",
          "Bolted-on AI looks like this: a product ships, then someone adds an AI feature in sprint 20. The feature calls an LLM API, returns a response, and displays it. The underlying data model, the event system, the caching layer — none of them were designed with AI in mind. The AI feature works in isolation and never improves, because there is no data flywheel. It is also expensive to run and difficult to evaluate.",
          "Woven-in AI looks different. It starts with an architectural decision: where does intelligence belong in this system, and what data does it need to be good? That question shapes the schema, the event model, and the API surface before a single feature is built.",
        ],
      },
      {
        heading: "What 'woven in' actually changes at the architecture level",
        body: [
          "The most important difference is the data model. A product built for AI captures structured signals from user behaviour — not as an afterthought for analytics, but as first-class domain events. These events become training data, evaluation sets, and retrieval corpora. You cannot retrofit this. Adding structured logging to a product that was never designed for it is months of work, and the resulting data is always worse than data captured intentionally.",
          "The second difference is the embedding layer. In a bolted-on system, embeddings are generated on demand and thrown away. In a woven-in system, the embedding layer is a service with its own lifecycle — vectors are updated when source data changes, stored in a vector index that is versioned, and queried via a retrieval API that other services depend on. This means search, recommendations, and generation all share the same embedding space and stay consistent.",
          "Third: the inference pipeline. Bolted-on AI makes raw LLM calls from application code. Woven-in AI routes all inference through a pipeline that handles caching, fallback models, cost tracking, latency budgets, and evaluation hooks. This is the difference between a feature that works in demos and a feature that works reliably at scale.",
        ],
      },
      {
        heading: "The decision point that separates the two",
        body: [
          "The fork happens at the start. When a team asks 'should we add AI to this?' after the product exists, they are already on the bolted-on path. The question that leads to woven-in architecture is: 'what does this product need to know, and how do we capture that knowledge in a form that makes intelligence possible?'",
          "This is not a question about which LLM to use. It is a question about domain modelling. What are the entities? What events matter? What signals indicate a good outcome? Answering these questions before writing product code is what makes AI native rather than retrofitted.",
          "At TechnoSX, we start every engagement with a technical diagnosis that includes an AI layer decision: what intelligence does this product need, where in the architecture does it live, and what data model supports it. For existing products, that diagnosis also identifies what can be changed without a rewrite — because most woven-in improvements are not rewrites. They are targeted additions of the data infrastructure that makes AI possible.",
        ],
      },
      {
        heading: "A concrete example: fraud detection",
        body: [
          "Consider a payments product that wants to add fraud detection. Bolted-on: a rule engine that checks transaction amount and country. It works until fraud patterns change, and improving it requires manual rule updates by engineers.",
          "Woven-in: the payment event includes a full feature vector — device fingerprint, session velocity, historical behaviour, merchant category. These features are computed at write time by a feature store and attached to every transaction record. The fraud model trains on this feature store continuously. When patterns shift, the model adapts without a deployment.",
          "The difference is not the ML model. It is that the woven-in system was designed to capture the right data from the start. The model is almost incidental.",
        ],
      },
      {
        heading: "What to ask your engineering partner",
        body: [
          "If you are evaluating a software partner for a product that will rely on AI, ask three questions: Where in the architecture does the AI layer live? What is the data model that feeds it? How does the model improve over time?",
          "If the answers are 'we will call the OpenAI API,' 'we will figure out the data later,' and 'we will retrain when we have more data,' you are looking at bolted-on AI delivered by people who have not thought through what makes AI products reliable and improvable.",
          "Woven-in AI is harder to build at the start and much easier to operate over time. The architecture cost is front-loaded; the operational cost is much lower, and the quality ceiling is much higher.",
        ],
      },
    ],
  },

  // ── Post 2 ────────────────────────────────────────────────────────────────
  {
    slug: "how-to-add-ai-to-existing-product",
    accent: "#0059E8",
    author: "TechnoSX",
    title: "How to Add AI to an Existing Product Without a Rewrite",
    excerpt:
      "Adding AI to a product that was not designed for it is possible without rebuilding everything. The key is knowing which parts of the architecture to change, which to leave alone, and in what order.",
    publishedAt: "2025-05-26",
    tags: ["AI Integration", "Engineering", "Architecture"],
    category: "Engineering",
    readingTime: 7,
    seoTitle: "How to Add AI to an Existing Product — TechnoSX",
    seoDescription:
      "A practical engineering framework for adding AI capabilities to a legacy codebase — without a rewrite. Covers the strangler fig pattern, feature stores, and evaluation infrastructure.",
    published: true,
    sections: [
      {
        body: [
          "The most common question we get from founders with existing products is: how do we add AI without rebuilding everything? It is a legitimate concern. A full rewrite is expensive, slow, and risky. But leaving AI out is increasingly a competitive disadvantage.",
          "The answer is that adding AI to an existing product does not usually require a rewrite. It requires identifying the right insertion points — the places where the existing architecture can be extended without being dismantled — and building the data infrastructure that AI depends on in parallel with the existing system.",
        ],
      },
      {
        heading: "Start with a capability audit, not a feature list",
        body: [
          "Before writing any code, spend time understanding what the product already knows. What data does it collect? What events does it emit? What user behaviour does it record? The answers determine how much AI capability is available without changing the core system.",
          "Most products, even older ones, have more useful signal than their teams realise. Order history, session logs, search queries, support tickets, usage patterns — these are all training data and retrieval corpora waiting to be used. The audit tells you what can be activated now versus what requires new instrumentation.",
          "The capability audit also identifies the gaps. If the product does not record why a user abandoned a workflow, or which search results they clicked, those signals need to be added before any AI feature that depends on them can be built. Adding these signals is low-risk, incremental work — it does not touch business logic.",
        ],
      },
      {
        heading: "The strangler fig pattern, applied to AI features",
        body: [
          "The strangler fig pattern is the right architectural approach for adding AI to an existing system. The idea: build the new AI-powered capability alongside the existing one, route a small percentage of traffic to the new path, validate it, and gradually shift more traffic until the old path can be retired.",
          "Applied to AI, this means: the existing product continues to function exactly as it does today. The AI feature is a separate service that receives events from the existing system, computes a result, and writes that result back into a new column or endpoint. The existing UI shows the AI result alongside or instead of the old result, controlled by a feature flag.",
          "This approach has three advantages: it is safe (the existing system is unchanged), it is measurable (you can A/B test AI vs non-AI outcomes), and it is reversible (the feature flag makes rollback instant).",
        ],
      },
      {
        heading: "Building the data infrastructure in parallel",
        body: [
          "The most important work in adding AI to an existing product is usually not the AI model — it is the data pipeline that feeds it. This pipeline has three components: event capture, feature computation, and storage.",
          "Event capture means instrumenting the existing application to emit structured events when things happen. A user completes a purchase. A support ticket is resolved. A recommendation is dismissed. These events need to be captured in a format that can be replayed, enriched, and fed into a training pipeline.",
          "Feature computation turns raw events into model inputs. If you are building a recommendation system, a raw event says 'user X viewed product Y.' A computed feature says 'user X's affinity for category Z, weighted by recency and frequency.' The difference in model quality between raw events and computed features is substantial.",
          "Storage is where most teams underinvest. Features need to be stored in a feature store — a system that serves features at inference time (low latency) and at training time (high throughput). Using your application database as a feature store creates latency and coupling problems that become expensive to fix later.",
        ],
      },
      {
        heading: "Evaluation infrastructure before production traffic",
        body: [
          "The failure mode we see most often in AI integrations is launching without evaluation infrastructure. A team builds an AI feature, it looks good in demos, it ships, and then nobody knows whether it is actually working.",
          "Evaluation infrastructure means: a defined metric (what does 'good' look like?), a logging system that captures AI inputs and outputs, a way to sample production traffic for human review, and a dashboard that shows the metric over time.",
          "For most products, the metric is a downstream business outcome: did the user complete the action the AI recommended? Did the support ticket resolve faster? Did the user return? These metrics are lagged — you need to wait for them — but they are the only ones that actually tell you whether the AI is helping.",
          "Build the evaluation infrastructure before you start optimising the model. Without it, you are optimising in the dark.",
        ],
      },
      {
        heading: "The order of operations",
        body: [
          "If we were adding AI to your existing product, this is the sequence we would follow: capability audit, data gap analysis, event instrumentation, feature store setup, first model (simple, offline evaluation), feature flag rollout, production monitoring, iteration.",
          "At each step, the existing product continues to work. The AI capability is added incrementally, validated against real outcomes, and expanded when it demonstrably improves them.",
          "This is what 'woven in, not bolted on' looks like when the product already exists. It is not glamorous work, but it is the work that makes AI features reliable rather than impressive in demos and disappointing in production.",
        ],
      },
    ],
  },

  // ── Post 3 ────────────────────────────────────────────────────────────────
  {
    slug: "choosing-a-software-development-partner",
    accent: "#9BC4FF",
    author: "TechnoSX",
    title: "Seven Questions to Ask Before Hiring a Software Development Partner",
    excerpt:
      "Most software partnerships fail not because of technical incompetence but because of misaligned expectations around ownership, quality bar, and how decisions get made. These seven questions surface those misalignments before a contract is signed.",
    publishedAt: "2025-06-03",
    tags: ["Partnerships", "Product Strategy", "Engineering"],
    category: "Product Strategy",
    readingTime: 5,
    seoTitle: "How to Choose a Software Development Partner — TechnoSX",
    seoDescription:
      "Seven questions that separate senior engineering partners from body shops — covering team composition, ownership, quality standards, and AI capability. From TechnoSX.",
    published: true,
    sections: [
      {
        body: [
          "Choosing a full-service software partner is one of the highest-stakes decisions a founder or CTO makes. The cost of a wrong choice is not just money — it is 6-18 months of lost time, a codebase you cannot own, and a product that does not work the way you envisioned.",
          "Most due diligence focuses on the wrong things: portfolio aesthetics, price, how responsive they are in the sales process. The things that actually predict whether a partnership will work are harder to evaluate but equally observable. These seven questions get at them.",
        ],
      },
      {
        heading: "1. Who specifically will work on my project, and what have they shipped?",
        body: [
          "Many agencies sell you on their senior partners and deliver your project to mid-level or junior engineers. Ask for the names and CVs of the specific people who will be on your engagement, not the company's general team.",
          "Ask what they have shipped. Not projects they contributed to — products they owned end-to-end. The ability to own a product through launch and into production is a different skill than contributing to one. You want people who have done it.",
        ],
      },
      {
        heading: "2. How do you handle a situation where the requirements are wrong?",
        body: [
          "Build shops execute requirements. Engineering partners challenge them. Ask a potential partner to describe a time they pushed back on a client's spec and what happened.",
          "If the answer is that they built what was asked, you are looking at a body shop. If the answer describes a diagnosis process — understanding the underlying problem before deciding on the solution — you are looking at a partner. The distinction matters enormously over the course of a multi-month engagement.",
        ],
      },
      {
        heading: "3. What is your quality bar, and how do you enforce it?",
        body: [
          "Ask to see their CI/CD pipeline for a recent project. Ask what their test coverage policy is. Ask how they handle technical debt.",
          "Good answers involve automated gates — builds that fail if coverage drops, linting that blocks merges, performance budgets that are measured on every PR. Bad answers involve words like 'we review everything manually' or 'we will clean it up after launch.'",
          "Code that ships without automated quality gates accumulates debt exponentially. You will spend the second year of a project paying for shortcuts taken in the first three months.",
        ],
      },
      {
        heading: "4. How do you think about AI in this product?",
        body: [
          "Even if you are not building an AI product, this question is revealing. A senior engineering partner will have an opinion about where intelligence could improve the product, what data model would support it, and what the trade-offs are. A body shop will say 'we can integrate whatever APIs you need.'",
          "AI is becoming a layer in every serious software product. A partner who has not thought about where it belongs in yours — and cannot articulate why — is either not thinking at the right level of abstraction or does not have the capability.",
        ],
      },
      {
        heading: "5. What does handover look like at the end of the engagement?",
        body: [
          "Ask about documentation, onboarding material for your internal team, and what ongoing support looks like after handover. A partner who has thought carefully about this will have a process. One who has not will give vague answers about 'knowledge transfer sessions.'",
          "The goal of every engagement should be a codebase your team can own and extend without the partner. If a partner's incentive is to keep you dependent on them, their architectural choices will reflect that — abstraction layers that only they understand, documentation that is deliberately incomplete.",
        ],
      },
      {
        heading: "6. Can you show me a post-mortem from a project that went wrong?",
        body: [
          "Every serious team has post-mortems. Ask to see one — anonymised if necessary. The quality of the post-mortem tells you more about the team's engineering culture than any portfolio piece.",
          "Look for: honest identification of the root cause (not blame-shifting), systemic fixes rather than individual blame, and follow-up actions that were actually completed. A team that writes good post-mortems has the discipline to learn from failure rather than repeat it.",
        ],
      },
      {
        heading: "7. What will you tell me if this is going wrong?",
        body: [
          "This is the most important question. Ask how they communicate when a deadline is at risk, when a technical decision they made is not working out, or when the project is more complex than initially scoped.",
          "You want a partner who surfaces problems early, not one who manages your perception of progress until the situation is unrecoverable. Ask for a specific example of how they handled a difficult conversation with a previous client.",
          "The ability to have hard conversations honestly is what separates a partner from a vendor. Vendors manage relationships. Partners manage outcomes.",
        ],
      },
      {
        body: [
          "These questions will make some agencies uncomfortable. They are designed to. The right partner will welcome them — and probably have their own hard questions for you in return.",
        ],
      },
    ],
  },
]

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug)
}

export function getPublishedPosts(): BlogPost[] {
  return blogPosts.filter((p) => p.published).sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  )
}

export const BLOG_POSTS = blogPosts

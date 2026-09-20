/**
 * Full per-service content for the /services/[slug] pages.
 * Founder copy from /docs/content.md is the spine — technical depth added.
 * NEVER fabricate metrics, logos, or testimonials.
 */

export interface ServiceFAQ {
  question: string
  answer: string
}

export interface ServiceDetail {
  slug: string
  seoTitle: string
  seoDescription: string
  headline: string
  subheadline: string
  subCapabilities: string[]
  process: Array<{ step: string; title: string; body: string }>
  techStack: string[]
  faqs: ServiceFAQ[]
}

const SERVICE_DETAILS: ServiceDetail[] = [
  // ── AI & Machine Learning ──────────────────────────────────────────────────
  {
    slug: "ai-machine-learning",
    seoTitle: "AI & Machine Learning Development — TechnoSX",
    seoDescription:
      "Production-grade generative AI, agentic workflows, RAG pipelines, and custom ML models. AI woven into your architecture from day one — not bolted on at the end.",
    headline: "AI woven in — not bolted on.",
    subheadline:
      "We build generative AI solutions including intelligent chatbots, AI-powered automation, and agentic workflows. Our GenAI engineering spans pipeline development, document retrieval and embeddings, query optimisation, fine-tuning, model evaluation, and deployment — including secure on-premise hosting where data sensitivity requires it.",
    subCapabilities: [
      "Generative AI engineering",
      "Intelligent chatbots & AI assistants",
      "Agentic workflows & multi-agent systems",
      "RAG pipelines & document retrieval",
      "Custom ML model development",
      "LLM fine-tuning & evaluation",
      "Vector embeddings & semantic search",
      "Query optimisation & prompt engineering",
      "On-premise LLM deployment",
      "MLOps & model monitoring",
    ],
    process: [
      {
        step: "01",
        title: "Problem framing",
        body: "We define what AI needs to solve — specifically. Most failures happen here when teams skip from 'add AI' to 'build model' without understanding the actual decision being automated.",
      },
      {
        step: "02",
        title: "Architecture design",
        body: "We design the AI layer as first-class architecture: inference endpoints, RAG vs fine-tuning decisions, vector store selection, latency budgets, and data pipeline layout.",
      },
      {
        step: "03",
        title: "Pipeline development",
        body: "Build the full stack — embeddings, retrieval, reranking, LLM integration, output validation, and caching. Production-grade from the first sprint.",
      },
      {
        step: "04",
        title: "Evaluation & iteration",
        body: "RAGAS-based evaluation, human eval samples, regression suites. We measure before we ship and track quality continuously after launch.",
      },
    ],
    techStack: [
      "Claude API",
      "OpenAI",
      "Gemini",
      "LLaMA",
      "Mistral",
      "LangChain",
      "LlamaIndex",
      "Pinecone",
      "Weaviate",
      "pgvector",
      "Qdrant",
      "vLLM",
      "Ollama",
      "MLflow",
      "RAGAS",
      "FastAPI",
      "Python",
      "PyTorch",
      "HuggingFace",
    ],
    faqs: [
      {
        question: "What's the difference between RAG and fine-tuning? Which do you recommend?",
        answer:
          "RAG (Retrieval-Augmented Generation) grounds the LLM with your specific documents at inference time — best for knowledge bases, Q&A over proprietary data, and anything that changes frequently. Fine-tuning adjusts the model's weights to change its style, format, or domain behaviour — not to inject new knowledge. We typically recommend RAG first. Fine-tuning is expensive and most teams reach for it prematurely. We'll tell you honestly which approach is right for your use case.",
      },
      {
        question:
          "Can you build AI that works on our own infrastructure without sending data to OpenAI?",
        answer:
          "Yes. We deploy open-source LLMs (LLaMA, Mistral, and others) on your own infrastructure using vLLM or Ollama. This is our 'secure on-premise' track — suitable for regulated industries, sensitive IP, or customers who require data residency. Performance is slightly below frontier models but the gap is closing quickly.",
      },
      {
        question: "How do you prevent AI hallucinations in production?",
        answer:
          "Hallucinations are a deployment problem, not just a model problem. We implement structured output validation (Pydantic schemas), semantic similarity checks against source documents, confidence thresholds before responding, human-in-the-loop for high-stakes decisions, and financial guardrails for domain-specific constraints. No system eliminates hallucinations entirely — we design around them.",
      },
      {
        question: "What does a typical AI engagement look like from start to launch?",
        answer:
          "Discovery (1 week) → architecture proposal → infrastructure setup (Week 1–2, AI pipeline first) → feature development with AI integrated at every layer → evaluation and red-teaming → production deployment. Typical timeline: 10–16 weeks depending on scope. We ship the first working AI endpoint in Week 2, not Week 12.",
      },
    ],
  },

  // ── Custom Software & Product Development ──────────────────────────────────
  {
    slug: "custom-software",
    seoTitle: "Custom Software & Product Development — TechnoSX",
    seoDescription:
      "End-to-end custom software and SaaS product development. From strategy and architecture through launch and ongoing maintenance — with AI integrated throughout.",
    headline: "From concept to production-grade software.",
    subheadline:
      "We design and build custom software and SaaS products end to end. Whether you need a single feature or want us to own the full product lifecycle, our teams cover strategy, architecture, development, launch, and maintenance.",
    subCapabilities: [
      "SaaS product development",
      "Custom software architecture",
      "API design & development (REST, GraphQL, tRPC)",
      "Multi-tenant platform engineering",
      "Billing & subscription integration",
      "Admin dashboards & internal tools",
      "Product strategy & roadmap",
      "Technical due diligence",
      "Legacy system modernisation",
      "Post-launch maintenance & iteration",
    ],
    process: [
      {
        step: "01",
        title: "Discovery & scoping",
        body: "We map user journeys, define the data model, and agree on a technical specification before writing code. Prevents the expensive rework that comes from ambiguous requirements.",
      },
      {
        step: "02",
        title: "Architecture",
        body: "Clean architecture: domain logic separated from framework concerns, typed APIs, scalable data models, and CI/CD from day one. No shortcuts that become technical debt.",
      },
      {
        step: "03",
        title: "Iterative development",
        body: "Weekly demos. Functional software shipped in the first two weeks. You see real progress, not slide decks. We adjust based on what you see.",
      },
      {
        step: "04",
        title: "Launch & handover",
        body: "Production deployment with monitoring, runbooks, and documentation. We can stay on for ongoing support or hand off cleanly to your team — your choice.",
      },
    ],
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "FastAPI",
      "Django",
      "Node.js",
      "PostgreSQL",
      "Redis",
      "Stripe",
      "AWS",
      "Vercel",
      "GitHub Actions",
      "Prisma",
      "Zod",
    ],
    faqs: [
      {
        question: "Do you do fixed-price or time-and-materials?",
        answer:
          "Both. Fixed-price works well for clearly scoped projects where requirements are stable. T&M suits iterative product development where scope evolves. We'll recommend which model fits your project honestly — fixed-price on vague requirements is a recipe for misaligned expectations.",
      },
      {
        question: "Can you take over a project that another team started?",
        answer:
          "Yes. We run a technical assessment first (2–3 days) to understand what exists, what's broken, and what's worth keeping. We'll give you an honest picture of the codebase quality before committing to a cost estimate.",
      },
      {
        question: "Will you maintain the software after launch?",
        answer:
          "Yes. We offer ongoing maintenance and iteration as a separate engagement after launch. Many clients run a retainer for regular feature development, bug fixes, and performance improvements.",
      },
    ],
  },

  // ── Web & Mobile Development ───────────────────────────────────────────────
  {
    slug: "web-mobile",
    seoTitle: "Web & Mobile Development — TechnoSX",
    seoDescription:
      "Fast, accessible web applications and native or cross-platform mobile apps. Modern frameworks, performance-first, and responsive across every device.",
    headline: "Web and mobile that performs.",
    subheadline:
      "We create fast, robust web applications and native and cross-platform mobile apps, with responsive front-ends built on modern frameworks for a seamless experience across devices.",
    subCapabilities: [
      "Next.js & React web applications",
      "React Native cross-platform mobile (iOS + Android)",
      "Native iOS & Android development",
      "Progressive Web Apps (PWA)",
      "Performance optimisation (Core Web Vitals)",
      "Accessibility (WCAG 2.1 AA)",
      "Responsive design systems",
      "Micro-frontend architecture",
      "Real-time features (WebSockets, SSE)",
      "Offline-first mobile experiences",
    ],
    process: [
      {
        step: "01",
        title: "Design to component",
        body: "We implement pixel-accurate designs as reusable, typed components. No ad-hoc styling — a design system that scales.",
      },
      {
        step: "02",
        title: "Performance by default",
        body: "Lighthouse ≥95 is a requirement, not a goal. Code splitting, lazy loading, image optimisation, and font loading are standard, not optional.",
      },
      {
        step: "03",
        title: "Accessibility baked in",
        body: "WCAG 2.1 AA compliance from the first sprint. Semantic HTML, keyboard navigation, screen reader testing, and colour contrast — not a last-minute audit.",
      },
      {
        step: "04",
        title: "Cross-device verification",
        body: "Every component verified at 375px, 768px, 1024px, and 1280px+. Mobile is not an afterthought.",
      },
    ],
    techStack: [
      "Next.js",
      "React",
      "React Native",
      "Expo",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Reanimated",
      "FlashList",
      "expo-router",
      "Vite",
      "Vitest",
      "Playwright",
    ],
    faqs: [
      {
        question: "React Native or native iOS/Android — which do you recommend?",
        answer:
          "React Native (with Expo) is our default for most products — one codebase, 90%+ feature parity with native, and faster iteration. We recommend native only when you need hardware-level performance, advanced platform APIs, or have strict App Store review requirements that cross-platform tools complicate. We'll give you an honest recommendation based on your specific requirements.",
      },
      {
        question: "How do you handle performance on mobile?",
        answer:
          "FlashList instead of FlatList for large datasets, Reanimated for 60fps animations running on the UI thread, lazy loading for heavy screens, and Hermes JS engine enabled by default. We profile before and after every significant change.",
      },
    ],
  },

  // ── Cloud & DevOps ─────────────────────────────────────────────────────────
  {
    slug: "cloud-devops",
    seoTitle: "Cloud & DevOps Engineering — TechnoSX",
    seoDescription:
      "Cloud architecture, migration, and optimisation across AWS, Azure, and GCP. CI/CD pipelines, Kubernetes orchestration, and infrastructure automation for secure, scalable deployments.",
    headline: "Infrastructure that scales with you.",
    subheadline:
      "We design, migrate, and optimise cloud environments across AWS, Azure, and GCP, and run automated CI/CD pipelines, Kubernetes-based container orchestration, and infrastructure automation for fast, secure, scalable deployments — plus ongoing cloud maintenance.",
    subCapabilities: [
      "Cloud architecture design & migration",
      "AWS, Azure, GCP",
      "CI/CD pipeline engineering (GitHub Actions, GitLab CI)",
      "Kubernetes orchestration (EKS, GKE, AKS)",
      "Infrastructure as Code (Terraform, Pulumi, CDK)",
      "Container & Docker optimisation",
      "Observability (OpenTelemetry, Grafana, Prometheus)",
      "Security hardening & compliance",
      "Cost optimisation & FinOps",
      "Ongoing cloud maintenance",
    ],
    process: [
      {
        step: "01",
        title: "Audit & design",
        body: "We assess your current infrastructure, identify risks and inefficiencies, and design a target architecture with clear migration steps.",
      },
      {
        step: "02",
        title: "Infrastructure as Code",
        body: "Everything in Terraform or Pulumi. No click-ops. Every change is version-controlled, reviewed, and reproducible.",
      },
      {
        step: "03",
        title: "CI/CD automation",
        body: "Lint → typecheck → test → security scan → deploy. Gates enforced. Rolling deployments with instant rollback. No manual steps.",
      },
      {
        step: "04",
        title: "Observability & alerting",
        body: "OpenTelemetry for distributed tracing, RED metrics for every service, structured JSON logging, and SLO-based alerting — not raw metric thresholds.",
      },
    ],
    techStack: [
      "AWS",
      "Azure",
      "GCP",
      "Terraform",
      "Pulumi",
      "Kubernetes",
      "Docker",
      "Helm",
      "GitHub Actions",
      "OpenTelemetry",
      "Grafana",
      "Prometheus",
      "Trivy",
      "PgBouncer",
      "Redis",
      "Vault",
    ],
    faqs: [
      {
        question: "Can you migrate us from one cloud provider to another without downtime?",
        answer:
          "Yes. We use a blue-green migration pattern: run the new environment in parallel, validate thoroughly, then cut DNS over. Typical downtime is under 5 minutes for most applications. For stateful services (databases), we use replication-based cutovers.",
      },
      {
        question: "How do you manage secrets and credentials?",
        answer:
          "Secrets are never in code, never in .env files committed to version control. We use AWS Secrets Manager, HashiCorp Vault, or Doppler depending on your stack. Rotation policies are automated. Any suspected exposure triggers immediate rotation.",
      },
    ],
  },

  // ── Data & Business Intelligence ───────────────────────────────────────────
  {
    slug: "data-bi",
    seoTitle: "Data Engineering & Business Intelligence — TechnoSX",
    seoDescription:
      "Data engineering, analytics, and visualisation with Power BI and Tableau. We turn complex data into trustworthy decisions.",
    headline: "Complex data. Clear decisions.",
    subheadline:
      "We turn complex data into decisions through data engineering, analytics, and visualisation with tools like Power BI and Tableau, supported by data quality, discovery, and cataloguing so your insights are trustworthy as well as accessible.",
    subCapabilities: [
      "Data pipeline engineering (ELT/ETL)",
      "Data warehouse design (Snowflake, BigQuery, Redshift)",
      "dbt transformations & semantic layer",
      "Power BI & Tableau dashboards",
      "Real-time streaming (Kafka, Kinesis)",
      "Data quality & governance",
      "Data cataloguing & lineage",
      "Natural language analytics (AI-powered)",
      "Predictive analytics & forecasting",
      "Self-serve analytics infrastructure",
    ],
    process: [
      {
        step: "01",
        title: "Data audit",
        body: "We map your data sources, identify quality issues, and understand what decisions the data needs to support. Most analytics failures start with bad data, not bad visualisations.",
      },
      {
        step: "02",
        title: "Pipeline architecture",
        body: "Design the ELT pipeline: ingestion, transformation (dbt), semantic layer, and serving layer. Data contracts defined before code written.",
      },
      {
        step: "03",
        title: "Dashboard development",
        body: "Dashboards built to answer specific business questions — not data dumps. Every metric has a clear definition and a clear owner.",
      },
      {
        step: "04",
        title: "Governance & maintenance",
        body: "Column-level documentation, PII classification, access controls, and automated data quality checks. Trustworthy data is maintained data.",
      },
    ],
    techStack: [
      "Snowflake",
      "BigQuery",
      "Redshift",
      "dbt",
      "Airflow",
      "Airbyte",
      "Kafka",
      "Power BI",
      "Tableau",
      "Metabase",
      "DataHub",
      "Great Expectations",
    ],
    faqs: [
      {
        question: "How long does it take to get a working data pipeline?",
        answer:
          "A basic ELT pipeline with 2–3 data sources and a Snowflake warehouse is typically running in 2–3 weeks. Full data platform including semantic layer, governance, and dashboards: 8–12 weeks. The first dashboards are usually available within 2 weeks of the pipeline being live.",
      },
    ],
  },

  // ── E-commerce ─────────────────────────────────────────────────────────────
  {
    slug: "ecommerce",
    seoTitle: "E-commerce Development — TechnoSX",
    seoDescription:
      "Shopify, WooCommerce, Magento, and custom commerce platforms with conversion and performance optimisation built in.",
    headline: "Commerce that converts.",
    subheadline:
      "We build and scale online stores on Shopify, WooCommerce, and Magento, as well as custom commerce platforms, with conversion and performance optimisation built in.",
    subCapabilities: [
      "Shopify & Shopify Plus development",
      "WooCommerce customisation",
      "Magento development",
      "Headless commerce (Shopify Hydrogen)",
      "Custom commerce platforms",
      "Payment gateway integration (Stripe, Adyen)",
      "Conversion rate optimisation (CRO)",
      "Performance optimisation",
      "Inventory & fulfilment integration",
      "AI-powered product recommendations",
    ],
    process: [
      {
        step: "01",
        title: "Commerce audit",
        body: "Review your current funnel, conversion rates, and technical constraints. We identify the highest-impact improvements before writing code.",
      },
      {
        step: "02",
        title: "Platform decision",
        body: "Shopify for most stores. Headless for performance-critical or highly customised experiences. Custom platform only when existing solutions genuinely can't meet requirements.",
      },
      {
        step: "03",
        title: "Build & optimise",
        body: "Conversion-focused front-end, PCI-aware payment integration, fast checkout, and Core Web Vitals compliance. Performance is revenue.",
      },
      {
        step: "04",
        title: "Scale & iterate",
        body: "A/B testing infrastructure, analytics instrumentation, and ongoing CRO. We measure the impact of every change.",
      },
    ],
    techStack: [
      "Shopify",
      "Shopify Hydrogen",
      "WooCommerce",
      "Magento",
      "Next.js Commerce",
      "Stripe",
      "Adyen",
      "TypeScript",
      "React",
      "Tailwind CSS",
    ],
    faqs: [
      {
        question: "When does it make sense to go headless?",
        answer:
          "Headless is worth the complexity when: you need sub-second page loads on mobile, you're building a highly custom UI that Shopify themes can't support, or you need deep integration with an existing tech stack. For most stores, Shopify with a well-built theme is faster to market and easier to maintain.",
      },
    ],
  },

  // ── UI/UX Design ───────────────────────────────────────────────────────────
  {
    slug: "ui-ux-design",
    seoTitle: "UI/UX Design — TechnoSX",
    seoDescription:
      "Research-driven interface design, prototyping, and reusable design systems that attract, convert, and retain users.",
    headline: "Interfaces that convert.",
    subheadline:
      "We craft visually compelling, brand-strengthening interfaces grounded in user research, prototyping, and reusable design systems that attract, convert, and retain users.",
    subCapabilities: [
      "User research & Jobs-to-be-Done mapping",
      "UX strategy & information architecture",
      "Wireframing & low-fidelity prototyping",
      "High-fidelity UI design (Figma)",
      "Design system creation (token-based)",
      "Interactive prototypes",
      "Usability testing",
      "Brand-aligned visual design",
      "Conversion-focused UX",
      "Dev handoff (Figma Dev Mode)",
    ],
    process: [
      {
        step: "01",
        title: "Research",
        body: "User interviews, competitive analysis, heuristic evaluation. We understand the problem before proposing solutions.",
      },
      {
        step: "02",
        title: "Architecture & wireframes",
        body: "Information architecture, user flows, and low-fidelity wireframes validated with stakeholders before investing in high-fidelity work.",
      },
      {
        step: "03",
        title: "Design system & UI",
        body: "Token-based design system in Figma Variables. High-fidelity screens with every interaction state defined. No ambiguity at handoff.",
      },
      {
        step: "04",
        title: "Prototype & test",
        body: "Interactive prototype tested with real users before engineering begins. Issues caught here are 10x cheaper than in production.",
      },
    ],
    techStack: [
      "Figma",
      "Figma Dev Mode",
      "Figma Variables",
      "Google Stitch",
      "Framer",
      "Maze (usability testing)",
      "Hotjar",
      "Mixpanel",
    ],
    faqs: [
      {
        question: "Do you design and build, or just design?",
        answer:
          "Both. Our design and engineering teams are the same company — the design system we create maps directly to the component library our engineers build. No translation layer, no interpretation errors. The design token in Figma becomes the CSS variable in code.",
      },
    ],
  },

  // ── Quality Assurance ──────────────────────────────────────────────────────
  {
    slug: "quality-assurance",
    seoTitle: "Quality Assurance & Testing — TechnoSX",
    seoDescription:
      "Manual and automated testing, performance testing, and QA processes integrated from sprint 1. Ship reliable software with confidence.",
    headline: "Quality baked in — not bolted on.",
    subheadline:
      "We bake quality into delivery with manual and automated testing, performance testing, and QA processes designed to ship reliable software with confidence.",
    subCapabilities: [
      "Test strategy & planning",
      "Automated unit & integration testing",
      "End-to-end testing (Playwright)",
      "API testing & contract testing",
      "Performance & load testing (k6)",
      "Accessibility testing (WCAG 2.1 AA)",
      "Security testing & OWASP validation",
      "Manual exploratory testing",
      "CI/CD quality gates",
      "Test coverage reporting",
    ],
    process: [
      {
        step: "01",
        title: "Test strategy",
        body: "70% unit / 20% integration / 10% e2e — the testing pyramid applied consistently. E2e covers critical user paths only. We write the strategy before the first sprint.",
      },
      {
        step: "02",
        title: "Shift-left testing",
        body: "QA integrated from sprint 1, not as a gate before release. Bug cost at requirements: $1. Bug cost in production: $100. We fix them at requirements.",
      },
      {
        step: "03",
        title: "Automation pipeline",
        body: "Automated tests run on every PR. Lint → typecheck → unit → integration → e2e → performance. PRs that break the pipeline don't merge.",
      },
      {
        step: "04",
        title: "Performance & security",
        body: "Lighthouse CI enforced. Load testing before any traffic-significant launch. OWASP Top 10 validation before production deployments.",
      },
    ],
    techStack: [
      "Vitest",
      "Playwright",
      "Cypress",
      "Testing Library",
      "k6",
      "Lighthouse CI",
      "OWASP ZAP",
      "Axe",
      "GitHub Actions",
      "Jest",
      "MSW",
    ],
    faqs: [
      {
        question: "Can you add testing to an existing project with no tests?",
        answer:
          "Yes. We start with the highest-risk, least-tested areas — typically the payment flow, authentication, and data mutations. We add tests incrementally, never stopping feature development to 'add tests for everything'. Coverage improves continuously without a big-bang rewrite.",
      },
    ],
  },

  // ── Cybersecurity ──────────────────────────────────────────────────────────
  {
    slug: "cybersecurity",
    seoTitle: "Cybersecurity — TechnoSX",
    seoDescription:
      "Security architecture, zero-trust implementation, vulnerability management, and secure development practices integrated from the start — secure by design.",
    headline: "Secure by design.",
    subheadline:
      "We build secure by design, with security architecture, zero-trust implementations, vulnerability management, and secure development practices integrated from the start.",
    subCapabilities: [
      "Security architecture review",
      "Zero-trust network architecture",
      "Authentication & authorisation (OAuth2, OIDC, RBAC)",
      "OWASP Top 10 validation",
      "Vulnerability management",
      "Secrets management (Vault, AWS Secrets Manager)",
      "Penetration testing coordination",
      "GDPR & compliance advisory",
      "Secure code review",
      "Incident response planning",
    ],
    process: [
      {
        step: "01",
        title: "Threat modelling",
        body: "STRIDE analysis on your architecture. We identify what attackers will target before they do.",
      },
      {
        step: "02",
        title: "Secure architecture",
        body: "Zero-trust by default. Deny all, explicit allow. Short-lived tokens, automatic rotation, and httpOnly cookies — not localStorage.",
      },
      {
        step: "03",
        title: "Automated security gates",
        body: "Trivy and Snyk in CI. Dependency pinning. Dependabot enabled. No CVE ships to production without a decision.",
      },
      {
        step: "04",
        title: "Continuous monitoring",
        body: "Security events logged and alerted. Anomaly detection. Incident response runbook before launch, not after.",
      },
    ],
    techStack: [
      "OWASP ZAP",
      "Trivy",
      "Snyk",
      "HashiCorp Vault",
      "AWS Secrets Manager",
      "Auth0",
      "Keycloak",
      "Cloudflare",
      "AWS WAF",
      "Dependabot",
    ],
    faqs: [
      {
        question: "What does 'secure by design' actually mean in practice?",
        answer:
          "It means security decisions are made at the architecture stage, not the audit stage. Parameterised queries by default. Secrets never in code. Auth checked at the data layer, not just the API layer. HTTPS enforced, not optional. CSP headers configured. These are non-negotiable defaults on every project we touch.",
      },
    ],
  },

  // ── Database Administration ────────────────────────────────────────────────
  {
    slug: "database-administration",
    seoTitle: "Database Administration — TechnoSX",
    seoDescription:
      "Reliable database design, optimisation, and maintenance across SQL and NoSQL systems. Fast, available, and secure.",
    headline: "Fast, available, and secure data.",
    subheadline:
      "We provide reliable design, optimisation, and maintenance across SQL and NoSQL systems, keeping your data fast, available, and secure.",
    subCapabilities: [
      "Database architecture & design",
      "PostgreSQL, MySQL, SQL Server",
      "MongoDB, DynamoDB, Redis",
      "Query optimisation & indexing",
      "Schema migrations (forward-only, zero-downtime)",
      "Replication & high availability",
      "Backup & point-in-time recovery",
      "Connection pooling (PgBouncer)",
      "Performance monitoring & tuning",
      "Data modelling for AI workloads",
    ],
    process: [
      {
        step: "01",
        title: "Audit & benchmarking",
        body: "We analyse query plans, index usage, and lock contention. Slow queries are measured before being fixed — without measurement, optimisation is guesswork.",
      },
      {
        step: "02",
        title: "Schema & index design",
        body: "Every foreign key indexed. Every WHERE and ORDER BY column indexed. Never SELECT * in production. Schema decisions made with the access patterns, not against them.",
      },
      {
        step: "03",
        title: "Migration strategy",
        body: "Forward-only migrations, tested against a production data volume clone before applying. No destructive changes without a rollback plan.",
      },
      {
        step: "04",
        title: "HA & monitoring",
        body: "Read replicas for read-heavy workloads. PgBouncer for connection pooling. Automated backups with tested restore procedures. Slow query alerts.",
      },
    ],
    techStack: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "DynamoDB",
      "Redis",
      "Elasticsearch",
      "PgBouncer",
      "pgvector",
      "Prisma",
      "Flyway",
    ],
    faqs: [
      {
        question: "Can you optimise a database that's already in production and too slow?",
        answer:
          "Yes. We start with EXPLAIN ANALYZE on the slowest queries, identify missing indexes and N+1 patterns, and implement changes in order of impact. We work on a read replica first, validate, then apply to production during low-traffic windows. No downtime for index additions on modern Postgres.",
      },
    ],
  },
]

export function getServiceDetail(slug: string): ServiceDetail | undefined {
  return SERVICE_DETAILS.find((s) => s.slug === slug)
}

export { SERVICE_DETAILS }

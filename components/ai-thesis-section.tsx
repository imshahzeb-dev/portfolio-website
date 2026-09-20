"use client"

import Link from "next/link"
import { Reveal } from "@/components/reveal"
import { IllustrationPanel } from "@/components/illustration-panel"
import { AiMlArt } from "@/components/illustrations/hero-art"
import { Icon } from "@/components/icons"
import { IconTile } from "@/components/icon-tile"

const PILLARS = [
  {
    icon: "graph" as const,
    title: "Agentic workflows",
    body: "Multi-agent orchestration, tool use, function calling and memory layers — not a single prompt behind a button.",
  },
  {
    icon: "files" as const,
    title: "GenAI engineering",
    body: "RAG pipelines with hybrid retrieval and reranking, embeddings that stay in sync, and query optimisation.",
  },
  {
    icon: "cpu" as const,
    title: "Custom ML models",
    body: "Trained on your data with experiment tracking, a model registry, CI/CD for models and drift monitoring.",
  },
  {
    icon: "lock-key" as const,
    title: "Secure on-premise",
    body: "Air-gapped LLM deployment on vLLM or Ollama where data residency and sensitivity require it.",
  },
]

/**
 * The "OUR CORE" band from content.md §6 — the positioning statement that
 * separates woven-in AI from bolted-on AI.
 */
export function AiThesisSection() {
  return (
    <section className="pt-[120px] pb-[120px] bg-[rgb(var(--b1))]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <span className="mb-2 block text-lg font-semibold text-[#FF9958]">Our core</span>
            <h2 className="fs-two font-semibold text-gray-900 dark:text-white mb-5">
              AI, woven in — not bolted on.
            </h2>
            <p className="mb-4 text-lg text-gray-600 dark:text-gray-300">
              Bolted-on AI is a feature added in sprint 20. It calls an LLM API, returns a
              response, and never improves — because the data model, the event system and the
              caching layer were never designed with intelligence in mind.
            </p>
            <p className="mb-8 text-lg text-gray-600 dark:text-gray-300">
              Woven-in AI starts with an architectural decision: where does intelligence belong
              in this system, and what data does it need to be good? That question shapes the
              schema, the event model and the API surface before a single feature is built.
            </p>
            <Link
              href="/services/ai-machine-learning"
              className="inline-flex items-center gap-2 rounded-full bg-[#0059E8] px-7 py-3.5 font-medium text-white transition-all duration-300 hover:gap-3 hover:bg-[#0046BA]"
            >
              Explore AI &amp; ML
              <Icon name="arrow-right" />
            </Link>
          </Reveal>

          <Reveal delay={0.12}>
            <IllustrationPanel
              accent="#4d92ff"
              className="h-[360px] rounded-2xl border border-[#CEE3FF] dark:border-[#0E2C63] md:h-[440px]"
            >
              <AiMlArt color="#4d92ff" size={340} />
            </IllustrationPanel>
          </Reveal>
        </div>

        {/* Pillars */}
        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {PILLARS.map((pillar, index) => (
            <Reveal key={pillar.title} delay={index * 0.08} className="h-full">
              <div className="group h-full rounded-xl border border-[#CEE3FF] bg-white p-6 transition-all hover:border-[#0059E8] hover:shadow-xl dark:border-[#0E2C63] dark:bg-[#0B2451]">
                <IconTile name={pillar.icon} size="sm" className="mb-4" />
                <h3 className="fs-six font-semibold text-gray-900 dark:text-white mb-2">
                  {pillar.title}
                </h3>
                <p className="text-base text-gray-600 dark:text-gray-300">{pillar.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

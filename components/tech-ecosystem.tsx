"use client"

import { useRef } from "react"
import { motion, useInView, useReducedMotion } from "framer-motion"
import { SectionHeading } from "@/components/section-heading"

/**
 * Scrolling technology ribbons. Stack data ported from the reference repo
 * (sourced from its content.md [EXPAND] sections); the markup is rebuilt
 * against this site's dark-blue theme.
 */

const EASE = [0.16, 1, 0.3, 1] as const

const STACK = [
  {
    label: "Foundation Models",
    speed: "42s",
    dir: "left" as const,
    items: [
      "GPT-4o",
      "Claude 3.5 Sonnet",
      "Gemini 1.5 Pro",
      "Llama 3.1",
      "Mistral Large",
      "DeepSeek-V3",
      "Phi-4",
      "Qwen 2.5",
    ],
  },
  {
    label: "Vector & RAG",
    speed: "34s",
    dir: "right" as const,
    items: [
      "Pinecone",
      "pgvector",
      "Weaviate",
      "Qdrant",
      "LangChain",
      "LlamaIndex",
      "FAISS",
      "Chroma",
      "Milvus",
    ],
  },
  {
    label: "Frontend",
    speed: "48s",
    dir: "left" as const,
    items: [
      "Next.js",
      "React",
      "React Native",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Expo SDK",
      "Vite",
    ],
  },
  {
    label: "Backend & APIs",
    speed: "38s",
    dir: "right" as const,
    items: [
      "Node.js",
      "FastAPI",
      "Django",
      "PostgreSQL",
      "Redis",
      "GraphQL",
      "tRPC",
      "Prisma",
      "BullMQ",
    ],
  },
  {
    label: "Cloud & DevOps",
    speed: "52s",
    dir: "left" as const,
    items: [
      "AWS",
      "Azure",
      "GCP",
      "Kubernetes",
      "Docker",
      "Terraform",
      "GitHub Actions",
      "Helm",
      "Prometheus",
    ],
  },
]

function MarqueeRow({
  label,
  items,
  dir,
  speed,
  index,
  inView,
  reduced,
}: {
  label: string
  items: string[]
  dir: "left" | "right"
  speed: string
  index: number
  inView: boolean
  reduced: boolean
}) {
  // Duplicated so the -50% translate loops seamlessly.
  const track = [...items, ...items]

  return (
    <motion.div
      className="flex items-center"
      initial={reduced ? {} : { opacity: 0, x: dir === "left" ? -16 : 16 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.55, delay: reduced ? 0 : index * 0.07, ease: EASE }}
    >
      <div className="mr-5 hidden w-44 shrink-0 justify-end border-r border-white/10 pr-5 lg:flex">
        <span className="select-none text-right text-[10px] font-semibold uppercase leading-[1.4] tracking-[0.16em] text-white/35">
          {label}
        </span>
      </div>

      <div
        className="flex-1 overflow-hidden"
        style={{
          maskImage: "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
        }}
      >
        <div
          className="svc-marquee flex w-max gap-3 py-1"
          style={{
            animation: `svc-marquee-${dir} ${speed} linear infinite`,
          }}
        >
          {track.map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="whitespace-nowrap rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-white/70 transition-colors hover:border-[#0059E8] hover:text-white"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export function TechEcosystem() {
  const reduced = useReducedMotion() ?? false
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.15 })

  return (
    <section
      ref={ref}
      aria-label="Technology stack we build with"
      className="relative overflow-hidden bg-[#0A2E6B] pt-[120px] pb-[120px] dark:bg-[#09111F]"
    >
      {/* Ambient glow + dot texture, both decorative */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 80%, rgba(0,89,232,0.28) 0%, transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative container mx-auto px-4">
        <SectionHeading
          eyebrow="The stack"
          title="Every tool earned, not assumed."
          description="We pick the right tool for the problem, not the most fashionable one. If something in your stack already works, we keep it."
          tone="onDark"
          className="mb-12 lg:mb-16"
        />

        <div className="flex flex-col gap-3">
          {STACK.map((row, i) => (
            <MarqueeRow
              key={row.label}
              {...row}
              index={i}
              inView={inView}
              reduced={reduced}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

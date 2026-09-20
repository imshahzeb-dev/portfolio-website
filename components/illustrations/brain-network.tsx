"use client"

/**
 * Brain-network hero illustration — an animated neural silhouette with pulsing
 * hub nodes, travelling data packets and a spark field.
 *
 * Ported from the reference repo and recoloured from its emerald/gold
 * palette to this site's blue (#0059E8) and orange (#FF9958) theme.
 */

import { motion, useInView, useReducedMotion } from "framer-motion"
import { useRef } from "react"

const EASE = [0.16, 1, 0.3, 1] as const

// ── BRAIN SILHOUETTE — FULL BEZIER, SYMMETRIC OVAL ───────────────────────────
// BOTTOM: explicit smooth 4-segment bezier (predictable convex oval)
// TOP: bumpy path with 3 gyri peaks
// Brain ellipse: cx≈236 cy≈195 rx≈150 ry≈138
const BRAIN_PATH =
  "M 86,195 " +
  // ── TOP (frontal → occipital, going right) ──
  "C 86,168 94,140 114,116 " + // frontal face ascending
  "C 128,96  142,80  156,72 " + // frontal top
  "C 166,65  178,60  188,65 " + // frontal bump       (y=60)
  "C 196,70  204,76  212,72 " + // sulcus
  "C 220,65  232,58  244,62 " + // main parietal peak (y=58)
  "C 254,66  261,72  270,68 " + // sulcus
  "C 278,63  294,62  310,70 " + // parietal-occipital (y=62)
  "C 328,76  348,90  364,112 " + // occipital ascending
  "C 378,132 388,160 388,192 " + // occipital pole
  // ── BOTTOM (occipital → frontal, going left) — smooth bezier oval ──
  "C 388,222 382,250 368,272 " + // right side downward
  "C 352,296 328,314 296,322 " + // lower-right curve
  "C 266,330 240,330 210,322 " + // temporal base
  "C 178,314 154,296 138,272 " + // lower-left curve
  "C 122,250 88,222 86,195 Z" // left side returning to frontal pole

// Gyri echo-arcs — well inside brain boundary, following superior surface curvature
const GYRI_PATHS: string[] = [
  // Row 1 — close to surface
  "M 152,88  C 165,80  180,78  192,84",
  "M 208,82  C 222,76  238,76  248,84",
  "M 264,80  C 282,76  302,84  316,96",
  // Row 2 — deeper layer
  "M 136,112 C 152,103 168,101 180,108",
  "M 196,106 C 214,99  234,101 244,112",
  "M 260,106 C 280,102 304,112 316,130",
  // Occipital
  "M 338,125 C 354,136 364,156 364,178",
]

interface NodeDef {
  x: number
  y: number
  r: number
  hub: boolean
  d: number
}
const NODES: NodeDef[] = [
  { x: 126, y: 152, r: 3.8, hub: false, d: 0.0 },
  { x: 158, y: 112, r: 3.2, hub: false, d: 0.4 },
  { x: 148, y: 192, r: 5.0, hub: true, d: 0.8 },
  { x: 210, y: 85, r: 3.2, hub: false, d: 0.2 },
  { x: 248, y: 115, r: 5.5, hub: true, d: 0.6 }, // main hub
  { x: 238, y: 192, r: 3.8, hub: false, d: 1.0 },
  { x: 298, y: 112, r: 5.0, hub: true, d: 0.3 },
  { x: 346, y: 152, r: 3.2, hub: false, d: 0.7 },
  { x: 358, y: 208, r: 3.8, hub: false, d: 1.1 },
  { x: 175, y: 262, r: 3.8, hub: false, d: 0.5 },
  { x: 240, y: 288, r: 5.0, hub: true, d: 0.9 },
  { x: 298, y: 276, r: 3.2, hub: false, d: 0.1 },
  { x: 170, y: 232, r: 2.8, hub: false, d: 1.2 },
  { x: 332, y: 254, r: 3.8, hub: false, d: 0.4 },
]

const CONNECTIONS: [number, number][] = [
  [0, 2],
  [1, 3],
  [0, 3],
  [2, 4],
  [3, 4],
  [4, 5],
  [4, 6],
  [5, 10],
  [6, 7],
  [7, 8],
  [8, 13],
  [9, 10],
  [10, 11],
  [11, 13],
  [2, 9],
  [5, 12],
  [12, 9],
]

const PACKETS = [
  { path: "M 126,152 L 248,115 L 298,112", dur: "2.8s", delay: "0s" },
  { path: "M 148,192 L 248,115 L 346,152", dur: "3.2s", delay: "0.8s" },
  { path: "M 240,288 L 248,115", dur: "2.2s", delay: "1.4s" },
  { path: "M 298,112 L 358,208 L 332,254", dur: "2.6s", delay: "0.4s" },
  { path: "M 148,192 L 175,262 L 240,288", dur: "3.0s", delay: "1.8s" },
]

// Spark particles radiating out from brain — golden + blue-white + bright white
interface SparkDef {
  x: number
  y: number
  r: number
  c: string
  d: number
}
const SPARKS: SparkDef[] = [
  // Outer golden ring
  { x: 45, y: 112, r: 1.5, c: "#FF9958", d: 0.0 },
  { x: 34, y: 172, r: 1.2, c: "#FFB27E", d: 0.3 },
  { x: 52, y: 232, r: 1.7, c: "#FF9958", d: 0.8 },
  { x: 70, y: 285, r: 1.3, c: "#FFC9A3", d: 1.2 },
  { x: 104, y: 328, r: 1.6, c: "#FF9958", d: 0.5 },
  { x: 152, y: 348, r: 1.9, c: "#FFB27E", d: 1.0 },
  { x: 210, y: 354, r: 1.4, c: "#FF9958", d: 0.2 },
  { x: 268, y: 350, r: 1.7, c: "#FFC9A3", d: 0.7 },
  { x: 322, y: 334, r: 1.3, c: "#FF9958", d: 1.3 },
  { x: 368, y: 308, r: 1.8, c: "#FFB27E", d: 0.4 },
  { x: 410, y: 270, r: 1.4, c: "#FF9958", d: 0.9 },
  { x: 432, y: 220, r: 1.9, c: "#FFC9A3", d: 1.5 },
  { x: 430, y: 162, r: 1.5, c: "#FF9958", d: 0.6 },
  { x: 416, y: 105, r: 1.3, c: "#FFB27E", d: 1.1 },
  { x: 390, y: 57, r: 1.6, c: "#FF9958", d: 0.1 },
  { x: 334, y: 28, r: 1.4, c: "#FFC9A3", d: 0.6 },
  { x: 270, y: 20, r: 1.7, c: "#FF9958", d: 1.4 },
  { x: 206, y: 23, r: 1.3, c: "#FFB27E", d: 0.3 },
  { x: 140, y: 40, r: 1.7, c: "#FF9958", d: 0.8 },
  { x: 84, y: 72, r: 1.4, c: "#FFC9A3", d: 1.6 },
  // Mid ring — blue-white
  { x: 65, y: 142, r: 2.3, c: "#e0f2fe", d: 0.2 },
  { x: 68, y: 250, r: 2.0, c: "#bfdbfe", d: 0.7 },
  { x: 122, y: 336, r: 2.4, c: "#e0f2fe", d: 1.1 },
  { x: 232, y: 345, r: 2.1, c: "#bfdbfe", d: 0.4 },
  { x: 350, y: 300, r: 2.2, c: "#e0f2fe", d: 0.9 },
  { x: 420, y: 194, r: 2.1, c: "#bfdbfe", d: 1.4 },
  { x: 396, y: 84, r: 2.3, c: "#e0f2fe", d: 0.0 },
  { x: 248, y: 30, r: 2.1, c: "#bfdbfe", d: 0.5 },
  { x: 135, y: 49, r: 1.9, c: "#e0f2fe", d: 1.0 },
  // Inner bright white
  { x: 94, y: 96, r: 3.0, c: "#ffffff", d: 0.3 },
  { x: 88, y: 205, r: 2.6, c: "#ffffff", d: 0.8 },
  { x: 152, y: 326, r: 2.4, c: "#ffffff", d: 1.3 },
  { x: 300, y: 324, r: 2.8, c: "#ffffff", d: 0.2 },
  { x: 392, y: 238, r: 2.6, c: "#ffffff", d: 0.7 },
  { x: 390, y: 130, r: 2.3, c: "#ffffff", d: 1.2 },
  { x: 298, y: 38, r: 2.6, c: "#ffffff", d: 0.4 },
  { x: 178, y: 38, r: 2.4, c: "#ffffff", d: 0.9 },
]

interface BrainNetworkProps {
  className?: string
  width?: number
}

export function BrainNetwork({ className = "", width = 480 }: BrainNetworkProps) {
  const pr = useReducedMotion() ?? false
  const ref = useRef<SVGSVGElement>(null)
  const inView = useInView(ref as React.RefObject<Element>, { once: true, amount: 0.15 })

  return (
    <motion.svg
      ref={ref}
      viewBox="0 0 480 400"
      width={width}
      height={Math.round(width * (400 / 480))}
      className={`overflow-visible select-none ${className}`}
      aria-hidden="true"
      initial={pr ? {} : { opacity: 0, scale: 0.94 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 1.0, ease: EASE }}
    >
      <style>{`
        @media (prefers-reduced-motion: reduce) { .bnn * { animation: none !important; } }

        .bnn-hub  { animation: ${pr ? "none" : "bnn-pulse-hub 2.6s ease-in-out infinite"}; }
        .bnn-reg  { animation: ${pr ? "none" : "bnn-pulse-reg 3.2s ease-in-out infinite"}; }
        @keyframes bnn-pulse-hub {
          0%,100% { opacity:0.85; filter:drop-shadow(0 0 9px rgba(155,196,255,0.95)); }
          50%     { opacity:1;    filter:drop-shadow(0 0 24px rgba(155,196,255,1.00)); }
        }
        @keyframes bnn-pulse-reg {
          0%,100% { opacity:0.65; filter:drop-shadow(0 0 4px rgba(77,146,255,0.75)); }
          50%     { opacity:0.92; filter:drop-shadow(0 0 13px rgba(77,146,255,0.95)); }
        }

        .bnn-gyri    { animation: ${pr ? "none" : "bnn-gyri  4.5s ease-in-out infinite"}; }
        @keyframes bnn-gyri    { 0%,100%{opacity:0.28} 50%{opacity:0.50} }

        .bnn-syl     { animation: ${pr ? "none" : "bnn-syl   3.5s ease-in-out infinite"}; }
        @keyframes bnn-syl     { 0%,100%{opacity:0.38} 50%{opacity:0.68} }

        .bnn-conn    { animation: ${pr ? "none" : "bnn-conn  5.0s ease-in-out infinite"}; }
        @keyframes bnn-conn    { 0%,100%{opacity:0.30} 50%{opacity:0.62} }

        .bnn-pkt {
          animation: ${pr ? "none" : "bnn-travel var(--dur) var(--delay) linear infinite"};
          fill:#bfdbfe;
          filter:drop-shadow(0 0 6px rgba(191,219,254,0.95));
        }
        @keyframes bnn-travel {
          0%  { offset-distance:0%;   opacity:0; }
          6%  { opacity:1; }
          88% { opacity:1; }
          100%{ offset-distance:100%; opacity:0; }
        }

        .bnn-spark { animation: ${pr ? "none" : "bnn-twinkle var(--ds) var(--dd) ease-in-out infinite"}; }
        @keyframes bnn-twinkle { 0%,100%{opacity:var(--dop)} 50%{opacity:1} }

        .bnn-atm  { animation: ${pr ? "none" : "bnn-breathe 4s ease-in-out infinite"}; }
        @keyframes bnn-breathe { 0%,100%{opacity:0.72} 50%{opacity:1} }

        .bnn-inner { animation: ${pr ? "none" : "bnn-inner-b 3.8s ease-in-out infinite"}; }
        @keyframes bnn-inner-b { 0%,100%{opacity:0.58} 50%{opacity:0.90} }

        .bnn-outline {
          stroke-dasharray:2200;
          stroke-dashoffset:2200;
          animation:${pr ? "none" : "bnn-draw 2.5s 0.3s ease-out forwards"};
        }
        @keyframes bnn-draw { to { stroke-dashoffset:0; } }
      `}</style>

      <defs>
        <clipPath id="bnn-clip">
          <path d={BRAIN_PATH} />
        </clipPath>

        {/* Outer atmospheric halo */}
        <radialGradient id="bnn-atm" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#0046BA" stopOpacity="0.55" />
          <stop offset="42%" stopColor="#0046BA" stopOpacity="0.20" />
          <stop offset="100%" stopColor="#0046BA" stopOpacity="0" />
        </radialGradient>

        {/* Brain body — dark outer, brighter core */}
        <radialGradient id="bnn-body" cx="41%" cy="36%" r="62%">
          <stop offset="0%" stopColor="#0059E8" stopOpacity="0.48" />
          <stop offset="30%" stopColor="#003E8F" stopOpacity="0.74" />
          <stop offset="70%" stopColor="#0B2451" stopOpacity="0.92" />
          <stop offset="100%" stopColor="#09111F" stopOpacity="0.99" />
        </radialGradient>

        {/* Upper catch-light */}
        <radialGradient id="bnn-hi" cx="34%" cy="23%" r="44%">
          <stop offset="0%" stopColor="#9BC4FF" stopOpacity="0.50" />
          <stop offset="100%" stopColor="#9BC4FF" stopOpacity="0" />
        </radialGradient>

        {/* Inner glow — bright blue core simulating 3D depth */}
        <radialGradient id="bnn-glow" cx="46%" cy="44%" r="52%">
          <stop offset="0%" stopColor="#9BC4FF" stopOpacity="0.78" />
          <stop offset="38%" stopColor="#0059E8" stopOpacity="0.42" />
          <stop offset="100%" stopColor="#0A2E6B" stopOpacity="0" />
        </radialGradient>

        {/* Hub node fill */}
        <radialGradient id="bnn-hub-fill" cx="35%" cy="28%" r="65%">
          <stop offset="0%" stopColor="#e0f2fe" />
          <stop offset="38%" stopColor="#4d92ff" />
          <stop offset="68%" stopColor="#0059E8" />
          <stop offset="100%" stopColor="#003E8F" />
        </radialGradient>

        {/* Outline gradient */}
        <linearGradient id="bnn-stroke" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#4d92ff" stopOpacity="0.95" />
          <stop offset="50%" stopColor="#9BC4FF" stopOpacity="0.75" />
          <stop offset="100%" stopColor="#7DD6FF" stopOpacity="0.88" />
        </linearGradient>

        {/* Gyri stroke */}
        <linearGradient id="bnn-gyri-g" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#A5E4FF" stopOpacity="0.90" />
          <stop offset="100%" stopColor="#4d92ff" stopOpacity="0.55" />
        </linearGradient>

        {/* Filters */}
        <filter id="bnn-f-sm" x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="3" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="bnn-f-md" x="-120%" y="-120%" width="340%" height="340%">
          <feGaussianBlur stdDeviation="8" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="bnn-f-lg" x="-200%" y="-200%" width="500%" height="500%">
          <feGaussianBlur stdDeviation="18" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="bnn-f-xl" x="-300%" y="-300%" width="700%" height="700%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="40" result="b1" />
          <feGaussianBlur in="SourceGraphic" stdDeviation="16" result="b2" />
          <feMerge>
            <feMergeNode in="b1" />
            <feMergeNode in="b2" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* ── L0: Atmospheric halo ───────────────────────────────────────────── */}
      <ellipse
        cx="234"
        cy="194"
        rx="224"
        ry="192"
        fill="url(#bnn-atm)"
        className="bnn-atm"
        filter="url(#bnn-f-xl)"
      />

      {/* ── L1: Spark particles ────────────────────────────────────────────── */}
      {SPARKS.map((s, i) => (
        <circle
          key={i}
          cx={s.x}
          cy={s.y}
          r={s.r}
          fill={s.c}
          className="bnn-spark"
          style={{
            ["--ds" as string]: `${2.4 + (i % 5) * 0.38}s`,
            ["--dd" as string]: `${s.d}s`,
            ["--dop" as string]: `${0.52 + (i % 4) * 0.12}`,
          }}
          filter="url(#bnn-f-sm)"
        />
      ))}

      {/* ── L2: Brain fill (3D depth gradient) ────────────────────────────── */}
      <path d={BRAIN_PATH} fill="url(#bnn-body)" stroke="none" />

      {/* ── L3: Inner glow (light from within) ────────────────────────────── */}
      <path
        d={BRAIN_PATH}
        fill="url(#bnn-glow)"
        stroke="none"
        clipPath="url(#bnn-clip)"
        className="bnn-inner"
      />

      {/* ── L4: Catch-light (upper surface highlight) ─────────────────────── */}
      <path d={BRAIN_PATH} fill="url(#bnn-hi)" stroke="none" clipPath="url(#bnn-clip)" />

      {/* ── L5: Brain outline (draw-on) ────────────────────────────────────── */}
      <path
        d={BRAIN_PATH}
        fill="none"
        stroke="url(#bnn-stroke)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="bnn-outline"
      />

      {/* ── L6: Gyri surface texture ───────────────────────────────────────── */}
      <g fill="none" strokeLinecap="round" className="bnn-gyri" clipPath="url(#bnn-clip)">
        {GYRI_PATHS.map((d, i) => (
          <path
            key={i}
            d={d}
            stroke="url(#bnn-gyri-g)"
            strokeWidth="1.3"
            style={{ animationDelay: `${i * 0.22}s` }}
          />
        ))}
      </g>

      {/* Sylvian fissure removed — was conflicting with silhouette */}

      {/* ── L8: Neural connection lines ────────────────────────────────────── */}
      <g fill="none" strokeLinecap="round" className="bnn-conn">
        {CONNECTIONS.map(([a, b], i) => (
          <line
            key={i}
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            x1={NODES[a]!.x}
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            y1={NODES[a]!.y}
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            x2={NODES[b]!.x}
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            y2={NODES[b]!.y}
            stroke="rgba(77,146,255,0.52)"
            strokeWidth="1"
            strokeDasharray="3 2"
            style={{ animationDelay: `${i * 0.16}s` }}
          />
        ))}
      </g>

      {/* ── L9: Neural nodes ───────────────────────────────────────────────── */}
      {NODES.map((n, i) => (
        <g key={i} filter={n.hub ? "url(#bnn-f-md)" : "url(#bnn-f-sm)"}>
          {n.hub && (
            <circle
              cx={n.x}
              cy={n.y}
              r={n.r * 3}
              fill="rgba(0,89,232,0.34)"
              filter="url(#bnn-f-lg)"
            />
          )}
          <circle
            cx={n.x}
            cy={n.y}
            r={n.r}
            fill={n.hub ? "url(#bnn-hub-fill)" : "rgba(59,130,246,0.44)"}
            stroke={n.hub ? "rgba(155,196,255,0.96)" : "rgba(77,146,255,0.84)"}
            strokeWidth={n.hub ? 1.5 : 1}
            className={n.hub ? "bnn-hub" : "bnn-reg"}
            style={{ animationDelay: `${n.d}s` }}
          />
          {n.hub && (
            <circle
              cx={n.x - n.r * 0.28}
              cy={n.y - n.r * 0.32}
              r={n.r * 0.36}
              fill="rgba(219,234,254,0.75)"
            />
          )}
        </g>
      ))}

      {/* ── L10: Traveling data packets ───────────────────────────────────── */}
      {PACKETS.map((p, i) => (
        <circle
          key={i}
          r="3"
          className="bnn-pkt"
          style={{
            ["offsetPath" as string]: `path('${p.path}')`,
            ["--dur" as string]: p.dur,
            ["--delay" as string]: p.delay,
          }}
        />
      ))}
    </motion.svg>
  )
}

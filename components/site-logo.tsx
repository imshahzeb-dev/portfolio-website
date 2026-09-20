"use client"

import { cn } from "@/lib/utils"

interface SiteLogoProps {
  /** Height/width of the mark in px. */
  size?: number
  /** Draw-on animation. Turn off where the logo re-mounts often. */
  animated?: boolean
  /** Render the wordmark next to the mark. */
  withWordmark?: boolean
  className?: string
}

/**
 * TechnoSX brand mark.
 *
 * A pointy-top hexagon — the shape language already running through the site's
 * illustrations — carrying an X built from two crossing blades: primary blue
 * for engineering, accent orange for the AI layer, meeting at a lit core. The
 * X is the distinctive letterform in the name and stays legible down to 16px,
 * so the same mark serves as the favicon.
 */
export function SiteLogo({
  size = 36,
  animated = true,
  withWordmark = true,
  className,
}: SiteLogoProps) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        fill="none"
        aria-hidden="true"
        className="flex-shrink-0"
      >
        <defs>
          <linearGradient id="tsx-hex" x1="10%" y1="0%" x2="90%" y2="100%">
            <stop offset="0%" stopColor="#0059E8" stopOpacity="0.28" />
            <stop offset="100%" stopColor="#0059E8" stopOpacity="0.06" />
          </linearGradient>
          <linearGradient id="tsx-edge" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4d92ff" />
            <stop offset="55%" stopColor="#0059E8" />
            <stop offset="100%" stopColor="#003E8F" />
          </linearGradient>
          <linearGradient id="tsx-blade-a" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6BA5FF" />
            <stop offset="100%" stopColor="#0059E8" />
          </linearGradient>
          <linearGradient id="tsx-blade-b" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFC49B" />
            <stop offset="100%" stopColor="#FF9958" />
          </linearGradient>
        </defs>

        <style>{`
          @media (prefers-reduced-motion: reduce) {
            .tsx-hex, .tsx-a, .tsx-b, .tsx-core { animation: none !important; stroke-dashoffset: 0 !important; opacity: 1 !important; }
          }
          @keyframes tsx-draw { from { stroke-dashoffset: var(--l); } to { stroke-dashoffset: 0; } }
          @keyframes tsx-pop  { from { opacity: 0; transform: scale(.4); } to { opacity: 1; transform: scale(1); } }
          .tsx-hex { --l: 128; stroke-dasharray: 128; stroke-dashoffset: ${animated ? 128 : 0}; ${animated ? "animation: tsx-draw .7s cubic-bezier(.76,0,.24,1) forwards;" : ""} }
          .tsx-a   { --l: 26;  stroke-dasharray: 26;  stroke-dashoffset: ${animated ? 26 : 0};  ${animated ? "animation: tsx-draw .38s cubic-bezier(.76,0,.24,1) .5s forwards;" : ""} }
          .tsx-b   { --l: 26;  stroke-dasharray: 26;  stroke-dashoffset: ${animated ? 26 : 0};  ${animated ? "animation: tsx-draw .38s cubic-bezier(.76,0,.24,1) .66s forwards;" : ""} }
          .tsx-core{ transform-box: fill-box; transform-origin: center; ${animated ? "opacity: 0; animation: tsx-pop .34s cubic-bezier(.34,1.56,.64,1) .92s forwards;" : ""} }
        `}</style>

        {/* hexagon body */}
        <path d="M24 3 42.2 13.5V34.5L24 45 5.8 34.5V13.5Z" fill="url(#tsx-hex)" />
        <path
          d="M24 3 42.2 13.5V34.5L24 45 5.8 34.5V13.5Z"
          fill="none"
          stroke="url(#tsx-edge)"
          strokeWidth="2.4"
          strokeLinejoin="round"
          strokeLinecap="round"
          className="tsx-hex"
        />

        {/* the X — engineering blade and AI blade */}
        <path
          d="M15.5 15.5 32.5 32.5"
          stroke="url(#tsx-blade-a)"
          strokeWidth="4.4"
          strokeLinecap="round"
          className="tsx-a"
        />
        <path
          d="M32.5 15.5 15.5 32.5"
          stroke="url(#tsx-blade-b)"
          strokeWidth="4.4"
          strokeLinecap="round"
          className="tsx-b"
        />

        {/* lit core at the crossing */}
        <g className="tsx-core">
          <circle cx="24" cy="24" r="4.9" fill="#0A1F3D" />
          <circle cx="24" cy="24" r="2.7" fill="#fff" />
        </g>
      </svg>

      {withWordmark && (
        <span className="flex flex-col leading-none">
          <span className="text-[19px] font-bold tracking-tight">
            Techno<span className="text-[#FF9958]">SX</span>
          </span>
          <span className="text-[9px] font-medium uppercase tracking-[0.18em] opacity-60">
            Technology Partner
          </span>
        </span>
      )}
    </span>
  )
}

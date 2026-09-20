import type { ReactNode, SVGProps } from "react"

/**
 * The icon set.
 *
 * Replaces the Phosphor webfont that was loaded from a CDN. That font was a
 * render-blocking third-party request whose glyphs popped in after paint, and
 * its filled weight read as indistinct blobs at 20–24px — "graph", "files",
 * "cpu" and "lock" were hard to tell apart.
 *
 * These are drawn on a single 24x24 grid at a uniform 1.75 stroke with round
 * caps and joins, so the family has one optical weight. They inherit
 * `currentColor`, are crisp at any DPI, and cost no network request.
 *
 * Brand marks are the exception: they are filled, since that is how each brand
 * is specified.
 */

export type IconName =
  | "arrow-right" | "arrow-up-right" | "arrow-down" | "caret-right" | "caret-down"
  | "check-circle" | "check-square" | "seal-check" | "shield-check" | "warning-circle"
  | "brain" | "cpu" | "cube" | "code" | "cloud" | "database" | "device-mobile"
  | "chart-bar" | "graph" | "files" | "pen-nib" | "shopping-cart" | "lock-key"
  | "target" | "users-three" | "user" | "partnership" | "package" | "buildings"
  | "globe" | "book-open" | "lightning" | "sparkle" | "stethoscope" | "list-checks"
  | "list" | "trend-up" | "question" | "clock" | "calendar" | "map-pin" | "phone"
  | "envelope" | "x"
  | "facebook" | "x-logo" | "linkedin" | "github" | "instagram"

/** Brand marks are filled rather than stroked. */
const FILLED = new Set<IconName>(["facebook", "x-logo", "linkedin", "github", "instagram"])

const PATHS: Record<IconName, ReactNode> = {
  // ── direction ──────────────────────────────────────────────────────────
  "arrow-right": <path d="M4.5 12h14m-5.5-6 6 6-6 6" />,
  "arrow-up-right": <path d="M8 16 16.5 7.5M9.5 7.5h7.5V15" />,
  "arrow-down": <path d="M12 4.5v14m-6-5.5 6 6 6-6" />,
  "caret-right": <path d="m9.5 5.5 6.5 6.5-6.5 6.5" />,
  "caret-down": <path d="M5.5 9.5 12 16l6.5-6.5" />,

  // ── state ──────────────────────────────────────────────────────────────
  "check-circle": (
    <>
      <circle cx="12" cy="12" r="8.75" />
      <path d="m8.25 12.25 2.6 2.6 5-5.6" />
    </>
  ),
  "check-square": (
    <>
      <rect x="3.75" y="3.75" width="16.5" height="16.5" rx="4.5" />
      <path d="m8.25 12.25 2.6 2.6 5-5.6" />
    </>
  ),
  "seal-check": (
    <>
      <path d="M12 2.9l2.2 1.7 2.7-.4 1 2.6 2.4 1.4-.8 2.7.8 2.7-2.4 1.4-1 2.6-2.7-.4L12 21.1l-2.2-1.9-2.7.4-1-2.6-2.4-1.4.8-2.7-.8-2.7 2.4-1.4 1-2.6 2.7.4z" />
      <path d="m8.6 12.2 2.5 2.5 4.6-5.3" />
    </>
  ),
  "shield-check": (
    <>
      <path d="M12 2.9 19.1 6v5.4c0 4.5-3 8.3-7.1 9.9-4.1-1.6-7.1-5.4-7.1-9.9V6z" />
      <path d="m8.9 12 2.2 2.2 4-4.6" />
    </>
  ),
  "warning-circle": (
    <>
      <circle cx="12" cy="12" r="8.75" />
      <path d="M12 7.8v4.9" />
      <circle cx="12" cy="16.1" r=".95" fill="currentColor" stroke="none" />
    </>
  ),

  // ── technology ─────────────────────────────────────────────────────────
  brain: (
    <>
      <path d="M12 4.6a2.7 2.7 0 0 0-4.9 1.4 2.6 2.6 0 0 0-2 3.5 2.7 2.7 0 0 0 .3 3.8 2.6 2.6 0 0 0 1.9 3.8A2.7 2.7 0 0 0 12 19.3Z" />
      <path d="M12 4.6a2.7 2.7 0 0 1 4.9 1.4 2.6 2.6 0 0 1 2 3.5 2.7 2.7 0 0 1-.3 3.8 2.6 2.6 0 0 1-1.9 3.8A2.7 2.7 0 0 1 12 19.3Z" />
      <path d="M9.1 8.7a2 2 0 0 1 1.7 2M14.9 8.7a2 2 0 0 0-1.7 2M8.5 13.6a2.2 2.2 0 0 1 2.3 1.6M15.5 13.6a2.2 2.2 0 0 0-2.3 1.6" />
    </>
  ),
  cpu: (
    <>
      <rect x="7.6" y="7.6" width="8.8" height="8.8" rx="2" />
      <rect x="4.2" y="4.2" width="15.6" height="15.6" rx="3.4" />
      <path d="M9.4 1.9v2.3M14.6 1.9v2.3M9.4 19.8v2.3M14.6 19.8v2.3M1.9 9.4h2.3M1.9 14.6h2.3M19.8 9.4h2.3M19.8 14.6h2.3" />
    </>
  ),
  cube: (
    <>
      <path d="M12 2.8 20 7.4v9.2L12 21.2 4 16.6V7.4z" />
      <path d="M12 12 20 7.4M12 12v9.2M12 12 4 7.4" />
    </>
  ),
  code: <path d="m8.6 7.2-5.4 4.8 5.4 4.8M15.4 7.2l5.4 4.8-5.4 4.8M13.6 4.4l-3.2 15.2" />,
  cloud: (
    <path d="M7.4 19.4a4.6 4.6 0 0 1-.7-9.16 6.1 6.1 0 0 1 11.7 1.06 4.05 4.05 0 0 1-.4 8.1z" />
  ),
  database: (
    <>
      <ellipse cx="12" cy="5.9" rx="7.4" ry="3.1" />
      <path d="M4.6 5.9v12.2c0 1.7 3.3 3.1 7.4 3.1s7.4-1.4 7.4-3.1V5.9" />
      <path d="M19.4 12c0 1.7-3.3 3.1-7.4 3.1S4.6 13.7 4.6 12" />
    </>
  ),
  "device-mobile": (
    <>
      <rect x="6.6" y="2.4" width="10.8" height="19.2" rx="2.8" />
      <path d="M10.4 5.4h3.2" />
      <circle cx="12" cy="18.2" r=".95" fill="currentColor" stroke="none" />
    </>
  ),
  "chart-bar": (
    <>
      <path d="M4 20h16" />
      <path d="M7.4 20v-5.6M12 20V7.8M16.6 20v-8.6" />
    </>
  ),
  graph: (
    <>
      <circle cx="5.4" cy="6.6" r="2.3" />
      <circle cx="18.6" cy="6.6" r="2.3" />
      <circle cx="12" cy="17.4" r="2.3" />
      <path d="M7.7 6.6h8.6M6.6 8.6l4.2 6.9M17.4 8.6l-4.2 6.9" />
    </>
  ),
  files: (
    <>
      <path d="M8.4 2.9h6l4.2 4.2v10.3a1.8 1.8 0 0 1-1.8 1.8H8.4a1.8 1.8 0 0 1-1.8-1.8V4.7a1.8 1.8 0 0 1 1.8-1.8z" />
      <path d="M14.2 2.9v4.4h4.4" />
      <path d="M4.6 6.8v12.5a1.8 1.8 0 0 0 1.8 1.8h8.3" />
    </>
  ),
  "pen-nib": (
    <>
      <path d="M13.3 3.6 20.4 10.7 9.6 21.5 3.2 20.8l-.7-6.4z" />
      <path d="m10.4 13.6 6.6-6.6" />
      <circle cx="8.3" cy="15.7" r="2.1" />
    </>
  ),
  "shopping-cart": (
    <>
      <path d="M2.8 3.4h2.6l2.4 10.9h9.3l2.1-7.6H6.3" />
      <circle cx="9.1" cy="19" r="1.7" />
      <circle cx="16.9" cy="19" r="1.7" />
    </>
  ),
  "lock-key": (
    <>
      <rect x="4.4" y="10.3" width="15.2" height="10.6" rx="2.6" />
      <path d="M7.9 10.3V7.2a4.1 4.1 0 0 1 8.2 0v3.1" />
      <circle cx="12" cy="15" r="1.5" />
      <path d="M12 16.5v2" />
    </>
  ),

  // ── people & business ──────────────────────────────────────────────────
  target: (
    <>
      <circle cx="12" cy="12" r="8.6" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
    </>
  ),
  "users-three": (
    <>
      <circle cx="12" cy="7.4" r="3.1" />
      <path d="M7.2 16.4a5.4 5.4 0 0 1 9.6 0" />
      <circle cx="4.3" cy="10.6" r="2.3" />
      <path d="M1.4 17.6a4.3 4.3 0 0 1 3.4-2.5" />
      <circle cx="19.7" cy="10.6" r="2.3" />
      <path d="M22.6 17.6a4.3 4.3 0 0 0-3.4-2.5" />
    </>
  ),
  user: (
    <>
      <circle cx="12" cy="8.2" r="3.7" />
      <path d="M4.9 19.6a7.6 7.6 0 0 1 14.2 0" />
    </>
  ),
  partnership: (
    <>
      <circle cx="8.9" cy="12" r="5.4" />
      <circle cx="15.1" cy="12" r="5.4" />
    </>
  ),
  package: (
    <>
      <path d="M20.4 7.9v8.2L12 20.8 3.6 16.1V7.9L12 3.2z" />
      <path d="M3.6 7.9 12 12.6l8.4-4.7M12 12.6v8.2M7.8 5.6l8.4 4.7" />
    </>
  ),
  buildings: (
    <>
      <path d="M4.2 20.8V5.9a1 1 0 0 1 1-1h4.6a1 1 0 0 1 1 1v14.9" />
      <path d="M10.8 20.8v-8.6a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v8.6" />
      <path d="M2.6 20.8h18.8" />
      <path d="M6.4 8.8h2.2M6.4 12.4h2.2M6.4 16h2.2M13.6 14.6h2.4M13.6 17.6h2.4" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="8.75" />
      <path d="M3.4 12h17.2" />
      <path d="M12 3.25a13.4 13.4 0 0 1 0 17.5 13.4 13.4 0 0 1 0-17.5z" />
    </>
  ),
  "book-open": (
    <>
      <path d="M12 6.4a6.5 6.5 0 0 0-8.6-.8v12.2a6.5 6.5 0 0 1 8.6.8" />
      <path d="M12 6.4a6.5 6.5 0 0 1 8.6-.8v12.2a6.5 6.5 0 0 0-8.6.8z" />
      <path d="M12 6.4v12.2" />
    </>
  ),
  lightning: <path d="M13.4 2.8 4.9 13.4h6.1l-.4 7.8 8.5-10.6h-6.1z" />,
  sparkle: (
    <>
      <path d="M12 3.1c0 4.3 1.9 6.2 6.2 6.2-4.3 0-6.2 1.9-6.2 6.2 0-4.3-1.9-6.2-6.2-6.2 4.3 0 6.2-1.9 6.2-6.2z" />
      <path d="M17.8 15.1c0 2.2 1 3.2 3.2 3.2-2.2 0-3.2 1-3.2 3.2 0-2.2-1-3.2-3.2-3.2 2.2 0 3.2-1 3.2-3.2z" />
    </>
  ),
  stethoscope: (
    <>
      <path d="M5.4 3.4v4.8a4.1 4.1 0 0 0 8.2 0V3.4" />
      <path d="M3.8 3.4h3.2M12 3.4h3.2" />
      <path d="M9.5 12.3v2.5a4.6 4.6 0 0 0 9.2 0v-1.6" />
      <circle cx="18.7" cy="10.6" r="2.3" />
    </>
  ),
  "list-checks": (
    <>
      <path d="M10.4 6.4h9.8M10.4 12h9.8M10.4 17.6h9.8" />
      <path d="m3.2 6.1 1.5 1.5 2.6-3M3.2 11.7l1.5 1.5 2.6-3M3.2 17.3l1.5 1.5 2.6-3" />
    </>
  ),
  list: <path d="M4 6.6h16M4 12h16M4 17.4h16" />,
  "trend-up": (
    <>
      <path d="m3.4 16.6 5.6-5.6 3.6 3.6 7.4-7.4" />
      <path d="M14.6 7.2h6v6" />
    </>
  ),
  question: (
    <>
      <circle cx="12" cy="12" r="8.75" />
      <path d="M9.6 9.5a2.5 2.5 0 1 1 3.3 2.4c-.6.2-.9.8-.9 1.4v.5" />
      <circle cx="12" cy="16.6" r=".95" fill="currentColor" stroke="none" />
    </>
  ),

  // ── contact ────────────────────────────────────────────────────────────
  clock: (
    <>
      <circle cx="12" cy="12" r="8.75" />
      <path d="M12 6.9V12l3.4 2" />
    </>
  ),
  calendar: (
    <>
      <rect x="3.4" y="5.2" width="17.2" height="15.4" rx="2.8" />
      <path d="M3.4 9.8h17.2M8.2 2.8v4M15.8 2.8v4" />
    </>
  ),
  "map-pin": (
    <>
      <path d="M12 21.2s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.6" />
    </>
  ),
  phone: (
    <path d="M8.1 3.4 10 7.8l-2 1.6a11 11 0 0 0 5.7 5.7l1.6-2 4.4 1.9v3.3a2 2 0 0 1-2.2 2C10.1 19.7 4.3 13.9 3.4 5.6a2 2 0 0 1 2-2.2z" />
  ),
  envelope: (
    <>
      <rect x="2.8" y="4.9" width="18.4" height="14.2" rx="2.6" />
      <path d="m3.4 7 8.6 6 8.6-6" />
    </>
  ),
  x: <path d="M5.5 5.5 18.5 18.5M18.5 5.5 5.5 18.5" />,

  // ── brand marks (filled) ───────────────────────────────────────────────
  facebook: (
    <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.9h2.54V9.85c0-2.52 1.49-3.91 3.78-3.91 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.78-1.63 1.57v1.89h2.78l-.45 2.9h-2.33V22c4.78-.79 8.43-4.93 8.43-9.94z" />
  ),
  "x-logo": (
    <path d="M17.53 3h3.17l-6.93 7.92L21.94 21h-6.38l-5-6.54L4.83 21H1.66l7.41-8.47L1.4 3h6.54l4.52 5.98L17.53 3zm-1.11 16.12h1.76L7.66 4.78H5.78l10.64 14.34z" />
  ),
  linkedin: (
    <path d="M20.45 2H3.55A1.53 1.53 0 0 0 2 3.51v16.98A1.53 1.53 0 0 0 3.55 22h16.9A1.53 1.53 0 0 0 22 20.49V3.51A1.53 1.53 0 0 0 20.45 2zM8.34 18.6H5.4V9.75h2.94v8.85zM6.87 8.54a1.7 1.7 0 1 1 0-3.4 1.7 1.7 0 0 1 0 3.4zM18.6 18.6h-2.93v-4.3c0-1.03-.02-2.35-1.44-2.35-1.43 0-1.65 1.12-1.65 2.28v4.37H9.65V9.75h2.81v1.21h.04a3.08 3.08 0 0 1 2.77-1.52c2.97 0 3.52 1.95 3.52 4.49v4.67z" />
  ),
  github: (
    <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85l-.01 2.75c0 .27.18.58.69.48A10 10 0 0 0 12 2z" />
  ),
  instagram: (
    <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41-.56-.22-.96-.48-1.38-.9a3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zm0 3.08a6.76 6.76 0 1 0 0 13.52 6.76 6.76 0 0 0 0-13.52zm0 11.15a4.39 4.39 0 1 1 0-8.78 4.39 4.39 0 0 1 0 8.78zm8.6-11.42a1.58 1.58 0 1 1-3.16 0 1.58 1.58 0 0 1 3.16 0z" />
  ),
}

export interface IconProps extends Omit<SVGProps<SVGSVGElement>, "name"> {
  name: IconName
  /** Rendered size in px. Defaults to 1em so it tracks font size. */
  size?: number | string
  strokeWidth?: number
}

export function Icon({ name, size = "1em", strokeWidth = 1.75, ...rest }: IconProps) {
  const filled = FILLED.has(name)
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      aria-hidden="true"
      focusable="false"
      fill={filled ? "currentColor" : "none"}
      stroke={filled ? "none" : "currentColor"}
      strokeWidth={filled ? undefined : strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...rest}
    >
      {PATHS[name]}
    </svg>
  )
}

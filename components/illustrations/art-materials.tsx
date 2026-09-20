/**
 * Material system for the hero illustrations.
 *
 * These are rendered, not drawn: every surface is a multi-stop gradient lit from
 * the top-left, with a rim highlight on the lit edge, ambient occlusion where
 * forms meet, a specular streak on glass, and a soft contact shadow underneath.
 * That is what gives them depth instead of the flat outline look.
 *
 * Server-safe (no hooks). Blur filters are used sparingly — two per scene at
 * most — because they are the only honest way to get soft shadows and bloom.
 */
import type { CSSProperties, ReactNode } from "react"

export const VB_W = 260
export const VB_H = 220

export interface ArtProps {
  color?: string
  size?: number
  className?: string
}

/** Warm accent, reserved for the focal element of each scene. */
export const HILITE = "#FF9958"
export const HILITE_DIM = "#C46A34"

/**
 * All gradients and filters a scene needs. `id` namespaces them so several
 * scenes can coexist on one page.
 */
export function Materials({ id, color }: { id: string; color: string }) {
  return (
    <defs>
      {/* Lit surface — bright top-left falling to shadow bottom-right */}
      <linearGradient id={`${id}-surf`} x1="12%" y1="0%" x2="88%" y2="100%">
        <stop offset="0%" stopColor="#fff" stopOpacity="0.20" />
        <stop offset="38%" stopColor={color} stopOpacity="0.30" />
        <stop offset="100%" stopColor="#020a18" stopOpacity="0.55" />
      </linearGradient>

      {/* Deeper surface for receding faces */}
      <linearGradient id={`${id}-surf-dark`} x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor={color} stopOpacity="0.20" />
        <stop offset="100%" stopColor="#01060f" stopOpacity="0.72" />
      </linearGradient>

      {/* Glass: bright edge, near-transparent middle */}
      <linearGradient id={`${id}-glass`} x1="0%" y1="0%" x2="70%" y2="100%">
        <stop offset="0%" stopColor="#fff" stopOpacity="0.26" />
        <stop offset="45%" stopColor="#fff" stopOpacity="0.05" />
        <stop offset="100%" stopColor={color} stopOpacity="0.16" />
      </linearGradient>

      {/* Rim light along the lit edge */}
      <linearGradient id={`${id}-rim`} x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fff" stopOpacity="0.85" />
        <stop offset="34%" stopColor="#fff" stopOpacity="0.28" />
        <stop offset="100%" stopColor={color} stopOpacity="0.12" />
      </linearGradient>

      {/* Emissive screen */}
      <linearGradient id={`${id}-screen`} x1="16%" y1="0%" x2="84%" y2="100%">
        <stop offset="0%" stopColor={color} stopOpacity="0.55" />
        <stop offset="52%" stopColor={color} stopOpacity="0.20" />
        <stop offset="100%" stopColor="#020a18" stopOpacity="0.70" />
      </linearGradient>

      {/* Accent-lit surface, for the focal object */}
      <linearGradient id={`${id}-hot`} x1="12%" y1="0%" x2="88%" y2="100%">
        <stop offset="0%" stopColor="#FFD2B0" stopOpacity="0.95" />
        <stop offset="44%" stopColor={HILITE} stopOpacity="0.85" />
        <stop offset="100%" stopColor={HILITE_DIM} stopOpacity="0.75" />
      </linearGradient>

      {/* Spherical shading */}
      <radialGradient id={`${id}-orb`} cx="34%" cy="28%" r="78%">
        <stop offset="0%" stopColor="#fff" stopOpacity="0.9" />
        <stop offset="24%" stopColor={color} stopOpacity="0.85" />
        <stop offset="72%" stopColor={color} stopOpacity="0.3" />
        <stop offset="100%" stopColor="#01060f" stopOpacity="0.85" />
      </radialGradient>
      <radialGradient id={`${id}-orb-hot`} cx="34%" cy="28%" r="78%">
        <stop offset="0%" stopColor="#FFE6D2" stopOpacity="1" />
        <stop offset="26%" stopColor={HILITE} stopOpacity="0.92" />
        <stop offset="74%" stopColor={HILITE_DIM} stopOpacity="0.42" />
        <stop offset="100%" stopColor="#1a0c04" stopOpacity="0.85" />
      </radialGradient>

      {/* Ambient bloom */}
      <radialGradient id={`${id}-bloom`} cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor={color} stopOpacity="0.55" />
        <stop offset="60%" stopColor={color} stopOpacity="0.12" />
        <stop offset="100%" stopColor={color} stopOpacity="0" />
      </radialGradient>
      <radialGradient id={`${id}-bloom-hot`} cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor={HILITE} stopOpacity="0.6" />
        <stop offset="58%" stopColor={HILITE} stopOpacity="0.14" />
        <stop offset="100%" stopColor={HILITE} stopOpacity="0" />
      </radialGradient>

      {/* Contact shadow */}
      <radialGradient id={`${id}-shadow`} cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#000" stopOpacity="0.62" />
        <stop offset="100%" stopColor="#000" stopOpacity="0" />
      </radialGradient>

      {/* Specular streak across glass */}
      <linearGradient id={`${id}-spec`} x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#fff" stopOpacity="0" />
        <stop offset="45%" stopColor="#fff" stopOpacity="0.26" />
        <stop offset="58%" stopColor="#fff" stopOpacity="0.05" />
        <stop offset="100%" stopColor="#fff" stopOpacity="0" />
      </linearGradient>

      <filter id={`${id}-soft`} x="-60%" y="-60%" width="220%" height="220%">
        <feGaussianBlur stdDeviation="5" />
      </filter>
      <filter id={`${id}-glow`} x="-90%" y="-90%" width="280%" height="280%">
        <feGaussianBlur stdDeviation="3.4" result="b" />
        <feMerge>
          <feMergeNode in="b" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
  )
}

/** Scene wrapper: materials, ambient bloom, contact shadow, gentle float. */
export function Stage({
  id,
  color,
  size = 320,
  floatDur = 7,
  className,
  shadow = { cx: VB_W / 2, cy: 196, rx: 84, ry: 15 },
  children,
}: {
  id: string
  color: string
  size?: number
  floatDur?: number
  className?: string
  shadow?: { cx: number; cy: number; rx: number; ry: number } | null
  children: ReactNode
}) {
  return (
    <svg
      width={size}
      height={Math.round((size * VB_H) / VB_W)}
      viewBox={`0 0 ${VB_W} ${VB_H}`}
      fill="none"
      aria-hidden="true"
      className={className}
      style={{ overflow: "visible" }}
    >
      <Materials id={id} color={color} />
      {/* ambient light in the scene */}
      <ellipse cx={VB_W / 2} cy={104} rx={116} ry={98} fill={`url(#${id}-bloom)`} opacity="0.5" />
      {shadow && (
        <ellipse
          cx={shadow.cx}
          cy={shadow.cy}
          rx={shadow.rx}
          ry={shadow.ry}
          fill={`url(#${id}-shadow)`}
        />
      )}
      <g style={{ animation: `svc-float-y ${floatDur}s ease-in-out infinite` }}>{children}</g>
    </svg>
  )
}

/**
 * A shaded panel: lit surface, rim light on the top-left edge, specular streak.
 * The building block for every screen, card and slab in these scenes.
 */
export function Slab({
  id,
  x,
  y,
  w,
  h,
  r = 8,
  hot,
  glass,
  spec = true,
  opacity,
  style,
  children,
}: {
  id: string
  x: number
  y: number
  w: number
  h: number
  r?: number
  hot?: boolean
  glass?: boolean
  spec?: boolean
  opacity?: number
  style?: CSSProperties
  children?: ReactNode
}) {
  const fill = hot ? `url(#${id}-hot)` : glass ? `url(#${id}-glass)` : `url(#${id}-surf)`
  const clip = `${id}-clip-${x}-${y}-${w}-${h}`
  return (
    <g opacity={opacity} style={style}>
      <defs>
        <clipPath id={clip}>
          <rect x={x} y={y} width={w} height={h} rx={r} />
        </clipPath>
      </defs>
      <rect x={x} y={y} width={w} height={h} rx={r} fill={fill} />
      {spec && (
        <rect
          x={x}
          y={y}
          width={w}
          height={h}
          rx={r}
          fill={`url(#${id}-spec)`}
          clipPath={`url(#${clip})`}
        />
      )}
      <rect
        x={x + 0.5}
        y={y + 0.5}
        width={w - 1}
        height={h - 1}
        rx={r}
        fill="none"
        stroke={`url(#${id}-rim)`}
        strokeWidth="1"
      />
      <g clipPath={`url(#${clip})`}>{children}</g>
    </g>
  )
}

/** A lit sphere with specular highlight and bloom. */
export function Orb({
  id,
  cx,
  cy,
  r,
  hot,
  bloom = true,
  style,
}: {
  id: string
  cx: number
  cy: number
  r: number
  hot?: boolean
  bloom?: boolean
  style?: CSSProperties
}) {
  return (
    <g style={style}>
      {bloom && (
        <circle cx={cx} cy={cy} r={r * 2.6} fill={`url(#${id}-bloom${hot ? "-hot" : ""})`} />
      )}
      <circle cx={cx} cy={cy} r={r} fill={`url(#${id}-orb${hot ? "-hot" : ""})`} />
      <ellipse
        cx={cx - r * 0.3}
        cy={cy - r * 0.38}
        rx={r * 0.42}
        ry={r * 0.3}
        fill="#fff"
        opacity="0.5"
        transform={`rotate(-28 ${cx - r * 0.3} ${cy - r * 0.38})`}
      />
    </g>
  )
}

/** Emissive line inside a screen — reads as content, not as an outline. */
export function Line({
  x,
  y,
  w,
  h = 4,
  color,
  opacity = 0.34,
  r = 2,
}: {
  x: number
  y: number
  w: number
  h?: number
  color: string
  opacity?: number
  r?: number
}) {
  return <rect x={x} y={y} width={w} height={h} rx={r} fill={color} opacity={opacity} />
}

/** Glow-wrapped group, for anything that should read as emitting light. */
export function Emit({ id, children }: { id: string; children: ReactNode }) {
  return <g filter={`url(#${id}-glow)`}>{children}</g>
}

export function Breathe({
  dur = 2.8,
  delay = 0,
  children,
}: {
  dur?: number
  delay?: number
  children: ReactNode
}) {
  return (
    <g style={{ animation: `svc-glow-breathe ${dur}s ${delay}s ease-in-out infinite` }}>
      {children}
    </g>
  )
}

/** Data packet travelling a path. */
export function Packet({
  path,
  color,
  r = 3,
  dur = 2.6,
  delay = 0,
}: {
  path: string
  color: string
  r?: number
  dur?: number
  delay?: number
}) {
  return (
    <circle
      r={r}
      fill={color}
      style={
        {
          offsetPath: `path('${path}')`,
          animation: `svc-data-travel ${dur}s ${delay}s ease-in-out infinite`,
        } as CSSProperties
      }
    />
  )
}

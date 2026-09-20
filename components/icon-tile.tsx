import { cn } from "@/lib/utils"
import { Icon, type IconName } from "@/components/icons"

type Tone = "brand" | "accent" | "onDark"
type Size = "sm" | "md" | "lg"

const BOX: Record<Size, string> = {
  sm: "h-11 w-11 rounded-[11px]",
  md: "h-14 w-14 rounded-[14px]",
  lg: "h-16 w-16 rounded-[16px]",
}

const GLYPH: Record<Size, number> = { sm: 20, md: 24, lg: 28 }

interface ToneSpec {
  shell: string
  glyph: string
  shellHover: string
  glyphHover: string
}

const TONE: Record<Tone, ToneSpec> = {
  // On light surfaces (and their dark-mode counterparts)
  brand: {
    shell: cn(
      "bg-gradient-to-br from-[#E8F0FF] to-[#F6FAFF] ring-1 ring-inset ring-[#CEE3FF]",
      "dark:from-[#0059E8]/25 dark:to-[#0059E8]/5 dark:ring-white/10"
    ),
    glyph: "text-[#0059E8] dark:text-[#6BA5FF]",
    shellHover: cn(
      "group-hover:from-[#0059E8] group-hover:to-[#0046BA] group-hover:ring-[#0059E8]",
      "group-hover:shadow-[0_10px_26px_-10px_rgba(0,89,232,0.85)]"
    ),
    glyphHover: "group-hover:text-white",
  },
  accent: {
    shell: cn(
      "bg-gradient-to-br from-[#FFEFE2] to-[#FFF8F3] ring-1 ring-inset ring-[#FFD5B8]",
      "dark:from-[#FF9958]/25 dark:to-[#FF9958]/5 dark:ring-white/10"
    ),
    glyph: "text-[#E8762C] dark:text-[#FFB27E]",
    shellHover: cn(
      "group-hover:from-[#FF9958] group-hover:to-[#E87C38] group-hover:ring-[#FF9958]",
      "group-hover:shadow-[0_10px_26px_-10px_rgba(255,153,88,0.85)]"
    ),
    glyphHover: "group-hover:text-white",
  },
  // Always-dark bands
  onDark: {
    shell: cn(
      "bg-gradient-to-br from-white/[0.14] to-white/[0.03] ring-1 ring-inset ring-white/12"
    ),
    glyph: "text-[#6BA5FF]",
    shellHover: cn(
      "group-hover:from-[#0059E8] group-hover:to-[#0046BA] group-hover:ring-[#0059E8]",
      "group-hover:shadow-[0_10px_26px_-10px_rgba(0,89,232,0.9)]"
    ),
    glyphHover: "group-hover:text-white",
  },
}

export interface IconTileProps {
  name: IconName
  tone?: Tone
  size?: Size
  /**
   * Fill with brand colour when the nearest `group` ancestor is hovered.
   * Set false where the tile sits inside an unrelated `group` (the services
   * mega-menu wrapper, for one) that would otherwise pin it to hover state.
   */
  interactive?: boolean
  className?: string
}

/**
 * The container an icon sits in on cards.
 *
 * The previous treatment was a flat one-colour square, which read as a
 * placeholder. This one is a lit surface: a diagonal gradient, an inset ring,
 * a top rim highlight and a soft shadow, so it looks like an object rather than
 * a swatch. Parent cards carry `group`, so it fills with brand colour on hover.
 */
export function IconTile({
  name,
  tone = "brand",
  size = "md",
  interactive = true,
  className,
}: IconTileProps) {
  const t = TONE[tone]
  return (
    <span
      className={cn(
        "relative flex shrink-0 items-center justify-center overflow-hidden",
        "shadow-[0_2px_8px_-2px_rgba(4,18,44,0.14)]",
        "transition-all duration-300",
        BOX[size],
        t.shell,
        interactive && t.shellHover,
        className
      )}
    >
      {/* top rim highlight — what makes it read as lit rather than flat */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/70 to-transparent dark:via-white/25"
      />
      <Icon
        name={name}
        size={GLYPH[size]}
        strokeWidth={1.7}
        className={cn("relative transition-colors duration-300", t.glyph, interactive && t.glyphHover)}
      />
    </span>
  )
}

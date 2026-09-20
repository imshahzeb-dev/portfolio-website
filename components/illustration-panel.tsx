import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface IllustrationPanelProps {
  /** Tints the radial glow behind the scene. */
  accent: string
  children: ReactNode
  className?: string
  /** Show the faint grid texture. */
  grid?: boolean
}

/**
 * The dark field every isometric scene sits on: theme-blue surface, faint grid,
 * and an accent-tinted radial glow. Keeps every illustration framed identically.
 */
export function IllustrationPanel({
  accent,
  children,
  className,
  grid = true,
}: IllustrationPanelProps) {
  return (
    <div
      className={cn(
        "relative flex items-center justify-center overflow-hidden bg-[#0A2E6B] dark:bg-[#09111F]",
        className
      )}
    >
      {grid && (
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] [background-size:42px_42px]"
        />
      )}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background: `radial-gradient(ellipse 55% 60% at 50% 55%, ${accent}33, transparent 70%)`,
        }}
      />
      <span className="relative">{children}</span>
    </div>
  )
}

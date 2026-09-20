/**
 * Rendered hero scenes — shaded surfaces, emissive screens, reflections and
 * contact shadows rather than outline diagrams. Grammar lives in
 * art-materials.tsx. Server-safe; each scene namespaces its own gradients.
 */
import type { ReactElement } from "react"
import {
  Breathe,
  Emit,
  HILITE,
  Line,
  Orb,
  Packet,
  Slab,
  Stage,
  type ArtProps,
} from "@/components/illustrations/art-materials"

// ── Work — the products, on real hardware ────────────────────────────────────
export function WorkArt({ color = "#4d92ff", size, className }: ArtProps) {
  const id = "m-work"
  return (
    <Stage id={id} color={color} size={size} className={className} shadow={{ cx: 126, cy: 194, rx: 96, ry: 14 }}>
      {/* laptop lid, seen slightly from above */}
      <path d="M46 36 L192 36 L200 130 L38 130 Z" fill={`url(#${id}-surf)`} />
      <path d="M46 36 L192 36 L200 130 L38 130 Z" fill="none" stroke={`url(#${id}-rim)`} strokeWidth="1.2" />
      {/* screen */}
      <path d="M55 45 L183 45 L190 121 L48 121 Z" fill={`url(#${id}-screen)`} />
      <g clipPath="url(#m-work-scr)">
        <defs>
          <clipPath id="m-work-scr">
            <path d="M55 45 L183 45 L190 121 L48 121 Z" />
          </clipPath>
        </defs>
        <Line x={64} y={54} w={40} h={5} color="#fff" opacity={0.5} />
        <Line x={150} y={54} w={26} h={5} color={color} opacity={0.5} />
        {/* bar chart */}
        {[
          { x: 66, h: 20 },
          { x: 82, h: 34 },
          { x: 98, h: 26 },
          { x: 114, h: 42 },
        ].map((b, i) => (
          <rect
            key={b.x}
            x={b.x}
            y={104 - b.h}
            width={10}
            height={b.h}
            rx={2.5}
            fill={color}
            opacity={0.65}
            style={{
              transformBox: "fill-box",
              transformOrigin: "bottom",
              animation: `svc-bar-grow 1.2s ${i * 0.12}s cubic-bezier(.16,1,.3,1) both`,
            }}
          />
        ))}
        {/* trend */}
        <Emit id={id}>
          <path
            d="M136 96 L152 82 L166 88 L184 62"
            fill="none"
            stroke={HILITE}
            strokeWidth="2.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="78"
            style={{ ["--len" as string]: "78", animation: "svc-draw 1.5s 0.5s ease-out both" }}
          />
        </Emit>
        <Line x={136} y={104} w={48} h={3} color="#fff" opacity={0.18} />
        {/* screen reflection */}
        <path d="M55 45 L104 45 L64 121 L48 121 Z" fill="#fff" opacity="0.05" />
      </g>

      {/* deck */}
      <path d="M34 130 L204 130 L220 146 L18 146 Z" fill={`url(#${id}-surf-dark)`} />
      <path d="M34 130 L204 130 L220 146 L18 146 Z" fill="none" stroke={`url(#${id}-rim)`} strokeWidth="1" />
      <rect x={104} y={134} width={30} height={3.4} rx={1.7} fill="#fff" opacity="0.22" />

      {/* phone, in front */}
      <g transform="rotate(7 214 132)">
        <rect x={186} y={72} width={56} height={116} rx={13} fill={`url(#${id}-surf)`} />
        <rect x={186.5} y={72.5} width={55} height={115} rx={13} fill="none" stroke={`url(#${id}-rim)`} strokeWidth="1.1" />
        <rect x={192} y={80} width={44} height={100} rx={8} fill={`url(#${id}-screen)`} />
        <g>
          <Line x={199} y={88} w={20} h={4} color="#fff" opacity={0.45} />
          <rect x={199} y={100} width={30} height={22} rx={4} fill={color} opacity="0.4" />
          <Line x={199} y={130} w={30} h={3.4} color="#fff" opacity={0.2} />
          <Line x={199} y={138} w={22} h={3.4} color="#fff" opacity={0.14} />
          <Breathe dur={2.4}>
            <rect x={199} y={150} width={26} height={9} rx={4.5} fill={HILITE} opacity="0.9" />
          </Breathe>
        </g>
        <rect x={192} y={80} width={20} height={100} fill="#fff" opacity="0.05" />
        <rect x={205} y={76} width={18} height={3} rx={1.5} fill="#000" opacity="0.4" />
      </g>

      {/* live indicator */}
      <Breathe dur={2.2}>
        <Orb id={id} cx={50} cy={58} r={4.5} hot />
      </Breathe>
    </Stage>
  )
}

// ── Services — ten capabilities, fanned ──────────────────────────────────────
export function ServicesOverviewArt({ color = "#0059E8", size, className }: ArtProps) {
  const id = "m-svcs"
  const cards = [
    { rot: -21, op: 0.4 },
    { rot: -10.5, op: 0.6 },
    { rot: 0, op: 0.85 },
    { rot: 10.5, op: 0.6 },
    { rot: 21, op: 0.4 },
  ]
  return (
    <Stage id={id} color={color} size={size} className={className} shadow={{ cx: 130, cy: 198, rx: 86, ry: 13 }}>
      {cards.map((c, i) =>
        i === 2 ? null : (
          <g key={c.rot} transform={`rotate(${c.rot} 130 200)`} opacity={c.op}>
            <Slab id={id} x={92} y={42} w={76} h={116} r={10} glass />
            <Line x={104} y={58} w={30} h={4} color="#fff" opacity={0.3} />
            <Line x={104} y={70} w={52} h={3} color="#fff" opacity={0.16} />
            <Line x={104} y={78} w={40} h={3} color="#fff" opacity={0.12} />
          </g>
        )
      )}

      {/* front card — the core service */}
      <g transform="rotate(0 130 200)">
        <Slab id={id} x={90} y={34} w={80} h={126} r={11}>
          <rect x={90} y={34} width={80} height={126} fill={`url(#${id}-screen)`} opacity="0.5" />
        </Slab>
        <Emit id={id}>
          <Orb id={id} cx={130} cy={68} r={13} hot bloom={false} />
        </Emit>
        <Line x={104} y={92} w={52} h={5} color="#fff" opacity={0.55} />
        <Line x={104} y={104} w={40} h={3.4} color="#fff" opacity={0.22} />
        <Line x={104} y={113} w={48} h={3.4} color="#fff" opacity={0.18} />
        <Line x={104} y={122} w={32} h={3.4} color="#fff" opacity={0.14} />
        <Breathe dur={2.6}>
          <rect x={104} y={136} width={40} height={10} rx={5} fill={HILITE} opacity="0.9" />
        </Breathe>
      </g>

      {/* capability motes */}
      {[
        [46, 58],
        [214, 52],
        [30, 122],
        [230, 118],
      ].map(([x, y], i) => (
        <Orb key={x} id={id} cx={x} cy={y} r={3.6} style={{ animation: `svc-glow-breathe ${2.4 + i * 0.4}s ${i * 0.3}s ease-in-out infinite` }} />
      ))}
    </Stage>
  )
}

// ── Data & BI — a dashboard you would actually ship ──────────────────────────
export function DataBiArt({ color = "#4d92ff", size, className }: ArtProps) {
  const id = "m-databi"
  const bars = [
    { x: 68, h: 30 },
    { x: 92, h: 52 },
    { x: 116, h: 40 },
    { x: 140, h: 66 },
  ]
  return (
    <Stage id={id} color={color} size={size} className={className} shadow={{ cx: 130, cy: 196, rx: 88, ry: 14 }}>
      <Slab id={id} x={38} y={30} w={184} h={148} r={12}>
        <rect x={38} y={30} width={184} height={30} fill="#fff" opacity="0.05" />
      </Slab>
      <Line x={54} y={41} w={44} h={6} color="#fff" opacity={0.5} />
      {[0, 1, 2].map((i) => (
        <circle key={i} cx={190 + i * 10} cy={44} r={3} fill={color} opacity={0.4 + i * 0.12} />
      ))}

      {/* 3D bars: front face + lit top */}
      {bars.map((b, i) => (
        <g
          key={b.x}
          style={{
            transformBox: "fill-box",
            transformOrigin: "bottom",
            animation: `svc-bar-grow 1.2s ${i * 0.12}s cubic-bezier(.16,1,.3,1) both`,
          }}
        >
          <path
            d={`M${b.x} ${140 - b.h} L${b.x + 15} ${140 - b.h} L${b.x + 15} 140 L${b.x} 140 Z`}
            fill={`url(#${id}-surf)`}
          />
          <path
            d={`M${b.x} ${140 - b.h} L${b.x + 5} ${145 - b.h} L${b.x + 20} ${145 - b.h} L${b.x + 15} ${140 - b.h} Z`}
            fill={color}
            opacity="0.55"
          />
          <path
            d={`M${b.x + 15} ${140 - b.h} L${b.x + 20} ${145 - b.h} L${b.x + 20} 145 L${b.x + 15} 140 Z`}
            fill="#01060f"
            opacity="0.45"
          />
        </g>
      ))}
      <rect x={54} y={140} width={152} height={1.4} fill="#fff" opacity="0.18" />

      {/* the trend that matters */}
      <Emit id={id}>
        <path
          d="M62 120 L96 96 L128 104 L172 66 L206 54"
          fill="none"
          stroke={HILITE}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="176"
          style={{ ["--len" as string]: "176", animation: "svc-draw 1.8s 0.4s ease-out both" }}
        />
      </Emit>
      <Orb id={id} cx={206} cy={54} r={5} hot />

      {/* KPI card, floating in front */}
      <g transform="rotate(-5 60 162)">
        <Slab id={id} x={24} y={140} w={72} h={44} r={9} glass />
        <Line x={34} y={150} w={26} h={3.4} color="#fff" opacity={0.3} />
        <Line x={34} y={160} w={40} h={8} color={HILITE} opacity={0.95} r={4} />
        <Line x={34} y={173} w={30} h={3} color="#fff" opacity={0.18} />
      </g>

      {/* ingest */}
      <Packet path="M20 70 L40 70" color={color} r={2.6} dur={1.8} />
      {[62, 84, 106].map((y, i) => (
        <Orb key={y} id={id} cx={16} cy={y} r={4} style={{ animation: `svc-glow-breathe ${2.2 + i * 0.3}s ${i * 0.25}s ease-in-out infinite` }} />
      ))}
    </Stage>
  )
}

// ── Blog — the argument, on the page ─────────────────────────────────────────
export function BlogArt({ color = "#4d92ff", size, className }: ArtProps) {
  const id = "m-blog"
  return (
    <Stage id={id} color={color} size={size} className={className} shadow={{ cx: 132, cy: 198, rx: 82, ry: 13 }}>
      <g transform="rotate(-9 118 120)" opacity={0.42}>
        <Slab id={id} x={52} y={40} w={132} h={144} r={10} glass />
      </g>
      <g transform="rotate(-4 124 116)" opacity={0.66}>
        <Slab id={id} x={60} y={34} w={132} h={144} r={10} glass />
      </g>

      <g transform="rotate(2.5 132 112)">
        <Slab id={id} x={68} y={28} w={134} h={148} r={11}>
          <rect x={68} y={28} width={134} height={148} fill={`url(#${id}-screen)`} opacity="0.35" />
        </Slab>
        <Line x={84} y={44} w={62} h={7} color="#fff" opacity={0.6} />
        <Line x={84} y={58} w={38} h={4} color={color} opacity={0.5} />
        {[78, 88, 98].map((y, i) => (
          <Line key={y} x={84} y={y} w={i === 2 ? 74 : 102} h={3.6} color="#fff" opacity={0.2} />
        ))}
        {/* the line worth quoting */}
        <Emit id={id}>
          <rect x={80} y={112} width={4} height={30} rx={2} fill={HILITE} />
        </Emit>
        <Line x={92} y={118} w={96} h={4} color="#fff" opacity={0.42} />
        <Line x={92} y={128} w={72} h={4} color="#fff" opacity={0.34} />
        {[148, 156].map((y, i) => (
          <Line key={y} x={84} y={y} w={i ? 66 : 94} h={3.2} color="#fff" opacity={0.14} />
        ))}
      </g>

      <Breathe dur={2.6}>
        <Orb id={id} cx={210} cy={52} r={7} hot />
      </Breathe>
      <Orb id={id} cx={34} cy={148} r={4} />
    </Stage>
  )
}

// ── How we work — four shapes an engagement can take ─────────────────────────
export function EngagementArt({ color = "#0059E8", size, className }: ArtProps) {
  const id = "m-eng"

  // Each tile shows a genuinely different team formation, so the four models
  // read apart at a glance rather than as four identical boxes.
  const tile = (
    x: number,
    y: number,
    rot: number,
    lifted: boolean,
    body: React.ReactNode,
    k: string
  ) => (
    <g key={k} transform={`rotate(${rot} ${x + 48} ${y + 34})`}>
      <Slab id={id} x={x} y={y} w={96} h={68} r={11} glass={!lifted}>
        {lifted && <rect x={x} y={y} width={96} height={68} fill={`url(#${id}-screen)`} opacity="0.55" />}
      </Slab>
      {body}
    </g>
  )

  const unit = (cx: number, cy: number, hot?: boolean, d = 0) => (
    <Orb
      key={`${cx}-${cy}`}
      id={id}
      cx={cx}
      cy={cy}
      r={8}
      hot={hot}
      bloom={false}
      style={{ animation: `svc-glow-breathe ${2.4 + (d % 3) * 0.35}s ${d * 0.16}s ease-in-out infinite` }}
    />
  )

  return (
    <Stage id={id} color={color} size={size} className={className} shadow={{ cx: 130, cy: 200, rx: 94, ry: 13 }}>
      {/* full project outsourcing — a complete squad, ours */}
      {tile(20, 26, -4, false,
        <>
          <Line x={32} y={36} w={30} h={4} color="#fff" opacity={0.3} />
          {[0, 1, 2, 3].map((i) => unit(42 + (i % 2) * 26, 66 + Math.floor(i / 2) * 22, false, i))}
        </>, "t1")}

      {/* staff augmentation — ours joining yours */}
      {tile(142, 20, 4, false,
        <>
          <Line x={154} y={30} w={30} h={4} color="#fff" opacity={0.3} />
          {[0, 1].map((i) => (
            <circle key={i} cx={164} cy={58 + i * 22} r={8} fill="none" stroke={color} strokeOpacity="0.35" strokeWidth="1.4" strokeDasharray="3 3" />
          ))}
          {[0, 1].map((i) => unit(204, 58 + i * 22, true, i))}
          <path d="M240 96 C238 66 224 58 214 60" fill="none" stroke={HILITE} strokeOpacity="0.45" strokeWidth="1.4" strokeDasharray="4 4" />
        </>, "t2")}

      {/* dedicated team — ours, wired to you */}
      {tile(16, 116, -3, false,
        <>
          <Line x={28} y={126} w={30} h={4} color="#fff" opacity={0.3} />
          {[0, 1, 2].map((i) => unit(40 + i * 22, 156, false, i))}
          <path d="M104 156 L124 156" stroke={color} strokeOpacity="0.4" strokeWidth="1.4" strokeDasharray="3 3" />
        </>, "t3")}
      <rect x={118} y={142} width={16} height={28} rx={5} fill={`url(#${id}-glass)`} stroke={`url(#${id}-rim)`} strokeWidth="1" />

      {/* end-to-end partnership — lifted, lit, interlocked */}
      {tile(146, 110, 3, true,
        <>
          <Line x={158} y={120} w={34} h={4} color="#fff" opacity={0.45} />
          {unit(180, 152, false, 0)}
          {unit(204, 152, true, 1)}
          <path d="M180 152 L204 152" stroke={HILITE} strokeOpacity="0.7" strokeWidth="2" />
        </>, "t4")}

      <Packet path="M116 62 L142 54" color={HILITE} r={3} dur={2} />
      <Packet path="M112 150 L146 146" color={color} r={2.6} dur={2.4} delay={0.7} />
    </Stage>
  )
}

// ── Team — one core, every discipline in orbit ───────────────────────────────
export function TeamArt({ color = "#4d92ff", size, className }: ArtProps) {
  const id = "m-team"
  const ring = Array.from({ length: 7 }, (_, i) => {
    const a = (Math.PI * 2 * i) / 7 - Math.PI / 2
    return { x: 130 + Math.cos(a) * 82, y: 104 + Math.sin(a) * 62, i }
  })
  return (
    <Stage id={id} color={color} size={size} className={className} shadow={{ cx: 130, cy: 192, rx: 78, ry: 12 }}>
      <ellipse cx={130} cy={104} rx={82} ry={62} fill="none" stroke={color} strokeOpacity="0.16" strokeWidth="1" strokeDasharray="5 7" />
      <ellipse cx={130} cy={104} rx={54} ry={40} fill="none" stroke={color} strokeOpacity="0.1" strokeWidth="1" strokeDasharray="4 8" />

      {ring.map((n) => (
        <line key={`l${n.i}`} x1={130} y1={104} x2={n.x} y2={n.y} stroke={color} strokeOpacity="0.14" strokeWidth="1" />
      ))}
      {ring.map((n) => (
        <Orb
          key={n.i}
          id={id}
          cx={n.x}
          cy={n.y}
          r={n.i === 0 ? 13 : 11}
          hot={n.i === 0}
          style={{ animation: `svc-glow-breathe ${2.6 + (n.i % 4) * 0.3}s ${n.i * 0.22}s ease-in-out infinite` }}
        />
      ))}

      <Emit id={id}>
        <Orb id={id} cx={130} cy={104} r={26} bloom={false} />
      </Emit>
      <ellipse cx={130} cy={104} rx={26} ry={26} fill="none" stroke="#fff" strokeOpacity="0.2" strokeWidth="1" />
      <Packet path={`M130 104 L${ring[0]!.x.toFixed(1)} ${ring[0]!.y.toFixed(1)}`} color={HILITE} r={2.8} dur={2.2} />
    </Stage>
  )
}

// ── Careers — a track that actually climbs ───────────────────────────────────
export function CareersArt({ color = "#4d92ff", size, className }: ArtProps) {
  const id = "m-careers"
  const steps = [
    { x: 26, y: 150, w: 62 },
    { x: 74, y: 122, w: 62 },
    { x: 122, y: 94, w: 62 },
    { x: 170, y: 66, w: 62 },
  ]
  return (
    <Stage id={id} color={color} size={size} className={className} shadow={{ cx: 132, cy: 198, rx: 92, ry: 13 }}>
      {steps.map((s, i) => (
        <g key={s.x}>
          {/* riser */}
          <path d={`M${s.x} ${s.y + 12} L${s.x + s.w} ${s.y + 12} L${s.x + s.w} ${s.y + 30} L${s.x} ${s.y + 30} Z`} fill={`url(#${id}-surf-dark)`} opacity={0.75} />
          {/* tread */}
          <path d={`M${s.x} ${s.y + 12} L${s.x + 12} ${s.y} L${s.x + s.w + 12} ${s.y} L${s.x + s.w} ${s.y + 12} Z`} fill={`url(#${id}-surf)`} />
          <path d={`M${s.x} ${s.y + 12} L${s.x + 12} ${s.y} L${s.x + s.w + 12} ${s.y} L${s.x + s.w} ${s.y + 12} Z`} fill="none" stroke={`url(#${id}-rim)`} strokeWidth="1" />
          <Orb id={id} cx={s.x + 30} cy={s.y + 6} r={5 + i} hot={i === 3} bloom={i === 3} style={{ animation: `svc-glow-breathe ${2.4 + i * 0.3}s ${i * 0.2}s ease-in-out infinite` }} />
        </g>
      ))}
      {[0, 1, 2].map((i) => (
        <path
          key={i}
          d={`M${190 - i * 0} ${44 - i * 13} L${202} ${34 - i * 13} L${214} ${44 - i * 13}`}
          fill="none"
          stroke={HILITE}
          strokeOpacity={0.85 - i * 0.26}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ animation: `svc-glow-breathe ${1.8 + i * 0.3}s ${i * 0.22}s ease-in-out infinite` }}
        />
      ))}
    </Stage>
  )
}

// ── FAQs — a question, opened and answered ───────────────────────────────────
export function FaqArt({ color = "#4d92ff", size, className }: ArtProps) {
  const id = "m-faq"
  return (
    <Stage id={id} color={color} size={size} className={className} shadow={{ cx: 130, cy: 198, rx: 86, ry: 12 }}>
      {[30, 62].map((y, i) => (
        <g key={y} transform={`rotate(${-1.5 + i} 130 ${y + 12})`} opacity={0.62}>
          <Slab id={id} x={40} y={y} w={180} h={26} r={8} glass spec={false} />
          <Line x={56} y={y + 11} w={94} h={4} color="#fff" opacity={0.26} />
          <Line x={192} y={y + 11} w={14} h={3} color="#fff" opacity={0.3} />
          <Line x={197.5} y={y + 5.5} w={3} h={14} color="#fff" opacity={0.3} r={1.5} />
        </g>
      ))}

      {/* the opened one */}
      <g transform="rotate(1 130 128)">
        <Slab id={id} x={36} y={100} w={188} h={74} r={10}>
          <rect x={36} y={100} width={188} height={74} fill={`url(#${id}-screen)`} opacity="0.4" />
        </Slab>
        <Emit id={id}>
          <rect x={36} y={100} width={5} height={74} rx={2.5} fill={HILITE} />
        </Emit>
        <Line x={56} y={114} w={112} h={5.5} color="#fff" opacity={0.62} />
        <Line x={192} y={116} w={16} h={3.2} color={HILITE} opacity={0.95} />
        {[134, 144, 154].map((y, i) => (
          <Line key={y} x={56} y={y} w={i === 2 ? 108 : 150} h={3.6} color="#fff" opacity={0.24} />
        ))}
      </g>

      <Breathe dur={2.6}>
        <Orb id={id} cx={214} cy={54} r={6} hot />
      </Breathe>
    </Stage>
  )
}

// ── Contact — you write, a senior engineer answers ───────────────────────────
export function ContactArt({ color = "#7DD6FF", size, className }: ArtProps) {
  const id = "m-contact"
  const out = "M120 80 C156 62 176 66 190 88"
  const back = "M190 126 C168 152 138 142 120 126"
  return (
    <Stage id={id} color={color} size={size} className={className} shadow={{ cx: 120, cy: 198, rx: 86, ry: 13 }}>
      <g transform="rotate(-3 76 110)">
        <Slab id={id} x={20} y={48} w={104} h={124} r={11}>
          <rect x={20} y={48} width={104} height={124} fill={`url(#${id}-screen)`} opacity="0.32" />
        </Slab>
        <Line x={34} y={62} w={40} h={5} color="#fff" opacity={0.5} />
        <rect x={34} y={80} width={76} height={11} rx={4} fill="#fff" opacity="0.08" />
        <rect x={34} y={97} width={76} height={11} rx={4} fill="#fff" opacity="0.08" />
        <rect x={34} y={114} width={76} height={26} rx={4} fill="#fff" opacity="0.06" />
        <Line x={40} y={120} w={52} h={3.2} color="#fff" opacity={0.24} />
        <Line x={40} y={128} w={38} h={3.2} color="#fff" opacity={0.18} />
        <Breathe dur={2.4}>
          <rect x={34} y={148} width={54} height={14} rx={7} fill={HILITE} opacity="0.95" />
        </Breathe>
      </g>

      <path d={out} fill="none" stroke={color} strokeOpacity="0.3" strokeWidth="1.4" strokeDasharray="5 6" />
      <Packet path={out} color={HILITE} r={3.2} dur={2.2} />
      <path d={back} fill="none" stroke={color} strokeOpacity="0.22" strokeWidth="1.4" strokeDasharray="5 6" />
      <Packet path={back} color="#fff" r={2.6} dur={2.6} delay={1.1} />

      {[40, 30].map((r, i) => (
        <circle
          key={r}
          cx={198}
          cy={106}
          r={r}
          fill="none"
          stroke={color}
          strokeOpacity={0.14 + i * 0.1}
          strokeWidth="1"
          strokeDasharray="4 7"
          style={{ animation: `svc-glow-breathe ${2.8 + i * 0.5}s ${i * 0.3}s ease-in-out infinite` }}
        />
      ))}
      <Emit id={id}>
        <Orb id={id} cx={198} cy={106} r={20} bloom={false} />
      </Emit>
      <ellipse cx={198} cy={100} rx={7} ry={7} fill="#fff" opacity="0.5" />
      <path d="M184 120 Q198 106 212 120" fill="none" stroke="#fff" strokeOpacity="0.45" strokeWidth="2" strokeLinecap="round" />
    </Stage>
  )
}

// ── About — concept to scale, one accountable curve ──────────────────────────
export function AboutArt({ color = "#4d92ff", size, className }: ArtProps) {
  const id = "m-about"
  const curve = "M50 152 C86 152 92 116 126 106 C160 96 166 62 210 54"
  const marks = [
    [50, 152],
    [86, 145],
    [126, 106],
    [172, 78],
    [210, 54],
  ]
  return (
    <Stage id={id} color={color} size={size} className={className} shadow={{ cx: 130, cy: 198, rx: 88, ry: 13 }}>
      <Slab id={id} x={30} y={28} w={200} h={150} r={12} glass />
      {[62, 94, 126, 158].map((y) => (
        <line key={y} x1={44} y1={y} x2={216} y2={y} stroke="#fff" strokeOpacity="0.07" strokeWidth="1" />
      ))}
      {/* area under the curve */}
      <path d={`${curve} L210 166 L50 166 Z`} fill={`url(#${id}-bloom)`} opacity="0.5" />
      <Emit id={id}>
        <path
          d={curve}
          fill="none"
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray="212"
          style={{ ["--len" as string]: "212", animation: "svc-draw 2s 0.3s ease-out both" }}
        />
      </Emit>
      {marks.map(([x, y], i) => (
        <Orb
          key={x}
          id={id}
          cx={x as number}
          cy={y as number}
          r={i === 4 ? 8 : 5.5}
          hot={i === 4}
          bloom={i === 4}
          style={{ animation: `svc-glow-breathe ${2.4 + i * 0.25}s ${i * 0.2}s ease-in-out infinite` }}
        />
      ))}
      <line x1={44} y1={166} x2={216} y2={166} stroke="#fff" strokeOpacity="0.16" strokeWidth="1" />
      <Packet path={curve} color="#fff" r={2.6} dur={3.2} />
    </Stage>
  )
}

// ── AI & ML — a network that decides ─────────────────────────────────────────
export function AiMlArt({ color = "#4d92ff", size, className }: ArtProps) {
  const id = "m-aiml"
  const L1 = [62, 104, 146]
  const L2 = [46, 84, 122, 160]
  const L3 = [84, 124]
  return (
    <Stage id={id} color={color} size={size} className={className} shadow={{ cx: 130, cy: 196, rx: 84, ry: 12 }}>
      {L1.map((y1) =>
        L2.map((y2) => (
          <line key={`a${y1}${y2}`} x1={56} y1={y1} x2={126} y2={y2} stroke={color} strokeOpacity="0.12" strokeWidth="1" />
        ))
      )}
      {L2.map((y1) =>
        L3.map((y2) => (
          <line key={`b${y1}${y2}`} x1={126} y1={y1} x2={200} y2={y2} stroke={color} strokeOpacity="0.12" strokeWidth="1" />
        ))
      )}
      <Packet path="M56 104 L126 84 L200 84" color={color} r={3} dur={2.4} />
      <Packet path="M56 146 L126 122 L200 124" color="#fff" r={2.4} dur={3} delay={0.8} />

      {L1.map((y, i) => (
        <Orb key={`o1${y}`} id={id} cx={56} cy={y} r={8} style={{ animation: `svc-glow-breathe ${2.4 + i * 0.3}s ${i * 0.2}s ease-in-out infinite` }} />
      ))}
      {L2.map((y, i) => (
        <Orb key={`o2${y}`} id={id} cx={126} cy={y} r={10} style={{ animation: `svc-glow-breathe ${2.6 + i * 0.25}s ${0.15 + i * 0.2}s ease-in-out infinite` }} />
      ))}
      <Emit id={id}>
        {L3.map((y) => (
          <Orb key={`o3${y}`} id={id} cx={200} cy={y} r={13} hot bloom={false} />
        ))}
      </Emit>
    </Stage>
  )
}

// ── Custom Software — the stack, with a module landing ───────────────────────
export function CustomSoftwareArt({ color = "#0059E8", size, className }: ArtProps) {
  const id = "m-custom"
  const layers = [
    { y: 140, w: 176, x: 42, label: 3 },
    { y: 104, w: 160, x: 50, label: 4 },
    { y: 68, w: 144, x: 58, label: 3 },
  ]
  return (
    <Stage id={id} color={color} size={size} className={className} shadow={{ cx: 130, cy: 196, rx: 90, ry: 13 }}>
      {layers.map((l, i) => (
        <g key={l.y}>
          {/* side face for thickness */}
          <path d={`M${l.x} ${l.y + 26} L${l.x + l.w} ${l.y + 26} L${l.x + l.w} ${l.y + 32} L${l.x} ${l.y + 32} Z`} fill="#01060f" opacity="0.5" />
          <Slab id={id} x={l.x} y={l.y} w={l.w} h={26} r={6} glass={i !== 1}>
            {i === 1 && <rect x={l.x} y={l.y} width={l.w} height={26} fill={`url(#${id}-screen)`} opacity="0.35" />}
          </Slab>
          {Array.from({ length: l.label }).map((_, k) => (
            <Line key={k} x={l.x + 14 + k * 30} y={l.y + 11} w={22} h={5} color="#fff" opacity={0.22 + i * 0.06} />
          ))}
          <Line x={l.x + l.w - 30} y={l.y + 11} w={18} h={5} color={color} opacity={0.5} />
        </g>
      ))}

      <Packet path="M130 44 L130 66" color={HILITE} r={3.4} dur={1.8} />
      <Breathe dur={2.2}>
        <g transform="rotate(-6 130 30)">
          <Slab id={id} x={102} y={16} w={56} h={26} r={6} hot />
          <Line x={112} y={26} w={24} h={5} color="#3b1a06" opacity={0.5} />
        </g>
      </Breathe>
    </Stage>
  )
}

// ── Web & Mobile — one system, every screen ──────────────────────────────────
export function WebMobileArt({ color = "#7DD6FF", size, className }: ArtProps) {
  const id = "m-webmob"
  return (
    <Stage id={id} color={color} size={size} className={className} shadow={{ cx: 128, cy: 196, rx: 92, ry: 13 }}>
      {/* tablet, behind */}
      <g transform="rotate(-6 76 104)" opacity={0.55}>
        <Slab id={id} x={16} y={52} w={92} h={120} r={10} glass />
        <Line x={28} y={66} w={40} h={4} color="#fff" opacity={0.26} />
        <rect x={28} y={80} width={68} height={40} rx={5} fill={color} opacity="0.2" />
      </g>

      {/* browser, front */}
      <Slab id={id} x={54} y={40} w={162} h={116} r={10}>
        <rect x={54} y={40} width={162} height={22} fill="#fff" opacity="0.07" />
        <rect x={54} y={62} width={162} height={94} fill={`url(#${id}-screen)`} opacity="0.55" />
      </Slab>
      {[0, 1, 2].map((i) => (
        <circle key={i} cx={66 + i * 9} cy={51} r={2.8} fill={color} opacity={0.45 + i * 0.12} />
      ))}
      <rect x={96} y={46} width={104} height={10} rx={5} fill="#fff" opacity="0.08" />
      <rect x={66} y={74} width={62} height={44} rx={5} fill={color} opacity="0.3" />
      <Line x={138} y={78} w={64} h={4} color="#fff" opacity={0.3} />
      <Line x={138} y={90} w={52} h={4} color="#fff" opacity={0.2} />
      <Line x={138} y={102} w={60} h={4} color="#fff" opacity={0.16} />
      <Breathe dur={2.6}>
        <rect x={66} y={128} width={46} height={12} rx={6} fill={HILITE} opacity="0.95" />
      </Breathe>

      {/* phone, front-right */}
      <g transform="rotate(8 206 140)">
        <Slab id={id} x={182} y={92} w={50} h={104} r={12}>
          <rect x={182} y={92} width={50} height={104} fill={`url(#${id}-screen)`} opacity="0.5" />
        </Slab>
        <rect x={198} y={97} width={16} height={3} rx={1.5} fill="#000" opacity="0.45" />
        <rect x={190} y={112} width={34} height={26} rx={4} fill={color} opacity="0.32" />
        <Line x={190} y={146} w={34} h={3.4} color="#fff" opacity={0.22} />
        <Line x={190} y={154} w={24} h={3.4} color="#fff" opacity={0.16} />
        <Breathe dur={2.6} delay={0.3}>
          <rect x={190} y={168} width={28} height={10} rx={5} fill={HILITE} opacity="0.9" />
        </Breathe>
      </g>
    </Stage>
  )
}

// ── E-commerce — the storefront that converts ────────────────────────────────
export function EcommerceArt({ color = "#4d92ff", size, className }: ArtProps) {
  const id = "m-ecom"
  return (
    <Stage id={id} color={color} size={size} className={className} shadow={{ cx: 128, cy: 196, rx: 88, ry: 13 }}>
      <Slab id={id} x={34} y={30} w={172} h={126} r={11}>
        <rect x={34} y={30} width={172} height={24} fill="#fff" opacity="0.06" />
      </Slab>
      <Line x={48} y={39} w={36} h={5} color="#fff" opacity={0.45} />
      <circle cx={186} cy={42} r={7} fill={color} opacity="0.3" />
      <circle cx={192} cy={36} r={5} fill={HILITE} opacity="0.95" />

      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect x={48 + i * 52} y={66} width={44} height={40} rx={6} fill={color} opacity={0.16 + i * 0.05} />
          <rect x={48 + i * 52} y={66} width={44} height={40} rx={6} fill="none" stroke={`url(#${id}-rim)`} strokeWidth="1" />
          <circle cx={70 + i * 52} cy={82} r={9} fill={color} opacity="0.4" />
          <Line x={56 + i * 52} y={96} w={28} h={3.4} color="#fff" opacity={0.24} />
        </g>
      ))}
      <Line x={48} y={120} w={80} h={5} color="#fff" opacity={0.28} />
      <Line x={48} y={132} w={54} h={4} color="#fff" opacity={0.18} />
      <Breathe dur={2.4}>
        <rect x={140} y={118} width={52} height={20} rx={10} fill={HILITE} opacity="0.95" />
        <Line x={152} y={126} w={28} h={4} color="#3b1a06" opacity={0.45} />
      </Breathe>

      {/* payment confirmation, floating in front */}
      <g transform="rotate(-6 76 168)">
        <Slab id={id} x={38} y={148} w={80} h={40} r={9} glass />
        <rect x={48} y={158} width={16} height={12} rx={2} fill={color} opacity="0.5" />
        <Line x={70} y={160} w={36} h={3.4} color="#fff" opacity={0.3} />
        <Line x={70} y={170} w={24} h={3.4} color="#fff" opacity={0.18} />
      </g>
      <Emit id={id}>
        <circle cx={140} cy={166} r={14} fill={`url(#${id}-orb-hot)`} />
        <path d="M133 166 L139 172 L149 159" fill="none" stroke="#2a1205" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
      </Emit>
    </Stage>
  )
}

// ── UI/UX — the system behind the screen ─────────────────────────────────────
export function UiUxArt({ color = "#9BC4FF", size, className }: ArtProps) {
  const id = "m-uiux"
  return (
    <Stage id={id} color={color} size={size} className={className} shadow={{ cx: 128, cy: 196, rx: 86, ry: 13 }}>
      {/* artboard */}
      <Slab id={id} x={52} y={28} w={132} h={148} r={11}>
        <rect x={52} y={28} width={132} height={148} fill={`url(#${id}-screen)`} opacity="0.3" />
      </Slab>
      <rect x={64} y={40} width={108} height={14} rx={5} fill="#fff" opacity="0.08" />
      <Line x={70} y={45} w={30} h={4} color="#fff" opacity={0.35} />
      <rect x={64} y={64} width={50} height={54} rx={6} fill={color} opacity="0.26" />
      <Line x={124} y={70} w={48} h={4} color="#fff" opacity={0.3} />
      <Line x={124} y={82} w={40} h={4} color="#fff" opacity={0.22} />
      <Line x={124} y={94} w={46} h={4} color="#fff" opacity={0.16} />
      <Breathe dur={2.6}>
        <rect x={64} y={132} width={62} height={16} rx={8} fill={HILITE} opacity="0.95" />
      </Breathe>

      {/* tokens */}
      {[52, 82, 112, 142].map((y, i) => (
        <g key={y}>
          <Orb id={id} cx={24} cy={y} r={9} hot={i === 3} bloom={false} style={{ animation: `svc-glow-breathe ${2.4 + i * 0.3}s ${i * 0.2}s ease-in-out infinite` }} />
          <line x1={34} y1={y} x2={52} y2={y < 100 ? 80 : 130} stroke={color} strokeOpacity="0.16" strokeWidth="1" strokeDasharray="3 4" />
        </g>
      ))}

      {/* component library */}
      {[46, 82, 118].map((y, i) => (
        <g key={y} transform={`rotate(${3 - i * 2} 216 ${y + 12})`}>
          <Slab id={id} x={192} y={y} w={52} h={26} r={7} glass spec={false} />
          <Line x={202} y={y + 11} w={22} h={4} color="#fff" opacity={0.3} />
        </g>
      ))}

      {/* cursor */}
      <Emit id={id}>
        <path
          d="M118 140 L118 166 L125 159 L130 170 L136 167 L131 156 L140 155 Z"
          fill={HILITE}
          stroke="#fff"
          strokeOpacity="0.5"
          strokeWidth="1"
          strokeLinejoin="round"
        />
      </Emit>
    </Stage>
  )
}

// ── Cloud & DevOps — containers moving through the pipeline ──────────────────
export function CloudDevOpsArt({ color = "#0059E8", size, className }: ArtProps) {
  const id = "m-cloud"
  const track = "M44 128 L216 128"
  return (
    <Stage id={id} color={color} size={size} className={className} shadow={{ cx: 130, cy: 198, rx: 90, ry: 13 }}>
      {/* cloud */}
      <Emit id={id}>
        <path
          d="M84 62 C84 40 106 32 120 40 C128 22 158 22 164 44 C186 44 190 66 172 70 L92 70 C84 70 84 66 84 62 Z"
          fill={`url(#${id}-surf)`}
        />
      </Emit>
      <path
        d="M84 62 C84 40 106 32 120 40 C128 22 158 22 164 44 C186 44 190 66 172 70 L92 70 C84 70 84 66 84 62 Z"
        fill="none"
        stroke={`url(#${id}-rim)`}
        strokeWidth="1.2"
      />
      {[0, 1, 2].map((i) => (
        <Packet key={i} path="M130 74 L130 104" color={color} r={2.6} dur={1.8} delay={i * 0.6} />
      ))}

      {/* pipeline stages */}
      {[28, 78, 128, 178].map((x, i) => (
        <g key={x}>
          <path d={`M${x} ${142} L${x + 46} ${142} L${x + 46} ${150} L${x} ${150} Z`} fill="#01060f" opacity="0.5" />
          <Slab id={id} x={x} y={110} w={46} h={32} r={7} glass={i !== 1}>
            {i === 1 && <rect x={x} y={110} width={46} height={32} fill={`url(#${id}-screen)`} opacity="0.4" />}
          </Slab>
          <Line x={x + 10} y={y0(i)} w={26} h={4} color="#fff" opacity={0.28} />
          <Line x={x + 10} y={y0(i) + 10} w={16} h={3.4} color="#fff" opacity={0.16} />
        </g>
      ))}

      {/* container riding the pipeline */}
      <g style={{ offsetPath: `path('${track}')`, animation: "svc-inf-travel 6s linear infinite" }}>
        <Emit id={id}>
          <circle r={11} fill={`url(#${id}-orb-hot)`} />
        </Emit>
      </g>

      {/* fleet */}
      {[68, 102, 136, 170].map((x, i) => (
        <rect key={x} x={x} y={168} width={26} height={9} rx={4.5} fill={color} opacity="0.35" style={{ animation: `svc-glow-breathe ${2.2 + i * 0.3}s ${i * 0.2}s ease-in-out infinite` }} />
      ))}
    </Stage>
  )
}

function y0(i: number) {
  return 120 + (i % 2) * 0
}

// ── Database — a primary with live replicas ──────────────────────────────────
export function DatabaseArt({ color = "#7DD6FF", size, className }: ArtProps) {
  const id = "m-db"
  const cyl = (cx: number, cy: number, w: number, h: number, hot?: boolean) => {
    const rx = w / 2
    const ry = w / 5.5
    return (
      <g>
        <path
          d={`M${cx - rx} ${cy - h / 2} L${cx - rx} ${cy + h / 2} A${rx} ${ry} 0 0 0 ${cx + rx} ${cy + h / 2} L${cx + rx} ${cy - h / 2} Z`}
          fill={hot ? `url(#${id}-hot)` : `url(#${id}-surf)`}
        />
        <ellipse cx={cx} cy={cy + h / 2} rx={rx} ry={ry} fill="#01060f" opacity="0.35" />
        <ellipse cx={cx} cy={cy - h / 2} rx={rx} ry={ry} fill={hot ? `url(#${id}-hot)` : `url(#${id}-surf)`} />
        <ellipse cx={cx} cy={cy - h / 2} rx={rx} ry={ry} fill="#fff" opacity="0.14" />
        <ellipse cx={cx} cy={cy - h / 2} rx={rx} ry={ry} fill="none" stroke={`url(#${id}-rim)`} strokeWidth="1" />
        <path
          d={`M${cx - rx} ${cy - h / 2} L${cx - rx} ${cy + h / 2} A${rx} ${ry} 0 0 0 ${cx + rx} ${cy + h / 2} L${cx + rx} ${cy - h / 2}`}
          fill="none"
          stroke={`url(#${id}-rim)`}
          strokeWidth="1"
        />
      </g>
    )
  }
  return (
    <Stage id={id} color={color} size={size} className={className} shadow={{ cx: 120, cy: 198, rx: 90, ry: 13 }}>
      {cyl(72, 106, 84, 78)}
      <ellipse cx={72} cy={90} rx={42} ry={15.3} fill="none" stroke={HILITE} strokeOpacity="0.5" strokeWidth="1.4" strokeDasharray="4 5" style={{ animation: "svc-ring-spin 18s linear infinite", transformBox: "fill-box", transformOrigin: "center" }} />
      <Line x={44} y={118} w={56} h={4} color="#fff" opacity={0.2} />
      <Line x={44} y={130} w={40} h={4} color="#fff" opacity={0.14} />

      {[56, 148].map((cy, i) => (
        <g key={cy}>
          {cyl(196, cy, 56, 48)}
          <path d={`M118 ${i === 0 ? 86 : 126} C150 ${i === 0 ? 62 : 150} 158 ${cy} 168 ${cy}`} fill="none" stroke={color} strokeOpacity="0.28" strokeWidth="1.4" strokeDasharray="4 5" />
          <Packet path={`M118 ${i === 0 ? 86 : 126} C150 ${i === 0 ? 62 : 150} 158 ${cy} 168 ${cy}`} color="#fff" r={2.6} dur={2.4} delay={i * 0.5} />
        </g>
      ))}
      <Breathe dur={2.6}>
        <Orb id={id} cx={72} cy={62} r={6} hot />
      </Breathe>
    </Stage>
  )
}

// ── Quality Assurance — the pyramid that gates the release ───────────────────
export function QaArt({ color = "#4d92ff", size, className }: ArtProps) {
  const id = "m-qa"
  const tiers = [
    { y: 130, hw: 78, hw2: 62, h: 34 },
    { y: 96, hw: 62, hw2: 46, h: 34 },
    { y: 62, hw: 46, hw2: 28, h: 34 },
  ]
  return (
    <Stage id={id} color={color} size={size} className={className} shadow={{ cx: 104, cy: 192, rx: 84, ry: 13 }}>
      {tiers.map((t, i) => (
        <g key={t.y}>
          {/* front face */}
          <path
            d={`M${104 - t.hw} ${t.y + t.h} L${104 + t.hw} ${t.y + t.h} L${104 + t.hw2} ${t.y} L${104 - t.hw2} ${t.y} Z`}
            fill={`url(#${id}-surf)`}
          />
          {/* lit top edge */}
          <path
            d={`M${104 - t.hw2} ${t.y} L${104 + t.hw2} ${t.y} L${104 + t.hw2 - 6} ${t.y - 7} L${104 - t.hw2 + 6} ${t.y - 7} Z`}
            fill={color}
            opacity={0.34 + i * 0.1}
          />
          <path
            d={`M${104 - t.hw} ${t.y + t.h} L${104 + t.hw} ${t.y + t.h} L${104 + t.hw2} ${t.y} L${104 - t.hw2} ${t.y} Z`}
            fill="none"
            stroke={`url(#${id}-rim)`}
            strokeWidth="1"
          />
          {Array.from({ length: 3 - i }).map((_, k) => (
            <circle key={k} cx={104 - 22 + k * 22 + i * 10} cy={t.y + 18} r={3.4} fill="#fff" opacity="0.3" />
          ))}
        </g>
      ))}

      {/* gate */}
      <line x1={206} y1={40} x2={206} y2={176} stroke={color} strokeOpacity="0.2" strokeWidth="1.4" strokeDasharray="4 6" />
      {[62, 104, 146].map((y, i) => (
        <g key={y}>
          <Orb id={id} cx={206} cy={y} r={11} bloom={false} style={{ animation: `svc-glow-breathe ${2.4 + i * 0.3}s ${i * 0.2}s ease-in-out infinite` }} />
          <path d={`M200 ${y} L204 ${y + 5} L212 ${y - 5}`} fill="none" stroke="#fff" strokeOpacity="0.85" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      ))}
      <Emit id={id}>
        <Orb id={id} cx={206} cy={180} r={14} hot bloom={false} />
        <path d="M199 180 L204 186 L214 173" fill="none" stroke="#2a1205" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
      </Emit>
    </Stage>
  )
}

// ── Cybersecurity — layered trust around a hardened core ─────────────────────
export function SecurityArt({ color = "#7DD6FF", size, className }: ArtProps) {
  const id = "m-sec"
  const hexPath = (cx: number, cy: number, r: number) =>
    "M" +
    Array.from({ length: 6 }, (_, i) => {
      const a = (Math.PI / 3) * i - Math.PI / 2
      return `${(cx + Math.cos(a) * r).toFixed(1)},${(cy + Math.sin(a) * r).toFixed(1)}`
    }).join(" L") +
    " Z"
  return (
    <Stage id={id} color={color} size={size} className={className} shadow={{ cx: 126, cy: 196, rx: 78, ry: 12 }}>
      {[84, 64, 44].map((r, i) => (
        <g key={r}>
          <path d={hexPath(126, 104, r)} fill={i === 2 ? `url(#${id}-surf)` : `url(#${id}-glass)`} opacity={i === 0 ? 0.5 : 0.85} />
          <path
            d={hexPath(126, 104, r)}
            fill="none"
            stroke={`url(#${id}-rim)`}
            strokeWidth="1.2"
            strokeDasharray={i === 0 ? "7 6" : undefined}
            style={
              i === 0
                ? { transformBox: "fill-box", transformOrigin: "center", animation: "svc-ring-spin 30s linear infinite" }
                : undefined
            }
          />
        </g>
      ))}

      {/* checkpoints */}
      {Array.from({ length: 6 }).map((_, i) => {
        const a = (Math.PI / 3) * i - Math.PI / 2
        return (
          <Orb
            key={i}
            id={id}
            cx={126 + Math.cos(a) * 64}
            cy={104 + Math.sin(a) * 64}
            r={6}
            bloom={false}
            style={{ animation: `svc-glow-breathe ${2.4 + (i % 3) * 0.3}s ${i * 0.2}s ease-in-out infinite` }}
          />
        )
      })}

      {/* lock */}
      <Emit id={id}>
        <path d="M113 100 Q113 84 126 84 Q139 84 139 100" fill="none" stroke={HILITE} strokeWidth="5" strokeLinecap="round" />
        <rect x={108} y={100} width={36} height={30} rx={7} fill={`url(#${id}-hot)`} />
      </Emit>
      <circle cx={126} cy={113} r={4} fill="#2a1205" opacity="0.65" />

      {/* turned away at the perimeter */}
      <path d="M238 34 L192 68" stroke="#fff" strokeOpacity="0.28" strokeWidth="1.6" strokeDasharray="5 5" />
      <Breathe dur={1.9}>
        <circle cx={186} cy={72} r={13} fill="#fff" opacity="0.08" />
        <path d="M180 66 L192 78 M192 66 L180 78" stroke="#fff" strokeOpacity="0.8" strokeWidth="2.4" strokeLinecap="round" />
      </Breathe>
    </Stage>
  )
}

export const SERVICE_ART: Record<string, { Art: (p: ArtProps) => ReactElement; accent: string }> = {
  "ai-machine-learning": { Art: AiMlArt, accent: "#4d92ff" },
  "custom-software": { Art: CustomSoftwareArt, accent: "#0059E8" },
  "web-mobile": { Art: WebMobileArt, accent: "#7DD6FF" },
  ecommerce: { Art: EcommerceArt, accent: "#4d92ff" },
  "ui-ux-design": { Art: UiUxArt, accent: "#9BC4FF" },
  "cloud-devops": { Art: CloudDevOpsArt, accent: "#0059E8" },
  "data-bi": { Art: DataBiArt, accent: "#4d92ff" },
  "database-administration": { Art: DatabaseArt, accent: "#7DD6FF" },
  "quality-assurance": { Art: QaArt, accent: "#4d92ff" },
  cybersecurity: { Art: SecurityArt, accent: "#7DD6FF" },
}

export function serviceArt(slug: string) {
  return SERVICE_ART[slug] ?? SERVICE_ART["ai-machine-learning"]!
}

// ═══ Case studies ═══════════════════════════════════════════════════════════

// CareerScript — a CV read, roles ranked back
export function CareerScriptArt({ color = "#4d92ff", size, className }: ArtProps) {
  const id = "m-cs"
  return (
    <Stage id={id} color={color} size={size} className={className} shadow={{ cx: 128, cy: 196, rx: 88, ry: 13 }}>
      <g transform="rotate(-6 68 104)">
        <Slab id={id} x={22} y={42} w={92} h={124} r={9}>
          <rect x={22} y={42} width={92} height={124} fill={`url(#${id}-screen)`} opacity="0.3" />
        </Slab>
        <Orb id={id} cx={48} cy={68} r={11} bloom={false} />
        <Line x={66} y={62} w={36} h={4.5} color="#fff" opacity={0.42} />
        <Line x={66} y={72} w={26} h={3.4} color="#fff" opacity={0.24} />
        {[96, 106, 116, 126, 136, 146].map((y, i) => (
          <Line key={y} x={34} y={y} w={i % 3 === 2 ? 40 : 66} h={3.4} color="#fff" opacity={0.2} />
        ))}
      </g>

      <Packet path="M122 104 L152 104" color={color} r={3} dur={1.8} />

      {[
        { y: 52, w: 84, hot: true },
        { y: 92, w: 68, hot: false },
        { y: 132, w: 52, hot: false },
      ].map((r, i) => (
        <g key={r.y} transform={`rotate(${2 - i * 2} ${158 + r.w / 2} ${r.y + 14})`}>
          <Slab id={id} x={152} y={r.y} w={r.w} h={28} r={7} hot={r.hot} glass={!r.hot} />
          <Line x={164} y={r.y + 12} w={r.w - 36} h={4} color={r.hot ? "#3b1a06" : "#fff"} opacity={r.hot ? 0.45 : 0.3} />
        </g>
      ))}
      <Emit id={id}>
        <Orb id={id} cx={232} cy={54} r={9} hot bloom={false} />
      </Emit>
    </Stage>
  )
}

// Inosio — the building portfolio, running itself
export function InosioArt({ color = "#0059E8", size, className }: ArtProps) {
  const id = "m-inosio"
  const towers = [
    { x: 40, h: 84 },
    { x: 100, h: 122 },
    { x: 160, h: 98 },
  ]
  return (
    <Stage id={id} color={color} size={size} className={className} shadow={{ cx: 126, cy: 194, rx: 90, ry: 13 }}>
      {towers.map((t, ti) => (
        <g key={t.x}>
          <path d={`M${t.x} ${170 - t.h} L${t.x + 12} ${164 - t.h} L${t.x + 58} ${164 - t.h} L${t.x + 46} ${170 - t.h} Z`} fill={color} opacity="0.45" />
          <Slab id={id} x={t.x} y={170 - t.h} w={46} h={t.h} r={4} spec={ti === 1} glass={ti !== 1}>
            {ti === 1 && <rect x={t.x} y={170 - t.h} width={46} height={t.h} fill={`url(#${id}-screen)`} opacity="0.4" />}
          </Slab>
          {Array.from({ length: Math.floor(t.h / 22) }).map((_, r) =>
            [0, 1].map((c) => (
              <rect
                key={`${r}${c}`}
                x={t.x + 9 + c * 18}
                y={180 - t.h + r * 22}
                width={11}
                height={10}
                rx={2}
                fill="#fff"
                opacity={0.55}
                style={{ animation: `svc-blink ${2.6 + ((r + c + ti) % 4) * 0.6}s ${(r + c) * 0.35}s ease-in-out infinite` }}
              />
            ))
          )}
        </g>
      ))}
      <line x1={28} y1={170} x2={222} y2={170} stroke="#fff" strokeOpacity="0.16" strokeWidth="1" />

      <path d="M216 48 C190 62 160 70 138 80" fill="none" stroke={HILITE} strokeOpacity="0.4" strokeWidth="1.6" strokeDasharray="5 5" />
      <Packet path="M216 48 C190 62 160 70 138 80" color={HILITE} r={3} dur={2.2} />
      <Emit id={id}>
        <Orb id={id} cx={224} cy={44} r={12} hot bloom={false} />
      </Emit>
      <Orb id={id} cx={134} cy={82} r={5} hot />
    </Stage>
  )
}

// EngageMed — provider and patient, joined by data
export function EngageMedArt({ color = "#7DD6FF", size, className }: ArtProps) {
  const id = "m-engagemed"
  return (
    <Stage id={id} color={color} size={size} className={className} shadow={{ cx: 126, cy: 196, rx: 86, ry: 13 }}>
      {[52, 200].map((cx, i) => (
        <g key={cx}>
          <Orb id={id} cx={cx} cy={56} r={22} bloom={false} style={{ animation: `svc-glow-breathe ${2.8 + i * 0.4}s ${i * 0.3}s ease-in-out infinite` }} />
          <circle cx={cx} cy={48} r={7.5} fill="#fff" opacity="0.55" />
          <path d={`M${cx - 13} ${72} Q${cx} ${56} ${cx + 13} ${72}`} fill="none" stroke="#fff" strokeOpacity="0.45" strokeWidth="2.4" strokeLinecap="round" />
        </g>
      ))}
      <path d="M76 62 C120 84 132 84 176 62" fill="none" stroke={color} strokeOpacity="0.26" strokeWidth="1.4" strokeDasharray="5 6" />
      <Packet path="M76 62 C120 84 132 84 176 62" color="#fff" r={2.8} dur={2.6} />

      <Slab id={id} x={34} y={96} w={140} h={76} r={11}>
        <rect x={34} y={96} width={140} height={76} fill={`url(#${id}-screen)`} opacity="0.4" />
      </Slab>
      <Line x={46} y={106} w={38} h={4} color="#fff" opacity={0.35} />
      <Emit id={id}>
        <path
          d="M46 146 L70 146 L80 122 L94 166 L108 134 L118 146 L162 146"
          fill="none"
          stroke={HILITE}
          strokeWidth="2.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="176"
          style={{ ["--len" as string]: "176", animation: "svc-draw 1.8s 0.4s ease-out both" }}
        />
      </Emit>

      <g transform="rotate(5 206 136)">
        <Slab id={id} x={182} y={104} w={50} h={66} r={9} glass />
        {[0, 1, 2].map((i) => (
          <Line key={i} x={192} y={118 + i * 16} w={30 - i * 7} h={7} color={i === 0 ? HILITE : "#fff"} opacity={i === 0 ? 0.95 : 0.24} r={3.5} />
        ))}
      </g>
    </Stage>
  )
}

// ENSEK — metered energy, billed correctly
export function EnsekArt({ color = "#7DD6FF", size, className }: ArtProps) {
  const id = "m-ensek"
  return (
    <Stage id={id} color={color} size={size} className={className} shadow={{ cx: 124, cy: 196, rx: 88, ry: 13 }}>
      {/* meter */}
      <Emit id={id}>
        <circle cx={70} cy={86} r={44} fill={`url(#${id}-orb)`} opacity="0.55" />
      </Emit>
      <circle cx={70} cy={86} r={44} fill="none" stroke={`url(#${id}-rim)`} strokeWidth="1.4" />
      <circle cx={70} cy={86} r={33} fill="#01060f" opacity="0.4" />
      {Array.from({ length: 9 }).map((_, i) => {
        const a = Math.PI * (0.78 + (i / 8) * 1.44)
        return (
          <line
            key={i}
            x1={70 + Math.cos(a) * 26}
            y1={86 + Math.sin(a) * 26}
            x2={70 + Math.cos(a) * 33}
            y2={86 + Math.sin(a) * 33}
            stroke="#fff"
            strokeOpacity={0.4}
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        )
      })}
      <Breathe dur={2.8}>
        <line x1={70} y1={86} x2={92} y2={62} stroke={HILITE} strokeWidth="3.4" strokeLinecap="round" />
      </Breathe>
      <circle cx={70} cy={86} r={6} fill={`url(#${id}-orb-hot)`} />

      {/* consumption */}
      {[
        { x: 132, h: 32 },
        { x: 154, h: 54 },
        { x: 176, h: 42 },
        { x: 198, h: 68 },
      ].map((b, i) => (
        <g key={b.x} style={{ transformBox: "fill-box", transformOrigin: "bottom", animation: `svc-bar-grow 1.1s ${i * 0.12}s cubic-bezier(.16,1,.3,1) both` }}>
          <path d={`M${b.x} ${132 - b.h} L${b.x + 14} ${132 - b.h} L${b.x + 14} 132 L${b.x} 132 Z`} fill={`url(#${id}-surf)`} />
          <path d={`M${b.x} ${132 - b.h} L${b.x + 5} ${127 - b.h} L${b.x + 19} ${127 - b.h} L${b.x + 14} ${132 - b.h} Z`} fill={color} opacity="0.6" />
        </g>
      ))}
      <line x1={126} y1={132} x2={222} y2={132} stroke="#fff" strokeOpacity="0.18" strokeWidth="1" />

      {/* bill */}
      <g transform="rotate(-4 150 162)">
        <Slab id={id} x={100} y={142} w={100} h={44} r={9} glass />
        <Line x={112} y={152} w={44} h={4} color="#fff" opacity={0.3} />
        <Line x={112} y={165} w={52} h={9} color={HILITE} opacity={0.95} r={4.5} />
      </g>
    </Stage>
  )
}

// InvoicesTracker — sent, paid, visible
export function InvoicesArt({ color = "#4d92ff", size, className }: ArtProps) {
  const id = "m-inv"
  return (
    <Stage id={id} color={color} size={size} className={className} shadow={{ cx: 126, cy: 196, rx: 88, ry: 13 }}>
      <g transform="rotate(-5 68 100)">
        <Slab id={id} x={24} y={36} w={88} h={124} r={9}>
          <rect x={24} y={36} width={88} height={124} fill={`url(#${id}-screen)`} opacity="0.3" />
        </Slab>
        <Line x={36} y={48} w={38} h={5} color="#fff" opacity={0.45} />
        {[70, 84, 98, 112].map((y, i) => (
          <g key={y}>
            <Line x={36} y={y} w={i === 3 ? 34 : 44} h={3.6} color="#fff" opacity={0.22} />
            <Line x={86} y={y} w={16} h={3.6} color="#fff" opacity={0.3} />
          </g>
        ))}
        <Line x={36} y={132} w={66} h={1.6} color="#fff" opacity={0.2} />
        <Line x={70} y={140} w={32} h={7} color={HILITE} opacity={0.95} r={3.5} />
      </g>

      <Packet path="M118 96 L148 96" color={HILITE} r={3.2} dur={1.8} />
      <Emit id={id}>
        <Orb id={id} cx={166} cy={96} r={17} hot bloom={false} />
        <path d="M158 96 L164 103 L176 87" fill="none" stroke="#2a1205" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
      </Emit>

      <g transform="rotate(4 172 158)">
        <Slab id={id} x={112} y={130} w={120} h={58} r={10} glass />
        <Emit id={id}>
          <path
            d="M124 176 L148 162 L170 168 L196 144 L222 138"
            fill="none"
            stroke={color}
            strokeWidth="2.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="118"
            style={{ ["--len" as string]: "118", animation: "svc-draw 1.7s 0.6s ease-out both" }}
          />
        </Emit>
      </g>
      {[0, 1, 2].map((i) => (
        <Orb key={i} id={id} cx={148 + i * 22} cy={44} r={7} bloom={false} style={{ animation: `svc-glow-breathe ${2.4 + i * 0.3}s ${i * 0.25}s ease-in-out infinite` }} />
      ))}
    </Stage>
  )
}

// Loop DSP — a catalogue that pays out
export function LoopDspArt({ color = "#9BC4FF", size, className }: ArtProps) {
  const id = "m-loop"
  const wave = [20, 38, 26, 54, 34, 64, 30, 48, 22, 40, 28]
  return (
    <Stage id={id} color={color} size={size} className={className} shadow={{ cx: 126, cy: 196, rx: 90, ry: 13 }}>
      <g transform="rotate(-6 74 74)" opacity={0.5}>
        <Slab id={id} x={30} y={34} w={80} h={80} r={9} glass />
      </g>
      <g transform="rotate(3 80 70)">
        <Slab id={id} x={38} y={28} w={84} h={84} r={9}>
          <rect x={38} y={28} width={84} height={84} fill={`url(#${id}-screen)`} opacity="0.4" />
        </Slab>
        <circle cx={80} cy={70} r={25} fill="none" stroke="#fff" strokeOpacity="0.28" strokeWidth="1.4" />
        <Emit id={id}>
          <Orb id={id} cx={80} cy={70} r={9} bloom={false} style={{ transformBox: "fill-box", transformOrigin: "center", animation: "svc-ring-spin 10s linear infinite" }} />
        </Emit>
      </g>

      <g transform="rotate(4 178 66)">
        <Slab id={id} x={134} y={30} w={100} h={72} r={10} glass />
        <Emit id={id}>
          <path
            d="M144 86 L166 68 L188 76 L226 44"
            fill="none"
            stroke={HILITE}
            strokeWidth="2.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="112"
            style={{ ["--len" as string]: "112", animation: "svc-draw 1.6s 0.5s ease-out both" }}
          />
        </Emit>
        {[0, 1, 2].map((i) => (
          <circle key={i} cx={146 + i * 13} cy={42} r={4.4} fill={color} opacity={0.55 - i * 0.14} />
        ))}
      </g>

      {wave.map((h, i) => (
        <rect
          key={i}
          x={28 + i * 18}
          y={152 - h / 2}
          width={9}
          height={h}
          rx={4.5}
          fill={i === 5 ? `url(#${id}-orb-hot)` : color}
          opacity={i === 5 ? 1 : 0.45}
          style={{
            transformBox: "fill-box",
            transformOrigin: "center",
            animation: `svc-eq-bounce ${1.3 + (i % 4) * 0.25}s ${i * 0.09}s ease-in-out infinite`,
          }}
        />
      ))}
    </Stage>
  )
}

export const CASE_ART: Record<string, { Art: (p: ArtProps) => ReactElement }> = {
  careerscript: { Art: CareerScriptArt },
  inosio: { Art: InosioArt },
  engagemed: { Art: EngageMedArt },
  ensek: { Art: EnsekArt },
  invoicestracker: { Art: InvoicesArt },
  loopdsp: { Art: LoopDspArt },
}
export function caseArt(slug: string) {
  return CASE_ART[slug] ?? CASE_ART.careerscript!
}

// ═══ Blog posts ═════════════════════════════════════════════════════════════

// Woven in vs bolted on
export function WovenVsBoltedArt({ color = "#4d92ff", size, className }: ArtProps) {
  const id = "m-woven"
  const rows = [56, 100, 144]
  return (
    <Stage id={id} color={color} size={size} className={className} shadow={{ cx: 126, cy: 196, rx: 92, ry: 12 }}>
      {rows.map((y, i) => (
        <g key={`w${y}`}>
          <path d={`M18 ${y + 30} L106 ${y + 30} L106 ${y + 36} L18 ${y + 36} Z`} fill="#01060f" opacity="0.5" />
          <Slab id={id} x={18} y={y} w={88} h={30} r={6}>
            <rect x={18} y={y} width={88} height={30} fill={`url(#${id}-screen)`} opacity="0.45" />
          </Slab>
          {[36, 62, 88].map((x, k) => (
            <Orb key={x} id={id} cx={x} cy={y + 15} r={6} hot bloom={false} style={{ animation: `svc-glow-breathe ${2.2 + ((i + k) % 3) * 0.3}s ${k * 0.2}s ease-in-out infinite` }} />
          ))}
        </g>
      ))}
      <Packet path="M36 71 L62 115 L88 159" color={HILITE} r={2.8} dur={2.6} />

      <line x1={124} y1={34} x2={124} y2={180} stroke="#fff" strokeOpacity="0.14" strokeWidth="1" strokeDasharray="4 6" />

      {rows.map((y) => (
        <g key={`b${y}`} opacity={0.62}>
          <Slab id={id} x={142} y={y} w={84} h={30} r={6} glass spec={false} />
          <Line x={156} y={y + 13} w={54} h={4} color="#fff" opacity={0.16} />
        </g>
      ))}
      <line x1={184} y1={56} x2={184} y2={38} stroke={color} strokeOpacity="0.3" strokeWidth="1.2" strokeDasharray="3 3" />
      <g opacity={0.7}>
        <Slab id={id} x={158} y={12} w={52} h={26} r={6} glass spec={false} />
        <Orb id={id} cx={184} cy={25} r={5} bloom={false} />
      </g>
    </Stage>
  )
}

// Adding AI without a rewrite
export function StranglerFigArt({ color = "#0059E8", size, className }: ArtProps) {
  const id = "m-strang"
  const oldP = "M136 112 C168 126 186 138 200 150"
  const newP = "M136 104 C168 88 186 74 200 62"
  return (
    <Stage id={id} color={color} size={size} className={className} shadow={{ cx: 124, cy: 196, rx: 88, ry: 13 }}>
      <Slab id={id} x={16} y={66} w={90} h={88} r={10}>
        <rect x={16} y={66} width={90} height={88} fill={`url(#${id}-screen)`} opacity="0.35" />
      </Slab>
      <Line x={30} y={80} w={38} h={4.5} color="#fff" opacity={0.4} />
      {[96, 108, 120, 132].map((y, i) => (
        <Line key={y} x={30} y={y} w={i === 3 ? 42 : 62} h={3.6} color="#fff" opacity={0.2} />
      ))}

      {/* the flag that makes it reversible */}
      <Emit id={id}>
        <rect x={112} y={98} width={40} height={20} rx={10} fill={`url(#${id}-hot)`} />
      </Emit>
      <circle cx={142} cy={108} r={7} fill="#fff" opacity="0.9" />

      <path d={oldP} fill="none" stroke={color} strokeOpacity="0.5" strokeWidth="6" strokeLinecap="round" />
      <Packet path={oldP} color="#fff" r={2.6} dur={2.4} />
      <g opacity={0.8}>
        <Slab id={id} x={198} y={130} w={44} h={40} r={8} glass />
        <Line x={208} y={148} w={24} h={4} color="#fff" opacity={0.24} />
      </g>

      <path d={newP} fill="none" stroke={HILITE} strokeOpacity="0.55" strokeWidth="2" strokeDasharray="5 5" />
      <Packet path={newP} color={HILITE} r={3} dur={2} />
      <Emit id={id}>
        <Orb id={id} cx={214} cy={54} r={20} hot bloom={false} />
      </Emit>
      {[-7, 0, 7].map((d) => (
        <circle key={d} cx={214 + d} cy={54} r={2.6} fill="#2a1205" opacity="0.55" />
      ))}
    </Stage>
  )
}

// Seven questions before you hire
export function EvaluationArt({ color = "#9BC4FF", size, className }: ArtProps) {
  const id = "m-eval"
  const rows = [62, 80, 98, 116, 134, 152]
  // Which rows the vendor column fails — the point of the post.
  const vendorFails = new Set([1, 4, 5])
  return (
    <Stage id={id} color={color} size={size} className={className} shadow={{ cx: 126, cy: 198, rx: 88, ry: 12 }}>
      <Slab id={id} x={18} y={30} w={216} h={148} r={12}>
        <rect x={18} y={30} width={216} height={26} fill="#fff" opacity="0.06" />
      </Slab>
      <Line x={32} y={39} w={52} h={5} color="#fff" opacity={0.45} />

      {/* the column that answers well */}
      <rect x={186} y={56} width={48} height={122} fill={HILITE} opacity="0.07" />
      <line x1={186} y1={30} x2={186} y2={178} stroke="#fff" strokeOpacity="0.12" strokeWidth="1" />
      <line x1={140} y1={30} x2={140} y2={178} stroke="#fff" strokeOpacity="0.1" strokeWidth="1" />
      <circle cx={163} cy={44} r={5} fill={color} opacity="0.45" />
      <Orb id={id} cx={210} cy={44} r={6} hot bloom={false} />

      {rows.map((y, i) => (
        <g key={y}>
          <Line x={32} y={y - 2} w={i % 2 ? 78 : 96} h={4} color="#fff" opacity={0.22} />
          {vendorFails.has(i) ? (
            <path d={`M157 ${y - 5} L169 ${y + 5} M169 ${y - 5} L157 ${y + 5}`} stroke="#fff" strokeOpacity="0.28" strokeWidth="2" strokeLinecap="round" />
          ) : (
            <path d={`M156 ${y} L161 ${y + 5} L170 ${y - 5}`} fill="none" stroke="#fff" strokeOpacity="0.3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          )}
          <Emit id={id}>
            <path
              d={`M203 ${y} L208 ${y + 5} L217 ${y - 5}`}
              fill="none"
              stroke={HILITE}
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ animation: `svc-glow-breathe ${2.2 + (i % 3) * 0.3}s ${i * 0.12}s ease-in-out infinite` }}
            />
          </Emit>
        </g>
      ))}
    </Stage>
  )
}

export const POST_ART: Record<string, { Art: (p: ArtProps) => ReactElement }> = {
  "ai-woven-in-vs-bolted-on": { Art: WovenVsBoltedArt },
  "how-to-add-ai-to-existing-product": { Art: StranglerFigArt },
  "choosing-a-software-development-partner": { Art: EvaluationArt },
}
export function postArt(slug: string) {
  return POST_ART[slug] ?? POST_ART["ai-woven-in-vs-bolted-on"]!
}

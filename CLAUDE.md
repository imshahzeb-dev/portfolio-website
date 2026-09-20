# TechnoSX — Project Operating Manual

Read this before touching anything. It encodes decisions already paid for, and
traps already fallen into. Re-deriving them costs hours.

---

## 0. HARD RULES — these override style preference

1. **No commented-out code. Ever.** Git is the history. If it is dead, delete
   it. A block of `//` around old JSX is a defect, not a note.
2. **Comments explain *why*, never *what*.** `// map over services` is noise.
   `// Orange is a highlight, never a surface tint — it reads brown otherwise`
   is worth its line. If a comment restates the code, delete the comment.
3. **Ship optimised code.** No dead props, no unused imports, no duplicated
   sub-trees, no `any`, no leftover scaffolding. Every dependency must be
   imported by app code or removed.
4. **Measure before you optimise, and measure after.** Numbers in this file
   were taken with Playwright + CDP on a real GPU. Do not replace a measured
   claim with a guess.
5. **Never fabricate content.** No invented metrics, client names, logos,
   testimonials or headcount. If real data is missing, either restructure the
   section or mark `TODO(founder): …`. This is a standing constraint from the
   founder content doc, not a preference.
6. **Work at staff level, in both engineering and design.** Diagnose the root
   cause, not the symptom. If the brief would produce something mediocre, raise
   the bar and say what you changed.

---

## 1. What this is

Marketing site for **TechnoSX** — a full-service technology partner whose
differentiator is "AI woven in, not bolted on". Positioning is *both* halves:
full-service partner AND AI-native. Do not flatten it to either one.

Hard facts (do not exceed these): founded **2025**, **Islamabad, Pakistan**,
**10+ senior engineers**, **global delivery**. Canonical taxonomy is exactly
**10 services in 4 groups** and exactly **4 engagement models** — never rename,
merge, drop or invent one.

---

## 2. Stack

Next.js 15 App Router · React 19 · TypeScript · Tailwind v3 · framer-motion ·
next-themes. **10 runtime dependencies total.** It was 52; 42 were unused v0
template scaffolding. Keep it that way — adding a dependency needs a reason
that inline code cannot serve.

```
app/            routes; layout.tsx owns <Navbar> + <Footer> for every route
components/     sections and shared UI (flat, no barrel files)
components/illustrations/   hero art + the material system
data/           all content; pages never hardcode copy
lib/utils.ts    cn() only
```

`next.config.mjs` carries `distDir: process.env.NEXT_DIST_DIR || ".next"` so a
verification build can run without clobbering a live dev server. Use
`NEXT_DIST_DIR=.next-verify npx next build`.

---

## 3. Design system

**Palette.** Primary `#0059E8`, light `#4d92ff` / `#6BA5FF` / `#9BC4FF`, sky
`#7DD6FF`, dark blue `#0A2E6B`, near-black `#09111F` / `#071528`, card
`#0B2451`, border `#CEE3FF` / `#0E2C63`.

**Orange `#FF9958` is a highlight, never a surface tint.** Pass it as a scene's
base `color` and every gradient turns brown. One focal orange element per
composition — the thing you want noticed.

**Type.** `.display-*` and `.fs-*` classes in `globals.css`, responsive steps
already defined. Section rhythm is `pt-[120px] pb-[120px]`.

**Icons.** `components/icons.tsx` — 48 hand-drawn inline SVGs on a 24px grid,
1.75 stroke, round caps, `currentColor`. Brand marks are filled. Add new icons
to that file on the same grid; never introduce an icon font or a second set.
`components/icon-tile.tsx` is the card treatment (gradient surface, inset ring,
rim highlight).

**Hero art.** `components/illustrations/hero-art.tsx` with the material system
in `art-materials.tsx`. These are *rendered*, not outlined: lit gradients, rim
light, specular, contact shadow. Flat line-art was rejected as looking cheap.
Every page and case study has a bespoke scene — do not reuse one scene for two
meanings.

---

## 4. Performance — budget and the traps

Measured on a real GPU (Intel UHD 630). Headless Chromium defaults to
**SwiftShader software rendering**, which makes WebGL look ~30x slower than it
is. Always launch with `--use-angle=metal --enable-gpu --ignore-gpu-blocklist`
and verify via `WEBGL_debug_renderer_info` before trusting any GPU number.

**Budget:** 60 fps scroll with 0 dropped frames on desktop; TBT under ~300 ms at
4x CPU throttle; CLS 0; home route JS under ~20 kB.

Traps that already cost real time:

- **`background-attachment: fixed` is banned.** It repaints the whole viewport
  every scroll frame. Measured 32 fps with 57/180 frames dropped and a 1330 ms
  worst frame. The hero photo is a composited transform layer instead.
- **Particle field is bespoke** (`components/particles-component.tsx`), not a
  library. Uniform grid for O(n) links, alpha-bucketed batching (~5 draw calls,
  not ~600), DPR capped at 1.5, loop parked offscreen and on hidden tab. Cost
  is driven by **count** and **link distance**, not speed or radius — those two
  are free to tune.
- **Spline is poster-first.** Parsing that scene is a single indivisible
  ~1344 ms main-thread task. It loads only on desktop, only when capable
  (`saveData`, `deviceMemory`, `hardwareConcurrency`, `effectiveType`), and only
  on pointer intent. A 23 kB WebP poster carries everyone else.
- **Image optimisation must stay on.** `unoptimized: true` was disabling it
  entirely. Never re-enable it unless switching to a static export host.
- `content-visibility: auto` via `.cv-section` on below-fold sections: TBT −35%.
- Never emit two `priority` images for the same file — that is two preloads,
  one always wasted.

---

## 5. Gotchas that will bite you

- **`globals.css` sets `span { font-size: 16px }` globally.** Any `<span>` used
  for emphasis inside a heading silently shrinks. Add `.inherit-type`.
- **Nested Tailwind `group`.** `group-hover:` binds to the *nearest* `group`
  ancestor. `IconTile` inside the mega-menu was pinned to hover state for this
  reason; it now takes `interactive={false}`.
- **The hero photo is 16:9 with its subject at ~75% across.** A `cover` crop in
  a portrait viewport loses it. Below `lg` the photo is art-directed into its
  own panel — it is not a background.
- **Next.js silently rewrites `tsconfig.json` on build.** Check it before
  committing; it will inject whatever `distDir` you used.
- **Port 3000 is Docker on this machine.** Run dev on `3001`.
- Deleting files under a running `next dev` corrupts `.next`. Stop the server,
  delete, restart.

---

## 6. Workflow

1. **Read before writing.** Check `data/` for existing content and
   `components/` for an existing pattern. Two components doing one job is a bug.
2. **Diagnose with evidence.** Query the live DOM, measure with CDP, isolate one
   variable at a time. Average 3–5 runs before believing a performance delta —
   single runs have flipped conclusions here.
3. **Verify in a browser, not in your head.** Every route, both viewports,
   console clean. `npx tsc --noEmit` and a full build before declaring done.
4. **Report honestly.** If a number moved because of measurement error, say so.
   If part of the work is incomplete, name it.

---

## 7. Outstanding

- Contact form validates and confirms but **posts nowhere** — needs a real
  endpoint.
- `TODO(founder)`: street address, public inbox, social URLs, real case-study
  metrics and testimonials, real team names/photos, real open roles.
- Legal pages need counsel review.

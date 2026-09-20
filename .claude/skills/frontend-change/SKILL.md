---
name: frontend-change
description: Use when making any UI, content, styling, illustration or performance change to the TechnoSX site — new sections or pages, visual redesigns, icon or art work, responsive fixes, or anything described as slow, laggy or janky. Encodes the measure-first workflow, the repo's design system, and the specific traps in this codebase.
---

# Making a frontend change to TechnoSX

Work at staff level: find the root cause, not the symptom. If the request as
stated would produce something mediocre, raise the bar and say what you changed.

## Non-negotiables

- **No commented-out code.** Delete it; git remembers.
- **Comments say *why*, never *what*.**
- **No dead code, unused imports, unused deps, or `any`.**
- **Never fabricate content** — no invented metrics, clients, testimonials or
  headcount. Restructure the section or mark `TODO(founder): …`.

## 1. Orient before editing

```bash
rg -l "<thing>" app components data      # does this already exist?
cat data/company.ts data/services.ts     # content lives in data/, never inline
```

Two components doing one job is a bug. Extend the existing one.

## 2. Know where things belong

| Need | Goes in |
|---|---|
| Copy, services, case studies, FAQs | `data/*.ts` |
| An icon | `components/icons.tsx` (24px grid, 1.75 stroke) |
| Icon on a card | `components/icon-tile.tsx` |
| Hero artwork | `components/illustrations/hero-art.tsx` + `art-materials.tsx` |
| A section | `components/<name>-section.tsx` |
| Nav / footer | already global in `app/layout.tsx` — never re-add per page |

Orange `#FF9958` is a **highlight only**. As a base colour it turns surfaces brown.

## 3. Changing anything visual

Render it and look at it. Do not ship art you have not seen.

```bash
npx next dev -p 3001          # port 3000 is Docker on this machine
```

Screenshot with Playwright, then judge it honestly. Name what is weak and fix
it rather than declaring done.

## 4. Changing anything perf-sensitive

Measure first, isolate one variable, then measure after.

```js
// Headless defaults to SwiftShader — WebGL numbers will be ~30x too slow.
const GPU = ['--use-angle=metal','--enable-gpu','--ignore-gpu-blocklist'];
```

Verify the renderer via `WEBGL_debug_renderer_info` before trusting a GPU
number. **Average 3–5 runs** — single runs have produced opposite conclusions
in this repo. Throttle CPU 4x to represent real users.

Budget: 60 fps scroll, 0 dropped frames, TBT < 300 ms @4x, CLS 0.

Known-costly, already handled — do not reintroduce:
`background-attachment: fixed`, particle libraries, eager Spline/WebGL,
`images.unoptimized`, duplicate `priority` images.

## 5. Traps specific to this repo

- `span { font-size: 16px }` is global → emphasis spans in headings need
  `.inherit-type`.
- Tailwind `group-hover:` binds to the nearest `group` ancestor — watch nesting.
- The hero photo's subject sits at ~75% across; it cannot be `cover`-cropped
  into a portrait viewport.
- Next.js rewrites `tsconfig.json` on build — check it before committing.
- Deleting files under a running dev server corrupts `.next`; stop it first.

## 6. Before saying done

```bash
npx tsc --noEmit
NEXT_DIST_DIR=.next-verify npx next build   # never clobber a live dev server
```

Then in a browser: every affected route, desktop **and** mobile, console clean,
no horizontal overflow, footer present, 404 still 404.

Report what you measured, what you assumed, and what you left undone.

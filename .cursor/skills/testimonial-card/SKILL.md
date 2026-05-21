---
name: testimonial-card
description: Integrates a scroll-driven animated testimonial cards stack (with ContainerScroll, CardsContainer, CardTransformed, ReviewStars) into a shadcn + Tailwind + TypeScript React codebase. Use when the user asks for a testimonials section, animated stacked cards on scroll, an awards/recognitions card stack, an image card stack, or mentions "testimonial-card", "animated cards stack", or this specific component recipe.
disable-model-invocation: true
---

# testimonial-card

Integrates the `animated-cards-stack` recipe (testimonial / awards / images variants) into a shadcn-style React project.

The component uses `motion/react` `useScroll` + `useTransform` to translate, rotate, and shadow a stack of cards as the user scrolls a tall container.

## Files this skill ships

All under this skill's `assets/` folder. Copy them verbatim into the user's project (do not paraphrase the code).

- `assets/animated-cards-stack.tsx` — main component (`ContainerScroll`, `CardsContainer`, `CardTransformed`, `ReviewStars`)
- `assets/avatar.tsx` — shadcn `Avatar` / `AvatarImage` / `AvatarFallback`
- `assets/demo.tsx` — three demo variants: `TestimonialsVariant`, `AwardsVariant`, `ImagesVariant`
- `assets/globals.css.snippet` — Tailwind base + design tokens (light + dark) to merge into the project's `globals.css`

## Pre-flight: verify the project

Before copying any code, verify the target project has:

1. **shadcn project structure** — there is a `components/ui/` directory and a `lib/utils.ts` exporting `cn`. Check `components.json` if present.
2. **Tailwind CSS** — `tailwind.config.{js,ts}` exists and a `globals.css` imports `@tailwind base/components/utilities`.
3. **TypeScript** — `tsconfig.json` exists and `@/*` path alias resolves to the project root (or `src/`).

If any are missing, instruct the user to run the relevant setup before continuing:

```bash
# shadcn (Next.js example)
npx shadcn@latest init

# Tailwind (if not installed by shadcn init)
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# TypeScript
npm install -D typescript @types/react @types/node
```

### Why `components/ui/` matters

shadcn's convention places primitive components in `components/ui/`. The `cn` helper, the import aliases (`@/components/ui/avatar`, `@/lib/utils`), and shadcn's CLI all assume that path. If the project uses something different, either:

- align the project to `components/ui/` (recommended), or
- adjust every `@/components/ui/...` import in the copied files to match the project's actual path.

The animated cards component itself is a block (composition), not a primitive — `demo.tsx` imports it from `@/components/blocks/animated-cards-stack`. Mirror that layout.

## Questions to ask before integrating

Ask these before writing code so the integration is correct on the first pass:

1. **Data source** — Where do testimonials come from? Hardcoded array, CMS, props, MDX?
2. **Variant** — Testimonials (with stars + avatar), Awards (emoji + headline), or Images (full-bleed)? Or a custom one?
3. **Theme** — Does the project already use `next-themes`? `demo.tsx` calls `useTheme()`. If not installed, drop the theme branching or install `next-themes`.
4. **Assets** — Avatar/portrait image URLs. Default to Unsplash stock URLs the user already trusts. For icons inside cards, prefer `lucide-react`.
5. **Responsive behavior** — The scroll container needs significant height (`h-[300vh]`). Confirm the page can host that, and that no parent has `overflow-hidden` clipping the sticky child.
6. **Placement** — Which route / section / landing page should host the section?

## Integration steps

Follow these in order. Use the file checklist as a TODO.

```
- [ ] Step 1: Install npm dependencies
- [ ] Step 2: Copy animated-cards-stack.tsx
- [ ] Step 3: Copy avatar.tsx (skip if shadcn avatar already installed)
- [ ] Step 4: Extend globals.css with the design tokens
- [ ] Step 5: Drop in a demo variant and wire data
- [ ] Step 6: Verify scroll height + sticky parent
```

### Step 1 — Install dependencies

```bash
npm install motion class-variance-authority @radix-ui/react-avatar
# optional, if using demo.tsx theme branching:
npm install next-themes
# optional, if replacing emoji icons with lucide:
npm install lucide-react
```

`motion` (the new package name for Framer Motion) is required because the component imports from `motion/react`.

### Step 2 — Copy the main component

Destination: `components/blocks/animated-cards-stack.tsx`

Copy `assets/animated-cards-stack.tsx` verbatim. It declares the `"use client"` directive at the top — keep it. It expects:

- `@/lib/utils` to export `cn`
- `motion/react` exports for `motion`, `useScroll`, `useTransform`, `useMotionTemplate`, `MotionValue`, `HTMLMotionProps`

Exports surfaced: `ContainerScroll`, `CardsContainer`, `CardTransformed`, `ReviewStars`.

### Step 3 — Copy the Avatar primitive

Destination: `components/ui/avatar.tsx`

Copy `assets/avatar.tsx` verbatim. Skip this step if `@/components/ui/avatar` already exists in the project — confirm exports match (`Avatar`, `AvatarImage`, `AvatarFallback`).

### Step 4 — Merge globals.css

Open the project's `globals.css`. The recipe ships a Tailwind base + a full set of HSL design tokens for `:root` and `.dark`. Merge strategy:

- If `globals.css` is empty or only has the three `@tailwind` directives, replace its contents with `assets/globals.css.snippet`.
- If `globals.css` already defines `--background`, `--foreground`, etc., do **not** blindly overwrite. Diff token-by-token and only add the missing ones (`--sidebar-*`, `--chart-*`, `--shadow-*`, `--font-*`, `--radius` as needed). Preserve the user's existing palette unless they ask to adopt this one.
- Always keep the final `@layer base { body { @apply bg-background text-foreground; ... } }` block.

### Step 5 — Add a demo / production usage

Copy `assets/demo.tsx` into a page or section file (for example `app/(marketing)/testimonials/page.tsx`). The three exports give the user a starting point:

- `TestimonialsVariant` — quote + stars + avatar
- `AwardsVariant` — colored cards with emoji + headline + body
- `ImagesVariant` — full-bleed images stacked dark on dark

Then replace the hardcoded `TESTIMONIALS` / `ANIM_IMAGES` arrays with the real data from Step "Questions to ask".

When replacing images, prefer Unsplash URLs you are confident exist (the demo already uses canonical Unsplash IDs). For icon swaps inside cards (the 🏆 🚀 🎯 🎖 emoji), use `lucide-react` (`Trophy`, `Rocket`, `Target`, `Medal`) if the user wants a cleaner look.

### Step 6 — Layout sanity checks

The animation depends on a tall scroll target and a sticky child:

```tsx
<ContainerScroll className="container h-[300vh]">
  <div className="sticky left-0 top-0 h-svh w-full py-12">
    <CardsContainer className="mx-auto size-full h-[450px] w-[350px]">
      {/* CardTransformed children */}
    </CardsContainer>
  </div>
</ContainerScroll>
```

Verify:

- `ContainerScroll` has a tall `h-[Nvh]` (3× viewport is the sweet spot for ~4 cards).
- The direct child is `sticky top-0 h-svh` so the cards pin while scrolling.
- No ancestor sets `overflow-hidden` or `overflow-x-clip` on `html`/`body`, which breaks `position: sticky`.
- `CardsContainer` has explicit `h-*` and `w-*` so the absolute-positioned `CardTransformed` children have a coordinate space.

## Prop reference (quick)

`CardTransformed` (one card in the stack):

| Prop | Type | Default | Notes |
|---|---|---|---|
| `arrayLength` | `number` | — | Required. Number of siblings in the stack; used to compute scroll ranges. |
| `index` | `number` | — | Required. 1-based-ish; the demo uses `index + 2` so cards don't start fully aligned. |
| `incrementY` | `number` | `10` | Vertical offset per index (px). |
| `incrementZ` | `number` | `10` | `translateZ` and z-index multiplier. |
| `incrementRotation` | `number` | `-index + 90` | Starting rotation; animates to `0` as user scrolls. |
| `variant` | `"light" \| "dark"` | `"light"` | Affects background and whether a drop-shadow filter is applied. |

`ReviewStars`:

| Prop | Type | Default |
|---|---|---|
| `rating` | `number` | — (supports fractional, e.g. `4.5`) |
| `maxRating` | `number` | `5` |

## Common pitfalls

- **Cards invisible** — usually a missing `h-[300vh]` on `ContainerScroll` or a sticky-breaking ancestor. Inspect with devtools, ensure the sticky child is `position: sticky` and the parent has the height.
- **Cards stuck on first frame** — `arrayLength` does not match the actual number of children, or two cards share the same `index`. Each card needs a unique increasing `index`.
- **Filter not animating in dark mode** — by design. The component skips the drop-shadow filter when `variant="dark"`.
- **`motion/react` not found** — the npm package is `motion`, not `framer-motion`. Confirm with `npm ls motion`.
- **Hydration warning around `useTheme`** — wrap pages using `demo.tsx` in a `ThemeProvider` from `next-themes`, and consider rendering the section client-side only on first paint.

## When to swap pieces out

- Drop `next-themes` entirely if the app is single-theme. Replace `getCardVariant(theme)` with the literal `"light"` or `"dark"`.
- Replace emoji icon blocks in `AwardsVariant` with `lucide-react` icons for production.
- Replace Unsplash URLs with project-hosted assets once the design lands.

# Lantern — Design Document

**Last Updated:** 2026-06-08

---

## Design Philosophy

Lantern is editorial, warm, and intellectually serious. The visual direction is inspired by the Criterion Collection and Letterboxd: strong typographic hierarchy, deliberate whitespace, and restraint over decoration. The interface should feel like a well-designed literary journal, not a social media app. Every design decision should make the content — the art and the people who love it — the focus.

---

## Color Palette

All color values are defined as a custom `lantern` Tailwind scale in `tailwind.config.ts` and as inline Tailwind config in each static HTML page.

| Token | Hex | Intended Use |
|---|---|---|
| `lantern-50` | `#fafaf8` | Page background |
| `lantern-100` | `#f5f5f1` | Hover states, pill backgrounds, subtle fills |
| `lantern-200` | `#ebe7e1` | Borders, dividers |
| `lantern-300` | `#ddd7ce` | Lighter accents |
| `lantern-400` | `#cfc9ba` | Muted text, secondary dividers |
| `lantern-500` | `#c1bda6` | Secondary text, captions |
| `lantern-600` | `#8b8772` | Labels, muted links, metadata |
| `lantern-700` | `#6b6652` | Primary interactive elements, active nav links |
| `lantern-800` | `#4a4639` | Dark buttons, strong contrast elements |
| `lantern-900` | `#2a2622` | Headings, body text, maximum contrast |

### Accent colors (cover art gradients only)

These colors appear exclusively as placeholder cover art backgrounds. They are never used for UI chrome.

| Category | Gradient | Tailwind classes |
|---|---|---|
| Books | Amber | `from-amber-900 to-amber-700` |
| Movies | Stone | `from-stone-800 to-stone-600` |
| TV | Teal | `from-teal-900 to-teal-700` |
| Music | Indigo | `from-indigo-900 to-indigo-700` |
| Games | Slate | `from-slate-800 to-slate-600` |
| Podcasts | Rose | `from-rose-900 to-rose-700` |

The cover art gradient also includes a large typographic initial letter at 18% opacity as an editorial texture element.

### Status indicator colors

| Status | Color |
|---|---|
| Completed | `text-lantern-700` |
| Currently Engaging | Pulsing blue dot (`bg-blue-400` with CSS `pulse` animation) |
| Want to Experience | `text-lantern-500` |

---

## Typography

The type system uses two families: Georgia/Garamond serif for all cultural and expressive content, and system-ui sans-serif for functional UI text.

| Role | Family | Size | Weight | Line height | Notes |
|---|---|---|---|---|---|
| Page heading (h1) | Georgia, Garamond, serif | 2.25rem (4xl) | 700 | 1.2 | Landing hero headline |
| Section heading (h2) | Georgia, Garamond, serif | 1.5rem (2xl) | 700 | 1.3 | Page section titles |
| Card heading (h3) | Georgia, Garamond, serif | 1.125rem (lg) | 600 | 1.3 | Media titles, list titles |
| Sub-heading (h4) | Georgia, Garamond, serif | 1rem (base) | 600 | 1.4 | Category labels |
| Body text | system-ui, -apple-system, sans-serif | 0.9375rem (sm–base) | 400 | 1.6 | Descriptions, reviews |
| Caption / metadata | system-ui, -apple-system, sans-serif | 0.8125rem (xs) | 400 | 1.5 | Timestamps, counts, secondary info |
| Label / badge | system-ui, -apple-system, sans-serif | 0.8125rem (xs) | 500 | 1 | Status badges, category pills |
| Accent / archetype | Georgia, Garamond, serif | 0.9375rem | 400 italic | 1.4 | Archetype labels, theme pills, list descriptions |
| Rating | Georgia, Garamond, serif | 0.875rem (sm) | 700 | 1 | Rating badges on media cards |

Letter spacing across headings: `-0.02em` (tight, from `tailwind.config.ts`).

---

## Spacing System

Base unit: **4px**. All spacing values are multiples of 4px, following Tailwind's default 4px-base scale.

Common spacing values in use:

| Token | Value | Usage |
|---|---|---|
| `p-1` | 4px | Tight inline padding |
| `p-2` | 8px | Badge padding, small pill padding |
| `p-3` | 12px | Card interior padding (compact) |
| `p-4` | 16px | Standard card padding |
| `p-6` | 24px | Section padding, larger cards |
| `p-8` | 32px | Page section padding |
| `gap-2` | 8px | Tight grid/flex gap |
| `gap-4` | 16px | Standard grid gap |
| `gap-6` | 24px | Larger card grids |
| `mb-8` | 32px | Section spacing |
| `mb-12` | 48px | Large section breaks |

---

## Breakpoints

Tailwind default breakpoints are used throughout.

| Breakpoint | Min-width | Layout change |
|---|---|---|
| `sm` | 640px | Single-column layouts begin expanding |
| `md` | 768px | Navigation collapses to horizontal; grid columns increase |
| `lg` | 1024px | Profile/feed: 3-column layout (content + sidebar) activates (`lg:grid-cols-4`); cohorts grid goes 3 columns |
| `xl` | 1280px | Max content width capped; landing page hero text scales up |
| `2xl` | 1536px | No significant changes; content stays at max-width |

Key responsive behaviors:
- Profile page: single column on mobile → `lg:grid-cols-4` with sticky sidebar at lg+
- Media collections: 2-column grid on mobile → 3–4 columns at md+
- Cohorts grid: 1 column → 2 columns at md → 3 columns at lg
- Landing page sections: stacked on mobile → side-by-side at md+

---

## Component Patterns

### Buttons

Three variants defined in `app/globals.css` as Tailwind `@layer components`:

**Primary button** (`.btn-primary`): `bg-lantern-900 text-lantern-50`, hover lightens to `lantern-800`. Used for primary CTAs (Get Started, Continue in onboarding).

**Secondary button** (`.btn-secondary`): `bg-lantern-200 text-lantern-900`, hover darkens to `lantern-300`. Used for secondary actions.

**Ghost button** (`.btn-ghost`): `border border-lantern-300 text-lantern-700`, hover fills `lantern-100`. Used for low-emphasis actions (Fork, View Profile, Join toggle).

All buttons: `rounded-sm`, `font-medium`, `transition-colors`, `cursor-pointer`.

### Cards

Cards use `.card` class: `bg-white rounded-md border border-lantern-200 shadow-sm`. Cards never have colored backgrounds — color belongs to the content inside (cover gradients), not the container.

### Media Cards

Each media card (in profile collections and feed) follows this structure:
1. Square cover art area with category-specific gradient and large typographic initial
2. Status indicator dot (bottom-left of cover)
3. Rating badge (bottom-right of cover, appears on hover)
4. Title in serif, creator in sans-serif caption
5. Status badge pill below creator

### Badges / Pills

Two types:
- **Status badge**: `rounded-full`, `text-xs`, `font-medium`, `px-2 py-0.5`, color depends on status
- **Theme pill**: `rounded-full`, `text-sm`, `font-serif italic`, `border-l-2` hover accent in `lantern-700`

### Forms and Inputs

Search input: full-width, `border-b border-lantern-300` (bottom-border only, no box), large serif placeholder text. On focus: border color transitions to `lantern-700`.

### Navigation

Sticky header at top. Logo (serif "Lantern") links to `index.html`. Nav links use serif font at `sm` weight; active link is `lantern-900 font-semibold`. "Get Started" is rendered as a primary button on the right.

### Sidebars

Used on Profile, Feed. Sticky positioning (`sticky top-6`). Width: `col-span-1` of a `lg:grid-cols-4` layout (≈ 25% of content area). Sidebar cards match the same `.card` pattern.

### Onboarding Steps

No nav bar. Step indicator: 5 filled/hollow dots for steps 2–6 (`w-2 h-2 rounded-full`, filled = `bg-lantern-700`, hollow = `border border-lantern-400`). Transitions between steps are instant DOM show/hide (no CSS animation), except the taste profile step which uses `@keyframes fadeUp` with staggered delays.

---

## Accessibility Standards

Target: **WCAG 2.1 AA**.

- Minimum text contrast: 4.5:1 for normal text, 3:1 for large text. `lantern-900` (#2a2622) on `lantern-50` (#fafaf8) achieves > 12:1.
- Interactive elements have visible focus states (browser default or `outline` equivalent).
- Cover art gradients with typographic initials are decorative; they do not convey meaning that is not also present in the text.
- Buttons include descriptive text labels (no icon-only buttons in current UI).
- Pulsing "Currently Engaging" dot animation: purely decorative; content is also labeled in text.

Known accessibility gaps:
- Skip-to-content link is not present.
- ARIA roles and labels are not systematically applied.
- Form inputs in onboarding do not have explicit `<label>` elements in all cases.

These should be addressed before a public launch.

---

## Animation and Motion

Keep motion minimal and purposeful.

| Use | Timing | Easing | Rule |
|---|---|---|---|
| Button hover | 150ms | `ease-in-out` | Color/background only |
| Card hover shadow | 150ms | `ease-in-out` | `shadow-sm` → `shadow-md` |
| Status dot pulse | CSS `@keyframes pulse`, infinite | ease | Only on "Currently Engaging" items |
| Onboarding taste profile reveal | 400ms per element, 100–500ms staggered delay | `ease-out` | `@keyframes fadeUp`: `opacity 0→1`, `translateY 12px→0` |
| Search results toggle | Instant (display show/hide) | None | No animation; results replace default state |

Do not animate layout changes, page transitions, or loading states in the current implementation. Reserve animation for moments where it communicates meaning: the pulse means "live/active", the fadeUp means "your profile is being generated".

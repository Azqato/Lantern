# Lantern — Technical Requirements Document

**Last Updated:** 2026-06-08

---

## System Architecture

Lantern currently ships as a **static site** deployed on GitHub Pages. The architecture is intentionally serverless and zero-dependency for the live product.

There are two parallel implementations in the repository:

**1. Static HTML (live, deployed)**
Eight standalone `.html` files, each self-contained with inline JavaScript data and logic. Tailwind CSS is loaded via CDN `<script>` tag with an inline config block that defines the `lantern` color tokens. `nav.js` is the only shared file, injected by every page via a `<script src>` tag. No build step; works on `file://` protocol.

**2. Next.js (in-repo, not deployed)**
A parallel implementation using Next.js 15 App Router, React 19, and TypeScript. Located in `app/`, `components/`, and `lib/`. Shares the same design system and placeholder data. Intended for future migration when a backend is needed. Not currently served from the live domain.

---

## Tech Stack

| Layer | Technology | Version | Notes |
|---|---|---|---|
| Static markup | HTML5 | — | 8 standalone pages |
| Styling (static) | Tailwind CSS via CDN | 3.x | Inline config block per page |
| Logic (static) | Vanilla JavaScript | ES6+ | Inline `<script>` blocks |
| Shared navigation | `nav.js` | — | Injected by all static pages |
| Framework (dev) | Next.js | 15.0.0 | App Router, not yet deployed |
| UI library (dev) | React | 19.0.0 | — |
| Language (dev) | TypeScript | 5.0.0 | Strict mode enabled |
| CSS processing (dev) | Tailwind CSS | 3.4.0 | Via PostCSS pipeline |
| CSS pipeline | PostCSS | 8.4.0 | Tailwind + Autoprefixer |
| Browser prefixes | Autoprefixer | 10.4.0 | — |
| Linting | ESLint | 8.0.0 | `next/core-web-vitals` config |
| Deployment | GitHub Pages | — | Serves from `main` branch root |

---

## Folder Structure

```
lantern/
├── index.html              — Landing page (marketing homepage)
├── profile.html            — User profile with collections
├── feed.html               — Discovery feed
├── lists.html              — Curated lists
├── cohorts.html            — Smart Cohorts discovery grid
├── search.html             — Search + theme browse + taste neighbors
├── onboarding.html         — 6-step first-run experience
├── nav.js                  — Shared navigation component (injected by all pages)
├── favicon.svg             — 🏮 lantern emoji SVG favicon
├── .nojekyll               — Disables GitHub Pages Jekyll processing
│
├── app/                    — Next.js App Router
│   ├── layout.tsx          — Root layout with Navbar
│   ├── page.tsx            — Root redirect to /profile
│   ├── globals.css         — Tailwind base/component/utility layers
│   ├── profile/page.tsx    — Profile page
│   ├── feed/page.tsx       — Feed page
│   ├── lists/page.tsx      — Lists page
│   ├── cohorts/page.tsx    — Cohorts page
│   └── search/page.tsx     — Search page
│
├── components/
│   ├── layout/
│   │   └── Navbar.tsx      — Sticky nav with active link highlighting
│   ├── profile/
│   │   ├── ProfileHeader.tsx       — User header, bio, stats
│   │   ├── FavoritesSection.tsx    — 4-item pinned favorites grid
│   │   ├── MediaCard.tsx           — Individual media item card
│   │   └── MediaCollection.tsx     — Category section with item grid
│   └── feed/
│       ├── FeedCard.tsx            — Activity card
│       └── CohortsWidget.tsx       — Sidebar cohort cards
│
├── lib/
│   ├── data.ts             — All placeholder data + TypeScript interfaces
│   └── utils.ts            — Helper functions (labels, colors, icons, grouping)
│
├── docs/                   — Project documentation
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.ts
├── postcss.config.mjs
└── .eslintrc.json
```

---

## Data Models

All types are defined in `lib/data.ts`.

### MediaStatus
```typescript
type MediaStatus = 'completed' | 'currently-engaging' | 'want-to-experience'
```

### MediaCategory
```typescript
type MediaCategory = 'books' | 'movies' | 'tv' | 'music' | 'games' | 'podcasts'
```

### MediaItem
```typescript
interface MediaItem {
  id: string
  title: string
  creator: string
  category: MediaCategory
  status: MediaStatus
  rating: number           // 1–10
  review?: string          // optional short review
}
```

### CuratedList
```typescript
interface CuratedList {
  id: string
  title: string
  description: string
  itemCount: number
  previewTitles: string[]  // up to 4 titles shown as mosaic cover
  lastUpdated: string
  isPublic: boolean
  author: string
  followers: number
}
```

### Cohort
```typescript
interface Cohort {
  id: string
  name: string
  members: number
  description: string
  sharedInterests: string[]
  matchScore?: number        // 0–100
  commonWorks?: string[]     // shared titles with this user
  weeklyActivity?: number    // new reviews this week
}
```

### FeedActivity
```typescript
interface FeedActivity {
  id: string
  userId: string
  userName: string
  action: 'rated' | 'finished' | 'started'
  mediaItem: MediaItem
  rating?: number
  review?: string
  timestamp: string
  reason?: string            // why this appears in your feed
}
```

### Static placeholder data objects
- `PLACEHOLDER_USER` — `{ name, bio, joinDate, archetype }`
- `PLACEHOLDER_TASTE_SUMMARY` — string describing taste profile
- `PLACEHOLDER_MEDIA` — array of 20 `MediaItem` objects
- `PLACEHOLDER_FAVORITES` — array of 4 `MediaItem` objects
- `PLACEHOLDER_COHORTS` — array of 6 `Cohort` objects
- `PLACEHOLDER_LISTS` — array of 4 `CuratedList` objects
- `PLACEHOLDER_FEED_ACTIVITY` — array of 6 `FeedActivity` objects

In the static HTML version, equivalent data is defined inline in each page's `<script>` block as plain JavaScript arrays.

---

## API Design

No API exists yet. All data is hardcoded in `lib/data.ts` (Next.js) or inline `<script>` blocks (static HTML).

**Internal data flow (static HTML pages):**

1. Page loads → inline `<script>` defines data arrays and render functions.
2. `nav.js` is loaded, injects the navigation bar into `#nav-placeholder`.
3. Render functions iterate over data arrays and write HTML strings via `innerHTML`.
4. User interactions (search input, join buttons, onboarding step transitions) are handled by inline event listeners.

**Planned API surface (future, not yet built):**

| Endpoint | Method | Purpose |
|---|---|---|
| `/api/auth/session` | GET | Return current user session |
| `/api/media` | GET | Search media catalogue |
| `/api/users/:id/profile` | GET | Fetch user profile and collections |
| `/api/users/:id/media` | POST | Log a new media item |
| `/api/cohorts` | GET | Fetch matched cohorts for current user |
| `/api/lists` | GET/POST | Fetch or create lists |

---

## State Management

**Static HTML version:** No state management framework. State lives in JavaScript variables scoped to each page's `<script>` block. Onboarding step state is tracked in a `currentStep` variable; selection state is tracked in a `selectedWorks` Set. No persistence between page loads.

**Next.js version:** No global state manager. React component state (`useState`) is used locally where needed. No context providers or external state libraries are in use. All data comes from the static `lib/data.ts` module at render time.

---

## Third-Party Integrations

| Service | Purpose | Status | Auth |
|---|---|---|---|
| GitHub Pages | Static hosting | Live | None (public repo) |
| Tailwind CSS CDN | Stylesheet delivery for static pages | Live | None |
| Goodreads API | Import book catalogue | Planned | OAuth |
| Letterboxd API | Import film catalogue | Planned | OAuth |
| Spotify API | Import music catalogue | Planned | OAuth 2.0 |
| IGDB API | Import games catalogue | Planned | Client credentials |

No third-party services currently receive any user data.

---

## Performance Requirements

| Target | Metric | Value |
|---|---|---|
| First Contentful Paint (static pages) | < 1.5s on 4G | Target |
| Total page weight (static pages) | < 200 KB per page (excl. Tailwind CDN) | Target |
| Tailwind CDN load | One-time browser cache | Acceptable |
| Next.js initial JS bundle | < 100 KB gzipped | Target (not yet measured) |
| Largest Contentful Paint | < 2.5s | Target |

---

## Known Technical Debt

| Item | Current approach | Correct solution |
|---|---|---|
| Placeholder data | Hardcoded JS arrays in each HTML file and in `lib/data.ts` | Real database with API layer |
| Duplicated data | Each HTML page redefines its own data arrays; data is not shared | Single source of truth via API or shared module |
| No authentication | All pages are public; no session or identity | Auth system (Supabase Auth or similar) |
| AI features are static | Archetype, Taste Dimensions, Cohort matching, and Taste Neighbors are all hardcoded | Real ML pipeline with taste embeddings |
| Two parallel implementations | Next.js and static HTML diverge over time | Fully migrate to Next.js once backend exists; delete static HTML files |
| Tailwind via CDN | Static pages load Tailwind at runtime from a CDN; no tree-shaking | Build step with PostCSS pipeline once Next.js is the deployed version |
| No tests | Zero test coverage | Unit tests for utility functions; integration tests for API layer once it exists |
| `package.json` version pinned at 0.1.0 | Version number not kept in sync with PatchNotes | Align `package.json` version with semantic version in PatchNotes on each release |

# Lantern — Patch Notes

All notable changes to the Lantern platform are documented here.
Format follows [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

---

## [0.4.0] — 2026-06-06
**GitHub Pages Deployment**

### Added
- `.nojekyll` — disables GitHub Pages' default Jekyll processing so raw HTML files are served directly
- Repository published to [github.com/Azqato/Lantern](https://github.com/Azqato/Lantern)
- Live site available at `https://azqato.github.io/Lantern/` (after enabling Pages in repo Settings)

### Notes
- GitHub Pages is configured to serve from the `main` branch root (`/`)
- To activate: go to repo **Settings → Pages → Source → Deploy from branch → main / (root)**
- All five HTML pages and `nav.js` are served as static files with no build step

---

## [0.3.0] — 2026-06-06
**Browser-Native Rewrite (Zero Dependencies)**

### Added
- `index.html` — Profile page: full media collections, stats, taste summary, favorites
- `feed.html` — Discovery feed with activity cards and Smart Cohorts sidebar
- `lists.html` — Curated list cards with mosaic cover preview
- `cohorts.html` — Cohort discovery grid sorted by match score
- `search.html` — Search input, live filter toggle, category pills, trending + suggested searches
- `nav.js` — Shared navigation component injected by all pages; handles active-link highlighting

### Architecture
- Zero npm dependencies, zero build step
- Tailwind CSS loaded via CDN `<script>` tag with custom `lantern` color config
- Vanilla JavaScript for all data rendering and interactivity
- Navigates between pages via standard HTML `<a href>` links — works with `file://` protocol
- Open any `.html` file directly in a browser to run the full app

### Notes
- The Next.js source files (`app/`, `components/`, `lib/`) remain in the project for future server-side migration
- `npm install` + `npm run dev` still activates the Next.js version when ready

---

## [0.2.0] — 2026-06-06
**Visual Polish & Page Completion**

### Added
- `PatchNotes.md` — this document, for tracking all future changes
- Category-specific editorial cover art for MediaCard (gradient + typographic initial)
- Media statistics row on ProfileHeader (items rated, completed, in-progress)
- Full Lists page UI — curated list cards with mosaic preview and metadata
- Full Cohorts discovery page — grid layout with match percentage and join flow
- Search page — search input, category filter pills, trending and suggested searches
- `getCategoryColor()` utility — returns Tailwind gradient classes per media category
- Expanded placeholder data: additional items across all 6 categories, lists data

### Fixed
- Removed unused `next/image` import from `MediaCard.tsx`
- Corrected status label: `currently-engaging` was incorrectly labeled "Currently Reading" for all media types; now reads "Currently Engaging"
- Fixed untyped `as any` cast in `FeedCard.tsx` category label lookup
- Removed overly broad `* { @apply transition-colors }` rule in `globals.css` that applied transitions to every DOM element

### Changed
- `MediaCard` — complete visual redesign: editorial cover art, cleaner type hierarchy, rating badge
- `ProfileHeader` — added statistics row, improved spacing and visual weight
- `FeedCard` — improved visual hierarchy, stronger typographic contrast
- `CohortsWidget` — more refined sidebar styling, match score display
- `globals.css` — scoped transition rules to specific interactive elements only

---

## [0.1.0] — 2026-06-05
**Foundation**

### Added
- Next.js 15 project scaffold with TypeScript and Tailwind CSS
- Global navigation: Profile, Feed, Search, Lists, Cohorts
- User Profile page with media collections across 6 categories (Books, Movies, TV, Music, Games, Podcasts)
- 3 status types per item: Completed, Currently Engaging, Want to Experience
- 1–10 rating system per media item
- Pinned Favorites section at top of profile
- AI taste summary placeholder on profile
- Discovery Feed page with activity cards from users with similar taste
- Smart Cohorts sidebar widget
- Custom editorial design system — warm lantern color palette, serif typography
- Placeholder data layer with TypeScript types (`MediaItem`, `MediaStatus`, `MediaCategory`)
- Utility functions: `getCategoryLabel`, `getStatusLabel`, `getStatusColor`, `groupMediaByCategory`
- Placeholder pages for Search, Lists, and Cohorts

---

*Lantern is in active early development. This log will grow with every meaningful change.*

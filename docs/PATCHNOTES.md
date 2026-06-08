# Lantern — Patch Notes

All notable changes to Lantern are documented here.
Format: [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), semantic versioning.

---

## [0.7.0] — 2026-06-08
**Documentation Audit & /docs Structure**

### Added
- `docs/` directory with full project documentation suite
- `docs/PRD.md` — updated product requirements document
- `docs/TRD.md` — technical requirements document covering architecture, data models, tech stack, and known debt
- `docs/DESIGN.md` — design document covering color palette, typography, spacing, breakpoints, component patterns, accessibility, and motion
- `docs/PATCHNOTES.md` — this file, relocated from root
- `docs/PRFAQ.md` — press release and internal/external FAQ
- `docs/TENETS.md` — five product tenets that resolve real tradeoffs
- `docs/METRICS.md` — north star, acquisition, engagement, retention, and performance metrics with targets
- `docs/ROADMAP.md` — current phase, milestone table, and deferred items
- `docs/SECURITY.md` — authentication model, data storage, environment variables, attack surface, and dependency policy
- `docs/RUNBOOK.md` — local setup, build, deploy, rollback, and common errors

### Changed
- `README.md` — rewritten for developer audience; added prerequisites, exact install commands, environment variable reference, and link to /docs
- `PRD.md` (root) — moved to `docs/PRD.md`; root copy will be removed in next cleanup pass
- `PatchNotes.md` (root) — superseded by `docs/PATCHNOTES.md`; root copy will be removed in next cleanup pass

---

## [0.6.2] — 2026-06-06
**Favicon correction**

### Changed
- `favicon.svg` — corrected favicon from 📈 to 🏮 (red lantern emoji)

---

## [0.6.1] — 2026-06-06
**Favicon**

### Added
- `favicon.svg` — emoji favicon added to all pages via `<link rel="icon" href="favicon.svg" type="image/svg+xml">` in each `<head>`

---

## [0.6.0] — 2026-06-06
**Landing Page & Site Restructure**

### Added
- `index.html` — New marketing homepage for first-time visitors. Seven sections: hero (headline + dual CTA), the gap (dark panel contrasting with existing social networks), how it works (three pillars), the platform (six feature cards), principles, taste intelligence, and final CTA. Footer with links to all pages.
- `profile.html` — The former `index.html` profile page, now at its own URL.

### Changed
- `nav.js` — "Profile" nav link updated from `index.html` → `profile.html`; logo link remains `index.html`
- `onboarding.html` — Step 6 "Go to your profile →" CTA updated from `index.html` → `profile.html`
- `README.md` — Updated file structure, running instructions, and feature list

---

## [0.5.0] — 2026-06-06
**Feature Expansion: Onboarding, Social Layer & Global Content**

### Added
- Cultural Archetype badge on profile — serif italic amber pill; drawn from `ARCHETYPES` array for future AI assignment
- Taste Dimensions widget — 5 labeled horizontal progress bars (Narrative Complexity, Emotional Intensity, Experimental, Intimacy of Scale, Cross-Cultural Range)
- Currently Engaging hero section — horizontal scrollable row with pulsing blue dot (`@keyframes pulse`)
- Taste Neighbors sidebar on profile — right-hand column with 4 users, match %, shared work, View Profile button
- Feed `reason` field — italic muted text per activity card explaining why it appears (e.g. "3 works in common · 91% taste match")
- Taste Neighbors sidebar on feed — above the Smart Cohorts widget; both blocks in a single sticky container
- Lists: author line, follower count, Fork ghost button with "Copy and make your own version" tooltip
- Cohorts: "Works in common" section (count + up to 3 shared titles as italic pills), weekly activity line
- Search: "Browse by Theme" section (12 cross-media theme pills), "Find Taste Neighbors" CTA card
- `onboarding.html` — 6-step first-run experience: welcome, 24-work selection grid, generated taste profile with animated reveal, suggested cohorts, import screen, done
- `nav.js` — "Sign In" replaced with "Get Started" link to `onboarding.html`

### Changed
- Global placeholder data diversified: added Beloved (Toni Morrison), Shoplifters (Kore-eda), A Seat at the Table (Solange), Parasite (Bong Joon-ho), 2666 (Bolaño)
- Search trending: added Bong Joon-ho, Toni Morrison, Hirokazu Kore-eda

---

## [0.4.0] — 2026-06-06
**GitHub Pages Deployment**

### Added
- `.nojekyll` — disables GitHub Pages Jekyll processing so raw HTML files are served directly
- Live site published at `https://azqato.github.io/Lantern/`

---

## [0.3.0] — 2026-06-06
**Browser-Native Rewrite (Zero Dependencies)**

### Added
- `profile.html` (formerly `index.html`) — full media collections, stats, taste summary, favorites
- `feed.html` — discovery feed with activity cards and Smart Cohorts sidebar
- `lists.html` — curated list cards with mosaic cover preview
- `cohorts.html` — cohort discovery grid sorted by match score
- `search.html` — search input, live filter toggle, category pills, trending and suggested searches
- `nav.js` — shared navigation component injected by all pages; active-link highlighting

### Changed
- Architecture: zero npm dependencies, zero build step; Tailwind CSS via CDN; vanilla JS; works on `file://` protocol

---

## [0.2.0] — 2026-06-06
**Visual Polish & Page Completion**

### Added
- `PatchNotes.md` — changelog (initial version)
- Category-specific editorial cover art for MediaCard (gradient + typographic initial at 18% opacity)
- Media statistics row on ProfileHeader (items rated, completed, in-progress)
- Full Lists page UI
- Full Cohorts discovery page
- Search page
- `getCategoryColor()` utility

### Fixed
- Removed unused `next/image` import from `MediaCard.tsx`
- `currently-engaging` status now labeled "Currently Engaging" for all media types (was "Currently Reading")
- Removed untyped `as any` cast in `FeedCard.tsx`
- Removed overly broad `* { @apply transition-colors }` rule in `globals.css`

### Changed
- `MediaCard` — complete visual redesign: editorial cover art, cleaner type hierarchy, rating badge
- `ProfileHeader` — statistics row added, improved spacing
- `FeedCard` — improved visual hierarchy and typographic contrast
- `CohortsWidget` — refined sidebar styling and match score display
- `globals.css` — transition rules scoped to specific interactive elements

---

## [0.1.0] — 2026-06-05
**Foundation**

### Added
- Next.js 15 project scaffold with TypeScript and Tailwind CSS
- Global navigation: Profile, Feed, Search, Lists, Cohorts
- User Profile page with media collections across 6 categories (Books, Movies, TV, Music, Games, Podcasts)
- Status tracking: Completed, Currently Engaging, Want to Experience
- 1–10 rating system
- Pinned Favorites section
- AI taste summary placeholder
- Discovery Feed with activity cards
- Smart Cohorts sidebar widget
- Custom design system — lantern color palette, serif typography
- TypeScript data layer (`MediaItem`, `MediaStatus`, `MediaCategory`, `Cohort`, `CuratedList`, `FeedActivity`)
- Utility functions: `getCategoryLabel`, `getStatusLabel`, `getStatusColor`, `groupMediaByCategory`
- Placeholder pages for Search, Lists, and Cohorts

---

*Lantern is in active early development. This log grows with every meaningful change.*

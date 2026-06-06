# Lantern — Patch Notes

All notable changes to the Lantern platform are documented here.
Format follows [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

---

## [0.6.0] — 2026-06-06
**Landing Page & Site Restructure**

### Added
- `index.html` — New marketing homepage / landing page for first-time visitors. Structured as a rocket pitch with seven sections: hero (headline + dual CTA), the gap (dark panel showing what no existing social network covers), how it works (three pillars: identity / neighbors / community), the platform (six feature cards linking to every page), principles (Taste over Popularity, Depth over Virality, Global by Default), taste intelligence (AI archetypes, dimensions, neighbors), and a final CTA. Includes a footer with navigation to all pages.
- `profile.html` — The former `index.html` profile page, now at its own URL

### Changed
- `nav.js` — "Profile" nav link updated from `index.html` → `profile.html`; logo link remains `index.html` (returns to landing)
- `onboarding.html` — Step 6 "Go to your profile →" CTA updated from `index.html` → `profile.html`
- `README.md` — Updated file structure, running instructions, and feature list to reflect the new homepage and `profile.html` URL

---

## [0.5.0] — 2026-06-06
**Feature Expansion: Onboarding, Social Layer, & Global Content**

### Added

**Profile page (index.html)**
- Cultural Archetype badge beneath user name — serif italic pill in amber, drawn from a `PLACEHOLDER_USER` object with `ARCHETYPES` array (5 options) for future AI assignment
- Taste Dimensions widget below the taste summary — 5 labeled horizontal bars (Narrative Complexity, Emotional Intensity, Experimental, Intimacy of Scale, Cross-Cultural Range) with `h-1.5` progress bars in lantern-700 on lantern-200
- "Currently Engaging" hero section — appears between the profile header and collections; horizontal scrollable row of cards with a pulsing blue dot (CSS `@keyframes pulse`) and a live indicator in the section heading
- Taste Neighbors sidebar — main content area is now a `lg:grid-cols-4` two-column layout; right column shows 4 placeholder users with initials avatar, match %, one shared work, and a "View Profile" ghost button

**Feed page (feed.html)**
- `reason` field on every activity item — rendered as italic muted text below the user action line, making the feed feel algorithm-driven (e.g. "3 works in common · 91% taste match", "Member of Television as Literature")
- Taste Neighbors sidebar block — appears above the Smart Cohorts widget; shows 3 placeholder users; both sidebar widgets are separate cards inside a single `sticky` container
- Added Parasite (Bong Joon-ho) and 2666 (Roberto Bolaño) activity entries

**Lists page (lists.html)**
- Author line on each list card — small initials avatar + "by Alex Chen · The Slow Cinema Devotee"
- Follower count — "X people follow this list"
- "Fork" ghost button in the card action area, with `title="Copy and make your own version"`
- `author` and `followers` fields added to every list object in `LISTS` data
- Empty state CTA updated — added "Or fork a list you love and make it your own."

**Cohorts page (cohorts.html)**
- "Works in common" section on every cohort card — shows count and up to 3 shared works as italic pills (e.g. `· In the Mood for Love`)
- Weekly activity line at card bottom — "X new reviews this week"
- `commonWorks` array and `weeklyActivity` number added to every cohort object

**Search page (search.html)**
- "Browse by Theme" section — 12 cross-media theme pills (Grief, Memory, Identity, Loneliness, Obsession, Redemption, Coming of Age, Existentialism, Nostalgia, Alienation, Love, Power) in serif italic style with a left-border accent on hover; clicking fills the search input
- "Find Taste Neighbors" CTA block — prominent card below the theme section with description copy, 3 placeholder users (name, archetype, match %, 2 shared works), and "Explore all taste neighbors →" link
- Added Bong Joon-ho (Movies), Toni Morrison (Books), and Hirokazu Kore-eda (Movies) to `TRENDING` data

**Onboarding page (onboarding.html)** — new file
- 6-step first-run flow with step indicator (5 dots, steps 2–6) and Back navigation
- Step 1: Welcome screen with Lantern logo and "Get Started →" CTA
- Step 2: 24-work selection grid (6 columns) spanning all 6 categories and global titles; live counter; "Continue" disabled until ≥ 8 selected; selected cards show checkmark overlay
- Step 3: Generated taste profile — archetype badge, taste summary quote, and 5 dimension bars, all animated in with `@keyframes fadeUp` and staggered delays
- Step 4: 3 suggested cohort cards with Join toggle buttons
- Step 5: Import screen with 4 platform tiles (Goodreads, Letterboxd, Spotify, IGDB); Connect buttons disabled with "Coming soon" tooltip; "Skip for now →" proceeds to step 6
- Step 6: Done screen with "Go to your profile →" link to index.html
- No nav bar on this page

**Navigation (nav.js)**
- "Sign In" button replaced with "Get Started" link (`href="onboarding.html"`)

### Changed

**Global — placeholder data diversified (Task 12)**
- `index.html`: added Beloved (Toni Morrison, Books), Shoplifters (Hirokazu Kore-eda, Movies), A Seat at the Table (Solange, Music)
- `feed.html`: added Parasite (Bong Joon-ho) rating and 2666 (Roberto Bolaño) started-activity entries
- `search.html`: Bong Joon-ho, Toni Morrison, Hirokazu Kore-eda added to trending list

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

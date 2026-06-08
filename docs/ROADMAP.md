# Lantern — Roadmap

**Last Updated:** 2026-06-08

---

## Current Phase

**Phase 1 — Static MVP (UX Validation)**

The product exists as a fully-designed static HTML site deployed on GitHub Pages. All data is hardcoded placeholder content. The current phase is about validating the UX concept, the design system, and the core interaction patterns before building backend infrastructure. No user accounts, no real data, no AI.

Current version: **v0.7.0**
Live at: [azqato.github.io/Lantern](https://azqato.github.io/Lantern/)

---

## Milestone Table

| Milestone | Name | Target | Status |
|---|---|---|---|
| M1 | Static MVP | 2026-06-06 | Complete |
| M2 | Documentation Audit | 2026-06-08 | Complete |
| M3 | Backend & Auth | TBD | Planned |
| M4 | Real AI Taste Graph | TBD | Planned |
| M5 | Live Media Search | TBD | Planned |
| M6 | Platform Imports | TBD | Planned |
| M7 | Mobile & PWA | TBD | Planned |

---

## Feature Breakdown per Milestone

### M1 — Static MVP (Complete)
- Landing page with 7-section marketing structure
- User profile with 6 media categories and status tracking
- Cultural Archetype badge and Taste Dimensions widget
- Currently Engaging section with pulsing status indicator
- Taste Neighbors sidebar on profile and feed
- Discovery feed with taste-match reason per card
- Smart Cohorts discovery grid
- Curated Lists with fork functionality
- Search with theme browse and taste neighbor card
- 6-step onboarding flow with animated taste profile reveal
- Shared `nav.js` navigation component
- GitHub Pages deployment with `.nojekyll`
- Custom `lantern` Tailwind color scale
- Favicon (🏮 emoji SVG)

### M2 — Documentation Audit (Complete)
- `docs/` directory created
- 10 documentation files: PRD, TRD, DESIGN, PATCHNOTES, PRFAQ, TENETS, METRICS, ROADMAP, SECURITY, RUNBOOK
- README rewritten for developer audience
- All docs reflect actual current project state

### M3 — Backend & Auth (Planned)
- User accounts (email/password and social auth)
- Persistent media library (database per user)
- Session management
- Profile URLs (`/u/username`)
- Real item logging API
- Deploy Next.js version (replace static HTML as canonical app)
- Analytics integration (Plausible or GA4)

### M4 — Real AI Taste Graph (Planned)
- Taste embedding model (vector representation per user and per work)
- Real Cultural Archetype classifier
- Real Taste Dimensions scores
- Taste Neighbor matching based on embedding similarity
- Smart Cohort generation algorithm
- Feed ranking based on taste compatibility

### M5 — Live Media Search (Planned)
- Integration with media databases (Open Library, TMDB, MusicBrainz, IGDB, Podcast Index)
- Full-text search across titles and creators
- Natural language search ("books that feel like autumn in New England")
- Search result pages with log/rate CTA

### M6 — Platform Imports (Planned)
- Goodreads CSV import
- Letterboxd CSV import
- Spotify API integration (listening history)
- IGDB API integration (game library)

### M7 — Mobile & PWA (Planned)
- Responsive layout audit and refinements
- PWA manifest and service worker
- Mobile-specific interaction patterns (swipe actions, bottom nav)
- App store submission (optional, post-PWA)

---

## Explicitly Deferred Items

| Feature | Reason deferred |
|---|---|
| Creator monetization (subscription, tipping) | Requires significant legal/payment infrastructure; not core to early growth |
| Publisher/studio analytics dashboard | B2B product; too early to build without enterprise customers |
| Direct messaging | Adds moderation burden; taste discovery does not require it |
| Live events / real-time features | Complexity without validated need |
| Video or audio hosting | Infrastructure cost; Lantern links to content, it does not host it |
| AI Cultural Copilot (complex cultural queries) | Requires mature taste graph; blocked on M4 |
| Advertising product | Requires meaningful scale; not a Phase 1–3 concern |
| Community moderation tools | Deferred until cohorts have real user-generated content |

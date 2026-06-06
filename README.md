# Lantern

A culture-based social platform for discovering yourself and others through art — books, films, music, games, podcasts, and more.

**Live site:** [azqato.github.io/Lantern](https://azqato.github.io/Lantern/)

---

## Overview

Lantern helps people discover who they are and who they belong with through shared cultural taste. Instead of follow counts and algorithms, it surfaces *taste neighbors* — people with overlapping cultural preferences — and groups users into AI-generated micro-communities called *Smart Cohorts*.

Every item you log builds a taste graph. The graph powers your Cultural Archetype, your Taste Dimensions, your Cohort matches, and the people Lantern surfaces as your neighbors.

---

## Tech Stack

| Concern | Choice |
|---|---|
| Structure | Vanilla HTML5 |
| Styling | Tailwind CSS via CDN (no build step) |
| Logic | Vanilla JavaScript (ES6+) |
| Typography | Georgia / Garamond (serif headings), system-ui (body) |
| Deployment | GitHub Pages (static, no server) |

**Zero dependencies. Zero build step.** Open any `.html` file directly in a browser — it works on `file://` out of the box.

---

## Project Structure

```
lantern/
├── index.html        — Landing page (homepage for first-time visitors)
├── profile.html      — User profile page
├── feed.html         — Discovery feed
├── lists.html        — Curated lists
├── cohorts.html      — Smart Cohorts discovery
├── search.html       — Search with theme browse & taste neighbors
├── onboarding.html   — 6-step first-run experience
├── nav.js            — Shared navigation (injected by all pages)
├── PRD.md            — Full product requirements document
├── PatchNotes.md     — Changelog
└── README.md         — This file
```

---

## Pages & Features

### Landing Page (`index.html`)
A marketing homepage structured as a rocket pitch for first-time visitors. Seven sections:
1. **Hero** — Headline, one-liner, dual CTA (Get Started / See how it works)
2. **The Gap** — Dark panel showing what Instagram, TikTok, LinkedIn, and X don't offer
3. **How it works** — Three pillars: taste identity, taste neighbors, smart community
4. **The Platform** — Six feature cards linking to every page of the app
5. **Principles** — Taste over Popularity, Depth over Virality, Global by Default
6. **Taste Intelligence** — AI archetypes, dimensions, and neighbor matching explained
7. **Final CTA** — "Ready to find yourself in culture?" with Get Started button
- Footer with navigation to all six app pages

### Profile (`profile.html`)
- **Cultural Archetype badge** — A single evocative label (e.g. "The Slow Cinema Devotee") rendered as a serif italic amber pill beneath the user's name; backed by an `ARCHETYPES` array for future AI assignment
- **Taste Dimensions widget** — 5 named dimensions (Narrative Complexity, Emotional Intensity, Experimental, Intimacy of Scale, Cross-Cultural Range) as labeled `h-1.5` horizontal progress bars
- **Currently Engaging** — Live hero section between the profile header and collections; a horizontal scrollable row of in-progress items with animated pulsing blue dots
- **Media collections** — Items organised by category (Books, Movies, TV, Music, Games, Podcasts); each card shows cover art gradient, status dot, rating, and review snippet
- **Pinned Favorites** — Up to 4 hand-picked items shown prominently above all categories
- **Stats row** — Catalogued / Completed / In Progress / Rated counts computed live from the data array
- **Taste Neighbors sidebar** — Right-hand column showing 4 users with match %, one shared work, and a "View Profile" ghost button

### Discovery Feed (`feed.html`)
- Activity cards from users with overlapping taste: rated, finished, or started items
- **"Why this is in your feed"** — Each card carries a one-line contextual reason (e.g. "3 works in common · 91% taste match", "Member of Television as Literature")
- **Taste Neighbors sidebar** — 3 placeholder neighbors above the Smart Cohorts widget; both sidebar blocks are sticky
- **Smart Cohorts sidebar** — 3 matched cohorts with member count, match %, and Join button

### Lists (`lists.html`)
- Curated list cards with 4-cover mosaic preview
- **Author line** — Small initials avatar + "by Alex Chen · The Slow Cinema Devotee"
- **Follower count** — "X people follow this list"
- **Fork button** — Ghost button on every card; tooltip: "Copy and make your own version"
- **Empty state** — Prompts creation or forking

### Smart Cohorts (`cohorts.html`)
- Grid of 6 AI-matched communities, sorted by match score
- **Works in common** — Each card shows count + up to 3 shared titles as italic pills
- **Weekly activity** — "X new reviews this week" makes cohorts feel alive

### Search (`search.html`)
- Full-width search input with live show/hide of default vs. results state
- **Browse by Theme** — 12 cross-media theme pills (Grief, Memory, Identity, Loneliness, Obsession, Redemption, Coming of Age, Existentialism, Nostalgia, Alienation, Love, Power) in serif italic style with a left-border hover accent; clicking fills the search input
- **Find Taste Neighbors** — Prominent discovery card with 3 matched users, their archetypes, match %, and 2 shared works each
- **Category filters** — All / Books / Movies / TV / Music / Games / Podcasts
- **Trending** — 9 trending creators and titles including global voices (Bong Joon-ho, Toni Morrison, Hirokazu Kore-eda)
- **Suggested queries** — Thematic prompts in italic pill style

### Onboarding (`onboarding.html`)
A 6-step first-run experience — no nav bar, step indicator (5 dots for steps 2–6), Back navigation.

| Step | Content |
|---|---|
| 1 — Welcome | Logo, headline, "Get Started →" |
| 2 — Pick favorites | 24-work grid (6 cols, all categories, global titles); counter; Continue unlocks at 8 selections |
| 3 — Taste profile | Archetype badge, taste summary, 5 dimension bars — all fade-in animated |
| 4 — Suggested cohorts | 3 cohort cards with Join toggle |
| 5 — Import | Goodreads, Letterboxd, Spotify, IGDB tiles (Connect disabled, "Coming soon") + Skip |
| 6 — Done | "Go to your profile →" |

### Navigation (`nav.js`)
Shared component injected into every page via `<script src="nav.js">`. Handles active-link highlighting based on `window.location.pathname`. "Get Started" links to `onboarding.html`.

---

## Running Locally

No installation required. Just open any page in a browser:

```
index.html      — landing page (start here for first-time visitors)
profile.html    — user profile
```

Or serve with any static file server:

```bash
# Python
python -m http.server 8000

# Node (npx)
npx serve .
```

---

## Design System

### Color palette — `lantern` scale

| Token | Hex | Usage |
|---|---|---|
| `lantern-50` | `#fafaf8` | Page background |
| `lantern-100` | `#f5f5f1` | Hover states, pill backgrounds |
| `lantern-200` | `#ebe7e1` | Borders |
| `lantern-400` | `#cfc9ba` | Muted text, dividers |
| `lantern-500` | `#c1bda6` | Secondary text |
| `lantern-600` | `#8b8772` | Labels, captions |
| `lantern-700` | `#6b6652` | Primary interactive, active links |
| `lantern-800` | `#4a4639` | Dark buttons |
| `lantern-900` | `#2a2622` | Headings, body text |

### Typography
- **Serif** — Georgia, Garamond: all headings, titles, archetype labels, ratings
- **Sans** — system-ui: body text, labels, metadata

### Cover art placeholders
Category-specific gradients (amber for books, stone for movies, teal for TV, indigo for music, slate for games, rose for podcasts) with a large typographic initial at 18% opacity.

### Aesthetic
Editorial, warm, intellectual. Criterion Collection meets Letterboxd. Strong typographic hierarchy, deliberate whitespace. No gradients on UI chrome — only on media art.

---

## Placeholder Data

All data is hardcoded JS arrays inside each page's `<script>` block. Content is intentionally global and diverse:

- **Books**: Murakami, Ishiguro, Dostoevsky, Toni Morrison, Roberto Bolaño
- **Movies**: Wong Kar-wai, Edward Yang, Hirokazu Kore-eda, Bong Joon-ho, Denis Villeneuve, Terrence Malick
- **TV**: Michaela Coel, Dan Erickson, Christopher Storer
- **Music**: Sufjan Stevens, Fiona Apple, Solange, Bon Iver
- **Games**: FromSoftware, ZA/UM, Team Cherry

---

## Roadmap

1. **Backend & auth** — User accounts, persistent data, real API
2. **AI taste graph** — Real archetype assignment, cohort generation, neighbor matching
3. **Search** — Live results connected to a media database
4. **Reviews & ratings** — Full review system with social interactions
5. **Import** — Goodreads, Letterboxd, Spotify, IGDB integrations
6. **Mobile** — Responsive refinements and PWA manifest

---

## Design Inspiration

- **Criterion Collection** — Editorial curation, typographic restraint
- **Letterboxd** — Community-driven taste culture
- **Goodreads** — Cataloguing and social reading
- **Spotify** — Taste profiling and discovery

---

## License

Private / TBD

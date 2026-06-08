# Lantern — Product Requirements Document

**Author:** Azqato
**Last Updated:** 2026-06-08
**Status:** Active

---

## Problem Statement

No mainstream social platform organizes around cultural taste. Every major network has a different identity layer:

| Platform | Core identity |
|---|---|
| Instagram | Appearance |
| TikTok | Entertainment |
| LinkedIn | Career |
| X | Opinions |
| Facebook | Existing relationships |
| Reddit | Anonymous discussion |

Niche tools exist for single media types (Goodreads for books, Letterboxd for film, Spotify for music) but none unify them. A person who loves Murakami, Wong Kar-wai, and Sufjan Stevens has no single place that reflects that identity, surfaces others like them, or connects those dots across mediums.

---

## Target Users

### Primary: Cultural Explorers (ages 20–40)

People who consume intentionally across multiple media types — they finish books, maintain watchlists, revisit albums. They are not passive streamers; they have opinions, they track what they've seen, and they are frustrated that no platform reflects who they are culturally.

Examples: Criterion Collection subscribers, literary fiction readers, indie music listeners, foreign cinema fans, tabletop and narrative game players.

Core needs:
- A unified home for their cultural identity
- Discovery of people with genuinely similar taste (not followers)
- Serendipitous recommendations that cross medium boundaries

### Secondary: Creators and Critics

Writers, podcasters, video essayists, and independent critics who build taste authority. They need an audience that cares about their cultural perspective, not just their output volume.

Core needs:
- Audience building among high-signal listeners
- A profile that demonstrates taste credibility
- Community engagement around specific interests

### Tertiary: Publishers and Studios

Organizations that want to reach audiences based on demonstrated taste, not demographic proxies.

Core needs:
- Organic discovery channels
- Anonymized audience taste data

---

## Goals

1. Give every user a living cultural identity they are proud to share.
2. Surface taste neighbors — people with overlapping cultural preferences — more reliably than any current platform.
3. Make cross-media discovery feel natural (a film recommendation that comes from a book you love).
4. Create AI-generated communities (Smart Cohorts) that users recognize as accurate and want to participate in.
5. Replace the fragmented multi-app workflow (Goodreads + Letterboxd + Last.fm + etc.) with one place.

---

## Non-Goals

- Lantern will not host content (no video, audio, or ebook storage).
- Lantern will not compete with streaming services on catalogue depth.
- Lantern will not build creator monetization tools in the MVP.
- Lantern will not support live events or real-time features in the MVP.
- Lantern will not target passive content consumers who do not track or reflect on what they watch/read/play.

---

## User Stories

- As a cultural explorer, I want to log every book, film, and album I've consumed so that I have a complete picture of my own taste over time.
- As a cultural explorer, I want to see a Cultural Archetype label that accurately describes my taste so that I have language to explain who I am culturally.
- As a cultural explorer, I want to find other users with overlapping taste so that I can discover what they're consuming without following strangers on faith.
- As a cultural explorer, I want to be placed in Smart Cohorts automatically so that I can participate in communities that match my actual interests without searching for them.
- As a cultural explorer, I want to browse a discovery feed filtered by taste compatibility so that every item in my feed has a reason to be there.
- As a cultural explorer, I want to create and fork curated lists so that I can share themed collections and build on others'.
- As a new user, I want an onboarding flow that generates my taste profile from a few selections so that I get value from the app before I've logged anything.
- As a creator, I want my profile to reflect my depth of taste so that my cultural authority is visible to potential followers.

---

## Feature List

### MVP (must ship)

- User profile with media collections across 6 categories: Books, Movies, TV, Music, Games, Podcasts
- Status tracking per item: Completed, Currently Engaging, Want to Experience
- 1–10 rating system
- Pinned Favorites section
- AI-generated Cultural Archetype badge
- Taste Dimensions widget (5 axes: Narrative Complexity, Emotional Intensity, Experimental, Intimacy of Scale, Cross-Cultural Range)
- Taste Neighbors discovery (users with high taste overlap)
- Smart Cohorts: AI-generated micro-communities matched by taste
- Discovery feed with taste-match reasoning per card
- Curated Lists with fork functionality
- Search across titles, creators, themes, users, lists, cohorts
- Theme-based search browse (12 cross-media themes)
- 6-step onboarding flow with taste profile generation
- Platform imports: Goodreads, Letterboxd, Spotify, IGDB (post-MVP)

### Future (post-launch)

- Backend authentication and persistent user accounts
- Real AI taste graph (vector embeddings, not hardcoded placeholders)
- Live media database with search API integration
- Full review system (short reactions, long essays, quotes)
- Platform import connectors (Goodreads, Letterboxd, Spotify, IGDB)
- Creator profiles with analytics
- Mobile-optimized layout and PWA manifest
- Natural language search ("books that feel like autumn in New England")
- AI Cultural Copilot for complex cultural queries
- Affiliate link auto-embedding for monetization

---

## Constraints

- **No backend yet:** All data is hardcoded placeholder content. The product ships as a static HTML site on GitHub Pages.
- **No authentication:** No user accounts or session management in the current version.
- **No real AI:** Archetypes, Taste Dimensions, Cohort matching, and Taste Neighbors are all static placeholders.
- **No media database:** Titles and creators are hardcoded; no live search against an external catalogue.
- **Single developer:** Azqato is the sole contributor at this stage.
- **Zero budget:** Infrastructure is free-tier (GitHub Pages). External services are deferred until funding or revenue exists.

---

## Assumptions

- Users in the target persona already track their media consumption in some form and want a better home for it.
- A Cultural Archetype label generated from taste data will feel accurate and shareable, not reductive.
- Cross-media discovery (a film recommendation from a book taste signal) is genuinely valued by the target user.
- Smart Cohorts formed algorithmically will feel more relevant than manually joined groups, because they reflect actual taste overlap rather than self-reported identity.
- The static HTML MVP is sufficient to validate the core UX and design hypotheses before building backend infrastructure.

---

## Success Criteria

| Criterion | Target | Timeframe |
|---|---|---|
| Users who complete onboarding call their Archetype accurate | > 70% | First 100 users |
| Day-7 retention | > 40% | First 30 days live |
| Items logged per active user per week | > 3 | First 60 days |
| Cohort join rate among active users | > 60% | First 60 days |
| Users who share their profile or a list externally | > 20% | First 90 days |
| Weekly active users at 90 days | > 500 | 90 days post-launch |

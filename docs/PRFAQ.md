# Lantern — PR/FAQ

**Last Updated:** 2026-06-08

---

## Press Release

**FOR IMMEDIATE RELEASE**

### Lantern Launches: The First Social Platform Organized Around What You Love, Not Who You Follow

*New platform lets people build a cultural identity across books, films, music, games, and podcasts — and find others who share it*

**June 8, 2026** — Today, Lantern opens its doors as the first social platform built entirely around cultural taste. While existing networks ask who you know or what you look like, Lantern asks a different question: what do you love?

Users log the books they've read, the films they've watched, the albums they return to, and the games that stayed with them. From that data, Lantern generates a Cultural Archetype — a single evocative label that captures who they are as a taste-maker — and places them in AI-generated Smart Cohorts alongside people who share their sensibility.

Instead of followers and likes, Lantern shows users their Taste Neighbors: people with the highest overlap in cultural preferences, regardless of whether they've ever crossed paths. A reader in Tokyo and a filmmaker in Lagos might discover they are both devotees of the same wave of slow cinema and literary fiction.

"I didn't realize how much my taste defined me until I saw it reflected back," said one early user. "Lantern showed me not just what I've consumed but who I am because of it. And then it introduced me to ten people just like me."

Lantern is free to use. Start at [azqato.github.io/Lantern](https://azqato.github.io/Lantern/).

---

## Internal FAQ

**1. What problem does Lantern actually solve?**
Cultural consumption has no unified home. People use Goodreads for books, Letterboxd for film, Last.fm or Spotify for music, and nothing at all for games or podcasts. None of these connect to each other, and none of them treat the combination of a person's taste as a meaningful identity signal. Lantern unifies these into one profile and one graph.

**2. Why would someone switch from Letterboxd or Goodreads?**
They probably won't abandon those platforms entirely. But neither Letterboxd nor Goodreads crosses medium boundaries. A person who loves Murakami and Wong Kar-wai has cultural DNA that spans both — Letterboxd cannot see the Murakami half, and Goodreads cannot see the Wong Kar-wai half. Lantern's entire value proposition lives in that cross-domain connection.

**3. What makes the Smart Cohorts compelling vs. joining a subreddit?**
Subreddits are self-selected by explicit identity ("I am a fan of X"). Smart Cohorts are generated from latent taste signals — the system finds the cluster you belong to before you've named it. That serendipity, the feeling that the platform understood something about you that you hadn't articulated, is the core differentiator.

**4. How does the AI generate the Cultural Archetype?**
In the current MVP, it doesn't — the archetype is a hardcoded placeholder. In the target architecture, it will be a classifier trained on taste embeddings, where each user's logged items are encoded into a vector space and the archetype label is assigned based on cluster proximity. The UX is designed now; the real AI is future work.

**5. What are the biggest risks to this product?**
The cold start problem is severe: taste matching only works with data, and new users have no data. The onboarding flow (pick 8+ favorites from a 24-work grid) is designed to seed the graph immediately. The second risk is retention: logging media is work, and users will drop off if they don't feel the payoff (meaningful matches, good discoveries) within the first session.

**6. Why not build on an existing social graph (log in with Twitter, etc.)?**
Lantern's graph is a taste graph, not a social graph. Importing a Twitter follow list would surface people you already know, which is the opposite of what Taste Neighbors is trying to do. The value is in discovering strangers with aligned sensibility.

**7. What does the business model look like?**
Phase 1: free product with affiliate link embedding (Prime Video, Audible, etc.) on media items. Phase 2: premium creator tools for critics and curators. Phase 3: anonymized audience intelligence for publishers and studios. No ads in Phase 1.

**8. How does Lantern handle content from non-English-speaking cultures?**
Deliberately and by design. The placeholder data includes Wong Kar-wai, Hirokazu Kore-eda, Bong Joon-ho, Toni Morrison, Roberto Bolaño, and Solange. The product principle "Global by Default" means international content is not an afterthought — it is required to be present from day one.

**9. What has to be true for Lantern to succeed?**
Users must find the Cultural Archetype accurate and shareable. Taste Neighbors must surface people who feel genuinely similar, not just people who both watched the same blockbusters. And the logging behavior must become habitual — people must want to mark things as "completed" the way Letterboxd users do. If any of these three things fail, the core loop breaks.

**10. What is the single most important thing to ship next?**
Real user accounts with persistent data. Without it, everything else (real AI, real matching, real cohorts) is impossible. The static MVP proves the UX concept; the next milestone is a backend.

---

## External FAQ

**1. What is Lantern?**
Lantern is a platform where you build a cultural identity by logging the books you've read, films you've watched, music you love, games you've played, and podcasts you follow. From that, it shows you other people who share your sensibility — your Taste Neighbors — and places you in communities (Smart Cohorts) with people who have similar taste.

**2. How is this different from Goodreads or Letterboxd?**
Goodreads is books only. Letterboxd is film only. Lantern covers all media in one place and connects the dots between them. A film lover who is also a Murakami reader will find their full cultural identity reflected on Lantern — not split across four apps.

**3. How does Lantern figure out my Cultural Archetype?**
You log the works you've consumed and rate them. Lantern analyzes patterns in your taste — what kinds of stories, styles, and themes you gravitate toward — and assigns a label that captures who you are as a cultural person. Examples: "The Slow Cinema Devotee", "The Speculative Fiction Architect", "The Post-Rock Minimalist".

**4. What are Smart Cohorts?**
Smart Cohorts are communities Lantern creates automatically based on shared taste. You don't have to search for them or apply to join. If Lantern detects that your taste overlaps significantly with a group of other users, it surfaces that cohort and invites you in. Each cohort has a name, a shared taste signature, and a list of works most of the members have in common.

**5. Who are my Taste Neighbors?**
Taste Neighbors are users whose cultural preferences overlap with yours the most — across all the media types you've both logged. They are not people you follow. They may be strangers. The match percentage reflects how much of your taste graph you share with them.

**6. Is Lantern free?**
Yes. Lantern is free to use.

**7. What data does Lantern use about me?**
Only the media you log and rate. Lantern does not read your browser history, location, contacts, or any data outside the platform. Your cultural profile is built entirely from what you explicitly tell it.

**8. Can I import my existing libraries from Goodreads, Letterboxd, or Spotify?**
Import is on the roadmap. The onboarding screen has tiles for Goodreads, Letterboxd, Spotify, and IGDB, but the connections are marked "Coming soon." For now, you add media manually.

**9. What does Lantern not do?**
Lantern does not host content — you cannot watch, read, or listen to anything on Lantern. It does not have a chronological social feed of your friends' posts. It does not show follower counts or trending content based on popularity. It does not have direct messaging in its current version.

**10. How do I get started?**
Go to [azqato.github.io/Lantern](https://azqato.github.io/Lantern/) and click "Get Started." The onboarding flow takes about 3 minutes: pick at least 8 works you love, see your generated taste profile, and join your first cohorts.

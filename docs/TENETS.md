# Lantern — Product Tenets

**Last Updated:** 2026-06-08

Tenets are listed in priority order. When two tenets conflict, the higher one wins.

---

## 1. Taste Over Popularity

A work's cultural significance on Lantern is determined by the depth and quality of engagement among users who love it, not by how many people have heard of it. We will not surface popular content simply because it is popular, and we will not hide obscure content simply because it is obscure.

**Why this is a real tradeoff:** Building a recommendation system that ignores raw popularity is harder to engineer, and popular content is always the safest default for engagement metrics. This tenet will cost us engagement in the short term. It is still the right call, because a platform that converges on the same 50 mainstream titles for everyone has failed at its core mission.

---

## 2. The Whole Person, Not the Single Medium

A user's cultural identity is expressed across all the media they consume — not just books, not just film, not just music. Every product decision should treat the cross-domain profile as the unit of value, not any single vertical. We will not build features that make one medium first-class and others second-class.

**Why this is a real tradeoff:** Going deep in one medium (like Letterboxd does for film) would produce a better product faster in that vertical. This tenet deliberately sacrifices depth for breadth, betting that the unified taste graph is more valuable than any single-medium offering. If we are wrong, this tenet costs us the users who only care about one medium.

---

## 3. Discovery Over Confirmation

Lantern should regularly surface things users would not have found themselves — works from cultures or mediums they have not yet explored, but which are predicted to resonate with their taste. We will resist the pressure to only recommend things close to what a user already knows.

**Why this is a real tradeoff:** Confirmation-of-existing-taste is the safest recommendation strategy (users accept it, engagement is higher). Serendipitous discovery requires taking recommendations that might be wrong. A user who gets three bad serendipitous recommendations in a row will lose trust. We accept that risk because a platform that only reflects users back to themselves adds no discovery value.

---

## 4. Signal Over Noise

Every element in the interface — every card in the feed, every cohort suggestion, every taste neighbor — must have a clear reason to exist for this specific user. We will not pad the experience with filler content or low-confidence recommendations to make the app feel full. An empty feed with a clear explanation is better than a full feed with irrelevant content.

**Why this is a real tradeoff:** Low-signal content makes the app feel active and alive, which improves retention metrics in the short term. High-signal curation makes the app feel sparse until the taste graph is dense enough. This tenet will make the early product feel underpopulated. That is acceptable; the alternative is training users to ignore what Lantern shows them.

---

## 5. Global by Default

Content from every culture is equally valid, equally discoverable, and equally likely to be surfaced. We will not treat English-language or Western content as the default and everything else as a special category. International works are seeded into every data set — onboarding, trending, placeholder data, recommendations — from day one.

**Why this is a real tradeoff:** Optimizing for a primarily English-speaking, Western audience would produce a simpler initial product with better metrics in that demographic. This tenet requires intentional work on every feature to include global voices, and it may produce a product that feels unfamiliar to users who only know mainstream content. That is the point.

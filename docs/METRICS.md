# Lantern — Metrics

**Last Updated:** 2026-06-08

---

## North Star Metric

**Logged items per active user per week**

This number best represents whether Lantern is delivering its core value: people are actively building their taste profile, which means the cultural identity layer is growing, which means matching, cohorts, and discovery get better. A user who logs nothing is not getting value from Lantern regardless of how often they open the app.

---

## Acquisition Metrics

| Metric | Description | Target | Timeframe | Method |
|---|---|---|---|---|
| New user visits | Unique visitors to the landing page | 1,000/month | 30 days post-launch | Plausible / GA4 |
| Onboarding start rate | % of landing page visitors who click "Get Started" | > 25% | 30 days | Event tracking |
| Onboarding completion rate | % of users who reach step 6 (Done) | > 60% | 30 days | Event tracking |
| Profile created | Users who complete onboarding and have a logged taste profile | 200 | 60 days | Server-side count |
| Organic referral rate | % of new signups who came from a shared profile or list link | > 15% | 90 days | UTM / referrer |

---

## Engagement Metrics

| Metric | Description | Target | Timeframe | Method |
|---|---|---|---|---|
| Logged items per active user/week | Items marked completed, in progress, or want-to-experience | > 3 | 60 days | Server-side |
| Ratings submitted per active user/week | Explicit 1–10 ratings | > 2 | 60 days | Server-side |
| Reviews written per active user/week | Text reviews attached to a logged item | > 0.5 | 90 days | Server-side |
| Cohort join rate | % of active users who have joined at least one cohort | > 60% | 60 days | Server-side |
| Lists created per active user | Curated lists created or forked | > 0.3 | 90 days | Server-side |
| Lists forked | Total fork actions | > 20 total | 90 days | Server-side |
| Profile shares | Times a user shared their profile externally | > 20% of active users | 90 days | Share event tracking |
| Average session duration | Time spent per session | > 4 min | 60 days | Analytics |

---

## Retention Metrics

| Metric | Description | Target | Timeframe | Method |
|---|---|---|---|---|
| Day-7 retention | % of new users who return within 7 days | > 40% | Ongoing | Cohort analysis |
| Day-30 retention | % of new users who return within 30 days | > 25% | Ongoing | Cohort analysis |
| Day-90 retention | % of new users who return within 90 days | > 15% | Ongoing | Cohort analysis |
| Weekly active users (WAU) | Unique users who log at least one item in the week | > 500 | 90 days post-launch | Server-side |
| Churn rate | % of previously active users who have no activity for 30+ days | < 30% | Monthly | Server-side |

---

## Performance Metrics

| Metric | Description | Target | Method |
|---|---|---|---|
| First Contentful Paint | Time to first visible content on static pages | < 1.5s | Lighthouse / WebPageTest |
| Largest Contentful Paint | Time to largest element visible | < 2.5s | Core Web Vitals |
| Total page weight | Static page size excluding Tailwind CDN | < 200 KB | Lighthouse |
| Uptime | Site availability | > 99.9% | GitHub Pages SLA / UptimeRobot |
| JavaScript error rate | Unhandled JS errors per session | < 1% | Browser error monitoring |
| 404 rate | Requests to non-existent routes | < 0.5% | Server logs / GA4 |

---

## Reporting Cadence

| Metric group | Review frequency | Owner |
|---|---|---|
| North star (logged items/user/week) | Weekly | Product |
| Acquisition funnel | Weekly | Product |
| Retention cohorts | Monthly | Product |
| Engagement metrics | Weekly | Product |
| Performance (Core Web Vitals) | On every deploy | Engineering |
| Uptime | Continuous alert (UptimeRobot) | Engineering |

No formal reporting infrastructure exists yet. Current state: all metrics are untracked (static site, no analytics). Metrics tracking should be the first thing added once user accounts exist.

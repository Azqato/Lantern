# Lantern

A culture-based social platform for discovering yourself and others through art, books, films, music, games, and more.

## Overview

Lantern helps people discover who they are and who they belong with through shared cultural interests. Instead of following influencers, users discover taste neighbors—people with similar cultural preferences—and join AI-generated micro-communities called Smart Cohorts.

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Design Philosophy**: Editorial, warm, intellectual (inspired by Criterion Collection and Letterboxd)

## Project Structure

```
lantern/
├── app/                    # Next.js App Router pages
│   ├── profile/           # User profile page
│   ├── feed/              # Discovery feed page
│   ├── search/            # Search page (placeholder)
│   ├── lists/             # Lists page (placeholder)
│   ├── cohorts/           # Cohorts page (placeholder)
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home (redirects to profile)
│   └── globals.css        # Global styles
├── components/
│   ├── layout/
│   │   └── Navbar.tsx     # Global navigation
│   ├── profile/
│   │   ├── ProfileHeader.tsx
│   │   ├── MediaCard.tsx
│   │   ├── FavoritesSection.tsx
│   │   └── MediaCollection.tsx
│   └── feed/
│       ├── FeedCard.tsx
│       └── CohortsWidget.tsx
├── lib/
│   ├── data.ts            # Placeholder data & types
│   └── utils.ts           # Utility functions
└── public/                # Static assets
```

## Features

### Profile Page
- Dynamic cultural profile with pinned Favorites
- Media collections organized by category (Books, Movies, TV, Music, Games, Podcasts)
- 3 status types per item: Completed, Currently Engaging, Want to Experience
- 1-10 rating system
- AI-generated taste summary (placeholder)

### Discovery Feed
- Feed showing media activity from users with similar taste
- Feed cards with: title, category, rating, review snippet, status
- Smart Cohorts sidebar showing AI-generated micro-communities

### Navigation
Global navigation includes: Profile, Feed, Search, Lists, Cohorts

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
npm run start
```

## Component Architecture

The project is built with clean, reusable components designed for future AI integration:

- **Presentational Components**: No data fetching, accept props
- **Page Components**: Manage page-level state and data
- **Layout Components**: Navigation and persistent UI

## Placeholder Data

All data throughout the application is currently placeholder data. Replace with real API calls as features are developed:

- `lib/data.ts` contains seed data for users, media items, and cohorts
- `lib/utils.ts` contains helper functions for data transformation

## Design System

Color palette:
- `lantern-50` to `lantern-900` - Custom warm, intellectual color palette
- Typography: Serif fonts for headings (Georgia, Garamond), sans-serif for body

## Next Steps

1. **Authentication**: Implement user accounts and authentication
2. **Database**: Set up backend with real media database
3. **AI Integration**: Implement taste graph and cohort generation
4. **Search**: Build search functionality across media and users
5. **Reviews**: Implement user reviews and ratings system

## Design Inspiration

- **Criterion Collection** - Editorial, carefully curated aesthetic
- **Letterboxd** - Community-driven film culture
- **Goodreads** - Book cataloging and discussion
- **Spotify** - Music discovery and taste profiling

## License

Private/TBD

'use client';

import { useState } from 'react';

const CATEGORIES = ['All', 'Books', 'Movies', 'TV', 'Music', 'Games', 'Podcasts'];

const TRENDING = [
  { query: 'Haruki Murakami', category: 'Books' },
  { query: 'Wong Kar-wai', category: 'Movies' },
  { query: 'Sufjan Stevens', category: 'Music' },
  { query: 'Disco Elysium', category: 'Games' },
  { query: 'Severance', category: 'TV' },
  { query: 'Edward Yang', category: 'Movies' },
];

const SUGGESTED = [
  'Films that feel like autumn',
  'Books about grief',
  'Albums under 40 minutes',
  'Games with literary writing',
  'Podcasts about history',
];

export default function SearchPage() {
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  return (
    <main className="min-h-screen bg-lantern-50">
      <div className="max-w-4xl mx-auto px-6 py-10">
        {/* Search input */}
        <div className="mb-8">
          <h1 className="text-4xl font-serif font-bold text-lantern-900 mb-6">Search</h1>
          <div className="relative">
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 text-lantern-400"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search titles, creators, themes, users…"
              className="w-full pl-12 pr-4 py-3.5 bg-white border border-lantern-200 rounded-lg text-lantern-900 placeholder-lantern-400 focus:outline-none focus:border-lantern-600 focus:ring-1 focus:ring-lantern-600 transition-colors font-sans text-sm"
            />
          </div>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap gap-2 mb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                activeCategory === cat
                  ? 'bg-lantern-700 text-white'
                  : 'bg-white border border-lantern-200 text-lantern-600 hover:border-lantern-400'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {query === '' && (
          <>
            {/* Trending */}
            <section className="mb-10">
              <h2 className="text-xs font-semibold uppercase tracking-widest text-lantern-500 mb-4">
                Trending in your network
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {TRENDING.map((item, i) => (
                  <button
                    key={i}
                    onClick={() => setQuery(item.query)}
                    className="flex items-center justify-between bg-white border border-lantern-200 rounded-lg px-4 py-3 text-left hover:shadow-sm hover:border-lantern-300 transition-all group"
                  >
                    <span className="font-serif font-semibold text-sm text-lantern-900 group-hover:text-lantern-700 transition-colors">
                      {item.query}
                    </span>
                    <span className="text-xs bg-lantern-100 text-lantern-500 px-2 py-0.5 rounded">
                      {item.category}
                    </span>
                  </button>
                ))}
              </div>
            </section>

            {/* Suggested */}
            <section>
              <h2 className="text-xs font-semibold uppercase tracking-widest text-lantern-500 mb-4">
                Try asking
              </h2>
              <div className="flex flex-wrap gap-2">
                {SUGGESTED.map((s, i) => (
                  <button
                    key={i}
                    onClick={() => setQuery(s)}
                    className="text-sm text-lantern-600 border border-lantern-200 bg-white px-3 py-1.5 rounded-full hover:border-lantern-400 hover:text-lantern-900 transition-colors italic"
                  >
                    {s}
                  </button>
                ))}
              </div>
            </section>
          </>
        )}

        {query !== '' && (
          <div className="bg-white border border-lantern-200 rounded-lg p-8 text-center">
            <p className="font-serif text-lantern-500 mb-1">
              Searching for &ldquo;{query}&rdquo;
            </p>
            <p className="text-xs text-lantern-400">
              Search results will appear here once connected to the media database.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}

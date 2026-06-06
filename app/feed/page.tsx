'use client';

import { FeedCard } from '@/components/feed/FeedCard';
import { CohortsWidget } from '@/components/feed/CohortsWidget';
import { PLACEHOLDER_FEED_ACTIVITY, PLACEHOLDER_COHORTS } from '@/lib/data';

export default function FeedPage() {
  return (
    <main className="min-h-screen bg-lantern-50">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Feed */}
          <div className="lg:col-span-2">
            <div className="mb-8">
              <h1 className="text-3xl font-serif font-bold mb-2">Discovery Feed</h1>
              <p className="text-lantern-600">
                See what people with similar taste are enjoying
              </p>
            </div>

            <div>
              {PLACEHOLDER_FEED_ACTIVITY.map((activity) => (
                <FeedCard key={activity.id} activity={activity} />
              ))}
            </div>

            <div className="text-center py-8">
              <button className="button-secondary">Load More Activity</button>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <CohortsWidget cohorts={PLACEHOLDER_COHORTS} />
          </aside>
        </div>
      </div>
    </main>
  );
}

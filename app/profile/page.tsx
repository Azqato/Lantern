'use client';

import { ProfileHeader } from '@/components/profile/ProfileHeader';
import { FavoritesSection } from '@/components/profile/FavoritesSection';
import { MediaCollection } from '@/components/profile/MediaCollection';
import { PLACEHOLDER_MEDIA, PLACEHOLDER_FAVORITES } from '@/lib/data';
import { groupMediaByCategory } from '@/lib/utils';

export default function ProfilePage() {
  const grouped = groupMediaByCategory(PLACEHOLDER_MEDIA);

  return (
    <main className="min-h-screen bg-lantern-50">
      <ProfileHeader />

      <div className="max-w-7xl mx-auto px-6 pb-16">
        <div className="space-y-16">
          {/* Favorites Section - Always First */}
          <section>
            <FavoritesSection items={PLACEHOLDER_FAVORITES} />
          </section>

          {/* Media Collections */}
          {Object.entries(grouped).map(([category, items]) => (
            <section key={category}>
              <MediaCollection
                category={category as any}
                items={items}
              />
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}

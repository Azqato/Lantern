import { MediaItem } from '@/lib/data';
import { MediaCard } from './MediaCard';

interface FavoritesSectionProps {
  items: MediaItem[];
}

export function FavoritesSection({ items }: FavoritesSectionProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <h2 className="text-2xl font-serif font-bold">Pinned Favorites</h2>
        <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-700">
          {items.length}
        </span>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((item) => (
          <MediaCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

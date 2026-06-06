import { MediaItem, MediaCategory } from '@/lib/data';
import { getCategoryLabel } from '@/lib/utils';
import { MediaCard } from './MediaCard';

interface MediaCollectionProps {
  category: MediaCategory;
  items: MediaItem[];
}

export function MediaCollection({ category, items }: MediaCollectionProps) {
  if (items.length === 0) {
    return null;
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <h2 className="text-2xl font-serif font-bold">{getCategoryLabel(category)}</h2>
        <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-lantern-100 text-lantern-700">
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

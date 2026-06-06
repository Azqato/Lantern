import { MediaCategory, MediaStatus } from './data';

export function getCategoryLabel(category: MediaCategory | string): string {
  const labels: Record<string, string> = {
    books: 'Books',
    movies: 'Movies',
    tv: 'TV',
    music: 'Music',
    games: 'Games',
    podcasts: 'Podcasts',
  };
  return labels[category] ?? category;
}

export function getStatusLabel(status: MediaStatus): string {
  const labels: Record<MediaStatus, string> = {
    completed: 'Completed',
    'currently-engaging': 'Currently Engaging',
    'want-to-experience': 'Want to Experience',
  };
  return labels[status];
}

export function getStatusColor(status: MediaStatus): string {
  const colors: Record<MediaStatus, string> = {
    completed: 'bg-emerald-50 text-emerald-700 border border-emerald-200',
    'currently-engaging': 'bg-blue-50 text-blue-700 border border-blue-200',
    'want-to-experience': 'bg-amber-50 text-amber-700 border border-amber-200',
  };
  return colors[status];
}

// Returns Tailwind gradient classes for a category's cover art placeholder
export function getCategoryColor(category: MediaCategory): string {
  const colors: Record<MediaCategory, string> = {
    books: 'from-amber-900 to-amber-700',
    movies: 'from-stone-800 to-stone-600',
    tv: 'from-teal-900 to-teal-700',
    music: 'from-indigo-900 to-indigo-700',
    games: 'from-slate-800 to-slate-600',
    podcasts: 'from-rose-900 to-rose-700',
  };
  return colors[category];
}

export function getCategoryIcon(category: MediaCategory): string {
  const icons: Record<MediaCategory, string> = {
    books: '◈',
    movies: '◉',
    tv: '▣',
    music: '◎',
    games: '◆',
    podcasts: '◐',
  };
  return icons[category];
}

export function groupMediaByCategory(
  media: { category: MediaCategory }[]
): Record<MediaCategory, typeof media> {
  const categories: MediaCategory[] = ['books', 'movies', 'tv', 'music', 'games', 'podcasts'];
  const grouped = {} as Record<MediaCategory, typeof media>;

  categories.forEach((category) => {
    grouped[category] = media.filter((item) => item.category === category);
  });

  return grouped;
}

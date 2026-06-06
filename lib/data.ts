export type MediaStatus = 'completed' | 'currently-engaging' | 'want-to-experience';
export type MediaCategory = 'books' | 'movies' | 'tv' | 'music' | 'games' | 'podcasts';

export interface MediaItem {
  id: string;
  title: string;
  creator: string;
  category: MediaCategory;
  status: MediaStatus;
  rating: number;
  review?: string;
}

export interface CuratedList {
  id: string;
  title: string;
  description: string;
  itemCount: number;
  previewTitles: string[];
  lastUpdated: string;
  isPublic: boolean;
}

export interface Cohort {
  id: string;
  name: string;
  members: number;
  description: string;
  sharedInterests: string[];
  matchScore?: number;
}

export interface FeedActivity {
  id: string;
  userId: string;
  userName: string;
  action: string;
  mediaItem: {
    title: string;
    creator: string;
    category: MediaCategory;
  };
  rating?: number;
  review?: string;
  timestamp: string;
}

export const PLACEHOLDER_TASTE_SUMMARY =
  'You enjoy magical realism, existential comedy, and emotionally restrained storytelling. Your taste leans toward intimate narratives and artists who challenge convention without abandoning warmth.';

export const PLACEHOLDER_USER = {
  id: 'user-001',
  name: 'Alex Chen',
  bio: 'Chasing the feeling that good art leaves behind.',
  joinDate: 'February 2025',
};

export const PLACEHOLDER_MEDIA: MediaItem[] = [
  // Books
  {
    id: '1',
    title: 'Kafka on the Shore',
    creator: 'Haruki Murakami',
    category: 'books',
    status: 'completed',
    rating: 9,
    review: 'A masterpiece of magical realism and philosophical depth.',
  },
  {
    id: '7',
    title: 'The Brothers Karamazov',
    creator: 'Fyodor Dostoevsky',
    category: 'books',
    status: 'currently-engaging',
    rating: 0,
  },
  {
    id: '9',
    title: 'The Remains of the Day',
    creator: 'Kazuo Ishiguro',
    category: 'books',
    status: 'completed',
    rating: 10,
    review: 'Devastating in its restraint. Stevens will haunt me.',
  },
  {
    id: '10',
    title: 'Never Let Me Go',
    creator: 'Kazuo Ishiguro',
    category: 'books',
    status: 'want-to-experience',
    rating: 0,
  },
  // Movies
  {
    id: '2',
    title: 'In the Mood for Love',
    creator: 'Wong Kar-wai',
    category: 'movies',
    status: 'completed',
    rating: 10,
    review: 'Visual poetry. Every frame a painting, every silence a sentence.',
  },
  {
    id: '3',
    title: 'Dune: Part Two',
    creator: 'Denis Villeneuve',
    category: 'movies',
    status: 'completed',
    rating: 8,
  },
  {
    id: '11',
    title: 'Yi Yi',
    creator: 'Edward Yang',
    category: 'movies',
    status: 'completed',
    rating: 10,
    review: 'Three hours that feel necessary rather than long.',
  },
  {
    id: '12',
    title: 'The Tree of Life',
    creator: 'Terrence Malick',
    category: 'movies',
    status: 'want-to-experience',
    rating: 0,
  },
  // TV
  {
    id: '6',
    title: 'Severance',
    creator: 'Dan Erickson',
    category: 'tv',
    status: 'completed',
    rating: 9,
    review: 'Haunting. Every episode left me reeling.',
  },
  {
    id: '13',
    title: 'The Bear',
    creator: 'Christopher Storer',
    category: 'tv',
    status: 'currently-engaging',
    rating: 8,
  },
  {
    id: '14',
    title: 'I May Destroy You',
    creator: 'Michaela Coel',
    category: 'tv',
    status: 'completed',
    rating: 10,
    review: 'Raw and formally daring. Nothing else like it.',
  },
  // Music
  {
    id: '4',
    title: 'Carrie & Lowell',
    creator: 'Sufjan Stevens',
    category: 'music',
    status: 'completed',
    rating: 10,
    review: 'An elegy I return to when language fails.',
  },
  {
    id: '15',
    title: 'Fetch the Bolt Cutters',
    creator: 'Fiona Apple',
    category: 'music',
    status: 'completed',
    rating: 9,
  },
  {
    id: '16',
    title: 'For Emma, Forever Ago',
    creator: 'Bon Iver',
    category: 'music',
    status: 'want-to-experience',
    rating: 0,
  },
  // Games
  {
    id: '5',
    title: 'Elden Ring',
    creator: 'FromSoftware',
    category: 'games',
    status: 'currently-engaging',
    rating: 9,
  },
  {
    id: '17',
    title: 'Disco Elysium',
    creator: 'ZA/UM',
    category: 'games',
    status: 'completed',
    rating: 10,
    review: 'The most literary game ever made. Plays like a novel.',
  },
  {
    id: '18',
    title: 'Hollow Knight',
    creator: 'Team Cherry',
    category: 'games',
    status: 'want-to-experience',
    rating: 0,
  },
  // Podcasts
  {
    id: '8',
    title: 'Slow Burn',
    creator: 'Leon Neyfakh',
    category: 'podcasts',
    status: 'completed',
    rating: 8,
    review: 'Exceptional narrative journalism. Season 1 is essential.',
  },
  {
    id: '19',
    title: 'Conan O\'Brien Needs a Friend',
    creator: 'Conan O\'Brien',
    category: 'podcasts',
    status: 'currently-engaging',
    rating: 7,
  },
  {
    id: '20',
    title: 'You\'re Wrong About',
    creator: 'Michael Hobbes & Sarah Marshall',
    category: 'podcasts',
    status: 'want-to-experience',
    rating: 0,
  },
];

export const PLACEHOLDER_FAVORITES = PLACEHOLDER_MEDIA.filter((item) =>
  ['1', '2', '9', '17'].includes(item.id)
);

export const PLACEHOLDER_COHORTS: Cohort[] = [
  {
    id: 'cohort-1',
    name: 'Murakami & Wong Kar-wai Devotees',
    members: 234,
    description: 'Lovers of magical realism and visual poetry. We discuss the untranslatable feelings great art leaves behind.',
    sharedInterests: ['Kafka on the Shore', 'In the Mood for Love', 'Existential narratives', 'Slow cinema'],
    matchScore: 94,
  },
  {
    id: 'cohort-2',
    name: 'Sci-Fi & Philosophy Explorers',
    members: 512,
    description: 'Science fiction as a lens for examining the human condition. Villeneuve, LeGuin, and everything in between.',
    sharedInterests: ['Dune', 'Severance', 'Existential themes', 'Hard sci-fi'],
    matchScore: 81,
  },
  {
    id: 'cohort-3',
    name: 'Indie Games & Art House Film',
    members: 189,
    description: 'For those who believe games and cinema can be as formally adventurous as any other art form.',
    sharedInterests: ['FromSoftware', 'Disco Elysium', 'Experimental cinema', 'Narrative games'],
    matchScore: 76,
  },
  {
    id: 'cohort-4',
    name: 'Quiet Albums & Long Books',
    members: 341,
    description: 'Patient listeners and slow readers. We prefer albums that breathe and books that take their time.',
    sharedInterests: ['Sufjan Stevens', 'Ishiguro', 'Ambient music', 'Literary fiction'],
    matchScore: 88,
  },
  {
    id: 'cohort-5',
    name: 'The Criterion Corner',
    members: 678,
    description: 'Serious cinephiles cataloguing everything. If it has a spine number, we have an opinion on it.',
    sharedInterests: ['Yi Yi', 'Edward Yang', 'World cinema', 'Film restoration'],
    matchScore: 72,
  },
  {
    id: 'cohort-6',
    name: 'Television as Literature',
    members: 423,
    description: 'We treat prestige TV with the same rigour as novels. Michaela Coel is this generation\'s best.',
    sharedInterests: ['I May Destroy You', 'The Bear', 'Severance', 'Auteur television'],
    matchScore: 85,
  },
];

export const PLACEHOLDER_LISTS: CuratedList[] = [
  {
    id: 'list-1',
    title: 'Films for Slow Mornings',
    description: 'Quiet films to watch with coffee before the world wakes up.',
    itemCount: 12,
    previewTitles: ['In the Mood for Love', 'Paterson', 'Yi Yi', 'Lost in Translation'],
    lastUpdated: '3 days ago',
    isPublic: true,
  },
  {
    id: 'list-2',
    title: 'Books That Rewired Something',
    description: 'Not necessarily the best books. The ones that changed how I see.',
    itemCount: 8,
    previewTitles: ['Kafka on the Shore', 'The Remains of the Day', 'Stoner', 'Gilead'],
    lastUpdated: '1 week ago',
    isPublic: true,
  },
  {
    id: 'list-3',
    title: 'Soundtracks to Existential Crises',
    description: 'Albums that understand you\'re both fine and falling apart.',
    itemCount: 15,
    previewTitles: ['Carrie & Lowell', 'Fetch the Bolt Cutters', 'A Moon Shaped Pool', 'For Emma'],
    lastUpdated: '2 weeks ago',
    isPublic: false,
  },
  {
    id: 'list-4',
    title: 'Games With Something to Say',
    description: 'The canon of games that earn the word "literary."',
    itemCount: 6,
    previewTitles: ['Disco Elysium', 'Elden Ring', 'Hades', 'Undertale'],
    lastUpdated: '1 month ago',
    isPublic: true,
  },
];

export const PLACEHOLDER_FEED_ACTIVITY: FeedActivity[] = [
  {
    id: 'activity-1',
    userId: 'user-002',
    userName: 'Jordan Martinez',
    action: 'rated',
    mediaItem: {
      title: 'Norwegian Wood',
      creator: 'Haruki Murakami',
      category: 'books',
    },
    rating: 9,
    review: 'A profound meditation on loss and the way grief reshapes everything we thought we knew.',
    timestamp: '2 hours ago',
  },
  {
    id: 'activity-2',
    userId: 'user-003',
    userName: 'Sam Okonkwo',
    action: 'completed',
    mediaItem: {
      title: 'Eternal Sunshine of the Spotless Mind',
      creator: 'Michel Gondry',
      category: 'movies',
    },
    rating: 10,
    review: 'A heartbreaking look at memory and the things we erase only to rediscover.',
    timestamp: '5 hours ago',
  },
  {
    id: 'activity-3',
    userId: 'user-004',
    userName: 'Lisa Wong',
    action: 'rated',
    mediaItem: {
      title: 'Carrie & Lowell',
      creator: 'Sufjan Stevens',
      category: 'music',
    },
    rating: 10,
    review: 'An intimate masterpiece about grief and reconciliation. Returns to it every autumn.',
    timestamp: '8 hours ago',
  },
  {
    id: 'activity-4',
    userId: 'user-005',
    userName: 'Marcus Johnson',
    action: 'started',
    mediaItem: {
      title: 'Baldur\'s Gate 3',
      creator: 'Larian Studios',
      category: 'games',
    },
    review: 'The scope and depth are overwhelming in the best way. Nothing prepares you for Act 2.',
    timestamp: '12 hours ago',
  },
  {
    id: 'activity-5',
    userId: 'user-006',
    userName: 'Priya Patel',
    action: 'rated',
    mediaItem: {
      title: 'I May Destroy You',
      creator: 'Michaela Coel',
      category: 'tv',
    },
    rating: 10,
    review: 'The most formally brave television I have ever seen. Coel writes about trauma without flinching and without exploiting.',
    timestamp: '1 day ago',
  },
  {
    id: 'activity-6',
    userId: 'user-007',
    userName: 'Thomas Reeves',
    action: 'completed',
    mediaItem: {
      title: 'The Remains of the Day',
      creator: 'Kazuo Ishiguro',
      category: 'books',
    },
    rating: 10,
    review: 'Read it as a book about repression. Then as a book about Britain. Then as a book about yourself.',
    timestamp: '1 day ago',
  },
];

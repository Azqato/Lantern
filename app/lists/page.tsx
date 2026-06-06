import { PLACEHOLDER_LISTS } from '@/lib/data';

export default function ListsPage() {
  return (
    <main className="min-h-screen bg-lantern-50">
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Header */}
        <div className="flex items-end justify-between mb-10 border-b border-lantern-200 pb-6">
          <div>
            <h1 className="text-4xl font-serif font-bold text-lantern-900 mb-1">Lists</h1>
            <p className="text-lantern-500 text-sm">Curated collections of what moves you</p>
          </div>
          <button className="button-primary text-sm">+ New List</button>
        </div>

        {/* Lists Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PLACEHOLDER_LISTS.map((list) => (
            <article
              key={list.id}
              className="bg-white border border-lantern-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow cursor-pointer group"
            >
              {/* Cover mosaic */}
              <div className="grid grid-cols-4 h-24">
                {[...Array(4)].map((_, i) => {
                  const colors = [
                    'from-amber-800 to-amber-600',
                    'from-stone-700 to-stone-500',
                    'from-indigo-900 to-indigo-700',
                    'from-teal-900 to-teal-700',
                  ];
                  const title = list.previewTitles[i] ?? '';
                  return (
                    <div
                      key={i}
                      className={`bg-gradient-to-b ${colors[i]} flex items-end justify-start p-2`}
                    >
                      <span className="text-white font-serif font-bold text-3xl leading-none opacity-20 select-none">
                        {title[0] ?? ''}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h2 className="font-serif font-bold text-lg text-lantern-900 group-hover:text-lantern-700 transition-colors leading-snug">
                    {list.title}
                  </h2>
                  {!list.isPublic && (
                    <span className="text-xs bg-lantern-100 text-lantern-500 px-2 py-0.5 rounded flex-shrink-0 mt-0.5">
                      Private
                    </span>
                  )}
                </div>
                <p className="text-sm text-lantern-500 italic leading-relaxed mb-4">
                  {list.description}
                </p>

                {/* Preview titles */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {list.previewTitles.slice(0, 3).map((title, i) => (
                    <span
                      key={i}
                      className="text-xs bg-lantern-50 border border-lantern-200 text-lantern-600 px-2 py-0.5 rounded"
                    >
                      {title}
                    </span>
                  ))}
                  {list.itemCount > 3 && (
                    <span className="text-xs text-lantern-400 px-2 py-0.5">
                      +{list.itemCount - 3} more
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between text-xs text-lantern-400">
                  <span>{list.itemCount} items</span>
                  <span>Updated {list.lastUpdated}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Empty state placeholder for future lists */}
        <div className="mt-6 border border-dashed border-lantern-300 rounded-lg p-8 text-center">
          <p className="font-serif text-lantern-500 mb-1">Start a new list</p>
          <p className="text-xs text-lantern-400 mb-4">
            Group films by feeling, books by season, albums by memory.
          </p>
          <button className="button-secondary text-sm">+ Create List</button>
        </div>
      </div>
    </main>
  );
}

import { PLACEHOLDER_COHORTS } from '@/lib/data';

export default function CohortsPage() {
  return (
    <main className="min-h-screen bg-lantern-50">
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Header */}
        <div className="mb-10 border-b border-lantern-200 pb-6">
          <h1 className="text-4xl font-serif font-bold text-lantern-900 mb-1">Smart Cohorts</h1>
          <p className="text-lantern-500 text-sm">
            AI-generated micro-communities built from overlapping taste profiles
          </p>
        </div>

        {/* Your Match Score Banner */}
        <div className="bg-white border border-lantern-200 rounded-lg p-6 mb-8 flex items-center gap-6">
          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-lantern-600 to-lantern-800 flex items-center justify-center">
            <span className="text-white font-serif font-bold text-lg">A</span>
          </div>
          <div className="flex-1">
            <p className="text-sm font-semibold text-lantern-900 mb-0.5">Your taste has been mapped</p>
            <p className="text-xs text-lantern-500 leading-relaxed">
              Based on your ratings and collection, we found {PLACEHOLDER_COHORTS.length} cohorts with meaningful overlap.
              Match scores reflect alignment with your taste graph.
            </p>
          </div>
          <div className="text-right flex-shrink-0">
            <div className="text-2xl font-serif font-bold text-lantern-900">
              {PLACEHOLDER_COHORTS.length}
            </div>
            <div className="text-xs text-lantern-500 uppercase tracking-wide">Matches</div>
          </div>
        </div>

        {/* Cohorts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PLACEHOLDER_COHORTS.sort((a, b) => (b.matchScore ?? 0) - (a.matchScore ?? 0)).map((cohort) => (
            <article
              key={cohort.id}
              className="bg-white border border-lantern-200 rounded-lg p-5 hover:shadow-md transition-shadow flex flex-col"
            >
              {/* Match score + member count */}
              <div className="flex items-center justify-between mb-3">
                {cohort.matchScore !== undefined ? (
                  <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full">
                    {cohort.matchScore}% match
                  </span>
                ) : (
                  <span />
                )}
                <span className="text-xs text-lantern-400">
                  {cohort.members.toLocaleString()} members
                </span>
              </div>

              {/* Name & description */}
              <h2 className="font-serif font-bold text-base text-lantern-900 mb-2 leading-snug">
                {cohort.name}
              </h2>
              <p className="text-xs text-lantern-500 leading-relaxed mb-4 flex-1">
                {cohort.description}
              </p>

              {/* Shared interests */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {cohort.sharedInterests.map((interest, i) => (
                  <span
                    key={i}
                    className="text-xs bg-lantern-50 border border-lantern-200 text-lantern-600 px-2 py-0.5 rounded"
                  >
                    {interest}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="flex gap-2">
                <button className="flex-1 button-primary text-xs justify-center py-2">
                  Join Cohort
                </button>
                <button className="button-secondary text-xs px-3 py-2">
                  Preview
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Footer note */}
        <p className="text-center text-xs text-lantern-400 mt-10">
          Cohorts are regenerated weekly as your taste profile evolves.
        </p>
      </div>
    </main>
  );
}

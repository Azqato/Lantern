import { Cohort } from '@/lib/data';

interface CohortsWidgetProps {
  cohorts: Cohort[];
}

export function CohortsWidget({ cohorts }: CohortsWidgetProps) {
  return (
    <div className="bg-white border border-lantern-200 rounded-lg p-6 sticky top-24">
      <div className="mb-5">
        <h3 className="font-serif font-bold text-lg text-lantern-900">Smart Cohorts</h3>
        <p className="text-xs text-lantern-500 mt-1">
          AI-grouped communities by shared cultural taste
        </p>
      </div>

      <div className="space-y-5">
        {cohorts.map((cohort) => (
          <div key={cohort.id} className="pb-5 border-b border-lantern-100 last:border-b-0 last:pb-0">
            <div className="flex items-start justify-between gap-2 mb-1">
              <h4 className="font-serif font-semibold text-sm text-lantern-900 leading-snug">
                {cohort.name}
              </h4>
              {cohort.matchScore !== undefined && (
                <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full flex-shrink-0">
                  {cohort.matchScore}%
                </span>
              )}
            </div>
            <p className="text-xs text-lantern-500 mb-2 leading-relaxed line-clamp-2">
              {cohort.description}
            </p>
            <p className="text-xs text-lantern-400 mb-3">
              {cohort.members.toLocaleString()} members
            </p>
            <div className="flex flex-wrap gap-1 mb-3">
              {cohort.sharedInterests.slice(0, 3).map((interest, i) => (
                <span
                  key={i}
                  className="text-xs bg-lantern-50 border border-lantern-200 text-lantern-600 px-2 py-0.5 rounded"
                >
                  {interest}
                </span>
              ))}
            </div>
            <button className="w-full text-xs font-medium text-lantern-700 border border-lantern-300 rounded py-1.5 hover:bg-lantern-50 transition-colors">
              Join Cohort
            </button>
          </div>
        ))}
      </div>

      <button className="w-full mt-5 text-xs text-lantern-500 hover:text-lantern-700 transition-colors py-1">
        Explore all cohorts →
      </button>
    </div>
  );
}

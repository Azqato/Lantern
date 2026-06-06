import { FeedActivity } from '@/lib/data';
import { getCategoryLabel } from '@/lib/utils';

interface FeedCardProps {
  activity: FeedActivity;
}

export function FeedCard({ activity }: FeedCardProps) {
  const actionLabel =
    activity.action === 'rated'
      ? 'rated'
      : activity.action === 'completed'
        ? 'finished'
        : activity.action === 'started'
          ? 'started'
          : 'logged';

  return (
    <article className="bg-white border border-lantern-200 rounded-lg p-6 mb-4 hover:shadow-md transition-shadow">
      {/* User row */}
      <div className="flex items-center gap-3 mb-5">
        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-lantern-500 to-lantern-700 flex items-center justify-center flex-shrink-0">
          <span className="text-xs font-bold text-white font-serif">
            {activity.userName.split(' ').map((n) => n[0]).join('')}
          </span>
        </div>
        <div className="flex-1 min-w-0">
          <span className="font-semibold text-lantern-900 text-sm">{activity.userName}</span>
          <span className="text-lantern-500 text-sm"> {actionLabel} </span>
          <span className="font-serif font-semibold text-lantern-900 text-sm italic">
            {activity.mediaItem.title}
          </span>
        </div>
        <span className="text-xs text-lantern-400 flex-shrink-0">{activity.timestamp}</span>
      </div>

      {/* Media block */}
      <div className="flex gap-4 mb-4">
        {/* Thumbnail */}
        <div className="w-11 h-16 rounded bg-gradient-to-b from-lantern-400 to-lantern-600 flex-shrink-0 flex items-center justify-center">
          <span className="text-white font-serif font-bold text-lg opacity-40">
            {activity.mediaItem.title[0]}
          </span>
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="font-serif font-semibold text-lantern-900 leading-tight mb-0.5">
            {activity.mediaItem.title}
          </h3>
          <p className="text-xs text-lantern-500 mb-2">{activity.mediaItem.creator}</p>
          <div className="flex items-center gap-2">
            <span className="text-xs bg-lantern-100 text-lantern-600 px-2 py-0.5 rounded font-medium">
              {getCategoryLabel(activity.mediaItem.category)}
            </span>
            {activity.rating !== undefined && (
              <span className="text-xs font-semibold text-lantern-700">
                {activity.rating}
                <span className="font-normal text-lantern-400">/10</span>
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Review */}
      {activity.review && (
        <blockquote className="border-l-2 border-lantern-300 pl-4 py-0.5">
          <p className="text-sm text-lantern-600 italic leading-relaxed">
            &ldquo;{activity.review}&rdquo;
          </p>
        </blockquote>
      )}
    </article>
  );
}

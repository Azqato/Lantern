'use client';

import { MediaItem } from '@/lib/data';
import { getCategoryColor, getStatusColor, getStatusLabel } from '@/lib/utils';

interface MediaCardProps {
  item: MediaItem;
  size?: 'default' | 'large';
}

export function MediaCard({ item, size = 'default' }: MediaCardProps) {
  const gradientClass = getCategoryColor(item.category);
  const initial = item.title.replace(/^(A |An |The )/, '')[0].toUpperCase();

  return (
    <div className="group cursor-pointer">
      {/* Cover Art */}
      <div className={`relative w-full ${size === 'large' ? 'aspect-[2/3]' : 'aspect-[2/3]'} mb-3 rounded overflow-hidden`}>
        <div className={`w-full h-full bg-gradient-to-b ${gradientClass} flex items-end justify-start p-3`}>
          <span
            className="font-serif font-bold text-white select-none leading-none"
            style={{ fontSize: size === 'large' ? '5rem' : '3.5rem', opacity: 0.18 }}
          >
            {initial}
          </span>
        </div>

        {/* Status dot */}
        <div className="absolute top-2 right-2">
          {item.status === 'completed' && (
            <div className="w-2 h-2 rounded-full bg-emerald-400 ring-2 ring-white/30" title="Completed" />
          )}
          {item.status === 'currently-engaging' && (
            <div className="w-2 h-2 rounded-full bg-blue-400 ring-2 ring-white/30" title="Currently Engaging" />
          )}
          {item.status === 'want-to-experience' && (
            <div className="w-2 h-2 rounded-full bg-amber-400 ring-2 ring-white/30" title="Want to Experience" />
          )}
        </div>

        {/* Rating overlay on hover */}
        {item.rating > 0 && (
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
            <span className="text-white font-serif font-bold text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {item.rating}
              <span className="text-lg font-normal opacity-70">/10</span>
            </span>
          </div>
        )}
      </div>

      {/* Metadata */}
      <div className="space-y-1">
        <h4 className="font-serif font-semibold text-sm leading-snug text-lantern-900 line-clamp-2 group-hover:text-lantern-700 transition-colors">
          {item.title}
        </h4>
        <p className="text-xs text-lantern-500 truncate">{item.creator}</p>

        <div className="flex items-center justify-between pt-1">
          <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${getStatusColor(item.status)}`}>
            {getStatusLabel(item.status)}
          </span>
          {item.rating > 0 && (
            <span className="text-xs font-semibold text-lantern-600 tabular-nums">
              {item.rating}<span className="text-lantern-400 font-normal">/10</span>
            </span>
          )}
        </div>

        {item.review && (
          <p className="text-xs text-lantern-500 line-clamp-2 italic leading-relaxed pt-0.5">
            {item.review}
          </p>
        )}
      </div>
    </div>
  );
}

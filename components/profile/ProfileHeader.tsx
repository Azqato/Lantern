import { PLACEHOLDER_USER, PLACEHOLDER_TASTE_SUMMARY, PLACEHOLDER_MEDIA } from '@/lib/data';

export function ProfileHeader() {
  const completed = PLACEHOLDER_MEDIA.filter((m) => m.status === 'completed').length;
  const inProgress = PLACEHOLDER_MEDIA.filter((m) => m.status === 'currently-engaging').length;
  const rated = PLACEHOLDER_MEDIA.filter((m) => m.rating > 0).length;

  return (
    <div className="bg-white border-b border-lantern-200 mb-10">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Profile Info */}
        <div className="flex items-start gap-8 mb-8">
          {/* Avatar */}
          <div className="flex-shrink-0">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-lantern-600 to-lantern-800 flex items-center justify-center ring-4 ring-lantern-100">
              <span className="text-2xl font-serif font-bold text-white">
                {PLACEHOLDER_USER.name[0]}
              </span>
            </div>
          </div>

          {/* Name & Bio */}
          <div className="flex-1 min-w-0">
            <h1 className="text-3xl font-serif font-bold text-lantern-900 mb-1 leading-tight">
              {PLACEHOLDER_USER.name}
            </h1>
            <p className="text-lantern-600 mb-4 text-sm leading-relaxed">{PLACEHOLDER_USER.bio}</p>

            {/* Stats Row */}
            <div className="flex items-center gap-6">
              <div className="text-center">
                <div className="text-xl font-serif font-bold text-lantern-900">{PLACEHOLDER_MEDIA.length}</div>
                <div className="text-xs text-lantern-500 uppercase tracking-wide">Catalogued</div>
              </div>
              <div className="w-px h-8 bg-lantern-200" />
              <div className="text-center">
                <div className="text-xl font-serif font-bold text-lantern-900">{completed}</div>
                <div className="text-xs text-lantern-500 uppercase tracking-wide">Completed</div>
              </div>
              <div className="w-px h-8 bg-lantern-200" />
              <div className="text-center">
                <div className="text-xl font-serif font-bold text-lantern-900">{inProgress}</div>
                <div className="text-xs text-lantern-500 uppercase tracking-wide">In Progress</div>
              </div>
              <div className="w-px h-8 bg-lantern-200" />
              <div className="text-center">
                <div className="text-xl font-serif font-bold text-lantern-900">{rated}</div>
                <div className="text-xs text-lantern-500 uppercase tracking-wide">Rated</div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 flex-shrink-0">
            <p className="text-xs text-lantern-400">Member since {PLACEHOLDER_USER.joinDate}</p>
            <button className="button-secondary text-sm">Edit Profile</button>
          </div>
        </div>

        {/* AI Taste Summary */}
        <div className="border-l-2 border-lantern-700 pl-6 py-1">
          <p className="text-xs font-semibold uppercase tracking-widest text-lantern-500 mb-2">
            Taste Profile
          </p>
          <p className="text-base leading-relaxed text-lantern-800 font-serif italic">
            &ldquo;{PLACEHOLDER_TASTE_SUMMARY}&rdquo;
          </p>
        </div>
      </div>
    </div>
  );
}

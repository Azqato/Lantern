'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Navbar() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  const navItems = [
    { href: '/profile', label: 'Profile' },
    { href: '/feed', label: 'Feed' },
    { href: '/search', label: 'Search' },
    { href: '/lists', label: 'Lists' },
    { href: '/cohorts', label: 'Cohorts' },
  ];

  return (
    <nav className="bg-white border-b border-lantern-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 bg-lantern-700 rounded-full flex items-center justify-center">
              <span className="text-white font-serif font-bold">L</span>
            </div>
            <span className="text-xl font-serif font-bold text-lantern-900">Lantern</span>
          </Link>

          <div className="flex items-center gap-8">
            {navItems.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`text-sm font-medium transition-colors ${
                  isActive(href)
                    ? 'text-lantern-700 border-b-2 border-lantern-700 pb-2'
                    : 'text-lantern-600 hover:text-lantern-900 pb-2'
                }`}
              >
                {label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button className="button-ghost">Sign In</button>
          </div>
        </div>
      </div>
    </nav>
  );
}

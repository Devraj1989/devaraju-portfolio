import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const NAV_LINKS = [
  { href: '#journey', label: 'Click to Profit' },
  { href: '#framework', label: 'Framework' },
  { href: '#work', label: 'Case Studies' },
  { href: '#systems', label: 'Systems' },
  { href: '#experience', label: 'Experience' },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-zinc-200/80 bg-[#FAFAFA]/95 backdrop-blur-md dark:border-zinc-800/80 dark:bg-zinc-950/95">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 px-4 py-3.5 sm:gap-8 sm:px-8">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#top"
          className="font-display text-lg font-bold tracking-tight text-zinc-950 whitespace-nowrap shrink-0 sm:text-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-700 dark:text-zinc-50 dark:focus-visible:outline-blue-400"
        >
          Devaraju Pichchuka
        </a>

        {/* Zone 2: 5 concise single-line text nav links */}
        <nav
          aria-label="Primary navigation"
          className="hidden lg:flex items-center gap-7 text-[15px] font-medium text-zinc-600 dark:text-zinc-300"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="whitespace-nowrap shrink-0 py-1 transition-colors duration-150 hover:text-zinc-950 hover:underline hover:decoration-blue-700/60 hover:underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-700 dark:hover:text-white dark:hover:decoration-blue-400/70"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 primary action + compact mobile menu trigger */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#contact"
            className="hidden sm:inline-flex min-h-[42px] items-center justify-center rounded-lg bg-blue-700 px-5 py-2 text-[15px] font-semibold text-white whitespace-nowrap shrink-0 transition-colors duration-150 hover:bg-blue-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 dark:bg-blue-600 dark:text-white dark:hover:bg-blue-500"
          >
            Let&apos;s Talk
          </a>
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-zinc-200 bg-white text-zinc-900 transition-colors hover:bg-zinc-100 lg:hidden dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav
          aria-label="Mobile navigation"
          className="border-t border-zinc-200 bg-white px-4 py-4 lg:hidden dark:border-zinc-800 dark:bg-zinc-900"
        >
          <div className="flex flex-col divide-y divide-zinc-100 dark:divide-zinc-800">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="py-3.5 text-base font-medium text-zinc-800 hover:text-blue-700 dark:text-zinc-200 dark:hover:text-blue-400"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4">
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="flex min-h-[46px] w-full items-center justify-center rounded-lg bg-blue-700 px-5 py-2.5 text-base font-semibold text-white dark:bg-blue-600"
              >
                Let&apos;s Talk
              </a>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}

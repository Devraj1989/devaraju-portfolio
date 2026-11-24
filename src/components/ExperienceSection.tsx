import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import { EXPERIENCE_TIMELINE } from '../data/portfolioData';

export function ExperienceSection() {
  const [filterTier, setFilterTier] = useState<'all' | 'leadership'>('all');
  const [expandedIds, setExpandedIds] = useState<Record<string, boolean>>({
    spocket: true,
    'geny-medium': true,
  });

  const visibleRoles =
    filterTier === 'all'
      ? EXPERIENCE_TIMELINE
      : EXPERIENCE_TIMELINE.filter((role) => role.tier === 'leadership');

  const toggleRole = (id: string) => {
    setExpandedIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section
      id="experience"
      className="relative border-b border-zinc-200 py-16 sm:py-22 dark:border-zinc-800"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-24 left-3 hidden -rotate-90 origin-top-left font-mono text-[11px] tracking-[0.2em] text-zinc-400 xl:block dark:text-zinc-600"
      >
        CAREER TIMELINE 2013–2026
      </div>

      <div className="mx-auto max-w-[1200px] px-4 sm:px-8">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold tracking-wide text-blue-700 dark:text-blue-400">
              12+ Years Track Record
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl dark:text-white">
              Experience &amp;{' '}
              <span className="text-blue-700 dark:text-blue-400">
                leadership
              </span>
            </h2>
            <p className="mt-3 text-lg leading-relaxed text-zinc-600 dark:text-zinc-300">
              Progressing from Google Partner agency development to leading 15+ specialists and
              owning global SaaS unit economics.
            </p>
          </div>

          <div
            role="tablist"
            aria-label="Filter career timeline"
            className="flex flex-wrap items-center gap-1 self-start rounded-lg border border-zinc-200 bg-white p-1 sm:self-auto dark:border-zinc-800 dark:bg-zinc-900"
          >
            <button
              type="button"
              role="tab"
              aria-selected={filterTier === 'all'}
              onClick={() => setFilterTier('all')}
              className={`min-h-[40px] rounded-md px-3.5 py-2 text-sm font-semibold whitespace-nowrap shrink-0 transition-colors ${
                filterTier === 'all'
                  ? 'bg-blue-700 text-white dark:bg-blue-600'
                  : 'text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white'
              }`}
            >
              All 7 Roles (2013–2026)
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={filterTier === 'leadership'}
              onClick={() => setFilterTier('leadership')}
              className={`min-h-[40px] rounded-md px-3.5 py-2 text-sm font-semibold whitespace-nowrap shrink-0 transition-colors ${
                filterTier === 'leadership'
                  ? 'bg-blue-700 text-white dark:bg-blue-600'
                  : 'text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white'
              }`}
            >
              Senior Leadership
            </button>
          </div>
        </div>

        <ul className="mt-9 divide-y divide-zinc-200 border-t border-b border-zinc-200 dark:divide-zinc-800 dark:border-zinc-800">
          {visibleRoles.map((item) => {
            const isExpanded = Boolean(expandedIds[item.id]);
            return (
              <li key={item.id} className="py-7">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-12 md:gap-8">
                  <div className="md:col-span-3">
                    <div className="font-mono text-sm font-medium text-zinc-600 tabular-nums dark:text-zinc-400">
                      {item.period}
                    </div>
                    <div className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                      {item.location}
                    </div>
                  </div>

                  <div className="md:col-span-9">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <h3 className="font-display text-xl font-bold text-zinc-950 dark:text-white">
                          {item.role}
                        </h3>
                        <div className="mt-1 text-base font-medium text-blue-700 dark:text-blue-400">
                          {item.company}
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() => toggleRole(item.id)}
                        aria-expanded={isExpanded}
                        className="inline-flex min-h-[38px] items-center gap-1.5 rounded-md border border-zinc-200 bg-white px-3 py-1.5 text-sm font-medium text-zinc-700 whitespace-nowrap shrink-0 transition-colors hover:bg-zinc-100 hover:text-zinc-950 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800"
                      >
                        {isExpanded ? (
                          <>
                            Hide details
                            <ChevronUp className="h-4 w-4" aria-hidden="true" />
                          </>
                        ) : (
                          <>
                            View details
                            <ChevronDown className="h-4 w-4" aria-hidden="true" />
                          </>
                        )}
                      </button>
                    </div>

                    <p className="mt-3 text-base leading-relaxed text-zinc-600 dark:text-zinc-300">
                      {item.summary}
                    </p>

                    {item.recognition && (
                      <p className="mt-2.5 text-sm font-medium text-emerald-700 dark:text-emerald-400">
                        Recognition: {item.recognition}
                      </p>
                    )}

                    {isExpanded && (
                      <ul className="mt-4 space-y-2.5 border-t border-zinc-100 pt-4 text-base leading-relaxed text-zinc-700 dark:border-zinc-800 dark:text-zinc-300">
                        {item.highlights.map((bullet) => (
                          <li key={bullet} className="flex items-start gap-2.5">
                            <span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-blue-700 shrink-0 dark:bg-blue-400" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

import { ArrowRight, ArrowUpRight, Check, X } from 'lucide-react';
import { useEffect } from 'react';
import {
  CASE_STUDIES,
  CaseStudy,
  CaseStudyCategory,
  GROWTH_PILLARS,
} from '../data/portfolioData';
import {
  Icon3DAttributionPrism,
  Icon3DClickTarget,
  Icon3DCompass,
  Icon3DFunnel,
  Icon3DProfitChart,
  Icon3DRevenueCoins,
} from './Icons3D';

interface CaseStudiesSectionProps {
  activeCategory: CaseStudyCategory;
  onCategoryChange: (category: CaseStudyCategory) => void;
  activePillarFilter: number | null;
  onClearPillarFilter: () => void;
  selectedCaseStudyId: string | null;
  onSelectCaseStudy: (id: string | null) => void;
}

const FILTER_TABS: { id: CaseStudyCategory; label: string }[] = [
  { id: 'all', label: 'All Work' },
  { id: 'saas', label: 'SaaS Paid Search' },
  { id: 'attribution', label: 'Attribution & CRM' },
  { id: 'ecommerce', label: 'E-Commerce & Scale' },
];

const STUDY_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  'alidrop-turnaround': Icon3DRevenueCoins,
  'spocket-brand-split': Icon3DClickTarget,
  'dropshiptool-cohort': Icon3DFunnel,
  'geny-crm-attribution': Icon3DAttributionPrism,
  'spocket-geo-recovery': Icon3DCompass,
  'ting-au-ecommerce': Icon3DProfitChart,
};

const SHORT_TITLES: Record<string, string> = {
  'alidrop-turnaround': 'Alidrop (2.48x)',
  'spocket-brand-split': 'Spocket Non-Brand (2.47x)',
  'dropshiptool-cohort': 'Dropshiptool (3.91x)',
  'geny-crm-attribution': 'Geny Medium CRM',
  'spocket-geo-recovery': 'Spocket Geo Recovery',
  'ting-au-ecommerce': 'Ting Digital AU (4.0x)',
};

export function CaseStudiesSection({
  activeCategory,
  onCategoryChange,
  activePillarFilter,
  onClearPillarFilter,
  selectedCaseStudyId,
  onSelectCaseStudy,
}: CaseStudiesSectionProps) {
  const filteredStudies = CASE_STUDIES.filter((cs) => {
    const matchesCategory = activeCategory === 'all' || cs.category === activeCategory;
    const matchesPillar = activePillarFilter === null || cs.pillars.includes(activePillarFilter);
    return matchesCategory && matchesPillar;
  });

  const activeStudy: CaseStudy | undefined = CASE_STUDIES.find(
    (cs) => cs.id === selectedCaseStudyId
  );

  const activePillarInfo = activePillarFilter
    ? GROWTH_PILLARS.find((p) => p.id === activePillarFilter)
    : null;

  useEffect(() => {
    if (!activeStudy) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onSelectCaseStudy(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeStudy, onSelectCaseStudy]);

  return (
    <section
      id="work"
      className="relative border-b border-zinc-200 py-16 sm:py-20 dark:border-zinc-800"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-24 left-3 hidden -rotate-90 origin-top-left font-mono text-[11px] tracking-[0.2em] text-zinc-400 xl:block dark:text-zinc-600"
      >
        VERIFIED CASE STUDIES
      </div>

      <div className="mx-auto max-w-[1160px] px-5 sm:px-8">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-wide text-blue-700 dark:text-blue-400">
              Proof &amp; Turnarounds
            </p>
            <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-zinc-950 sm:text-3xl dark:text-white">
              Verified{' '}
              <em className="font-semibold italic text-blue-700 dark:text-blue-400">
                case studies
              </em>
            </h2>
            <p className="mt-2.5 text-base leading-relaxed text-zinc-600 dark:text-zinc-300">
              Scannable Problem → Execution → Outcome breakdowns across SaaS, CRM, and e-commerce.
            </p>
          </div>

          {/* Interactive Filter Tabs */}
          <div
            role="tablist"
            aria-label="Filter case studies by domain"
            className="flex flex-wrap items-center gap-1 rounded-lg border border-zinc-200 bg-white p-1 dark:border-zinc-800 dark:bg-zinc-900"
          >
            {FILTER_TABS.map((tab) => {
              const active = activeCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => onCategoryChange(tab.id)}
                  className={`rounded-md px-3 py-1.5 text-xs font-semibold whitespace-nowrap shrink-0 transition-colors duration-150 ${
                    active
                      ? 'bg-blue-700 text-white dark:bg-blue-600'
                      : 'text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Quick-Jump Index Strip for Easy Navigation */}
        {filteredStudies.length > 1 && (
          <nav
            aria-label="Quick jump to case studies"
            className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 border-y border-zinc-200 py-3 text-xs dark:border-zinc-800"
          >
            <span className="font-mono font-medium text-zinc-500 dark:text-zinc-400">
              Quick jump:
            </span>
            {filteredStudies.map((study, index) => (
              <a
                key={study.id}
                href={`#case-${study.id}`}
                className="font-medium text-zinc-700 whitespace-nowrap transition-colors hover:text-blue-700 hover:underline hover:underline-offset-4 dark:text-zinc-300 dark:hover:text-blue-400"
              >
                <span className="font-mono text-zinc-400 dark:text-zinc-500">
                  0{index + 1}.
                </span>{' '}
                {SHORT_TITLES[study.id] ?? study.title}
              </a>
            ))}
          </nav>
        )}

        {activePillarInfo && (
          <div className="mt-6 flex flex-wrap items-center justify-between gap-3 rounded-lg border border-blue-200 bg-blue-50 px-4 py-2.5 text-xs dark:border-blue-500/40 dark:bg-zinc-900">
            <span className="text-zinc-700 dark:text-zinc-200">
              Showing case studies using{' '}
              <strong className="font-semibold text-blue-700 dark:text-blue-400">
                Pillar {activePillarInfo.number}: {activePillarInfo.title}
              </strong>
            </span>
            <button
              type="button"
              onClick={onClearPillarFilter}
              className="font-semibold text-zinc-900 underline underline-offset-4 hover:text-blue-700 dark:text-zinc-100 dark:hover:text-blue-400"
            >
              Clear pillar filter
            </button>
          </div>
        )}

        {filteredStudies.length === 0 ? (
          <div className="mt-8 rounded-2xl border border-zinc-200 bg-white p-8 text-center dark:border-zinc-800 dark:bg-zinc-900">
            <p className="text-sm text-zinc-600 dark:text-zinc-300">
              No case studies match this combination of domain and pillar filter.
            </p>
            <button
              type="button"
              onClick={() => {
                onCategoryChange('all');
                onClearPillarFilter();
              }}
              className="mt-3 rounded-lg bg-blue-700 px-4 py-2 text-xs font-semibold text-white dark:bg-blue-600"
            >
              Reset all filters
            </button>
          </div>
        ) : (
          <div className="mt-8 space-y-5">
            {filteredStudies.map((study, index) => {
              const Icon3D = STUDY_ICONS[study.id] ?? Icon3DProfitChart;
              return (
                <article
                  id={`case-${study.id}`}
                  key={study.id}
                  className="group rounded-2xl border border-zinc-200 bg-white p-6 transition-colors duration-150 hover:border-zinc-300 sm:p-7 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700"
                >
                  <div className="flex flex-col justify-between gap-4 border-b border-zinc-100 pb-5 sm:flex-row sm:items-start dark:border-zinc-800">
                    <div className="flex items-start gap-4">
                      <Icon3D className="mt-1 hidden h-11 w-11 shrink-0 sm:block" />
                      <div>
                        <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs text-zinc-500 dark:text-zinc-400">
                          <span className="font-mono font-medium text-blue-700 dark:text-blue-400">
                            Case 0{index + 1}
                          </span>
                          <span aria-hidden="true">·</span>
                          <span>{study.account}</span>
                          <span aria-hidden="true">·</span>
                          <span className="tabular-nums">{study.period}</span>
                          <span aria-hidden="true">·</span>
                          <span>{study.pillarLabels.join(' / ')}</span>
                        </div>
                        <h3 className="mt-1.5 font-display text-xl font-bold text-zinc-950 dark:text-white">
                          {study.title}
                        </h3>
                        <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">
                          {study.subtitle}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col items-start gap-2 sm:items-end shrink-0">
                      <span className="-rotate-1 font-mono text-base font-medium text-emerald-700 tabular-nums whitespace-nowrap transition-transform duration-150 group-hover:rotate-0 dark:text-emerald-400">
                        {study.headlineMetric}
                      </span>
                      <button
                        type="button"
                        onClick={() => onSelectCaseStudy(study.id)}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-700 whitespace-nowrap transition-colors hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                      >
                        Inspect click-to-profit flow
                        <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                      </button>
                    </div>
                  </div>

                  {/* Bullet-Pointed Scannable Problem / Execution / Outcome Grid */}
                  <div className="mt-5 grid grid-cols-1 gap-6 md:grid-cols-3">
                    <div>
                      <h4 className="text-xs font-semibold text-zinc-500 dark:text-zinc-400">
                        Problem
                      </h4>
                      <ul className="mt-2.5 space-y-2 text-sm leading-snug text-zinc-700 dark:text-zinc-300">
                        {study.problemPoints.map((point) => (
                          <li key={point} className="flex items-start gap-2">
                            <span
                              aria-hidden="true"
                              className="mt-2 h-1.5 w-1.5 rounded-full bg-zinc-400 shrink-0 dark:bg-zinc-500"
                            />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-xs font-semibold text-zinc-500 dark:text-zinc-400">
                        Execution
                      </h4>
                      <ul className="mt-2.5 space-y-2 text-sm leading-snug text-zinc-700 dark:text-zinc-300">
                        {study.actionPoints.map((point) => (
                          <li key={point} className="flex items-start gap-2">
                            <span
                              aria-hidden="true"
                              className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-700 shrink-0 dark:bg-blue-400"
                            />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-xs font-semibold text-emerald-700 dark:text-emerald-400">
                        Verified Outcome
                      </h4>
                      <ul className="mt-2.5 space-y-2 text-sm font-medium leading-snug text-emerald-700 dark:text-emerald-400">
                        {study.resultPoints.map((point) => (
                          <li key={point} className="flex items-start gap-2">
                            <Check className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>

      {/* Technical Architecture Modal */}
      {activeStudy && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="case-study-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-950/60 p-4 backdrop-blur-xs"
          onClick={() => onSelectCaseStudy(null)}
        >
          <div
            className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-zinc-200 bg-white p-6 shadow-2xl sm:p-8 dark:border-zinc-800 dark:bg-zinc-900"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 border-b border-zinc-200 pb-4 dark:border-zinc-800">
              <div>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">
                  {activeStudy.account} <span aria-hidden="true">·</span> {activeStudy.period}
                </p>
                <h3
                  id="case-study-modal-title"
                  className="mt-1.5 font-display text-xl font-bold text-zinc-950 sm:text-2xl dark:text-white"
                >
                  {activeStudy.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => onSelectCaseStudy(null)}
                aria-label="Close case study details"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-200 text-zinc-600 hover:bg-zinc-100 hover:text-zinc-950 shrink-0 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Mini Click -> Instrumentation -> Profit Visual Chain */}
            <div className="mt-5 grid grid-cols-1 gap-3 rounded-xl border border-zinc-200 bg-[#FAFAFA] p-4 sm:grid-cols-3 dark:border-zinc-800 dark:bg-zinc-950">
              <div className="flex items-center gap-2.5">
                <Icon3DClickTarget className="h-8 w-8 shrink-0" />
                <div className="min-w-0">
                  <div className="font-mono text-[10px] text-zinc-500 dark:text-zinc-400">
                    01. Channels
                  </div>
                  <div className="truncate text-xs font-semibold text-zinc-950 dark:text-white">
                    {activeStudy.technicalArchitecture.channels[0]}
                  </div>
                </div>
                <ArrowRight className="ml-auto hidden h-3.5 w-3.5 text-blue-700 sm:block" />
              </div>

              <div className="flex items-center gap-2.5">
                <Icon3DAttributionPrism className="h-8 w-8 shrink-0" />
                <div className="min-w-0">
                  <div className="font-mono text-[10px] text-zinc-500 dark:text-zinc-400">
                    02. Signal
                  </div>
                  <div className="truncate text-xs font-semibold text-zinc-950 dark:text-white">
                    Revenue &amp; CRM Sync
                  </div>
                </div>
                <ArrowRight className="ml-auto hidden h-3.5 w-3.5 text-emerald-700 sm:block" />
              </div>

              <div className="flex items-center gap-2.5">
                <Icon3DProfitChart className="h-8 w-8 shrink-0" />
                <div className="min-w-0">
                  <div className="font-mono text-[10px] text-zinc-500 dark:text-zinc-400">
                    03. Verified Outcome
                  </div>
                  <div className="truncate font-mono text-xs font-medium text-emerald-700 dark:text-emerald-400">
                    {activeStudy.headlineMetric}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-5 rounded-xl border border-zinc-200 bg-[#FAFAFA] p-4 dark:border-zinc-800 dark:bg-zinc-950">
              <div className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
                Headline Impact
              </div>
              <div className="mt-1 font-mono text-lg font-medium text-emerald-700 tabular-nums dark:text-emerald-400">
                {activeStudy.headlineMetric}
              </div>
              <p className="mt-1.5 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                {activeStudy.resultSummary}
              </p>
            </div>

            <div className="mt-6 space-y-5">
              <div>
                <h4 className="text-xs font-semibold text-zinc-500 dark:text-zinc-400">
                  Channels &amp; Platforms
                </h4>
                <p className="mt-1.5 text-sm text-zinc-950 dark:text-zinc-100">
                  {activeStudy.technicalArchitecture.channels.join(' · ')}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-semibold text-zinc-500 dark:text-zinc-400">
                  Tracking &amp; Instrumentation
                </h4>
                <ul className="mt-2 space-y-1.5 text-sm text-zinc-700 dark:text-zinc-300">
                  {activeStudy.technicalArchitecture.instrumentation.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-2 h-1 w-1 rounded-full bg-blue-700 shrink-0 dark:bg-blue-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-semibold text-zinc-500 dark:text-zinc-400">
                  Key Allocation Decisions
                </h4>
                <ul className="mt-2 space-y-1.5 text-sm text-zinc-700 dark:text-zinc-300">
                  {activeStudy.technicalArchitecture.decisions.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-2 h-1 w-1 rounded-full bg-blue-700 shrink-0 dark:bg-blue-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-7 flex items-center justify-between border-t border-zinc-200 pt-4 text-xs text-zinc-500 dark:border-zinc-800 dark:text-zinc-400">
              <span>Pillars applied: {activeStudy.pillarLabels.join(' · ')}</span>
              <button
                type="button"
                onClick={() => onSelectCaseStudy(null)}
                className="rounded-lg bg-blue-700 px-4 py-2 font-semibold text-white hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-500"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

import { ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { CASE_STUDIES, GROWTH_PILLARS } from '../data/portfolioData';
import {
  Icon3DClickTarget,
  Icon3DCompass,
  Icon3DFunnel,
  Icon3DPipelineCube,
  Icon3DRevenueCoins,
  Icon3DShield,
} from './Icons3D';

interface FrameworkSectionProps {
  activePillarFilter: number | null;
  onFilterByPillar: (pillarId: number) => void;
}

const PILLAR_ICONS = [
  Icon3DShield,
  Icon3DClickTarget,
  Icon3DFunnel,
  Icon3DRevenueCoins,
  Icon3DPipelineCube,
  Icon3DCompass,
];

export function FrameworkSection({
  activePillarFilter,
  onFilterByPillar,
}: FrameworkSectionProps) {
  const [selectedPillarId, setSelectedPillarId] = useState<number>(1);

  return (
    <section
      id="framework"
      className="relative border-b border-zinc-200 py-16 sm:py-20 dark:border-zinc-800"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-24 left-3 hidden -rotate-90 origin-top-left font-mono text-[11px] tracking-[0.2em] text-zinc-400 xl:block dark:text-zinc-600"
      >
        SIX PILLAR OPERATING SYSTEM
      </div>

      <div className="mx-auto max-w-[1160px] px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-wide text-blue-700 dark:text-blue-400">
            Fixed-Sequence Execution
          </p>
          <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-zinc-950 sm:text-3xl dark:text-white">
            Building systems behind{' '}
            <em className="font-semibold italic text-blue-700 dark:text-blue-400">
              measurable growth
            </em>
          </h2>
          <p className="mt-2.5 text-base leading-relaxed text-zinc-600 dark:text-zinc-300">
            Six pillars executed in strict order—fix measurement first, then scale what true unit
            economics support.
          </p>
        </div>

        <ol className="mt-9 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {GROWTH_PILLARS.map((pillar, idx) => {
            const isSelected = selectedPillarId === pillar.id;
            const isFiltered = activePillarFilter === pillar.id;
            const matchingCount = CASE_STUDIES.filter((cs) => cs.pillars.includes(pillar.id)).length;
            const Icon3D = PILLAR_ICONS[idx % PILLAR_ICONS.length];

            return (
              <li
                key={pillar.id}
                onClick={() => setSelectedPillarId(pillar.id)}
                className={`group flex cursor-pointer flex-col justify-between rounded-2xl border p-5 sm:p-6 transition-colors duration-150 ${
                  isSelected || isFiltered
                    ? 'border-blue-700 bg-white ring-1 ring-blue-700/15 dark:border-blue-500 dark:bg-zinc-900'
                    : 'border-zinc-200 bg-white hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700'
                }`}
              >
                <div>
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <Icon3D className="h-10 w-10 shrink-0" />
                      <span className="-rotate-3 inline-block font-mono text-xs font-medium text-blue-700 tabular-nums transition-transform duration-150 group-hover:rotate-0 dark:text-blue-400">
                        Pillar {pillar.number}
                      </span>
                    </div>
                    <span className="text-xs text-zinc-500 tabular-nums dark:text-zinc-400">
                      {matchingCount} {matchingCount === 1 ? 'case' : 'cases'}
                    </span>
                  </div>

                  <h3 className="mt-3.5 font-display text-lg font-bold text-zinc-950 dark:text-white">
                    {pillar.title}
                  </h3>

                  <p className="mt-1 text-sm font-medium italic text-blue-700 dark:text-blue-400">
                    {pillar.question}
                  </p>

                  <p className="mt-2.5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                    {pillar.summary}
                  </p>
                </div>

                <div className="mt-4 border-t border-zinc-100 pt-3.5 dark:border-zinc-800">
                  <p className="text-xs leading-relaxed text-zinc-700 dark:text-zinc-300">
                    <span className="font-semibold text-emerald-700 dark:text-emerald-400">
                      Proof:{' '}
                    </span>
                    {pillar.proof}
                  </p>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onFilterByPillar(pillar.id);
                    }}
                    className="mt-2.5 inline-flex items-center gap-1.5 text-xs font-semibold text-blue-700 whitespace-nowrap transition-colors hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                  >
                    View Pillar {pillar.number} cases
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </button>
                </div>
              </li>
            );
          })}
        </ol>

        <div className="mt-7 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-blue-200 bg-blue-50/70 px-6 py-4 dark:border-blue-500/40 dark:bg-zinc-900">
          <p className="font-display text-base font-semibold text-zinc-950 sm:text-lg dark:text-zinc-100">
            Operating Rule:{' '}
            <em className="font-medium italic text-blue-900 dark:text-blue-300">
              Most accounts optimize from Pillar 2. Most profit is lost in Pillars 1 and 4.
            </em>
          </p>
          <span className="rotate-1 font-mono text-xs font-medium text-emerald-700 dark:text-emerald-400">
            Fix measurement first
          </span>
        </div>
      </div>
    </section>
  );
}

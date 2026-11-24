import { ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { BUILT_SYSTEMS } from '../data/portfolioData';
import {
  Icon3DAttributionPrism,
  Icon3DPipelineCube,
  Icon3DProfitChart,
  Icon3DRevenueCoins,
  Icon3DShield,
} from './Icons3D';

const SYSTEM_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  'daily-kpi-tracker': Icon3DPipelineCube,
  'revenue-vs-cost': Icon3DRevenueCoins,
  'full-funnel-crm': Icon3DShield,
};

const STAGE_ICONS = [Icon3DAttributionPrism, Icon3DPipelineCube, Icon3DProfitChart];

export function SystemsSection() {
  const [selectedSystemId, setSelectedSystemId] = useState<string>(BUILT_SYSTEMS[0].id);

  const activeSystem =
    BUILT_SYSTEMS.find((system) => system.id === selectedSystemId) ?? BUILT_SYSTEMS[0];

  return (
    <section
      id="systems"
      className="relative border-b border-zinc-200 py-16 sm:py-22 dark:border-zinc-800"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-24 left-3 hidden -rotate-90 origin-top-left font-mono text-[11px] tracking-[0.2em] text-zinc-400 xl:block dark:text-zinc-600"
      >
        AUTOMATION PIPELINES
      </div>

      <div className="mx-auto max-w-[1200px] px-4 sm:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold tracking-wide text-blue-700 dark:text-blue-400">
            Daily Decision Infrastructure
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl dark:text-white">
            Systems &amp;{' '}
            <span className="text-blue-700 dark:text-blue-400">
              automation built
            </span>
          </h2>
          <p className="mt-3 text-lg leading-relaxed text-zinc-600 dark:text-zinc-300">
            Internal data pipelines and operating frameworks engineered to keep attribution honest
            and inform daily bid and budget decisions without manual spreadsheet work.
          </p>
        </div>

        {/* Interactive System Selector */}
        <div className="mt-9 grid grid-cols-1 gap-6 lg:grid-cols-12">
          <div className="space-y-3.5 lg:col-span-5">
            {BUILT_SYSTEMS.map((system) => {
              const isSelected = system.id === activeSystem.id;
              const Icon3D = SYSTEM_ICONS[system.id] ?? Icon3DPipelineCube;
              return (
                <button
                  key={system.id}
                  type="button"
                  onClick={() => setSelectedSystemId(system.id)}
                  className={`group flex w-full items-start gap-4 rounded-2xl border p-5 text-left transition-colors duration-150 ${
                    isSelected
                      ? 'border-blue-700 bg-white ring-1 ring-blue-700/15 dark:border-blue-500 dark:bg-zinc-900'
                      : 'border-zinc-200 bg-white hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700'
                  }`}
                >
                  <Icon3D className="h-11 w-11 shrink-0" />
                  <div>
                    <div className="text-sm text-zinc-500 dark:text-zinc-400">
                      {system.pillars.join(' · ')}
                    </div>
                    <h3 className="mt-1 font-display text-xl font-bold text-zinc-950 dark:text-white">
                      {system.title}
                    </h3>
                    <p className="mt-1 text-[15px] text-zinc-600 dark:text-zinc-300">
                      {system.purpose}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Selected System Pipeline Blueprint */}
          <div className="flex flex-col justify-between rounded-2xl border border-zinc-200 bg-white p-5 sm:p-8 lg:col-span-7 dark:border-zinc-800 dark:bg-zinc-900">
            <div>
              <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-zinc-100 pb-4 dark:border-zinc-800">
                <h3 className="font-display text-xl font-bold text-zinc-950 sm:text-2xl dark:text-white">
                  {activeSystem.title}
                </h3>
                <span className="-rotate-1 font-mono text-sm text-blue-700 dark:text-blue-400">
                  {activeSystem.pillars.join(' · ')}
                </span>
              </div>

              <p className="mt-4 text-base leading-relaxed text-zinc-600 dark:text-zinc-300">
                {activeSystem.summary}
              </p>

              {/* Animated SVG Flow Line connecting stages */}
              <svg
                aria-hidden="true"
                viewBox="0 0 640 24"
                className="mt-5 hidden h-6 w-full md:block"
                preserveAspectRatio="none"
              >
                <line
                  x1="100"
                  y1="12"
                  x2="540"
                  y2="12"
                  stroke="#1D4ED8"
                  strokeOpacity="0.25"
                  strokeWidth="2"
                />
                <line
                  x1="100"
                  y1="12"
                  x2="540"
                  y2="12"
                  stroke="#047857"
                  strokeWidth="2"
                  strokeDasharray="5 5"
                  className="animate-flow-dash"
                />
                <circle cx="100" cy="12" r="4" fill="#1D4ED8" />
                <circle cx="320" cy="12" r="4" fill="#1D4ED8" />
                <circle cx="540" cy="12" r="4" fill="#047857" />
              </svg>

              {/* 3-Stage Data Flow */}
              <div className="mt-3 grid grid-cols-1 gap-4 md:grid-cols-3">
                {activeSystem.stages.map((stage, index) => {
                  const StageIcon = STAGE_ICONS[index % STAGE_ICONS.length];
                  return (
                    <div
                      key={stage.label}
                      className="group relative rounded-xl border border-zinc-200 bg-[#FAFAFA] p-4 dark:border-zinc-800 dark:bg-zinc-950"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-mono text-sm font-medium text-blue-700 tabular-nums dark:text-blue-400">
                          {stage.label}
                        </span>
                        {index < activeSystem.stages.length - 1 && (
                          <ArrowRight
                            className="hidden h-4 w-4 text-zinc-400 md:block"
                            aria-hidden="true"
                          />
                        )}
                      </div>
                      <div className="my-2.5">
                        <StageIcon className="h-9 w-9" />
                      </div>
                      <h4 className="font-display text-base font-bold text-zinc-950 dark:text-white">
                        {stage.title}
                      </h4>
                      <p className="mt-1.5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                        {stage.detail}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-6 border-t border-zinc-100 pt-4 text-sm leading-relaxed text-zinc-700 dark:border-zinc-800 dark:text-zinc-300">
              <span className="font-semibold text-emerald-700 dark:text-emerald-400">
                Operational Impact:{' '}
              </span>
              {activeSystem.operationalImpact}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

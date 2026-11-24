import { ArrowRight } from 'lucide-react';
import { useState } from 'react';
import {
  Icon3DAttributionPrism,
  Icon3DClickTarget,
  Icon3DFunnel,
  Icon3DPipelineCube,
  Icon3DProfitChart,
  Icon3DRevenueCoins,
} from './Icons3D';

type JourneyScenarioId = 'alidrop' | 'spocket' | 'geny';

interface JourneyStage {
  step: string;
  title: string;
  system: string;
  untrackedLeak: string;
  verifiedFlow: string;
  Icon3D: React.ComponentType<{ className?: string }>;
}

interface JourneyScenario {
  id: JourneyScenarioId;
  label: string;
  subtitle: string;
  headlineResult: string;
  stages: JourneyStage[];
}

const JOURNEY_SCENARIOS: JourneyScenario[] = [
  {
    id: 'alidrop',
    label: 'Alidrop SaaS Turnaround',
    subtitle: 'Connecting Google Ads clicks through GCLID & UTM schemas directly to Stripe net revenue',
    headlineResult: '0.56x → 2.48x Revenue-to-Spend · ~67% Waste Eliminated',
    stages: [
      {
        step: '01',
        title: 'Paid Ad Click',
        system: 'Google Ads · US & Global',
        untrackedLeak: 'Broad spend across mixed geos with 0.56x return',
        verifiedFlow: 'Keyword, placement & device tagged at click entry',
        Icon3D: Icon3DClickTarget,
      },
      {
        step: '02',
        title: 'Signal & GCLID Capture',
        system: 'UTM Schema + GCLID Persistence',
        untrackedLeak: '36% conversion discrepancy vs. Stripe billing',
        verifiedFlow: 'Discrepancy cut to 17% via engineering GCLID capture',
        Icon3D: Icon3DAttributionPrism,
      },
      {
        step: '03',
        title: 'Trial Cohort Filter',
        system: 'Trial-to-Paid Maturation',
        untrackedLeak: 'Vanity trials counted as wins without paid conversion',
        verifiedFlow: 'Evaluated cohorts on paid conversion before scaling',
        Icon3D: Icon3DFunnel,
      },
      {
        step: '04',
        title: 'Stripe Revenue Join',
        system: 'Stripe Net Payments × Campaign ID',
        untrackedLeak: 'No campaign- or country-level revenue visibility',
        verifiedFlow: 'Every dollar mapped back to campaign, keyword & geo',
        Icon3D: Icon3DRevenueCoins,
      },
      {
        step: '05',
        title: 'Daily Pareto Engine',
        system: 'Google Ads API + Apps Script',
        untrackedLeak: 'Weekly manual spreadsheets delayed bid cuts',
        verifiedFlow: 'Automated 80/15/5 tiering guides daily budget calls',
        Icon3D: Icon3DPipelineCube,
      },
      {
        step: '06',
        title: 'Provable Net Profit',
        system: 'CEO & Finance Unit Economics',
        untrackedLeak: 'Monthly cash burn at 0.56x revenue-to-spend',
        verifiedFlow: '2.48x peak revenue-to-spend with ~67% lower spend',
        Icon3D: Icon3DProfitChart,
      },
    ],
  },
  {
    id: 'spocket',
    label: 'Spocket Brand vs. Non-Brand',
    subtitle: 'Isolating ~60% branded revenue illusion so non-branded search scales profitably',
    headlineResult: '0.20x → 2.47x Non-Brand ROAS · 70% Non-Brand Waste Cut',
    stages: [
      {
        step: '01',
        title: 'Search Intent Split',
        system: 'Google Ads & Microsoft Bing',
        untrackedLeak: '60% brand revenue masked unprofitable generic terms',
        verifiedFlow: 'Strict Brand vs. Non-Brand negative keyword isolation',
        Icon3D: Icon3DClickTarget,
      },
      {
        step: '02',
        title: 'Granular Attribution',
        system: 'Campaign & Keyword Tagging',
        untrackedLeak: 'Blended ROAS hid ~0.20x non-brand bleed',
        verifiedFlow: 'Separate revenue readouts for brand vs. acquisition',
        Icon3D: Icon3DAttributionPrism,
      },
      {
        step: '03',
        title: 'Scale & Cut Discipline',
        system: 'Trial-to-Paid Guardrails',
        untrackedLeak: 'High-CPC non-brand ad groups burned cash',
        verifiedFlow: 'Cut 70% of non-performing non-brand spend',
        Icon3D: Icon3DFunnel,
      },
      {
        step: '04',
        title: 'Stripe Cost-vs-Revenue',
        system: 'Daily Campaign & Country Join',
        untrackedLeak: 'Unverified platform-reported conversion values',
        verifiedFlow: 'Daily net Stripe revenue matched to Google Ads cost',
        Icon3D: Icon3DRevenueCoins,
      },
      {
        step: '05',
        title: 'Multi-Account Sync',
        system: 'Apps Script + Slack Ingestion',
        untrackedLeak: 'Manual CSV exports across 3 SaaS accounts',
        verifiedFlow: 'Automated daily KPI sheet across Spocket portfolio',
        Icon3D: Icon3DPipelineCube,
      },
      {
        step: '06',
        title: 'Sustained Acquisition',
        system: 'LTV:CAC Target Governance',
        untrackedLeak: '~0.20x return on non-branded search',
        verifiedFlow: 'Sustained 2.3x–2.5x non-brand ROAS (2.47x peak)',
        Icon3D: Icon3DProfitChart,
      },
    ],
  },
  {
    id: 'geny',
    label: 'Geny Medium CRM Truth',
    subtitle: 'Re-anchoring an INR 50L/mo account & 25-brand portfolio from ad clicks to closed CRM sales',
    headlineResult: '15–20% CPL Efficiency Gain across INR 4 Cr/mo Portfolio',
    stages: [
      {
        step: '01',
        title: 'Multi-Channel Click',
        system: 'Google · Meta · DV360 · YouTube',
        untrackedLeak: 'Creative judged only on cheap CTR and clicks',
        verifiedFlow: 'Full-funnel creative matrix from CTR to SQL cost',
        Icon3D: Icon3DClickTarget,
      },
      {
        step: '02',
        title: 'Server & Tag Capture',
        system: 'GTM · Enhanced Conversions · CAPI',
        untrackedLeak: 'Browser pixel loss & platform over-reporting',
        verifiedFlow: 'Meta CAPI (Datahash) + Enhanced Conversions deployed',
        Icon3D: Icon3DAttributionPrism,
      },
      {
        step: '03',
        title: 'CRM Qualification',
        system: 'LeadSquared MQL → SQL Sync',
        untrackedLeak: 'Google reported leads CRM never confirmed',
        verifiedFlow: 'LeadSquared CRM designated single source of truth',
        Icon3D: Icon3DFunnel,
      },
      {
        step: '04',
        title: 'Offline Conversion Import',
        system: '25-Brand OCI Pipeline',
        untrackedLeak: 'Ad bidding optimized for low-intent form fills',
        verifiedFlow: 'Verified SQL & admissions imported back to ad bids',
        Icon3D: Icon3DRevenueCoins,
      },
      {
        step: '05',
        title: 'Team SOP Governance',
        system: '15+ Specialist Operating System',
        untrackedLeak: 'Inconsistent optimization across 20–25 brands',
        verifiedFlow: 'Standardized SOPs & scenario-based team training',
        Icon3D: Icon3DPipelineCube,
      },
      {
        step: '06',
        title: 'Portfolio Efficiency',
        system: 'INR 4 Cr/mo Media Directed',
        untrackedLeak: 'Wasted budget on false-positive lead volume',
        verifiedFlow: '15–20% improved cost-per-qualified-lead across portfolio',
        Icon3D: Icon3DProfitChart,
      },
    ],
  },
];

export function ClickToProfitDiagram() {
  const [scenarioId, setScenarioId] = useState<JourneyScenarioId>('alidrop');
  const [viewMode, setViewMode] = useState<'verified' | 'leaks'>('verified');
  const [activeStageIdx, setActiveStageIdx] = useState<number>(0);

  const scenario =
    JOURNEY_SCENARIOS.find((item) => item.id === scenarioId) ?? JOURNEY_SCENARIOS[0];
  const selectedStage = scenario.stages[activeStageIdx] ?? scenario.stages[0];

  return (
    <section
      id="journey"
      className="relative border-b border-zinc-200 py-16 sm:py-20 dark:border-zinc-800"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-24 left-3 hidden -rotate-90 origin-top-left font-mono text-[11px] tracking-[0.2em] text-zinc-400 xl:block dark:text-zinc-600"
      >
        CLICK TO PROFIT ARCHITECTURE
      </div>

      <div className="mx-auto max-w-[1160px] px-5 sm:px-8">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-wide text-blue-700 dark:text-blue-400">
              End-to-End Attribution Diagram
            </p>
            <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-zinc-950 sm:text-3xl dark:text-white">
              Connecting the journey from{' '}
              <em className="font-semibold italic text-blue-700 dark:text-blue-400">click</em> to{' '}
              <em className="font-semibold italic text-emerald-700 dark:text-emerald-400">
                provable profit
              </em>
            </h2>
            <p className="mt-3 text-base leading-relaxed text-zinc-600 dark:text-zinc-300">
              Toggle between real account scenarios and compare an untracked leaky funnel against
              the instrumented click-to-profit pipeline.
            </p>
          </div>

          {/* Leak vs Verified State Toggle */}
          <div className="flex flex-wrap items-center gap-2">
            <div
              role="group"
              aria-label="Diagram state comparison"
              className="flex items-center gap-1 rounded-lg border border-zinc-200 bg-white p-1 dark:border-zinc-800 dark:bg-zinc-900"
            >
              <button
                type="button"
                onClick={() => setViewMode('verified')}
                className={`rounded-md px-3 py-1.5 text-xs font-semibold whitespace-nowrap shrink-0 transition-colors ${
                  viewMode === 'verified'
                    ? 'bg-blue-700 text-white dark:bg-blue-600'
                    : 'text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white'
                }`}
              >
                Instrumented Flow
              </button>
              <button
                type="button"
                onClick={() => setViewMode('leaks')}
                className={`rounded-md px-3 py-1.5 text-xs font-semibold whitespace-nowrap shrink-0 transition-colors ${
                  viewMode === 'leaks'
                    ? 'bg-zinc-950 text-white dark:bg-zinc-100 dark:text-zinc-950'
                    : 'text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white'
                }`}
              >
                Where Profit Leaks
              </button>
            </div>
          </div>
        </div>

        {/* Scenario Selector Bar */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-b border-zinc-200 pb-4 dark:border-zinc-800">
          <div role="tablist" aria-label="Select click-to-profit scenario" className="flex flex-wrap gap-2">
            {JOURNEY_SCENARIOS.map((item) => {
              const isSelected = item.id === scenario.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setScenarioId(item.id)}
                  className={`rounded-lg border px-3.5 py-2 text-xs font-semibold whitespace-nowrap shrink-0 transition-colors ${
                    isSelected
                      ? 'border-blue-700 bg-blue-700 text-white dark:border-blue-500 dark:bg-blue-600'
                      : 'border-zinc-200 bg-white text-zinc-700 hover:border-zinc-300 hover:text-zinc-950 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:border-zinc-700 dark:hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          <div className="font-mono text-xs font-medium text-emerald-700 tabular-nums dark:text-emerald-400">
            {scenario.headlineResult}
          </div>
        </div>

        {/* Visual Connected Node-Graph Pipeline */}
        <div className="mt-8 rounded-2xl border border-zinc-200 bg-white p-5 sm:p-8 dark:border-zinc-800 dark:bg-zinc-900">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
            <p className="text-sm text-zinc-600 dark:text-zinc-300">{scenario.subtitle}</p>
            <span className="font-mono text-xs text-zinc-500 dark:text-zinc-400">
              Click any 3D stage node to inspect
            </span>
          </div>

          <div className="relative">
            <svg
              aria-hidden="true"
              viewBox="0 0 1100 36"
              className="pointer-events-none mb-2 hidden h-9 w-full lg:block"
              preserveAspectRatio="none"
            >
              <line
                x1="90"
                y1="18"
                x2="1010"
                y2="18"
                stroke={viewMode === 'verified' ? '#1D4ED8' : '#71717A'}
                strokeOpacity="0.28"
                strokeWidth="2"
              />
              <line
                x1="90"
                y1="18"
                x2="1010"
                y2="18"
                stroke={viewMode === 'verified' ? '#047857' : '#B91C1C'}
                strokeWidth="2.5"
                strokeDasharray="6 6"
                className="animate-flow-dash"
              />
              {[90, 274, 458, 642, 826, 1010].map((cx, i) => (
                <circle
                  key={cx}
                  cx={cx}
                  cy="18"
                  r="5.5"
                  fill={i === activeStageIdx ? '#1D4ED8' : '#FFFFFF'}
                  stroke="#1D4ED8"
                  strokeWidth="2"
                />
              ))}
            </svg>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6">
              {scenario.stages.map((stage, idx) => {
                const Icon3D = stage.Icon3D;
                const isSelected = activeStageIdx === idx;
                return (
                  <button
                    key={stage.step}
                    type="button"
                    onClick={() => setActiveStageIdx(idx)}
                    className={`group relative flex flex-col justify-between rounded-xl border p-4 text-left transition-all duration-150 ${
                      isSelected
                        ? 'border-blue-700 bg-blue-50/70 shadow-xs ring-1 ring-blue-700/15 dark:border-blue-500 dark:bg-zinc-800/80'
                        : 'border-zinc-200 bg-[#FAFAFA] hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-zinc-700'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-mono text-[11px] font-medium text-blue-700 tabular-nums dark:text-blue-400">
                          Step {stage.step}
                        </span>
                        {idx < scenario.stages.length - 1 && (
                          <ArrowRight
                            className="h-3.5 w-3.5 text-zinc-400 lg:hidden"
                            aria-hidden="true"
                          />
                        )}
                      </div>

                      <div className="my-3 flex justify-start">
                        <Icon3D className="h-11 w-11" />
                      </div>

                      <h3 className="font-display text-sm font-bold leading-snug text-zinc-950 dark:text-white">
                        {stage.title}
                      </h3>
                      <p className="mt-1 text-[11px] font-medium text-zinc-500 dark:text-zinc-400">
                        {stage.system}
                      </p>
                    </div>

                    <p
                      className={`mt-3 border-t border-zinc-200 pt-2.5 text-xs leading-relaxed dark:border-zinc-800 ${
                        viewMode === 'verified'
                          ? 'text-emerald-700 dark:text-emerald-400'
                          : 'text-red-700 dark:text-red-400'
                      }`}
                    >
                      {viewMode === 'verified' ? stage.verifiedFlow : stage.untrackedLeak}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Stage Diagnostic Bar */}
          <div className="mt-6 grid grid-cols-1 gap-4 rounded-xl border border-zinc-200 bg-[#FAFAFA] p-5 md:grid-cols-12 md:items-center dark:border-zinc-800 dark:bg-zinc-950">
            <div className="flex items-center gap-4 md:col-span-5">
              <selectedStage.Icon3D className="h-12 w-12 shrink-0" />
              <div>
                <div className="font-mono text-xs text-blue-700 dark:text-blue-400">
                  Stage {selectedStage.step} · {selectedStage.system}
                </div>
                <div className="font-display text-lg font-bold text-zinc-950 dark:text-white">
                  {selectedStage.title}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:col-span-7">
              <div>
                <div className="text-xs font-semibold text-zinc-500 dark:text-zinc-400">
                  Without Instrumentation (Leak)
                </div>
                <p className="mt-1 text-sm text-zinc-900 dark:text-zinc-200">
                  {selectedStage.untrackedLeak}
                </p>
              </div>
              <div>
                <div className="text-xs font-semibold text-emerald-700 dark:text-emerald-400">
                  Verified System Output
                </div>
                <p className="mt-1 text-sm font-medium text-zinc-950 dark:text-white">
                  {selectedStage.verifiedFlow}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

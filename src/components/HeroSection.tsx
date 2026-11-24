import {
  ArrowUpRight,
  Check,
  Copy,
  Download,
  FileText,
  Moon,
  Sun,
  TrendingUp,
} from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useState } from 'react';
import {
  CONTACT_INFO,
  KPI_HIGHLIGHTS,
  LEDGER_ROWS,
  RESUME_PDF_URL,
} from '../data/portfolioData';
import {
  Icon3DAttributionPrism,
  Icon3DCompass,
  Icon3DProfitChart,
  Icon3DRevenueCoins,
} from './Icons3D';

interface HeroSectionProps {
  isDark: boolean;
  onToggleTheme: () => void;
  onSelectCaseStudy: (caseStudyId: string) => void;
  onOpenResumePreview: () => void;
}

const ROTATING_PHRASES = [
  'provably profitable.',
  'revenue-verified.',
  'truly accountable.',
  'safely scalable.',
];

const KPI_ICONS = [
  Icon3DCompass,
  Icon3DRevenueCoins,
  Icon3DAttributionPrism,
  Icon3DProfitChart,
];

export function HeroSection({
  isDark,
  onToggleTheme,
  onSelectCaseStudy,
  onOpenResumePreview,
}: HeroSectionProps) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [phraseIdx, setPhraseIdx] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setPhraseIdx((prev) => (prev + 1) % ROTATING_PHRASES.length);
    }, 3200);
    return () => window.clearInterval(timer);
  }, []);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_INFO.email);
      setCopiedEmail(true);
      window.setTimeout(() => setCopiedEmail(false), 2200);
    } catch {
      window.location.href = `mailto:${CONTACT_INFO.email}`;
    }
  };

  return (
    <section
      id="top"
      className="border-b border-zinc-200 pt-10 pb-12 sm:pt-14 sm:pb-16 dark:border-zinc-800"
    >
      <div className="mx-auto max-w-[1160px] px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-stretch lg:gap-10">
          {/* Left Column */}
          <div className="flex flex-col justify-between lg:col-span-7">
            <div>
              <p className="text-xs font-semibold tracking-wide text-blue-700 dark:text-blue-400">
                {CONTACT_INFO.role} <span aria-hidden="true">·</span> {CONTACT_INFO.specialty}
              </p>

              <div className="mt-4 flex items-start justify-between gap-6">
                <h1 className="font-display text-[clamp(2.2rem,4vw,3.45rem)] font-bold leading-[1.08] tracking-tight text-zinc-950 dark:text-zinc-50">
                  I build the systems that make ad spend
                  <span className="mt-1 block min-h-[1.15em]">
                    <AnimatePresence mode="wait">
                      <motion.em
                        key={ROTATING_PHRASES[phraseIdx]}
                        initial={{ opacity: 0, y: 10, rotateX: -45 }}
                        animate={{ opacity: 1, y: 0, rotateX: 0 }}
                        exit={{ opacity: 0, y: -10, rotateX: 45 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        onClick={() =>
                          setPhraseIdx((prev) => (prev + 1) % ROTATING_PHRASES.length)
                        }
                        title="Click to cycle statement"
                        className="inline-block cursor-pointer font-semibold italic text-blue-700 dark:text-blue-400"
                      >
                        {ROTATING_PHRASES[phraseIdx]}
                      </motion.em>
                    </AnimatePresence>
                  </span>
                </h1>

                {/* Rotating Circular Click-to-Profit Stamp */}
                <a
                  href="#journey"
                  aria-label="Jump to Click to Profit diagram"
                  className="group relative hidden h-24 w-24 shrink-0 items-center justify-center sm:flex"
                >
                  <svg
                    viewBox="0 0 100 100"
                    className="animate-slow-spin h-full w-full text-zinc-500 dark:text-zinc-400"
                    aria-hidden="true"
                  >
                    <defs>
                      <path
                        id="hero-circle-text"
                        d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
                      />
                    </defs>
                    <text
                      textLength="228"
                      className="fill-current font-mono text-[6.5px] font-medium tracking-[0.11em]"
                    >
                      <textPath href="#hero-circle-text" textLength="228">
                        CLICK TO PROFIT · ATTRIBUTION · SCALE ·
                      </textPath>
                    </text>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Icon3DProfitChart className="h-9 w-9" />
                  </div>
                </a>
              </div>

              <p className="mt-5 max-w-[60ch] text-base leading-relaxed text-zinc-600 sm:text-[17px] dark:text-zinc-300">
                Performance marketing leader with 12+ years across digital advertising and agency
                development, including 8+ years of hands-on paid acquisition across US and global
                SaaS, e-commerce, and multi-brand portfolios. I fix revenue attribution first, then
                scale what unit economics genuinely support.
              </p>

              {/* Primary & Secondary Actions */}
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <a
                  href={RESUME_PDF_URL}
                  download="Devaraju-Pichchuka-Resume.pdf"
                  className="inline-flex items-center gap-2 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-semibold text-white whitespace-nowrap shrink-0 transition-colors duration-150 hover:bg-blue-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500"
                >
                  <Download className="h-4 w-4" aria-hidden="true" />
                  Download Resume
                </a>

                <button
                  type="button"
                  onClick={onOpenResumePreview}
                  className="inline-flex items-center gap-2 rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-sm font-semibold text-zinc-900 whitespace-nowrap shrink-0 transition-colors duration-150 hover:border-zinc-400 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:border-zinc-600 dark:hover:bg-zinc-800"
                >
                  <FileText className="h-4 w-4" aria-hidden="true" />
                  Preview PDF
                </button>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-2 rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-sm font-medium text-zinc-700 whitespace-nowrap shrink-0 transition-colors duration-150 hover:border-zinc-400 hover:text-zinc-950 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:border-zinc-600 dark:hover:text-white"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="h-4 w-4 text-emerald-700 dark:text-emerald-400" aria-hidden="true" />
                      Copied Email
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4" aria-hidden="true" />
                      Copy Email
                    </>
                  )}
                </button>

                <a
                  href={CONTACT_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-2 py-2.5 text-sm font-medium text-zinc-700 whitespace-nowrap shrink-0 transition-colors hover:text-blue-700 hover:underline hover:underline-offset-4 dark:text-zinc-300 dark:hover:text-blue-400"
                >
                  LinkedIn
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </div>
            </div>

            {/* Availability & Theme Utility Strip */}
            <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-zinc-200 pt-4 text-xs text-zinc-500 dark:border-zinc-800 dark:text-zinc-400">
              <p>
                {CONTACT_INFO.location} <span aria-hidden="true">·</span> {CONTACT_INFO.availability}
              </p>

              <button
                type="button"
                onClick={onToggleTheme}
                aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
                className="inline-flex items-center gap-1.5 rounded-md border border-zinc-200 bg-white px-2.5 py-1.5 text-xs font-medium text-zinc-800 whitespace-nowrap shrink-0 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800"
              >
                {isDark ? (
                  <>
                    <Sun className="h-3.5 w-3.5" aria-hidden="true" />
                    Light Mode
                  </>
                ) : (
                  <>
                    <Moon className="h-3.5 w-3.5" aria-hidden="true" />
                    Dark Mode
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Verified Before & After Ledger */}
          <div className="lg:col-span-5">
            <div className="flex h-full flex-col justify-between rounded-2xl border border-zinc-200 bg-white p-5 sm:p-6 dark:border-zinc-800 dark:bg-zinc-900">
              <div>
                <div className="flex items-baseline justify-between gap-4 border-b border-zinc-200 pb-3 dark:border-zinc-800">
                  <h2 className="font-display text-base font-bold text-zinc-950 dark:text-white">
                    Verified Account Turnarounds
                  </h2>
                  <span className="-rotate-2 font-mono text-[11px] font-medium text-blue-700 dark:text-blue-400">
                    Stripe &amp; CRM audited
                  </span>
                </div>

                <div className="mt-2 overflow-x-auto">
                  <table className="w-full border-collapse tabular-nums">
                    <thead>
                      <tr className="border-b border-zinc-200 text-xs font-medium text-zinc-500 dark:border-zinc-800 dark:text-zinc-400">
                        <th scope="col" className="py-2.5 text-left font-medium">
                          Account &amp; Metric
                        </th>
                        <th scope="col" className="py-2.5 pl-3 text-right font-medium">
                          Joining
                        </th>
                        <th scope="col" className="py-2.5 pl-3 text-right font-medium">
                          Peak
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800/80">
                      {LEDGER_ROWS.map((row) => (
                        <tr
                          key={row.id}
                          onClick={() => onSelectCaseStudy(row.caseStudyId)}
                          className="group cursor-pointer transition-colors hover:bg-blue-50/60 dark:hover:bg-zinc-800/60"
                        >
                          <td className="py-3 pr-2 align-top">
                            <div className="text-sm font-medium text-zinc-900 transition-colors group-hover:text-blue-700 dark:text-zinc-100 dark:group-hover:text-blue-400">
                              {row.metric}
                            </div>
                            <div className="mt-0.5 text-xs text-zinc-500 dark:text-zinc-400">
                              {row.account} <span aria-hidden="true">·</span> {row.deltaLabel}
                            </div>
                          </td>
                          <td className="py-3 pl-3 text-right align-top font-mono text-sm text-zinc-500 whitespace-nowrap dark:text-zinc-400">
                            {row.before}
                          </td>
                          <td className="py-3 pl-3 text-right align-top font-mono text-sm font-semibold text-emerald-700 whitespace-nowrap dark:text-emerald-400">
                            <span className="inline-flex items-center gap-1">
                              <TrendingUp className="h-3.5 w-3.5" aria-hidden="true" />
                              {row.after}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <p className="mt-4 border-t border-zinc-100 pt-3 text-xs leading-relaxed text-zinc-500 dark:border-zinc-800 dark:text-zinc-400">
                Click any turnaround row to inspect the instrumentation and budget calls behind it.
              </p>
            </div>
          </div>
        </div>

        {/* Full-Width 4-Column KPI Strip with 3D Icons */}
        <div className="mt-10 grid grid-cols-1 divide-y divide-zinc-200 rounded-2xl border border-zinc-200 bg-white sm:grid-cols-2 sm:divide-y-0 sm:divide-x lg:grid-cols-4 dark:divide-zinc-800 dark:border-zinc-800 dark:bg-zinc-900">
          {KPI_HIGHLIGHTS.map((kpi, idx) => {
            const Icon3D = KPI_ICONS[idx % KPI_ICONS.length];
            return (
              <div key={kpi.label} className="group p-5 sm:p-6">
                <div className="flex items-start justify-between gap-3">
                  <div className="font-mono text-xl font-medium tracking-tight text-zinc-950 tabular-nums sm:text-2xl dark:text-white">
                    {kpi.value}
                  </div>
                  <Icon3D className="h-10 w-10 shrink-0" />
                </div>
                <div className="mt-2 text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                  {kpi.label}
                </div>
                <p className="mt-1 text-xs leading-relaxed text-zinc-500 dark:text-zinc-400">
                  {kpi.detail}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

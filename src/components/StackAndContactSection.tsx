import { ArrowUpRight, Check, Copy, Download, FileText, Mail, Phone } from 'lucide-react';
import { useState } from 'react';
import {
  CONTACT_INFO,
  CREDENTIALS,
  RESUME_PDF_URL,
  STACK_GROUPS,
} from '../data/portfolioData';
import {
  Icon3DAttributionPrism,
  Icon3DClickTarget,
  Icon3DPipelineCube,
  Icon3DRevenueCoins,
} from './Icons3D';

interface StackAndContactSectionProps {
  onOpenResumePreview: () => void;
}

const STACK_ICONS = [Icon3DClickTarget, Icon3DAttributionPrism, Icon3DPipelineCube];

export function StackAndContactSection({ onOpenResumePreview }: StackAndContactSectionProps) {
  const [copiedEmail, setCopiedEmail] = useState(false);

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
    <>
      {/* Platforms, Measurement & Credentials */}
      <section
        id="stack"
        className="border-b border-zinc-200 py-16 sm:py-20 dark:border-zinc-800"
      >
        <div className="mx-auto max-w-[1160px] px-5 sm:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-wide text-blue-700 dark:text-blue-400">
              Technical Capabilities
            </p>
            <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-zinc-950 sm:text-3xl dark:text-white">
              Platforms, measurement &amp;{' '}
              <em className="font-semibold italic text-blue-700 dark:text-blue-400">
                credentials
              </em>
            </h2>
            <p className="mt-3 text-base leading-relaxed text-zinc-600 dark:text-zinc-300">
              Full-stack paid media execution paired with server/CRM instrumentation and daily
              scripted reporting.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            {STACK_GROUPS.map((group, idx) => {
              const Icon3D = STACK_ICONS[idx % STACK_ICONS.length];
              return (
                <div
                  key={group.title}
                  className="group rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900"
                >
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="font-display text-base font-bold text-zinc-950 dark:text-white">
                      {group.title}
                    </h3>
                    <Icon3D className="h-10 w-10 shrink-0" />
                  </div>
                  <ul className="mt-4 space-y-2 text-sm text-zinc-600 dark:text-zinc-300">
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          {/* Education, Certifications, Awards & Languages */}
          <div className="mt-10 grid grid-cols-1 gap-8 border-t border-zinc-200 pt-10 md:grid-cols-3 dark:border-zinc-800">
            <div>
              <h3 className="font-display text-sm font-bold text-zinc-950 dark:text-white">
                Education &amp; Certifications
              </h3>
              <ul className="mt-2.5 space-y-1.5 text-sm text-zinc-600 dark:text-zinc-300">
                <li className="flex items-start gap-2">
                  <span
                    aria-hidden="true"
                    className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-700 shrink-0 dark:bg-blue-400"
                  />
                  <span>{CREDENTIALS.education}</span>
                </li>
                {CREDENTIALS.certifications.map((cert) => (
                  <li key={cert} className="flex items-start gap-2">
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1.5 w-1.5 rounded-full bg-zinc-400 shrink-0 dark:bg-zinc-500"
                    />
                    <span>{cert} Certified</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-display text-sm font-bold text-zinc-950 dark:text-white">
                Recognition
              </h3>
              <ul className="mt-2.5 space-y-1.5 text-sm text-zinc-600 dark:text-zinc-300">
                {CREDENTIALS.awards.map((award) => (
                  <li key={award} className="flex items-start gap-2">
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-700 shrink-0 dark:bg-emerald-400"
                    />
                    <span>{award}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-display text-sm font-bold text-zinc-950 dark:text-white">
                Languages
              </h3>
              <ul className="mt-2.5 space-y-1.5 text-sm text-zinc-600 dark:text-zinc-300">
                {CREDENTIALS.languages.map((lang) => (
                  <li key={lang} className="flex items-start gap-2">
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1.5 w-1.5 rounded-full bg-zinc-400 shrink-0 dark:bg-zinc-500"
                    />
                    <span>{lang}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Direct Contact & Resume */}
      <section id="contact" className="bg-white py-16 sm:py-20 dark:bg-zinc-900">
        <div className="mx-auto max-w-[1160px] px-5 sm:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-5">
                {/* Rotating Contact Seal */}
                <div className="relative hidden h-20 w-20 shrink-0 items-center justify-center sm:flex">
                  <svg
                    viewBox="0 0 100 100"
                    className="animate-slow-spin h-full w-full text-blue-700 dark:text-blue-400"
                    aria-hidden="true"
                  >
                    <defs>
                      <path
                        id="contact-circle-text"
                        d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
                      />
                    </defs>
                    <text
                      textLength="228"
                      className="fill-current font-mono text-[6.5px] font-medium tracking-[0.11em]"
                    >
                      <textPath href="#contact-circle-text" textLength="228">
                        AVAILABLE FOR REMOTE · US OVERLAP ·
                      </textPath>
                    </text>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Icon3DRevenueCoins className="h-8 w-8" />
                  </div>
                </div>

                <div>
                  <h2 className="font-display text-2xl font-bold tracking-tight text-zinc-950 sm:text-3xl dark:text-white">
                    Let&apos;s{' '}
                    <em className="font-semibold italic text-blue-700 dark:text-blue-400">
                      talk
                    </em>
                  </h2>
                  <p className="mt-2 max-w-xl text-base leading-relaxed text-zinc-600 dark:text-zinc-300">
                    If your paid acquisition spend is growing faster than your confidence in the
                    numbers, I can help audit your attribution, cut waste, and build profitable
                    scale.
                  </p>
                </div>
              </div>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="inline-flex items-center gap-2 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-semibold text-white whitespace-nowrap shrink-0 transition-colors hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-500"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  Email Devaraju
                </a>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-2 rounded-lg border border-zinc-300 bg-white px-4 py-2.5 text-sm font-medium text-zinc-900 whitespace-nowrap shrink-0 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-100 dark:hover:bg-zinc-800"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="h-4 w-4 text-emerald-700 dark:text-emerald-400" aria-hidden="true" />
                      Copied
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4" aria-hidden="true" />
                      {CONTACT_INFO.email}
                    </>
                  )}
                </button>
              </div>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-[#FAFAFA] p-6 lg:col-span-5 dark:border-zinc-800 dark:bg-zinc-950">
              <h3 className="font-display text-sm font-bold text-zinc-950 dark:text-white">
                Direct Channels &amp; Resume
              </h3>
              <ul className="mt-4 space-y-3 text-sm">
                <li>
                  <a
                    href={CONTACT_INFO.phoneHref}
                    className="inline-flex items-center gap-2.5 font-mono text-zinc-700 tabular-nums hover:text-blue-700 dark:text-zinc-300 dark:hover:text-blue-400"
                  >
                    <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
                    {CONTACT_INFO.phone}
                  </a>
                </li>
                <li>
                  <a
                    href={CONTACT_INFO.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2.5 text-zinc-700 hover:text-blue-700 dark:text-zinc-300 dark:hover:text-blue-400"
                  >
                    <ArrowUpRight className="h-4 w-4 shrink-0" aria-hidden="true" />
                    {CONTACT_INFO.linkedinHandle}
                  </a>
                </li>
                <li className="flex flex-wrap items-center gap-4 border-t border-zinc-200 pt-3 dark:border-zinc-800">
                  <a
                    href={RESUME_PDF_URL}
                    download="Devaraju-Pichchuka-Resume.pdf"
                    className="inline-flex items-center gap-1.5 font-semibold text-blue-700 hover:underline hover:underline-offset-4 dark:text-blue-400"
                  >
                    <Download className="h-4 w-4" aria-hidden="true" />
                    Download Resume (PDF)
                  </a>
                  <button
                    type="button"
                    onClick={onOpenResumePreview}
                    className="inline-flex items-center gap-1.5 font-medium text-zinc-600 hover:text-zinc-950 hover:underline hover:underline-offset-4 dark:text-zinc-300 dark:hover:text-white"
                  >
                    <FileText className="h-4 w-4" aria-hidden="true" />
                    Preview in Browser
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-zinc-200 py-7 text-xs text-zinc-500 dark:border-zinc-800 dark:text-zinc-400">
        <div className="mx-auto flex max-w-[1160px] flex-wrap items-center justify-between gap-4 px-5 sm:px-8">
          <span>
            {CONTACT_INFO.name} <span aria-hidden="true">·</span> {CONTACT_INFO.location}
          </span>
          <span>
            Senior Performance Marketing Manager <span aria-hidden="true">·</span> US &amp; Global
            Markets
          </span>
        </div>
      </footer>
    </>
  );
}

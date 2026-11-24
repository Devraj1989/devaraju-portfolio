import { Download, ExternalLink, X } from 'lucide-react';
import { useEffect } from 'react';
import { RESUME_PDF_URL } from '../data/portfolioData';

interface ResumePreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumePreviewModal({ isOpen, onClose }: ResumePreviewModalProps) {
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-950/65 p-4 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="flex h-[88vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-2xl dark:border-zinc-800 dark:bg-zinc-900"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-zinc-200 px-5 py-3.5 dark:border-zinc-800">
          <div>
            <h2
              id="resume-modal-title"
              className="font-display text-base font-bold text-zinc-950 dark:text-white"
            >
              Devaraju Pichchuka — Master Resume (PDF)
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <a
              href={RESUME_PDF_URL}
              download="Devaraju-Pichchuka-Resume.pdf"
              className="inline-flex items-center gap-1.5 rounded-lg bg-blue-700 px-3.5 py-2 text-xs font-semibold text-white whitespace-nowrap shrink-0 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-500"
            >
              <Download className="h-3.5 w-3.5" aria-hidden="true" />
              Download PDF
            </a>
            <a
              href={RESUME_PDF_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-zinc-200 px-3 py-2 text-xs font-medium text-zinc-700 whitespace-nowrap shrink-0 hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-800"
            >
              <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              Open Tab
            </a>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close resume preview"
              className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-zinc-200 text-zinc-600 hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-300 dark:hover:bg-zinc-800"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="flex-1 bg-[#FAFAFA] dark:bg-zinc-950">
          <iframe
            src={RESUME_PDF_URL}
            title="Devaraju Pichchuka Resume PDF"
            className="h-full w-full border-0"
          />
        </div>
      </div>
    </div>
  );
}

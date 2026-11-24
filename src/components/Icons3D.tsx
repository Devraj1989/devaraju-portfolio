import { useId } from 'react';

interface Icon3DProps {
  className?: string;
}

export function Icon3DClickTarget({ className = 'h-12 w-12' }: Icon3DProps) {
  const id = useId();
  return (
    <svg viewBox="0 0 64 64" fill="none" className={`icon-3d-tilt drop-shadow-md ${className}`} aria-hidden="true">
      <defs>
        <linearGradient id={`${id}-base`} x1="8" y1="8" x2="56" y2="56" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#DBEAFE" />
          <stop offset="100%" stopColor="#1D4ED8" />
        </linearGradient>
        <linearGradient id={`${id}-top`} x1="16" y1="12" x2="48" y2="48" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#EFF6FF" />
          <stop offset="100%" stopColor="#93C5FD" />
        </linearGradient>
      </defs>
      <ellipse cx="32" cy="54" rx="20" ry="5" fill="#1D4ED8" fillOpacity="0.18" />
      <path d="M12 31C12 42.0457 20.9543 51 32 51C43.0457 51 52 42.0457 52 31V27C52 38.0457 43.0457 47 32 47C20.9543 47 12 38.0457 12 27V31Z" fill="#1E3A8A" />
      <circle cx="32" cy="27" r="20" fill={`url(#${id}-base)`} />
      <circle cx="32" cy="27" r="13.5" fill={`url(#${id}-top)`} />
      <circle cx="32" cy="27" r="7" fill="#1D4ED8" />
      <circle cx="30" cy="25" r="2.2" fill="#EFF6FF" />
      <path d="M40 19L53 9L46 25L43 21L40 19Z" fill="#09090B" />
      <path d="M32 27L43 20" stroke="#09090B" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

export function Icon3DAttributionPrism({ className = 'h-12 w-12' }: Icon3DProps) {
  const id = useId();
  return (
    <svg viewBox="0 0 64 64" fill="none" className={`icon-3d-tilt drop-shadow-md ${className}`} aria-hidden="true">
      <defs>
        <linearGradient id={`${id}-left`} x1="10" y1="16" x2="32" y2="54" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#60A5FA" />
          <stop offset="100%" stopColor="#1D4ED8" />
        </linearGradient>
        <linearGradient id={`${id}-right`} x1="32" y1="16" x2="54" y2="54" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#1E40AF" />
          <stop offset="100%" stopColor="#172554" />
        </linearGradient>
        <linearGradient id={`${id}-top`} x1="12" y1="10" x2="52" y2="28" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#EFF6FF" />
          <stop offset="100%" stopColor="#BFDBFE" />
        </linearGradient>
      </defs>
      <ellipse cx="32" cy="56" rx="19" ry="4.5" fill="#1D4ED8" fillOpacity="0.18" />
      <polygon points="32,8 53,20 32,32 11,20" fill={`url(#${id}-top)`} />
      <polygon points="11,20 32,32 32,53 11,41" fill={`url(#${id}-left)`} />
      <polygon points="53,20 32,32 32,53 53,41" fill={`url(#${id}-right)`} />
      <polyline points="11,20 32,32 53,20" stroke="#FFFFFF" strokeOpacity="0.65" strokeWidth="1.5" />
      <line x1="32" y1="32" x2="32" y2="53" stroke="#FFFFFF" strokeOpacity="0.35" strokeWidth="1.5" />
      <circle cx="32" cy="20" r="4" fill="#1D4ED8" />
    </svg>
  );
}

export function Icon3DFunnel({ className = 'h-12 w-12' }: Icon3DProps) {
  const id = useId();
  return (
    <svg viewBox="0 0 64 64" fill="none" className={`icon-3d-tilt drop-shadow-md ${className}`} aria-hidden="true">
      <defs>
        <linearGradient id={`${id}-cone`} x1="12" y1="14" x2="52" y2="48" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#BFDBFE" />
          <stop offset="55%" stopColor="#2563EB" />
          <stop offset="100%" stopColor="#1E3A8A" />
        </linearGradient>
      </defs>
      <ellipse cx="32" cy="55" rx="16" ry="4" fill="#1D4ED8" fillOpacity="0.18" />
      <path d="M12 16L27 36V50L37 46V36L52 16H12Z" fill={`url(#${id}-cone)`} />
      <ellipse cx="32" cy="16" rx="20" ry="6.5" fill="#EFF6FF" stroke="#60A5FA" strokeWidth="1.5" />
      <ellipse cx="32" cy="16" rx="13" ry="3.5" fill="#1D4ED8" fillOpacity="0.28" />
      <circle cx="32" cy="52" r="3.5" fill="#047857" />
    </svg>
  );
}

export function Icon3DRevenueCoins({ className = 'h-12 w-12' }: Icon3DProps) {
  const id = useId();
  return (
    <svg viewBox="0 0 64 64" fill="none" className={`icon-3d-tilt drop-shadow-md ${className}`} aria-hidden="true">
      <defs>
        <linearGradient id={`${id}-side`} x1="14" y1="20" x2="50" y2="50" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#10B981" />
          <stop offset="100%" stopColor="#065F46" />
        </linearGradient>
        <linearGradient id={`${id}-face`} x1="18" y1="12" x2="46" y2="26" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#ECFDF5" />
          <stop offset="100%" stopColor="#6EE7B7" />
        </linearGradient>
      </defs>
      <ellipse cx="32" cy="55" rx="19" ry="4.5" fill="#047857" fillOpacity="0.18" />
      <path d="M14 40V46C14 49.866 22.0589 53 32 53C41.9411 53 50 49.866 50 46V40H14Z" fill="#064E3B" />
      <ellipse cx="32" cy="40" rx="18" ry="6.5" fill="#059669" />
      <path d="M14 30V36C14 39.866 22.0589 43 32 43C41.9411 43 50 39.866 50 36V30H14Z" fill={`url(#${id}-side)`} />
      <ellipse cx="32" cy="30" rx="18" ry="6.5" fill="#34D399" />
      <path d="M14 20V26C14 29.866 22.0589 33 32 33C41.9411 33 50 29.866 50 26V20H14Z" fill="#047857" />
      <ellipse cx="32" cy="20" rx="18" ry="6.5" fill={`url(#${id}-face)`} />
      <ellipse cx="32" cy="20" rx="12" ry="3.8" stroke="#047857" strokeOpacity="0.45" strokeWidth="1.2" />
    </svg>
  );
}

export function Icon3DPipelineCube({ className = 'h-12 w-12' }: Icon3DProps) {
  const id = useId();
  return (
    <svg viewBox="0 0 64 64" fill="none" className={`icon-3d-tilt drop-shadow-md ${className}`} aria-hidden="true">
      <defs>
        <linearGradient id={`${id}-a`} x1="12" y1="10" x2="52" y2="52" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#93C5FD" />
          <stop offset="100%" stopColor="#1D4ED8" />
        </linearGradient>
      </defs>
      <ellipse cx="32" cy="56" rx="20" ry="4.5" fill="#1D4ED8" fillOpacity="0.16" />
      <rect x="20" y="10" width="30" height="30" rx="6" fill="#1E3A8A" />
      <rect x="15" y="15" width="30" height="30" rx="6" fill={`url(#${id}-a)`} />
      <rect x="10" y="20" width="30" height="30" rx="6" fill="#EFF6FF" stroke="#60A5FA" strokeWidth="1.5" />
      <path d="M18 35L23 40L33 29" stroke="#1D4ED8" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Icon3DProfitChart({ className = 'h-12 w-12' }: Icon3DProps) {
  const id = useId();
  return (
    <svg viewBox="0 0 64 64" fill="none" className={`icon-3d-tilt drop-shadow-md ${className}`} aria-hidden="true">
      <defs>
        <linearGradient id={`${id}-bar1`} x1="12" y1="34" x2="22" y2="50" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#BFDBFE" />
          <stop offset="100%" stopColor="#2563EB" />
        </linearGradient>
        <linearGradient id={`${id}-bar3`} x1="40" y1="12" x2="54" y2="50" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#6EE7B7" />
          <stop offset="100%" stopColor="#047857" />
        </linearGradient>
      </defs>
      <ellipse cx="32" cy="55" rx="22" ry="4.5" fill="#1D4ED8" fillOpacity="0.14" />
      <polygon points="12,36 20,32 20,48 12,52" fill={`url(#${id}-bar1)`} />
      <polygon points="20,32 25,35 25,51 20,48" fill="#1E3A8A" />
      <polygon points="12,36 17,39 25,35 20,32" fill="#EFF6FF" />
      <polygon points="27,26 35,22 35,48 27,52" fill="#3B82F6" />
      <polygon points="35,22 40,25 40,51 35,48" fill="#1D4ED8" />
      <polygon points="27,26 32,29 40,25 35,22" fill="#DBEAFE" />
      <polygon points="42,14 50,10 50,48 42,52" fill={`url(#${id}-bar3)`} />
      <polygon points="50,10 55,13 55,51 50,48" fill="#064E3B" />
      <polygon points="42,14 47,17 55,13 50,10" fill="#D1FAE5" />
    </svg>
  );
}

export function Icon3DCompass({ className = 'h-12 w-12' }: Icon3DProps) {
  const id = useId();
  return (
    <svg viewBox="0 0 64 64" fill="none" className={`icon-3d-tilt drop-shadow-md ${className}`} aria-hidden="true">
      <defs>
        <linearGradient id={`${id}-ring`} x1="12" y1="10" x2="52" y2="50" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#EFF6FF" />
          <stop offset="100%" stopColor="#1D4ED8" />
        </linearGradient>
      </defs>
      <ellipse cx="32" cy="55" rx="18" ry="4.5" fill="#1D4ED8" fillOpacity="0.18" />
      <path d="M13 30C13 40.4934 21.5066 49 32 49C42.4934 49 51 40.4934 51 30V26C51 36.4934 42.4934 45 32 45C21.5066 45 13 36.4934 13 26V30Z" fill="#1E3A8A" />
      <circle cx="32" cy="26" r="19" fill={`url(#${id}-ring)`} />
      <circle cx="32" cy="26" r="14" fill="#FFFFFF" />
      <polygon points="39,19 34,29 25,33 30,23" fill="#1D4ED8" />
      <polygon points="39,19 30,23 32,26" fill="#1E3A8A" />
      <circle cx="32" cy="26" r="2.2" fill="#09090B" />
    </svg>
  );
}

export function Icon3DShield({ className = 'h-12 w-12' }: Icon3DProps) {
  const id = useId();
  return (
    <svg viewBox="0 0 64 64" fill="none" className={`icon-3d-tilt drop-shadow-md ${className}`} aria-hidden="true">
      <defs>
        <linearGradient id={`${id}-sh`} x1="14" y1="10" x2="50" y2="52" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#DBEAFE" />
          <stop offset="55%" stopColor="#2563EB" />
          <stop offset="100%" stopColor="#1E3A8A" />
        </linearGradient>
      </defs>
      <ellipse cx="32" cy="56" rx="16" ry="4" fill="#1D4ED8" fillOpacity="0.18" />
      <path d="M32 8L50 15V30C50 41.5 42.2 49.5 32 53C21.8 49.5 14 41.5 14 30V15L32 8Z" fill="#172554" transform="translate(2,2)" />
      <path d="M32 8L50 15V30C50 41.5 42.2 49.5 32 53C21.8 49.5 14 41.5 14 30V15L32 8Z" fill={`url(#${id}-sh)`} />
      <path d="M24.5 29.5L29.5 34.5L40 24" stroke="#FFFFFF" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

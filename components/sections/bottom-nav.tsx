"use client";

import { usePathname } from "next/navigation";

function IconOver() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function IconSponsors() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

function IconInfo() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="16" x2="12" y2="12" />
      <line x1="12" y1="8" x2="12.01" y2="8" />
    </svg>
  );
}

function IconDoneren() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}

const NAV_ITEMS = [
  { href: "#over", label: "Over", icon: <IconOver /> },
  { href: "#sponsors", label: "Sponsors", icon: <IconSponsors /> },
  { href: "#info", label: "Info", icon: <IconInfo /> },
  { href: "/doneren", label: "Doneren", icon: <IconDoneren /> },
];

export function BottomNav() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <nav
      className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 !bg-transparent"
      aria-label="Hoofdnavigatie"
    >
      <div className="flex items-center gap-1 overflow-hidden rounded-[20px] border border-foreground/10 bg-[rgba(17,17,17,0.78)] px-2 py-2 shadow-[0_8px_32px_rgba(0,0,0,0.6)] backdrop-blur-2xl">
        {NAV_ITEMS.map((item) => {
          const href =
            item.href.startsWith("#") && !isHome
              ? `/${item.href}`
              : item.href;
          return (
            <a
              key={item.href}
              href={href}
              className="flex flex-col items-center gap-1 rounded-2xl px-4 py-2 text-foreground/56 transition-colors hover:bg-foreground/8 hover:text-foreground"
            >
              {item.icon}
              <span className="text-[9px] font-bold uppercase tracking-[0.12em] md:text-xs md:tracking-[0.1em]">
                {item.label}
              </span>
            </a>
          );
        })}
      </div>
    </nav>
  );
}

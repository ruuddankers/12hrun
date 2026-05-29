function IconOver() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
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
  return (
    <nav
      className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 !bg-transparent"
      aria-label="Hoofdnavigatie"
    >
      <div className="flex items-center gap-1 overflow-hidden rounded-[20px] border border-foreground/10 bg-[rgba(17,17,17,0.78)] px-2 py-2 shadow-[0_8px_32px_rgba(0,0,0,0.6)] backdrop-blur-2xl">
        {NAV_ITEMS.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="flex flex-col items-center gap-1 rounded-2xl px-4 py-2 text-foreground/56 transition-colors hover:bg-foreground/8 hover:text-foreground"
          >
            {item.icon}
            <span className="text-[9px] font-bold uppercase tracking-[0.12em] md:text-xs md:tracking-[0.1em]">
              {item.label}
            </span>
          </a>
        ))}
      </div>
    </nav>
  );
}

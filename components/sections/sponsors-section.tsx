import Link from "next/link";

export function SponsorsSection() {
  return (
    <section id="sponsors" className="bg-background px-3 py-10 md:px-5">
      <div className="container-page event-shell overflow-hidden">
        <div className="border-b border-foreground/[0.14] px-6 py-4">
          <h2 className="display-tight text-xl font-black uppercase text-foreground">
            Sponsors
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-4 p-6 sm:grid-cols-3 md:grid-cols-4 md:p-8 lg:grid-cols-6">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="aspect-[2/1] border border-foreground/10 bg-panel"
            />
          ))}
          <Link
            href="/zakelijk-doneren"
            className="flex aspect-[2/1] items-center justify-center border border-dashed border-foreground/20 bg-panel transition-colors hover:border-accent/60 hover:bg-accent/5"
            aria-label="Word sponsor"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true" className="text-foreground/30 group-hover:text-accent">
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

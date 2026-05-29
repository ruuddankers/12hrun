const NAMES = [
  "Anna", "Pieter", "Sofie", "Lars", "Emma",
  "Thijs", "Lisa", "Daan", "Noor", "Bas",
  "Fleur", "Joost", "Roos", "Sander", "Iris", "Tom",
];

const TICKER_ITEMS = NAMES.flatMap((name, i) => [
  <span key={`n-${i}`}>{name}</span>,
  <span key={`s-${i}`} className="text-white"> &amp; </span>,
]);

function TickerRow({ duration = "60s" }: { duration?: string }) {
  return (
    <div className="flex overflow-hidden">
      <div
        className="flex shrink-0 items-baseline whitespace-nowrap font-[family-name:var(--font-benzin)] text-4xl font-black uppercase leading-none tracking-tight text-background sm:text-5xl md:text-6xl lg:text-7xl"
        style={{ animation: `ticker-ltr ${duration} linear infinite` }}
      >
        <span className="flex items-baseline">{TICKER_ITEMS}</span>
        <span className="flex items-baseline">{TICKER_ITEMS}</span>
      </div>
    </div>
  );
}

export function TickerSection() {
  return (
    <div className="overflow-hidden">
      <section className="-mx-16 rotate-[-4deg] bg-accent py-4 md:py-5">
        <TickerRow duration="60s" />
      </section>
    </div>
  );
}

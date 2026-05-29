const NAMES = [
  "Anna", "Pieter", "Sofie", "Lars", "Emma",
  "Thijs", "Lisa", "Daan", "Noor", "Bas",
  "Fleur", "Joost", "Roos", "Sander", "Iris", "Tom",
];

const ticker = NAMES.join("  ·  ") + "  ·  ";

function TickerRow({
  reverse = false,
  duration = "60s",
}: {
  reverse?: boolean;
  duration?: string;
}) {
  return (
    <div className="flex overflow-hidden">
      <div
        className="flex shrink-0 whitespace-nowrap font-[family-name:var(--font-benzin)] text-4xl font-black uppercase leading-none tracking-tight text-background sm:text-5xl md:text-6xl lg:text-7xl"
        style={{
          animation: `ticker-${reverse ? "rtl" : "ltr"} ${duration} linear infinite`,
        }}
      >
        <span>{ticker}</span>
        <span>{ticker}</span>
      </div>
    </div>
  );
}

export function TickerSection() {
  return (
    <section className="w-full overflow-hidden bg-accent py-4 md:py-6">
      <div className="flex flex-col gap-3">
        <TickerRow duration="60s" />
        <TickerRow reverse duration="52s" />
        <TickerRow duration="68s" />
      </div>
    </section>
  );
}

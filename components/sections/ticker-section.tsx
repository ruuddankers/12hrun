const NAMES = [
  "Anna de Vries",
  "Pieter Jansen",
  "Sofie Visser",
  "Lars Meijer",
  "Emma Bakker",
  "Thijs van den Berg",
  "Lisa Smit",
  "Daan Willems",
  "Noor Dijkstra",
  "Bas Hendriks",
  "Fleur de Boer",
  "Joost Vermeer",
  "Roos van Dijk",
  "Sander Mulder",
  "Iris Peters",
  "Tom Visser",
];

const ticker = NAMES.join("  ·  ") + "  ·  ";

function TickerRow({
  reverse = false,
  duration = "40s",
}: {
  reverse?: boolean;
  duration?: string;
}) {
  return (
    <div className="flex overflow-hidden">
      <div
        className="flex shrink-0 whitespace-nowrap font-[family-name:var(--font-benzin)] text-xs uppercase tracking-[0.14em] text-background"
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
    <section className="w-full overflow-hidden bg-accent py-3">
      <div className="flex flex-col gap-2.5">
        <TickerRow duration="42s" />
        <TickerRow reverse duration="36s" />
        <TickerRow duration="48s" />
      </div>
    </section>
  );
}

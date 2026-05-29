import { RouteMap } from "@/components/shared/route-map";

const stats = [
  ["Afstand", "5.0 KM"],
  ["Routepunten", "136"],
  ["Start", "Berkel-Enschot"],
  ["Herhaling", "12 rondes"]
];

export function RouteSection() {
  return (
    <section id="route" className="border-b border-foreground/10">
      <div className="container-page grid gap-0 border-b border-foreground/10 md:grid-cols-[0.9fr_1.1fr]">
        <div className="border-b border-foreground/10 p-6 md:border-b-0 md:border-r md:p-10">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
            De route
          </p>
          <h2 className="display-tight mt-5 max-w-3xl text-4xl font-black uppercase leading-[1] text-foreground md:text-6xl">
            Een ronde van 5 kilometer.
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-px bg-foreground/12 md:grid-cols-4">
          {stats.map(([label, value]) => (
            <div key={label} className="bg-background/82 p-5">
              <p className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-foreground/42">
                {label}
              </p>
              <p className="display-tight mt-3 text-2xl font-black uppercase text-foreground">
                {value}
              </p>
            </div>
          ))}
        </div>
      </div>
      <RouteMap />
    </section>
  );
}

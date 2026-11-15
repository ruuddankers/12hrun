import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

const KM_PER_ROUND = 6;
const HOURS = Array.from({ length: 12 }, (_, i) => i + 1);

const STEPS = [
  {
    number: "01",
    title: "Start op het hele uur",
    text: "Ieder uur klinkt het startsein. Iedereen vertrekt samen."
  },
  {
    number: "02",
    title: "Loop 6 kilometer",
    text: "Eén ronde, op je eigen tempo. Het gaat niet om snelheid."
  },
  {
    number: "03",
    title: "Herstel tot het volgende uur",
    text: "De tijd die overblijft is van jou: eten, drinken, rusten."
  }
];

const PACES = [
  { pace: "5:00", run: 30, rest: 30, width: "w-[50%]" },
  { pace: "6:00", run: 36, rest: 24, width: "w-[60%]" },
  { pace: "7:00", run: 42, rest: 18, width: "w-[70%]" }
];

const MINUTE_MARKS = ["0", "15", "30", "45", "60 min"];

export function FormatSection() {
  return (
    <section id="format" className="bg-background px-3 py-10 md:px-5">
      <div className="container-page event-shell overflow-hidden">
        <div className="border-b border-foreground/[0.14] px-6 py-4">
          <h2 className="display-tight text-xl font-black uppercase text-foreground">
            Zo werkt het
          </h2>
        </div>

        {/* Eén uur */}
        <div className="grid border-b border-foreground/[0.14] md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
          <Reveal className="border-b border-foreground/8 p-6 md:border-b-0 md:border-r md:p-10">
            <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-foreground/40">
              Eén uur
            </p>
            <ol className="mt-6 grid gap-6">
              {STEPS.map((step) => (
                <li key={step.number} className="flex gap-5">
                  <span className="display-tight w-8 shrink-0 pt-0.5 text-sm font-black text-accent">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-sm leading-7 text-foreground/62">
                      {step.text}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal delay={0.1} className="p-6 md:p-10">
            <div className="flex items-center justify-between gap-4">
              <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-foreground/40">
                Jouw tempo bepaalt je herstel
              </p>
              <div className="flex shrink-0 items-center gap-4 text-[10px] font-bold uppercase tracking-[0.14em] text-foreground/62">
                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 bg-accent" aria-hidden="true" />
                  Lopen
                </span>
                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 bg-foreground/20" aria-hidden="true" />
                  Herstel
                </span>
              </div>
            </div>

            <ul className="mt-6 grid gap-5">
              {PACES.map((item) => (
                <li key={item.pace}>
                  <p className="mb-2 text-sm text-foreground/62">
                    <span className="font-semibold text-foreground">
                      {item.pace} per km
                    </span>
                  </p>
                  <div className="flex h-10 w-full bg-foreground/[0.08] md:h-12">
                    <div
                      className={cn(
                        "flex items-center bg-accent px-3 text-xs font-bold text-background",
                        item.width
                      )}
                    >
                      {item.run} min
                    </div>
                    <div className="flex flex-1 items-center px-3 text-xs font-bold text-foreground/62">
                      {item.rest} min
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div
              aria-hidden="true"
              className="mt-3 flex justify-between text-[10px] font-bold uppercase tracking-[0.14em] text-foreground/40"
            >
              {MINUTE_MARKS.map((mark) => (
                <span key={mark}>{mark}</span>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Twaalf uur */}
        <div className="p-6 md:p-10">
          <Reveal>
            <div className="flex items-end justify-between gap-6">
              <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-foreground/40">
                Twaalf keer achter elkaar
              </p>
              <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-foreground/40">
                Afstand na elke ronde
              </p>
            </div>
            <ol className="mt-6 grid grid-cols-3 gap-x-2 gap-y-6 sm:grid-cols-6 lg:grid-cols-12">
              {HOURS.map((hour) => {
                const isLast = hour === HOURS.length;
                return (
                  <li key={hour}>
                    <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-foreground/40">
                      Uur {hour}
                    </p>
                    <div className="mt-2 flex h-2 bg-foreground/[0.12]" aria-hidden="true">
                      <div className="w-[60%] bg-accent" />
                    </div>
                    <p
                      className={cn(
                        "display-tight mt-3 text-base font-black uppercase md:text-lg",
                        isLast ? "text-accent" : "text-foreground"
                      )}
                    >
                      {hour * KM_PER_ROUND}
                      <span className="ml-1 text-[10px] text-foreground/40">km</span>
                    </p>
                  </li>
                );
              })}
            </ol>
            <p className="mt-8 max-w-2xl text-sm leading-7 text-foreground/62">
              Twaalf starts, twaalf ronden, 72 kilometer. De eerste uren voelen
              ruim. Daarna gaat het om de keuzes die je tussendoor maakt.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

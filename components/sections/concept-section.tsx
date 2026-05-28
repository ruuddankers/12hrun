import { Reveal } from "@/components/motion/reveal";
import { RecoveryTimeline } from "@/components/shared/recovery-timeline";
import { SectionIntro } from "@/components/shared/section-intro";

const rhythm = [
  ["01", "Start samen", "Ieder uur klinkt dezelfde afspraak: opnieuw naar buiten."],
  ["02", "Loop 5 km", "Niet maximaal, maar precies genoeg om later nog terug te komen."],
  ["03", "Herstel", "Eten, drinken, zitten, schoenen los, hoofd stil."],
  ["04", "Herhaal", "Twaalf keer wordt hetzelfde ritueel een andere ervaring."]
];

export function ConceptSection() {
  return (
    <section id="concept" className="px-3 pb-20 pt-28 md:px-5 md:pb-28 md:pt-36">
      <div className="container-page grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <Reveal>
          <div className="event-shell h-full p-6 md:p-10">
            <SectionIntro
              eyebrow="Het format"
              title="Run. Recover. Repeat."
              body="12h.run is eenvoudig genoeg om meteen te begrijpen, en zwaar genoeg om langzaam persoonlijk te worden."
            />
            <div className="mt-12 grid gap-px overflow-hidden rounded-[1.35rem] border border-foreground/12 bg-foreground/12">
              {rhythm.map(([number, title, body]) => (
                <div
                  key={number}
                  className="grid gap-4 bg-background/70 p-5 md:grid-cols-[5rem_1fr]"
                >
                  <span className="display-tight text-5xl font-black text-accent">
                    {number}
                  </span>
                  <div>
                    <h3 className="display-tight text-2xl font-black uppercase">
                      {title}
                    </h3>
                    <p className="mt-2 leading-7 text-foreground/66">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.12}>
          <div className="event-shell cinematic-panel h-full p-6 md:p-10">
            <div className="mb-8 flex flex-wrap items-end justify-between gap-5">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.22em] text-accent">
                  12 uur ritme
                </p>
                <h3 className="display-tight mt-3 text-4xl font-black uppercase md:text-6xl">
                  effort / rest
                </h3>
              </div>
              <p className="max-w-56 text-sm font-medium leading-6 text-foreground/58">
                De herstelruimte wordt ieder uur belangrijker dan de snelheid.
              </p>
            </div>
            <RecoveryTimeline />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

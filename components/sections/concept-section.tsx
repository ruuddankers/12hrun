import { Reveal } from "@/components/motion/reveal";
import { SectionIntro } from "@/components/shared/section-intro";

const rhythm = [
  ["01", "Start samen", "Ieder uur klinkt dezelfde afspraak: opnieuw naar buiten."],
  ["02", "Loop 5 km", "Niet maximaal, maar precies genoeg om later nog terug te komen."],
  ["03", "Herstel", "Eten, drinken, zitten, schoenen los, hoofd stil."],
  ["04", "Herhaal", "Twaalf keer wordt hetzelfde ritueel een andere ervaring."]
];

export function ConceptSection() {
  return (
    <section id="concept" className="border-b border-foreground/10 px-0 pb-20 pt-20 md:pb-28 md:pt-28">
      <div className="container-page">
        <Reveal>
          <div className="event-shell p-6 md:p-10">
            <SectionIntro
              eyebrow="Het format"
              title="12 uur lang. 5 kilometer per uur"
              body="12h.run is eenvoudig genoeg om meteen te begrijpen, en zwaar genoeg om langzaam persoonlijk te worden."
            />
            <div className="mt-12 grid gap-px overflow-hidden border border-foreground/12 bg-foreground/12">
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
      </div>
    </section>
  );
}

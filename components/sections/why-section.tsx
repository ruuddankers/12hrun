import Link from "next/link";
import { Reveal } from "@/components/motion/reveal";
import { CinematicImagePlaceholder } from "@/components/shared/cinematic-image-placeholder";
import { EnduranceQuote } from "@/components/shared/endurance-quote";
import { SectionIntro } from "@/components/shared/section-intro";
import { Button } from "@/components/ui/button";

export function WhySection() {
  return (
    <section id="waarom" className="border-y border-foreground/10 py-24 md:py-36">
      <div className="container-page grid gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <Reveal>
          <CinematicImagePlaceholder
            label="familie · balans · endurance"
            tone="recovery"
            className="min-h-[520px]"
          />
        </Reveal>
        <Reveal delay={0.15}>
          <SectionIntro
            eyebrow="Waarom dit bestaat"
            title="Een fysieke vorm voor iets dat elke dag aanwezig is."
          />
          <div className="mt-8 space-y-5 text-lg leading-8 text-foreground/72">
            <p>
              Boris, de vierjarige zoon van de oprichter, leeft met Type 1
              Diabetes. Dat betekent continu nadenken over energie, voeding,
              timing, herstel en balans.
            </p>
            <p>
              In endurance running komen dezelfde patronen terug. Je past aan,
              bewaakt wat er gebeurt, reageert op pieken en dalen en gaat door
              wanneer het ongemakkelijk wordt.
            </p>
            <p>
              12h.run vertaalt die werkelijkheid naar beweging, verbinding,
              bewustwording en fondsenwerving voor Stichting DON.
            </p>
          </div>
          <div className="mt-9">
            <Button asChild variant="outline">
              <Link href="/doneer">Lees over de missie</Link>
            </Button>
          </div>
        </Reveal>
      </div>
      <div className="container-page mt-20">
        <Reveal>
          <EnduranceQuote>
            Ergens na middernacht verandert het. Herstel wordt strategie. Stilte
            wordt onderdeel van de ronde.
          </EnduranceQuote>
        </Reveal>
      </div>
    </section>
  );
}

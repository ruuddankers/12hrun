import Link from "next/link";
import { Reveal } from "@/components/motion/reveal";
import { CinematicImagePlaceholder } from "@/components/shared/cinematic-image-placeholder";
import { EnduranceQuote } from "@/components/shared/endurance-quote";
import { EventMarquee } from "@/components/shared/event-marquee";
import { SectionIntro } from "@/components/shared/section-intro";
import { Button } from "@/components/ui/button";

export function WhySection() {
  return (
    <section id="waarom" className="py-20 md:py-28">
      <div className="container-page grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch">
        <Reveal>
          <CinematicImagePlaceholder
            label="balans / energie / familie"
            tone="recovery"
            className="min-h-[36rem]"
          />
        </Reveal>
        <Reveal delay={0.12}>
          <div className="event-shell flex h-full flex-col justify-between p-6 md:p-10">
            <div>
              <SectionIntro
                eyebrow="Waarom dit bestaat"
                title="Een event over energie."
              />
              <div className="mt-8 space-y-5 text-lg leading-8 text-foreground/72">
                <p>
                  Boris, de vierjarige zoon van de oprichter, leeft met Type 1
                  Diabetes. Dat betekent continu nadenken over voeding, timing,
                  herstel, beweging en balans.
                </p>
                <p>
                  Endurance running maakt die patronen fysiek. Je reageert op
                  pieken en dalen, bewaakt wat er gebeurt en leert opnieuw te
                  starten wanneer het ongemakkelijk wordt.
                </p>
                <p>
                  12h.run vertaalt die werkelijkheid naar beweging,
                  bewustwording en fondsenwerving voor Stichting DON.
                </p>
              </div>
            </div>
            <div className="mt-10">
              <Button asChild variant="outline">
                <Link href="/doneer">Lees over de missie</Link>
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
      <EventMarquee
        className="mt-20"
        children="Energy management is endurance"
      />
      <div className="container-page mt-16">
        <Reveal>
          <EnduranceQuote>
            Ergens na middernacht verandert het. Herstel wordt strategie.
          </EnduranceQuote>
        </Reveal>
      </div>
    </section>
  );
}

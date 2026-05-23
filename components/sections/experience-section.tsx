import { Reveal } from "@/components/motion/reveal";
import { CinematicImagePlaceholder } from "@/components/shared/cinematic-image-placeholder";
import { SectionIntro } from "@/components/shared/section-intro";

const moments = [
  "hoofdlampen in het donker",
  "warme voeding tussen rondes",
  "stille minuten voor de herstart",
  "vermoeidheid die langzaam optelt",
  "de eerste kleur van de ochtend",
  "een kleine groep die hetzelfde uur deelt"
];

export function ExperienceSection() {
  return (
    <section className="py-24 md:py-36">
      <div className="container-page">
        <Reveal>
          <SectionIntro
            eyebrow="De ervaring"
            title="Niet harder. Bewuster."
            body="De sfeer is klein, intens en menselijk. Geen massa-evenement, maar een zorgvuldig ritueel waarin iedere ronde hetzelfde begint en toch anders voelt."
          />
        </Reveal>
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          <Reveal>
            <CinematicImagePlaceholder label="nacht" tone="night" />
          </Reveal>
          <Reveal delay={0.12}>
            <CinematicImagePlaceholder label="herstel" tone="recovery" />
          </Reveal>
          <Reveal delay={0.24}>
            <CinematicImagePlaceholder label="zonsopkomst" tone="sunrise" />
          </Reveal>
        </div>
        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {moments.map((moment) => (
            <div
              key={moment}
              className="soft-border rounded-sm bg-foreground/[0.035] px-5 py-5 text-foreground/72"
            >
              {moment}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

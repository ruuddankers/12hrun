import { Reveal } from "@/components/motion/reveal";
import { CinematicImagePlaceholder } from "@/components/shared/cinematic-image-placeholder";
import { SectionIntro } from "@/components/shared/section-intro";

const moments = [
  ["Night", "Hoofdlampen, stilte en kleine rondes licht in het donker."],
  ["Recovery", "Bekers, eten, droge shirts en minuten die sneller gaan dan je wilt."],
  ["Repeat", "Dezelfde startlijn. Een ander lichaam. Een rustiger hoofd."],
  ["Morning", "Als het licht terugkomt, voelt elk uur anders dan het vorige."]
];

export function ExperienceSection() {
  return (
    <section className="px-3 py-20 md:px-5 md:py-28">
      <div className="container-page">
        <Reveal>
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <SectionIntro
              eyebrow="De ervaring"
              title="Een lange dag die langzaam nacht wordt."
              body="12h.run moet voelen als een compacte documentaire: weinig ruis, veel aandacht, en steeds dezelfde vraag of je opnieuw kunt beginnen."
            />
            <div className="grid gap-px overflow-hidden rounded-[1.35rem] border border-foreground/12 bg-foreground/12 sm:grid-cols-2">
              {moments.map(([title, body]) => (
                <div key={title} className="bg-background/72 p-5">
                  <h3 className="display-tight text-3xl font-black uppercase">
                    {title}
                  </h3>
                  <p className="mt-3 leading-7 text-foreground/64">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
        <div className="mt-8 grid gap-5 md:grid-cols-12">
          <Reveal className="md:col-span-5">
            <CinematicImagePlaceholder
              label="nacht"
              tone="night"
              className="min-h-[28rem]"
            />
          </Reveal>
          <Reveal delay={0.12} className="md:col-span-3">
            <CinematicImagePlaceholder
              label="herstel"
              tone="recovery"
              className="min-h-[28rem]"
            />
          </Reveal>
          <Reveal delay={0.24} className="md:col-span-4">
            <CinematicImagePlaceholder
              label="ochtend"
              tone="sunrise"
              className="min-h-[28rem]"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

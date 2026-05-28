import { Reveal } from "@/components/motion/reveal";
import { CinematicImagePlaceholder } from "@/components/shared/cinematic-image-placeholder";
import { EventMarquee } from "@/components/shared/event-marquee";

export function GallerySection() {
  return (
    <section className="py-20 md:py-28">
      <EventMarquee>Muziek van voeten - warme lampen - koude lucht</EventMarquee>
      <div className="container-page mt-10 px-3 md:px-5">
        <Reveal>
          <div className="grid gap-6 md:grid-cols-[0.9fr_1.1fr] md:items-end">
            <h2 className="display-tight text-5xl font-black uppercase leading-[0.9] md:text-8xl">
              De fotografie moet straks echt voelen.
            </h2>
            <p className="max-w-xl text-lg font-medium leading-8 text-foreground/68">
              Geen generieke hardloopbeelden. Wel handen rond bekers,
              hoofdlampen, stilte, vermoeidheid en het eerste licht na een
              lange nacht.
            </p>
          </div>
        </Reveal>
        <div className="mt-10 grid gap-5 md:grid-cols-12">
          <CinematicImagePlaceholder
            label="startlijn"
            tone="night"
            className="min-h-[24rem] md:col-span-7"
          />
          <CinematicImagePlaceholder
            label="voeding"
            tone="recovery"
            className="min-h-[24rem] md:col-span-5"
          />
          <CinematicImagePlaceholder
            label="herstart"
            tone="recovery"
            className="min-h-[22rem] md:col-span-4"
          />
          <CinematicImagePlaceholder
            label="zonsopkomst"
            tone="sunrise"
            className="min-h-[22rem] md:col-span-8"
          />
        </div>
      </div>
    </section>
  );
}

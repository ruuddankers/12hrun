import { Reveal } from "@/components/motion/reveal";
import { CinematicImagePlaceholder } from "@/components/shared/cinematic-image-placeholder";

export function GallerySection() {
  return (
    <section className="py-24 md:py-36">
      <div className="container-page">
        <Reveal>
          <div className="grid gap-6 md:grid-cols-[0.8fr_1.2fr] md:items-end">
            <h2 className="display-tight text-4xl font-bold leading-tight md:text-7xl">
              Beelden komen later. De sfeer staat nu al.
            </h2>
            <p className="max-w-xl text-lg leading-8 text-foreground/68">
              De eerste fotografie moet echt voelen: koude lucht, warme lampen,
              handen rond bekers, schoenen bij de startlijn en gezichten die
              weten dat er nog een uur komt.
            </p>
          </div>
        </Reveal>
        <div className="mt-14 grid gap-5 md:grid-cols-4">
          <CinematicImagePlaceholder
            label="startlijn"
            tone="night"
            className="md:col-span-2"
          />
          <CinematicImagePlaceholder label="voeding" tone="recovery" />
          <CinematicImagePlaceholder label="stilte" tone="night" />
          <CinematicImagePlaceholder label="herstart" tone="recovery" />
          <CinematicImagePlaceholder
            label="ochtend"
            tone="sunrise"
            className="md:col-span-3"
          />
        </div>
      </div>
    </section>
  );
}

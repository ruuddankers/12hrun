import { Reveal } from "@/components/motion/reveal";

export function ConceptSection() {
  return (
    <section
      id="concept"
      className="flex min-h-[calc(100svh-4rem)] items-center border-b border-foreground/10 px-0 py-20"
    >
      <div className="container-page px-6 py-20 text-center md:px-10 md:py-28">
        <Reveal>
          <h1 className="display-tight mx-auto max-w-6xl text-5xl font-black uppercase leading-[0.94] text-foreground md:text-8xl lg:text-9xl">
            12 uur lang.
            <br />
            5 kilometer per uur.
          </h1>
          <p className="mt-8 text-sm font-bold uppercase tracking-[0.18em] text-foreground/62 md:text-base">
            23 mei 2027 - Berkel-Enschot
          </p>
        </Reveal>
      </div>
    </section>
  );
}

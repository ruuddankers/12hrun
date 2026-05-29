import { Reveal } from "@/components/motion/reveal";
import { RouteMap } from "@/components/shared/route-map";

export function ConceptSection() {
  return (
    <section
      id="concept"
      className="relative -mt-20 min-h-svh overflow-hidden bg-background px-0"
    >
      <RouteMap />
      <div className="pointer-events-none relative z-10 -mt-28 mx-auto w-full max-w-[1340px] px-6 pb-20 pt-0 text-center md:-mt-36 md:px-10 md:pb-28">
        <Reveal>
          <h1 className="display-tight mx-auto grid max-w-4xl gap-2 text-4xl font-black uppercase leading-[1.02] text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            <span>12 uur lang.</span>
            <span>5 KM per uur.</span>
            <span>60 KM RUN.</span>
          </h1>
          <p className="mt-8 text-sm font-bold uppercase tracking-[0.18em] text-foreground/78 md:text-base">
            23 mei 2027 - Berkel-Enschot
          </p>
        </Reveal>
      </div>
    </section>
  );
}

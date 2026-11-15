import { Reveal } from "@/components/motion/reveal";

export function ConceptSection() {
  return (
    <section
      id="concept"
      className="relative bg-background px-6 pb-16 pt-12 text-center md:px-10 md:pb-28 md:pt-24"
    >
      <Reveal>
        <h1 className="display-tight mx-auto grid max-w-7xl gap-1 text-[clamp(1.25rem,5.6vw,4.5rem)] font-black uppercase leading-[1.02] text-foreground md:gap-2">
          <span>5 KM per uur.</span>
          <span>12 uur lang.</span>
          <span>60 KM hardlopen.</span>
          <span className="text-accent">1 gezamenlijk doel.</span>
        </h1>
      </Reveal>
    </section>
  );
}

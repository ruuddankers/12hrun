import Image from "next/image";

import { Reveal } from "@/components/motion/reveal";

export function ConceptSection() {
  return (
    <section
      id="concept"
      className="relative -mt-20 overflow-hidden bg-background px-3 pb-20 pt-36 md:px-5 md:pb-36 md:pt-52"
    >
      <Image
        src="/hero-runners.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-40"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/20 to-background"
      />
      <Reveal className="relative mx-auto w-[min(100%-1.25rem,1340px)] px-6">
        <h1 className="display-tight grid gap-1 text-[clamp(1.125rem,5vw,4.5rem)] font-black uppercase leading-[1.02] text-foreground md:gap-2">
          <span>5 KM per uur.</span>
          <span>12 uur lang.</span>
          <span>60 KM hardlopen.</span>
          <span className="text-accent">1 gezamenlijk doel.</span>
        </h1>
      </Reveal>
    </section>
  );
}

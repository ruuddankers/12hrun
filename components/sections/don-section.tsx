import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { AnimatedDotSystem } from "@/components/shared/animated-dot-system";
import { Button } from "@/components/ui/button";

export function DonSection() {
  return (
    <section className="px-3 py-20 md:px-5 md:py-28">
      <div className="container-page">
        <Reveal>
          <div className="event-shell cinematic-panel grid gap-10 p-6 md:p-10 lg:grid-cols-[18rem_1fr] lg:items-center">
            <div className="mx-auto flex aspect-square w-full max-w-72 items-center justify-center rounded-full border border-foreground/12 bg-background/42">
              <AnimatedDotSystem className="w-52" />
            </div>
            <div>
              <p className="mb-5 text-xs font-black uppercase tracking-[0.22em] text-accent">
                Stichting DON
              </p>
              <h2 className="display-tight max-w-5xl text-5xl font-black uppercase leading-[0.9] md:text-8xl">
                Rennen voor een toekomst zonder Type 1 Diabetes.
              </h2>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-foreground/72">
                Stichting DON financiert onderzoek naar genezing van Type 1
                Diabetes. 12h.run ondersteunt die missie via aandacht,
                beweging en donaties.
              </p>
              <div className="mt-8">
                <Button asChild>
                  <Link href="/doneer">
                    Support de missie
                    <ArrowUpRight className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

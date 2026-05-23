import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { AnimatedDotSystem } from "@/components/shared/animated-dot-system";
import { Button } from "@/components/ui/button";

export function DonSection() {
  return (
    <section className="border-y border-foreground/10 py-20 md:py-28">
      <div className="container-page grid gap-12 md:grid-cols-[0.7fr_1.3fr] md:items-center">
        <Reveal>
          <AnimatedDotSystem compact className="mx-auto md:mx-0" />
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-accent">
            Stichting DON
          </p>
          <h2 className="display-tight max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
            Rennen voor een toekomst zonder Type 1 Diabetes.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-foreground/72">
            Stichting DON financiert onderzoek naar genezing van Type 1
            Diabetes. 12h.run ondersteunt die missie via aandacht, beweging en
            donaties.
          </p>
          <div className="mt-8">
            <Button asChild>
              <Link href="/doneer">
                Support de missie
                <ArrowUpRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

import Link from "next/link";
import { ArrowDown, HeartHandshake } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { AnimatedDotSystem } from "@/components/shared/animated-dot-system";
import { Button } from "@/components/ui/button";
import { interestMailto } from "@/lib/utils";

export function HeroSection() {
  return (
    <section className="relative min-h-[94svh] overflow-hidden pt-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_24%,rgba(240,105,57,0.22),transparent_22rem),linear-gradient(180deg,rgba(17,17,17,0.18),#111111_88%)]" />
      <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-background to-transparent" />
      <div className="container-page relative grid min-h-[calc(94svh-7rem)] items-center gap-12 py-12 lg:grid-cols-[1.05fr_0.95fr]">
        <Reveal>
          <div>
            <p className="mb-7 text-xs font-semibold uppercase tracking-[0.28em] text-accent">
              Eerste editie · juni 2027 · omgeving Berkel
            </p>
            <h1 className="display-tight max-w-4xl text-6xl font-extrabold leading-[0.94] text-foreground md:text-8xl lg:text-9xl">
              12 rondes.
              <br />
              12 uur.
              <br />
              Een gedeeld ritme.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-foreground/72 md:text-2xl md:leading-9">
              Een boutique endurance experience gebouwd rond ritme, herstel en
              veerkracht.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <a href={interestMailto}>Meld interesse</a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/doneer">
                  <HeartHandshake className="h-5 w-5" />
                  Support de missie
                </Link>
              </Button>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="relative mx-auto flex aspect-square w-full max-w-[520px] items-center justify-center">
            <div className="absolute inset-10 rounded-full border border-foreground/10" />
            <div className="absolute inset-24 rounded-full border border-accent/20" />
            <AnimatedDotSystem className="w-64 md:w-80" />
            <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-3 rounded-full border border-foreground/12 bg-background/58 px-4 py-2 text-xs uppercase tracking-[0.18em] text-foreground/68 backdrop-blur">
              <span>12 x 5 km</span>
              <span className="h-1 w-1 rounded-full bg-accent" />
              <span>60 km max</span>
            </div>
          </div>
        </Reveal>
      </div>
      <a
        href="#concept"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-xs uppercase tracking-[0.24em] text-foreground/52 md:flex"
      >
        Scroll
        <ArrowDown className="h-4 w-4" />
      </a>
    </section>
  );
}

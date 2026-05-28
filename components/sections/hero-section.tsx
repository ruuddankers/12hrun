import Link from "next/link";
import { ArrowDown, HeartHandshake, MapPin } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { AnimatedDotSystem } from "@/components/shared/animated-dot-system";
import { EventMarquee } from "@/components/shared/event-marquee";
import { Button } from "@/components/ui/button";
import { interestMailto } from "@/lib/utils";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden px-3 pb-3 pt-24 md:px-5 md:pt-28">
      <div className="event-shell relative min-h-[calc(100svh-7rem)] overflow-hidden px-4 py-6 md:px-8 md:py-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_68%_18%,rgba(240,105,57,0.24),transparent_24rem),linear-gradient(180deg,rgba(17,17,17,0.08),#111111_86%)]" />
        <div className="absolute inset-x-0 top-24 h-px bg-foreground/12" />
        <div className="relative flex min-h-[calc(100svh-11rem)] flex-col justify-between gap-10">
          <Reveal>
            <div className="grid gap-4 pt-2 text-xs font-black uppercase tracking-[0.18em] text-foreground/72 md:grid-cols-3">
              <a href="#details" className="inline-flex items-center gap-2 hover:text-foreground">
                <MapPin className="h-4 w-4 text-accent" />
                Omgeving Berkel
              </a>
              <span className="hidden text-center md:block">Juni 2027</span>
              <span className="hidden text-right md:block">12 x 5 km</span>
            </div>
          </Reveal>

          <div className="grid items-end gap-8 lg:grid-cols-[1fr_18rem]">
            <Reveal>
              <div>
                <p className="mb-5 max-w-xl text-sm font-bold uppercase tracking-[0.16em] text-accent md:text-base">
                  Boutique endurance event voor ritme, herstel en veerkracht.
                </p>
                <h1 className="display-tight text-[clamp(4.6rem,17vw,15.5rem)] font-black uppercase leading-[0.72] text-foreground">
                  12h
                  <br />
                  run
                </h1>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="grid gap-5">
                <div className="relative flex aspect-square items-center justify-center rounded-full border border-foreground/12 bg-background/42">
                  <div className="absolute inset-8 rounded-full border border-accent/20" />
                  <AnimatedDotSystem className="w-52" />
                </div>
                <p className="text-lg font-medium leading-7 text-foreground/76">
                  Iedereen start elk uur samen. Wat je overhoudt, is herstel.
                  Wat zich opstapelt, is het echte werk.
                </p>
                <div className="flex flex-col gap-3">
                  <Button asChild size="lg">
                    <a href={interestMailto}>Meld interesse</a>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="/doneer">
                      <HeartHandshake className="h-5 w-5" />
                      Support DON
                    </Link>
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.22}>
            <div className="grid gap-px overflow-hidden rounded-[1.35rem] border border-foreground/12 bg-foreground/12 md:grid-cols-4">
              {[
                ["Volume", "01"],
                ["Duur", "12 uur"],
                ["Afstand", "60 km max"],
                ["Deelnemers", "20-25"]
              ].map(([label, value]) => (
                <div key={label} className="bg-background/72 p-5">
                  <p className="text-[0.68rem] font-black uppercase tracking-[0.2em] text-foreground/44">
                    {label}
                  </p>
                  <p className="display-tight mt-3 text-3xl font-black uppercase md:text-5xl">
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
      <EventMarquee>12 rondes - 12 uur - een gedeeld ritme</EventMarquee>
      <a
        href="#concept"
        className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 items-center gap-2 rounded-full border border-foreground/12 bg-background/70 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-foreground/62 backdrop-blur md:flex"
      >
        Scroll
        <ArrowDown className="h-4 w-4" />
      </a>
    </section>
  );
}

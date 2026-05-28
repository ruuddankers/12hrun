import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, HeartHandshake, Mail } from "lucide-react";
import { AnimatedDotSystem } from "@/components/shared/animated-dot-system";
import { EventMarquee } from "@/components/shared/event-marquee";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Doneer",
  description:
    "De toekomstige donatiepagina van 12h.run voor Stichting DON en onderzoek naar genezing van Type 1 Diabetes."
};

export default function DonatePage() {
  return (
    <main className="min-h-screen px-3 py-3 md:px-5">
      <section className="event-shell cinematic-panel relative min-h-[calc(100vh-1.5rem)] overflow-hidden px-5 py-6 md:min-h-[calc(100vh-2.5rem)] md:px-10 md:py-8">
        <header className="relative z-10 flex items-center justify-between gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-foreground/14 bg-background/50 px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-foreground/72 transition hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Terug
          </Link>
          <Image
            src="/12hrun-logo.svg"
            alt="12h.run"
            width={132}
            height={54}
            className="h-8 w-auto"
          />
        </header>

        <div className="relative z-10 grid min-h-[calc(100vh-13rem)] items-end gap-12 py-16 lg:grid-cols-[1fr_20rem]">
          <div>
            <p className="mb-6 text-xs font-black uppercase tracking-[0.24em] text-accent">
              Stichting DON
            </p>
            <h1 className="display-tight max-w-6xl text-[clamp(3.5rem,12vw,11rem)] font-black uppercase leading-[0.75]">
              De missie krijgt een eigen ritme.
            </h1>
            <p className="mt-8 max-w-2xl text-lg font-medium leading-8 text-foreground/72 md:text-xl">
              Deze pagina is voorbereid voor de campagne rond de eerste editie.
              Totdat de officiële donatielink klaarstaat, gebruiken we deze plek
              om de missie helder te houden: meer aandacht en middelen voor
              onderzoek naar genezing van Type 1 Diabetes.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <a href="mailto:hello@12h.run?subject=Donatie%20voor%2012h.run%20en%20Stichting%20DON">
                  <Mail className="h-5 w-5" />
                  Vraag donatie-info
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a
                  href="https://www.stichtingdon.nl/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <HeartHandshake className="h-5 w-5" />
                  Stichting DON
                </a>
              </Button>
            </div>
          </div>

          <div className="mx-auto flex aspect-square w-full max-w-80 items-center justify-center rounded-full border border-foreground/12 bg-background/42">
            <AnimatedDotSystem className="w-56" />
          </div>
        </div>
      </section>
      <EventMarquee>Support the mission - Stichting DON - 12h.run</EventMarquee>
    </main>
  );
}

import Link from "next/link";
import { Mail } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { interestMailto } from "@/lib/utils";

export function FinalCtaSection() {
  return (
    <section className="px-3 pb-3 pt-16 md:px-5 md:pt-24">
      <Reveal>
        <div className="event-shell cinematic-panel mx-auto max-w-[1500px] px-5 py-16 text-center md:px-12 md:py-24">
          <p className="mb-6 text-xs font-black uppercase tracking-[0.24em] text-accent">
            Eerste editie
          </p>
          <h2 className="display-tight mx-auto max-w-6xl text-[clamp(3.5rem,12vw,11rem)] font-black uppercase leading-[0.75]">
            Start mee in het eerste uur.
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-lg font-medium leading-8 text-foreground/70">
            Een kleine groep. Twaalf gedeelde starts. Een event dat rustig
            begint en langzaam groter wordt dan de afstand.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <Button asChild size="lg">
              <a href={interestMailto}>
                <Mail className="h-5 w-5" />
                Registreer interesse
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/doneer">Support de missie</Link>
            </Button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

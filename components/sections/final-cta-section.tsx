import Link from "next/link";
import { Mail } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { interestMailto } from "@/lib/utils";

export function FinalCtaSection() {
  return (
    <section className="px-4 pb-6">
      <Reveal>
        <div className="cinematic-panel mx-auto max-w-[1380px] rounded-sm px-6 py-20 text-center md:px-12 md:py-28">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.24em] text-accent">
            Eerste editie
          </p>
          <h2 className="display-tight mx-auto max-w-4xl text-5xl font-extrabold leading-[0.98] md:text-8xl">
            Alleen een kleine groep start aan het eerste uur.
          </h2>
          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-foreground/70">
            Geen massa. Geen luide finishboog. Wel twaalf gedeelde momenten om
            opnieuw te beginnen.
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

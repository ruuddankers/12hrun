import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/motion/reveal";
import { SiteFooter } from "@/components/sections/site-footer";
import { SiteHeader } from "@/components/sections/site-header";

export const metadata: Metadata = {
  title: "Doneren",
};

export default function Doneren() {
  return (
    <>
      <SiteHeader />
      <main>
        {/* Hero */}
        <section className="relative -mt-20 bg-background px-3 md:px-5">
          <div className="container-page [border-inline:none] px-6 pb-16 pt-40 md:px-10 md:pt-52">
            <Reveal>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.14em] text-accent">
                12h.run × Stichting DON
              </p>
              <h1 className="display-tight text-5xl font-black uppercase leading-none text-foreground md:text-7xl">
                Doneren
              </h1>
              <p className="mt-6 max-w-xl text-base leading-7 text-foreground/62">
                Met een donatie steun je direct wetenschappelijk onderzoek naar
                Type&nbsp;1 diabetes. 12h.run draagt een deel van de opbrengst
                af aan Stichting DON.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Donatie-info */}
        <section className="bg-background px-3 py-10 md:px-5">
          <div className="container-page event-shell flex flex-col gap-8 p-6 md:flex-row md:gap-16 md:p-10">
            <div className="flex-1">
              <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-foreground/40">
                Overmaken
              </p>
              <p className="mt-3 font-[family-name:var(--font-benzin)] text-2xl font-black uppercase text-foreground md:text-3xl">
                NL00 BANK 0000 0000 00
              </p>
              <p className="mt-2 text-sm text-foreground/56">
                t.n.v. Stichting DON — o.v.v. 12h.run
              </p>
            </div>
            <div className="flex-1">
              <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-foreground/40">
                Vragen
              </p>
              <p className="mt-3 text-sm leading-7 text-foreground/62">
                Andere manieren om te ondersteunen of vragen over de donatie?{" "}
                <a
                  href="mailto:hello@12h.run"
                  className="text-accent hover:underline"
                >
                  Stuur ons een bericht.
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* Over Stichting DON */}
        <section className="bg-background px-3 py-10 md:px-5">
          <div className="container-page event-shell flex flex-col gap-8 p-6 md:flex-row md:items-start md:gap-12 md:p-8">
            <div className="flex-1">
              <Reveal>
                <h2 className="display-tight text-2xl font-black uppercase leading-tight text-foreground md:text-3xl">
                  Stichting DON
                </h2>
                <p className="mt-4 max-w-prose text-sm leading-7 text-foreground/62">
                  Stichting DON financiert wetenschappelijk onderzoek dat de
                  kwaliteit van leven verbetert voor mensen met Type&nbsp;1
                  diabetes. 12h.run is opgezet vanuit een persoonlijke
                  verbinding met dit thema. Iedere editie dragen we bij aan dit
                  werk.
                </p>
                <a
                  href="https://www.stichtingdon.nl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-block text-xs font-bold uppercase tracking-[0.12em] text-accent hover:underline"
                >
                  Bezoek stichtingdon.nl →
                </a>
              </Reveal>
            </div>
            <div className="aspect-[4/3] w-full flex-shrink-0 border border-foreground/10 bg-panel md:w-80 lg:w-96" />
          </div>
        </section>

        {/* Terug */}
        <section className="bg-background px-3 pb-16 pt-4 md:px-5">
          <div className="container-page [border-inline:none] px-6 md:px-8">
            <Link
              href="/"
              className="text-xs font-bold uppercase tracking-[0.12em] text-foreground/40 transition-colors hover:text-foreground"
            >
              ← Terug
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

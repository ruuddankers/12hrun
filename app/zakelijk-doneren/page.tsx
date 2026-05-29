import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/motion/reveal";
import { SiteFooter } from "@/components/sections/site-footer";
import { SiteHeader } from "@/components/sections/site-header";

export const metadata: Metadata = {
  title: "Zakelijk Doneren",
};

export default function ZakelijkDoneren() {
  return (
    <>
      <SiteHeader />
      <main>
        {/* Hero */}
        <section className="relative -mt-20 bg-background px-3 md:px-5">
          <div className="container-page [border-inline:none] px-6 pb-16 pt-40 md:px-10 md:pt-52">
            <Reveal>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.14em] text-accent">
                12h.run × Zakelijke partners
              </p>
              <h1 className="display-tight text-5xl font-black uppercase leading-none text-foreground md:text-7xl">
                Zakelijk<br />Doneren
              </h1>
              <p className="mt-6 max-w-xl text-base leading-7 text-foreground/62">
                Als zakelijke partner draag je bij aan wetenschappelijk
                onderzoek naar Type&nbsp;1 diabetes en ondersteun je een
                kleinschalig endurance event met een sterk verhaal.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Formulier */}
        <section className="bg-background px-3 py-10 md:px-5">
          <div className="container-page event-shell overflow-hidden">
            <div className="border-b border-foreground/[0.14] px-6 py-4">
              <h2 className="display-tight text-xl font-black uppercase text-foreground">
                Neem contact op
              </h2>
            </div>
            <form
              action="mailto:hello@12h.run"
              method="post"
              encType="text/plain"
              className="grid gap-6 p-6 md:grid-cols-2 md:p-8"
            >
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold uppercase tracking-[0.14em] text-foreground/40">
                  Bedrijfsnaam
                </label>
                <input
                  type="text"
                  name="bedrijfsnaam"
                  required
                  className="border border-foreground/10 bg-transparent px-4 py-3 text-sm text-foreground placeholder:text-foreground/24 focus:border-foreground/30 focus:outline-none"
                  placeholder="Uw bedrijfsnaam"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold uppercase tracking-[0.14em] text-foreground/40">
                  Contactpersoon
                </label>
                <input
                  type="text"
                  name="contactpersoon"
                  required
                  className="border border-foreground/10 bg-transparent px-4 py-3 text-sm text-foreground placeholder:text-foreground/24 focus:border-foreground/30 focus:outline-none"
                  placeholder="Naam"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold uppercase tracking-[0.14em] text-foreground/40">
                  E-mailadres
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="border border-foreground/10 bg-transparent px-4 py-3 text-sm text-foreground placeholder:text-foreground/24 focus:border-foreground/30 focus:outline-none"
                  placeholder="naam@bedrijf.nl"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold uppercase tracking-[0.14em] text-foreground/40">
                  Telefoonnummer <span className="normal-case tracking-normal text-foreground/24">(optioneel)</span>
                </label>
                <input
                  type="tel"
                  name="telefoon"
                  className="border border-foreground/10 bg-transparent px-4 py-3 text-sm text-foreground placeholder:text-foreground/24 focus:border-foreground/30 focus:outline-none"
                  placeholder="+31 6 00 00 00 00"
                />
              </div>
              <div className="flex flex-col gap-2 md:col-span-2">
                <label className="text-[10px] font-bold uppercase tracking-[0.14em] text-foreground/40">
                  Bericht
                </label>
                <textarea
                  name="bericht"
                  rows={5}
                  className="resize-none border border-foreground/10 bg-transparent px-4 py-3 text-sm text-foreground placeholder:text-foreground/24 focus:border-foreground/30 focus:outline-none"
                  placeholder="Vertel ons meer over hoe u wilt bijdragen."
                />
              </div>
              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="display-tight bg-accent px-8 py-3 text-sm font-black uppercase tracking-[0.1em] text-background transition-opacity hover:opacity-90"
                >
                  Verstuur
                </button>
              </div>
            </form>
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

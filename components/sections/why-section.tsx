import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";

export function WhySection() {
  return (
    <section id="waarom" className="bg-background px-3 py-10 md:px-5">
      <div className="container-page event-shell overflow-hidden !bg-foreground">
        <div className="flex flex-col md:flex-row md:items-stretch">
          <div className="flex-1 p-6 md:p-10">
            <Reveal>
              <h2 className="display-tight mb-6 text-xl font-black uppercase text-background">
                Waarom we lopen
              </h2>
              <div className="flex flex-col gap-5 text-sm leading-7 text-background/70">
                <p>
                  Toen onze zoon Boris diabetes type 1 kreeg, werd ik
                  geconfronteerd met de impact van een ziekte waar veel mensen
                  wel van hebben gehoord, maar waarvan de dagelijkse realiteit
                  vaak onzichtbaar blijft. Ondanks alle ontwikkelingen in de
                  zorg is diabetes type 1 nog altijd een chronische aandoening
                  die voortdurend aandacht vraagt.
                </p>
                <p>
                  Samen met vrienden, familie, hardlopers, vrijwilligers,
                  sponsors en supporters wil ik zoveel mogelijk geld inzamelen
                  voor Stichting DON en bijdragen aan onderzoek naar een
                  toekomst zonder diabetes type 1.
                </p>
                <p>
                  Ik hoop dat dit evenement niet alleen een bijzondere dag
                  wordt, maar ook het begin van iets dat echt verschil kan
                  maken. Help je mee?
                </p>
              </div>
              <p className="mt-8 font-[family-name:var(--font-caveat)] text-2xl text-background">
                Ruud Dankers
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="mailto:dankersruud@gmail.com"
                  className="display-tight border border-background px-6 py-2.5 text-sm font-black uppercase tracking-[0.1em] text-background transition-colors hover:bg-accent/10"
                >
                  Ik wil deelnemen
                </a>
                <a
                  href="mailto:dankersruud@gmail.com"
                  className="display-tight border border-background px-6 py-2.5 text-sm font-black uppercase tracking-[0.1em] text-background transition-colors hover:bg-accent/10"
                >
                  Ik wil helpen
                </a>
              </div>
            </Reveal>
          </div>
          <div className="flex-1 overflow-hidden p-6 md:p-10">
            <Image
              src="/ruud-12h-run.jpg"
              alt="Ruud Dankers"
              width={1000}
              height={1000}
              className="w-full h-auto"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

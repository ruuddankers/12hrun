import Image from "next/image";
import { Reveal } from "@/components/motion/reveal";

export function WhySection() {
  return (
    <section id="waarom" className="bg-background px-3 py-10 md:px-5">
      <div className="container-page event-shell overflow-hidden">
        <div className="border-b border-foreground/[0.14] px-6 py-4">
          <h2 className="display-tight text-xl font-black uppercase text-foreground">
            Waarom we lopen
          </h2>
        </div>
        <div className="flex flex-col md:flex-row md:items-stretch">
          <div className="flex-1 p-6 md:p-10">
            <Reveal>
              <div className="flex flex-col gap-5 text-sm leading-7 text-foreground/62">
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
              <p className="mt-8 text-sm font-semibold text-foreground">
                Ruud Dankers
              </p>
            </Reveal>
          </div>
          <div className="relative aspect-[3/4] w-full flex-1 overflow-hidden md:aspect-auto">
            <Image
              src="/ruud-12h-run.jpg"
              alt="Ruud Dankers"
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

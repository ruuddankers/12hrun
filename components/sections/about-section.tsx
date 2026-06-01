import { Reveal } from "@/components/motion/reveal";

export function AboutSection() {
  return (
    <section id="over" className="bg-background px-3 py-10 md:px-5">
      <div className="container-page event-shell overflow-hidden">
        <div className="border-b border-foreground/[0.14] px-6 py-4">
          <h2 className="display-tight text-xl font-black uppercase text-foreground">
            12H Run{" "}
            <br className="md:hidden" />
            <span className="whitespace-nowrap">Berkel-Enschot</span>
          </h2>
        </div>
        <div className="p-6 md:p-10">
          <Reveal>
            <div className="text-sm leading-7 text-foreground/62 md:columns-2 md:gap-12">
              <p className="mb-5">
                Twaalf uur lang draait alles om het vinden van de juiste
                balans. Wanneer eet je? Wanneer neem je rust? Kun je nog een
                ronde op hetzelfde tempo door, of is het slimmer om even gas
                terug te nemen? Iedere ronde vraagt iets anders van je
                lichaam. 12H Run Berkel-Enschot is geen wedstrijd tegen de
                klok. Het is een uitdaging waarin je ieder uur opnieuw aan de
                start verschijnt voor een ronde van vijf kilometer. Niet om zo
                snel mogelijk te zijn, maar om slim om te gaan met wat je nog
                in de tank hebt. Naarmate de dag vordert, wordt dat steeds
                belangrijker.
              </p>
              <p className="mb-5">
                Iedere deelnemer ervaart een dag lang hoe bepalend die keuzes
                kunnen zijn. Voor mensen met diabetes type 1 stopt dat niet na
                twaalf uur. Ondanks de fantastische zorg in Nederland blijft
                diabetes type 1 een chronische ziekte die dag en nacht
                aandacht vraagt. Van het ontbijt tot een training, van een
                drukke werkdag tot de uren waarin je slaapt: bloedsuikerwaarden
                spelen altijd mee.
              </p>
              <p className="mb-6">
                Met de 12H Run halen we geld op voor onderzoek naar diabetes
                type 1 en vergroten we de aandacht voor de impact van deze
                ziekte. We vragen geen medelijden. We nodigen mensen uit om
                zelf een uitdaging aan te gaan en tegelijkertijd bij te dragen
                aan een toekomst waarin diabetes type 1 minder impact heeft op
                het dagelijks leven van duizenden mensen.
              </p>
              <p className="break-inside-avoid font-[family-name:var(--font-caveat)] text-2xl text-accent md:text-3xl">
                Voor een toekomst zonder diabetes type&nbsp;1.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

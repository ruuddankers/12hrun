import { Reveal } from "@/components/motion/reveal";
import { SectionIntro } from "@/components/shared/section-intro";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Moet ik alle 12 rondes voltooien?",
    answer:
      "Nee. De maximale afstand is 60 km, maar stoppen hoort bij het format. Je prestatie is het aantal rondes dat je bewust en veilig afmaakt."
  },
  {
    question: "Is het een race?",
    answer:
      "Niet in de traditionele zin. Iedereen start elk uur samen. Tempo helpt bij herstel, maar te veel snelheid kan later tegen je werken."
  },
  {
    question: "Welk tempo is nodig?",
    answer:
      "Je moet 5 km binnen een uur kunnen afronden, inclusief terugkomen, eten, drinken en voorbereiden op de volgende start."
  },
  {
    question: "Kunnen supporters komen kijken?",
    answer:
      "Ja, in beperkte en rustige vorm. De eerste editie blijft compact, zodat deelnemers ruimte houden voor herstel en focus."
  },
  {
    question: "Hoe werkt fundraising?",
    answer:
      "De donatieflow wordt richting de eerste editie verder uitgewerkt. De opbrengst en aandacht gaan naar Stichting DON."
  },
  {
    question: "Wat gebeurt er als ik vroeg stop?",
    answer:
      "Dan blijf je onderdeel van de dag. Je kunt herstellen, supporten en de rest van de groep door de volgende uren heen helpen."
  }
];

export function FaqSection() {
  return (
    <section id="faq" className="py-24 md:py-36">
      <div className="container-page grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <SectionIntro
            eyebrow="FAQ"
            title="Praktisch, maar niet platgeslagen."
            body="De eerste editie wordt bewust klein gehouden. Deze antwoorden geven richting; details volgen zodra locatie en inschrijving definitief zijn."
          />
        </Reveal>
        <Reveal delay={0.12}>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={faq.question} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}

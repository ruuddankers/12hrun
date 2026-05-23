import { Calendar, Flag, MapPin, Route, Users, Waves } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { SectionIntro } from "@/components/shared/section-intro";

const details = [
  { icon: Calendar, label: "Wanneer", value: "Juni 2027" },
  { icon: MapPin, label: "Waar", value: "Omgeving Berkel, Nederland" },
  { icon: Route, label: "Format", value: "12 x 5 km" },
  { icon: Flag, label: "Maximum", value: "60 km" },
  { icon: Users, label: "Eerste editie", value: "Circa 20-25 deelnemers" },
  { icon: Waves, label: "Doel", value: "Fundraising voor Stichting DON" }
];

export function DetailsSection() {
  return (
    <section id="details" className="py-24 md:py-36">
      <div className="container-page">
        <Reveal>
          <SectionIntro
            eyebrow="Event details"
            title="Klein van opzet. Groot in duur."
            body="De eerste editie is bewust beperkt. Een compacte groep start ieder uur samen en ontdekt hoe ver ritme, herstel en veerkracht kunnen dragen."
          />
        </Reveal>
        <div className="mt-14 grid gap-px overflow-hidden rounded-sm border border-foreground/12 bg-foreground/12 md:grid-cols-2 lg:grid-cols-3">
          {details.map((detail) => (
            <div
              key={detail.label}
              className="bg-background p-6 transition duration-300 hover:bg-foreground/[0.045]"
            >
              <detail.icon className="mb-10 h-6 w-6 text-accent" />
              <p className="text-xs uppercase tracking-[0.2em] text-foreground/48">
                {detail.label}
              </p>
              <p className="display-tight mt-3 text-2xl font-semibold leading-tight">
                {detail.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

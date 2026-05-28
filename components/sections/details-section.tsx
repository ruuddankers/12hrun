import { Calendar, Flag, MapPin, Route, Users, Waves } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { SectionIntro } from "@/components/shared/section-intro";

const details = [
  { icon: Calendar, label: "Wanneer", value: "Juni 2027" },
  { icon: MapPin, label: "Waar", value: "Omgeving Berkel" },
  { icon: Route, label: "Rondes", value: "12 x 5 km" },
  { icon: Flag, label: "Maximum", value: "60 km" },
  { icon: Users, label: "Veld", value: "20-25 lopers" },
  { icon: Waves, label: "Missie", value: "Stichting DON" }
];

export function DetailsSection() {
  return (
    <section id="details" className="px-3 py-20 md:px-5 md:py-28">
      <div className="container-page">
        <Reveal>
          <div className="event-shell p-6 md:p-10">
            <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
              <SectionIntro
                eyebrow="Event details"
                title="Klein veld. Lange tijd."
                body="De eerste editie is bewust beperkt. Niet omdat het exclusief moet klinken, maar omdat aandacht onderdeel is van het format."
              />
              <div className="grid gap-px overflow-hidden rounded-[1.35rem] border border-foreground/12 bg-foreground/12 sm:grid-cols-2 lg:grid-cols-3">
                {details.map((detail) => (
                  <div
                    key={detail.label}
                    className="min-h-52 bg-background/72 p-5 transition duration-300 hover:bg-foreground/[0.055]"
                  >
                    <detail.icon className="mb-10 h-6 w-6 text-accent" />
                    <p className="text-[0.68rem] font-black uppercase tracking-[0.2em] text-foreground/44">
                      {detail.label}
                    </p>
                    <p className="display-tight mt-3 text-3xl font-black uppercase leading-none">
                      {detail.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

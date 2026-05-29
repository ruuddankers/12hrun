import Image from "next/image";
import { AnimatedDotSystem } from "@/components/shared/animated-dot-system";

export function SiteFooter() {
  return (
    <footer className="px-3 py-10 md:px-5">
      <div className="container-page event-shell flex flex-col gap-10 p-6 md:flex-row md:items-end md:justify-between md:p-8">
        <div>
          <Image
            src="/12h-run-logo-text.svg"
            alt="12h.run"
            width={220}
            height={69}
            className="h-10 w-auto md:h-12"
          />
          <p className="mt-5 max-w-md text-sm font-medium leading-6 text-foreground/56">
            12h.run is een kleinschalig endurance event in ontwikkeling voor
            juni 2027.
          </p>
        </div>
        <div className="flex items-center gap-6">
          <AnimatedDotSystem compact />
          <div className="grid gap-2 text-sm font-bold uppercase tracking-[0.12em] text-foreground/62">
            <a href="mailto:hello@12h.run" className="hover:text-foreground">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

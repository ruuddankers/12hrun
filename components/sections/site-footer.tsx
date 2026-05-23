import Image from "next/image";
import Link from "next/link";
import { AnimatedDotSystem } from "@/components/shared/animated-dot-system";

export function SiteFooter() {
  return (
    <footer className="border-t border-foreground/10 py-12">
      <div className="container-page flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <Image
            src="/12hrun-logo.svg"
            alt="12h.run"
            width={150}
            height={61}
            className="h-9 w-auto"
          />
          <p className="mt-4 max-w-md text-sm leading-6 text-foreground/56">
            12h.run is een kleinschalig endurance event in ontwikkeling voor
            juni 2027.
          </p>
        </div>
        <div className="flex items-center gap-6">
          <AnimatedDotSystem compact />
          <div className="grid gap-2 text-sm text-foreground/62">
            <Link href="/doneer" className="hover:text-foreground">
              Doneren
            </Link>
            <a href="mailto:hello@12h.run" className="hover:text-foreground">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { interestMailto } from "@/lib/utils";

export function SiteHeader() {
  return (
    <header className="sticky left-0 right-0 top-0 z-40 border-b border-foreground/14 bg-background backdrop-blur-xl">
      <div className="grid h-20 grid-cols-[1fr_auto] border-x border-foreground/10 md:grid-cols-[20rem_1fr_auto]">
        <Link
          href="/"
          className="flex items-center border-r border-foreground/14 px-5"
          aria-label="12h.run home"
        >
          <Image
            src="/12h-run-logo-text.svg"
            alt="12h.run"
            width={256}
            height={80}
            priority
            className="h-10 w-auto md:h-12"
          />
        </Link>
        <nav className="hidden items-center gap-8 px-6 text-xs font-bold uppercase tracking-[0.12em] text-foreground/68 md:flex">
          <a href="#concept" className="transition hover:text-foreground">
            Het format
          </a>
          <span className="text-foreground/28">23 mei 2027</span>
          <span className="text-foreground/28">Berkel-Enschot</span>
        </nav>
        <div className="flex items-center border-l border-foreground/14 p-2">
          <Button asChild size="sm">
            <a href={interestMailto}>Interesse</a>
          </Button>
        </div>
      </div>
    </header>
  );
}

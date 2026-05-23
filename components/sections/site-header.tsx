import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { interestMailto } from "@/lib/utils";

export function SiteHeader() {
  return (
    <header className="fixed left-0 right-0 top-0 z-40 border-b border-foreground/10 bg-background/72 backdrop-blur-xl">
      <div className="container-page flex h-16 items-center justify-between gap-5">
        <Link href="/" className="flex items-center gap-3" aria-label="12h.run home">
          <Image
            src="/12hrun-logo.svg"
            alt="12h.run"
            width={132}
            height={54}
            priority
            className="h-8 w-auto"
          />
        </Link>
        <nav className="hidden items-center gap-7 text-sm text-foreground/68 md:flex">
          <a href="#concept" className="transition hover:text-foreground">
            Concept
          </a>
          <a href="#waarom" className="transition hover:text-foreground">
            Waarom
          </a>
          <a href="#details" className="transition hover:text-foreground">
            Details
          </a>
          <a href="#faq" className="transition hover:text-foreground">
            FAQ
          </a>
        </nav>
        <Button asChild size="sm">
          <a href={interestMailto}>Interesse</a>
        </Button>
      </div>
    </header>
  );
}

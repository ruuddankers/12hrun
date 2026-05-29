import Image from "next/image";
import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 flex h-20 items-center justify-center bg-background/60 backdrop-blur-xl">
      <Link href="/" aria-label="12h.run home">
        <Image
          src="/12h-run-logo-text.svg"
          alt="12h.run"
          width={256}
          height={80}
          priority
          className="h-10 w-auto md:h-12"
        />
      </Link>
    </header>
  );
}

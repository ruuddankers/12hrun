"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`relative z-40 flex h-20 items-center justify-center transition-all duration-500 md:sticky md:top-0 ${
        scrolled ? "bg-background/60 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
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

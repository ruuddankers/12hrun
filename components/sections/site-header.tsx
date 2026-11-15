"use client";

import { BrandLogo } from "@/components/shared/brand-logo";
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
    <header className="relative z-40 flex h-20 items-center justify-center md:sticky md:top-0">
      <Link
        href="/"
        aria-label="12HVBE home"
        className={`rounded-[20px] px-6 py-3 transition-all duration-500 ${
          scrolled
            ? "border border-white/[0.09] bg-[rgba(17,17,17,0.52)] shadow-[inset_0_1px_0_rgba(255,255,255,0.07)] backdrop-blur-3xl backdrop-saturate-[180%] md:shadow-[0_8px_40px_rgba(0,0,0,0.55),inset_0_1px_0_rgba(255,255,255,0.07)]"
            : "border border-transparent bg-transparent"
        }`}
      >
        <BrandLogo priority />
      </Link>
    </header>
  );
}

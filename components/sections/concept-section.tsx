"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  animate,
  motion,
  useReducedMotion,
  useScroll,
  useTransform
} from "framer-motion";

import { cn } from "@/lib/utils";

const EASE = [0.22, 1, 0.36, 1] as const;

const LINES = [
  { value: 6, first: "KM", second: "per uur." },
  { value: 12, first: "uur", second: "lang." },
  { value: 72, first: "KM", second: "hardlopen." },
  { value: 1, first: "gezamenlijk", second: "doel.", accent: true }
];

function CountUp({ value, delay }: { value: number; delay: number }) {
  const reduceMotion = useReducedMotion();
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    if (reduceMotion || !window.matchMedia("(max-width: 767px)").matches) {
      return;
    }
    setDisplay(0);
    const controls = animate(0, value, {
      duration: 1.4,
      delay,
      ease: EASE,
      onUpdate: (latest) => setDisplay(Math.round(latest))
    });
    return () => controls.stop();
  }, [value, delay, reduceMotion]);

  return <>{display}</>;
}

export function ConceptSection() {
  const ref = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-14%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section
      ref={ref}
      id="concept"
      className="relative -mt-20 flex min-h-svh flex-col justify-end overflow-hidden bg-background px-3 pb-36 pt-28 md:block md:min-h-0 md:px-5 md:pb-36 md:pt-52"
    >
      <motion.div
        aria-hidden="true"
        className="absolute inset-0"
        style={reduceMotion ? undefined : { y: imageY }}
      >
        <motion.div
          className="absolute inset-0"
          initial={reduceMotion ? false : { scale: 1.18, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2.6, ease: EASE }}
        >
          <Image
            src="/hero-runners.webp"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-[68%_50%] opacity-55 md:object-center md:opacity-40"
          />
        </motion.div>
      </motion.div>

      {/* Beeldmerk als langzaam draaiende klok */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -right-[42vw] -top-[18vw] w-[120vw] md:-right-[14vw] md:-top-[16vw] md:w-[52vw]"
        initial={reduceMotion ? false : { opacity: 0, scale: 0.86 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2.2, delay: 0.2, ease: EASE }}
      >
        <motion.div
          className="opacity-[0.14] md:opacity-[0.07]"
          animate={reduceMotion ? undefined : { rotate: 360 }}
          transition={{ duration: 144, ease: "linear", repeat: Infinity }}
        >
          <Image
            src="/12hvbe-logo.svg"
            alt=""
            width={1023}
            height={1204}
            className="h-auto w-full"
          />
        </motion.div>
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/10 to-background" />

      <motion.div
        className="relative mx-auto w-[min(100%-1.25rem,1340px)] px-6"
        style={reduceMotion ? undefined : { y: contentY, opacity: contentOpacity }}
      >
        <h1 className="display-tight grid gap-1 font-black uppercase leading-[1.02] text-foreground md:gap-2 md:text-[clamp(2rem,5vw,4.5rem)]">
          {LINES.map((line, i) => {
            const delay = 0.35 + i * 0.16;
            return (
              <span key={line.value} className="block overflow-hidden pt-[0.08em]">
                <motion.span
                  className={cn(
                    "flex items-center gap-[3vw] md:items-baseline md:gap-[0.32em]",
                    line.accent && "text-accent"
                  )}
                  initial={reduceMotion ? false : { y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, delay, ease: EASE }}
                >
                  <span className="w-[29vw] shrink-0 text-right text-[17vw] leading-none tabular-nums md:text-left md:w-auto md:text-[length:inherit] md:leading-[inherit]">
                    <CountUp value={line.value} delay={delay + 0.2} />
                  </span>
                  <span className="text-[4.2vw] leading-[1.1] md:text-[length:inherit] md:leading-[inherit]">
                    {line.first}
                    <br className="md:hidden" /> {line.second}
                  </span>
                </motion.span>
              </span>
            );
          })}
        </h1>
      </motion.div>
    </section>
  );
}

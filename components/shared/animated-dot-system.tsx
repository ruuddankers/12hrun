"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const dots = Array.from({ length: 12 }, (_, index) => index);

export function AnimatedDotSystem({
  className,
  compact = false
}: {
  className?: string;
  compact?: boolean;
}) {
  return (
    <div
      className={cn(
        "relative aspect-square w-40",
        compact && "w-20",
        className
      )}
      aria-label="12h.run ritmesymbool"
    >
      {dots.map((dot) => {
        const angle = dot * 30 - 90;
        const size = compact ? 8 + (dot % 3) * 2 : 14 + (dot % 3) * 4;
        const radius = compact ? 34 : 68;

        return (
          <motion.span
            key={dot}
            className="absolute left-1/2 top-1/2 bg-accent"
            style={{
              width: size,
              height: size,
              marginLeft: -size / 2,
              marginTop: -size / 2,
              transform: `rotate(${angle}deg) translate(${radius}px) rotate(${-angle}deg)`
            }}
            animate={{
              opacity: [0.32, 1, 0.32],
              scale: [0.92, 1.08, 0.92],
              boxShadow: [
                "0 0 0px rgba(240,105,57,0)",
                "0 0 24px rgba(240,105,57,0.32)",
                "0 0 0px rgba(240,105,57,0)"
              ]
            }}
            transition={{
              duration: 4.8,
              repeat: Infinity,
              delay: dot * 0.18,
              ease: "easeInOut"
            }}
          />
        );
      })}
    </div>
  );
}

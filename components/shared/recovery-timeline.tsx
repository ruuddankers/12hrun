"use client";

import { motion } from "framer-motion";

const rounds = Array.from({ length: 12 }, (_, index) => ({
  round: index + 1,
  recovery: Math.max(12, 42 - index * 2)
}));

export function RecoveryTimeline() {
  return (
    <div className="grid gap-3">
      {rounds.map((item, index) => (
        <motion.div
          key={item.round}
          className="grid grid-cols-[3rem_1fr] items-center gap-4"
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.04 }}
        >
          <span className="font-display text-sm font-semibold text-foreground/58">
            {String(item.round).padStart(2, "0")}
          </span>
          <div className="relative h-9 overflow-hidden rounded-full border border-foreground/12 bg-foreground/6">
            <div className="absolute inset-y-0 left-0 w-[44%] bg-accent/85" />
            <div
              className="absolute inset-y-0 right-0 bg-foreground/14"
              style={{ width: `${item.recovery}%` }}
            />
            <div className="absolute inset-0 flex items-center justify-between px-4 text-[0.68rem] font-medium uppercase tracking-[0.18em] text-foreground/76">
              <span>5 km</span>
              <span>herstel</span>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

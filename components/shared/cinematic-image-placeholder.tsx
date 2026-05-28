import { cn } from "@/lib/utils";

export function CinematicImagePlaceholder({
  label,
  tone = "night",
  className
}: {
  label: string;
  tone?: "night" | "recovery" | "sunrise";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative min-h-72 overflow-hidden rounded-[1.75rem] soft-border",
        className
      )}
    >
      <div
        className={cn(
          "absolute inset-0",
          tone === "night" &&
            "bg-[radial-gradient(circle_at_68%_28%,rgba(240,105,57,0.24),transparent_18rem),linear-gradient(135deg,#222,#0d0d0d_60%)]",
          tone === "recovery" &&
            "bg-[radial-gradient(circle_at_18%_72%,rgba(233,233,231,0.16),transparent_16rem),linear-gradient(145deg,#191919,#101010_68%)]",
          tone === "sunrise" &&
            "bg-[radial-gradient(circle_at_70%_68%,rgba(240,105,57,0.34),transparent_18rem),linear-gradient(155deg,#101010,#241812_80%)]"
        )}
      />
      <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(233,233,231,0.08),transparent)]" />
      <div className="absolute left-5 top-5 rounded-full border border-foreground/14 bg-background/48 px-3 py-2 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-foreground/72 backdrop-blur">
        foto volgt
      </div>
      <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between gap-4 text-xs font-bold uppercase tracking-[0.2em] text-foreground/76">
        <span>{label}</span>
        <span className="h-px flex-1 bg-foreground/18" />
        <span>12h.run</span>
      </div>
    </div>
  );
}

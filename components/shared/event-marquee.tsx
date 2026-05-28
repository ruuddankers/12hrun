import { cn } from "@/lib/utils";

export function EventMarquee({
  children,
  className
}: {
  children: string;
  className?: string;
}) {
  const repeated = `${children} - ${children} - ${children} - ${children} - `;

  return (
    <div
      className={cn(
        "overflow-hidden border-y border-foreground/12 bg-foreground/[0.035] py-5",
        className
      )}
      aria-label={children}
    >
      <div className="marquee-track">
        <p className="display-tight whitespace-nowrap pr-8 text-4xl font-black uppercase leading-none text-foreground md:text-7xl">
          {repeated}
        </p>
        <p
          className="display-tight whitespace-nowrap pr-8 text-4xl font-black uppercase leading-none text-foreground md:text-7xl"
          aria-hidden="true"
        >
          {repeated}
        </p>
      </div>
    </div>
  );
}

import { cn } from "@/lib/utils";

export function SectionIntro({
  eyebrow,
  title,
  body,
  className
}: {
  eyebrow: string;
  title: string;
  body?: string;
  className?: string;
}) {
  return (
    <div className={cn("max-w-3xl", className)}>
      <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-accent">
        {eyebrow}
      </p>
      <h2 className="display-tight text-4xl font-bold leading-[1.02] text-foreground md:text-6xl">
        {title}
      </h2>
      {body ? (
        <p className="mt-6 max-w-2xl text-lg leading-8 text-foreground/70 md:text-xl">
          {body}
        </p>
      ) : null}
    </div>
  );
}

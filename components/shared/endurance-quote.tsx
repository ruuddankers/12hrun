export function EnduranceQuote({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="display-tight border-l border-accent pl-6 text-3xl font-semibold leading-tight text-foreground md:text-6xl">
      {children}
    </blockquote>
  );
}

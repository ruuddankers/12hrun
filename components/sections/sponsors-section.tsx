export function SponsorsSection() {
  return (
    <section id="sponsors" className="bg-background px-3 py-10 md:px-5">
      <div className="container-page event-shell p-6 md:p-8">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="aspect-[2/1] border border-foreground/10 bg-panel"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

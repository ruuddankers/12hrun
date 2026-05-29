export function SponsorsSection() {
  return (
    <section id="sponsors" className="bg-background px-3 py-10 md:px-5">
      <div className="container-page event-shell overflow-hidden">
        <div className="border-b border-foreground/[0.14] px-6 py-4">
          <h2 className="display-tight text-xl font-black uppercase text-foreground">
            Sponsors
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-4 p-6 sm:grid-cols-3 md:grid-cols-4 md:p-8 lg:grid-cols-6">
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

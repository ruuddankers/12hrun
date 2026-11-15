import { BrandLogo } from "@/components/shared/brand-logo";

export function SiteFooter() {
  return (
    <footer className="bg-background px-3 py-10 md:px-5">
      <div className="container-page event-shell flex flex-col gap-10 p-6 md:flex-row md:items-end md:justify-between md:p-8">
        <div>
          <BrandLogo className="h-10 md:h-12" />
          <p className="mt-5 text-sm font-medium text-foreground/56">
            12H van Berkel-Enschot | 2027
          </p>
        </div>
        <div className="grid gap-2 text-sm font-bold uppercase tracking-[0.12em] text-foreground/62">
          <a href="mailto:hello@12h.run" className="hover:text-foreground">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}

import { ConceptSection } from "@/components/sections/concept-section";
import { RouteSection } from "@/components/sections/route-section";
import { SiteFooter } from "@/components/sections/site-footer";
import { SiteHeader } from "@/components/sections/site-header";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <ConceptSection />
        <RouteSection />
      </main>
      <SiteFooter />
    </>
  );
}

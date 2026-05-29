import { AboutSection } from "@/components/sections/about-section";
import { ConceptSection } from "@/components/sections/concept-section";
import { TickerSection } from "@/components/sections/ticker-section";
import { SiteFooter } from "@/components/sections/site-footer";
import { SiteHeader } from "@/components/sections/site-header";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <ConceptSection />
        <TickerSection />
        <AboutSection />
      </main>
      <SiteFooter />
    </>
  );
}

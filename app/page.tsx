import { AboutSection } from "@/components/sections/about-section";
import { ConceptSection } from "@/components/sections/concept-section";
import { InfoSection } from "@/components/sections/info-section";
import { SponsorsSection } from "@/components/sections/sponsors-section";
import { WhySection } from "@/components/sections/why-section";
import { SiteFooter } from "@/components/sections/site-footer";
import { SiteHeader } from "@/components/sections/site-header";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <ConceptSection />
        <AboutSection />
        <WhySection />
        <InfoSection />
        <SponsorsSection />
      </main>
      <SiteFooter />
    </>
  );
}

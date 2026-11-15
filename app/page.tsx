import { AboutSection } from "@/components/sections/about-section";
import { BottomSection } from "@/components/sections/bottom-section";
import { ConceptSection } from "@/components/sections/concept-section";
// import { FormatSection } from "@/components/sections/format-section";
import { InfoSection } from "@/components/sections/info-section";
// import { SponsorsSection } from "@/components/sections/sponsors-section";
// import { TickerSection } from "@/components/sections/ticker-section";
import { WhySection } from "@/components/sections/why-section";
import { SiteHeader } from "@/components/sections/site-header";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <ConceptSection />
        {/* <TickerSection /> */}
        <AboutSection />
        {/* <FormatSection /> */}
        <WhySection />
        <InfoSection />
        {/* <SponsorsSection /> */}
      </main>
      <BottomSection />
    </>
  );
}

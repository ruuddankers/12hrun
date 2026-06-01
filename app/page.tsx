import { AboutSection } from "@/components/sections/about-section";
import { ConceptSection } from "@/components/sections/concept-section";
import { InfoSection } from "@/components/sections/info-section";
import { SponsorsSection } from "@/components/sections/sponsors-section";
import { SubscribeSection } from "@/components/sections/subscribe-section";
// import { TickerSection } from "@/components/sections/ticker-section";
import { WhySection } from "@/components/sections/why-section";
import { SiteFooter } from "@/components/sections/site-footer";
import { SiteHeader } from "@/components/sections/site-header";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <ConceptSection />
        {/* <TickerSection /> */}
        <AboutSection />
        <WhySection />
        <InfoSection />
        <SponsorsSection />
        <SubscribeSection />
      </main>
      <SiteFooter />
    </>
  );
}

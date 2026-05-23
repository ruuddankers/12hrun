import { ConceptSection } from "@/components/sections/concept-section";
import { DetailsSection } from "@/components/sections/details-section";
import { DonSection } from "@/components/sections/don-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { FaqSection } from "@/components/sections/faq-section";
import { FinalCtaSection } from "@/components/sections/final-cta-section";
import { GallerySection } from "@/components/sections/gallery-section";
import { HeroSection } from "@/components/sections/hero-section";
import { SiteFooter } from "@/components/sections/site-footer";
import { SiteHeader } from "@/components/sections/site-header";
import { WhySection } from "@/components/sections/why-section";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <ConceptSection />
        <WhySection />
        <ExperienceSection />
        <DetailsSection />
        <DonSection />
        <GallerySection />
        <FaqSection />
        <FinalCtaSection />
      </main>
      <SiteFooter />
    </>
  );
}

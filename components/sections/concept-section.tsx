import { Reveal } from "@/components/motion/reveal";
import { RecoveryTimeline } from "@/components/shared/recovery-timeline";
import { SectionIntro } from "@/components/shared/section-intro";

export function ConceptSection() {
  return (
    <section id="concept" className="py-24 md:py-36">
      <div className="container-page grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <Reveal>
          <SectionIntro
            eyebrow="Het format"
            title="Lopen. Herstellen. Herhalen."
            body="Elk uur start iedereen samen aan een nieuwe ronde van 5 km. De tijd die overblijft binnen dat uur is je herstel. Na een paar rondes gaat het niet meer alleen over tempo, maar over jezelf blijven managen."
          />
          <div className="mt-10 grid gap-4 text-lg leading-8 text-foreground/72">
            <p>Sneller lopen geeft meer rust. Te snel lopen kost energie.</p>
            <p>
              De uitdaging groeit uur na uur: voeding, timing, focus, benen,
              stilte en het vermogen om opnieuw te starten.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="cinematic-panel soft-border rounded-sm p-5 md:p-8">
            <div className="mb-8 flex items-end justify-between gap-6">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-accent">
                  12 uur ritme
                </p>
                <h3 className="display-tight mt-3 text-3xl font-bold">
                  inspanning en herstel
                </h3>
              </div>
              <p className="hidden max-w-48 text-right text-sm leading-6 text-foreground/58 sm:block">
                De herstelruimte wordt mentaal steeds kostbaarder.
              </p>
            </div>
            <RecoveryTimeline />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

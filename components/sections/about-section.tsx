import { Reveal } from "@/components/motion/reveal";

export function AboutSection() {
  return (
    <section className="bg-background px-3 py-10 md:px-5">
      <div className="container-page event-shell flex flex-col gap-8 p-6 md:flex-row md:items-start md:gap-12 md:p-8">
        <div className="flex-1">
          <Reveal>
            <h2 className="display-tight text-2xl font-black uppercase leading-tight text-foreground md:text-3xl">
              12H Run van Berkel-Enschot
            </h2>
            <p className="mt-4 max-w-prose text-sm leading-7 text-foreground/62">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </Reveal>
        </div>
        <div className="aspect-[4/3] w-full flex-shrink-0 border border-foreground/10 bg-panel md:w-80 lg:w-96" />
      </div>
    </section>
  );
}

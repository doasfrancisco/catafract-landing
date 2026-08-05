import { Reveal } from "@/components/motion/reveal";
import { BrandLogo, type BrandLogoData } from "@/components/site/brand-logo";

/* Recognitions earned by the founders' PREVIOUS ventures — not Catafract's
   clients, partners or investors. */
/* Order starts on Platanus (the widest logo) so the marquee reads "full" from
   the first frame instead of a lone logo drifting in on the right — most
   noticeable on the narrow mobile viewport. */
const ECOSYSTEM: BrandLogoData[] = [
  { name: "Platanus Ventures", src: "/logos/platanus-ventures.png" },
  { name: "UTEC Ventures", src: "/logos/utec-ventures.png" },
  { name: "Emprende UP", src: "/logos/emprende-up.png" },
  { name: "START Global", src: "/logos/start-global.png" },
  { name: "Startup Perú", src: "/logos/startup-peru.png" },
];

/** One set of logos. The marquee renders two identical sets back-to-back so
 *  the -50% keyframe loops seamlessly. */
function LogoSet({ ariaHidden }: { ariaHidden?: boolean }) {
  return (
    <ul
      aria-hidden={ariaHidden || undefined}
      className="flex shrink-0 items-center gap-x-14 pr-14 sm:gap-x-20 sm:pr-20"
    >
      {ECOSYSTEM.map((logo) => (
        <li key={logo.name} className="flex items-center">
          <BrandLogo {...logo} />
        </li>
      ))}
    </ul>
  );
}

export function EcosystemBand() {
  return (
    <section className="border-t border-border bg-background py-12 md:py-14">
      <Reveal className="w-full">
        <p className="px-6 text-center text-[13px] text-muted-foreground">
          La trayectoria de nuestros fundadores
        </p>

        {/* Constrained to the content column so the logos fade out in line
            with the header logo, not the screen edges. */}
        <div className="mx-auto mt-8 w-full max-w-6xl px-6 md:px-8">
          {/* Continuous marquee — pauses on hover, hidden under reduced motion. */}
          <div className="group relative overflow-hidden [-webkit-mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] motion-reduce:hidden">
            <div className="flex w-max will-change-transform [animation:marquee_25s_linear_infinite] group-hover:[animation-play-state:paused]">
              <LogoSet />
              <LogoSet ariaHidden />
            </div>
          </div>

          {/* Static, centered fallback for users who prefer reduced motion. */}
          <ul className="hidden flex-wrap items-center justify-center gap-x-12 gap-y-4 motion-reduce:flex">
            {ECOSYSTEM.map((logo) => (
              <li key={logo.name} className="flex items-center">
                <BrandLogo {...logo} />
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}

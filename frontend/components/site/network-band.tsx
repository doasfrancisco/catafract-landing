import { Reveal } from "@/components/motion/reveal";
import { BrandLogo, type BrandLogoData } from "@/components/site/brand-logo";

/* Backgrounds within the founders' extended network — not clients, not the
   current team's employers, not institutional affiliations. */
/* Heights vary per logo to offset the different amounts of whitespace baked
   into each source file, so they read at a consistent optical size. */
const NETWORK: BrandLogoData[] = [
  { name: "Stanford", src: "/logos/stanford.png", className: "h-12" },
  { name: "UC Berkeley", src: "/logos/uc-berkeley.webp", className: "h-20" },
  { name: "Y Combinator", src: "/logos/y-combinator.png", className: "h-12" },
  { name: "Amazon", src: "/logos/amazon.webp", className: "h-12" },
  { name: "Qualcomm", src: "/logos/qualcomm.webp", className: "h-16" },
];

export function NetworkBand() {
  return (
    <section className="border-t border-border bg-muted/30 py-20 md:py-24">
      <Reveal className="mx-auto w-full max-w-4xl px-6 text-center md:px-10">
        <p className="text-[13px] text-muted-foreground">
          Acceso a talento de clase mundial
        </p>
        <p className="mx-auto mt-3 max-w-[560px] text-sm leading-relaxed text-muted-foreground">
          Nuestros fundadores colaboran con una red internacional de
          emprendedores, ingenieros y especialistas en IA con experiencia en
          universidades y empresas tecnológicas líderes.
        </p>

        <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-12 gap-y-6 sm:gap-x-16">
          {NETWORK.map((logo) => (
            <li key={logo.name} className="flex items-center">
              <BrandLogo {...logo} />
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}

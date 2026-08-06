import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { AiRoadmapVisual } from "@/components/site/ai-roadmap-visual";
import {
  AutomationVisual,
  IntegrationVisual,
} from "@/components/site/solution-visuals";

/* The payoff — vibrant blue product cards (Domu vein). Titles are OUTCOMES, not
   product names: a category list ("Automatización", "Integraciones", …) reads as
   a closed catalog of three services, which undersells bespoke work. The
   capability each card delivers is named in its body copy instead, and the band
   underneath carries the real breadth. */
const SOLUTIONS = [
  {
    Visual: AutomationVisual,
    title: "Reduce costos y mejora la eficiencia operacional.",
    description:
      "Automatizamos procesos repetitivos para reducir trabajo manual, minimizar errores y optimizar recursos.",
  },
  {
    Visual: IntegrationVisual,
    title: "Toma mejores decisiones basadas en datos.",
    description:
      "Integramos tus herramientas existentes para centralizar la información dispersa y darte una vista única y confiable de tu operación.",
  },
  {
    Visual: AiRoadmapVisual,
    title: "Adopta IA con una estrategia clara.",
    description:
      "Identificamos dónde la IA puede generar impacto y la incorporamos de forma segura a tus procesos.",
  },
];

export function Solutions() {
  return (
    <section
      id="soluciones"
      className="scroll-mt-4 border-t border-border py-20 md:py-28"
    >
      <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
        <div className="max-w-2xl">
          <Reveal>
            <span className="block font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
              Qué construimos
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 text-balance font-serif text-3xl font-medium leading-[1.1] tracking-[-0.01em] text-foreground sm:text-[2.5rem]">
              Diseñamos tecnología que genera impacto en tu operación.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
              Combinamos ingeniería de software, automatización e inteligencia
              artificial para construir operaciones más eficientes, escalables y
              preparadas para el futuro.
            </p>
          </Reveal>
        </div>

        {/* Card metrics measured off the Domu file: 12px gap, 32px padding,
            20px radius, 400px min-height → a 392x400 card on a 1200px column. */}
        <Stagger className="mt-14 grid grid-cols-1 gap-3 md:grid-cols-3">
          {SOLUTIONS.map(({ Visual, title, description }) => (
            <StaggerItem key={title} className="h-full">
              {/* Gradient (see bg-solution-card in globals.css) runs deep at the
                  top to light at the base. No shadow and no ring: the Domu
                  cards sit flat on the page — a drop shadow was the last thing
                  making ours read heavier. */}
              <article className="bg-solution-card relative flex h-full min-h-[400px] flex-col overflow-hidden rounded-[20px] p-8 text-white transition-transform duration-300 hover:-translate-y-1">
                <div className="relative flex h-full flex-col">
                  {/* Type spec lifted straight off the Domu cards: serif
                      28px/36px at weight 500 with -0.05em tracking (they run
                      -1.4px at 28px), body Geist 14px/21px at 80% white. */}
                  <h3 className="text-balance font-serif text-[28px] font-medium leading-[36px] tracking-[-0.05em] text-white">
                    {title}
                  </h3>
                  <div className="flex flex-1 items-center justify-center py-5">
                    <Visual />
                  </div>
                  <p className="text-[14px] leading-[21px] text-white/80">
                    {description}
                  </p>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

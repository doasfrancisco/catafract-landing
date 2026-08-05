import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { Card } from "@/components/ui/card";
import {
  AgentVisual,
  IntegrationVisual,
  WorkflowVisual,
} from "@/components/site/challenge-visuals";

const CHALLENGES = [
  {
    Visual: WorkflowVisual,
    title: "Equipos saturados de trabajo repetitivo",
    description:
      "Tareas manuales, validaciones y procesos operativos consumen tiempo valioso que podría ir a trabajo de mayor impacto.",
  },
  {
    Visual: IntegrationVisual,
    title: "Sistemas desconectados",
    description:
      "La información vive en ERPs, CRMs, hojas de cálculo, WhatsApp y múltiples plataformas — duplicando trabajo y frenando la operación.",
  },
  {
    Visual: AgentVisual,
    title: "La IA sigue siendo solo una idea",
    description:
      "Muchas empresas saben que la IA puede mejorar su eficiencia, pero no saben por dónde empezar ni cómo integrarla en su operación.",
  },
];

export function Challenges() {
  return (
    <section id="desafios" className="scroll-mt-4 border-t border-border py-20 md:py-28">
      <div className="mx-auto w-full max-w-6xl px-6 md:px-8">
        <div className="max-w-3xl">
          <Reveal>
            <span className="block font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
              El contexto
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 text-balance font-serif text-3xl font-medium leading-[1.12] tracking-[-0.01em] text-foreground sm:text-4xl lg:text-[2.6rem]">
              La tecnología debería acelerar tu operación, no volverse una
              limitación.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
              A medida que las empresas crecen, la complejidad operativa crece
              con ellas. Muchas organizaciones enfrentan los mismos desafíos
              antes de poder escalar con eficiencia.
            </p>
          </Reveal>
        </div>

        <Stagger className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
          {CHALLENGES.map(({ Visual, title, description }) => (
            <StaggerItem key={title} className="h-full">
              <Card className="flex h-full flex-col gap-4 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-foreground/15 hover:shadow-[0_1px_2px_rgba(17,17,17,0.04),0_28px_50px_-28px_rgba(17,17,17,0.22)]">
                <Visual />
                <div className="flex flex-col gap-1.5 px-1.5 pb-1.5">
                  <h3 className="text-lg font-medium tracking-tight text-foreground">
                    {title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {description}
                  </p>
                </div>
              </Card>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

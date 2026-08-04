import { ArrowRight } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { Card } from "@/components/ui/card";

const REASONS = [
  {
    index: "01",
    title: "Enfoque medible",
    description:
      "Cada proyecto se ata a indicadores de negocio. Medimos el impacto, no la actividad.",
  },
  {
    index: "02",
    title: "Ingeniería sólida",
    description:
      "Sistemas mantenibles que escalan sin acumular deuda técnica ni sorpresas.",
  },
  {
    index: "03",
    title: "Seguridad por diseño",
    description:
      "Privacidad y control desde el primer día. Tus datos y procesos permanecen tuyos.",
  },
  {
    index: "04",
    title: "Acompañamiento real",
    description:
      "No entregamos y desaparecemos. Aseguramos la adopción y el resultado.",
  },
];

export function WhyCatafract() {
  return (
    <section
      id="nosotros"
      className="scroll-mt-4 border-t border-border bg-muted/30 py-20 md:py-24"
    >
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-12 px-6 md:px-8 lg:grid-cols-2 lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Reveal>
            <span className="block font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
              Por qué CATAFRACT
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 text-balance text-3xl font-serif font-medium leading-[1.1] tracking-[-0.01em] text-foreground sm:text-4xl lg:text-[2.75rem]">
              Trabajamos con empresas serias que buscan resultados, no
              experimentos.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-md text-pretty text-lg leading-relaxed text-muted-foreground">
              Combinamos criterio de negocio con ingeniería de primer nivel para
              construir soluciones que realmente se usan — y que siguen
              funcionando cuando escalas.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <a
              href="#contacto"
              className="group mt-8 inline-flex items-center gap-2 text-sm font-medium text-foreground"
            >
              Agendar diagnóstico
              <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>
          </Reveal>
        </div>

        <Stagger className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {REASONS.map((reason) => (
            <StaggerItem key={reason.index} className="h-full">
              <Card className="flex h-full flex-col gap-4 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-foreground/15 hover:shadow-[0_1px_2px_rgba(17,17,17,0.04),0_28px_50px_-28px_rgba(17,17,17,0.22)]">
                <span className="font-mono text-xs tracking-[0.18em] text-muted-foreground">
                  {reason.index}
                </span>
                <div className="mt-auto flex flex-col gap-2">
                  <h3 className="text-lg font-medium tracking-tight text-foreground">
                    {reason.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {reason.description}
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

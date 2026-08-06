import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/site/section-heading";

const STEPS = [
  {
    num: "01",
    title: "Diagnóstico",
    description:
      "Entendemos tu operación, tus datos y dónde está la fricción real.",
  },
  {
    num: "02",
    title: "Diseño",
    description: "Definimos la solución, el alcance y las métricas de éxito.",
  },
  {
    num: "03",
    title: "Desarrollo",
    description:
      "Construimos con estándares de ingeniería y ciclos de revisión cortos.",
  },
  {
    num: "04",
    title: "Implementación",
    description:
      "Lo ponemos en producción y acompañamos la adopción del equipo.",
  },
];

export function Process() {
  return (
    <section id="proceso" className="scroll-mt-4 py-20 md:py-24">
      <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
        <SectionHeading
          eyebrow="Proceso"
          title="Un método claro, de principio a fin."
          description="Trabajamos por etapas para reducir el riesgo y entregar valor desde el primer mes."
        />

        <div className="relative mt-16">
          {/* Desktop connector — spans between the badge centers. */}
          <div className="absolute left-[12.5%] right-[12.5%] top-6 hidden h-px bg-border md:block" />

          <div className="grid grid-cols-1 gap-y-10 md:grid-cols-4 md:gap-x-6">
            {STEPS.map((step, i) => (
              <Reveal
                key={step.num}
                delay={i * 0.1}
                className="relative flex gap-5 md:block"
              >
                {/* Mobile vertical rail. */}
                {i < STEPS.length - 1 && (
                  <span className="absolute left-6 top-14 h-[calc(100%-1rem)] w-px bg-border md:hidden" />
                )}

                <div className="relative z-10 flex size-12 shrink-0 items-center justify-center rounded-full border border-border bg-background font-mono text-sm text-foreground shadow-sm">
                  {step.num}
                </div>

                <div className="pt-1 md:mt-6 md:pt-0">
                  <h3 className="text-lg font-medium tracking-tight text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-2 max-w-[15rem] text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

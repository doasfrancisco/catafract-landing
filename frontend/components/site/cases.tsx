import { Stagger, StaggerItem } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import { Card } from "@/components/ui/card";

/**
 * ⚠️ PLACEHOLDER — casos ILUSTRATIVOS y anonimizados por sector.
 * No son clientes reales ni resultados verificados. Reemplazar por casos
 * reales (aunque sean anónimos) antes de publicar. La etiqueta "Ejemplos
 * ilustrativos" en el encabezado mantiene la sección honesta mientras tanto.
 */
type Case = {
  sector: string;
  title: string;
  description: string;
  outcomes: string[];
};

const CASES: Case[] = [
  {
    sector: "Importación · Distribución",
    title: "Motor de precios e inventario para múltiples almacenes",
    description:
      "Reemplazamos procesos manuales de cotización e inventario por un sistema único, con reglas de precio y stock sincronizados en tiempo real.",
    outcomes: [
      "Cotización en minutos",
      "Una sola fuente de datos",
      "Almacenes sincronizados",
    ],
  },
  {
    sector: "Retail · Calzado",
    title: "Plataforma de inventario, ventas y analítica",
    description:
      "Unificamos ventas e inventario disperso en una plataforma con reportería en tiempo real para decidir con datos, no con intuición.",
    outcomes: [
      "Ventas e inventario en un panel",
      "Reportería en tiempo real",
      "Decisiones con datos",
    ],
  },
  {
    sector: "Servicios · Operaciones",
    title: "Agentes de IA para atención y programación",
    description:
      "Automatizamos la atención y la coordinación con agentes que responden y programan de principio a fin, sin sumar personal.",
    outcomes: [
      "Atención 24/7",
      "Programación automática",
      "Sin ampliar el equipo",
    ],
  },
];

export function Cases() {
  return (
    <section id="casos" className="scroll-mt-4 border-t border-border py-20 md:py-24">
      <div className="mx-auto w-full max-w-6xl px-6 md:px-8">
        <SectionHeading
          eyebrow="Casos"
          title="Del problema al resultado."
          description="Ejemplos ilustrativos del tipo de proyectos que desarrollamos."
        />

        <Stagger className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-3">
          {CASES.map((c) => (
            <StaggerItem key={c.title} className="h-full">
              <Card className="group flex h-full flex-col p-7 transition-all duration-300 hover:-translate-y-1 hover:border-foreground/15 hover:shadow-[0_1px_2px_rgba(17,17,17,0.04),0_28px_50px_-28px_rgba(17,17,17,0.22)]">
                <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                  {c.sector}
                </span>
                <h3 className="mt-4 text-lg font-medium leading-snug tracking-tight text-foreground">
                  {c.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {c.description}
                </p>
                <ul className="mt-6 flex flex-col gap-2.5 border-t border-border pt-5">
                  {c.outcomes.map((o) => (
                    <li
                      key={o}
                      className="flex items-center gap-2.5 text-sm text-foreground/80"
                    >
                      <span className="size-1 shrink-0 rounded-full bg-foreground/30" />
                      {o}
                    </li>
                  ))}
                </ul>
              </Card>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

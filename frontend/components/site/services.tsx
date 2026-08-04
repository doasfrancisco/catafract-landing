import {
  Bot,
  Cable,
  Code2,
  Compass,
  LayoutDashboard,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import { Card } from "@/components/ui/card";

type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const SERVICES: Service[] = [
  {
    icon: Workflow,
    title: "Automatización con IA",
    description:
      "Eliminamos tareas repetitivas con flujos inteligentes que operan sin supervisión constante.",
  },
  {
    icon: Bot,
    title: "Agentes Inteligentes",
    description:
      "Asistentes que razonan, consultan tus sistemas y ejecutan acciones de principio a fin.",
  },
  {
    icon: Code2,
    title: "Software a Medida",
    description:
      "Aplicaciones y plataformas construidas alrededor de tu operación, no al revés.",
  },
  {
    icon: Cable,
    title: "Integraciones",
    description:
      "Conectamos tus herramientas, ERPs y APIs en un único flujo de datos confiable.",
  },
  {
    icon: LayoutDashboard,
    title: "Dashboards",
    description:
      "Información en tiempo real para decidir con claridad, no con intuición.",
  },
  {
    icon: Compass,
    title: "Consultoría Tecnológica",
    description:
      "Definimos la hoja de ruta técnica que tu empresa necesita para escalar.",
  },
];

export function Services() {
  return (
    <section id="servicios" className="scroll-mt-4 py-20 md:py-24">
      <div className="mx-auto w-full max-w-6xl px-6 md:px-8">
        <SectionHeading
          eyebrow="Servicios"
          title="Todo lo que tu empresa necesita para automatizar."
          description="Un mismo equipo, de la estrategia a la implementación. Sin intermediarios ni cabos sueltos."
        />

        <Stagger className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(({ icon: Icon, title, description }) => (
            <StaggerItem key={title} className="h-full">
              <Card className="group flex h-full flex-col gap-5 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-foreground/15 hover:shadow-[0_1px_2px_rgba(17,17,17,0.04),0_28px_50px_-28px_rgba(17,17,17,0.22)]">
                <div className="flex size-11 items-center justify-center rounded-xl border border-border bg-muted/60 text-accent transition-colors duration-300 group-hover:border-foreground/15">
                  <Icon className="size-5" strokeWidth={1.75} />
                </div>
                <div className="flex flex-col gap-2">
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

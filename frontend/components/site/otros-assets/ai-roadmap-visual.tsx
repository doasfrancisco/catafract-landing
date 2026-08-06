import * as React from "react";
import { Check } from "lucide-react";

/* Lista de "Recomendaciones de IA": procesos priorizados por impacto con
   badges de estado. Cubre bien la mitad de "identificamos dónde la IA genera
   impacto", pero no la de "la incorporamos a TUS procesos" — y era la card más
   cargada de texto del trío. Reemplazada por el flujo con puntos de IA.

   Sigue vigente como opción; volver a ella es cambiar el import en
   solutions.tsx. */

function Stage({ children }: { children: React.ReactNode }) {
  return <div className="relative h-[160px] w-full">{children}</div>;
}

function Caption({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-white/65">
      {children}
    </span>
  );
}

type Status = "Listo" | "Piloto" | "Planeado" | "Futuro";

const RECOMMENDATIONS: { name: string; impact: string; status: Status }[] = [
  { name: "Atención al cliente", impact: "Alto impacto", status: "Listo" },
  { name: "Reportería interna", impact: "Impacto medio", status: "Piloto" },
  { name: "Conciliación de pagos", impact: "Impacto medio", status: "Planeado" },
  {
    name: "Pronóstico de inventario",
    impact: "Oportunidad futura",
    status: "Futuro",
  },
];

const BADGE: Record<Status, string> = {
  Listo: "bg-white text-[#1f5fb8]",
  Piloto: "bg-white/30 text-white",
  Planeado: "bg-white/[0.18] text-white/90",
  Futuro: "bg-white/[0.1] text-white/65",
};

export function AiRoadmapVisual() {
  return (
    <Stage>
      <div className="flex h-full flex-col">
        <Caption>Recomendaciones de IA</Caption>

        <ul className="mt-2.5 flex flex-1 flex-col justify-center gap-1">
          {RECOMMENDATIONS.map(({ name, impact, status }) => (
            <li key={name} className="flex items-center gap-2.5">
              <span className="flex size-3.5 shrink-0 items-center justify-center rounded-full bg-white/25">
                <Check className="size-2.5 text-white" strokeWidth={3} />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block truncate text-[11.5px] leading-tight text-white">
                  {name}
                </span>
                <span className="mt-px block text-[9.5px] text-white/60">
                  {impact}
                </span>
              </span>
              <span
                className={`shrink-0 rounded-full px-2 py-[2px] text-[8.5px] font-medium tracking-wide ${BADGE[status]}`}
              >
                {status}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </Stage>
  );
}

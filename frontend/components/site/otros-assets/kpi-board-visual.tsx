import * as React from "react";
import { TrendingDown, TrendingUp } from "lucide-react";

/* Tablero ejecutivo de 4 KPIs (versión compacta, 2x2). Se retiró de la card 2
   cuando su copy pasó de "crecimiento y costos" a "conecta tus sistemas y
   datos" — el tablero hablaba de métricas de negocio, no de integración.
   Reemplazado por IntegrationVisual.

   Nota: las cifras son ILUSTRATIVAS, no resultados medidos de Catafract. Si se
   vuelve a usar, reemplazar por data real o quitar los porcentajes. */

function Stage({ children }: { children: React.ReactNode }) {
  return <div className="relative h-[160px] w-full">{children}</div>;
}

const KPIS: { label: string; value: string; dir?: "up" | "down" }[] = [
  { label: "Capacidad operativa", value: "82%", dir: "up" },
  { label: "Costo por operación", value: "37%", dir: "down" },
  { label: "Tiempo de proceso", value: "64%", dir: "down" },
  { label: "Tareas automatizadas", value: "4,238" },
];

export function KpiBoardVisual() {
  return (
    <Stage>
      <div className="grid h-full grid-cols-2 gap-2.5">
        {KPIS.map(({ label, value, dir }) => (
          <div
            key={label}
            className="flex flex-col justify-between rounded-xl bg-white/[0.13] p-3"
          >
            <span className="font-mono text-[9px] uppercase leading-[1.3] tracking-[0.1em] text-white/70">
              {label}
            </span>
            <span className="flex items-center gap-1">
              {dir === "up" && (
                <TrendingUp className="size-3.5 text-white/85" strokeWidth={2} />
              )}
              {dir === "down" && (
                <TrendingDown
                  className="size-3.5 text-white/85"
                  strokeWidth={2}
                />
              )}
              <span className="text-[1.3rem] font-light leading-none tabular-nums text-white">
                {value}
              </span>
            </span>
          </div>
        ))}
      </div>
    </Stage>
  );
}

import * as React from "react";
import {
  Headset,
  ShoppingCart,
  Sparkles,
  Wallet,
  Workflow,
  type LucideIcon,
} from "lucide-react";

/* Esquema de convergencia: las cuatro áreas de la operación bajan a un nodo de
   IA y de ahí salen "procesos optimizados". Representa bien la escala (toda la
   operación, no un proceso), pero es estático — se reemplazó por la hoja de
   ruta animada, que además comunica la adopción por etapas.

   Sigue vigente como opción; volver es cambiar el import en solutions.tsx. */

function Stage({ children }: { children: React.ReactNode }) {
  return <div className="relative h-[160px] w-full">{children}</div>;
}

const AREAS: { icon: LucideIcon; label: string; x: number }[] = [
  { icon: ShoppingCart, label: "Ventas", x: 12.5 },
  { icon: Headset, label: "Soporte", x: 37.5 },
  { icon: Wallet, label: "Finanzas", x: 62.5 },
  { icon: Workflow, label: "Operaciones", x: 87.5 },
];

export function AiConvergenceVisual() {
  return (
    <Stage>
      <div className="relative h-full w-full">
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          {AREAS.map(({ x, label }) => (
            <line
              key={label}
              x1={x}
              y1="27"
              x2="50"
              y2="50"
              className="stroke-white/25"
              strokeWidth="1"
              strokeDasharray="3 3"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
            />
          ))}
          <line
            x1="50"
            y1="74"
            x2="50"
            y2="86"
            className="stroke-white/25"
            strokeWidth="1"
            strokeDasharray="3 3"
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        <div className="relative grid grid-cols-4">
          {AREAS.map(({ icon: Icon, label }) => (
            <div key={label} className="flex flex-col items-center gap-1.5">
              <span className="text-[9px] leading-none text-white/60">
                {label}
              </span>
              <span className="flex size-6 items-center justify-center rounded-full bg-white/[0.14] text-white ring-1 ring-inset ring-white/15">
                <Icon className="size-3" strokeWidth={2} />
              </span>
            </div>
          ))}
        </div>

        <div className="absolute left-1/2 top-[62%] flex -translate-x-1/2 -translate-y-1/2 items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-[#1f5fb8] shadow-[0_4px_14px_rgba(10,20,60,0.28)]">
          <Sparkles className="size-3.5" strokeWidth={2} />
          <span className="text-[11px] font-medium leading-none">IA</span>
        </div>

        <span className="absolute inset-x-0 bottom-[3px] text-center text-[10px] leading-none text-white">
          Procesos optimizados
        </span>
      </div>
    </Stage>
  );
}

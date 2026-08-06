import * as React from "react";
import { Bell, FileText, Inbox, ShieldCheck, type LucideIcon } from "lucide-react";

/* Flujo horizontal de UN proceso (Pedido → Validación → Facturación →
   Seguimiento) con los pasos donde entra la IA en blanco sólido. Muestra bien
   que la IA se inserta en el proceso existente, pero se queda en un solo
   proceso — se reemplazó por el esquema de convergencia, que representa la
   operación completa (varias áreas → nodo de IA → procesos optimizados).

   Sigue vigente como opción; volver es cambiar el import en solutions.tsx. */

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

const FLOW: { icon: LucideIcon; label: string; ai?: boolean }[] = [
  { icon: Inbox, label: "Pedido" },
  { icon: ShieldCheck, label: "Validación", ai: true },
  { icon: FileText, label: "Facturación" },
  { icon: Bell, label: "Seguimiento", ai: true },
];

export function AiProcessFlowVisual() {
  return (
    <Stage>
      <div className="flex h-full flex-col">
        <div className="flex items-center justify-between">
          <Caption>Proceso de pedidos</Caption>
          <span className="flex items-center gap-1.5 text-[10px] text-white/75">
            <span className="size-2 rounded-full bg-white" />
            Con IA
          </span>
        </div>

        <div className="flex flex-1 items-center">
          <div className="relative w-full">
            <span
              aria-hidden
              className="absolute left-[12.5%] right-[12.5%] top-[18px] h-px bg-white/20"
            />
            <div className="relative grid grid-cols-4">
              {FLOW.map(({ icon: Icon, label, ai }) => (
                <div key={label} className="flex flex-col items-center gap-2.5">
                  <span
                    className={
                      ai
                        ? "flex size-9 items-center justify-center rounded-full bg-white text-[#1f5fb8]"
                        : "flex size-9 items-center justify-center rounded-full bg-white/[0.12] text-white/75 ring-1 ring-inset ring-white/15"
                    }
                  >
                    <Icon className="size-4" strokeWidth={2} />
                  </span>
                  <span
                    className={
                      ai
                        ? "text-[10px] leading-none text-white"
                        : "text-[10px] leading-none text-white/60"
                    }
                  >
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Stage>
  );
}

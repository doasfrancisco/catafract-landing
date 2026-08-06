import * as React from "react";
import { Check, TrendingDown, TrendingUp } from "lucide-react";

/* Visuals for the blue "solutions" rows — each one reads as a real enterprise
   product surface (Stripe / Linear / Apple restraint): thin type, rounded
   panels, subtle grid, lots of whitespace, white-on-blue only.
   Earlier compact versions live in ./otros-assets/. */

/* ------------------------------------------------------------------ */
/*  Shared primitives                                                  */
/* ------------------------------------------------------------------ */
function Panel({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-xl bg-white/[0.07] ring-1 ring-inset ring-white/10 ${className ?? ""}`}
    >
      {children}
    </div>
  );
}

function Caption({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-white/55">
      {children}
    </span>
  );
}

/** Smooth area+line trend. `up` flips the direction. */
function Trend({
  label,
  delta,
  up,
}: {
  label: string;
  delta: string;
  up: boolean;
}) {
  const line = up
    ? "M0,80 C30,72 62,42 100,14"
    : "M0,16 C30,24 62,56 100,84";
  const area = `${line} L100,100 L0,100 Z`;
  return (
    <Panel className="p-3">
      <div className="flex items-baseline justify-between">
        <Caption>{label}</Caption>
        <span className="flex items-center gap-1 text-[10px] tabular-nums text-white/80">
          {up ? (
            <TrendingUp className="size-3" strokeWidth={2} />
          ) : (
            <TrendingDown className="size-3" strokeWidth={2} />
          )}
          {delta}
        </span>
      </div>
      <div className="relative mt-2.5 h-[58px]">
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          {[33, 66].map((y) => (
            <line
              key={y}
              x1="0"
              y1={y}
              x2="100"
              y2={y}
              className="stroke-white/12"
              strokeWidth="1"
              strokeDasharray="2 5"
              vectorEffect="non-scaling-stroke"
            />
          ))}
          <path d={area} className="fill-white/10" />
          <path
            d={line}
            className="stroke-white"
            strokeWidth="1.75"
            strokeLinecap="round"
            fill="none"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      </div>
    </Panel>
  );
}

/* ------------------------------------------------------------------ */
/*  Row 1 — efficiency: manual hours, before vs now                    */
/* ------------------------------------------------------------------ */
const WEEKS = ["Sem 1", "Sem 2", "Sem 3", "Sem 4", "Sem 5", "Sem 6"];

export function AutomationVisual() {
  return (
    <Panel className="p-4">
      <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1">
        <Caption>Horas manuales · por semana</Caption>
        <div className="flex items-center gap-3 text-[10px] text-white/70">
          <span className="flex items-center gap-1.5">
            <span className="h-px w-4 border-t border-dashed border-white/50" />
            Sin automatizar
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-[2px] w-4 rounded-full bg-white" />
            Con Catafract
          </span>
        </div>
      </div>

      <div className="relative mt-4 h-[132px]">
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          {[25, 50, 75].map((y) => (
            <line
              key={y}
              x1="0"
              y1={y}
              x2="100"
              y2={y}
              className="stroke-white/12"
              strokeWidth="1"
              strokeDasharray="2 5"
              vectorEffect="non-scaling-stroke"
            />
          ))}
          <path
            d="M0,48 C30,58 60,68 100,76 L100,100 L0,100 Z"
            className="fill-white/10"
          />
          <path
            d="M0,48 C30,38 60,24 100,12"
            className="stroke-white/45"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            strokeLinecap="round"
            fill="none"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M0,48 C30,58 60,68 100,76"
            className="stroke-white"
            strokeWidth="1.75"
            strokeLinecap="round"
            fill="none"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      </div>

      <div className="mt-2.5 flex justify-between font-mono text-[9px] text-white/50">
        {WEEKS.map((w) => (
          <span key={w}>{w}</span>
        ))}
      </div>
    </Panel>
  );
}

/* ------------------------------------------------------------------ */
/*  Row 2 — Executive operations dashboard                             */
/* ------------------------------------------------------------------ */
/* Measurable business impact at a glance — the screen a COO would open to see
   whether the transformation worked. Four KPIs, two trends, nothing else. */
const KPIS: { label: string; value: string; dir?: "up" | "down" }[] = [
  { label: "Capacidad operativa", value: "82%", dir: "up" },
  { label: "Costo por operación", value: "37%", dir: "down" },
  { label: "Tiempo de proceso", value: "64%", dir: "down" },
  { label: "Tareas automatizadas", value: "4,238" },
];

export function GrowthVisual() {
  return (
    <div className="flex flex-col gap-3">
      <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
        {KPIS.map(({ label, value, dir }) => (
          <Panel key={label} className="p-3">
            <span className="block font-mono text-[8.5px] uppercase leading-tight tracking-[0.12em] text-white/55">
              {label}
            </span>
            <span className="mt-2 flex items-center gap-1">
              {dir === "up" && (
                <TrendingUp className="size-3.5 text-white/80" strokeWidth={2} />
              )}
              {dir === "down" && (
                <TrendingDown
                  className="size-3.5 text-white/80"
                  strokeWidth={2}
                />
              )}
              <span className="text-[1.35rem] font-light leading-none tabular-nums text-white">
                {value}
              </span>
            </span>
          </Panel>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <Trend label="Capacidad operativa" delta="82%" up />
        <Trend label="Costo por operación" delta="37%" up={false} />
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Row 3 — AI operations center                                       */
/* ------------------------------------------------------------------ */
/* AI coordinating operations — a console that helps an executive decide where
   AI goes first. Deliberately not a chat: no bubbles, no robots. (The old chat
   visual is kept in ./otros-assets/agent-chat-visual.tsx.) */
const PRIORITIES = [
  "Atención al cliente",
  "Reportería",
  "Finanzas",
  "Inventario",
  "Operaciones comerciales",
];

type Status = "Listo" | "Piloto" | "Planificación" | "Futuro";

const RECOMMENDATIONS: { name: string; impact: string; status: Status }[] = [
  { name: "Atención al cliente", impact: "Alto impacto", status: "Listo" },
  { name: "Reportería interna", impact: "Impacto medio", status: "Piloto" },
  {
    name: "Conciliación de pagos",
    impact: "Impacto medio",
    status: "Planificación",
  },
  {
    name: "Pronóstico de inventario",
    impact: "Oportunidad futura",
    status: "Futuro",
  },
];

const BADGE: Record<Status, string> = {
  Listo: "bg-white text-[#255eae]",
  Piloto: "bg-white/25 text-white",
  Planificación: "bg-white/15 text-white/85",
  Futuro: "bg-white/[0.08] text-white/60",
};

const IMPACT: { label: string; value: string; up: boolean }[] = [
  { label: "Tiempo de respuesta", value: "72%", up: false },
  { label: "Trabajo manual", value: "61%", up: false },
  { label: "Eficiencia operativa", value: "39%", up: true },
  { label: "Cobertura de automatización", value: "84%", up: true },
];

export function AiStrategyVisual() {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-[minmax(0,0.85fr)_minmax(0,1.3fr)_minmax(0,1fr)]">
      {/* LEFT — business priorities */}
      <Panel className="p-3">
        <Caption>Prioridades</Caption>
        <ul className="mt-3 flex flex-col gap-2.5">
          {PRIORITIES.map((p, i) => (
            <li key={p} className="flex items-center gap-2">
              <span
                className={
                  i === 0
                    ? "size-1.5 shrink-0 rounded-full bg-white"
                    : "size-1.5 shrink-0 rounded-full bg-white/30"
                }
              />
              <span className="truncate text-[10.5px] text-white/80">{p}</span>
            </li>
          ))}
        </ul>
      </Panel>

      {/* CENTER — AI recommendations */}
      <Panel className="p-3">
        <Caption>Recomendaciones de IA</Caption>
        <ul className="mt-3 flex flex-col gap-2.5">
          {RECOMMENDATIONS.map(({ name, impact, status }) => (
            <li key={name} className="flex items-start gap-2">
              <span className="mt-[3px] flex size-3.5 shrink-0 items-center justify-center rounded-full bg-white/20">
                <Check className="size-2.5 text-white" strokeWidth={3} />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block truncate text-[10.5px] leading-tight text-white/90">
                  {name}
                </span>
                <span className="mt-1 flex items-center gap-1.5">
                  <span className="text-[9px] text-white/50">{impact}</span>
                  <span
                    className={`rounded-full px-1.5 py-[1px] text-[8px] font-medium tracking-wide ${BADGE[status]}`}
                  >
                    {status}
                  </span>
                </span>
              </span>
            </li>
          ))}
        </ul>
      </Panel>

      {/* RIGHT — expected business impact */}
      <Panel className="p-3">
        <Caption>Impacto esperado</Caption>
        <ul className="mt-3 flex flex-col gap-3">
          {IMPACT.map(({ label, value, up }) => (
            <li key={label}>
              <span className="block text-[9px] leading-tight text-white/55">
                {label}
              </span>
              <span className="mt-0.5 flex items-center gap-1">
                {up ? (
                  <TrendingUp className="size-3 text-white/75" strokeWidth={2} />
                ) : (
                  <TrendingDown
                    className="size-3 text-white/75"
                    strokeWidth={2}
                  />
                )}
                <span className="text-[15px] font-light leading-none tabular-nums text-white">
                  {value}
                </span>
              </span>
            </li>
          ))}
        </ul>
      </Panel>
    </div>
  );
}

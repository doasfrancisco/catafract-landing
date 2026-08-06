import * as React from "react";
import {
  Boxes,
  Building2,
  CreditCard,
  Database,
  FileSpreadsheet,
  Mail,
  MessageCircle,
  Users,
  Webhook,
  type LucideIcon,
} from "lucide-react";

/* Visuals for the blue "solutions" cards.

   Key rule, matching the Domu reference: the visual sits DIRECTLY on the card's
   gradient — no wrapping panel. A translucent box around each visual reads as a
   "box inside a box" and kills the editorial feel. Only leaf elements that are
   genuinely chips (status badges, orbit nodes) carry their own surface.

   Retired variants live in ./otros-assets/ — the full-width dashboards, the
   agent chat, and the KPI board that card 2 used before its copy moved from
   "growth and costs" to "connect your systems". */

/* Fixed-height stage so the three cards line up regardless of the visual.
   160px is what keeps the card square like the Domu reference — a taller stage
   is what made ours read portrait. */
function Stage({ children }: { children: React.ReactNode }) {
  return <div className="relative h-[160px] w-full">{children}</div>;
}

/* ------------------------------------------------------------------ */
/*  Card 1 — cost and efficiency: manual hours, before vs now          */
/* ------------------------------------------------------------------ */
const WEEKS = ["Sem 1", "Sem 2", "Sem 3", "Sem 4"];

export function AutomationVisual() {
  return (
    <Stage>
      <div className="flex h-full flex-col">
        {/* label and legend share one type style — the label used to be mono
            while the legend was sans, which read as two fonts in one row */}
        <div className="flex items-center justify-between text-[10px] text-white/75">
          <span>Horas manuales</span>
          <div className="flex items-center gap-2.5">
            <span className="flex items-center gap-1">
              <span className="h-px w-3.5 border-t border-dashed border-white/60" />
              Antes
            </span>
            <span className="flex items-center gap-1">
              <span className="h-[2px] w-3.5 rounded-full bg-white" />
              Ahora
            </span>
          </div>
        </div>

        <div className="relative mt-3 flex-1">
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
                className="stroke-white/20"
                strokeWidth="1"
                strokeDasharray="2 5"
                vectorEffect="non-scaling-stroke"
              />
            ))}
            <path
              d="M0,48 C30,58 60,68 100,76 L100,100 L0,100 Z"
              className="fill-white/12"
            />
            <path
              d="M0,48 C30,38 60,24 100,12"
              className="stroke-white/50"
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

        <div className="mt-2.5 flex justify-between font-mono text-[10px] text-white/60">
          {WEEKS.map((w) => (
            <span key={w}>{w}</span>
          ))}
        </div>
      </div>
    </Stage>
  );
}

/* ------------------------------------------------------------------ */
/*  Card 2 — every source feeding one view of the operation            */
/* ------------------------------------------------------------------ */
/* The centre is the CLIENT'S operation, never the Catafract mark: putting our
   logo at the hub reads as "our product sits in the middle of your stack",
   i.e. SaaS positioning — and we sell bespoke software, not a platform. Domu
   does the same thing, centring a bank (their customer) rather than Domu.

   Positions are computed in px, not %, so the ring is a true circle in the
   ~328x160 stage — a percentage layout would make an ellipse, which wobbles
   once it rotates. The ring spins clockwise and each node counter-spins at the
   same rate so the icons never end up upside down. */
const ORBIT_RADIUS = 60;

const ORBIT: { icon: LucideIcon; label: string }[] = [
  { icon: Database, label: "ERP" },
  { icon: Users, label: "CRM" },
  { icon: MessageCircle, label: "WhatsApp" },
  { icon: CreditCard, label: "Ventas" },
  { icon: Boxes, label: "Inventario" },
  { icon: Mail, label: "Email" },
  { icon: FileSpreadsheet, label: "Hojas de cálculo" },
  { icon: Webhook, label: "APIs" },
];

export function IntegrationVisual() {
  return (
    <Stage>
      <div className="relative h-full w-full">
        <div className="absolute inset-0 [animation:orbit-cw_30s_linear_infinite] motion-reduce:[animation:none]">
          {ORBIT.map(({ icon: Icon, label }, i) => {
            const angle = (i / ORBIT.length) * Math.PI * 2 - Math.PI / 2;
            const x = Math.cos(angle) * ORBIT_RADIUS;
            const y = Math.sin(angle) * ORBIT_RADIUS;
            return (
              <span
                key={label}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{
                  left: `calc(50% + ${x.toFixed(2)}px)`,
                  top: `calc(50% + ${y.toFixed(2)}px)`,
                }}
              >
                <span
                  title={label}
                  className="flex size-8 items-center justify-center rounded-full bg-white/[0.14] text-white ring-1 ring-inset ring-white/15 [animation:orbit-ccw_30s_linear_infinite] motion-reduce:[animation:none]"
                >
                  <Icon className="size-4" strokeWidth={2} />
                </span>
              </span>
            );
          })}
        </div>

        {/* The client's operation — static while everything orbits it. */}
        <div className="absolute left-1/2 top-1/2 flex size-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/25 text-white ring-1 ring-inset ring-white/25">
          <Building2 className="size-6" strokeWidth={1.75} />
        </div>
      </div>
    </Stage>
  );
}

/* Card 3 lives in ./ai-roadmap-visual.tsx — it is the one visual that needs
   state (AI advancing area by area), so it is a client component on its own and
   these two stay server-rendered. */

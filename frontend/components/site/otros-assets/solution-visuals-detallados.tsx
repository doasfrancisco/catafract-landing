"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Bell,
  CircleCheck,
  Database,
  Inbox,
  LineChart,
  Mail,
  MessageCircle,
  RefreshCw,
  Send,
  ShieldCheck,
  Sparkles,
  Users,
  Webhook,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

/* Visuals for the blue "solutions" cards. Rendered monochrome — white + glass —
   directly on the card's blue gradient, with no inner frame, echoing the Domu
   product-surface style. Each depicts the RESOLVED state (the solution at
   work), which is precisely why they live here and not in the problem beat. */

/* Fixed-height stage so the three cards line up regardless of the visual. */
function Stage({ children }: { children: React.ReactNode }) {
  return <div className="relative h-[208px] w-full">{children}</div>;
}

/* ------------------------------------------------------------------ */
/*  Card 1 — end-to-end automation                                     */
/* ------------------------------------------------------------------ */
const FLOW: { icon: LucideIcon; label: string; state?: "active" | "done" }[] = [
  { icon: Inbox, label: "Solicitud del cliente" },
  { icon: ShieldCheck, label: "IA valida la información", state: "active" },
  { icon: Database, label: "ERP actualizado" },
  { icon: Bell, label: "Gerente notificado" },
  { icon: CircleCheck, label: "Tarea completada", state: "done" },
];

export function AutomationVisual() {
  const reduce = useReducedMotion();
  return (
    <Stage>
      <div className="flex h-full flex-col justify-center">
        {FLOW.map((s, i) => {
          const Icon = s.icon;
          const solid = s.state === "active" || s.state === "done";
          return (
            <React.Fragment key={s.label}>
              <div
                className={cn(
                  "flex items-center gap-2.5 rounded-lg border px-2.5 py-1.5 backdrop-blur-sm",
                  s.state === "active"
                    ? "border-white/45 bg-white/15 ring-1 ring-white/25"
                    : "border-white/15 bg-white/[0.08]",
                )}
              >
                <span
                  className={cn(
                    "flex size-6 shrink-0 items-center justify-center rounded-md",
                    solid ? "bg-white text-[#2563eb]" : "bg-white/15 text-white",
                  )}
                >
                  <Icon className="size-3.5" strokeWidth={2} />
                </span>
                <span className="truncate font-mono text-[11px] tracking-tight text-white/85">
                  {s.label}
                </span>
                {s.state === "active" && (
                  <span className="ml-auto flex gap-0.5">
                    {[0, 1, 2].map((d) => (
                      <motion.span
                        key={d}
                        className="size-1 rounded-full bg-white"
                        animate={reduce ? undefined : { opacity: [0.25, 1, 0.25] }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          delay: d * 0.18,
                        }}
                      />
                    ))}
                  </span>
                )}
              </div>
              {i < FLOW.length - 1 && (
                <div className="relative ml-[19px] h-2.5 w-px bg-white/25">
                  {!reduce && (
                    <motion.span
                      className="absolute -left-[2px] top-0 size-[5px] rounded-full bg-white"
                      animate={{ y: [-2, 10], opacity: [0, 1, 0] }}
                      transition={{
                        duration: 1.8,
                        repeat: Infinity,
                        delay: i * 0.25,
                        ease: "easeInOut",
                      }}
                    />
                  )}
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </Stage>
  );
}

/* ------------------------------------------------------------------ */
/*  Card 2 — every system, one source of truth                         */
/* ------------------------------------------------------------------ */
const NODES: { icon: LucideIcon; label: string; x: number; y: number }[] = [
  { icon: Database, label: "ERP", x: 20, y: 22 },
  { icon: Users, label: "CRM", x: 80, y: 22 },
  { icon: MessageCircle, label: "WhatsApp", x: 12, y: 54 },
  { icon: LineChart, label: "Dashboard", x: 88, y: 54 },
  { icon: Mail, label: "Email", x: 28, y: 86 },
  { icon: Webhook, label: "API", x: 72, y: 86 },
];

export function IntegrationVisual() {
  const reduce = useReducedMotion();
  return (
    <Stage>
      <div className="relative h-full w-full">
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          {NODES.map((n) => (
            <line
              key={n.label}
              x1="50"
              y1="50"
              x2={n.x}
              y2={n.y}
              className="stroke-white/30"
              strokeWidth="1.25"
              strokeDasharray="3 4"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
              style={
                reduce ? undefined : { animation: "dashflow 0.9s linear infinite" }
              }
            />
          ))}
        </svg>

        {/* peripheral nodes */}
        {NODES.map((n) => {
          const Icon = n.icon;
          return (
            <div
              key={n.label}
              className="absolute flex -translate-x-1/2 -translate-y-1/2 items-center gap-1.5 rounded-full border border-white/15 bg-white/[0.08] py-1 pl-1 pr-2.5 backdrop-blur-sm"
              style={{ left: `${n.x}%`, top: `${n.y}%` }}
            >
              <span className="flex size-5 items-center justify-center rounded-full bg-white/15 text-white">
                <Icon className="size-3" strokeWidth={2} />
              </span>
              <span className="font-mono text-[10px] tracking-tight text-white/80">
                {n.label}
              </span>
            </div>
          );
        })}

        {/* orchestration hub — Catafract at the center, now rightly so */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          {!reduce && (
            <motion.span
              className="absolute inset-0 rounded-full bg-white/25"
              animate={{ scale: [1, 1.7], opacity: [0.5, 0] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut" }}
            />
          )}
          <div className="relative flex size-14 items-center justify-center rounded-full bg-white shadow-[0_6px_18px_rgba(10,20,60,0.35)]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/catafract-mark.png"
              alt=""
              aria-hidden="true"
              className="size-7"
            />
          </div>
        </div>
      </div>
    </Stage>
  );
}

/* ------------------------------------------------------------------ */
/*  Card 3 — AI that actually operates                                 */
/* ------------------------------------------------------------------ */
const AGENT_STEPS: { icon: LucideIcon; label: string }[] = [
  { icon: Sparkles, label: "Busca en la documentación" },
  { icon: Database, label: "Lee el ERP" },
  { icon: RefreshCw, label: "Actualiza el CRM" },
  { icon: Send, label: "Responde al cliente" },
];

export function AgentVisual() {
  const reduce = useReducedMotion();
  return (
    <Stage>
      <div className="flex h-full flex-col gap-2">
        {/* header */}
        <div className="flex items-center gap-2 border-b border-white/15 pb-2">
          <span className="flex size-6 items-center justify-center rounded-md bg-white text-[#2563eb]">
            <Sparkles className="size-3.5" strokeWidth={2} />
          </span>
          <span className="font-mono text-[11px] tracking-tight text-white/85">
            Agente IA
          </span>
          <span className="ml-auto flex items-center gap-1 text-[10px] text-white/70">
            <span className="size-1.5 rounded-full bg-emerald-300" />
            en línea
          </span>
        </div>

        {/* customer message */}
        <div className="max-w-[88%] self-start rounded-lg rounded-tl-sm bg-white/[0.12] px-2.5 py-1.5 text-[11px] leading-snug text-white/85">
          ¿Cuál es el estado de mi pedido #4821?
        </div>

        {/* agent tool-use steps */}
        <div className="mt-0.5 flex flex-col gap-1.5">
          {AGENT_STEPS.map((s, i) => {
            const Icon = s.icon;
            const last = i === AGENT_STEPS.length - 1;
            return (
              <div key={s.label} className="flex items-center gap-2">
                <span
                  className={cn(
                    "flex size-5 items-center justify-center rounded-md",
                    last ? "bg-white text-[#2563eb]" : "bg-white/[0.12] text-white",
                  )}
                >
                  <Icon className="size-3" strokeWidth={2} />
                </span>
                <span className="font-mono text-[11px] tracking-tight text-white/80">
                  {s.label}
                </span>
                {last ? (
                  <span className="ml-auto flex gap-0.5">
                    {[0, 1, 2].map((d) => (
                      <motion.span
                        key={d}
                        className="size-1 rounded-full bg-white"
                        animate={reduce ? undefined : { opacity: [0.25, 1, 0.25] }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          delay: d * 0.18,
                        }}
                      />
                    ))}
                  </span>
                ) : (
                  <CircleCheck
                    className="ml-auto size-3.5 text-emerald-300"
                    strokeWidth={2}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </Stage>
  );
}

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

/* Shared frame: a soft "canvas" so each visual reads as a real product surface. */
function Canvas({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative h-[248px] overflow-hidden rounded-xl border border-border bg-gradient-to-b from-muted/40 to-card p-3.5">
      {children}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Card 1 — workflow automation                                       */
/* ------------------------------------------------------------------ */
const FLOW: { icon: LucideIcon; label: string; state?: "active" | "done" }[] = [
  { icon: Inbox, label: "Solicitud del cliente" },
  { icon: ShieldCheck, label: "IA valida la información", state: "active" },
  { icon: Database, label: "ERP actualizado" },
  { icon: Bell, label: "Gerente notificado" },
  { icon: CircleCheck, label: "Tarea completada", state: "done" },
];

export function WorkflowVisual() {
  const reduce = useReducedMotion();
  return (
    <Canvas>
      <div className="flex h-full flex-col justify-center">
        {FLOW.map((s, i) => {
          const Icon = s.icon;
          return (
            <React.Fragment key={s.label}>
              <div
                className={cn(
                  "flex items-center gap-2.5 rounded-lg border bg-card px-2.5 py-1.5 shadow-[0_1px_2px_rgba(17,17,17,0.03)]",
                  s.state === "active"
                    ? "border-blue-600/40 ring-1 ring-blue-600/15"
                    : "border-border",
                )}
              >
                <span
                  className={cn(
                    "flex size-6 shrink-0 items-center justify-center rounded-md",
                    s.state === "active"
                      ? "bg-blue-600/10 text-blue-600"
                      : s.state === "done"
                        ? "bg-foreground text-white"
                        : "bg-muted text-foreground/70",
                  )}
                >
                  <Icon className="size-3.5" strokeWidth={2} />
                </span>
                <span className="truncate font-mono text-[11px] tracking-tight text-foreground/80">
                  {s.label}
                </span>
                {s.state === "active" && (
                  <span className="ml-auto flex gap-0.5">
                    {[0, 1, 2].map((d) => (
                      <motion.span
                        key={d}
                        className="size-1 rounded-full bg-blue-600"
                        animate={reduce ? undefined : { opacity: [0.2, 1, 0.2] }}
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
                <div className="relative ml-[19px] h-2.5 w-px bg-border">
                  {!reduce && (
                    <motion.span
                      className="absolute -left-[2px] top-0 size-[5px] rounded-full bg-blue-600"
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
    </Canvas>
  );
}

/* ------------------------------------------------------------------ */
/*  Card 2 — system integration                                        */
/* ------------------------------------------------------------------ */
const NODES: { icon: LucideIcon; label: string; x: number; y: number }[] = [
  { icon: Database, label: "ERP", x: 20, y: 20 },
  { icon: Users, label: "CRM", x: 80, y: 20 },
  { icon: MessageCircle, label: "WhatsApp", x: 11, y: 52 },
  { icon: LineChart, label: "Dashboard", x: 89, y: 52 },
  { icon: Mail, label: "Email", x: 27, y: 85 },
  { icon: Webhook, label: "API", x: 73, y: 85 },
];

export function IntegrationVisual() {
  const reduce = useReducedMotion();
  return (
    <Canvas>
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
              className="stroke-border"
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
              className="absolute flex -translate-x-1/2 -translate-y-1/2 items-center gap-1.5 rounded-full border border-border bg-card py-1 pl-1 pr-2.5 shadow-[0_1px_3px_rgba(17,17,17,0.05)]"
              style={{ left: `${n.x}%`, top: `${n.y}%` }}
            >
              <span className="flex size-5 items-center justify-center rounded-full bg-muted text-foreground/70">
                <Icon className="size-3" strokeWidth={2} />
              </span>
              <span className="font-mono text-[10px] tracking-tight text-foreground/75">
                {n.label}
              </span>
            </div>
          );
        })}

        {/* orchestration hub */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          {!reduce && (
            <motion.span
              className="absolute inset-0 rounded-full bg-blue-600/15"
              animate={{ scale: [1, 1.6], opacity: [0.5, 0] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut" }}
            />
          )}
          <div className="relative flex size-14 items-center justify-center rounded-full border border-foreground/10 bg-card shadow-[0_2px_10px_rgba(17,17,17,0.08)]">
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
    </Canvas>
  );
}

/* ------------------------------------------------------------------ */
/*  Card 3 — AI agent                                                  */
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
    <Canvas>
      <div className="flex h-full flex-col gap-2">
        {/* header */}
        <div className="flex items-center gap-2 border-b border-border pb-2">
          <span className="flex size-6 items-center justify-center rounded-md bg-foreground text-white">
            <Sparkles className="size-3.5" strokeWidth={2} />
          </span>
          <span className="font-mono text-[11px] tracking-tight text-foreground/80">
            Agente IA
          </span>
          <span className="ml-auto flex items-center gap-1 text-[10px] text-muted-foreground">
            <span className="size-1.5 rounded-full bg-emerald-500" />
            en línea
          </span>
        </div>

        {/* customer message */}
        <div className="max-w-[88%] self-start rounded-lg rounded-tl-sm bg-muted px-2.5 py-1.5 text-[11px] leading-snug text-foreground/80">
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
                    last ? "bg-blue-600/10 text-blue-600" : "bg-muted text-foreground/60",
                  )}
                >
                  <Icon className="size-3" strokeWidth={2} />
                </span>
                <span className="font-mono text-[11px] tracking-tight text-foreground/75">
                  {s.label}
                </span>
                {last ? (
                  <span className="ml-auto flex gap-0.5">
                    {[0, 1, 2].map((d) => (
                      <motion.span
                        key={d}
                        className="size-1 rounded-full bg-blue-600"
                        animate={reduce ? undefined : { opacity: [0.2, 1, 0.2] }}
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
                    className="ml-auto size-3.5 text-emerald-500"
                    strokeWidth={2}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </Canvas>
  );
}

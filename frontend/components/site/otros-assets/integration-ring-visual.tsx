"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  CalendarDays,
  Database,
  FileSpreadsheet,
  LineChart,
  Mail,
  MessageCircle,
  Users,
  Webhook,
  type LucideIcon,
} from "lucide-react";

/* Guardado por si volvemos a un mensaje centrado en integraciones. Se retiró de
   la card 2 porque su foco es CRECIMIENTO y COSTOS, no integración: el anillo
   ilustraba el mecanismo y no el resultado. Reemplazado por GrowthVisual. */

function Stage({ children }: { children: React.ReactNode }) {
  return <div className="relative h-[208px] w-full">{children}</div>;
}

const ORBIT: LucideIcon[] = [
  Database,
  Users,
  MessageCircle,
  LineChart,
  Mail,
  Webhook,
  FileSpreadsheet,
  CalendarDays,
];

export function IntegrationRingVisual() {
  const reduce = useReducedMotion();
  return (
    <Stage>
      <div className="relative h-full w-full">
        {ORBIT.map((Icon, i) => {
          const angle = (i / ORBIT.length) * Math.PI * 2 - Math.PI / 2;
          const left = 50 + Math.cos(angle) * 37;
          const top = 50 + Math.sin(angle) * 37;
          return (
            <span
              key={i}
              className="absolute flex size-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/[0.14] text-white ring-1 ring-inset ring-white/15"
              style={{ left: `${left}%`, top: `${top}%` }}
            >
              <Icon className="size-4" strokeWidth={2} />
            </span>
          );
        })}

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          {!reduce && (
            <motion.span
              className="absolute inset-0 rounded-full bg-white/25"
              animate={{ scale: [1, 1.8], opacity: [0.45, 0] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeOut" }}
            />
          )}
          <div className="relative flex size-14 items-center justify-center rounded-full bg-white shadow-[0_6px_18px_rgba(10,20,60,0.3)]">
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

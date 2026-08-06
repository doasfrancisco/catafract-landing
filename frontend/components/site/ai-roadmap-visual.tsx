"use client";

import * as React from "react";
import { useReducedMotion } from "framer-motion";
import {
  Check,
  Headset,
  ShoppingCart,
  Sparkles,
  Wallet,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

/* Card 3 — the roadmap, with AI moving through the operation one area at a
   time. This is the only solution visual that needs state, so it lives in its
   own client component and the other two stay server-rendered.

   Why staged rather than all-at-once: the copy promises adoption "de forma
   segura", and a marker that advances area by area is what that looks like.
   Under reduced motion it renders the finished state instead of animating. */

const STEP_MS = 2200;

const AREAS: { icon: LucideIcon; label: string }[] = [
  { icon: ShoppingCart, label: "Ventas" },
  { icon: Headset, label: "Soporte" },
  { icon: Wallet, label: "Finanzas" },
  { icon: Workflow, label: "Operaciones" },
];

/* Stop centres, evenly spaced across a 4-column grid. */
const stopX = (i: number) => ((i + 0.5) / AREAS.length) * 100;

export function AiRoadmapVisual() {
  const reduce = useReducedMotion();
  const [step, setStep] = React.useState(0);

  React.useEffect(() => {
    if (reduce) return;
    const t = setInterval(
      () => setStep((s) => (s + 1) % AREAS.length),
      STEP_MS,
    );
    return () => clearInterval(t);
  }, [reduce]);

  /* Reduced motion gets the end state — every area already covered. */
  const current = reduce ? AREAS.length - 1 : step;
  const markerX = stopX(current);

  return (
    <div className="relative h-[160px] w-full">
      <div className="flex h-full flex-col">
        <div className="flex flex-1 flex-col justify-center">
          {/* the AI marker, sliding to sit above whichever area is next */}
          <div className="relative h-7">
            <span
              className="absolute top-0 flex -translate-x-1/2 items-center gap-1 rounded-full bg-white px-2.5 py-1 text-[#1f5fb8] shadow-[0_4px_14px_rgba(10,20,60,0.28)] transition-[left] duration-700 ease-out"
              style={{ left: `${markerX}%` }}
            >
              <Sparkles className="size-3" strokeWidth={2.25} />
              <span className="text-[10px] font-medium leading-none">IA</span>
            </span>
          </div>

          <div className="relative mt-3">
            {/* track, then the covered portion drawn over it */}
            <span
              aria-hidden
              className="absolute left-[12.5%] right-[12.5%] top-[11px] h-px bg-white/20"
            />
            <span
              aria-hidden
              className="absolute top-[11px] h-px bg-white transition-[width] duration-700 ease-out"
              style={{ left: "12.5%", width: `${markerX - 12.5}%` }}
            />

            <div className="relative grid grid-cols-4">
              {AREAS.map(({ icon: Icon, label }, i) => {
                const done = i <= current;
                return (
                  <div
                    key={label}
                    className="flex flex-col items-center gap-2.5"
                  >
                    <span
                      className={cn(
                        "flex size-[22px] items-center justify-center rounded-full transition-colors duration-500",
                        done
                          ? "bg-white text-[#1f5fb8]"
                          : "bg-white/[0.12] text-white/60 ring-1 ring-inset ring-white/15",
                      )}
                    >
                      {done ? (
                        <Check className="size-3" strokeWidth={3} />
                      ) : (
                        <Icon className="size-3" strokeWidth={2} />
                      )}
                    </span>
                    <span
                      className={cn(
                        "text-[9.5px] leading-none transition-colors duration-500",
                        done ? "text-white" : "text-white/55",
                      )}
                    >
                      {label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

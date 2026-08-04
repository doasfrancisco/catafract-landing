"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { useIsDesktop } from "@/lib/use-is-desktop";

// A calm, unhurried ease — the whole point of the section is restraint.
const EASE = [0.22, 0.61, 0.36, 1] as const;

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.06 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.85, ease: EASE } },
};

/** Barely-there ambient: a soft light behind the headline, a faint grid, and
 *  two slow-drifting pools of light. Everything is near-invisible by design. */
function HeroAmbient({ animate }: { animate: boolean }) {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
      {/* Faint grid, masked to a soft pool around the headline. */}
      <div
        className="absolute inset-0 opacity-60 [mask-image:radial-gradient(58%_50%_at_50%_42%,black,transparent_78%)]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(17,17,17,0.032) 1px, transparent 1px), linear-gradient(to bottom, rgba(17,17,17,0.032) 1px, transparent 1px)",
          backgroundSize: "76px 76px",
        }}
      />
      {/* Soft radial light behind the headline. */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(44% 40% at 50% 42%, rgba(15,23,42,0.05), transparent 72%)",
        }}
      />
      {/* Slow-moving pools of light — a whisper, never a spectacle.
          Desktop only: they sit behind the opaque sky, so on mobile they were
          pure wasted compute that made scrolling feel laggy. */}
      {animate && (
        <>
          <motion.div
            className="absolute left-[8%] top-[8%] h-[50vw] w-[50vw] max-h-[660px] max-w-[660px] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(37,99,235,0.14), transparent 64%)",
            }}
            animate={{ x: [0, 140, 70, 0], y: [0, 80, 150, 0] }}
            transition={{ duration: 19, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-[8%] right-[6%] h-[46vw] w-[46vw] max-h-[620px] max-w-[620px] rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(15,23,42,0.12), transparent 64%)",
            }}
            animate={{ x: [0, -130, -50, 0], y: [0, -90, -170, 0] }}
            transition={{ duration: 23, repeat: Infinity, ease: "easeInOut" }}
          />
        </>
      )}
    </div>
  );
}

export function Hero() {
  const reduce = useReducedMotion();
  const desktop = useIsDesktop();

  return (
    <section
      id="top"
      className="relative isolate flex min-h-svh w-full flex-col items-center justify-center overflow-hidden bg-white px-6 pb-24 pt-28 md:pb-28"
    >
      <HeroAmbient animate={!reduce && desktop} />

      {/* Cielo de fondo con un zoom lento tipo Ken Burns: una escala que
          "respira" (1 → 1.08 → 1) para que el loop no tenga salto de reinicio.
          Transform en GPU (will-change) y estático con reduced-motion. */}
      <motion.div
        aria-hidden
        className="absolute inset-0 -z-10 bg-cover bg-center will-change-transform"
        style={{ backgroundImage: "url('/hero-bg.webp')" }}
        animate={reduce ? undefined : { scale: [1, 1.08, 1] }}
        transition={
          reduce
            ? undefined
            : { duration: 32, repeat: Infinity, ease: "easeInOut" }
        }
      />
      {/* Velo plano al 45% de blanco (tonalidad de la v3.0 — la que prefirió
          el diseñador): suaviza las nubes de forma uniforme, cielo más claro y
          parejo. */}
      <div aria-hidden className="absolute inset-0 -z-10 bg-white/45" />

      <motion.div
        variants={reduce ? undefined : container}
        initial={reduce ? undefined : "hidden"}
        animate={reduce ? undefined : "show"}
        className="relative z-10 mx-auto flex w-full max-w-[820px] flex-col items-center text-center"
      >
        <motion.h1
          variants={reduce ? undefined : item}
          className="font-serif font-semibold leading-[1] tracking-[-0.005em] text-foreground"
          style={{ fontSize: "clamp(2.75rem, 6vw, 4.5rem)" }}
        >
          Convertimos IA en
          <br />
          <span className="italic">ventaja competitiva</span>
          <br />
          para empresas.
        </motion.h1>

        <motion.p
          variants={reduce ? undefined : item}
          className="mt-8 max-w-[700px] text-pretty text-[1.0625rem] leading-[1.6] text-foreground/80 sm:text-[1.125rem]"
        >
          Diseñamos e implementamos sistemas de inteligencia artificial que
          reducen costos, automatizan operaciones y generan resultados medibles.
        </motion.p>

        <motion.div
          variants={reduce ? undefined : item}
          className="mt-10 flex flex-col items-center gap-5 sm:flex-row sm:gap-7"
        >
          <a href="#contacto" className={buttonVariants({ size: "lg" })}>
            Agendar diagnóstico
          </a>
          <a
            href="#proceso"
            className="group inline-flex items-center gap-1.5 rounded-md px-1 py-1 text-[15px] font-medium text-foreground outline-none transition-colors hover:text-foreground/70 focus-visible:ring-2 focus-visible:ring-ring/60 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
          >
            Conocer nuestra metodología
            <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

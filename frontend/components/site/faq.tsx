"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

const FAQS = [
  {
    q: "¿Cómo saben qué necesita mi empresa?",
    a: "Empezamos con un diagnóstico sin costo: mapeamos tu operación y priorizamos dónde la IA y la automatización generan más impacto. Nada de propuestas a ciegas.",
  },
  {
    q: "¿Cuánto cuesta y cuánto tarda?",
    a: "Depende del alcance, y el diagnóstico lo deja claro con precio y cronograma. Apuntamos a primeros resultados en semanas, no a un proyecto que nunca termina.",
  },
  {
    q: "¿Necesito que mi equipo sepa de IA?",
    a: "No. Nosotros diseñamos, construimos y operamos los sistemas; tu equipo usa herramientas simples y ve los resultados.",
  },
  {
    q: "¿Se integra con lo que ya uso?",
    a: "Sí. Conectamos con tus herramientas actuales —ERP, e‑commerce, hojas de cálculo— en un solo flujo, sin obligarte a reemplazar todo.",
  },
  {
    q: "¿Qué pasa con la seguridad de mis datos?",
    a: "Tus datos son tuyos. Trabajamos con seguridad por diseño: accesos controlados y sin exponer información sensible.",
  },
  {
    q: "¿Y si la IA se equivoca?",
    a: "No es magia, es ingeniería. Los agentes operan con supervisión y validaciones; empezamos acotado y escalamos midiendo resultados.",
  },
  {
    q: "¿Qué pasa después de la entrega?",
    a: "No entregamos y desaparecemos. Acompañamos la adopción y cuidamos que el resultado se sostenga en el tiempo.",
  },
];

export function Faq() {
  const [open, setOpen] = React.useState<number | null>(null);

  return (
    <section id="faq" className="scroll-mt-4 border-t border-border py-20 md:py-24">
      <div className="mx-auto w-full max-w-3xl px-6 md:px-8">
        <div className="text-center">
          <Reveal>
            <span className="block font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
              Preguntas frecuentes
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 text-balance text-3xl font-serif font-medium tracking-[-0.01em] text-foreground sm:text-[2.5rem] sm:leading-[1.1]">
              Lo que suelen preguntarnos
            </h2>
          </Reveal>
        </div>

        <Stagger className="mt-12 border-y border-border">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <StaggerItem
                key={item.q}
                className="border-b border-border last:border-b-0"
              >
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left outline-none focus-visible:ring-2 focus-visible:ring-ring/60"
                  >
                    <span className="text-base font-medium text-foreground sm:text-lg">
                      {item.q}
                    </span>
                    <ChevronDown
                      aria-hidden
                      className={cn(
                        "size-5 shrink-0 text-muted-foreground transition-transform duration-300",
                        isOpen && "rotate-180",
                      )}
                    />
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: [0.22, 0.61, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-5 pr-8 text-sm leading-relaxed text-muted-foreground sm:text-base">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </StaggerItem>
            );
          })}
        </Stagger>

        <Reveal delay={0.1}>
          <p className="mt-10 text-center text-sm text-muted-foreground">
            ¿Otra pregunta?{" "}
            <a
              href="#contacto"
              className="font-medium text-foreground underline underline-offset-4 decoration-border hover:decoration-foreground"
            >
              Agenda un diagnóstico
            </a>{" "}
            y la resolvemos.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

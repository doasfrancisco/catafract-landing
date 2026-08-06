import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function FinalCta() {
  return (
    <section id="contacto" className="scroll-mt-4 px-6 py-20 md:px-10 md:py-24">
      <Reveal className="mx-auto w-full max-w-7xl">
        <div
          className="relative overflow-hidden rounded-[28px] border border-white/15 px-6 py-20 text-center md:px-16 md:py-28"
          style={{
            // Vibrant blue "silk" mesh — layered radials over a diagonal base.
            background:
              "radial-gradient(78% 88% at 50% 52%, #2f66bd 0%, transparent 62%), radial-gradient(85% 100% at 14% 8%, #86bfef 0%, transparent 46%), radial-gradient(80% 95% at 88% 10%, #9fccf2 0%, transparent 44%), radial-gradient(90% 100% at 82% 100%, #3f83d0 0%, transparent 52%), linear-gradient(160deg, #4a8ad4 0%, #5fa0dd 55%, #79b2e6 100%)",
          }}
        >
          {/* Fine grain, for the silk texture. */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.16] mix-blend-overlay"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            }}
          />
          {/* Soft top highlight. */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />

          <div className="relative">
            <h2 className="mx-auto max-w-2xl text-balance font-serif text-4xl font-medium leading-[1.08] tracking-[-0.01em] text-white sm:text-5xl">
              ¿Listo para automatizar tu empresa?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-pretty text-lg leading-relaxed text-white/85">
              Agenda un diagnóstico sin costo. Analizamos tu operación y te
              mostramos dónde la IA genera el mayor impacto.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="mailto:admin@catafract.com?subject=Diagn%C3%B3stico%20CATAFRACT"
                className={cn(
                  buttonVariants({ variant: "light", size: "lg" }),
                  "group",
                )}
              >
                Agendar diagnóstico
                <ArrowRight className="transition-transform duration-200 group-hover:translate-x-0.5" />
              </a>
              <a
                href="mailto:admin@catafract.com"
                className="inline-flex h-12 items-center justify-center rounded-full px-6 text-[15px] font-medium text-white/85 transition-colors hover:text-white"
              >
                admin@catafract.com
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

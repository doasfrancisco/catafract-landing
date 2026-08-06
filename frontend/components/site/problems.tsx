import {
  Lightbulb,
  MapPin,
  RefreshCw,
  Unplug,
  type LucideIcon,
} from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

/* Empathy beat — editorial split inspired by Domu: copy + a divided list of the
   named pains on the left (text carries the precise meaning), a single treated
   photo on the right (the human mood). Grayscale/ink keeps it desaturated, so
   the "problem" reads muted against the vibrant blue of Solutions. */
const PROBLEMS: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: RefreshCw,
    title: "Equipos ahogados en tareas repetitivas",
    description:
      "Cotizaciones, validaciones y captura manual consumen las horas que deberían ir al trabajo que sí mueve la aguja.",
  },
  {
    icon: Unplug,
    title: "Sistemas que no se hablan entre sí",
    description:
      "ERP, CRM, hojas de cálculo y WhatsApp por separado. Se duplica el trabajo y se pierde el hilo.",
  },
  {
    icon: Lightbulb,
    title: "La IA suena bien, pero no arranca",
    description:
      "Sabes que puede ayudarte, pero no está claro por dónde empezar ni cómo llevarla a tu operación real.",
  },
];

export function Problems() {
  return (
    <section
      id="problema"
      className="scroll-mt-4 border-t border-border bg-muted/30 py-20 md:py-28"
    >
      <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
        <div className="grid grid-cols-1 items-stretch gap-10 md:grid-cols-2 md:gap-14">
          {/* Left — copy + the divided list of pains */}
          <div className="flex flex-col">
            <Reveal>
              <span className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
                <MapPin className="size-3.5" strokeWidth={2} />
                El punto de partida
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-4 text-balance font-serif text-3xl font-medium leading-[1.1] tracking-[-0.035em] text-foreground sm:text-[2.5rem]">
                Conocemos tus desafíos operativos.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">
                Si te suena familiar, no es solo tuyo — es el patrón que vemos una
                y otra vez antes de cada proyecto.
              </p>
            </Reveal>

            {/* Bare icons in a fixed-width slot rather than bordered boxes:
                the boxes read as a component-library default and carried the
                same visual weight as the copy. Title steps up to 18px so the
                jump to the 14px description is a real hierarchy (it ran 16/14,
                almost flat). */}
            <Stagger className="mt-12 flex flex-col">
              {PROBLEMS.map(({ icon: Icon, title, description }, i) => (
                <StaggerItem key={title}>
                  <div
                    className={cn(
                      "flex gap-5 py-6",
                      i === 0 ? "pt-0" : "border-t border-border",
                    )}
                  >
                    <Icon
                      className="mt-[3px] size-5 shrink-0 text-foreground/45"
                      strokeWidth={1.75}
                    />
                    <div>
                      <h3 className="text-[18px] font-medium leading-snug tracking-[-0.015em] text-foreground">
                        {title}
                      </h3>
                      <p className="mt-2 max-w-[46ch] text-sm leading-relaxed text-muted-foreground">
                        {description}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>

          {/* Right — a single treated photo */}
          <Reveal delay={0.1} className="min-h-[340px] md:min-h-0">
            <div className="group relative h-full min-h-[340px] overflow-hidden rounded-2xl border border-border shadow-[0_1px_2px_rgba(17,17,17,0.04),0_24px_50px_-28px_rgba(17,17,17,0.28)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/problems/stuck.jpg"
                alt="Persona trabajando de noche, concentrada frente a una laptop"
                className="h-full w-full object-cover object-[62%_50%] grayscale contrast-[1.05] brightness-95 transition duration-[600ms] ease-out group-hover:scale-[1.04] group-hover:brightness-[0.85]"
              />
              {/* muted ink duotone + soft base gradient for depth */}
              <div
                aria-hidden
                className="absolute inset-0 bg-foreground/10 mix-blend-multiply"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion'
import {
  Compass,
  GitBranch,
  Headphones,
  Map,
  Palette,
  ShieldCheck,
} from 'lucide-react'
import Container from './Container.jsx'
import SectionHeader from './SectionHeader.jsx'

const steps = [
  {
    icon: Compass,
    title: 'Kickoff',
    desc: 'Alineamos alcance, prioridades y métricas de éxito antes de construir.',
  },
  {
    icon: Map,
    title: 'Roadmap',
    desc: 'Plan iterativo con entregables semanales y prioridad por impacto.',
  },
  {
    icon: Palette,
    title: 'Diseño',
    desc: 'UX/UI funcional, sistemas de diseño y prototipos navegables.',
  },
  {
    icon: GitBranch,
    title: 'Desarrollo iterativo',
    desc: 'Sprints cortos, commits visibles cada día, feedback continuo.',
  },
  {
    icon: ShieldCheck,
    title: 'QA y deployment',
    desc: 'Testing, observabilidad y despliegue automatizado a producción.',
  },
  {
    icon: Headphones,
    title: 'Soporte continuo',
    desc: 'Operación, evolución y nuevas iteraciones según métricas reales.',
  },
]

export default function Process() {
  return (
    <section id="proceso" className="relative py-20 sm:py-28">
      <Container>
        <SectionHeader
          align="center"
          eyebrow="El proceso"
          title="Un proceso transparente, desde idea hasta producción."
          description="Una vez definido el foco en el diagnóstico, así llevamos la solución de la idea a producción — con progreso visible cada semana."
          maxWidth="max-w-3xl"
        />

        <div className="relative mt-20">
          {/* Connecting line for desktop */}
          <div
            aria-hidden
            className="absolute left-0 right-0 top-[44px] hidden h-px bg-gradient-to-r from-transparent via-ink-300 to-transparent dark:via-white/15 lg:block"
          />

          <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-6 lg:gap-x-2 lg:gap-y-0">
            {steps.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="relative flex flex-col items-center text-center lg:px-3"
              >
                <div className="relative z-10 flex h-[88px] w-[88px] items-center justify-center">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white to-ink-100 dark:from-white/[0.06] dark:to-white/[0.02]" />
                  <div className="absolute inset-0 rounded-2xl border border-ink-200 dark:border-white/10" />
                  <div className="relative flex flex-col items-center justify-center gap-1">
                    <s.icon className="h-5 w-5 text-accent-600 dark:text-accent-300" />
                    <span className="font-mono text-[10px] text-ink-500 dark:text-ink-400">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                </div>

                <h3 className="mt-5 font-display text-base font-semibold text-ink-900 dark:text-white">
                  {s.title}
                </h3>
                <p className="mt-2 max-w-[220px] text-sm leading-relaxed text-ink-600 dark:text-ink-400">
                  {s.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

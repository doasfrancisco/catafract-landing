import { motion } from 'framer-motion'
import {
  ArrowRight,
  ClipboardList,
  Clock,
  Database,
  Layers,
  ListChecks,
  Network,
} from 'lucide-react'
import Container from './Container.jsx'
import SectionHeader from './SectionHeader.jsx'

const problems = [
  {
    icon: ListChecks,
    title: 'Leads desordenados',
    desc: 'Conversaciones perdidas entre Meta, WhatsApp, mail y hojas de cálculo.',
  },
  {
    icon: ClipboardList,
    title: 'Procesos manuales',
    desc: 'Equipos copiando datos entre herramientas en lugar de cerrar negocio.',
  },
  {
    icon: Layers,
    title: 'Demasiadas herramientas',
    desc: 'Stack inflado, integraciones rotas y costos creciendo cada mes.',
  },
  {
    icon: Clock,
    title: 'Seguimiento lento',
    desc: 'Respuestas tardías que matan la conversión en los primeros minutos.',
  },
  {
    icon: Database,
    title: 'Datos dispersos',
    desc: 'Sin una sola fuente de verdad para decidir con criterio operativo.',
  },
  {
    icon: Network,
    title: 'Falta de automatización',
    desc: 'Tareas repetitivas que escalan en costo en vez de en valor.',
  },
]

export default function Problems() {
  return (
    <section className="relative py-20 sm:py-28">
      <Container>
        <SectionHeader
          align="center"
          eyebrow="El problema"
          title={
            <>
              La mayoría de empresas ya no tiene problemas de ventas.{' '}
              <span className="text-ink-500 dark:text-ink-400">
                Tiene problemas operativos.
              </span>
            </>
          }
          description="Cuando crecen, los cuellos de botella ya no están en marketing — están en cómo el equipo opera por dentro."
          maxWidth="max-w-4xl"
        />

        <div className="mt-16 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-ink-200 bg-white p-6 glass-hover hover:border-ink-300 dark:border-white/10 dark:bg-white/[0.02] dark:hover:border-white/20"
            >
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-accent-500/5 blur-2xl transition group-hover:bg-accent-500/10 dark:group-hover:bg-accent-500/15" />
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-ink-200 bg-ink-50 text-ink-700 dark:border-white/10 dark:bg-white/5 dark:text-ink-200">
                <p.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-ink-900 dark:text-white">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-600 dark:text-ink-400">
                {p.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="mt-14 flex flex-col items-center gap-5 text-center"
        >
          <p className="max-w-2xl text-balance text-xl font-medium text-ink-900 dark:text-white sm:text-2xl">
            Construimos software que elimina esos cuellos de botella.
          </p>
          <a
            href="#servicios"
            className="group inline-flex items-center gap-2 text-sm font-medium text-accent-600 transition hover:text-accent-700 dark:text-accent-300 dark:hover:text-accent-200"
          >
            Cómo lo resolvemos
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </a>
        </motion.div>
      </Container>
    </section>
  )
}

import { motion } from 'framer-motion'
import { ArrowRight, Play, Rocket, Sparkles, Wrench, Zap } from 'lucide-react'
import Container from './Container.jsx'
import ProjectsTerminal from './ProjectsTerminal.jsx'

const badges = [
  { icon: Rocket, label: 'Ex founders' },
  { icon: Sparkles, label: 'Experiencia en startups' },
  { icon: Wrench, label: 'Producto + negocio + ingeniería' },
  { icon: Zap, label: 'Desarrollo rápido' },
]

export default function Hero() {
  return (
    <section className="relative pt-32 sm:pt-36 lg:pt-40">
      {/* Subtle grid */}
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[800px]">
        <div
          className="absolute inset-0 bg-grid-pattern opacity-60 dark:opacity-50"
          style={{ backgroundSize: '52px 52px' }}
        />
        <div
          className="absolute inset-0 dark:hidden"
          style={{ background: 'radial-gradient(ellipse at top, transparent 30%, #f7f7f8 75%)' }}
        />
        <div
          className="absolute inset-0 hidden dark:block"
          style={{ background: 'radial-gradient(ellipse at top, transparent 30%, #06060a 75%)' }}
        />
      </div>

      <Container>
        <div className="flex flex-col items-center text-center">
          <motion.a
            href="#contacto"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="group inline-flex items-center gap-2 rounded-full border border-ink-200 bg-white/70 px-3.5 py-1.5 text-xs font-medium text-ink-700 backdrop-blur transition hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-ink-200 dark:hover:bg-white/10"
          >
            <span className="flex items-center gap-1.5">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400" />
              </span>
              Aceptando 2 nuevos proyectos en Q2
            </span>
            <span className="text-ink-400 dark:text-ink-400">·</span>
            <span className="text-ink-600 dark:text-ink-300">
              Hablar con el equipo
              <ArrowRight className="ml-1 inline h-3 w-3 transition-transform group-hover:translate-x-0.5" />
            </span>
          </motion.a>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-6 max-w-5xl text-balance font-display text-[2.6rem] font-semibold leading-[1.04] tracking-tighter text-ink-900 dark:text-white sm:text-6xl lg:text-7xl"
          >
            Construimos software que ayuda a empresas a{' '}
            <span className="grad-text-accent">operar, vender y escalar.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-6 max-w-2xl text-balance text-lg leading-relaxed text-ink-600 dark:text-ink-300 sm:text-xl"
          >
            Producto, automatización e ingeniería en un solo equipo. Diseñamos
            sistemas internos, CRMs, automatizaciones y plataformas para empresas
            que quieren crecer más rápido.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-8 flex flex-col items-center gap-3 sm:flex-row"
          >
            <a
              href="#contacto"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-ink-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-ink-700 dark:bg-white dark:text-ink-950 dark:hover:bg-ink-100 sm:w-auto"
            >
              Agenda una llamada
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#proyectos"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-lg border border-ink-200 bg-white/70 px-5 py-3 text-sm font-semibold text-ink-900 backdrop-blur transition hover:bg-white dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 sm:w-auto"
            >
              <Play className="h-3.5 w-3.5" />
              Ver proyectos
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3"
          >
            {badges.map((b) => (
              <div
                key={b.label}
                className="inline-flex items-center gap-2 rounded-full border border-ink-200 bg-white/60 px-3 py-1.5 text-xs font-medium text-ink-700 backdrop-blur dark:border-white/10 dark:bg-white/[0.04] dark:text-ink-200"
              >
                <b.icon className="h-3.5 w-3.5 text-accent-600 dark:text-accent-300" />
                {b.label}
              </div>
            ))}
          </motion.div>
        </div>

        <div className="relative mt-16 sm:mt-20 lg:mt-24">
          <ProjectsTerminal />
        </div>
      </Container>
    </section>
  )
}

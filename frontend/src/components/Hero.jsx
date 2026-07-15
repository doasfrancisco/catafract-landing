import { motion } from 'framer-motion'
import { ArrowRight, Rocket, Sparkles, Wrench, Zap } from 'lucide-react'
import Container from './Container.jsx'
import AbstractHero from './AbstractHero.jsx'

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
        <div className="relative isolate z-10 flex flex-col items-center text-center">
          {/* Glow difuminado de marca — dos difusos hacia los costados */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-[-56px] -z-10 h-[560px] w-[1040px] max-w-[150%] -translate-x-1/2 rounded-full"
            style={{
              background:
                'radial-gradient(ellipse 42% 56% at 5% 42%, rgba(37,99,235,0.18), transparent 66%), radial-gradient(ellipse 42% 56% at 95% 58%, rgba(124,58,237,0.16), transparent 66%)',
            }}
          />
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
              Aceptando 2 nuevos proyectos en Q3
            </span>
            <span className="hidden text-ink-400 dark:text-ink-400 sm:inline">·</span>
            <span className="hidden text-ink-600 dark:text-ink-300 sm:inline">
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
            Implementamos tecnología que ordena y automatiza{' '}
            <span className="grad-text-accent">tu operación.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-6 max-w-2xl text-balance text-lg leading-relaxed text-ink-600 dark:text-ink-300 sm:text-xl"
          >
            Reemplazamos el trabajo manual y las herramientas dispersas por
            sistemas a medida, con automatización e IA.
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
          <AbstractHero />
        </div>
      </Container>
    </section>
  )
}

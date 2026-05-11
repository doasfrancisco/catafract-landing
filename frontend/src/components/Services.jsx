import { motion } from 'framer-motion'
import {
  Bot,
  Boxes,
  Code2,
  Compass,
  GanttChart,
  Globe,
  LayoutDashboard,
  MessageSquare,
  Network,
  Rocket,
  Settings2,
  ShoppingBag,
  Sparkles,
  Wand2,
  Workflow,
} from 'lucide-react'
import Container from './Container.jsx'
import SectionHeader from './SectionHeader.jsx'

const groups = [
  {
    title: 'Desarrollo de software',
    description:
      'Sistemas robustos diseñados para escalar — desde MVPs hasta plataformas operativas.',
    accent: 'from-accent-500/40 to-cyan-400/20',
    items: [
      { icon: Globe, label: 'Plataformas web' },
      { icon: Boxes, label: 'SaaS' },
      { icon: ShoppingBag, label: 'Marketplaces' },
      { icon: Settings2, label: 'Sistemas internos' },
      { icon: LayoutDashboard, label: 'Dashboards' },
    ],
  },
  {
    title: 'Automatización e IA',
    description:
      'Flujos que reemplazan tareas repetitivas y conectan tu stack en tiempo real.',
    accent: 'from-purple-500/40 to-fuchsia-400/20',
    items: [
      { icon: MessageSquare, label: 'WhatsApp automation' },
      { icon: Wand2, label: 'Email automation' },
      { icon: Network, label: 'Integraciones' },
      { icon: Sparkles, label: 'AI workflows' },
      { icon: Bot, label: 'Bots' },
    ],
  },
  {
    title: 'Producto y tecnología',
    description:
      'Decisiones de producto y arquitectura pensando en operación, métricas y crecimiento.',
    accent: 'from-emerald-400/40 to-teal-400/20',
    items: [
      { icon: Compass, label: 'UX/UI' },
      { icon: Code2, label: 'Arquitectura' },
      { icon: Rocket, label: 'MVPs' },
      { icon: GanttChart, label: 'Escalamiento' },
      { icon: Workflow, label: 'Discovery' },
    ],
  },
]

export default function Services() {
  return (
    <section id="servicios" className="relative py-28 sm:py-36">
      <Container>
        <SectionHeader
          align="center"
          eyebrow="Qué hacemos"
          title="Servicios end-to-end para empresas que escalan."
          description="Producto, ingeniería y automatización en un solo equipo. Trabajamos en sprints cortos con entregables visibles cada semana."
          maxWidth="max-w-3xl"
        />

        <div className="mt-16 grid grid-cols-1 gap-5 lg:grid-cols-3">
          {groups.map((g, gi) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: gi * 0.08 }}
              className="group relative overflow-hidden rounded-2xl border border-ink-200 bg-white p-7 backdrop-blur dark:border-white/10 dark:bg-ink-900/40"
            >
              <div
                className={`pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br ${g.accent} opacity-[0.08] transition-opacity group-hover:opacity-20 dark:opacity-[0.12] dark:group-hover:opacity-30`}
              />
              <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-ink-100/60 blur-3xl dark:bg-white/5" />

              <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-ink-500 dark:text-ink-400">
                <span className="font-mono text-ink-400 dark:text-ink-500">0{gi + 1}</span>
                <span className="h-px w-6 bg-ink-200 dark:bg-white/10" />
              </div>
              <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight text-ink-900 dark:text-white">
                {g.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-600 dark:text-ink-400">
                {g.description}
              </p>

              <ul className="mt-6 flex flex-col divide-y divide-ink-200 border-t border-ink-200 dark:divide-white/5 dark:border-white/5">
                {g.items.map((item) => (
                  <li
                    key={item.label}
                    className="group/item flex items-center justify-between py-3 text-sm transition"
                  >
                    <div className="flex items-center gap-3 text-ink-700 dark:text-ink-200">
                      <div className="flex h-8 w-8 items-center justify-center rounded-md border border-ink-200 bg-ink-50 text-ink-600 transition group-hover/item:border-ink-300 group-hover/item:text-ink-900 dark:border-white/10 dark:bg-white/5 dark:text-ink-300 dark:group-hover/item:border-white/20 dark:group-hover/item:text-white">
                        <item.icon className="h-4 w-4" />
                      </div>
                      <span className="font-medium text-ink-900 dark:text-white">
                        {item.label}
                      </span>
                    </div>
                    <svg
                      viewBox="0 0 16 16"
                      fill="none"
                      className="h-3.5 w-3.5 text-ink-400 transition group-hover/item:translate-x-0.5 group-hover/item:text-ink-700 dark:text-ink-500 dark:group-hover/item:text-ink-200"
                    >
                      <path
                        d="M6 3l5 5-5 5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}

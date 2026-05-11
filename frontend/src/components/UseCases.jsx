import { motion } from 'framer-motion'
import { ArrowRight, Building2, ShoppingCart, Users2 } from 'lucide-react'
import Container from './Container.jsx'
import SectionHeader from './SectionHeader.jsx'

const cases = [
  {
    icon: Building2,
    industry: 'Real Estate',
    title: 'CRM inmobiliario con automatización Meta + WhatsApp',
    problem:
      'Leads de Meta Ads dispersos en múltiples bandejas. Equipo perdiendo el 40% de oportunidades por seguimiento tardío.',
    solution:
      'CRM centralizado con captura automática de leads, asignación por agente, y respuesta inicial vía WhatsApp en menos de 30 segundos.',
    result:
      '+62% conversión de lead a visita. Tiempo de respuesta 1.4 minutos vs. 4.5 horas.',
    tech: ['Next.js', 'PostgreSQL', 'WhatsApp API', 'OpenAI'],
    accent: 'from-accent-500/40 to-blue-400/10',
    metric: '+62%',
    metricLabel: 'Conversión',
    mockup: <RealEstateMock />,
  },
  {
    icon: Users2,
    industry: 'Comercial B2B',
    title: 'Sistema interno con automatizaciones y analytics',
    problem:
      'Equipo comercial gestionaba pipeline en Excel. Sin visibilidad de métricas ni de productividad por vendedor.',
    solution:
      'Sistema interno con pipeline visual, scoring de leads con IA, automatizaciones de follow-up y dashboards en tiempo real.',
    result:
      '−31% tiempo dedicado a tareas operativas. Visibilidad total de pipeline y forecast semanal automático.',
    tech: ['React', 'Go', 'PostgreSQL', 'AWS'],
    accent: 'from-purple-500/40 to-fuchsia-400/10',
    metric: '−31%',
    metricLabel: 'Tiempo operativo',
    mockup: <CommercialMock />,
  },
  {
    icon: ShoppingCart,
    industry: 'Marketplace',
    title: 'Marketplace con onboarding, pagos y panel admin',
    problem:
      'Necesidad de lanzar marketplace de dos lados con cobros recurrentes y gestión administrativa robusta.',
    solution:
      'Plataforma completa con onboarding KYC, integraciones de pago, comisiones automáticas y panel admin con observabilidad.',
    result:
      'MVP en 8 semanas. +1.2K transacciones procesadas en el primer mes con tasa de éxito del 99.4%.',
    tech: ['Next.js', 'Node.js', 'Stripe', 'Supabase'],
    accent: 'from-emerald-400/40 to-teal-400/10',
    metric: '8 sem.',
    metricLabel: 'MVP entregado',
    mockup: <MarketplaceMock />,
  },
]

export default function UseCases() {
  return (
    <section id="proyectos" className="relative py-28 sm:py-36">
      <Container>
        <SectionHeader
          eyebrow="Casos de uso"
          title="Software construido para resolver problemas reales."
          description="Una muestra de proyectos representativos. Cada uno parte de un problema operativo concreto y termina en métricas medibles."
        />

        <div className="mt-16 flex flex-col gap-6">
          {cases.map((c, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-3xl border border-ink-200 bg-white backdrop-blur dark:border-white/10 dark:bg-ink-900/40"
            >
              <div
                className={`pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br ${c.accent} opacity-10 dark:opacity-20`}
              />
              <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr]">
                {/* Left: content */}
                <div className="border-b border-ink-200 p-8 dark:border-white/5 sm:p-10 lg:border-b-0 lg:border-r">
                  <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-wider text-ink-500 dark:text-ink-400">
                    <span className="flex h-8 w-8 items-center justify-center rounded-md border border-ink-200 bg-ink-50 text-ink-700 dark:border-white/10 dark:bg-white/5 dark:text-ink-200">
                      <c.icon className="h-4 w-4" />
                    </span>
                    {c.industry}
                  </div>

                  <h3 className="mt-5 font-display text-2xl font-semibold leading-tight tracking-tight text-ink-900 dark:text-white sm:text-3xl">
                    {c.title}
                  </h3>

                  <dl className="mt-7 grid gap-5 sm:grid-cols-3">
                    <Block label="Problema" value={c.problem} />
                    <Block label="Solución" value={c.solution} />
                    <Block label="Resultado" value={c.result} highlight />
                  </dl>

                  <div className="mt-8 flex flex-wrap items-center gap-2">
                    {c.tech.map((t) => (
                      <span
                        key={t}
                        className="inline-flex items-center rounded-md border border-ink-200 bg-ink-50 px-2.5 py-1 font-mono text-[11px] text-ink-700 dark:border-white/10 dark:bg-white/5 dark:text-ink-200"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right: mockup */}
                <div className="relative flex items-center justify-center overflow-hidden p-6 sm:p-10">
                  <div className="pointer-events-none absolute inset-0">
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ink-200 to-transparent dark:via-white/10 lg:hidden" />
                  </div>

                  <div className="relative w-full">
                    <div className="absolute -right-4 top-2 z-10 rounded-xl border border-ink-200 bg-white px-3 py-2 text-right shadow-xl backdrop-blur dark:border-white/10 dark:bg-ink-950/90">
                      <div className="font-display text-xl font-semibold text-ink-900 dark:text-white">
                        {c.metric}
                      </div>
                      <div className="text-[10px] uppercase tracking-wide text-ink-500 dark:text-ink-400">
                        {c.metricLabel}
                      </div>
                    </div>
                    {c.mockup}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href="#contacto"
            className="group inline-flex items-center gap-2 rounded-lg border border-ink-200 bg-white px-5 py-3 text-sm font-medium text-ink-900 transition hover:bg-ink-50 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
          >
            Conversar sobre tu proyecto
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </Container>
    </section>
  )
}

function Block({ label, value, highlight = false }) {
  return (
    <div>
      <dt className="text-[10px] font-semibold uppercase tracking-wider text-ink-500">
        {label}
      </dt>
      <dd
        className={`mt-2 text-sm leading-relaxed ${
          highlight ? 'text-ink-900 dark:text-white' : 'text-ink-600 dark:text-ink-300'
        }`}
      >
        {value}
      </dd>
    </div>
  )
}

function MockShell({ children, title = 'app.catafract.com' }) {
  return (
    <div className="overflow-hidden rounded-xl border border-ink-200 bg-white shadow-[0_30px_80px_-30px_rgba(15,23,42,0.2)] dark:border-white/10 dark:bg-ink-950/80 dark:shadow-[0_30px_80px_-30px_rgba(0,0,0,0.7)]">
      <div className="flex items-center justify-between border-b border-ink-200 bg-ink-50/60 px-3 py-2 dark:border-white/5 dark:bg-ink-900/60">
        <div className="flex items-center gap-1">
          <span className="h-2 w-2 rounded-full bg-red-500/70" />
          <span className="h-2 w-2 rounded-full bg-yellow-500/70" />
          <span className="h-2 w-2 rounded-full bg-green-500/70" />
        </div>
        <div className="text-[10px] text-ink-500">{title}</div>
        <div className="w-8" />
      </div>
      <div className="p-3">{children}</div>
    </div>
  )
}

function RealEstateMock() {
  const stages = [
    { name: 'Nuevo', count: 38, color: 'bg-accent-500' },
    { name: 'Contactado', count: 24, color: 'bg-purple-500' },
    { name: 'Visita', count: 12, color: 'bg-emerald-500' },
    { name: 'Cierre', count: 6, color: 'bg-amber-500' },
  ]
  return (
    <MockShell title="crm.realestate">
      <div className="grid grid-cols-4 gap-2">
        {stages.map((s) => (
          <div
            key={s.name}
            className="rounded-md border border-ink-200 bg-ink-50/50 p-2 dark:border-white/5 dark:bg-white/[0.02]"
          >
            <div className="flex items-center justify-between">
              <div className="text-[9px] uppercase tracking-wide text-ink-500 dark:text-ink-400">
                {s.name}
              </div>
              <div className={`h-1.5 w-1.5 rounded-full ${s.color}`} />
            </div>
            <div className="mt-2 font-display text-base font-semibold text-ink-900 dark:text-white">
              {s.count}
            </div>
            <div className="mt-2 flex flex-col gap-1">
              {Array.from({ length: 3 }).map((_, i) => (
                <div
                  key={i}
                  className="h-1.5 rounded bg-ink-200 dark:bg-white/10"
                  style={{ width: `${60 + i * 10}%` }}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-3 rounded-md border border-ink-200 bg-ink-50/50 p-2.5 dark:border-white/5 dark:bg-white/[0.02]">
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500" />
          <div className="min-w-0 flex-1">
            <div className="flex items-center justify-between">
              <div className="text-[10px] font-medium text-ink-900 dark:text-white">
                WhatsApp Bot
              </div>
              <div className="text-[9px] text-ink-500">hace 2m</div>
            </div>
            <div className="text-[9px] leading-snug text-ink-600 dark:text-ink-400">
              "Hola María 👋 Vimos tu interés en el proyecto Vista Norte. ¿Agendamos visita?"
            </div>
          </div>
        </div>
      </div>
    </MockShell>
  )
}

function CommercialMock() {
  return (
    <MockShell title="internal.commercial">
      <div className="grid grid-cols-2 gap-2">
        <div className="rounded-md border border-ink-200 bg-ink-50/50 p-2.5 dark:border-white/5 dark:bg-white/[0.02]">
          <div className="text-[9px] uppercase tracking-wide text-ink-500 dark:text-ink-400">
            Forecast
          </div>
          <div className="mt-1 font-display text-lg font-semibold text-ink-900 dark:text-white">
            $284k
          </div>
          <div className="mt-2 flex h-10 items-end gap-1">
            {[40, 60, 35, 80, 55, 70, 90].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-t bg-gradient-to-t from-accent-500/40 to-accent-300/80"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>
        <div className="rounded-md border border-ink-200 bg-ink-50/50 p-2.5 dark:border-white/5 dark:bg-white/[0.02]">
          <div className="text-[9px] uppercase tracking-wide text-ink-500 dark:text-ink-400">
            Top vendedores
          </div>
          <div className="mt-2 flex flex-col gap-1.5">
            {[
              ['A. López', 92],
              ['M. Ruiz', 78],
              ['J. Pinto', 64],
            ].map(([n, p]) => (
              <div key={n} className="flex items-center gap-2">
                <div className="text-[10px] text-ink-900 dark:text-white">{n}</div>
                <div className="flex-1 overflow-hidden rounded-full bg-ink-200 dark:bg-white/5">
                  <div
                    className="h-1 bg-gradient-to-r from-purple-500 to-fuchsia-400"
                    style={{ width: `${p}%` }}
                  />
                </div>
                <div className="text-[9px] text-ink-500 dark:text-ink-400">{p}%</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-2 rounded-md border border-ink-200 bg-ink-50/50 p-2.5 dark:border-white/5 dark:bg-white/[0.02]">
        <div className="flex items-center justify-between">
          <div className="text-[9px] uppercase tracking-wide text-ink-500 dark:text-ink-400">
            Pipeline activo
          </div>
          <div className="text-[9px] text-emerald-600 dark:text-emerald-400">
            +12 esta semana
          </div>
        </div>
        <div className="mt-2 flex gap-1">
          {Array.from({ length: 18 }).map((_, i) => (
            <div
              key={i}
              className={`h-5 flex-1 rounded ${
                i % 4 === 0
                  ? 'bg-purple-500/70'
                  : i % 3 === 0
                  ? 'bg-accent-500/60'
                  : 'bg-ink-200 dark:bg-white/10'
              }`}
            />
          ))}
        </div>
      </div>
    </MockShell>
  )
}

function MarketplaceMock() {
  return (
    <MockShell title="marketplace.admin">
      <div className="grid grid-cols-3 gap-2">
        {[
          { l: 'GMV', v: '$1.2M', d: '+18%' },
          { l: 'Órdenes', v: '8,420', d: '+24%' },
          { l: 'Vendedores', v: '342', d: '+9%' },
        ].map((s) => (
          <div
            key={s.l}
            className="rounded-md border border-ink-200 bg-ink-50/50 p-2 dark:border-white/5 dark:bg-white/[0.02]"
          >
            <div className="text-[9px] uppercase tracking-wide text-ink-500 dark:text-ink-400">
              {s.l}
            </div>
            <div className="font-display text-sm font-semibold text-ink-900 dark:text-white">
              {s.v}
            </div>
            <div className="text-[9px] text-emerald-600 dark:text-emerald-400">{s.d}</div>
          </div>
        ))}
      </div>
      <div className="mt-2 rounded-md border border-ink-200 bg-ink-50/50 dark:border-white/5 dark:bg-white/[0.02]">
        <div className="border-b border-ink-200 px-2.5 py-1.5 text-[9px] uppercase tracking-wide text-ink-500 dark:border-white/5 dark:text-ink-400">
          Transacciones recientes
        </div>
        <div className="divide-y divide-ink-200 dark:divide-white/5">
          {[
            ['#3491', 'Carlos M.', '$84.20', 'paid'],
            ['#3490', 'Sofía R.', '$192.00', 'paid'],
            ['#3489', 'Diego V.', '$45.99', 'pending'],
            ['#3488', 'Ana B.', '$320.00', 'paid'],
          ].map(([id, who, amt, status]) => (
            <div key={id} className="flex items-center justify-between px-2.5 py-1.5 text-[10px]">
              <div className="flex items-center gap-2">
                <span className="font-mono text-ink-500">{id}</span>
                <span className="text-ink-900 dark:text-white">{who}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-ink-700 dark:text-ink-300">{amt}</span>
                <span
                  className={`rounded-full px-1.5 py-0.5 text-[8px] ${
                    status === 'paid'
                      ? 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-400'
                      : 'bg-amber-500/15 text-amber-700 dark:text-amber-400'
                  }`}
                >
                  {status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MockShell>
  )
}

import { motion } from 'framer-motion'
import {
  Activity,
  ArrowUpRight,
  Inbox,
  LineChart,
  MessageCircle,
  Search,
  Settings,
  Sparkles,
  Users,
  Workflow,
  Zap,
} from 'lucide-react'

const sidebarItems = [
  { icon: Activity, label: 'Overview', active: true },
  { icon: Users, label: 'Leads' },
  { icon: Workflow, label: 'Automations' },
  { icon: Inbox, label: 'Inbox' },
  { icon: LineChart, label: 'Analytics' },
  { icon: Settings, label: 'Settings' },
]

const stats = [
  { label: 'Leads activos', value: '1,284', delta: '+12.4%', positive: true },
  { label: 'Conversión', value: '38.2%', delta: '+4.1%', positive: true },
  { label: 'Tiempo respuesta', value: '1m 42s', delta: '-31%', positive: true },
]

const automations = [
  { name: 'Nuevo lead Meta Ads → WhatsApp', runs: '12,840', status: 'active' },
  { name: 'No respuesta 24h → Reactivar', runs: '4,210', status: 'active' },
  { name: 'Cierre venta → Onboarding', runs: '932', status: 'active' },
]

export default function DashboardMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      className="relative w-full"
    >
      {/* Glow */}
      <div className="absolute -inset-x-10 -top-10 -bottom-20 -z-10">
        <div className="absolute left-1/2 top-0 h-40 w-3/4 -translate-x-1/2 rounded-full bg-accent-400/30 blur-3xl dark:bg-accent-500/30" />
        <div className="absolute right-0 bottom-0 h-40 w-1/2 rounded-full bg-purple-400/20 blur-3xl dark:bg-purple-500/20" />
      </div>

      <div className="relative overflow-hidden rounded-2xl border border-ink-200 bg-white shadow-[0_30px_80px_-20px_rgba(15,23,42,0.18)] backdrop-blur-xl ring-1 ring-ink-100 dark:border-white/10 dark:bg-ink-900/80 dark:shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)] dark:ring-white/5">
        {/* Window chrome */}
        <div className="flex items-center justify-between border-b border-ink-200 bg-ink-50/80 px-4 py-3 dark:border-white/5 dark:bg-ink-900/80">
          <div className="flex items-center gap-1.5">
            <span className="h-3 w-3 rounded-full bg-red-500/70" />
            <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
            <span className="h-3 w-3 rounded-full bg-green-500/70" />
          </div>
          <div className="hidden items-center gap-2 rounded-md border border-ink-200 bg-white px-3 py-1 text-xs text-ink-500 dark:border-white/5 dark:bg-ink-950/60 dark:text-ink-400 sm:flex">
            <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
            app.catafract.com / dashboard
          </div>
          <div className="w-12" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr]">
          {/* Sidebar */}
          <div className="hidden border-r border-ink-200 bg-ink-50/50 p-3 dark:border-white/5 dark:bg-ink-900/40 lg:block">
            <div className="mb-4 flex items-center gap-2 px-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-accent-500 to-purple-500 text-xs font-bold text-white">
                C
              </div>
              <div>
                <div className="text-[11px] font-medium text-ink-900 dark:text-white">
                  Catafract
                </div>
                <div className="text-[10px] text-ink-500 dark:text-ink-400">Workspace</div>
              </div>
            </div>
            <div className="flex flex-col gap-0.5">
              {sidebarItems.map((item, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-2 rounded-md px-2.5 py-1.5 text-[12px] transition ${
                    item.active
                      ? 'bg-ink-900/5 text-ink-900 dark:bg-white/8 dark:text-white'
                      : 'text-ink-500 hover:text-ink-800 dark:text-ink-400 dark:hover:text-ink-100'
                  }`}
                >
                  <item.icon className="h-3.5 w-3.5" />
                  {item.label}
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-lg border border-ink-200 bg-gradient-to-br from-accent-500/10 to-purple-500/10 p-3 dark:border-white/5">
              <Sparkles className="h-4 w-4 text-accent-600 dark:text-accent-300" />
              <div className="mt-2 text-[11px] font-medium text-ink-900 dark:text-white">
                Sugerencia IA
              </div>
              <div className="mt-1 text-[10px] leading-snug text-ink-500 dark:text-ink-400">
                42 leads inactivos &gt; 7 días. Lanzar reactivación.
              </div>
            </div>
          </div>

          {/* Main content */}
          <div className="p-4 sm:p-5">
            {/* Top bar */}
            <div className="mb-5 flex items-center justify-between gap-2">
              <div className="flex items-center gap-2 rounded-md border border-ink-200 bg-ink-50/60 px-2.5 py-1.5 text-[12px] text-ink-500 dark:border-white/5 dark:bg-ink-950/40 dark:text-ink-400">
                <Search className="h-3.5 w-3.5" />
                <span>Buscar leads, automatizaciones…</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="hidden items-center gap-1 rounded-md border border-ink-200 px-2 py-1 text-[11px] text-ink-600 dark:border-white/5 dark:text-ink-300 sm:flex">
                  <Zap className="h-3 w-3 text-accent-500 dark:text-accent-300" /> Live
                </div>
                <div className="h-7 w-7 rounded-full bg-gradient-to-br from-fuchsia-500 to-orange-400" />
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3">
              {stats.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.08 }}
                  className="rounded-lg border border-ink-200 bg-white p-3 dark:border-white/5 dark:bg-ink-950/50"
                >
                  <div className="text-[10px] uppercase tracking-wider text-ink-500">
                    {s.label}
                  </div>
                  <div className="mt-1.5 flex items-end justify-between gap-2">
                    <div className="font-display text-lg font-semibold tracking-tight text-ink-900 dark:text-white sm:text-xl">
                      {s.value}
                    </div>
                    <div
                      className={`flex items-center gap-0.5 text-[10px] font-medium ${
                        s.positive ? 'text-emerald-600 dark:text-emerald-400' : 'text-red-500'
                      }`}
                    >
                      <ArrowUpRight className="h-3 w-3" />
                      {s.delta}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Chart + activity */}
            <div className="mt-3 grid gap-3 lg:grid-cols-[1.6fr_1fr]">
              <div className="rounded-lg border border-ink-200 bg-white p-4 dark:border-white/5 dark:bg-ink-950/50">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-[11px] text-ink-500 dark:text-ink-400">
                      Pipeline esta semana
                    </div>
                    <div className="font-display text-base font-semibold text-ink-900 dark:text-white">
                      $128,420
                    </div>
                  </div>
                  <div className="flex gap-1 text-[10px] text-ink-500 dark:text-ink-400">
                    <span className="rounded border border-ink-200 bg-ink-100 px-1.5 py-0.5 text-ink-900 dark:border-white/5 dark:bg-white/5 dark:text-white">
                      7d
                    </span>
                    <span className="px-1.5 py-0.5">30d</span>
                    <span className="px-1.5 py-0.5">90d</span>
                  </div>
                </div>
                <Chart />
              </div>

              <div className="rounded-lg border border-ink-200 bg-white p-4 dark:border-white/5 dark:bg-ink-950/50">
                <div className="mb-3 flex items-center justify-between">
                  <div className="text-[11px] text-ink-500 dark:text-ink-400">
                    Automatizaciones activas
                  </div>
                  <Workflow className="h-3.5 w-3.5 text-ink-500 dark:text-ink-400" />
                </div>
                <div className="flex flex-col gap-2.5">
                  {automations.map((a, i) => (
                    <div key={i} className="flex items-center justify-between gap-3">
                      <div className="min-w-0">
                        <div className="truncate text-[11px] text-ink-900 dark:text-white">
                          {a.name}
                        </div>
                        <div className="text-[10px] text-ink-500">{a.runs} runs</div>
                      </div>
                      <span className="flex items-center gap-1 rounded-full bg-emerald-500/15 px-1.5 py-0.5 text-[9px] font-medium text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400">
                        <span className="h-1 w-1 rounded-full bg-emerald-500 dark:bg-emerald-400" />
                        {a.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Activity feed */}
            <div className="mt-3 rounded-lg border border-ink-200 bg-white p-4 dark:border-white/5 dark:bg-ink-950/50">
              <div className="mb-3 flex items-center justify-between">
                <div className="text-[11px] text-ink-500 dark:text-ink-400">
                  Actividad reciente
                </div>
                <MessageCircle className="h-3.5 w-3.5 text-ink-500 dark:text-ink-400" />
              </div>
              <div className="flex flex-col divide-y divide-ink-200 dark:divide-white/5">
                {[
                  { who: 'WhatsApp Bot', what: 'envió respuesta a María Salas', time: 'hace 2m' },
                  { who: 'Andrés', what: 'movió lead a "Negociación"', time: 'hace 9m' },
                  { who: 'Meta Ads', what: 'capturó 14 leads nuevos', time: 'hace 22m' },
                ].map((a, i) => (
                  <div key={i} className="flex items-center justify-between py-2 text-[11px]">
                    <div className="text-ink-700 dark:text-ink-200">
                      <span className="font-medium text-ink-900 dark:text-white">{a.who}</span>{' '}
                      <span className="text-ink-500 dark:text-ink-400">{a.what}</span>
                    </div>
                    <div className="text-[10px] text-ink-500">{a.time}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating chip */}
      <motion.div
        initial={{ opacity: 0, x: 30, y: 10 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ delay: 1.1, duration: 0.6 }}
        className="absolute -right-2 top-12 hidden rounded-xl border border-ink-200 bg-white/95 px-3 py-2.5 shadow-[0_20px_60px_-20px_rgba(15,23,42,0.25)] backdrop-blur dark:border-white/10 dark:bg-ink-900/90 dark:shadow-[0_20px_60px_-20px_rgba(0,0,0,0.8)] md:block"
      >
        <div className="flex items-center gap-2 text-[11px]">
          <div className="flex h-7 w-7 items-center justify-center rounded-md bg-emerald-500/15">
            <Zap className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />
          </div>
          <div>
            <div className="font-medium text-ink-900 dark:text-white">
              Automation triggered
            </div>
            <div className="text-ink-500 dark:text-ink-400">Lead Meta → WhatsApp · 1.2s</div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -30, y: 10 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ delay: 1.3, duration: 0.6 }}
        className="absolute -left-3 bottom-8 hidden rounded-xl border border-ink-200 bg-white/95 px-3 py-2.5 shadow-[0_20px_60px_-20px_rgba(15,23,42,0.25)] backdrop-blur dark:border-white/10 dark:bg-ink-900/90 dark:shadow-[0_20px_60px_-20px_rgba(0,0,0,0.8)] md:block"
      >
        <div className="flex items-center gap-2 text-[11px]">
          <div className="flex h-7 w-7 items-center justify-center rounded-md bg-accent-500/15">
            <LineChart className="h-3.5 w-3.5 text-accent-600 dark:text-accent-300" />
          </div>
          <div>
            <div className="font-medium text-ink-900 dark:text-white">+38% conversión</div>
            <div className="text-ink-500 dark:text-ink-400">vs. mes anterior</div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

function Chart() {
  const points = [12, 24, 18, 30, 26, 42, 38, 56, 50, 64, 60, 78]
  const max = Math.max(...points)
  const w = 320
  const h = 110
  const step = w / (points.length - 1)
  const path = points
    .map((p, i) => `${i === 0 ? 'M' : 'L'}${i * step},${h - (p / max) * h}`)
    .join(' ')
  const area = `${path} L${w},${h} L0,${h} Z`

  return (
    <div className="mt-3">
      <svg viewBox={`0 0 ${w} ${h}`} className="h-24 w-full">
        <defs>
          <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d={area} fill="url(#areaGrad)" />
        <motion.path
          d={path}
          fill="none"
          stroke="#2563eb"
          strokeWidth="1.6"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.4, ease: 'easeOut', delay: 0.5 }}
          className="dark:stroke-[#93c5fd]"
        />
        {points.map((p, i) => (
          <circle
            key={i}
            cx={i * step}
            cy={h - (p / max) * h}
            r="1.4"
            className="fill-ink-900 dark:fill-white"
            opacity="0.7"
          />
        ))}
      </svg>
    </div>
  )
}

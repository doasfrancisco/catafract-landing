import { motion } from 'framer-motion'
import { Check, X } from 'lucide-react'
import Container from './Container.jsx'
import SectionHeader from './SectionHeader.jsx'

const others = [
  'Solo desarrollan',
  'Esperan specs completas',
  'Piensan en features',
  'Entregan y se van',
]

const us = [
  'Ayudamos a definir producto',
  'Entendemos negocio y operación',
  'Construimos pensando en crecimiento',
  'Priorizamos impacto, no entregables',
]

export default function Differentiation() {
  return (
    <section className="relative py-28 sm:py-36">
      <Container>
        <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-20">
          <SectionHeader
            eyebrow="Diferenciación"
            title={
              <>
                No solo escribimos <span className="grad-text-accent">código.</span>
              </>
            }
            description="Combinamos experiencia técnica, producto y negocio. Hemos construido startups, trabajado con equipos de alto crecimiento y diseñado software pensando en operación, métricas y escalabilidad."
            maxWidth="max-w-xl"
          />

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <ColumnCard
                title="Otros equipos"
                subtitle="Software factories tradicionales"
                items={others}
                positive={false}
              />
              <ColumnCard
                title="Catafract"
                subtitle="Producto + ingeniería + negocio"
                items={us}
                positive
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

function ColumnCard({ title, subtitle, items, positive }) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border p-6 ${
        positive
          ? 'border-ink-300 bg-gradient-to-br from-white to-ink-50 dark:border-white/15 dark:from-white/[0.06] dark:to-white/[0.02]'
          : 'border-ink-200 bg-ink-50/40 dark:border-white/10 dark:bg-ink-900/30'
      }`}
    >
      {positive && (
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-10 right-0 h-40 w-40 rounded-full bg-accent-400/15 blur-3xl dark:bg-accent-500/20" />
          <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-purple-400/15 blur-3xl dark:bg-purple-500/20" />
        </div>
      )}

      <div className="flex items-center justify-between">
        <h3
          className={`font-display text-lg font-semibold ${
            positive ? 'text-ink-900 dark:text-white' : 'text-ink-600 dark:text-ink-300'
          }`}
        >
          {title}
        </h3>
        {positive && (
          <span className="rounded-full border border-ink-300 bg-ink-900 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-white dark:border-white/15 dark:bg-white/10">
            Nosotros
          </span>
        )}
      </div>
      <p className="mt-1 text-xs text-ink-500">{subtitle}</p>

      <ul className="mt-6 flex flex-col gap-3">
        {items.map((item, i) => (
          <li
            key={i}
            className={`flex items-start gap-3 text-sm leading-relaxed ${
              positive ? 'text-ink-900 dark:text-white' : 'text-ink-500 dark:text-ink-400'
            }`}
          >
            <span
              className={`mt-0.5 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full ${
                positive
                  ? 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-400'
                  : 'bg-ink-200 text-ink-500 dark:bg-white/5 dark:text-ink-500'
              }`}
            >
              {positive ? <Check className="h-3 w-3" /> : <X className="h-3 w-3" />}
            </span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

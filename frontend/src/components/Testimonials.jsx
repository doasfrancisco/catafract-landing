import { motion } from 'framer-motion'
import Container from './Container.jsx'
import SectionHeader from './SectionHeader.jsx'

const testimonials = [
  {
    quote:
      'En tres semanas teníamos un sistema interno funcionando que reemplazó cinco hojas de cálculo. La velocidad de Catafract no se parece a ninguna agencia con la que hayamos trabajado.',
    name: 'Daniela Rojas',
    role: 'COO',
    company: 'Verta Capital',
    initials: 'DR',
    color: 'from-accent-500 to-purple-500',
  },
  {
    quote:
      'No nos pidieron specs cerradas. Vinieron a entender el negocio y propusieron una arquitectura que escaló de 50 a 5,000 usuarios sin tocar el backend.',
    name: 'Andrés Ferreira',
    role: 'Founder & CTO',
    company: 'Lumix',
    initials: 'AF',
    color: 'from-emerald-400 to-teal-500',
  },
  {
    quote:
      'Automatizaron nuestro flujo de leads de WhatsApp y duplicamos la conversión en un mes. El equipo entiende producto, no solo código.',
    name: 'Mariana Salas',
    role: 'Head of Growth',
    company: 'Casa Norte',
    initials: 'MS',
    color: 'from-fuchsia-500 to-orange-400',
  },
]

export default function Testimonials() {
  return (
    <section className="relative py-28 sm:py-36">
      <Container>
        <SectionHeader
          align="center"
          eyebrow="Lo que dicen"
          title="Equipos que ya operan con software construido por nosotros."
          maxWidth="max-w-3xl"
        />

        <div className="mt-16 grid grid-cols-1 gap-5 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.07 }}
              className="group relative flex h-full flex-col rounded-2xl border border-ink-200 bg-white p-7 backdrop-blur transition hover:border-ink-300 dark:border-white/10 dark:bg-ink-900/40 dark:hover:border-white/20"
            >
              <Quote />
              <blockquote className="mt-4 flex-1 text-balance text-base leading-relaxed text-ink-800 dark:text-ink-100 sm:text-[17px]">
                {t.quote}
              </blockquote>

              <figcaption className="mt-7 flex items-center gap-3 border-t border-ink-200 pt-5 dark:border-white/5">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br ${t.color} font-semibold text-white`}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-medium text-ink-900 dark:text-white">
                    {t.name}
                  </div>
                  <div className="text-xs text-ink-500 dark:text-ink-400">
                    {t.role} · {t.company}
                  </div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </Container>
    </section>
  )
}

function Quote() {
  return (
    <svg
      viewBox="0 0 32 24"
      className="h-6 w-6 text-ink-300 transition group-hover:text-accent-500 dark:text-ink-500 dark:group-hover:text-accent-300"
      fill="currentColor"
    >
      <path d="M0 24V14C0 6.3 4.5 0.6 12 0v4.5c-3.6 0.5-6 3-6.3 6.3H10v13H0zm18 0V14c0-7.7 4.5-13.4 12-14v4.5c-3.6 0.5-6 3-6.3 6.3H28v13h-10z" />
    </svg>
  )
}

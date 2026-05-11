import { motion } from 'framer-motion'
import Container from './Container.jsx'
import SectionHeader from './SectionHeader.jsx'

const techs = [
  { name: 'React', logo: ReactLogo },
  { name: 'Next.js', logo: NextLogo },
  { name: 'Go', logo: GoLogo },
  { name: 'Node.js', logo: NodeLogo },
  { name: 'PostgreSQL', logo: PostgresLogo },
  { name: 'AWS', logo: AwsLogo },
  { name: 'Supabase', logo: SupabaseLogo },
  { name: 'OpenAI', logo: OpenAiLogo },
]

export default function Technologies() {
  return (
    <section id="tecnologias" className="relative py-28 sm:py-36">
      <Container>
        <SectionHeader
          align="center"
          eyebrow="Stack moderno"
          title="Las herramientas correctas para cada problema."
          description="Elegimos tecnologías por encaje técnico y madurez. No hay sobre-ingeniería ni dependencias decorativas."
          maxWidth="max-w-3xl"
        />

        <div className="mt-16">
          <div className="grid grid-cols-2 overflow-hidden rounded-2xl border border-ink-200 bg-white backdrop-blur dark:border-white/10 dark:bg-ink-900/30 sm:grid-cols-4">
            {techs.map((t, i) => {
              const Logo = t.logo
              return (
                <motion.div
                  key={t.name}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: i * 0.04 }}
                  className={`group relative flex flex-col items-center justify-center gap-3 px-6 py-12 transition hover:bg-ink-50 dark:hover:bg-white/[0.03] ${
                    i % 4 !== 3 ? 'sm:border-r sm:border-ink-200 sm:dark:border-white/5' : ''
                  } ${
                    i < techs.length - 4 ? 'sm:border-b sm:border-ink-200 sm:dark:border-white/5' : ''
                  } ${
                    i % 2 === 0 ? 'border-r border-ink-200 dark:border-white/5 sm:border-r' : ''
                  } ${i < techs.length - 2 ? 'border-b border-ink-200 dark:border-white/5' : ''}`}
                >
                  <div className="flex h-10 w-10 items-center justify-center text-ink-500 transition-colors group-hover:text-ink-900 dark:text-ink-300 dark:group-hover:text-white">
                    <Logo />
                  </div>
                  <div className="font-display text-sm font-medium text-ink-600 transition group-hover:text-ink-900 dark:text-ink-300 dark:group-hover:text-white">
                    {t.name}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </Container>
    </section>
  )
}

/* ------- Logos (inline, monochrome-friendly) ------- */

function ReactLogo() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.4">
      <circle cx="12" cy="12" r="2" fill="currentColor" stroke="none" />
      <ellipse cx="12" cy="12" rx="10" ry="4" />
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
    </svg>
  )
}

function NextLogo() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor">
      <circle cx="12" cy="12" r="11" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <path
        d="M9 7v10M9 7l7 10"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        fill="none"
      />
      <rect x="14.6" y="7" width="1.4" height="6.5" rx="0.4" />
    </svg>
  )
}

function GoLogo() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M3 12h4M2 9h4M3 15h3" strokeLinecap="round" />
      <ellipse cx="15" cy="12" rx="6" ry="5" />
      <circle cx="13" cy="11" r="0.9" fill="currentColor" stroke="none" />
      <circle cx="17" cy="11" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  )
}

function NodeLogo() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round">
      <path d="M12 2.5l8.5 5v9L12 21.5 3.5 16.5v-9z" />
      <path d="M12 9v6M9 13.5c0 1 1 1.5 3 1.5s3-.5 3-1.5-1-1.3-3-1.5c-2-.2-3-.5-3-1.4S10 9 12 9s3 .5 3 1.5" strokeLinecap="round" />
    </svg>
  )
}

function PostgresLogo() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.4">
      <ellipse cx="12" cy="6" rx="7" ry="2.5" />
      <path d="M5 6v6c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5V6" />
      <path d="M5 12v6c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5v-6" />
    </svg>
  )
}

function AwsLogo() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
      <path d="M3 14c0 2.5 2.5 4 9 4s9-1.5 9-4" />
      <path d="M5 17c1.5 1 4 1.5 7 1.5s5.5-.5 7-1.5" />
      <path d="M7 9.5l1.6-4 1.6 4M7.5 8.2h2.2M13 5.5l1.5 4 1.5-4M14.5 5.5v4" />
    </svg>
  )
}

function SupabaseLogo() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round">
      <path d="M13 2L4 13h7v9l9-11h-7z" />
    </svg>
  )
}

function OpenAiLogo() {
  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.3">
      <path d="M12 4.5c-1.8 0-3.4 1-4.2 2.6-1.7.3-3 1.7-3.3 3.4-.9 1.4-.9 3.2 0 4.6.3 1.7 1.6 3.1 3.3 3.4.8 1.6 2.4 2.6 4.2 2.6 1.8 0 3.4-1 4.2-2.6 1.7-.3 3-1.7 3.3-3.4.9-1.4.9-3.2 0-4.6-.3-1.7-1.6-3.1-3.3-3.4C15.4 5.5 13.8 4.5 12 4.5z" />
      <path d="M9 9.5l3 1.7 3-1.7M12 11.2v3.4M9 12.5l3 1.7 3-1.7" />
    </svg>
  )
}

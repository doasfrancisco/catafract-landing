import { Linkedin, Mail, MessageCircle } from 'lucide-react'
import Container from './Container.jsx'
import Wordmark from './Wordmark.jsx'

const WHATSAPP_URL = 'https://wa.me/51960400734'

const groups = [
  {
    title: 'Servicios',
    links: [
      { label: 'Desarrollo de software', href: '/#servicios' },
      { label: 'Automatización e IA', href: '/#servicios' },
      { label: 'Producto y tecnología', href: '/#servicios' },
    ],
  },
  {
    title: 'Empresa',
    links: [
      { label: 'Proyectos', href: '/#proyectos' },
      { label: 'Proceso', href: '/#proceso' },
      { label: 'Tecnologías', href: '/#tecnologias' },
    ],
  },
  {
    title: 'Contacto',
    links: [
      { label: 'Agenda una llamada', href: '/#contacto' },
      { label: 'hello@catafract.com', href: 'mailto:hello@catafract.com' },
      { label: 'WhatsApp', href: WHATSAPP_URL, external: true },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-ink-200 pt-20 dark:border-white/5">
      <Container>
        <div className="grid grid-cols-1 gap-12 pb-14 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <a href="/" className="flex items-center">
              <Wordmark className="text-lg" />
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-600 dark:text-ink-400">
              Software factory que construye productos, automatizaciones y
              plataformas para empresas que quieren operar, vender y escalar.
            </p>

            <div className="mt-6 flex items-center gap-2">
              <Social
                href="mailto:hello@catafract.com"
                label="Email"
                icon={<Mail className="h-4 w-4" />}
              />
              <Social
                href="https://linkedin.com"
                label="LinkedIn"
                external
                icon={<Linkedin className="h-4 w-4" />}
              />
              <Social
                href={WHATSAPP_URL}
                label="WhatsApp"
                external
                icon={<MessageCircle className="h-4 w-4" />}
              />
            </div>
          </div>

          {groups.map((g) => (
            <div key={g.title}>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-ink-500 dark:text-ink-400">
                {g.title}
              </h4>
              <ul className="mt-5 flex flex-col gap-3 text-sm">
                {g.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      target={l.external ? '_blank' : undefined}
                      rel={l.external ? 'noopener noreferrer' : undefined}
                      className="text-ink-600 transition hover:text-ink-900 dark:text-ink-300 dark:hover:text-white"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-start justify-between gap-4 border-t border-ink-200 py-6 text-xs text-ink-500 dark:border-white/5 sm:flex-row sm:items-center">
          <div>© {new Date().getFullYear()} Catafract. Todos los derechos reservados.</div>
          <div className="flex items-center gap-5">
            <a
              href="/privacy"
              className="transition hover:text-ink-700 dark:hover:text-ink-300"
            >
              Privacidad
            </a>
            <a
              href="/tos"
              className="transition hover:text-ink-700 dark:hover:text-ink-300"
            >
              Términos
            </a>
          </div>
        </div>
      </Container>

      {/* Big watermark */}
      <div className="pointer-events-none relative mt-4 select-none overflow-hidden">
        <div className="bg-gradient-to-b from-ink-900/[0.04] to-transparent bg-clip-text text-center font-display text-[18vw] font-extrabold italic leading-none tracking-tighter text-transparent dark:from-white/[0.03]">
          CATAFRACT.
        </div>
      </div>
    </footer>
  )
}

function Social({ href, icon, label, external }) {
  return (
    <a
      href={href}
      aria-label={label}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-ink-200 bg-white text-ink-600 transition hover:border-ink-300 hover:bg-ink-50 hover:text-ink-900 dark:border-white/10 dark:bg-white/[0.03] dark:text-ink-300 dark:hover:border-white/20 dark:hover:bg-white/10 dark:hover:text-white"
    >
      {icon}
    </a>
  )
}

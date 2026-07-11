import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Wordmark from './Wordmark.jsx'
import ThemeToggle from './ThemeToggle.jsx'

const links = [
  { label: 'Servicios', href: '/#servicios' },
  { label: 'Proyectos', href: '/#proyectos' },
  { label: 'Proceso', href: '/#proceso' },
  { label: 'Tecnologías', href: '/#tecnologias' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-ink-200/70 bg-white/70 max-sm:bg-white/90 backdrop-blur-xl dark:border-white/5 dark:bg-ink-950/70 dark:max-sm:bg-ink-950/90'
          : ''
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8 lg:px-10">
        <a href="/" className="flex items-center">
          <Wordmark className="text-lg" />
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-md px-3 py-2 text-sm text-ink-600 transition hover:text-ink-900 dark:text-ink-300 dark:hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <a
            href="/#contacto"
            className="group inline-flex items-center gap-2 rounded-lg bg-ink-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-ink-700 dark:bg-white dark:text-ink-950 dark:hover:bg-ink-100"
          >
            Agenda una llamada
            <svg
              viewBox="0 0 16 16"
              fill="none"
              className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
            >
              <path
                d="M6 3l5 5-5 5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            aria-label="Menú"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-ink-200 text-ink-900 dark:border-white/10 dark:text-white"
          >
            <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
              {open ? (
                <path
                  d="M6 6l12 12M6 18L18 6"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden">
          <div className="border-t border-ink-200 bg-white/95 px-6 py-4 backdrop-blur-xl dark:border-white/5 dark:bg-ink-950/95">
            <div className="flex flex-col gap-1">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-3 text-base text-ink-700 transition hover:bg-ink-100 dark:text-ink-200 dark:hover:bg-white/5"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="/#contacto"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center rounded-lg bg-ink-900 px-4 py-3 text-sm font-medium text-white dark:bg-white dark:text-ink-950"
              >
                Agenda una llamada
              </a>
            </div>
          </div>
        </div>
      )}
    </motion.header>
  )
}

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2, Loader2 } from 'lucide-react'
import Container from './Container.jsx'

const WA_NUMBER = '51960400734'
const CONTACT_API = import.meta.env.VITE_CONTACT_API

function buildWhatsappUrl(form) {
  const intro = form.company.trim()
    ? `Soy ${form.name.trim()} de ${form.company.trim()}.`
    : `Soy ${form.name.trim()}.`
  const text = `Hola Catafract,\n\n${intro}\n\n${form.message.trim()}\n\nEmail: ${form.email.trim()}`
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`
}

async function persistLead(form) {
  if (!CONTACT_API) return
  const ctrl = new AbortController()
  const timer = setTimeout(() => ctrl.abort(), 4000)
  try {
    await fetch(CONTACT_API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
      signal: ctrl.signal,
    })
  } catch {
    /* best-effort: DynamoDB write failures must not block the WhatsApp redirect */
  } finally {
    clearTimeout(timer)
  }
}

export default function CTA() {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' })
  const [status, setStatus] = useState('idle')

  const onSubmit = async (e) => {
    e.preventDefault()
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) return
    setStatus('sending')

    await persistLead(form)

    const url = buildWhatsappUrl(form)
    const opened = window.open(url, '_blank', 'noopener,noreferrer')
    if (!opened) window.location.href = url

    setStatus('sent')
  }

  const update = (k) => (e) => setForm((s) => ({ ...s, [k]: e.target.value }))

  return (
    <section id="contacto" className="relative py-20 sm:py-28">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-ink-200 bg-white p-8 backdrop-blur-xl dark:border-white/10 dark:bg-ink-900/50 sm:p-12 lg:p-16">
          {/* Background effects */}
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div
              className="absolute inset-0 bg-grid-pattern opacity-50 dark:opacity-40"
              style={{ backgroundSize: '40px 40px' }}
            />
            <div className="absolute -top-40 left-1/2 h-[400px] w-[800px] -translate-x-1/2 rounded-full bg-accent-400/20 blur-3xl dark:bg-accent-500/25" />
            <div className="absolute -bottom-40 right-0 h-[300px] w-[400px] rounded-full bg-purple-400/15 blur-3xl dark:bg-purple-500/20" />
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_1fr]">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6 }}
              className="flex flex-col"
            >
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-ink-200 bg-white/70 px-3 py-1 text-xs font-medium text-ink-700 dark:border-white/10 dark:bg-white/5 dark:text-ink-200">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400" />
                Respuesta en menos de 24h
              </div>

              <h2 className="mt-5 text-balance font-display text-4xl font-semibold leading-[1.05] tracking-tighter text-ink-900 dark:text-white sm:text-5xl lg:text-6xl">
                Construyamos algo <span className="grad-text-accent">útil.</span>
              </h2>
              <p className="mt-5 max-w-md text-balance text-lg leading-relaxed text-ink-600 dark:text-ink-300">
                Cuéntanos qué quieres automatizar, mejorar o construir. Te
                respondemos con un plan inicial y propuesta de trabajo.
              </p>

              <ul className="mt-8 flex flex-col gap-3 text-sm text-ink-700 dark:text-ink-200">
                {[
                  'Llamada inicial de 30 minutos',
                  'Diagnóstico técnico y de producto',
                  'Plan iterativo con entregables semanales',
                ].map((b) => (
                  <li key={b} className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-accent-600 dark:text-accent-300" />
                    {b}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: 0.1 }}
              onSubmit={onSubmit}
              className="relative rounded-2xl border border-ink-200 bg-white/90 p-6 backdrop-blur dark:border-white/10 dark:bg-ink-950/60 sm:p-7"
            >
              {status === 'sent' ? (
                <div className="flex h-full flex-col items-center justify-center py-10 text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/15">
                    <CheckCircle2 className="h-7 w-7 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-semibold text-ink-900 dark:text-white">
                    Mensaje enviado
                  </h3>
                  <p className="mt-2 max-w-xs text-sm text-ink-500 dark:text-ink-400">
                    Te respondemos dentro de las próximas 24h con próximos pasos.
                  </p>
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <Field
                      label="Nombre"
                      placeholder="Tu nombre"
                      value={form.name}
                      onChange={update('name')}
                      required
                    />
                    <Field
                      label="Email"
                      type="email"
                      placeholder="tu@empresa.com"
                      value={form.email}
                      onChange={update('email')}
                      required
                    />
                  </div>
                  <Field
                    label="Empresa"
                    placeholder="Nombre de tu empresa"
                    value={form.company}
                    onChange={update('company')}
                    className="mt-4"
                  />
                  <Field
                    label="¿Qué quieres construir?"
                    placeholder="Cuéntanos brevemente sobre tu proyecto…"
                    value={form.message}
                    onChange={update('message')}
                    textarea
                    className="mt-4"
                    required
                  />

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-ink-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-ink-700 disabled:opacity-70 dark:bg-white dark:text-ink-950 dark:hover:bg-ink-100"
                  >
                    {status === 'sending' ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        Enviando…
                      </>
                    ) : (
                      <>
                        Agenda una llamada
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                      </>
                    )}
                  </button>
                  <p className="mt-3 text-center text-[11px] text-ink-500">
                    Al enviar aceptas que te contactemos sobre tu proyecto. No spam.
                  </p>
                </>
              )}
            </motion.form>
          </div>
        </div>
      </Container>
    </section>
  )
}

function Field({ label, textarea, className = '', ...rest }) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-1.5 block text-xs font-medium text-ink-700 dark:text-ink-300">
        {label}
      </span>
      {textarea ? (
        <textarea
          {...rest}
          rows={4}
          className="w-full resize-none rounded-lg border border-ink-200 bg-white px-3.5 py-2.5 text-sm text-ink-900 placeholder:text-ink-400 outline-none transition focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 dark:border-white/10 dark:bg-ink-900/60 dark:text-white dark:placeholder:text-ink-500 dark:focus:border-accent-500/60 dark:focus:bg-ink-900/80 dark:focus:ring-accent-500/30"
        />
      ) : (
        <input
          {...rest}
          className="w-full rounded-lg border border-ink-200 bg-white px-3.5 py-2.5 text-sm text-ink-900 placeholder:text-ink-400 outline-none transition focus:border-accent-500 focus:ring-2 focus:ring-accent-500/20 dark:border-white/10 dark:bg-ink-900/60 dark:text-white dark:placeholder:text-ink-500 dark:focus:border-accent-500/60 dark:focus:bg-ink-900/80 dark:focus:ring-accent-500/30"
        />
      )}
    </label>
  )
}

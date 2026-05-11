import { useRef } from 'react'
import { Linkedin, Mail, MessageCircle, X } from 'lucide-react'
import Container from './Container.jsx'
import Logo from './Logo.jsx'

const WHATSAPP_URL = 'https://wa.me/51960400734'
const LEGAL_UPDATED = '10 de mayo de 2026'

const groups = [
  {
    title: 'Servicios',
    links: [
      { label: 'Desarrollo de software', href: '#servicios' },
      { label: 'Automatización e IA', href: '#servicios' },
      { label: 'Producto y tecnología', href: '#servicios' },
    ],
  },
  {
    title: 'Empresa',
    links: [
      { label: 'Proyectos', href: '#proyectos' },
      { label: 'Proceso', href: '#proceso' },
      { label: 'Tecnologías', href: '#tecnologias' },
    ],
  },
  {
    title: 'Contacto',
    links: [
      { label: 'Agenda una llamada', href: '#contacto' },
      { label: 'hello@catafract.com', href: 'mailto:hello@catafract.com' },
      { label: 'WhatsApp', href: WHATSAPP_URL, external: true },
    ],
  },
]

export default function Footer() {
  const privacyRef = useRef(null)
  const termsRef = useRef(null)

  const open = (ref) => () => ref.current?.showModal()
  const close = (ref) => () => ref.current?.close()

  return (
    <footer className="relative border-t border-ink-200 pt-20 dark:border-white/5">
      <Container>
        <div className="grid grid-cols-1 gap-12 pb-14 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <a href="#" className="flex items-center gap-2.5">
              <Logo className="h-7 w-7" />
              <span className="font-display text-base font-semibold text-ink-900 dark:text-white">
                Catafract
              </span>
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
            <button
              type="button"
              onClick={open(privacyRef)}
              className="transition hover:text-ink-700 dark:hover:text-ink-300"
            >
              Privacidad
            </button>
            <button
              type="button"
              onClick={open(termsRef)}
              className="transition hover:text-ink-700 dark:hover:text-ink-300"
            >
              Términos
            </button>
          </div>
        </div>
      </Container>

      {/* Big watermark */}
      <div className="pointer-events-none relative mt-4 select-none overflow-hidden">
        <div className="bg-gradient-to-b from-ink-900/[0.04] to-transparent bg-clip-text text-center font-display text-[18vw] font-bold leading-none tracking-tighter text-transparent dark:from-white/[0.03]">
          CATAFRACT
        </div>
      </div>

      <LegalDialog dialogRef={privacyRef} title="Política de privacidad" onClose={close(privacyRef)}>
        <p>Última actualización: {LEGAL_UPDATED}.</p>
        <p>
          En Catafract respetamos tu privacidad. Esta política explica qué
          datos personales recopilamos a través de catafract.com, con qué
          finalidad los tratamos y los derechos que tienes sobre ellos, en
          cumplimiento de la Ley N.º 29733 — Ley de Protección de Datos
          Personales del Perú y su reglamento.
        </p>
        <h3>1. Datos que recopilamos</h3>
        <p>
          Cuando completas el formulario de contacto recopilamos el nombre,
          correo electrónico, empresa y el mensaje que envías. De manera
          automática registramos información técnica básica como el navegador
          (user agent) y la URL de referencia, con fines de seguridad y
          diagnóstico.
        </p>
        <h3>2. Finalidad</h3>
        <p>
          Usamos los datos exclusivamente para responder tu solicitud,
          coordinar reuniones, enviarte una propuesta de trabajo y mantener
          un historial mínimo de la conversación. No realizamos perfilado ni
          enviamos comunicaciones masivas.
        </p>
        <h3>3. Conservación</h3>
        <p>
          Conservamos la información del formulario mientras dure la relación
          comercial y por un máximo de 24 meses adicionales para fines
          contables o de auditoría. Pasado ese plazo se elimina o anonimiza.
        </p>
        <h3>4. Encargados</h3>
        <p>
          Los datos se almacenan en Amazon Web Services (región us-east-1).
          AWS actúa como encargado del tratamiento bajo nuestras
          instrucciones. No vendemos, alquilamos ni compartimos tu
          información con terceros con fines comerciales.
        </p>
        <h3>5. Tus derechos</h3>
        <p>
          Puedes ejercer en cualquier momento tus derechos de acceso,
          rectificación, cancelación y oposición (ARCO) escribiéndonos a{' '}
          <a href="mailto:hello@catafract.com">hello@catafract.com</a>.
          También puedes presentar un reclamo ante la Autoridad Nacional de
          Protección de Datos Personales del Ministerio de Justicia y
          Derechos Humanos del Perú.
        </p>
        <h3>6. Cambios</h3>
        <p>
          Podemos actualizar esta política para reflejar mejoras en nuestros
          procesos. Publicaremos cualquier cambio en esta misma página con
          una nueva fecha de actualización.
        </p>
      </LegalDialog>

      <LegalDialog dialogRef={termsRef} title="Términos y condiciones" onClose={close(termsRef)}>
        <p>Última actualización: {LEGAL_UPDATED}.</p>
        <p>
          Estos términos rigen el uso del sitio catafract.com y los servicios
          de consultoría, diseño y desarrollo de software ofrecidos por
          Catafract. Al usar el sitio o contratar nuestros servicios aceptas
          lo aquí descrito.
        </p>
        <h3>1. Servicios</h3>
        <p>
          Catafract diseña y construye productos digitales, automatizaciones
          y plataformas a medida. Los entregables, plazos, alcance y costos
          de cada proyecto se acuerdan por separado en una propuesta firmada
          o intercambio escrito que se considera parte integrante de estos
          términos.
        </p>
        <h3>2. Uso del sitio</h3>
        <p>
          El contenido publicado en catafract.com tiene fines informativos.
          Te comprometes a no usar el sitio para fines ilícitos, a no
          interferir con su funcionamiento y a no intentar acceder sin
          autorización a sistemas o datos relacionados.
        </p>
        <h3>3. Propiedad intelectual</h3>
        <p>
          Las marcas, logotipos, textos y diseños del sitio son propiedad de
          Catafract o de sus licenciantes. El código y los entregables
          desarrollados para un cliente se rigen por el contrato específico
          de cada proyecto.
        </p>
        <h3>4. Prototipos y resultados</h3>
        <p>
          Las demostraciones, prototipos y estimaciones presentados antes de
          la firma de un contrato son referenciales y no constituyen una
          oferta vinculante. Los resultados de cualquier proyecto dependen
          de la información y colaboración provista por el cliente.
        </p>
        <h3>5. Limitación de responsabilidad</h3>
        <p>
          En la medida permitida por la ley, Catafract no será responsable
          por daños indirectos, lucro cesante o pérdida de datos derivados
          del uso del sitio. La responsabilidad total por cualquier servicio
          contratado se limita al monto efectivamente pagado por el cliente
          por dicho servicio.
        </p>
        <h3>6. Ley aplicable</h3>
        <p>
          Estos términos se rigen por las leyes de la República del Perú.
          Cualquier controversia será sometida a los jueces y tribunales del
          distrito judicial de Lima Centro.
        </p>
        <h3>7. Contacto</h3>
        <p>
          Para consultas sobre estos términos escríbenos a{' '}
          <a href="mailto:hello@catafract.com">hello@catafract.com</a>.
        </p>
      </LegalDialog>
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

const LegalDialog = ({ dialogRef, title, onClose, children }) => (
  <dialog
    ref={dialogRef}
    onClick={(e) => {
      if (e.target === e.currentTarget) onClose()
    }}
    className="w-full max-w-2xl rounded-2xl border border-ink-200 bg-white p-0 text-ink-800 shadow-2xl backdrop:bg-ink-950/60 backdrop:backdrop-blur-sm dark:border-white/10 dark:bg-ink-950 dark:text-ink-200"
  >
    <div className="flex items-center justify-between border-b border-ink-200 px-6 py-4 dark:border-white/10">
      <h2 className="font-display text-lg font-semibold text-ink-900 dark:text-white">
        {title}
      </h2>
      <button
        type="button"
        onClick={onClose}
        aria-label="Cerrar"
        className="inline-flex h-8 w-8 items-center justify-center rounded-md text-ink-500 transition hover:bg-ink-100 hover:text-ink-900 dark:text-ink-400 dark:hover:bg-white/10 dark:hover:text-white"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
    <div className="prose prose-sm max-w-none px-6 py-5 dark:prose-invert [&_a]:text-accent-600 dark:[&_a]:text-accent-400 [&_h3]:mt-5 [&_h3]:font-display [&_h3]:text-sm [&_h3]:font-semibold [&_h3]:text-ink-900 dark:[&_h3]:text-white [&_p]:mt-3 [&_p]:text-sm [&_p]:leading-relaxed">
      {children}
    </div>
  </dialog>
)

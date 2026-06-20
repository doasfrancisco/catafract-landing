import { ArrowLeft } from 'lucide-react'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import Container from '../components/Container.jsx'

const LEGAL_UPDATED = '10 de mayo de 2026'

function LegalShell({ title, intro, children }) {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-ink-50 text-ink-900 selection:bg-accent-500/40 dark:bg-ink-950 dark:text-ink-100">
      {/* Ambient background */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-noise" />
        <div className="absolute -top-40 left-1/2 h-[600px] w-[1200px] -translate-x-1/2 rounded-full bg-accent-500/15 blur-3xl dark:bg-accent-600/20" />
        <div className="absolute top-[40%] left-0 h-[500px] w-[500px] rounded-full bg-purple-400/10 blur-3xl dark:bg-purple-600/10" />
        <div className="absolute top-[80%] right-0 h-[500px] w-[500px] rounded-full bg-cyan-400/10 blur-3xl dark:bg-cyan-500/10" />
      </div>

      <Navbar />

      <main className="pt-28 pb-20 sm:pt-32">
        <Container>
          <div className="mx-auto max-w-2xl">
            <a
              href="/"
              className="inline-flex items-center gap-2 text-sm text-ink-500 transition hover:text-ink-900 dark:text-ink-400 dark:hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              Volver al inicio
            </a>

            <h1 className="mt-6 font-display text-3xl font-bold tracking-tight text-ink-900 dark:text-white sm:text-4xl">
              {title}
            </h1>
            <p className="mt-2 text-sm text-ink-500 dark:text-ink-400">
              Última actualización: {LEGAL_UPDATED}.
            </p>

            <div className="prose prose-sm mt-8 max-w-none dark:prose-invert [&_a]:text-accent-600 dark:[&_a]:text-accent-400 [&_h2]:mt-8 [&_h2]:font-display [&_h2]:text-base [&_h2]:font-semibold [&_h2]:text-ink-900 dark:[&_h2]:text-white [&_p]:mt-3 [&_p]:text-sm [&_p]:leading-relaxed [&_p]:text-ink-700 dark:[&_p]:text-ink-300">
              {intro}
              {children}
            </div>
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  )
}

export function PrivacyPage() {
  return (
    <LegalShell
      title="Política de privacidad"
      intro={
        <p>
          En Catafract respetamos tu privacidad. Esta política explica qué datos
          personales recopilamos a través de catafract.com, con qué finalidad los
          tratamos y los derechos que tienes sobre ellos, en cumplimiento de la
          Ley N.º 29733 — Ley de Protección de Datos Personales del Perú y su
          reglamento.
        </p>
      }
    >
      <h2>1. Datos que recopilamos</h2>
      <p>
        Cuando completas el formulario de contacto recopilamos el nombre, correo
        electrónico, empresa y el mensaje que envías. De manera automática
        registramos información técnica básica como el navegador (user agent) y la
        URL de referencia, con fines de seguridad y diagnóstico.
      </p>
      <h2>2. Finalidad</h2>
      <p>
        Usamos los datos exclusivamente para responder tu solicitud, coordinar
        reuniones, enviarte una propuesta de trabajo y mantener un historial
        mínimo de la conversación. No realizamos perfilado ni enviamos
        comunicaciones masivas.
      </p>
      <h2>3. Conservación</h2>
      <p>
        Conservamos la información del formulario mientras dure la relación
        comercial y por un máximo de 24 meses adicionales para fines contables o
        de auditoría. Pasado ese plazo se elimina o anonimiza.
      </p>
      <h2>4. Encargados</h2>
      <p>
        Los datos se almacenan en Amazon Web Services (región us-east-1). AWS
        actúa como encargado del tratamiento bajo nuestras instrucciones. No
        vendemos, alquilamos ni compartimos tu información con terceros con fines
        comerciales.
      </p>
      <h2>5. Tus derechos</h2>
      <p>
        Puedes ejercer en cualquier momento tus derechos de acceso, rectificación,
        cancelación y oposición (ARCO) escribiéndonos a{' '}
        <a href="mailto:hello@catafract.com">hello@catafract.com</a>. También
        puedes presentar un reclamo ante la Autoridad Nacional de Protección de
        Datos Personales del Ministerio de Justicia y Derechos Humanos del Perú.
      </p>
      <h2>6. Cambios</h2>
      <p>
        Podemos actualizar esta política para reflejar mejoras en nuestros
        procesos. Publicaremos cualquier cambio en esta misma página con una nueva
        fecha de actualización.
      </p>
    </LegalShell>
  )
}

export function TosPage() {
  return (
    <LegalShell
      title="Términos y condiciones"
      intro={
        <p>
          Estos términos rigen el uso del sitio catafract.com y los servicios de
          consultoría, diseño y desarrollo de software ofrecidos por Catafract. Al
          usar el sitio o contratar nuestros servicios aceptas lo aquí descrito.
        </p>
      }
    >
      <h2>1. Servicios</h2>
      <p>
        Catafract diseña y construye productos digitales, automatizaciones y
        plataformas a medida. Los entregables, plazos, alcance y costos de cada
        proyecto se acuerdan por separado en una propuesta firmada o intercambio
        escrito que se considera parte integrante de estos términos.
      </p>
      <h2>2. Uso del sitio</h2>
      <p>
        El contenido publicado en catafract.com tiene fines informativos. Te
        comprometes a no usar el sitio para fines ilícitos, a no interferir con su
        funcionamiento y a no intentar acceder sin autorización a sistemas o datos
        relacionados.
      </p>
      <h2>3. Propiedad intelectual</h2>
      <p>
        Las marcas, logotipos, textos y diseños del sitio son propiedad de
        Catafract o de sus licenciantes. El código y los entregables desarrollados
        para un cliente se rigen por el contrato específico de cada proyecto.
      </p>
      <h2>4. Prototipos y resultados</h2>
      <p>
        Las demostraciones, prototipos y estimaciones presentados antes de la firma
        de un contrato son referenciales y no constituyen una oferta vinculante.
        Los resultados de cualquier proyecto dependen de la información y
        colaboración provista por el cliente.
      </p>
      <h2>5. Limitación de responsabilidad</h2>
      <p>
        En la medida permitida por la ley, Catafract no será responsable por daños
        indirectos, lucro cesante o pérdida de datos derivados del uso del sitio.
        La responsabilidad total por cualquier servicio contratado se limita al
        monto efectivamente pagado por el cliente por dicho servicio.
      </p>
      <h2>6. Ley aplicable</h2>
      <p>
        Estos términos se rigen por las leyes de la República del Perú. Cualquier
        controversia será sometida a los jueces y tribunales del distrito judicial
        de Lima Centro.
      </p>
      <h2>7. Contacto</h2>
      <p>
        Para consultas sobre estos términos escríbenos a{' '}
        <a href="mailto:hello@catafract.com">hello@catafract.com</a>.
      </p>
    </LegalShell>
  )
}

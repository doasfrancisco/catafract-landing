import Container from './Container.jsx'
import SectionHeader from './SectionHeader.jsx'
import MethodHero from './MethodHero.jsx'

/**
 * Sección "Nuestro método" — va después de "El problema".
 * Reutiliza el visual de 3 pasos (MethodHero) con un encabezado propio.
 */
export default function Method() {
  return (
    <section className="relative py-20 sm:py-28">
      <Container>
        <SectionHeader
          align="center"
          eyebrow="Nuestro método"
          title="Así resolvemos esos cuellos de botella."
          description="No arrancamos escribiendo código. Primero entendemos tu operación, encontramos dónde la tecnología rinde más, y recién ahí construimos."
          maxWidth="max-w-3xl"
        />
        <div className="mt-16">
          <MethodHero />
        </div>
      </Container>
    </section>
  )
}

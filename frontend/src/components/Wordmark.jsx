// Wordmark tipográfico "CATAFRACT." — bold itálica en mayúsculas.
// Reemplaza al antiguo lockup (ícono hexagonal + texto). Se adapta al
// tema claro/oscuro y es nítido a cualquier tamaño (sin depender de un PNG).
export default function Wordmark({ className = 'text-lg' }) {
  return (
    <span
      className={`select-none font-display font-extrabold italic uppercase leading-none tracking-tight text-ink-900 dark:text-white ${className}`}
    >
      Catafract.
    </span>
  )
}

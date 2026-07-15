import { motion } from 'framer-motion'

/**
 * Visual del hero = el método en 3 pasos, con mini-ilustración por fase
 * (Opción H). Evaluar → Identificar → Implementar. Movimiento sutil
 * (lupa que barre, pulso en la oportunidad, línea que fluye).
 * Colores propios vía vars con override en html.dark para adaptarse al tema.
 */
export default function MethodHero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
      className="mh relative mx-auto max-w-[1000px]"
    >
      <style>{`
        .mh{--mh-panel:#eef0f3;--mh-wire:#cfd3da;--mh-dim2:#d4d4dc;--mh-border:#d4d4dc;--mh-accent:#2563eb;--mh-accent-soft:rgba(37,99,235,.14);--mh-good:#059669}
        html.dark .mh{--mh-panel:#1a1a24;--mh-wire:rgba(255,255,255,.16);--mh-dim2:rgba(255,255,255,.10);--mh-border:rgba(255,255,255,.14);--mh-accent:#93c5fd;--mh-accent-soft:rgba(147,197,253,.20);--mh-good:#34d399}
        .mh .steps{position:relative;display:grid;grid-template-columns:1fr;gap:28px}
        .mh .connector{display:none}
        @media(min-width:768px){
          .mh .steps{grid-template-columns:repeat(3,1fr);gap:28px}
          .mh .connector{display:block;position:absolute;top:80px;left:16.66%;right:16.66%;height:3px;border-radius:2px;z-index:0;
            background:linear-gradient(90deg,var(--mh-wire) 0 40%,var(--mh-accent) 50%,var(--mh-wire) 60% 100%);background-size:220% 100%;animation:mh-flow 5s linear infinite}
        }
        .mh .step{position:relative;z-index:1}
        .mh .scene{position:relative;height:158px}
        .mh .scene svg{display:block;width:100%;height:100%}
        .mh .s-panel{fill:var(--mh-panel)}.mh .s-wire{stroke:var(--mh-wire);fill:none}.mh .s-dim{fill:var(--mh-wire)}
        .mh .s-dim2{fill:var(--mh-dim2)}.mh .s-accent{fill:var(--mh-accent)}.mh .s-accentS{stroke:var(--mh-accent);fill:none}.mh .s-good{fill:var(--mh-good)}
        .mh .scan{animation:mh-scan 4.5s ease-in-out infinite}
        .mh .oppPulse{transform-origin:center;transform-box:fill-box;animation:mh-opp 2.6s ease-in-out infinite}
        .mh .rise{animation:mh-rise 3s ease-in-out infinite}
        @keyframes mh-flow{0%{background-position:120% 0}100%{background-position:-120% 0}}
        @keyframes mh-scan{0%,100%{transform:translateX(-6px)}50%{transform:translateX(58px)}}
        @keyframes mh-opp{0%,100%{opacity:.55;transform:scale(.9)}50%{opacity:1;transform:scale(1.12)}}
        @keyframes mh-rise{0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}}
        @media(prefers-reduced-motion:reduce){.mh .connector,.mh .scan,.mh .oppPulse,.mh .rise{animation:none}}
      `}</style>

      <div className="steps">
        <div className="connector" />

        {/* 01 · evaluar */}
        <div className="step">
          <div className="scene overflow-hidden rounded-2xl border border-ink-200 bg-white/70 shadow-card dark:border-white/10 dark:bg-ink-950/70">
            <span className="absolute left-3 top-3 z-10 rounded-lg bg-ink-900 px-2 py-0.5 text-[11px] font-extrabold text-white dark:bg-white dark:text-ink-950">
              01
            </span>
            <svg viewBox="0 0 260 158" xmlns="http://www.w3.org/2000/svg" aria-label="Procesos actuales siendo evaluados">
              <g>
                <rect className="s-panel" x="30" y="34" width="150" height="24" rx="6" />
                <rect className="s-dim" x="40" y="43" width="14" height="6" rx="3" />
                <rect className="s-dim2" x="62" y="43" width="86" height="6" rx="3" />
                <rect className="s-panel" x="30" y="67" width="150" height="24" rx="6" />
                <rect className="s-dim" x="40" y="76" width="14" height="6" rx="3" />
                <rect className="s-dim2" x="62" y="76" width="70" height="6" rx="3" />
                <rect className="s-panel" x="30" y="100" width="150" height="24" rx="6" />
                <rect className="s-dim" x="40" y="109" width="14" height="6" rx="3" />
                <rect className="s-dim2" x="62" y="109" width="94" height="6" rx="3" />
              </g>
              <g className="scan">
                <circle className="s-accentS" cx="150" cy="79" r="30" strokeWidth="4" />
                <circle cx="150" cy="79" r="30" fill="var(--mh-accent-soft)" />
                <line className="s-accentS" x1="171" y1="100" x2="196" y2="125" strokeWidth="6" strokeLinecap="round" />
              </g>
            </svg>
          </div>
          <h3 className="mt-5 flex items-center justify-center text-center font-display text-lg font-semibold tracking-tight text-ink-900 dark:text-white md:min-h-[3.25rem]">
            Evaluamos tu operación
          </h3>
          <p className="mx-auto mt-2 max-w-[32ch] text-center text-sm leading-relaxed text-ink-600 dark:text-ink-400">
            Mapeamos cómo trabajas hoy: procesos, herramientas y cuellos de botella reales.
          </p>
          <span className="mx-auto mt-3 block w-fit rounded-full border border-ink-200 bg-white px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-ink-500 dark:border-white/10 dark:bg-white/5 dark:text-ink-400">
            Diagnóstico
          </span>
        </div>

        {/* 02 · identificar */}
        <div className="step">
          <div className="scene overflow-hidden rounded-2xl border border-ink-200 bg-white/70 shadow-card dark:border-white/10 dark:bg-ink-950/70">
            <span className="absolute left-3 top-3 z-10 rounded-lg bg-ink-900 px-2 py-0.5 text-[11px] font-extrabold text-white dark:bg-white dark:text-ink-950">
              02
            </span>
            <svg viewBox="0 0 260 158" xmlns="http://www.w3.org/2000/svg" aria-label="Oportunidad de mayor impacto identificada">
              <g>
                <rect className="s-dim" x="44" y="96" width="26" height="34" rx="4" />
                <rect className="s-dim" x="82" y="82" width="26" height="48" rx="4" />
                <rect className="s-accent" x="120" y="40" width="26" height="90" rx="4" />
                <rect className="s-dim" x="158" y="74" width="26" height="56" rx="4" />
                <rect className="s-dim" x="196" y="102" width="26" height="28" rx="4" />
                <line className="s-wire" x1="34" y1="130" x2="228" y2="130" strokeWidth="2" />
              </g>
              <g className="oppPulse">
                <circle className="s-accentS" cx="133" cy="30" r="12" strokeWidth="3" />
                <circle className="s-accent" cx="133" cy="30" r="4" />
              </g>
            </svg>
          </div>
          <h3 className="mt-5 flex items-center justify-center text-center font-display text-lg font-semibold tracking-tight text-ink-900 dark:text-white md:min-h-[3.25rem]">
            Identificamos dónde rinde la tecnología
          </h3>
          <p className="mx-auto mt-2 max-w-[32ch] text-center text-sm leading-relaxed text-ink-600 dark:text-ink-400">
            Priorizamos los puntos donde automatizar o construir genera más impacto.
          </p>
          <span className="mx-auto mt-3 block w-fit rounded-full border border-ink-200 bg-white px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-ink-500 dark:border-white/10 dark:bg-white/5 dark:text-ink-400">
            Oportunidades
          </span>
        </div>

        {/* 03 · implementar */}
        <div className="step">
          <div className="scene overflow-hidden rounded-2xl border border-ink-200 bg-white/70 shadow-card dark:border-white/10 dark:bg-ink-950/70">
            <span className="absolute left-3 top-3 z-10 rounded-lg bg-ink-900 px-2 py-0.5 text-[11px] font-extrabold text-white dark:bg-white dark:text-ink-950">
              03
            </span>
            <svg viewBox="0 0 260 158" xmlns="http://www.w3.org/2000/svg" aria-label="Sistema construido e implementado">
              <g className="rise">
                <rect className="s-panel" x="52" y="30" width="156" height="98" rx="10" stroke="var(--mh-border)" />
                <line className="s-wire" x1="52" y1="52" x2="208" y2="52" strokeWidth="2" />
                <circle className="s-dim" cx="64" cy="41" r="3" />
                <circle className="s-dim" cx="76" cy="41" r="3" />
                <circle className="s-dim" cx="88" cy="41" r="3" />
                <rect className="s-accent" x="66" y="66" width="46" height="10" rx="3" />
                <rect className="s-dim2" x="66" y="82" width="80" height="7" rx="3" />
                <rect className="s-dim2" x="66" y="95" width="64" height="7" rx="3" />
                <rect className="s-dim" x="150" y="66" width="42" height="36" rx="5" />
              </g>
              <g>
                <circle className="s-good" cx="196" cy="118" r="16" />
                <path d="M188 118 l6 6 l10 -12" fill="none" stroke="#fff" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" />
              </g>
            </svg>
          </div>
          <h3 className="mt-5 flex items-center justify-center text-center font-display text-lg font-semibold tracking-tight text-ink-900 dark:text-white md:min-h-[3.25rem]">
            Construimos e implementamos
          </h3>
          <p className="mx-auto mt-2 max-w-[32ch] text-center text-sm leading-relaxed text-ink-600 dark:text-ink-400">
            Desarrollamos la solución a medida y la dejamos operando dentro de tu equipo.
          </p>
          <span className="mx-auto mt-3 block w-fit rounded-full border border-ink-200 bg-white px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-ink-500 dark:border-white/10 dark:bg-white/5 dark:text-ink-400">
            Implementación
          </span>
        </div>
      </div>
    </motion.div>
  )
}

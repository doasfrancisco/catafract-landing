import { motion } from 'framer-motion'

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'left',
  maxWidth = 'max-w-3xl',
}) {
  const alignClass = align === 'center' ? 'text-center mx-auto items-center' : 'text-left items-start'
  return (
    <div className={`flex flex-col gap-5 ${alignClass} ${maxWidth}`}>
      {eyebrow && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-ink-200 bg-white/70 px-3 py-1 text-xs font-medium text-ink-600 backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-ink-300"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent-500 shadow-[0_0_10px_rgba(59,130,246,0.5)] dark:bg-accent-400 dark:shadow-[0_0_10px_rgba(96,165,250,0.8)]" />
          {eyebrow}
        </motion.div>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, delay: 0.05 }}
        className="text-balance font-display text-4xl font-semibold leading-[1.05] tracking-tighter text-ink-900 dark:text-white sm:text-5xl lg:text-[3.4rem]"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-balance text-lg leading-relaxed text-ink-600 dark:text-ink-300 sm:text-xl"
        >
          {description}
        </motion.p>
      )}
    </div>
  )
}

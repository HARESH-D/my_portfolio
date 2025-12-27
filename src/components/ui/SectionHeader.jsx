import { motion } from 'framer-motion';

/**
 * Section Header Component
 * Consistent section titles with optional subtitle and decorations
 */

export default function SectionHeader({
  title,
  subtitle,
  description,
  align = 'center',
  className = '',
}) {
  const alignClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto',
  };

  return (
    <motion.div
      className={`max-w-3xl mb-12 md:mb-16 ${alignClasses[align]} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5 }}
    >
      {/* Subtitle/Label */}
      {subtitle && (
        <motion.span
          className="inline-block mb-3 px-4 py-1.5 rounded-full text-sm font-semibold
                     bg-primary-100 dark:bg-primary-900/30 
                     text-primary-700 dark:text-primary-300"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          {subtitle}
        </motion.span>
      )}

      {/* Main Title */}
      <h2 className="heading-lg text-dark-900 dark:text-white mb-4">
        {title}
      </h2>

      {/* Decorative line */}
      <motion.div
        className={`h-1 w-20 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 mb-4
                    ${align === 'center' ? 'mx-auto' : align === 'right' ? 'ml-auto' : ''}`}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      />

      {/* Description */}
      {description && (
        <p className="text-lg text-dark-600 dark:text-dark-400 max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </motion.div>
  );
}

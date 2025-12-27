import { motion } from 'framer-motion';

/**
 * Reusable Card Component
 * Supports glass morphism and hover animations
 */

export default function Card({
  children,
  className = '',
  hover = true,
  glass = false,
  gradient = null,
  onClick,
  ...props
}) {
  const baseClasses = `
    rounded-2xl p-6
    ${glass 
      ? 'bg-white/70 dark:bg-dark-800/70 backdrop-blur-lg border border-white/20 dark:border-dark-700/50' 
      : 'bg-white dark:bg-dark-800 border border-dark-100 dark:border-dark-700'
    }
    shadow-lg shadow-dark-200/20 dark:shadow-dark-900/50
  `;

  const hoverClasses = hover
    ? 'hover:shadow-xl hover:shadow-dark-200/30 dark:hover:shadow-dark-900/60 hover:border-primary-200 dark:hover:border-primary-800'
    : '';

  const combinedClasses = `${baseClasses} ${hoverClasses} ${className}`.trim();

  return (
    <motion.div
      className={`relative overflow-hidden ${combinedClasses}`}
      whileHover={hover ? { y: -4 } : {}}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      onClick={onClick}
      {...props}
    >
      {/* Optional gradient background */}
      {gradient && (
        <div 
          className={`absolute inset-0 opacity-5 bg-gradient-to-br ${gradient}`}
          aria-hidden="true"
        />
      )}
      
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}

/**
 * Card Header component
 */
export function CardHeader({ children, className = '' }) {
  return (
    <div className={`mb-4 ${className}`}>
      {children}
    </div>
  );
}

/**
 * Card Title component
 */
export function CardTitle({ children, className = '' }) {
  return (
    <h3 className={`text-xl font-bold font-display text-dark-900 dark:text-white ${className}`}>
      {children}
    </h3>
  );
}

/**
 * Card Description component
 */
export function CardDescription({ children, className = '' }) {
  return (
    <p className={`text-dark-600 dark:text-dark-400 mt-1 ${className}`}>
      {children}
    </p>
  );
}

/**
 * Card Content component
 */
export function CardContent({ children, className = '' }) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}

/**
 * Card Footer component
 */
export function CardFooter({ children, className = '' }) {
  return (
    <div className={`mt-4 pt-4 border-t border-dark-100 dark:border-dark-700 ${className}`}>
      {children}
    </div>
  );
}

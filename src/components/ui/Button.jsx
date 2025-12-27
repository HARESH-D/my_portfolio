import { motion } from 'framer-motion';

/**
 * Reusable Button Component
 * Supports primary, secondary, and ghost variants
 */

const variants = {
  primary: `
    inline-flex items-center justify-center gap-2
    px-6 py-3 rounded-xl font-semibold
    bg-gradient-to-r from-primary-500 to-primary-600
    text-white shadow-lg shadow-primary-500/30
    hover:shadow-xl hover:shadow-primary-500/40
    hover:from-primary-600 hover:to-primary-700
    disabled:opacity-50 disabled:cursor-not-allowed
    transition-all duration-300
  `,
  secondary: `
    inline-flex items-center justify-center gap-2
    px-6 py-3 rounded-xl font-semibold
    bg-dark-100 dark:bg-dark-800
    text-dark-700 dark:text-dark-200
    border border-dark-200 dark:border-dark-700
    hover:bg-dark-200 dark:hover:bg-dark-700
    hover:border-dark-300 dark:hover:border-dark-600
    disabled:opacity-50 disabled:cursor-not-allowed
    transition-all duration-300
  `,
  ghost: `
    inline-flex items-center justify-center gap-2
    px-4 py-2 rounded-lg font-medium
    text-dark-600 dark:text-dark-300
    hover:bg-dark-100 dark:hover:bg-dark-800
    disabled:opacity-50 disabled:cursor-not-allowed
    transition-all duration-200
  `,
  outline: `
    inline-flex items-center justify-center gap-2
    px-6 py-3 rounded-xl font-semibold
    border-2 border-primary-500
    text-primary-600 dark:text-primary-400
    hover:bg-primary-50 dark:hover:bg-primary-900/20
    disabled:opacity-50 disabled:cursor-not-allowed
    transition-all duration-300
  `,
};

export default function Button({
  children,
  variant = 'primary',
  className = '',
  href,
  external = false,
  icon: Icon,
  iconPosition = 'left',
  disabled = false,
  onClick,
  ...props
}) {
  const baseClasses = variants[variant] || variants.primary;
  const combinedClasses = `${baseClasses} ${className}`.trim();

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon size={20} />}
      {children}
      {Icon && iconPosition === 'right' && <Icon size={20} />}
    </>
  );

  // Motion wrapper for hover animation
  const MotionComponent = href ? motion.a : motion.button;

  const motionProps = {
    whileHover: disabled ? {} : { scale: 1.02, y: -2 },
    whileTap: disabled ? {} : { scale: 0.98 },
    transition: { type: 'spring', stiffness: 400, damping: 17 },
  };

  if (href) {
    return (
      <MotionComponent
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        className={combinedClasses}
        {...motionProps}
        {...props}
      >
        {content}
      </MotionComponent>
    );
  }

  return (
    <MotionComponent
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={combinedClasses}
      {...motionProps}
      {...props}
    >
      {content}
    </MotionComponent>
  );
}

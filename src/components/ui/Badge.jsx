import { motion } from 'framer-motion';

/**
 * Badge Component
 * For displaying skills, tags, and labels
 */

const variants = {
  default: 'bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300',
  secondary: 'bg-dark-100 dark:bg-dark-800 text-dark-700 dark:text-dark-300',
  success: 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300',
  warning: 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300',
  error: 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300',
  outline: 'border border-primary-500 text-primary-600 dark:text-primary-400',
  gradient: 'bg-gradient-to-r from-primary-500 to-accent-500 text-white',
};

const sizes = {
  sm: 'px-2 py-0.5 text-xs',
  md: 'px-3 py-1 text-sm',
  lg: 'px-4 py-1.5 text-base',
};

export default function Badge({
  children,
  variant = 'default',
  size = 'md',
  className = '',
  icon: Icon,
  animated = false,
  ...props
}) {
  const variantClasses = variants[variant] || variants.default;
  const sizeClasses = sizes[size] || sizes.md;
  
  const baseClasses = `
    inline-flex items-center gap-1.5 rounded-full font-medium
    ${variantClasses}
    ${sizeClasses}
  `;

  const combinedClasses = `${baseClasses} ${className}`.trim();

  const Component = animated ? motion.span : 'span';
  const animationProps = animated ? {
    initial: { scale: 0.8, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    whileHover: { scale: 1.05 },
    transition: { type: 'spring', stiffness: 400, damping: 17 },
  } : {};

  return (
    <Component className={combinedClasses} {...animationProps} {...props}>
      {Icon && <Icon size={size === 'sm' ? 12 : size === 'lg' ? 18 : 14} />}
      {children}
    </Component>
  );
}

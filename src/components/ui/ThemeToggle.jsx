import { useTheme } from '../../context/ThemeContext';
import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';

/**
 * Theme Toggle Component
 * Animated dark/light mode toggle button
 */

export default function ThemeToggle({ className = '' }) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <motion.button
      onClick={toggleTheme}
      className={`
        relative p-2 rounded-xl
        bg-dark-100 dark:bg-dark-800
        hover:bg-dark-200 dark:hover:bg-dark-700
        border border-dark-200 dark:border-dark-700
        transition-colors duration-200
        focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2
        dark:focus:ring-offset-dark-900
        ${className}
      `}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 180 : 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        {isDark ? (
          <Moon className="w-5 h-5 text-primary-400" />
        ) : (
          <Sun className="w-5 h-5 text-amber-500" />
        )}
      </motion.div>

      {/* Glow effect */}
      <motion.div
        className={`
          absolute inset-0 rounded-xl opacity-0
          ${isDark ? 'bg-primary-500' : 'bg-amber-400'}
        `}
        animate={{ opacity: [0, 0.2, 0] }}
        transition={{ duration: 0.3 }}
        key={theme}
      />
    </motion.button>
  );
}

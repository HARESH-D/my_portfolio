import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { personalInfo } from '../../data';
import { SectionHeader } from '../ui';

/**
 * About Section
 */

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="about" className="section-padding bg-white dark:bg-dark-950">
      <div className="section-container">
        <SectionHeader
          subtitle="About Me"
          title="Turning Ideas into Reality"
          description="A passionate developer who loves building products that make a difference"
        />

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left side - Image/Visual */}
          <motion.div variants={itemVariants} className="relative">
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Background decoration */}
              <div className="hidden sm:block absolute inset-4 bg-gradient-to-br from-primary-500 to-accent-500 
                            rounded-3xl rotate-6 opacity-20" />
              <div className="hidden sm:block absolute inset-4 bg-gradient-to-br from-primary-500 to-accent-500 
                            rounded-3xl -rotate-3 opacity-10" />
              
              {/* Main card */}
              <div className="relative bg-white dark:bg-dark-800 rounded-3xl p-4 sm:p-8 
                            shadow-2xl shadow-dark-200/30 dark:shadow-dark-900/50
                            border border-dark-100 dark:border-dark-700">
                {/* Profile placeholder */}
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary-100 to-accent-100 
                              dark:from-primary-900/30 dark:to-accent-900/30
                              flex items-center justify-center mb-4 sm:mb-6">
                  <span className="text-6xl sm:text-8xl">👨‍💻</span>
                </div>

                {/* Stats grid */}
                <div className="grid grid-cols-2 gap-2 sm:gap-4">
                  {personalInfo.about.highlights.map((highlight, index) => (
                    <motion.div
                      key={highlight.label}
                      className="text-center p-2 sm:p-3 rounded-xl bg-dark-50 dark:bg-dark-900"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={inView ? { scale: 1, opacity: 1 } : {}}
                      transition={{ delay: 0.3 + index * 0.1 }}
                    >
                      <div className="text-xl sm:text-2xl font-bold gradient-text">
                        {highlight.value}
                      </div>
                      <div className="text-xs sm:text-sm text-dark-500 dark:text-dark-400">
                        {highlight.label}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="space-y-4">
              {personalInfo.about.paragraphs.map((paragraph, index) => (
                <motion.p
                  key={index}
                  className="text-dark-600 dark:text-dark-400 text-base sm:text-lg leading-relaxed"
                  variants={itemVariants}
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>

            {/* Quick facts */}
            <motion.div variants={itemVariants} className="pt-6">
              <h3 className="text-lg font-semibold text-dark-900 dark:text-white mb-4">
                Quick Facts
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { label: 'Based in', value: 'Bengaluru, India 🇮🇳' },
                  { label: 'Currently at', value: 'Blue Yonder' },
                  { label: 'Focus', value: 'Full Stack & AI' },
                  { label: 'Available for', value: 'New opportunities' },
                ].map((fact) => (
                  <div
                    key={fact.label}
                    className="flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-2 p-2 sm:p-3 rounded-xl 
                             bg-dark-50 dark:bg-dark-800/50
                             border border-dark-100 dark:border-dark-700"
                  >
                    <span className="text-dark-500 dark:text-dark-400 text-xs sm:text-sm">
                      {fact.label}:
                    </span>
                    <span className="text-dark-900 dark:text-white font-medium text-xs sm:text-sm">
                      {fact.value}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

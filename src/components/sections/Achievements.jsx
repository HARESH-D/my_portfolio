import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Trophy, Star, Medal, GraduationCap } from 'lucide-react';
import { achievements, education, extraCurriculars } from '../../data';
import { SectionHeader } from '../ui';

/**
 * Achievements Section
 * Awards, education, and extra-curricular activities
 */

// Icon mapping
const iconMap = {
  Award,
  Trophy,
  Star,
  Medal,
};

export default function Achievements() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="achievements" className="section-padding bg-white dark:bg-dark-950">
      <div className="section-container">
        <SectionHeader
          subtitle="Achievements"
          title="Awards & Recognition"
          description="Milestones and accomplishments throughout my journey"
        />

        <motion.div
          ref={ref}
          className="space-y-12"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          {/* Awards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <AchievementCard
                key={achievement.id}
                achievement={achievement}
                index={index}
                inView={inView}
              />
            ))}
          </div>

          {/* Education & Extra-curriculars */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Education */}
            <motion.div
              className="bg-gradient-to-br from-primary-500/10 to-accent-500/10 
                        dark:from-primary-900/30 dark:to-accent-900/30
                        rounded-2xl p-8 border border-primary-200 dark:border-primary-800"
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600
                              text-white shadow-lg shadow-primary-500/30">
                  <GraduationCap size={24} />
                </div>
                <h3 className="text-xl font-bold text-dark-900 dark:text-white">
                  Education
                </h3>
              </div>
              
              <div className="space-y-2">
                <h4 className="text-lg font-semibold text-dark-900 dark:text-white">
                  {education.degree}
                </h4>
                <p className="text-primary-600 dark:text-primary-400 font-medium">
                  {education.major}
                </p>
                <p className="text-dark-600 dark:text-dark-400">
                  {education.institution}
                </p>
                <p className="text-dark-500 dark:text-dark-500 text-sm">
                  {education.university} • {education.period}
                </p>
              </div>
            </motion.div>

            {/* Extra-curriculars */}
            <motion.div
              className="bg-dark-50 dark:bg-dark-800/50 rounded-2xl p-8 
                        border border-dark-200 dark:border-dark-700"
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl bg-gradient-to-br from-accent-500 to-accent-600
                              text-white shadow-lg shadow-accent-500/30">
                  <Star size={24} />
                </div>
                <h3 className="text-xl font-bold text-dark-900 dark:text-white">
                  Extra-Curriculars
                </h3>
              </div>
              
              <div className="space-y-4">
                {extraCurriculars.map((item, index) => (
                  <motion.div
                    key={item.title}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, y: 10 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <div className="w-2 h-2 rounded-full bg-accent-500 mt-2 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-dark-900 dark:text-white">
                        {item.title}
                      </h4>
                      <p className="text-sm text-dark-500 dark:text-dark-400">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function AchievementCard({ achievement, index, inView }) {
  const Icon = iconMap[achievement.icon] || Award;

  return (
    <motion.div
      className="bg-white dark:bg-dark-800 rounded-2xl p-6
                border border-dark-100 dark:border-dark-700
                shadow-lg shadow-dark-200/20 dark:shadow-dark-900/50
                hover:shadow-xl hover:border-primary-200 dark:hover:border-primary-800
                transition-all duration-300"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
    >
      {/* Icon with gradient */}
      <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${achievement.color}
                      text-white shadow-lg mb-4`}>
        <Icon size={24} />
      </div>

      {/* Content */}
      <h3 className="text-lg font-bold text-dark-900 dark:text-white mb-1">
        {achievement.title}
      </h3>
      <p className="text-primary-600 dark:text-primary-400 font-medium text-sm mb-2">
        {achievement.organization} • {achievement.year}
      </p>
      <p className="text-dark-600 dark:text-dark-400 text-sm">
        {achievement.description}
      </p>
    </motion.div>
  );
}

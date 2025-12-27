import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Layout, Server, Brain, MessageSquare, Settings } from 'lucide-react';
import { skillCategories } from '../../data';
import { SectionHeader } from '../ui';

/**
 * Skills Section
 * Categorized skill display with progress bars
 */

// Icon mapping
const iconMap = {
  Code2,
  Layout,
  Server,
  Brain,
  MessageSquare,
  Settings,
};

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="section-padding bg-dark-50 dark:bg-dark-900">
      <div className="section-container">
        <SectionHeader
          subtitle="Skills"
          title="Technical Expertise"
          description="Technologies and tools I use to bring ideas to life"
        />

        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          {skillCategories.map((category, index) => (
            <SkillCard
              key={category.id}
              category={category}
              index={index}
              inView={inView}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function SkillCard({ category, index, inView }) {
  const Icon = iconMap[category.icon] || Code2;

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
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600
                      text-white shadow-lg shadow-primary-500/30">
          <Icon size={24} />
        </div>
        <h3 className="text-xl font-bold text-dark-900 dark:text-white">
          {category.name}
        </h3>
      </div>

      {/* Skills list */}
      <div className="space-y-4">
        {category.skills.map((skill, skillIndex) => (
          <SkillBar
            key={skill.name}
            skill={skill}
            inView={inView}
            delay={index * 0.1 + skillIndex * 0.05}
          />
        ))}
      </div>
    </motion.div>
  );
}

function SkillBar({ skill, inView, delay }) {
  return (
    <div>
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-sm font-medium text-dark-700 dark:text-dark-300">
          {skill.name}
        </span>
        <span className="text-sm text-dark-500 dark:text-dark-400">
          {skill.level}%
        </span>
      </div>
      <div className="h-2 bg-dark-100 dark:bg-dark-700 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-primary-500 to-primary-400 rounded-full"
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : {}}
          transition={{ duration: 0.8, delay, ease: 'easeOut' }}
        />
      </div>
    </div>
  );
}

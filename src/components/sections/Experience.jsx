import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, MapPin, Calendar, ChevronRight } from 'lucide-react';
import { experiences } from '../../data';
import { SectionHeader, Badge } from '../ui';

/**
 * Experience Section
 * Timeline view of work experience
 */

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="experience" className="section-padding bg-dark-50 dark:bg-dark-900">
      <div className="section-container">
        <SectionHeader
          subtitle="Experience"
          title="Professional Journey"
          description="Building expertise across full-stack development and AI engineering"
        />

        <motion.div
          ref={ref}
          className="relative max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px 
                        bg-gradient-to-b from-primary-500 via-primary-500 to-transparent
                        hidden md:block" />

          {/* Experience cards */}
          <div className="space-y-8 md:space-y-12">
            {experiences.map((exp, index) => (
              <ExperienceCard
                key={exp.id}
                experience={exp}
                index={index}
                inView={inView}
                isLeft={index % 2 === 0}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ExperienceCard({ experience, index, inView, isLeft }) {
  const cardVariants = {
    hidden: {
      opacity: 0,
      x: isLeft ? -50 : 50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
      },
    },
  };

  return (
    <motion.div
      className={`relative flex flex-col md:flex-row gap-4 md:gap-8 
                ${isLeft ? 'md:flex-row-reverse' : ''}`}
      variants={cardVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
    >
      {/* Timeline dot */}
      <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 -translate-x-1/2 
                    rounded-full bg-primary-500 border-4 border-white dark:border-dark-900
                    shadow-lg shadow-primary-500/30 hidden md:block z-10" />

      {/* Date (mobile) */}
      <div className="md:hidden flex items-center gap-2 text-sm text-dark-500 dark:text-dark-400 mb-2">
        <Calendar size={14} />
        {experience.period}
        {experience.current && (
          <Badge variant="success" size="sm">Current</Badge>
        )}
      </div>

      {/* Card */}
      <motion.div
        className={`flex-1 md:w-[calc(50%-2rem)] ${isLeft ? 'md:pr-0' : 'md:pl-0'}`}
        whileHover={{ y: -4 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <div className="bg-white dark:bg-dark-800 rounded-2xl p-6 
                      border border-dark-100 dark:border-dark-700
                      shadow-lg shadow-dark-200/20 dark:shadow-dark-900/50
                      hover:shadow-xl hover:border-primary-200 dark:hover:border-primary-800
                      transition-all duration-300">
          {/* Header */}
          <div className="flex items-start justify-between gap-4 mb-4">
            <div>
              <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-1">
                {experience.title}
              </h3>
              <div className="flex flex-wrap items-center gap-2 text-primary-600 dark:text-primary-400">
                <Briefcase size={16} />
                <span className="font-medium">{experience.company}</span>
              </div>
            </div>
            
            {/* Gradient accent */}
            <div className={`w-2 h-12 rounded-full bg-gradient-to-b ${experience.color}`} />
          </div>

          {/* Meta info */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-dark-500 dark:text-dark-400 mb-4">
            <div className="flex items-center gap-1">
              <MapPin size={14} />
              {experience.location} • {experience.type}
            </div>
            <div className="hidden md:flex items-center gap-1">
              <Calendar size={14} />
              {experience.period}
            </div>
            {experience.current && (
              <Badge variant="success" size="sm">Current</Badge>
            )}
          </div>

          {/* Description */}
          <p className="text-dark-600 dark:text-dark-400 mb-4">
            {experience.description}
          </p>

          {/* Achievements */}
          <ul className="space-y-2 mb-4">
            {experience.achievements.slice(0, 3).map((achievement, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-dark-600 dark:text-dark-400">
                <ChevronRight size={16} className="text-primary-500 flex-shrink-0 mt-0.5" />
                <span>{achievement}</span>
              </li>
            ))}
          </ul>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {experience.technologies.slice(0, 6).map((tech) => (
              <Badge key={tech} variant="secondary" size="sm">
                {tech}
              </Badge>
            ))}
            {experience.technologies.length > 6 && (
              <Badge variant="secondary" size="sm">
                +{experience.technologies.length - 6}
              </Badge>
            )}
          </div>
        </div>
      </motion.div>

      {/* Date (desktop) */}
      <div className={`hidden md:flex flex-1 md:w-[calc(50%-2rem)] items-start 
                    ${isLeft ? 'justify-start' : 'justify-end'}`}>
        <div className={`flex items-center gap-2 text-dark-500 dark:text-dark-400 
                      ${isLeft ? '' : 'flex-row-reverse'}`}>
          <Calendar size={16} />
          <span className="font-medium">{experience.period}</span>
        </div>
      </div>
    </motion.div>
  );
}

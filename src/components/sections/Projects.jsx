import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Award, Sparkles } from 'lucide-react';
import { projects, projectCategories } from '../../data';
import { SectionHeader, Badge, Button } from '../ui';

/**
 * Projects Section
 * Showcases featured and other projects with filtering
 */

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  const featuredProjects = filteredProjects.filter(p => p.featured);
  const otherProjects = filteredProjects.filter(p => !p.featured);

  return (
    <section id="projects" className="section-padding bg-white dark:bg-dark-950">
      <div className="section-container">
        <SectionHeader
          subtitle="Projects"
          title="Featured Work"
          description="A selection of projects that showcase my skills in full-stack development and AI engineering"
        />

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {['All', ...new Set(projects.map(p => p.category))].map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all
                ${activeCategory === category
                  ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/30'
                  : 'bg-dark-100 dark:bg-dark-800 text-dark-600 dark:text-dark-400 hover:bg-dark-200 dark:hover:bg-dark-700'
                }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        <motion.div ref={ref}>
          {/* Featured Projects */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              {featuredProjects.length > 0 && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {featuredProjects.map((project, index) => (
                    <FeaturedProjectCard
                      key={project.id}
                      project={project}
                      index={index}
                      inView={inView}
                    />
                  ))}
                </div>
              )}

              {/* Other Projects */}
              {otherProjects.length > 0 && (
                <>
                  <h3 className="text-xl font-bold text-dark-900 dark:text-white mt-12 mb-6">
                    Other Projects
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {otherProjects.map((project, index) => (
                      <ProjectCard
                        key={project.id}
                        project={project}
                        index={index}
                        inView={inView}
                      />
                    ))}
                  </div>
                </>
              )}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

function FeaturedProjectCard({ project, index, inView }) {
  return (
    <motion.div
      className="group relative bg-white dark:bg-dark-800 rounded-2xl overflow-hidden
                border border-dark-100 dark:border-dark-700
                shadow-lg shadow-dark-200/20 dark:shadow-dark-900/50
                hover:shadow-xl hover:border-primary-200 dark:hover:border-primary-800
                transition-all duration-300"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
    >
      {/* Image placeholder with gradient */}
      <div className={`relative h-48 bg-gradient-to-br ${project.color} overflow-hidden`}>
        <div className="absolute inset-0 flex items-center justify-center">
          <Sparkles className="w-16 h-16 text-white/30" />
        </div>
        
        {/* Award badge */}
        {project.award && (
          <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 
                        rounded-full bg-white/90 dark:bg-dark-900/90 backdrop-blur-sm
                        text-sm font-medium text-dark-900 dark:text-white">
            <Award size={14} className="text-yellow-500" />
            {project.award}
          </div>
        )}

        {/* Links overlay */}
        <div className="absolute inset-0 bg-dark-900/60 opacity-0 group-hover:opacity-100 
                      transition-opacity duration-300 flex items-center justify-center gap-4">
          {project.github && (
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white text-dark-900 hover:bg-primary-500 hover:text-white
                       transition-colors duration-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={20} />
            </motion.a>
          )}
          {project.demo && (
            <motion.a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white text-dark-900 hover:bg-primary-500 hover:text-white
                       transition-colors duration-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink size={20} />
            </motion.a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between gap-4 mb-3">
          <div>
            <Badge variant="secondary" size="sm" className="mb-2">
              {project.category}
            </Badge>
            <h3 className="text-xl font-bold text-dark-900 dark:text-white">
              {project.title}
            </h3>
            <p className="text-primary-600 dark:text-primary-400 font-medium text-sm">
              {project.subtitle}
            </p>
          </div>
        </div>

        <p className="text-dark-600 dark:text-dark-400 mb-4 line-clamp-3">
          {project.longDescription || project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 5).map((tech) => (
            <Badge key={tech} size="sm">
              {tech}
            </Badge>
          ))}
          {project.technologies.length > 5 && (
            <Badge size="sm" variant="secondary">
              +{project.technologies.length - 5}
            </Badge>
          )}
        </div>
      </div>
    </motion.div>
  );
}

function ProjectCard({ project, index, inView }) {
  return (
    <motion.div
      className="group bg-white dark:bg-dark-800 rounded-xl p-6
                border border-dark-100 dark:border-dark-700
                shadow-lg shadow-dark-200/20 dark:shadow-dark-900/50
                hover:shadow-xl hover:border-primary-200 dark:hover:border-primary-800
                transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
      whileHover={{ y: -4 }}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.color} 
                      flex items-center justify-center`}>
          <Sparkles className="w-6 h-6 text-white" />
        </div>
        <div className="flex gap-2">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-dark-400 hover:text-primary-500 
                       hover:bg-dark-100 dark:hover:bg-dark-700 transition-colors"
            >
              <Github size={18} />
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-dark-400 hover:text-primary-500 
                       hover:bg-dark-100 dark:hover:bg-dark-700 transition-colors"
            >
              <ExternalLink size={18} />
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <h3 className="text-lg font-bold text-dark-900 dark:text-white mb-1">
        {project.title}
      </h3>
      <p className="text-primary-600 dark:text-primary-400 text-sm font-medium mb-3">
        {project.subtitle}
      </p>
      <p className="text-dark-600 dark:text-dark-400 text-sm mb-4 line-clamp-3">
        {project.description}
      </p>

      {/* Technologies */}
      <div className="flex flex-wrap gap-1.5">
        {project.technologies.slice(0, 4).map((tech) => (
          <Badge key={tech} size="sm" variant="secondary">
            {tech}
          </Badge>
        ))}
      </div>
    </motion.div>
  );
}

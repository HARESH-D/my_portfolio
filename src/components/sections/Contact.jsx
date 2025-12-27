import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Linkedin, Github, MapPin, Send, MessageSquare } from 'lucide-react';
import { personalInfo } from '../../data';
import { SectionHeader, Button } from '../ui';

/**
 * Contact Section
 * Contact information and call-to-action
 */

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      description: 'Drop me an email anytime',
      color: 'from-red-500 to-orange-500',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Connect on LinkedIn',
      href: personalInfo.social.linkedin,
      description: "Let's connect professionally",
      color: 'from-blue-600 to-blue-500',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'View my code',
      href: personalInfo.social.github,
      description: 'Check out my projects',
      color: 'from-gray-700 to-gray-600',
    },
  ];

  return (
    <section id="contact" className="section-padding bg-dark-50 dark:bg-dark-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="section-container relative">
        <SectionHeader
          subtitle="Contact"
          title="Let's Work Together"
          description="I'm always open to discussing new opportunities, interesting projects, or ways to collaborate"
        />

        <motion.div
          ref={ref}
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          {/* Main CTA Card */}
          <motion.div
            className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-3xl p-8 md:p-12
                      shadow-2xl shadow-primary-500/30 text-white text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <motion.div
              className="inline-flex p-4 rounded-2xl bg-white/20 mb-6"
              initial={{ scale: 0 }}
              animate={inView ? { scale: 1 } : {}}
              transition={{ type: 'spring', stiffness: 200, delay: 0.3 }}
            >
              <MessageSquare size={40} />
            </motion.div>
            
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Have a project in mind?
            </h3>
            <p className="text-lg text-white/90 mb-8 max-w-lg mx-auto">
              Whether you need a full-stack web application, an AI-powered solution, or just want to chat about technology - I'd love to hear from you!
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                href={`mailto:${personalInfo.email}`}
                className="bg-white text-primary-600 hover:bg-white/90 
                         shadow-lg hover:shadow-xl"
                icon={Send}
              >
                Send Message
              </Button>
              <Button
                href={personalInfo.social.linkedin}
                external
                variant="ghost"
                className="text-white hover:bg-white/10"
                icon={Linkedin}
              >
                Connect on LinkedIn
              </Button>
            </div>
          </motion.div>

          {/* Contact Methods */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactMethods.map((method, index) => (
              <motion.a
                key={method.label}
                href={method.href}
                target={method.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="group bg-white dark:bg-dark-800 rounded-2xl p-6
                          border border-dark-100 dark:border-dark-700
                          shadow-lg shadow-dark-200/20 dark:shadow-dark-900/50
                          hover:shadow-xl hover:border-primary-200 dark:hover:border-primary-800
                          transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${method.color}
                              text-white shadow-lg mb-4 
                              group-hover:scale-110 transition-transform duration-300`}>
                  <method.icon size={24} />
                </div>
                <h4 className="text-lg font-bold text-dark-900 dark:text-white mb-1">
                  {method.label}
                </h4>
                <p className="text-primary-600 dark:text-primary-400 font-medium text-sm mb-2">
                  {method.value}
                </p>
                <p className="text-dark-500 dark:text-dark-400 text-sm">
                  {method.description}
                </p>
              </motion.a>
            ))}
          </div>

          {/* Location info */}
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 text-dark-500 dark:text-dark-400">
              <MapPin size={18} />
              <span>Based in {personalInfo.location}</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';
import { personalInfo, navigation } from '../../data';

/**
 * Footer Component
 * Site footer with social links and back to top button
 */

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { name: 'GitHub', icon: Github, href: personalInfo.social.github },
    { name: 'LinkedIn', icon: Linkedin, href: personalInfo.social.linkedin },
    { name: 'Email', icon: Mail, href: personalInfo.social.email },
  ];

  return (
    <footer className="relative bg-dark-50 dark:bg-dark-900 border-t border-dark-200 dark:border-dark-800">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-30 dark:opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative section-container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <motion.a
              href="#home"
              className="inline-flex items-center gap-2 mb-4"
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 
                            flex items-center justify-center shadow-lg shadow-primary-500/30">
                <span className="text-white font-bold text-xl font-display">H</span>
              </div>
              <span className="font-display font-bold text-xl text-dark-900 dark:text-white">
                Haresh<span className="text-primary-500">.</span>
              </span>
            </motion.a>
            <p className="text-dark-600 dark:text-dark-400 text-sm max-w-xs">
              Full Stack Developer & AI Engineer building intelligent applications and scalable web solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h4 className="font-semibold text-dark-900 dark:text-white mb-4">Quick Links</h4>
            <nav className="grid grid-cols-2 gap-2">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-dark-600 dark:text-dark-400 hover:text-primary-600 dark:hover:text-primary-400 
                           text-sm transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Connect Section */}
          <div className="md:col-span-1">
            <h4 className="font-semibold text-dark-900 dark:text-white mb-4">Connect</h4>
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target={link.href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-white dark:bg-dark-800 
                           border border-dark-200 dark:border-dark-700
                           text-dark-600 dark:text-dark-400
                           hover:text-primary-600 dark:hover:text-primary-400
                           hover:border-primary-300 dark:hover:border-primary-700
                           shadow-sm hover:shadow-md
                           transition-all duration-200"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={link.name}
                >
                  <link.icon size={20} />
                </motion.a>
              ))}
            </div>
            <p className="text-dark-500 dark:text-dark-500 text-sm mt-4">
              {personalInfo.email}
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-dark-200 dark:bg-dark-800 my-8" />

        {/* Bottom section */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-dark-500 dark:text-dark-500 text-sm text-center sm:text-left">
            © {currentYear} Haresh D. Built with{' '}
            <Heart className="inline w-4 h-4 text-red-500 mx-1" />
            using React & TailwindCSS
          </p>

          {/* Back to top button */}
          <motion.button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-xl
                     bg-white dark:bg-dark-800 
                     border border-dark-200 dark:border-dark-700
                     text-dark-600 dark:text-dark-400
                     hover:text-primary-600 dark:hover:text-primary-400
                     hover:border-primary-300 dark:hover:border-primary-700
                     shadow-sm hover:shadow-md
                     transition-all duration-200"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowUp size={16} />
            <span className="text-sm font-medium">Back to top</span>
          </motion.button>
        </div>
      </div>
    </footer>
  );
}

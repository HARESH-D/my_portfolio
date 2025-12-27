import { motion, AnimatePresence } from 'framer-motion';
import { Navbar, Footer } from './components/layout';
import {
  Hero,
  About,
  Experience,
  Projects,
  Skills,
  Achievements,
  Contact,
} from './components/sections';

/**
 * Main App Component
 * Portfolio website for Haresh D - Full Stack Developer & AI Engineer
 */

function App() {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        className="min-h-screen bg-white dark:bg-dark-950"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Navigation */}
        <Navbar />

        {/* Main Content */}
        <main>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Achievements />
          <Contact />
        </main>

        {/* Footer */}
        <Footer />

        {/* Scroll to top on route change (future expansion) */}
      </motion.div>
    </AnimatePresence>
  );
}

export default App;

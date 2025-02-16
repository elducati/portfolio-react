// src/sections/Lead.jsx
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const LeadSection = () => {
  return (
    <section id="lead" className="relative h-screen flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900 text-white text-center p-8">
      <div className="relative z-10">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold mb-4"
        >
          GEOFFREY OMONDI
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="text-2xl mb-8"
        >
          Software Developer
        </motion.h2>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.8 }}
        >
          <a
            href="/Resume.pdf"
            className="inline-block bg-white text-gray-800 py-2 px-4 rounded-full shadow-lg transition-transform transform hover:scale-105"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Resume
          </a>
        </motion.div>
      </div>
      <Link
        to="about"
        spy={true}
        smooth={true}
        duration={500}
        className="absolute bottom-8 text-white text-2xl"
      >
        <motion.span
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <i className="fa fa-chevron-down" aria-hidden="true"></i>
        </motion.span>
      </Link>
    </section>
  );
};

export default LeadSection;
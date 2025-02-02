// src/sections/Lead.jsx
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';


const LeadSection = () => {
  return (
    <section id="lead" className="section lead-section">
      <div className="lead-content">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          GEOFFREY OMONDI
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
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
            className="btn-rounded-white"
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
        className="lead-down"
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
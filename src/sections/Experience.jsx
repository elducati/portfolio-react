// src/sections/Experience.jsx
import { motion } from 'framer-motion';
import ExperienceTimeline from '../components/ExperienceTimeline';
import experienceData from '../data/experience';

const Experience = () => {
  return (
    <section id="experience" className="section experience-section">
      <h2 className="section-title">Professional Journey</h2>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <ExperienceTimeline experiences={experienceData} />
      </motion.div>      
      
    </section>
  );
};

export default Experience;
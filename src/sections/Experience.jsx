// src/sections/Experience.jsx
import { motion } from 'framer-motion';
import ExperienceTimeline from '../components/ExperienceTimeline';
import experienceData from '../data/experience';

const Experience = () => {
  return (
    <section id="experience" className="py-16 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 backdrop-blur-md border border-white/20">
      <h2 className="text-4xl text-center mb-10 text-gray-200 bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-gray-400">Professional Journey</h2>
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
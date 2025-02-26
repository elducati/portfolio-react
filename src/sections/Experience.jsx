// src/sections/Experience.jsx
import { motion } from 'framer-motion';
import ExperienceTimeline from '../components/ExperienceTimeline';
import experienceData from '../data/experience';

const Experience = () => {
  return (
    <section 
      id="experience" 
      className="py-24 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-950"></div>
      <div className="absolute inset-0 opacity-20 bg-[url('/img/grid-pattern.svg')]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section header with animation */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="inline-block text-5xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
            Professional Journey
          </h2>
          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            A timeline of my career highlights and professional experiences
          </p>
        </motion.div>

        {/* Timeline with staggered animation */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <ExperienceTimeline experiences={experienceData} />
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl opacity-10 -translate-x-1/2 translate-y-1/2"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-purple-500 rounded-full filter blur-3xl opacity-10 translate-x-1/2 -translate-y-1/2"></div>
    </section>
  );
};

export default Experience;
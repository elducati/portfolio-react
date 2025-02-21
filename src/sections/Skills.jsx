// src/sections/Skills.jsx
import { motion } from 'framer-motion';
import skillsData from '../data/skills';

const Skills = () => {
  return (
    <section id="skills" className="py-16 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 backdrop-blur-md border border-white/20 p-8 md:p-16">
      <h2 className="text-4xl text-center mb-10 text-gray-200 bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-gray-400">Skills</h2>
      <motion.div className="flex flex-wrap gap-8 justify-center">
        {skillsData.map((skill, index) => (
          <motion.div
            key={index}
            className="p-4 bg-gray-900 bg-opacity-50 rounded-lg shadow-md text-center text-gray-200  hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            {skill}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
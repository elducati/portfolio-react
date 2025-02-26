// src/sections/Skills.jsx
import { motion } from 'framer-motion';
import skillsData from '../data/skills';

const Skills = () => {
  return (
    <section id="skills" className="py-16 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-950"></div>
      <div className="absolute inset-0 opacity-20 bg-[url('/img/grid-pattern.svg')]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="mb-16 text-center">
          <h2 className="inline-block text-5xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
            Skills
          </h2>
          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I work with
          </p>
        </div>

        <motion.div 
          className="flex flex-wrap gap-4 justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.05
              }
            },
            hidden: {}
          }}
        >
          {skillsData.map((skill, index) => (
            <motion.div
              key={index}
              className="px-6 py-4 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/30 text-center text-white font-medium shadow-lg hover:shadow-blue-500/20 hover:border-blue-500/30 transition-all duration-300"
              variants={{
                hidden: { scale: 0, opacity: 0 },
                visible: { 
                  scale: 1, 
                  opacity: 1,
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }
              }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              {skill}
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl opacity-10 translate-x-1/2 translate-y-1/2"></div>
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500 rounded-full filter blur-3xl opacity-10 -translate-x-1/2 -translate-y-1/2"></div>
    </section>
  );
};

export default Skills;
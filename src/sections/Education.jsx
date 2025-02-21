// src/sections/Education.jsx
import { motion } from 'framer-motion';
import educationData from '../data/education';

const Education = () => {
  return (
    <section id="education" className="py-16 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 backdrop-blur-md border border-white/20 p-8 md:p-16">
      <h2 className="text-4xl text-center mb-10 text-gray-200 bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-gray-400">Education</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            className="p-6 bg-gray-900 bg-opacity-50 rounded-lg shadow-md hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <h3 className="text-2xl text-gray-200 mb-2">{edu.institution}</h3>
            <div className="flex justify-between text-gray-500 mb-4">
              <span className="text-lg">{edu.degree}</span>
              <span className="text-sm">{edu.date}</span>
            </div>
            {edu.projects && (
              <div className="mt-4">
                <h4 className="text-xl text-gray-200 mb-2">Key Projects:</h4>
                <ul className="list-disc list-inside text-gray-500">
                  {edu.projects.map((project, i) => (
                    <li key={i}>{project}</li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
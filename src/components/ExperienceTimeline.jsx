// src/components/ExperienceTimeline.jsx
import { motion } from 'framer-motion';

const ExperienceTimeline = ({ experiences }) => {
  return (
    <div className="relative py-5 my-5 p-8 md:p-16">
      {experiences.map((exp, index) => (
        <motion.div
          key={index}
          className="flex items-start mb-5 relative"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.8 }}
        >
          <div className="w-4 h-4 bg-gray-300 rounded-full absolute left-[-8px] top-0"></div>
          <div className="bg-gray-800 bg-opacity-50 p-4 rounded shadow-md ml-8 w-full border border-gradient-to-r from-blue-500 to-purple-500 hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 backdrop-blur">
            <h3 className="text-lg text-gray-200">{exp.company}</h3>
            <h4 className="text-md text-gray-500">{exp.position}</h4>
            <span className="text-sm text-gray-400 mb-2 block">{exp.date}</span>
            <ul className="list-disc list-inside text-gray-500">
              {exp.responsibilities.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ExperienceTimeline;
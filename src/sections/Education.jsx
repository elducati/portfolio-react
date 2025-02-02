// src/sections/Education.jsx
import { motion } from 'framer-motion';
import educationData from '../data/education';

const Education = () => {
  return (
    <section id="education" className="section education-section">
      <h2 className="section-title">Education</h2>
      <div className="education-grid">
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            className="education-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <h3>{edu.institution}</h3>
            <div className="education-details">
              <span className="degree">{edu.degree}</span>
              <span className="date">{edu.date}</span>
            </div>
            {edu.projects && (
              <div className="projects-list">
                <h4>Key Projects:</h4>
                <ul>
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
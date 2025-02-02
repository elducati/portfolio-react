// src/sections/Skills.jsx
import { motion } from 'framer-motion';
import skillsData from '../data/skills';

const Skills = () => {
  return (
    <section id="skills" className="section skills-section">
      <h2 className="section-title">Skills</h2>
      <div className="skills-container">
        {skillsData.map((skill, index) => (
          <motion.div
            key={index}
            className="skill-item"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
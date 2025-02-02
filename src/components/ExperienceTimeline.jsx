// src/components/ExperienceTimeline.jsx
import { motion } from 'framer-motion';

const ExperienceTimeline = ({ experiences }) => {
  return (
    <div className="experience-timeline">
      {experiences.map((exp, index) => (
        <motion.div
          key={index}
          className="timeline-item"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.8 }}
        >
          <div className="timeline-marker"></div>
          <div className="timeline-content">
            <h3>{exp.company}</h3>
            <h4>{exp.position}</h4>
            <span className="date">{exp.date}</span>
            <ul>
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
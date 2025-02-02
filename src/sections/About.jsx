// src/sections/About.jsx
import { motion } from 'framer-motion';
import aboutData from '../data/about';

const About = () => {
  return (
    <section id="about" className="section about-section">
      <h2 className="section-title">About Me</h2>
      <div className="about-container">
        <motion.div 
          className="about-content"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="about-text">
            {aboutData.points.map((point, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {point}
              </motion.p>
            ))}
          </div>
          <div className="about-highlight">
            <motion.div
              className="fun-fact"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
            >
              <i className="fa fa-music"></i>
              <h3>Fun Fact</h3>
              <p>{aboutData.funFact}</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
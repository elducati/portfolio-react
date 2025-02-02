// components/ProjectCard.jsx
import { motion } from 'framer-motion';

const ProjectCard = ({ title, description, image, link }) => (
  <motion.div 
    className="project-card"
    whileHover={{ scale: 1.02 }}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
  >
    <div className="project-image">
      <img src={image} alt={title} />
    </div>
    <div className="project-content">
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">
        View Project
      </a>
    </div>
  </motion.div>
);

export default ProjectCard;
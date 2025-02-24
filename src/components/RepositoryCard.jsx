import React from 'react';
import { motion } from 'framer-motion';

const RepositoryCard = ({ name, description, html_url }) => {
  return (
    <motion.div 
      className="p-6 bg-gray-900 bg-opacity-50 rounded-lg shadow-md hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
      whileHover={{ scale: 1.02 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="repository-content">
        <h3 className="text-2xl text-gray-200 mb-2">{name}</h3>
        <p className="text-gray-500 mb-4">{description}</p>
        <a 
          href={html_url} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-blue-500 hover:underline"
        >
          View Repository
        </a>
      </div>
    </motion.div>
  );
};

export default RepositoryCard;
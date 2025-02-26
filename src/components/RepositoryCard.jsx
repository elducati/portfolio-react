import React from 'react';
import { motion } from 'framer-motion';

const RepositoryCard = ({ name, description, html_url }) => {
  return (
    <motion.div 
      className="p-6 bg-gray-800/80 backdrop-blur-sm rounded-xl border border-gray-700/50 shadow-xl hover:shadow-blue-500/20 transition-all duration-300"
      whileHover={{ scale: 1.02 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="repository-content relative">
        {/* Decorative accent */}
        <div className="absolute top-0 right-0 h-16 w-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-50 blur-xl rounded-full -translate-y-6 translate-x-2"></div>
        
        <h3 className="text-2xl font-bold text-white mb-3 relative z-10">{name}</h3>
        <p className="text-gray-400 mb-5 relative z-10">{description}</p>
        <a 
          href={html_url} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium transition-colors duration-200"
        >
          View Repository
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
    </motion.div>
  );
};

export default RepositoryCard;
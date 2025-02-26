// src/sections/About.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import aboutData from '../data/about';
import coogif from '../assets/coogif.gif';

const About = () => {
  const [backgroundPosition, setBackgroundPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    setBackgroundPosition({ x: clientX / 10, y: clientY / 10 });
  };

  return (
    <section 
      id="about" 
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 backdrop-blur-md border border-white/20"
      onMouseMove={handleMouseMove}
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-400">
          About Me
        </h2>
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <motion.div
            className="w-full md:w-1/2 space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6">
              {aboutData.points.map((point, index) => (
                <motion.p
                  key={index}
                  className="text-lg text-gray-400"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  {point}
                </motion.p>
              ))}
            </div>
            
            <motion.div
              className="w-full max-w-md mx-auto md:mx-0 p-6 bg-gray-900 bg-opacity-50 rounded-lg shadow-md border border-gray-700 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 backdrop-blur"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="flex flex-col items-center md:items-start">
                <i className="fa fa-music text-2xl text-blue-400 mb-3"></i>
                <h3 className="text-xl font-semibold text-gray-200 mb-3">Fun Fact</h3>
                <p className="text-lg text-gray-400">{aboutData.funFact}</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              type: "spring",
              stiffness: 100,
            }}
            className="relative w-full md:w-5/12 aspect-square"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent z-10 rounded-lg" />
            
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="relative z-0 h-full"
            >
              <img
                src={coogif}
                alt="Cool GIF"
                className="w-full h-full object-cover rounded-lg shadow-2xl shadow-blue-500/20 p-4"
              />
            </motion.div>

            {/* Decorative elements */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 opacity-10 blur-2xl rounded-lg" />
            <div className="absolute -inset-1 bg-gradient-to-t from-blue-500/20 via-transparent to-transparent blur-xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
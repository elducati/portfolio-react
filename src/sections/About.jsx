// src/sections/About.jsx
import { motion } from 'framer-motion';
import aboutData from '../data/about';

const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-800 backdrop-blur-md border border-white/20">
      <h2 className="text-4xl text-center mb-10 text-gray-200 bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-gray-400">About Me</h2>
      <div className="flex flex-col items-center">
        <motion.div 
          className="max-w-2xl text-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
        >          
          <div className="relative w-64 h-64 mx-auto overflow-hidden rounded-full shadow-lg">
            <motion.img
              src={aboutData.image}
              alt="Profile"
              className="w-full h-full object-cover transition-transform duration-300 ease-in-out"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            />
          </div>
          <div className="mt-8 space-y-4">
            {aboutData.points.map((point, index) => (
              <motion.p
                key={index}
                className="text-lg text-gray-500"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {point}
              </motion.p>
            ))}
          </div>
          <div className="mt-8 text-center">
            <motion.div
              className="inline-block p-5 bg-gray-900 bg-opacity-50 rounded-lg shadow-md border border-gradient-to-r from-blue-500 to-purple-500 hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 backdrop-blur"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
            >
              <i className="fa fa-music text-2xl text-blue-400 mb-2"></i>
              <h3 className="text-xl text-gray-200 mb-2">Fun Fact</h3>
              <p className="text-lg text-gray-500">{aboutData.funFact}</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
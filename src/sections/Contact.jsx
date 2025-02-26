// src/sections/Contact.jsx
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    window.location.href = `mailto:geomondi09@gmail.com?subject=Contact from Portfolio&body=Name: ${data.name}%0DEmail: ${data.email}%0DMessage: ${data.message}`;
  };

  return (
    <section id="contact" className="py-16 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-950"></div>
      <div className="absolute inset-0 opacity-20 bg-[url('/img/grid-pattern.svg')]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="mb-16 text-center">
          <h2 className="inline-block text-5xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
            Get in Touch
          </h2>
          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Have a question or want to work together?
          </p>
        </div>

        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="flex flex-col items-center space-y-5 max-w-md mx-auto"
        >
          <div className="w-full">
            <input
              type="email"
              placeholder="Your Email"
              {...register("email", { required: true })}
              className={`w-full p-4 rounded-lg bg-gray-800/50 backdrop-blur-sm text-gray-200 placeholder-gray-500 border ${errors.email ? 'border-red-500' : 'border-gray-700/50'} focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all duration-300`}
            />
            {errors.email && <p className="mt-1 text-sm text-red-500">Email is required</p>}
          </div>
          
          <div className="w-full">
            <textarea
              placeholder="Your Message"
              rows="5"
              {...register("message", { required: true })}
              className={`w-full p-4 rounded-lg bg-gray-800/50 backdrop-blur-sm text-gray-200 placeholder-gray-500 border ${errors.message ? 'border-red-500' : 'border-gray-700/50'} focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all duration-300`}
            />
            {errors.message && <p className="mt-1 text-sm text-red-500">Message is required</p>}
          </div>
          
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium shadow-lg hover:shadow-blue-500/40 transition-all duration-300"
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl opacity-10 translate-x-1/2 translate-y-1/2"></div>
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500 rounded-full filter blur-3xl opacity-10 -translate-x-1/2 -translate-y-1/2"></div>
    </section>
  );
};

export default Contact;
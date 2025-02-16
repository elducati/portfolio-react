// src/sections/Contact.jsx
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    window.location.href = `mailto:geomondi09@gmail.com?subject=Contact from Portfolio&body=Name: ${data.name}%0DEmail: ${data.email}%0DMessage: ${data.message}`;
  };

  return (
    <section id="contact" className="py-16 bg-gray-800 backdrop-blur-md border border-white/20">
      <h2 className="text-4xl text-center mb-10 text-gray-200 bg-clip-text text-transparent bg-gradient-to-r from-gray-200 to-gray-400">Get in Touch</h2>
      <motion.form
        onSubmit={handleSubmit(onSubmit)}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="flex flex-col items-center space-y-4"
      >
        <input
          type="email"
          placeholder="Your Email"
          {...register("email", { required: true })}
          className={`w-full max-w-md p-3 rounded bg-gray-900 text-gray-200 ${errors.email ? 'border border-red-500' : 'border border-gray-700'}`}
        />
        <textarea
          placeholder="Your Message"
          {...register("message", { required: true })}
          className={`w-full max-w-md p-3 rounded bg-gray-900 text-gray-200 ${errors.message ? 'border border-red-500' : 'border border-gray-700'}`}
        />
        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 bg-blue-500 text-white rounded shadow-md"
        >
          Send Message
        </motion.button>
      </motion.form>
    </section>
  );
};

export default Contact;
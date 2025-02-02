// src/sections/Contact.jsx
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    window.location.href = `mailto:geomondi09@gmail.com?subject=Contact from Portfolio&body=Name: ${data.name}%0DEmail: ${data.email}%0DMessage: ${data.message}`;
  };

  return (
    <section id="contact" className="section contact-section">
      <h2 className="section-title">Get in Touch</h2>
      <motion.form
        onSubmit={handleSubmit(onSubmit)}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="contact-form"
      >
        <input
          type="email"
          placeholder="Your Email"
          {...register("email", { required: true })}
          className={errors.email ? 'error' : ''}
        />
        <textarea
          placeholder="Your Message"
          {...register("message", { required: true })}
          className={errors.message ? 'error' : ''}
        />
        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Send Message
        </motion.button>
      </motion.form>
    </section>
  );
};

export default Contact;
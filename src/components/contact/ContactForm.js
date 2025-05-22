import { motion } from 'framer-motion';
import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique d'envoi du formulaire (par exemple, API)
    console.log('Formulaire soumis:', formData);
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="space-y-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div>
        <label
          htmlFor="name"
          className="block text-lg font-medium text-gray-900"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Nom
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="mt-1 block w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-client focus:ring-2 focus:ring-client/50 transition-all duration-300"
          style={{ fontFamily: "'Inter', sans-serif" }}
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="block text-lg font-medium text-gray-900"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="mt-1 block w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-client focus:ring-2 focus:ring-client/50 transition-all duration-300"
          style={{ fontFamily: "'Inter', sans-serif" }}
        />
      </div>
      <div>
        <label
          htmlFor="message"
          className="block text-lg font-medium text-gray-900"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="mt-1 block w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-client focus:ring-2 focus:ring-client/50 transition-all duration-300"
          style={{ fontFamily: "'Inter', sans-serif" }}
        />
      </div>
      <motion.button
        type="submit"
        className="w-full bg-gradient-to-r from-client to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-semibold text-lg transition-all duration-300 shadow-md focus:ring-4 focus:ring-client focus:ring-offset-2"
        whileHover={{ scale: 1.05, boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)' }}
        whileTap={{ scale: 0.95 }}
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        Envoyer
      </motion.button>
    </motion.form>
  );
};

export default ContactForm;
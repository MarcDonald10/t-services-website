import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import image01 from '../../assets/images/home/img01.jpg';

const FAQSection = ({ faqs }) => {
  // State to track which FAQ is open
  const [openIndex, setOpenIndex] = useState(null);

  // Animation variants for staggered effects
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  // Accordion animation for answer
  const answerVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: { height: 'auto', opacity: 1, transition: { duration: 0.3, ease: 'easeOut' } },
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="relative h-64 md:h-96 lg:h-full"
          >
            <LazyLoadImage
              src={image01}
              alt="Person using construction app"
              className="w-full h-full object-cover rounded-2xl shadow-2xl"
              effect="blur"
              placeholderSrc="https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
          </motion.div>

          {/* Right: FAQ Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <motion.h2
              variants={itemVariants}
              className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6"
            >
              Questions fréquentes
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-base md:text-lg lg:text-xl text-gray-600 mb-8 max-w-md mx-auto lg:mx-0"
            >
              Tout ce que vous devez savoir pour démarrer avec notre application.
            </motion.p>
            <div className="max-w-2xl mx-auto lg:mx-0">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="mb-4 border-b border-gray-200"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full text-left py-4 flex justify-between items-center focus:outline-none"
                    aria-expanded={openIndex === index}
                    aria-controls={`faq-answer-${index}`}
                  >
                    <h3 className="text-lg font-semibold text-gray-900 pr-4">
                      {faq.question}
                    </h3>
                    <span className="text-2xl text-blue-600">
                      {openIndex === index ? '−' : '+'}
                    </span>
                  </button>
                  <motion.div
                    id={`faq-answer-${index}`}
                    variants={answerVariants}
                    initial="hidden"
                    animate={openIndex === index ? 'visible' : 'hidden'}
                    className="overflow-hidden"
                  >
                    <p className="text-gray-600 pb-4">{faq.answer}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

FAQSection.propTypes = {
  faqs: PropTypes.arrayOf(
    PropTypes.shape({
      question: PropTypes.string.isRequired,
      answer: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default FAQSection;
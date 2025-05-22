import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';

const FAQItem = ({ question, answer, color }) => {
  const [isOpen, setIsOpen] = useState(false);
  const isClient = color === 'client';
  const borderColor = isClient ? 'border-client/20' : 'border-technician/20';
  const iconColor = isClient ? 'text-client' : 'text-technician';

  return (
    <motion.div
      className={`border-b ${borderColor} py-4 last:border-b-0`}
      initial={false}
      animate={{ backgroundColor: isOpen ? 'rgba(255, 255, 255, 0.05)' : 'transparent' }}
      transition={{ duration: 0.3 }}
    >
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${question}`}
      >
        <span
          className="text-lg sm:text-xl font-semibold text-gray-100 pr-4"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          {question}
        </span>
        <ChevronDownIcon
          className={`w-6 h-6 ${iconColor} transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      <motion.div
        id={`faq-answer-${question}`}
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p
          className="text-base sm:text-lg font-medium text-gray-200 mt-2"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          {answer}
        </p>
      </motion.div>
    </motion.div>
  );
};

export default FAQItem;
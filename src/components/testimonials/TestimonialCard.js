import { motion } from 'framer-motion';
import { StarIcon } from '@heroicons/react/24/solid';

const TestimonialCard = ({ name, role, text, color, avatar, rating }) => {
  const isClient = color === 'client';
  const borderColor = isClient ? 'border-client/20' : 'border-technician/20';
  const textColor = isClient ? 'text-client' : 'text-technician';

  return (
    <motion.div
      className={`bg-gray-900/30 border ${borderColor} rounded-xl p-6 m-4 shadow-md hover:shadow-lg transition-shadow duration-300 text-gray-100`}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center mb-4">
        <img
          src={avatar}
          alt={`Avatar de ${name}`}
          className="w-12 h-12 rounded-full mr-4 ring-2 ring-transparent hover:ring-technician/50 transition-all duration-300"
        />
        <div>
          <h3
            className="text-lg sm:text-xl font-semibold text-gray-100"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {name}
          </h3>
          <p
            className={`text-sm font-medium ${textColor}`}
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {role}
          </p>
        </div>
      </div>
      <p
        className="text-base sm:text-lg font-medium leading-relaxed mb-4"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        {text}
      </p>
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <StarIcon
            key={i}
            className={`w-5 h-5 ${i < rating ? 'text-technician' : 'text-gray-600'}`}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
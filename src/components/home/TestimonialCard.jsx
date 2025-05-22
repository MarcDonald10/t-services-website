import { motion } from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { StarIcon } from '@heroicons/react/24/solid';
import PropTypes from 'prop-types';

const TestimonialCard = ({ name, role, text, avatar, rating }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.3 }}
    className="p-6 rounded-2xl bg-white shadow-lg text-gray-900"
  >
    <div className="flex items-center mb-4">
      <LazyLoadImage
        src={avatar}
        alt={name}
        className="w-12 h-12 rounded-full mr-4 object-cover"
        effect="blur"
      />
      <div>
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-gray-600">{role}</p>
      </div>
    </div>
    <div className="flex mb-2">
      {[...Array(5)].map((_, i) => (
        <StarIcon
          key={i}
          className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        />
      ))}
    </div>
    <p className="text-gray-600">{text}</p>
  </motion.div>
);

TestimonialCard.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

export default TestimonialCard;
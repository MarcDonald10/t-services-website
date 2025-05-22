import { motion } from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import PropTypes from 'prop-types';

const StepCard = ({ title, description, icon, color }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="p-6 rounded-2xl bg-white shadow-lg text-center"
  >
    <LazyLoadImage src={icon} alt={title} className="w-16 h-16 mx-auto mb-4" effect="blur" />
    <h3 className={`text-xl font-semibold text-${color} mb-2`}>{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

StepCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default StepCard;
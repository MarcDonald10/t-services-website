import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const StatCard = ({ value, label }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="text-center"
  >
    <h3 className="text-3xl md:text-4xl font-bold text-client">{value}</h3>
    <p className="text-gray-600">{label}</p>
  </motion.div>
);

StatCard.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default StatCard;
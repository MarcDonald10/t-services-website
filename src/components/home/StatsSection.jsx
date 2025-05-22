import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import StatCard from './StatCard';

const StatsSection = ({ stats }) => (
  <section className="py-12 bg-white">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        {stats.map((stat, index) => (
          <StatCard  key={index} {...stat} />
        ))}
      </div>
    </div>
  </section>
);

StatsSection.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default StatsSection;
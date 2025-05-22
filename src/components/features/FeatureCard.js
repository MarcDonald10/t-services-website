import { motion } from 'framer-motion';
import {
  MagnifyingGlassIcon,
  CalendarIcon,
  LockClosedIcon,
  CheckCircleIcon,
  StarIcon,
  LifebuoyIcon,
} from '@heroicons/react/24/solid';

const FeatureCard = ({ title, description, icon, color }) => {
  const icons = {
    search: <MagnifyingGlassIcon className="w-8 h-8" />,
    calendar: <CalendarIcon className="w-8 h-8" />,
    lock: <LockClosedIcon className="w-8 h-8" />,
    check: <CheckCircleIcon className="w-8 h-8" />,
    star: <StarIcon className="w-8 h-8" />,
    support: <LifebuoyIcon className="w-8 h-8" />,
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.5 }}
      className={`p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ${
        color === 'client' ? 'bg-client/10' : 'bg-technician/10'
      }`}
    >
      <div className={`mb-4 ${color === 'client' ? 'text-client' : 'text-technician'}`}>
        {icons[icon]}
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

export default FeatureCard;
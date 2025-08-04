import { motion, useScroll, useTransform } from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import PropTypes from 'prop-types';
import image04 from '../../assets/images/home/img04.jpg';


const FeaturesSection = ({ features }) => {
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

  const cardVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  // Line animation
  const lineVariants = {
    hidden: { height: 0 },
    visible: { height: '100%', transition: { duration: 1, ease: 'easeInOut' } },
  };

  // Parallax effect for image
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -20]);

  return (
    <section className="py-16 md:py-24 bg-gray-200 from-white to-gray-50 relative overflow-hidden">
      {/* Minimal Geometric Lines */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 2 }}
      >
        <svg className="w-full h-full">
          <line x1="10%" y1="20%" x2="30%" y2="80%" stroke="#3B82F6" strokeWidth="1" />
          <line x1="70%" y1="10%" x2="90%" y2="90%" stroke="#10B981" strokeWidth="1" />
        </svg>
      </motion.div>

      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left: Image */}
          <motion.div
            style={{ y }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="relative h-64 md:h-80 lg:h-[450px] flex items-center justify-center"
          >
            <div className="relative bg-white p-3 rounded-xl shadow-lg">
              <LazyLoadImage
                src={image04}
                alt="Personne utilisant l’application du génie civil"
                className="w-full h-56 md:h-72 lg:h-[400px] object-cover rounded-lg"
                effect="blur"
                placeholderSrc="https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=100"
              />
              {/* Contextual Badge */}
              <div className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                En action
              </div>
            </div>
          </motion.div>

          {/* Right: Features Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative h-[450px] flex flex-col justify-center"
          >
            <motion.h2
              variants={cardVariants}
              className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 text-center lg:text-left"
            >
              Pourquoi choisir notre app ?
            </motion.h2>
            <motion.p
              variants={cardVariants}
              className="text-lg md:text-xl text-gray-600 mb-8 max-w-md mx-auto lg:mx-0 text-center lg:text-left"
            >
              Une solution simple et fiable pour vos projets du génie civil, conçue pour l’Afrique francophone.
            </motion.p>
            <div className="relative max-w-2xl mx-auto lg:mx-0 space-y-6">
              {/* Connecting Line */}
              <motion.div
                className="absolute left-4 top-0 w-1 bg-blue-600 lg:left-0"
                variants={lineVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                style={{ height: `${features.length * 100}px` }}
              />
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{ scale: 1.03, boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)' }}
                  className="relative bg-white rounded-xl p-6 shadow-md border border-gray-100 flex items-center space-x-4"
                >
                  {/* Number Badge */}
                  <div
                    className="absolute -left-4 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm bg-blue-600 shadow-md lg:-left-4"
                  >
                    {index + 1}
                  </div>
                  {/* Animated Icon */}
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                  >
                    {feature.icon}
                  </motion.div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
          </motion.div>
        </div>
      </div>
    </section>
  );
};

FeaturesSection.propTypes = {
  features: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      icon: PropTypes.element.isRequired,
    })
  ).isRequired,
};

export default FeaturesSection;
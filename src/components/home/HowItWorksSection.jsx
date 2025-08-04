import { motion, useScroll, useTransform } from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import PropTypes from 'prop-types';
import Particles from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

const HowItWorksSection = ({ steps }) => {
  // Initialize particles with slim loader
  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  // Animation variants for staggered effects
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.5 } },
  };

  const bubbleVariants = {
    hidden: { opacity: 0, scale: 0.5, y: 50 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const lineVariants = {
    hidden: { pathLength: 0 },
    visible: { pathLength: 1, transition: { duration: 1, ease: 'easeInOut' } },
  };

  // Parallax effect for image
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -30]);

  return (
    <section className="py-16 md:py-24 bg-gradient-radial from-blue-50 to-teal-100 relative overflow-hidden">
      {/* Fallback Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100/20 to-teal-100/20 pointer-events-none" />

      {/* Interactive Particles */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false }, // Restrict to section
          particles: {
            number: { value: 20, density: { enable: true, area: 800 } },
            color: { value: ['#3B82F6', '#10B981', '#F59E0B'] },
            shape: { type: 'circle' },
            opacity: { value: { min: 0.2, max: 0.4 } },
            size: { value: { min: 2, max: 5 } },
            move: {
              enable: true,
              speed: { min: 0.5, max: 1 },
              direction: 'none',
              random: true,
              outModes: { default: 'out' },
            },
          },
          interactivity: {
            events: {
              onHover: { enable: true, mode: 'repulse' },
              onClick: { enable: true, mode: 'push' },
            },
            modes: {
              repulse: { distance: 100, duration: 0.4 },
              push: { quantity: 2 },
            },
          },
          detectRetina: true,
        }}
        className="absolute inset-0"
      />

      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left: Image */}
          <motion.div
            style={{ y }}
            initial={{ opacity: 0, x: -50, rotate: -5 }}
            whileInView={{ opacity: 1, x: 0, rotate: -2 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="relative h-64 md:h-80 lg:h-[500px] flex items-center justify-center"
          >
            <div className="relative bg-white p-4 rounded-xl shadow-2xl transform -rotate-2">
              <LazyLoadImage
                src="https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Personne utilisant l’application du génie civil"
                className="w-full h-56 md:h-72 lg:h-[450px] object-cover rounded-lg"
                effect="blur"
                placeholderSrc="https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=100"
              />
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white/30 to-transparent rounded-b-lg" />
            </div>
          </motion.div>

          {/* Right: Steps Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center lg:text-left relative h-[500px] flex flex-col justify-center"
          >
            <motion.h2
              variants={bubbleVariants}
              className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6"
            >
              Comment ça marche ?
            </motion.h2>
            <motion.p
              variants={bubbleVariants}
              className="text-base md:text-lg lg:text-xl text-gray-600 mb-12 max-w-md mx-auto lg:mx-0"
            >
              Trois étapes simples pour concrétiser vos projets du génie civil.
            </motion.p>
            <div className="relative max-w-2xl mx-auto lg:mx-0">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  variants={bubbleVariants}
                  whileHover={{ scale: 1.05, boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)' }}
                  className="relative mb-12 last:mb-0 flex items-start"
                >
                  <div
                    className="absolute -left-12 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg bg-gradient-to-br from-blue-500 to-teal-500 shadow-lg"
                    style={{ top: '50%', transform: 'translateY(-50%)' }}
                  >
                    {index + 1}
                  </div>
                  <div className="bg-white rounded-full p-6 shadow-xl border border-gray-100 flex items-center space-x-4 w-full">
                    {step.icon && (
                      <motion.img
                        src={step.icon}
                        alt={`${step.title} icône`}
                        className="w-10 h-10"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                      />
                    )}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
                      <p className="text-gray-600 text-sm">{step.description}</p>
                    </div>
                  </div>
                  {index < steps.length - 1 && (
                    <svg
                      className="absolute left-0 w-6 h-12"
                      style={{ top: '100%', transform: 'translateY(-10px)' }}
                      viewBox="0 0 20 40"
                    >
                      <motion.path
                        d="M10 0 C10 20, 10 20, 10 40"
                        stroke={step.color}
                        strokeWidth="2"
                        fill="none"
                        variants={lineVariants}
                        initial="hidden"
                        animate="visible"
                      />
                    </svg>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

HowItWorksSection.propTypes = {
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      icon: PropTypes.string,
      color: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default HowItWorksSection;
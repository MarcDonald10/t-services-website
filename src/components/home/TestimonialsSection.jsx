import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import Tilt from 'react-parallax-tilt';
import { StarIcon } from '@heroicons/react/24/solid';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import image02 from '../../assets/images/home/img02.jpg';

const TestimonialsSection = ({ testimonials }) => {
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

  // Testimonial card component
  const TestimonialCard = ({ name, role, text, avatar, rating }) => (
    <Tilt
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
      perspective={1000}
      scale={1.05}
      transitionSpeed={500}
      className="bg-white rounded-2xl shadow-xl p-6 text-gray-800"
    >
      <div className="flex items-center mb-4">
        <img
          src={avatar}
          alt={`${name}'s avatar`}
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="text-lg font-semibold">{name}</h4>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </div>
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <StarIcon
            key={i}
            className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
          />
        ))}
      </div>
      <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
    </Tilt>
  );

  TestimonialCard.propTypes = {
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-blue-600 to-teal-500 text-white relative overflow-hidden">
      {/* Background Decorative Shapes */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2 }}
      >
        <div className="absolute top-10 left-10 w-40 h-40 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-white/10 rounded-full animate-pulse delay-1000"></div>
      </motion.div>

      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="relative h-64 md:h-96 lg:h-[600px]"
          >
            <LazyLoadImage
              src={image02}
              alt="Person using construction app"
              className="w-full h-full object-cover rounded-2xl shadow-2xl"
              effect="blur"
              placeholderSrc="https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
          </motion.div>

          {/* Right: Testimonials Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center bg-white/90 rounded-full px-4 py-2 mb-6 mx-auto lg:mx-0 shadow-lg"
            >
              <StarIcon className="w-6 h-6 text-yellow-400 mr-2" />
              <span className="text-sm font-semibold text-gray-800">
                Noté 4.8/5 par 15K+ utilisateurs
              </span>
            </motion.div>
            <motion.h2
              variants={itemVariants}
              className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6"
            >
              Ce que nos utilisateurs disent
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-base md:text-lg lg:text-xl mb-8 max-w-md mx-auto lg:mx-0"
            >
              Des clients et artisans satisfaits à travers l’Afrique francophone.
            </motion.p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto lg:mx-0">
              {testimonials.slice(0, 4).map((testimonial, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                >
                  <TestimonialCard {...testimonial} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

TestimonialsSection.propTypes = {
  testimonials: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      role: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default TestimonialsSection;
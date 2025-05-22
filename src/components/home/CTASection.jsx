import { motion } from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import image03 from '../../assets/images/home/img03.jpg';


const CTASection = () => {
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

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-blue-600 to-teal-500 text-white overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left: Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <motion.h2
              variants={itemVariants}
              className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-6"
            >
              Transformez vos projets BTP dès aujourd’hui
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-base md:text-lg lg:text-xl mb-8 max-w-md mx-auto lg:mx-0 text-gray-100"
            >
              Téléchargez l’application ou rejoignez notre réseau d’artisans qualifiés à Abidjan, Dakar, Bamako et au-delà.
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4"
            >
              <motion.a
                href="/download"
                className="bg-white text-blue-600 px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold hover:bg-gray-100 transition duration-300 shadow-lg"
                whileHover={{ scale: 1.05, boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)' }}
                whileTap={{ scale: 0.95 }}
                aria-label="Téléchargez l'application"
              >
                Téléchargez l’app
              </motion.a>
              <motion.a
                href="/technicians"
                className="border-2 border-white text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition duration-300 shadow-lg"
                whileHover={{ scale: 1.05, boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)' }}
                whileTap={{ scale: 0.95 }}
                aria-label="Devenir artisan"
              >
                Devenez artisan
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="relative h-64 md:h-96 lg:h-full"
          >
            <LazyLoadImage
              src={image03}
              alt="Person using construction app"
              className="w-full h-full object-cover rounded-2xl shadow-2xl"
              effect="blur"
              placeholderSrc="https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=100"
            />
            {/* Optional overlay for visual polish */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
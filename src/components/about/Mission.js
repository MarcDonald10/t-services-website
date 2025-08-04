import { motion, useInView } from 'framer-motion';
import { UsersIcon } from '@heroicons/react/24/solid';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { useRef } from 'react';

const Mission = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  // Variants pour les animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const badgeVariants = {
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-16 sm:py-20 bg-gray-500 text-gray-200 overflow-hidden"
      aria-label="Section mission"
    >
      {/* Image de fond avec superposition sombre */}
      <div className="absolute inset-0">
        {/* <LazyLoadImage
          src={backgroundImage}
          alt="Texture abstraite sombre"
          className="w-full h-full object-cover opacity-15 filter blur-sm"
          effect="blur"
          aria-hidden="true"
        /> */}
        <div className="absolute inset-0 bg-black/50" aria-hidden="true" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="bg-gray-900/20 border border-teal-500/20 rounded-2xl py-10 sm:py-14 px-6 sm:px-8 max-w-4xl mx-auto"
          aria-label="Conteneur de la mission"
        >
          {/* Badge */}
          <motion.div
            variants={badgeVariants}
            whileHover="hover"
            className="inline-flex items-center bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 mb-10 shadow-md border border-teal-500/20"
          >
            <UsersIcon className="w-5 h-5 text-yellow-400 mr-2" />
            <span
              className="text-sm font-semibold text-gray-900"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Plus de 10K projets réussis
            </span>
          </motion.div>

          {/* Titre */}
          <motion.h2
            variants={itemVariants}
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-6"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              textShadow: '0 1px 2px rgba(0, 0, 0, 0.5)',
            }}
          >
            Révolutionner le domaine du génie civil avec simplicité
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl md:text-2xl font-medium leading-loose max-w-4xl mx-auto mb-10 sm:mb-12"
            style={{
              fontFamily: "'Inter', sans-serif",
              textShadow: '0 1px 2px rgba(0, 0, 0, 0.5)',
            }}
          >
            Chez TechServices, nous simplifions chaque étape des projets du génie civil en connectant clients et techniciens avec des outils innovants, fiables, et intuitifs.
          </motion.p>

          {/* Bouton CTA */}
          <motion.a
            href="/about"
            variants={itemVariants}
            className="inline-block bg-gradient-to-r from-technician to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-md focus:ring-4 focus:ring-technician focus:ring-offset-2"
            whileHover={{ scale: 1.05, boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)' }}
            whileTap={{ scale: 0.95 }}
            aria-label="En savoir plus sur notre mission"
          >
            En savoir plus
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Mission;
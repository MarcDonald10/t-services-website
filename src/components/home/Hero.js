import { motion, useScroll, useTransform } from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { useEffect, useRef, useState } from 'react';
import client1 from '../../assets/images/services/client1.jpg';
import client2 from '../../assets/images/services/client2.jpg';
import client3 from '../../assets/images/services/technicien2.jpg';

// Données du diaporama
const slideshowData = [
  {
    image: client1,
    alt: 'Présentation de l’application BTP',
    caption: 'Découvrez notre application intuitive pour le BTP',
  },
  {
    image: client2,
    alt: 'QR code Play Store',
    caption: 'Scannez pour télécharger sur Play Store',
  },
  {
    image: client3,
    alt: 'QR code App Store',
    caption: 'Scannez pour télécharger sur App Store',
  },
];

// Données de fond et textes
const backgroundData = [
  {
    image: 'https://via.placeholder.com/1920x1080/1E40AF/FFFFFF?text=Chantier+BTP',
    alt: 'Chantier BTP en Afrique',
    title: 'Révolutionnez vos projets BTP',
    subtitle: 'Une plateforme intuitive pour connecter clients, artisans et quincailleries.',
  },
  {
    image: 'https://via.placeholder.com/1920x1080/D1D5DB/FFFFFF?text=Artisans+BTP',
    alt: 'Artisans au travail',
    title: 'Simplifiez la gestion de vos chantiers',
    subtitle: 'Collaborez efficacement avec artisans et fournisseurs en un seul clic.',
  },
  {
    image: 'https://via.placeholder.com/1920x1080/FBBF24/FFFFFF?text=Quincaillerie+BTP',
    alt: 'Quincaillerie pour BTP',
    title: 'Boostez vos projets avec notre app',
    subtitle: 'Accédez à des outils et matériaux de qualité pour vos chantiers.',
  },
];

const Hero = () => {
  const sectionRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [downloadCount, setDownloadCount] = useState(0);

  // Parallax effect using useScroll
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, 50]);

  // Synchronisation du diaporama uniquement (pas des textes)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slideshowData.length);
    }, 4000); // Changement toutes les 4 secondes
    return () => clearInterval(interval);
  }, [isPaused]);

  // Animation du compteur de téléchargements
  useEffect(() => {
    const targetCount = 50000;
    const duration = 2000;
    const increment = targetCount / (duration / 16);
    let currentCount = 0;

    const counter = setInterval(() => {
      currentCount += increment;
      if (currentCount >= targetCount) {
        currentCount = targetCount;
        clearInterval(counter);
      }
      setDownloadCount(Math.floor(currentCount));
    }, 16);

    return () => clearInterval(counter);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const slideVariants = {
    hidden: { opacity: 0, scale: 0.95, x: 20 },
    visible: { opacity: 1, scale: 1, x: 0, transition: { duration: 1, ease: 'easeInOut' } },
  };

  const buttonVariants = {
    hover: { scale: 1.05, boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)' },
    tap: { scale: 0.95 },
  };

  // Texte fixe (premier ensemble de backgroundData)
  const fixedText = backgroundData[0];

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-[600px] lg:min-h-[800px] flex items-center justify-center overflow-hidden bg-gray-900 text-white pt-16 sm:pt-20"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Fond avec effet de parallaxe */}
      <div className="absolute inset-0 z-0">
        {backgroundData.map((bg, index) => (
          <motion.div
            key={index}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${bg.image})`,
              y, // Effet de parallaxe
              filter: 'brightness(0.6) blur(4px)', // Amélioration de la lisibilité du texte
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: index === activeSlide ? 1 : 0 }} // Synchronisation avec le diaporama
            transition={{ duration: 1.2, ease: 'easeInOut' }}
            aria-hidden="true"
            role="img"
            aria-label={bg.alt}
          />
        ))}
        {/* Dégradé pour la lisibilité */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/60" />
      </div>

      {/* Contenu principal */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Section texte */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col justify-center py-12 lg:py-0"
          >
            {/* Badge de preuve sociale */}
            <motion.div
              variants={textVariants}
              className="inline-flex items-center  text-white rounded-full px-4 py-2 mb-6 shadow-md"
            >
              <span className="text-sm font-medium"></span>
            </motion.div>

            {/* Titre principal (fixe) */}
            <motion.h1
              variants={textVariants}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              {fixedText.title}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-client to-yellow-400">
                {' '}
                en Afrique
              </span>
            </motion.h1>

            {/* Sous-titre (fixe) */}
            <motion.p
              variants={textVariants}
              className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 max-w-xl text-gray-300"
              style={{ fontFamily: "'Roboto', sans-serif" }}
            >
              {fixedText.subtitle}
            </motion.p>

            {/* Boutons CTA */}
            <motion.div variants={textVariants} className="flex gap-4 mb-8">
              <motion.a
                href="#get-started"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="inline-flex items-center px-6 py-3 bg-client text-white rounded-lg shadow-lg hover:bg-blue-600 transition-colors duration-300"
                aria-label="Commencer maintenant"
              >
                Commencer
              </motion.a>
              <motion.a
                href="#learn-more"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="inline-flex items-center px-6 py-3 bg-transparent border border-gray-300 text-gray-300 rounded-lg hover:bg-gray-300 hover:text-gray-900 transition-colors duration-300"
                aria-label="En savoir plus"
              >
                En savoir plus
              </motion.a>
            </motion.div>

            {/* Badges App Store */}
            <motion.div variants={textVariants} className="flex gap-4 mb-8">
              <motion.a
                href="https://www.apple.com/app-store/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                aria-label="Télécharger sur l'App Store"
              >
                <LazyLoadImage
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  alt="Télécharger sur l'App Store"
                  className="h-10 sm:h-12"
                  effect="blur"
                />
              </motion.a>
              <motion.a
                href="https://play.google.com/store"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                aria-label="Disponible sur Google Play"
              >
                <LazyLoadImage
                  src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                  alt="Disponible sur Google Play"
                  className="h-10 sm:h-12"
                  effect="blur"
                />
              </motion.a>
            </motion.div>

            {/* Compteur de téléchargements */}
            <motion.div variants={textVariants} className="text-sm sm:text-base text-gray-500">
              Plus de{' '}
              <span className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-client to-yellow-400">
                +{downloadCount} téléchargements
              </span>{' '}
              à Douala, Yaoundé, Bafoussam et au-delà
            </motion.div>
          </motion.div>

          {/* Diaporama */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="relative h-64 sm:h-80 md:h-96 lg:h-[550px] flex items-center justify-center"
          >
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
              {slideshowData.map((item, index) => (
                <motion.div
                  key={index}
                  className="absolute inset-0"
                  variants={slideVariants}
                  initial="hidden"
                  animate={index === activeSlide ? 'visible' : 'hidden'}
                >
                  <LazyLoadImage
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-full object-cover"
                    effect="blur"
                    placeholderSrc={`${item.image}&w=10&q=10`}
                  />
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900/70 to-transparent text-white text-center py-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    <p className="text-sm md:text-base font-medium" style={{ fontFamily: "'Roboto', sans-serif" }}>
                      {item.caption}
                    </p>
                  </motion.div>
                </motion.div>
              ))}
              {/* Boutons de navigation */}
              <motion.button
                onClick={() => setActiveSlide((prev) => (prev - 1 + slideshowData.length) % slideshowData.length)}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 bg-client/80 rounded-full text-white shadow-md hover:bg-client focus:outline-none focus:ring-2 focus:ring-client"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Image précédente"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </motion.button>
              <motion.button
                onClick={() => setActiveSlide((prev) => (prev + 1) % slideshowData.length)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-client/80 rounded-full text-white shadow-md hover:bg-client focus:outline-none focus:ring-2 focus:ring-client"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Image suivante"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.button>
              {/* Barres de pagination */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                {slideshowData.map((_, index) => (
                  <motion.div
                    key={index}
                    className={`h-1 rounded-full cursor-pointer ${index === activeSlide ? 'bg-yellow-400 w-8' : 'bg-gray-200/50 w-4'}`}
                    animate={{ width: index === activeSlide ? 32 : 16 }}
                    transition={{ duration: 0.3 }}
                    onClick={() => setActiveSlide(index)}
                    aria-label={`Aller à l'image ${index + 1}`}
                    role="button"
                  />
                ))}
              </div>
            </div>
            {/* Bordure animée */}
            <motion.div
              className="absolute inset-0 border-4 border-transparent rounded-2xl pointer-events-none"
              animate={{
                borderColor: ['rgba(30, 64, 175, 0.5)', 'rgba(251, 191, 36, 0.5)', 'rgba(30, 64, 175, 0.5)'],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.div>
        </div>
      </div>

      {/* Élément décoratif SVG (courbe) */}
      <svg
        className="absolute bottom-0 left-0 w-full h-16 md:h-24 text-gray-800/20"
        viewBox="0 0 1440 100"
        fill="currentColor"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M0,100 C360,20 1080,20 1440,100 L1440,100 L0,100 Z" />
      </svg>
    </section>
  );
};

export default Hero;
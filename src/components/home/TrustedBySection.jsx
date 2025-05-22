import { motion, useScroll, useTransform } from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { useEffect, useRef, useState } from 'react';
// import image04 from '../../assets/images/home/img04.jpg';
import image06 from '../../assets/images/home/img06.jpg';


const TrustedBySection = () => {
  const logos = [
    { src: 'partner1.png', alt: 'Partenaire 1', label: 'Partenaire officiel' },
    { src: 'partner2.png', alt: 'Partenaire 2', label: 'Collaborateur clé' },
    { src: 'partner3.png', alt: 'Partenaire 3', label: 'Soutien régional' },
    { src: 'partner4.png', alt: 'Partenaire 4', label: 'Partenaire officiel' },
  ];

  // State for counter animation
  const [userCount, setUserCount] = useState(0);
  const sectionRef = useRef(null);

  // Counter animation
  useEffect(() => {
    const targetCount = 10000;
    const duration = 2000;
    const increment = targetCount / (duration / 16);
    let currentCount = 0;

    const counter = setInterval(() => {
      currentCount += increment;
      if (currentCount >= targetCount) {
        currentCount = targetCount;
        clearInterval(counter);
      }
      setUserCount(Math.floor(currentCount));
    }, 16);

    return () => clearInterval(counter);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const logoVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  // Parallax effect for image
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -20]);

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Minimal Particles */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2 }}
      >
        <motion.div
          className="absolute top-10 left-10 w-24 h-24 bg-blue-300 rounded-full blur-xl"
          animate={{ y: [0, -10, 0], opacity: [0.1, 0.2, 0.1] }}
          transition={{ repeat: Infinity, duration: 4 }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-32 h-32 bg-teal-300 rounded-full blur-xl"
          animate={{ y: [0, 10, 0], opacity: [0.1, 0.2, 0.1] }}
          transition={{ repeat: Infinity, duration: 5, delay: 1 }}
        />
      </motion.div>

      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          

          {/* Right: Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center lg:text-left h-[450px] flex flex-col justify-center"
          >
            <motion.h3
              variants={logoVariants}
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
            >
              Rejoignez des milliers d’utilisateurs satisfaits
            </motion.h3>
            <motion.p
              variants={logoVariants}
              className="text-lg md:text-xl text-gray-600 mb-6 max-w-md mx-auto lg:mx-0"
            >
              Plus de <span className="font-semibold text-blue-600">+{userCount}</span> utilisateurs font confiance à notre plateforme.
            </motion.p>
            <div className="relative overflow-hidden max-w-2xl mx-auto lg:mx-0">
              <motion.div
                className="flex animate-slide"
                initial={{ x: 0 }}
                animate={{ x: '-100%' }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                whileHover={{ animationPlayState: 'paused' }}
                style={{ display: 'inline-flex', whiteSpace: 'nowrap' }}
              >
                {[...logos, ...logos].map((logo, index) => (
                  <motion.div
                    key={index}
                    variants={logoVariants}
                    className="relative bg-white rounded-lg p-4 mx-2 shadow-md border border-gray-100 flex-shrink-0 w-40 h-24 flex items-center justify-center"
                    whileHover={{ scale: 1.05, boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)' }}
                  >
                    <img
                      src={`https://placehold.co/120x40.png?text=${logo.src}`}
                      alt={logo.alt}
                      className="h-10"
                    />
                    <div className="absolute -top-2 -right-2 bg-teal-600 text-white text-xs font-semibold px-2 py-1 rounded-full shadow-sm">
                      {logo.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
           
          </motion.div>

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
                src={image06}
                alt="Personne utilisant l’application BTP"
                className="w-full h-56 md:h-72 lg:h-[400px] object-cover rounded-lg"
                effect="blur"
                placeholderSrc="https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=100"
              />
              <div className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                En action
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;
import { motion, useInView } from 'framer-motion';
import { UsersIcon } from '@heroicons/react/24/solid';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { useRef } from 'react';
import Navbar from '../components/common/Navbar';
import Mission from '../components/about/Mission';
import Team from '../components/about/Team';
import Footer from '../components/common/Footer';
import PageHeader from '../components/common/PageHeader';

// Image de fond pour la section CTA (même que Mission)
const ctaBackgroundImage =
  'https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg?auto=compress&cs=tinysrgb&w=800';

const About = () => {
  const ctaRef = useRef(null);
  const ctaInView = useInView(ctaRef, { once: true, amount: 0.2 });

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
    <div style={{ fontFamily: "'Inter', sans-serif" }}>
      <Navbar />
      <PageHeader pageName="A PROPOS" />
      {/* SVG décoratif en haut */}
      <svg
        className="w-full h-16 md:h-24 text-gray-100"
        viewBox="0 0 1440 100"
        fill="currentColor"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M0,0 C360,80 1080,80 1440,0 L1440,0 L0,0 Z" />
      </svg>

      {/* Section Mission */}
      <Mission />

      {/* SVG décoratif entre Mission et Team */}
      <svg
        className="w-full h-16 md:h-24 text-gray-50"
        viewBox="0 0 1440 100"
        fill="currentColor"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M0,100 C360,20 1080,20 1440,100 L1440,100 L0,100 Z" />
      </svg>

      {/* Section Team */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Team />
        </div>
      </section>

      {/* Section CTA */}
      <motion.section
        ref={ctaRef}
        variants={containerVariants}
        initial="hidden"
        animate={ctaInView ? 'visible' : 'hidden'}
        className="py-16 sm:py-20 bg-gray-500 text-gray-800 relative overflow-hidden"
        aria-label="Section appel à l'action"
      >
        <div className="absolute inset-0">
          <LazyLoadImage
            src={ctaBackgroundImage}
            alt="Texture abstraite sombre"
            className="w-full h-full object-cover opacity-15 filter blur-sm"
            effect="blur"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-black/50" aria-hidden="true" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
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
              Rejoignez 10K+ utilisateurs satisfaits
            </span>
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-6"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              textShadow: '0 1px 2px rgba(0, 0, 0, 0.5)',
            }}
          >
            Transformez vos projets BTP dès aujourd’hui
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl md:text-2xl font-medium leading-loose mb-10 max-w-4xl mx-auto"
            style={{
              fontFamily: "'Inter', sans-serif",
              textShadow: '0 1px 2px rgba(0, 0, 0, 0.5)',
            }}
          >
            Faites partie d’une communauté innovante qui simplifie la connexion entre clients et techniciens du BTP.
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <motion.a
              href="/download"
              className="bg-gradient-to-r from-client to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-md focus:ring-4 focus:ring-client focus:ring-offset-2"
              whileHover={{ scale: 1.05, boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)' }}
              whileTap={{ scale: 0.95 }}
              aria-label="Télécharger l'application"
            >
              Téléchargez l’app
            </motion.a>
            <motion.a
              href="/technicians"
              className="bg-gradient-to-r from-technician to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-md focus:ring-4 focus:ring-technician focus:ring-offset-2"
              whileHover={{ scale: 1.05, boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)' }}
              whileTap={{ scale: 0.95 }}
              aria-label="Devenir technicien"
            >
              Devenir technicien
            </motion.a>
          </motion.div>
        </div>
      </motion.section>

      {/* SVG décoratif en bas */}
      <svg
        className="w-full h-16 md:h-24 text-gray-100"
        viewBox="0 0 1440 100"
        fill="currentColor"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M0,0 C360,80 1080,80 1440,0 L1440,0 L0,0 Z" />
      </svg>

      <Footer />
    </div>
  );
};

export default About;
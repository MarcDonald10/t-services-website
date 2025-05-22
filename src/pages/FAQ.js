import { motion, useInView } from 'framer-motion';
import { LifebuoyIcon } from '@heroicons/react/24/solid';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { useRef } from 'react';
import FAQItem from '../components/faq/FAQItem';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import PageHeader from '../components/common/PageHeader';


const FAQ = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const faqs = [
    {
      question: 'Comment trouver un technicien qualifié ?',
      answer: 'Utilisez notre moteur de recherche intuitif en sélectionnant vos critères (localisation, spécialité, disponibilité) pour trouver un technicien en quelques clics.',
      color: 'client',
    },
    {
      question: 'Quels sont les frais pour les techniciens ?',
      answer: 'L’inscription est gratuite. Une commission raisonnable est appliquée par mission, déduite automatiquement de vos paiements.',
      color: 'technician',
    },
    {
      question: 'Le paiement est-il sécurisé ?',
      answer: 'Oui, nous utilisons des protocoles de paiement sécurisés (SSL, cryptage) pour garantir la protection de vos transactions.',
      color: 'client',
    },
    {
      question: 'Puis-je annuler une réservation ?',
      answer: 'Oui, vous pouvez annuler une réservation jusqu’à 24 heures avant le début de la mission, selon nos conditions.',
      color: 'client',
    },
    {
      question: 'Comment devenir technicien sur TechServices ?',
      answer: 'Inscrivez-vous, créez un profil professionnel, et soumettez vos certifications. Une fois vérifié, commencez à accepter des missions !',
      color: 'technician',
    },
  ];

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
      <PageHeader pageName="FAQ" />
      {/* SVG décoratif en haut */}
      <svg
        className="w-full h-16 md:h-24 text-gray-200"
        viewBox="0 0 1440 100"
        fill="currentColor"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M0,0 C360,80 1080,80 1440,0 L1440,0 L0,0 Z" />
      </svg>

      <section
        ref={sectionRef}
        className="py-24 sm:py-28 bg-gray-500 text-gray-100 relative overflow-hidden"
        aria-label="Section FAQ"
      >
        {/* Image de fond avec superposition sombre */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            {/* Badge */}
            <motion.div
              variants={badgeVariants}
              whileHover="hover"
              className="inline-flex items-center bg-white/90 backdrop-blur-sm rounded-full px-2.5 py-1 mb-12 shadow-md border border-client/20"
              aria-label="Support utilisateur"
            >
              <LifebuoyIcon className="w-5 h-5 text-technician mr-2" />
              <span
                className="text-sm font-semibold text-gray-900"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Support 24/7 pour clients et techniciens
              </span>
            </motion.div>

            {/* Titre */}
            <motion.h2
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                textShadow: '0 1px 1px rgba(0, 0, 0, 0.4)',
              }}
            >
              Vos questions, nos réponses
            </motion.h2>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-xl sm:text-2xl md:text-3xl font-semibold leading-loose mb-12 sm:mb-16 max-w-5xl mx-auto"
              style={{
                fontFamily: "'Inter', sans-serif",
                textShadow: '0 1px 1px rgba(0, 0, 0, 0.4)',
              }}
            >
              Tout ce que vous devez savoir pour utiliser TechServices en toute confiance.
            </motion.p>

            {/* FAQ */}
            <motion.div
              variants={itemVariants}
              className="max-w-4xl mx-auto bg-gray-900/30 border border-client/20 rounded-xl p-6 sm:p-8 shadow-md"
            >
              {faqs.map((faq, index) => (
                <FAQItem key={index} {...faq} />
              ))}
            </motion.div>

            {/* Boutons CTA */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row justify-center gap-6 mt-16"
            >
              <motion.a
                href="/contact"
                className="bg-gradient-to-r from-client to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-md focus:ring-4 focus:ring-client focus:ring-offset-2"
                whileHover={{ scale: 1.05, boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)' }}
                whileTap={{ scale: 0.95 }}
                aria-label="Contacter le support"
              >
                Contactez-nous
              </motion.a>
              <motion.a
                href="/download"
                className="bg-gradient-to-r from-technician to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-md focus:ring-4 focus:ring-technician focus:ring-offset-2"
                whileHover={{ scale: 1.05, boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)' }}
                whileTap={{ scale: 0.95 }}
                aria-label="Rejoignez TechServices"
              >
                Rejoignez TechServices
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SVG décoratif en bas */}
      <svg
        className="w-full h-16 md:h-24 text-gray-200"
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

export default FAQ;
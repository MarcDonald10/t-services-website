import { motion, useInView } from 'framer-motion';
import { EnvelopeIcon, PhoneIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/solid';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { useRef } from 'react';
import ContactForm from '../components/contact/ContactForm';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import PageHeader from '../components/common/PageHeader';

// Texture subtile pour le fond
const backgroundImage =
  'https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg?auto=compress&cs=tinysrgb&w=800';

const Contact = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const socialIcons = [
    {
      Icon: FaFacebook,
      href: 'https://facebook.com',
      ariaLabel: 'Page Facebook de TechServices',
    },
    {
      Icon: FaTwitter,
      href: 'https://twitter.com',
      ariaLabel: 'Compte Twitter de TechServices',
    },
    {
      Icon: FaLinkedin,
      href: 'https://linkedin.com',
      ariaLabel: 'Page LinkedIn de TechServices',
    },
  ];

  return (
    <div style={{ fontFamily: "'Inter', sans-serif" }} className="bg-gray-50">
      <Navbar />
      <PageHeader pageName="CONTACT" />
      {/* SVG décoratif en haut */}
      <svg
        className="w-full h-12 text-gray-50"
        viewBox="0 0 1440 60"
        fill="currentColor"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M0,0 C360,40 1080,40 1440,0 L1440,0 L0,0 Z" />
      </svg>

      <section
        ref={sectionRef}
        className="py-16 bg-gray-50 relative"
        aria-label="Section contact"
      >
        {/* Texture subtile */}
        <div className="absolute inset-0">
          <LazyLoadImage
            src={backgroundImage}
            alt="Texture douce"
            className="w-full h-full object-cover opacity-10 filter blur-sm"
            effect="blur"
            aria-hidden="true"
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="max-w-4xl mx-auto bg-white rounded-lg p-6 sm:p-8 shadow-lg"
          >
            {/* Titre */}
            <motion.h2
              variants={itemVariants}
              className="text-3xl sm:text-4xl font-bold text-gray-800 text-center mb-8"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Nous contacter
            </motion.h2>

            {/* Grille pour formulaire et informations */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Formulaire */}
              <motion.div variants={itemVariants}>
                <ContactForm />
              </motion.div>

              {/* Informations */}
              <motion.div variants={itemVariants} className="space-y-4">
                <div className="flex items-start">
                  <MapPinIcon className="w-5 h-5 text-blue-600 mr-2 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Adresse</h3>
                    <p className="text-gray-600">Deido, Douala, Cameroun</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <PhoneIcon className="w-5 h-5 text-blue-600 mr-2 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Téléphone</h3>
                    <p className="text-gray-600">
                      <a href="tel:+33123456789" className="hover:text-blue-600">
                        +237 622 051 723
                      </a>
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <EnvelopeIcon className="w-5 h-5 text-blue-600 mr-2 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Email</h3>
                    <p className="text-gray-600">
                      <a href="mailto:contact@techservices.fr" className="hover:text-blue-600">
                        contact@techservices.com
                      </a>
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <ClockIcon className="w-5 h-5 text-blue-600 mr-2 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Horaires</h3>
                    <p className="text-gray-600">
                      7j/7 - 7h00 à 18h00
                    </p>
                  </div>
                </div>

                {/* Réseaux sociaux */}
                <div className="flex gap-4 mt-4">
                  {socialIcons.map(({ Icon, href, ariaLabel }, index) => (
                    <motion.a
                      key={index}
                      href={href}
                      className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 text-blue-600 hover:bg-blue-100 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      aria-label={ariaLabel}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>

                {/* Carte Google Maps */}
                <div className="mt-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Notre emplacement</h3>
                  <div className="rounded-lg overflow-hidden shadow-md">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.991625956777!2d2.352221615674019!3d48.85661407928782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee6046d7e!2sParis%2C%20France!5e0!3m2!1sen!2sfr!4v1635781234567!5m2!1sen!2sfr"
                      width="100%"
                      height="200"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      title="Emplacement de TechServices à Paris"
                      aria-label="Carte interactive de l'emplacement de TechServices"
                    ></iframe>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SVG décoratif en bas */}
      <svg
        className="w-full h-12 text-gray-50"
        viewBox="0 0 1440 60"
        fill="currentColor"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M0,0 C360,40 1080,40 1440,0 L1440,0 L0,0 Z" />
      </svg>

      <Footer />
    </div>
  );
};

export default Contact;
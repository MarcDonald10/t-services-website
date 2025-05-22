import { motion, useInView } from 'framer-motion';
import { StarIcon, MagnifyingGlassIcon, CalendarIcon, LockClosedIcon, WrenchScrewdriverIcon, SparklesIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { useRef } from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, Keyboard, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import PageHeader from '../components/common/PageHeader';

// Implémentation de FeatureCard
const FeatureCard = ({ title, description, color, icon: Icon, image, alt, reverse }) => (
  <motion.div
    className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-6 sm:gap-8 p-6 sm:p-8 rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300 max-w-5xl mx-auto`}
    whileHover={{ scale: 1.02, boxShadow: '0 12px 24px rgba(0, 0, 0, 0.1)' }}
  >
    <div className="flex-1">
      <div className={`w-12 h-12 mb-4 bg-${color}/10 rounded-full flex items-center justify-center`}>
        <Icon className={`w-6 h-6 text-${color}`} aria-hidden="true" />
      </div>
      <h3
        className="text-xl sm:text-2xl font-bold text-gray-900 mb-2"
        style={{ fontFamily: "'Montserrat', sans-serif" }}
      >
        {title}
      </h3>
      <p
        className="text-gray-600 text-base sm:text-lg"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        {description}
      </p>
    </div>
    <div className="flex-1">
      <LazyLoadImage
        src={image}
        alt={alt}
        className="w-full h-48 sm:h-64 object-cover rounded-lg shadow-sm"
        effect="blur"
      />
    </div>
  </motion.div>
);

const Features = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const features = [
    {
      title: 'Recherche facile',
      description: 'Trouvez des techniciens qualifiés près de chez vous en quelques secondes.',
      color: 'client',
      icon: MagnifyingGlassIcon,
      image: 'https://images.pexels.com/photos/6963080/pexels-photo-6963080.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Interface de recherche mobile pour trouver des techniciens qualifiés',
      reverse: false,
    },
    {
      title: 'Rendez-vous en ligne',
      description: 'Planifiez vos interventions rapidement depuis votre smartphone.',
      color: 'client',
      icon: CalendarIcon,
      image: 'https://images.pexels.com/photos/6843576/pexels-photo-6843576.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Application mobile affichant un calendrier pour planifier des rendez-vous',
      reverse: true,
    },
    {
      title: 'Paiement sécurisé',
      description: 'Payez en toute confiance avec notre système de transactions sécurisées.',
      color: 'client',
      icon: LockClosedIcon,
      image: 'https://images.pexels.com/photos/5090876/pexels-photo-5090876.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Interface de paiement mobile sécurisée avec un cadenas',
      reverse: false,
    },
    {
      title: 'Missions flexibles',
      description: 'Choisissez les projets qui correspondent à vos compétences et horaires.',
      color: 'technician',
      icon: WrenchScrewdriverIcon,
      image: 'https://images.pexels.com/photos/162553/construction-worker-tools-helmet-162553.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Technicien travaillant sur un chantier, sélectionnant des projets',
      reverse: true,
    },
    {
      title: 'Visibilité accrue',
      description: 'Attirez plus de clients grâce à un profil professionnel optimisé.',
      color: 'technician',
      icon: SparklesIcon,
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Profil professionnel numérique optimisé pour attirer des clients',
      reverse: false,
    },
    {
      title: 'Paiements rapides',
      description: 'Recevez vos paiements rapidement après chaque mission complétée.',
      color: 'technician',
      icon: CurrencyDollarIcon,
      image: 'https://images.pexels.com/photos/4968630/pexels-photo-4968630.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Notification de paiement rapide sur une application mobile',
      reverse: true,
    },
  ];

  const carouselSlides = [
    {
      title: 'Recherchez en un clin d’œil',
      description: 'Trouvez le technicien idéal pour votre projet en quelques clics.',
      image: 'https://images.pexels.com/photos/6963080/pexels-photo-6963080.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Interface de recherche mobile pour trouver des techniciens',
      ctaText: 'Téléchargez l’app',
      ctaLink: '/download',
      ctaColor: 'client',
    },
    {
      title: 'Boostez votre visibilité',
      description: 'Créez un profil attractif et recevez plus de missions.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Profil professionnel numérique pour techniciens',
      ctaText: 'Devenir technicien',
      ctaLink: '/technicians',
      ctaColor: 'technician',
    },
    {
      title: 'Projets sans stress',
      description: 'Confirmez vos missions et gérez vos paiements facilement.',
      image: 'https://images.pexels.com/photos/5090876/pexels-photo-5090876.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Interface de gestion de projets et paiements',
      ctaText: 'Commencez maintenant',
      ctaLink: '/download',
      ctaColor: 'client',
    },
  ];

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
    <div>
      <Navbar />
      <PageHeader pageName="FONCTIONNALITES" />
      <section
        ref={sectionRef}
        className="relative w-full pt-16 sm:pt-20 pb-16 bg-gradient-to-b from-white to-gray-50 overflow-hidden"
        aria-label="Section des fonctionnalités"
      >
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          {/* Titre et badge */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="text-center mb-16"
          >
            <motion.div
              variants={badgeVariants}
              whileHover="hover"
              className="inline-flex items-center bg-white/90 backdrop-blur-sm rounded-full px-4 py-2 mb-6 shadow-md border border-teal-500/20"
            >
              <StarIcon className="w-5 h-5 text-yellow-400 mr-2" />
              <span
                className="text-sm font-semibold text-gray-900"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Noté 4.8/5 par 10K+ utilisateurs
              </span>
            </motion.div>
            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Des outils puissants pour vos projets BTP
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Connectez-vous avec des techniciens qualifiés, planifiez facilement, et gérez vos projets en toute simplicité.
            </motion.p>
          </motion.div>

          {/* Liste alternée des fonctionnalités */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="space-y-12 mb-16"
          >
            {features.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </motion.div>

          {/* Carrousel Swiper */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="max-w-6xl mx-auto mb-16"
          >
            <Swiper
              modules={[Autoplay, Navigation, Pagination, Keyboard, EffectFade]}
              spaceBetween={16}
              slidesPerView={1}
              effect="fade"
              autoplay={{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true }}
              navigation={{
                prevEl: '.swiper-button-prev',
                nextEl: '.swiper-button-next',
              }}
              pagination={{ clickable: true }}
              keyboard={{ enabled: true }}
              breakpoints={{
                640: { slidesPerView: 2, spaceBetween: 20, effect: 'slide' },
                1024: { slidesPerView: 3, spaceBetween: 24, effect: 'slide' },
              }}
              className="rounded-lg overflow-hidden"
              aria-label="Carrousel des fonctionnalités"
            >
              {carouselSlides.map((slide) => (
                <SwiperSlide key={slide.title}>
                  <motion.div
                    className="relative bg-white text-gray-900 p-6 rounded-lg shadow-lg transform hover:-rotate-1 transition-transform duration-300"
                    whileHover={{ y: -10 }}
                  >
                    <LazyLoadImage
                      src={slide.image}
                      alt={slide.alt}
                      className="w-full h-48 object-cover rounded-md mb-4"
                      effect="blur"
                    />
                    <h3
                      className="text-xl font-semibold mb-2"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      {slide.title}
                    </h3>
                    <p
                      className="text-gray-600 mb-4"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {slide.description}
                    </p>
                    <a
                      href={slide.ctaLink}
                      className={`inline-block px-6 py-2 rounded-lg font-semibold text-white transition-all duration-300 shadow-md bg-gradient-to-r ${
                        slide.ctaColor === 'client'
                          ? 'from-client to-blue-600 hover:from-blue-600 hover:to-blue-700'
                          : 'from-technician to-yellow-600 hover:from-yellow-600 hover:to-yellow-700'
                      }`}
                      aria-label={slide.ctaText}
                    >
                      {slide.ctaText}
                    </a>
                  </motion.div>
                </SwiperSlide>
              ))}
              <div
                className="swiper-button-prev !text-client !w-10 !h-10 after:!text-lg"
                aria-label="Slide précédent"
              />
              <div
                className="swiper-button-next !text-client !w-10 !h-10 after:!text-lg"
                aria-label="Slide suivant"
              />
            </Swiper>
          </motion.div>

          {/* Boutons CTA */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="text-center"
          >
            <div className="flex justify-center gap-4 flex-wrap">
              <motion.a
                href="/download"
                variants={itemVariants}
                whileHover={{ scale: 1.05, boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)' }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-client to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-md focus:ring-2 focus:ring-client focus:ring-offset-2"
                aria-label="Télécharger l'application"
              >
                Téléchargez l’app
              </motion.a>
              <motion.a
                href="/technicians"
                variants={itemVariants}
                whileHover={{ scale: 1.05, boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)' }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-technician to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-md focus:ring-2 focus:ring-technician focus:ring-offset-2"
                aria-label="Devenir technicien"
              >
                Devenir technicien
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Élément décoratif SVG */}
        <svg
          className="absolute bottom-0 left-0 w-full h-16 md:h-24 text-gray-100"
          viewBox="0 0 1440 100"
          fill="currentColor"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path d="M0,100 C360,20 1080,20 1440,100 L1440,100 L0,100 Z" />
        </svg>
      </section>
      <Footer />
    </div>
  );
};

export default Features;
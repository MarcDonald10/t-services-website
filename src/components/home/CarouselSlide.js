import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { StarIcon } from '@heroicons/react/24/solid';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'react-lazy-load-image-component/src/effects/blur.css';
import PropTypes from 'prop-types';

// Reusable Carousel Slide Component
const CarouselSlide = ({ image, title, description, ctaText, ctaLink, ctaColor }) => (
  <div className="relative bg-white text-gray-800 p-6 rounded-2xl shadow-xl max-w-md mx-auto">
    <LazyLoadImage
      src={image}
      alt={title}
      className="w-full h-64 object-contain rounded-lg mb-4"
      effect="blur"
      placeholderSrc={`${image}?w=10&q=10`}
    />
    <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <motion.a
      href={ctaLink}
      className={`inline-block px-6 py-3 rounded-lg font-semibold text-white transition duration-300 ${
        ctaColor === 'client' ? 'bg-client hover:bg-blue-700' : 'bg-technician hover:bg-yellow-600'
      }`}
      whileHover={{ scale: 1.05, boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)' }}
      whileTap={{ scale: 0.95 }}
    >
      {ctaText}
    </motion.a>
  </div>
);

CarouselSlide.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  ctaText: PropTypes.string.isRequired,
  ctaLink: PropTypes.string.isRequired,
  ctaColor: PropTypes.oneOf(['client', 'technician']).isRequired,
};

const Hero = () => {
  const carouselSlides = [
    {
      image: 'https://images.unsplash.com/photo-1611162617210-7d673bf0fCraw?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Trouvez un artisan en un clin d’œil',
      description: 'Recherchez des professionnels qualifiés près de chez vous, disponibles 24/7.',
      ctaText: 'Téléchargez l’app',
      ctaLink: '/download',
      ctaColor: 'client',
    },
    {
      image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Boostez votre activité',
      description: 'Créez un profil pro et accédez à des projets dans votre région.',
      ctaText: 'Devenir artisan',
      ctaLink: '/technicians',
      ctaColor: 'technician',
    },
    {
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      title: 'Projets simplifiés, paiements sécurisés',
      description: 'Planifiez, payez et suivez vos projets en toute tranquillité.',
      ctaText: 'Commencez maintenant',
      ctaLink: '/download',
      ctaColor: 'client',
    },
  ];

  return (
    <section className="relative bg-gradient-to-br from-client to-technician text-white py-24 md:py-32 overflow-hidden">
      {/* Background Image with Subtle Pattern */}
      <div
        className="absolute inset-0 bg-pattern opacity-10"
        style={{ backgroundImage: `url('https://www.transparenttextures.com/patterns/concrete-wall.png')` }}
      />
      <LazyLoadImage
        src="https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=800"
        alt="African Construction Site"
        className="absolute inset-0 w-full h-full object-cover opacity-20"
        effect="blur"
        placeholderSrc="https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=10&q=10"
      />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Social Proof Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6"
        >
          <StarIcon className="w-5 h-5 text-yellow-400 mr-2" />
          <span className="text-sm font-semibold">Noté 4.8/5 par 12K+ utilisateurs</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold mb-4 leading-tight"
        >
          Votre partenaire BTP en Afrique
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl mb-8 max-w-2xl mx-auto"
        >
          Connectez-vous aux meilleurs artisans pour vos projets ou trouvez des missions adaptées à vos compétences, 24/7.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex justify-center gap-4 flex-col md:flex-row mb-12"
        >
          <motion.a
            href="/download"
            className="bg-client hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold transition duration-300 shadow-lg"
            whileHover={{ scale: 1.05, boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)' }}
            whileTap={{ scale: 0.95 }}
            aria-label="Téléchargez l'application"
          >
            Téléchargez l’app
          </motion.a>
          <motion.a
            href="/technicians"
            className="bg-technician hover:bg-yellow-600 text-white px-8 py-4 rounded-full font-semibold transition duration-300 shadow-lg"
            whileHover={{ scale: 1.05, boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)' }}
            whileTap={{ scale: 0.95 }}
            aria-label="Devenir artisan"
          >
            Devenir artisan
          </motion.a>
        </motion.div>

        {/* Swiper Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            navigation
            pagination={{ clickable: true }}
            className="rounded-2xl overflow-hidden"
            aria-label="Carrousel des fonctionnalités de l'application"
          >
            {carouselSlides.map((slide, index) => (
              <SwiperSlide key={index}>
                <CarouselSlide {...slide} />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* Animated Download Counter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-8 text-sm text-white/80"
        >
          Plus de <span className="font-semibold">50K téléchargements</span> à Abidjan, Dakar, Bamako et au-delà
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
import { motion, useInView } from 'framer-motion';
import { StarIcon } from '@heroicons/react/24/solid';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { useRef } from 'react';
import TestimonialCard from '../components/testimonials/TestimonialCard';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import PageHeader from '../components/common/PageHeader';


const Testimonials = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const testimonials = [
    {
      name: 'Claire L.',
      role: 'Cliente',
      text: 'Un plombier est arrivé en 2 heures pour une fuite. Service impeccable !',
      color: 'client',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
      rating: 5,
    },
    {
      name: 'Ahmed B.',
      role: 'Technicien',
      text: 'TechServices m’a permis de tripler mes missions. Super plateforme !',
      color: 'technician',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
      rating: 5,
    },
    {
      name: 'Sophie M.',
      role: 'Cliente',
      text: 'Facile à utiliser et paiements sécurisés. Je recommande vivement !',
      color: 'client',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
      rating: 4,
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
      <PageHeader pageName="TEMOIGNAGES" />
      <section
        ref={sectionRef}
        className="py-24 sm:py-28 bg-gray-500 text-gray-100 relative overflow-hidden"
        aria-label="Section témoignages"
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
              aria-label="Note des utilisateurs"
            >
              <StarIcon className="w-5 h-5 text-technician mr-2" />
              <span
                className="text-sm font-semibold text-gray-900"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Noté 4.8/5 par 10K+ utilisateurs
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
              Ce que nos utilisateurs pensent de nous
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
              Des milliers de clients et techniciens partagent leur satisfaction avec TechServices.
            </motion.p>

            {/* Carrousel */}
            <motion.div variants={itemVariants}>
              <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={30}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                breakpoints={{
                  768: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
                }}
                className="rounded-lg"
              >
                {testimonials.map((testimonial, index) => (
                  <SwiperSlide key={index}>
                    <TestimonialCard {...testimonial} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </motion.div>

            {/* Boutons CTA */}
            {/* <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row justify-center gap-6 mt-16"
            >
              <motion.a
                href="/share"
                className="bg-gradient-to-r from-client to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-md focus:ring-4 focus:ring-client focus:ring-offset-2"
                whileHover={{ scale: 1.05, boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)' }}
                whileTap={{ scale: 0.95 }}
                aria-label="Partagez votre avis"
              >
                Partagez votre avis
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
            </motion.div> */}
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Testimonials;
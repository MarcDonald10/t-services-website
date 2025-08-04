import { motion, useInView, useReducedMotion } from 'framer-motion';
import { StarIcon, MagnifyingGlassIcon, CalendarIcon, LockClosedIcon, WrenchScrewdriverIcon, SparklesIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { useRef, useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, Keyboard, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import PageHeader from '../components/common/PageHeader';

// FeatureCard Component
const FeatureCard = ({ title, description, color, icon: Icon, image, alt, reverse }) => (
  <motion.div
    className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-6 sm:gap-8 p-6 sm:p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-md hover:shadow-xl transition-all duration-300 max-w-5xl mx-auto border border-gray-100 dark:border-gray-700`}
    whileHover={{ scale: 1.02, boxShadow: '0 12px 24px rgba(0, 0, 0, 0.1)' }}
  >
    <div className="flex-1">
      <div className={`w-12 h-12 mb-4 bg-${color}/10 rounded-full flex items-center justify-center`}>
        <Icon className={`w-6 h-6 text-${color}`} aria-hidden="true" />
      </div>
      <h3
        className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2"
        style={{ fontFamily: "'Montserrat', sans-serif" }}
      >
        {title}
      </h3>
      <p
        className="text-gray-600 dark:text-gray-300 text-base sm:text-lg"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        {description}
      </p>
    </div>
    <div className="flex-1">
      <LazyLoadImage
        src={image}
        srcSet={`${image}&w=400 400w, ${image}&w=800 800w`}
        sizes="(max-width: 640px) 400px, 800px"
        alt={alt}
        className="w-full h-48 sm:h-64 object-cover rounded-lg shadow-sm"
        effect="blur"
      />
    </div>
  </motion.div>
);

// ParticleCanvas Component
const ParticleCanvas = () => {
  const shouldReduceMotion = useReducedMotion();
  const canvasRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle class
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 8 + 4;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.type = Math.floor(Math.random() * 3); // 0: Wrench, 1: Spark, 2: Star
      }

      update(mouseX, mouseY) {
        // Move particles
        this.x += this.speedX;
        this.y += this.speedY;

        // Repel from mouse
        const dx = this.x - mouseX;
        const dy = this.y - mouseY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < 100) {
          const angle = Math.atan2(dy, dx);
          this.x += Math.cos(angle) * 2;
          this.y += Math.sin(angle) * 2;
        }

        // Wrap around edges
        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;
      }

      draw() {
        ctx.fillStyle = this.type === 0 ? '#1E90FF' : this.type === 1 ? '#F59E0B' : '#FBBF24';
        ctx.beginPath();
        if (this.type === 0) {
          // Wrench shape
          ctx.moveTo(this.x - this.size, this.y);
          ctx.lineTo(this.x, this.y - this.size);
          ctx.lineTo(this.x + this.size, this.y);
          ctx.lineTo(this.x, this.y + this.size);
        } else if (this.type === 1) {
          // Spark shape (cross)
          ctx.moveTo(this.x - this.size, this.y);
          ctx.lineTo(this.x + this.size, this.y);
          ctx.moveTo(this.x, this.y - this.size);
          ctx.lineTo(this.x, this.y + this.size);
        } else {
          // Star shape
          for (let i = 0; i < 5; i++) {
            ctx.lineTo(
              this.x + this.size * Math.cos((i * 4 * Math.PI) / 5),
              this.y + this.size * Math.sin((i * 4 * Math.PI) / 5)
            );
            ctx.lineTo(
              this.x + (this.size / 2) * Math.cos(((i * 4 + 2) * Math.PI) / 5),
              this.y + (this.size / 2) * Math.sin(((i * 4 + 2) * Math.PI) / 5)
            );
          }
        }
        ctx.closePath();
        ctx.globalAlpha = 0.3;
        ctx.fill();
        ctx.globalAlpha = 1;
      }
    }

    const particles = Array.from({ length: 20 }, () => new Particle());

    const animate = () => {
      if (shouldReduceMotion) return; // Skip animation if reduced motion is enabled
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle) => {
        particle.update(mousePosition.x, mousePosition.y);
        particle.draw();
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [mousePosition, shouldReduceMotion]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      aria-hidden="true"
    />
  );
};

// Features Component
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
      alt: 'Application mobile affichant une recherche de techniciens qualifiés',
      reverse: false,
    },
    {
      title: 'Rendez-vous en ligne',
      description: 'Planifiez vos interventions rapidement depuis votre smartphone.',
      color: 'client',
      icon: CalendarIcon,
      image: 'https://images.pexels.com/photos/6843576/pexels-photo-6843576.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Application mobile pour planifier des rendez-vous avec un calendrier',
      reverse: true,
    },
    {
      title: 'Paiement sécurisé',
      description: 'Payez en toute confiance avec notre système de transactions sécurisées.',
      color: 'client',
      icon: LockClosedIcon,
      image: 'https://images.pexels.com/photos/5090876/pexels-photo-5090876.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Interface de paiement sécurisée avec un cadenas',
      reverse: false,
    },
    {
      title: 'Missions flexibles',
      description: 'Choisissez les projets qui correspondent à vos compétences et horaires.',
      color: 'technician',
      icon: WrenchScrewdriverIcon,
      image: 'https://images.pexels.com/photos/162553/construction-worker-tools-helmet-162553.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Technicien sélectionnant des projets sur un chantier',
      reverse: true,
    },
    {
      title: 'Visibilité accrue',
      description: 'Attirez plus de clients grâce à un profil professionnel optimisé.',
      color: 'technician',
      icon: SparklesIcon,
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Profil professionnel numérique pour attirer des clients',
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
      alt: 'Application mobile pour rechercher des techniciens',
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
      alt: 'Interface mobile pour gérer projets et paiements',
      ctaText: 'Commencez maintenant',
      ctaLink: '/download',
      ctaColor: 'client',
    },
  ];

  // Animation Variants
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

  const ctaVariants = {
    hover: {
      scale: 1.05,
      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
      backgroundImage: 'linear-gradient(to right, #1E90FF, #2563EB)', // Dynamic gradient for client
    },
    tap: { scale: 0.95 },
  };

  const technicianCtaVariants = {
    hover: {
      scale: 1.05,
      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
      backgroundImage: 'linear-gradient(to right, #F59E0B, #D97706)', // Dynamic gradient for technician
    },
    tap: { scale: 0.95 },
  };

  return (
    <div >
      <Helmet>
        <title>Fonctionnalités - Connectez-vous avec des techniciens qualifiés</title>
        <meta
          name="description"
          content="Découvrez nos outils puissants pour trouver des techniciens qualifiés, planifier des projets, et gérer vos paiements en toute simplicité."
        />
        <meta property="og:title" content="Fonctionnalités de notre plateforme" />
        <meta
          property="og:description"
          content="Recherchez, planifiez, et payez des techniciens qualifiés facilement avec notre application."
        />
        <meta property="og:image" content={carouselSlides[0].image} />
        <link rel="preload" href={carouselSlides[0].image} as="image" />
        <style>{`
          html {
            cursor: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%231E90FF' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21 15.02v1.98a2 2 0 0 1-2 2h-1.98a2 2 0 0 1-1.414-.586l-3-3a2 2 0 0 1 0-2.828l3-3A2 2 0 0 1 16.586 9H18.5a2 2 0 0 1 2 2v1.02a2 2 0 0 1-.586 1.414l-3 3a2 2 0 0 0-.586 1.414V18h-2a2 2 0 0 1-2-2v-1.98a2 2 0 0 1 .586-1.414l3-3a2 2 0 0 1 1.414-.586H18a2 2 0 0 1 2 2v1.02z'/%3E%3C/svg%3E"), auto;
          }
          .dark html {
            cursor: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23FBBF24' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21 15.02v1.98a2 2 0 0 1-2 2h-1.98a2 2 0 0 1-1.414-.586l-3-3a2 2 0 0 1 0-2.828l3-3A2 2 0 0 1 16.586 9H18.5a2 2 0 0 1 2 2v1.02a2 2 0 0 1-.586 1.414l-3 3a2 2 0 0 0-.586 1.414V18h-2a2 2 0 0 1-2-2v-1.98a2 2 0 0 1 .586-1.414l3-3a2 2 0 0 1 1.414-.586H18a2 2 0 0 1 2 2v1.02z'/%3E%3C/svg%3E"), auto;
          }
        `}</style>
      </Helmet>
     
      <Navbar />
      <PageHeader pageName="FONCTIONNALITES" />
      <section
        ref={sectionRef}
        className="relative w-full pt-16 sm:pt-20 pb-16 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden"
        aria-label="Section des fonctionnalités"
      >
        <ParticleCanvas />
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          {/* Title and Badge */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="text-center mb-16"
          >
            <motion.div
              variants={badgeVariants}
              whileHover="hover"
              className="inline-flex items-center bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full px-4 py-2 mb-6 shadow-md border border-teal-500/20"
            >
              <StarIcon className="w-5 h-5 text-yellow-400 mr-2" />
              <span
                className="text-sm font-semibold text-gray-900 dark:text-white"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Noté 4.8/5 par 10K+ utilisateurs
              </span>
            </motion.div>
            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4"
              style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 'clamp(2rem, 5vw, 3rem)' }}
            >
              Des outils puissants pour vos projets du génie civil
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-basesm:text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Connectez-vous avec des techniciens qualifiés, planifiez facilement, et gérez vos projets en toute simplicité.
            </motion.p>
          </motion.div>

          {/* Feature List */}
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

          {/* Swiper Carousel */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="max-w-6xl mx-auto mb-16"
          >
            <Swiper
              id="swiper-features"
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
                0: { slidesPerView: 1, spaceBetween: 16, effect: 'fade' },
                640: { slidesPerView: 2, spaceBetween: 20, effect: 'slide' },
                1024: { slidesPerView: 3, spaceBetween: 24, effect: 'slide' },
              }}
              className="rounded-lg overflow-hidden"
              aria-label="Carrousel des fonctionnalités"
            >
              {carouselSlides.map((slide) => (
                <SwiperSlide key={slide.title}>
                  <motion.div
                    className="relative bg-white dark:bg-gray-800 text-gray-900 dark:text-white p-6 rounded-lg shadow-lg transform hover:-rotate-1 transition-transform duration-300"
                    whileHover={{ y: -10 }}
                  >
                    <LazyLoadImage
                      src={slide.image}
                      srcSet={`${slide.image}&w=400 400w, ${slide.image}&w=800 800w`}
                      sizes="(max-width: 640px) 400px, 800px"
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
                      className="text-gray-600 dark:text-gray-300 mb-4"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {slide.description}
                    </p>
                    <motion.a
                      href={slide.ctaLink}
                      variants={slide.ctaColor === 'client' ? ctaVariants : technicianCtaVariants}
                      whileHover="hover"
                      whileTap="tap"
                      className={`inline-block px-6 py-2 rounded-lg font-semibold text-white transition-all duration-300 shadow-md bg-gradient-to-r ${
                        slide.ctaColor === 'client'
                          ? 'from-client to-blue-600'
                          : 'from-technician to-yellow-600'
                      }`}
                      aria-label={slide.ctaText}
                    >
                      {slide.ctaText}
                    </motion.a>
                  </motion.div>
                </SwiperSlide>
              ))}
              <div
                className="swiper-button-prev !text-client !w-10 !h-10 after:!text-lg"
                aria-label="Slide précédent"
                aria-controls="swiper-features"
              />
              <div
                className="swiper-button-next !text-client !w-10 !h-10 after:!text-lg"
                aria-label="Slide suivant"
                aria-controls="swiper-features"
              />
            </Swiper>
          </motion.div>

          {/* CTA Buttons */}
          {/* <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="text-center"
          >
            <div className="flex justify-center gap-4 flex-wrap">
              <motion.a
                href="/download"
                variants={ctaVariants}
                whileHover="hover"
                whileTap="tap"
                className="bg-gradient-to-r from-client to-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-md focus:ring-2 focus:ring-client focus:ring-offset-2"
                aria-label="Télécharger l'application"
              >
                Téléchargez l’app
              </motion.a>
              <motion.a
                href="/technicians"
                variants={technicianCtaVariants}
                whileHover="hover"
                whileTap="tap"
                className="bg-gradient-to-r from-technician to-yellow-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-md focus:ring-2 focus:ring-technician focus:ring-offset-2"
                aria-label="Devenir technicien"
              >
                Devenir technicien
              </motion.a>
            </div>
          </motion.div> */}
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <svg className="w-6 h-6 text-client" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>

        {/* Decorative SVG */}
        <svg
          className="absolute bottom-0 left-0 w-full h-16 md:h-24 text-gray-100 dark:text-gray-800"
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
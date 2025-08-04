import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import { BuildingOfficeIcon, CheckCircleIcon, TruckIcon, UserIcon, WrenchScrewdriverIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
import PageHeader from '../components/common/PageHeader';
import Footer from '../components/common/Footer';

// Données des services
const servicesData = [
  {
    id: 'clients',
    title: 'Pour les Clients',
    description: 'Pilotez vos projets de construction avec une simplicité inégalée.',
    image: 'https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=800',
    imageLow: 'https://images.unsplash.com/photo-1611162617213-7d15a376f3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60',
    alt: 'Client utilisant TechServices pour gérer un projet de construction',
    icon: <UserIcon className="w-10 h-10 text-yellow-400 group-hover:scale-110 transition-transform duration-300" />,
    role: 'Maîtrisez vos chantiers de A à Z',
    detailedDescription: 'Avec TechServices, trouvez des techniciens qualifiés, suivez vos chantiers en temps réel grâce à des mises à jour visuelles, et gérez devis et paiements en toute sécurité via une interface intuitive.',
    benefits: [
      { title: 'Demandes Simplifiées', description: 'Envoyez vos besoins à des techniciens ou quincailleries en un clic.' },
      { title: 'Suivi Visuel', description: 'Recevez des photos et mises à jour en temps réel de vos chantiers.' },
      { title: 'Paiements Sécurisés', description: 'Validez devis et paiements directement dans l’app.' },
    ],
    features: [
      {
        title: 'Envoyer des Demandes',
        description: 'Soumettez vos besoins à des techniciens, entreprises du génie civil, ou quincailleries en quelques clics.',
        image: 'https://images.unsplash.com/photo-1611162617213-7d15a376f3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        imageLow: 'https://images.unsplash.com/photo-1611162617213-7d15a376f3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60',
        alt: 'Capture d’écran de l’interface TechServices pour envoyer une demande de projet',
      },
      {
        title: 'Suivi en Temps Réel',
        description: 'Suivez l’avancement de vos chantiers via des mises à jour et des photos partagées par les techniciens.',
        image: 'https://images.unsplash.com/photo-1620121692029-d088224ddc74?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        imageLow: 'https://images.unsplash.com/photo-1620121692029-d088224ddc74?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60',
        alt: 'Capture d’écran du suivi en temps réel d’un chantier sur TechServices',
      },
      {
        title: 'Paiements Sécurisés',
        description: 'Validez les devis et effectuez des paiements sécurisés directement dans l’application.',
        image: 'https://images.unsplash.com/photo-1666875753105-005a9f93b8f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        imageLow: 'https://images.unsplash.com/photo-1666875753105-005a9f93b8f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60',
        alt: 'Capture d’écran du système de paiement sécurisé de TechServices',
      },
    ],
  },
  {
    id: 'techniciens',
    title: 'Pour les Techniciens',
    description: 'Boostez votre productivité sur les chantiers avec des outils modernes.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    imageLow: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60',
    alt: 'Technicien utilisant TechServices sur un chantier',
    icon: <WrenchScrewdriverIcon className="w-10 h-10 text-yellow-400 group-hover:scale-110 transition-transform duration-300" />,
    role: 'Simplifiez la gestion de vos chantiers',
    detailedDescription: 'TechServices vous permet de recevoir des demandes, de naviguer vers les chantiers avec une carte intégrée, et de collaborer avec des quincailleries pour des matériaux livrés à temps.',
    benefits: [
      { title: 'Demandes Instantanées', description: 'Recevez et acceptez des projets via l’app mobile.' },
      { title: 'Navigation Facile', description: 'Trouvez vos chantiers grâce à la carte intégrée.' },
      { title: 'Devis Rapides', description: 'Créez et envoyez des devis en quelques minutes.' },
    ],
    features: [
      {
        title: 'Réception des Demandes',
        description: 'Recevez et acceptez les demandes des clients directement via l’application mobile.',
        image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        imageLow: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60',
        alt: 'Capture d’écran de la réception d’une demande sur TechServices',
      },
      {
        title: 'Navigation Intégrée',
        description: 'Utilisez la carte intégrée pour vous rendre facilement sur les chantiers.',
        image: 'https://images.unsplash.com/photo-1595433707802-6b2626ef1c91?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        imageLow: 'https://images.unsplash.com/photo-1595433707802-6b2626ef1c91?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60',
        alt: 'Capture d’écran de la navigation intégrée de TechServices',
      },
      {
        title: 'Gestion des Devis',
        description: 'Créez et envoyez des devis, et collaborez avec les quincailleries pour les matériaux.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda0e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        imageLow: 'https://images.unsplash.com/photo-1551288049-bebda0e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60',
        alt: 'Capture d’écran de la gestion des devis sur TechServices',
      },
    ],
  },
  {
    id: 'entreprises',
    title: 'Pour les Entreprises du génie civil',
    description: 'Coordonnez vos projets avec une efficacité sans précédent.',
    image: 'https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=800',
    imageLow: 'https://images.unsplash.com/photo-1504307651254-35680f3567cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60',
    alt: 'Chantier géré par une entreprise du génie civil avec TechServices',
    icon: <BuildingOfficeIcon className="w-10 h-10 text-yellow-400 group-hover:scale-110 transition-transform duration-300" />,
    role: 'Orchestrez vos équipes et projets',
    detailedDescription: 'TechServices permet aux entreprises du génie civil de recevoir des demandes, de planifier des rendez-vous, et de coordonner techniciens et quincailleries pour des projets livrés dans les délais.',
    benefits: [
      { title: 'Gestion Centralisée', description: 'Recevez les demandes via l’app web ou mobile.' },
      { title: 'Planification Optimale', description: 'Assignez tâches et rendez-vous facilement.' },
      { title: 'Coordination Fluide', description: 'Collaborez avec techniciens et quincailleries.' },
    ],
    features: [
      {
        title: 'Réception des Demandes',
        description: 'Accédez aux demandes des clients via l’application web ou mobile.',
        image: 'https://images.unsplash.com/photo-1504307651254-35680f3567cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        imageLow: 'https://images.unsplash.com/photo-1504307651254-35680f3567cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60',
        alt: 'Capture d’écran de la réception des demandes sur TechServices',
      },
      {
        title: 'Planification',
        description: 'Planifiez des rendez-vous avec les clients et assignez des tâches aux équipes.',
        image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        imageLow: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60',
        alt: 'Capture d’écran de la planification sur TechServices',
      },
      {
        title: 'Coordination',
        description: 'Collaborez avec techniciens et quincailleries pour une exécution fluide.',
        image: 'https://images.unsplash.com/photo-1577412561597-a0c7d2c5f3ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        imageLow: 'https://images.unsplash.com/photo-1577412561597-a0c7d2c5f3ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60',
        alt: 'Capture d’écran de la coordination sur TechServices',
      },
    ],
  },
  {
    id: 'quincailleries',
    title: 'Pour les Quincailleries',
    description: 'Fournissez des matériaux rapidement et efficacement.',
    image: 'https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=800',
    imageLow: 'https://images.unsplash.com/photo-1586528116311-ad8dd3a7a7f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60',
    alt: 'Quincaillerie intégrée à TechServices',
    icon: <TruckIcon className="w-10 h-10 text-yellow-400 group-hover:scale-110 transition-transform duration-300" />,
    role: 'Livrez des matériaux là où ça compte',
    detailedDescription: 'TechServices aide les quincailleries à traiter les commandes, envoyer des factures proforma, et organiser des livraisons rapides vers les chantiers.',
    benefits: [
      { title: 'Commandes Simplifiées', description: 'Recevez des bons de commande sans prix.' },
      { title: 'Facturation Rapide', description: 'Envoyez des factures proforma en un clic.' },
      { title: 'Livraisons Efficaces', description: 'Livrez directement sur les chantiers.' },
    ],
    features: [
      {
        title: 'Réception des Commandes',
        description: 'Recevez des bons de commande sans prix depuis les techniciens ou entreprises.',
        image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3a7a7f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        imageLow: 'https://images.unsplash.com/photo-1586528116311-ad8dd3a7a7f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60',
        alt: 'Capture d’écran de la réception des commandes sur TechServices',
      },
      {
        title: 'Facturation',
        description: 'Envoyez des factures proforma avec vos prix directement via l’application.',
        image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        imageLow: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60',
        alt: 'Capture d’écran de la facturation sur TechServices',
      },
      {
        title: 'Livraison',
        description: 'Organisez des livraisons rapides de matériaux vers les chantiers.',
        image: 'https://images.unsplash.com/photo-1586528116022-aeda1613f7e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        imageLow: 'https://images.unsplash.com/photo-1586528116022-aeda1613f7e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60',
        alt: 'Capture d’écran de la gestion des livraisons sur TechServices',
      },
    ],
  },
];

// Variants d'animation
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const ctaVariants = {
  hover: { scale: 1.05, backgroundImage: 'linear-gradient(to right, #FBBF24, #FEF08A)', boxShadow: '0 0 20px rgba(251, 191, 36, 0.5)' },
  tap: { scale: 0.95 },
};

const carouselVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, x: -100, transition: { duration: 0.5 } },
};

const ServiceDetails = () => {
  const { id } = useParams();
  const service = servicesData.find((s) => s.id === id);
  const [currentFeature, setCurrentFeature] = useState(0);

  const handleNext = () => {
    setCurrentFeature((prev) => (prev + 1) % (service?.features.length || 1));
  };

  const handlePrev = () => {
    setCurrentFeature((prev) => (prev - 1 + (service?.features.length || 1)) % (service?.features.length || 1));
  };

  if (!service) {
    return (
      <main className="bg-gray-50">
        <Navbar />
        <PageHeader pageName="SERVICE INTROUVABLE" />
        <section className="container mx-auto px-6 py-28 text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-4 font-montserrat">Service non trouvé</h2>
          <p className="text-gray-700 mb-8 font-inter">Désolé, la solution demandée n’existe pas.</p>
          <Link
            to="/services"
            className="inline-block px-10 py-4 bg-yellow-400 text-blue-900 font-semibold rounded-full shadow-lg hover:bg-yellow-300 font-inter"
          >
            Retour aux Services
          </Link>
        </section>
        <Footer />
      </main>
    );
  }

  return (
    <>
      {/* Métadonnées SEO */}
      <head>
        <title>{`${service.title} - TechServices`}</title>
        <meta name="description" content={service.detailedDescription} />
        <meta name="keywords" content={`TechServices, ${service.title}, du génie civil, construction, chantiers, gestion de projets, techniciens, quincailleries`} />
        <meta property="og:title" content={`${service.title} - TechServices`} />
        <meta property="og:description" content={service.detailedDescription} />
        <meta property="og:image" content={service.image} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://www.techservices.com/services/${service.id}`} />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            serviceType: `Solution génie civil pour ${service.title}`,
            provider: {
              '@type': 'Organization',
              name: 'TechServices',
              logo: 'https://www.techservices.com/logo.png',
            },
            description: service.detailedDescription,
            image: service.image,
            areaServed: 'Monde',
            offers: {
              '@type': 'Offer',
              priceCurrency: 'USD',
              price: '0',
              description: 'Accès gratuit à TechServices avec fonctionnalités premium disponibles via abonnement.',
            },
          })}
        </script>
      </head>

      <main className="bg-gray-50">
        <Navbar />
        <PageHeader pageName={`DÉTAILS - ${service.title.toUpperCase()}`} />

        {/* Hero Section avec Parallaxe */}
        <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-blue-900 to-blue-600 text-white overflow-hidden">
          <div className="absolute inset-0 bg-noise bg-[length:200px] opacity-10" />
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-transparent"
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          />
          <div className="container mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="flex items-center mb-6"
              >
                {service.icon}
                <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] font-bold ml-4 font-montserrat leading-tight">
                  {service.title}
                </h1>
              </motion.div>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-[clamp(1rem,2vw,1.25rem)] max-w-lg mb-8 font-inter font-medium"
              >
                {service.detailedDescription}
              </motion.p>
              <motion.a
                href="#features"
                className="inline-block px-10 py-4 bg-yellow-400 text-blue-900 font-semibold rounded-full shadow-lg focus:ring-4 focus:ring-yellow-500/50 focus:outline-none font-inter relative overflow-hidden"
                variants={ctaVariants}
                whileHover="hover"
                whileTap="tap"
                aria-label={`Découvrir les fonctionnalités pour ${service.title}`}
              >
                <span className="relative z-10">Explorer les Fonctionnalités</span>
                <motion.div
                  className="absolute inset-0 bg-yellow-300 opacity-0"
                  animate={{ opacity: [0, 0.5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              </motion.a>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <LazyLoadImage
                src={service.image}
                srcSet={`
                  ${service.imageLow} 300w,
                  ${service.image} 1200w
                `}
                sizes="(max-width: 600px) 300px, 1200px"
                alt={service.alt}
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
                effect="opacity"
                placeholderSrc={service.imageLow}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent rounded-2xl" />
              <motion.div
                className="absolute -inset-2 bg-yellow-400/20 rounded-2xl"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              />
            </motion.div>
          </div>
        </section>

        {/* Votre Rôle dans TechServices */}
        <section className="relative bg-white py-28">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-100/20 to-yellow-100/20" />
          <div className="container mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[clamp(2rem,4vw,3rem)] font-bold text-center text-blue-900 mb-12 font-montserrat"
            >
              Votre Rôle dans TechServices
            </motion.h2>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              <div className="flex flex-col justify-center">
                <motion.div variants={itemVariants} className="flex items-center mb-6">
                  {service.icon}
                  <h3 className="text-2xl font-semibold text-blue-900 ml-3 font-montserrat">{service.role}</h3>
                </motion.div>
                <motion.p variants={itemVariants} className="text-gray-700 mb-8 font-inter text-lg">
                  {service.detailedDescription}
                </motion.p>
                <motion.ul variants={containerVariants} className="grid grid-cols-1 gap-4">
                  {service.benefits.map((benefit, i) => (
                    <motion.li
                      key={i}
                      variants={itemVariants}
                      className="flex items-start bg-gray-50 p-4 rounded-lg shadow-sm hover:bg-yellow-50 hover:shadow-md transition-all duration-300"
                    >
                      <CheckCircleIcon className="w-6 h-6 text-yellow-400 mr-3 flex-shrink-0" />
                      <div>
                        <span className="font-semibold text-blue-900 font-inter">{benefit.title}</span>
                        <p className="text-gray-700 font-inter">{benefit.description}</p>
                      </div>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
              <motion.div variants={itemVariants} className="relative">
                <LazyLoadImage
                  src={service.image}
                  srcSet={`
                    ${service.imageLow} 300w,
                    ${service.image} 1200w
                  `}
                  sizes="(max-width: 600px) 300px, 1200px"
                  alt={service.alt}
                  className="w-full h-[400px] object-cover rounded-2xl shadow-xl"
                  effect="opacity"
                  placeholderSrc={service.imageLow}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent rounded-2xl" />
                <motion.div
                  className="absolute top-4 right-4 bg-yellow-400 text-blue-900 px-4 py-2 rounded-full font-inter font-semibold"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                >
                  {service.title}
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Carrousel de Fonctionnalités */}
        <section className="relative bg-gray-100 py-28">
          <div className="absolute inset-0 bg-noise bg-[length:200px] opacity-5" />
          <div className="container mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[clamp(2rem,4vw,3rem)] font-bold text-center text-blue-900 mb-12 font-montserrat"
            >
              Découvrez les Fonctionnalités
            </motion.h2>
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentFeature}
                  variants={carouselVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                >
                  <div className="relative">
                    <LazyLoadImage
                      src={service.features[currentFeature].image}
                      srcSet={`
                        ${service.features[currentFeature].imageLow} 300w,
                        ${service.features[currentFeature].image} 1200w
                      `}
                      sizes="(max-width: 600px) 300px, 1200px"
                      alt={service.features[currentFeature].alt}
                      className="w-full h-[400px] object-cover rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-500"
                      effect="opacity"
                      placeholderSrc={service.features[currentFeature].imageLow}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent rounded-2xl" />
                    <motion.div
                      className="absolute bottom-4 left-4 bg-blue-900/80 text-white px-4 py-2 rounded-full font-inter text-lg"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      {service.features[currentFeature].title}
                    </motion.div>
                  </div>
                  <div className="flex flex-col justify-center">
                    <h3 className="text-2xl font-semibold text-blue-900 mb-4 font-montserrat">
                      {service.features[currentFeature].title}
                    </h3>
                    <p className="text-gray-700 mb-6 font-inter text-lg">
                      {service.features[currentFeature].description}
                    </p>
                    <motion.a
                      href="#download"
                      className="inline-block px-8 py-3 bg-yellow-400 text-blue-900 font-semibold rounded-full shadow-lg focus:ring-4 focus:ring-yellow-500/50 focus:outline-none font-inter w-max"
                      variants={ctaVariants}
                      whileHover="hover"
                      whileTap="tap"
                    >
                      Essayez Maintenant
                    </motion.a>
                  </div>
                </motion.div>
              </AnimatePresence>
              <button
                onClick={handlePrev}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-blue-900/80 text-white p-3 rounded-full hover:bg-blue-900 focus:ring-4 focus:ring-blue-500/50"
                aria-label="Fonctionnalité précédente"
              >
                <ChevronLeftIcon className="w-6 h-6" />
              </button>
              <button
                onClick={handleNext}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-blue-900/80 text-white p-3 rounded-full hover:bg-blue-900 focus:ring-4 focus:ring-blue-500/50"
                aria-label="Fonctionnalité suivante"
              >
                <ChevronRightIcon className="w-6 h-6" />
              </button>
            </div>
            <div className="flex justify-center gap-4 mt-8">
              {service.features.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentFeature(i)}
                  className={`w-3 h-3 rounded-full ${currentFeature === i ? 'bg-yellow-400' : 'bg-gray-400'} hover:bg-yellow-300 transition-colors duration-300`}
                  aria-label={`Aller à la fonctionnalité ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Pourquoi Choisir TechServices */}
        <section className="relative bg-gradient-to-br from-blue-600 to-blue-900 text-white py-28">
          <div className="absolute inset-0 bg-noise bg-[length:200px] opacity-10" />
          <div className="container mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[clamp(2rem,4vw,3rem)] font-bold text-center mb-12 font-montserrat"
            >
              Pourquoi Choisir TechServices pour {service.title} ?
            </motion.h2>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {service.benefits.map((benefit, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="group bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:bg-yellow-400/20 transition-all duration-300"
                  whileHover={{ y: -10, boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)' }}
                >
                  <CheckCircleIcon className="w-8 h-8 text-yellow-400 mb-4 group-hover:rotate-12 transition-transform duration-300" />
                  <h3 className="text-xl font-semibold mb-2 font-montserrat">{benefit.title}</h3>
                  <p className="text-gray-200 font-inter">{benefit.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="relative bg-gradient-to-br from-yellow-400 to-blue-600 py-28 overflow-hidden">
          <div className="absolute inset-0 bg-noise bg-[length성화

System: 200px] opacity-10" />
          <motion.div
            className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 to-yellow-400/20"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          />
          <div className="container mx-auto px-6 text-center relative z-10">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[clamp(2rem,4vw,3rem)] font-bold text-white mb-6 font-montserrat"
            >
              Prêt à Transformer Vos Projets avec {service.title} ?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-[clamp(1rem,2vw,1.25rem)] text-gray-100 max-w-2xl mx-auto mb-8 font-inter"
            >
              Téléchargez TechServices dès maintenant et découvrez une nouvelle façon de gérer vos chantiers, collaborer avec vos équipes, et livrer des projets exceptionnels.
            </motion.p>
            <motion.a
              href="https://techservice-bxty.vercel.app/"
              className="inline-block px-12 py-4 bg-blue-900 text-yellow-400 font-semibold rounded-full shadow-lg focus:ring-4 focus:ring-yellow-500/50 focus:outline-none font-inter relative overflow-hidden"
              variants={ctaVariants}
              whileHover="hover"
              whileTap="tap"
              aria-label="Télécharger l’application TechServices"
            >
              <span className="relative z-10">Commencer en tant que entreprise </span>
              <motion.div
                className="absolute inset-0 bg-yellow-400 opacity-0"
                animate={{ opacity: [0, 0.3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </motion.a>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex justify-center gap-6 mt-10"
            >
              <a
                href="https://www.apple.com/app-store/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Télécharger sur l'App Store"
              >
                <LazyLoadImage
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  alt="Télécharger sur l'App Store"
                  className="h-16 hover:scale-110 transition-transform duration-300"
                  effect="opacity"
                />
              </a>
              <a
                href="https://play.google.com/store"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Obtenir sur Google Play"
              >
                <LazyLoadImage
                  src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                  alt="Obtenir sur Google Play"
                  className="h-16 hover:scale-110 transition-transform duration-300"
                  effect="opacity"
                />
              </a>
            </motion.div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default ServiceDetails;
import { motion } from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';
import { StarIcon, WrenchScrewdriverIcon, TruckIcon, BuildingOfficeIcon, UserIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
import PageHeader from '../components/common/PageHeader';
import Footer from '../components/common/Footer';

// Données des services avec images optimisées
const servicesData = [
  {
    id: 'clients',
    title: 'Pour les Clients',
    description: 'Trouvez des artisans qualifiés, suivez vos chantiers en temps réel, et gérez vos devis et paiements facilement.',
    image: 'https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=800',
    imageLow: 'https://images.unsplash.com/photo-1611162617213-7d15a376f3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60',
    alt: 'Client utilisant l’application TechServices sur un smartphone pour gérer un projet de construction',
    icon: <UserIcon className="w-8 h-8 text-yellow-400 group-hover:scale-110 transition-transform duration-300" />,
    role: 'Initiez et gérez vos projets de construction en toute simplicité.',
    detailedDescription: 'En tant que client, TechServices vous permet de trouver des artisans qualifiés, de suivre l’avancement de vos chantiers en temps réel, et de gérer vos devis et paiements via une interface intuitive.',
    benefits: [
      'Envoyez des demandes aux artisans, entreprises, ou quincailleries',
      'Suivez l’avancement de vos chantiers en temps réel',
      'Validez les devis et payez en toute sécurité',
    ],
    features: [
      {
        title: 'Envoyer des Demandes',
        description: 'Soumettez vos besoins à des artisans, entreprises BTP, ou quincailleries en quelques clics.',
        image: 'https://images.unsplash.com/photo-1611162617213-7d15a376f3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        imageLow: 'https://images.unsplash.com/photo-1611162617213-7d15a376f3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60',
        alt: 'Capture d’écran de l’interface TechServices pour envoyer une demande de projet',
      },
      {
        title: 'Suivi en Temps Réel',
        description: 'Suivez l’avancement de vos chantiers via des mises à jour et des photos partagées par les artisans.',
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
    description: 'Recevez des demandes, gérez vos chantiers, et collaborez avec les quincailleries pour des projets réussis.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    imageLow: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60',
    alt: 'Technicien travaillant sur un chantier avec des outils, utilisant l’application TechServices',
    icon: <WrenchScrewdriverIcon className="w-8 h-8 text-yellow-400 group-hover:scale-110 transition-transform duration-300" />,
    role: 'Gérez vos chantiers et collaborez efficacement avec les clients et quincailleries.',
    detailedDescription: 'TechServices aide les techniciens à recevoir des demandes, à organiser leurs chantiers, et à collaborer avec les quincailleries pour obtenir les matériaux nécessaires.',
    benefits: [
      'Recevez et acceptez les demandes via l’app mobile',
      'Naviguez vers les chantiers avec la carte intégrée',
      'Créez des devis, envoyez-les aux quincailleries, et demandez des paiements',
    ],
    features: [
      {
        title: 'Réception des Demandes',
        description: 'Recevez et acceptez les demandes des clients directement via l’application mobile.',
        image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        imageLow: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60',
        alt: 'Capture d’écran de la réception d’une demande sur l’application TechServices',
      },
      {
        title: 'Navigation Intégrée',
        description: 'Utilisez la carte intégrée pour vous rendre facilement sur les chantiers.',
        image: 'https://images.unsplash.com/photo-1595433707802-6b2626ef1c91?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        imageLow: 'https://images.unsplash.com/photo-1595433707802-6b2626ef1c91?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60',
        alt: 'Capture d’écran de la fonctionnalité de navigation intégrée de TechServices',
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
    title: 'Pour les Entreprises BTP',
    description: 'Gérez les demandes des clients et coordonnez vos projets avec efficacité.',
    image: 'https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=800',
    imageLow: 'https://images.unsplash.com/photo-1504307651254-35680f3567cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60',
    alt: 'Chantier de construction géré par une entreprise BTP utilisant la plateforme TechServices',
    icon: <BuildingOfficeIcon className="w-8 h-8 text-yellow-400 group-hover:scale-110 transition-transform duration-300" />,
    role: 'Coordonnez vos projets et gérez les demandes des clients efficacement.',
    detailedDescription: 'TechServices permet aux entreprises BTP de recevoir des demandes, de planifier des rendez-vous, et de coordonner leurs équipes et les quincailleries pour des projets réussis.',
    benefits: [
      'Recevez les demandes des clients via l’application web',
      'Planifiez des rendez-vous avec les clients',
      'Coordonnez avec techniciens et quincailleries',
    ],
    features: [
      {
        title: 'Réception des Demandes',
        description: 'Accédez aux demandes des clients via l’application web ou mobile.',
        image: 'https://images.unsplash.com/photo-1504307651254-35680f3567cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        imageLow: 'https://images.unsplash.com/photo-1504307651254-35680f3567cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60',
        alt: 'Capture d’écran de la réception des demandes sur l’application TechServices pour entreprises',
      },
      {
        title: 'Planification',
        description: 'Planifiez des rendez-vous avec les clients et assignez des tâches aux équipes.',
        image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        imageLow: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60',
        alt: 'Capture d’écran de la planification des rendez-vous sur TechServices',
      },
      {
        title: 'Coordination',
        description: 'Collaborez avec techniciens et quincailleries pour une exécution fluide.',
        image: 'https://images.unsplash.com/photo-1577412561597-a0c7d2c5f3ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        imageLow: 'https://images.unsplash.com/photo-1577412561597-a0c7d2c5f3ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60',
        alt: 'Capture d’écran de la coordination des équipes sur TechServices',
      },
    ],
  },
  {
    id: 'quincailleries',
    title: 'Pour les Quincailleries',
    description: 'Traitez les commandes de matériaux et organisez des livraisons rapides vers les chantiers.',
    image: 'https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=800',
    imageLow: 'https://images.unsplash.com/photo-1586528116311-ad8dd3a7a7f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60',
    alt: 'Quincaillerie avec des matériaux de construction, intégrée à la plateforme TechServices',
    icon: <TruckIcon className="w-8 h-8 text-yellow-400 group-hover:scale-110 transition-transform duration-300" />,
    role: 'Fournissez des matériaux et organisez des livraisons rapides vers les chantiers.',
    detailedDescription: 'TechServices permet aux quincailleries de traiter les commandes de matériaux, d’envoyer des factures, et de livrer directement sur les chantiers.',
    benefits: [
      'Recevez des bons de commande sans prix',
      'Envoyez des factures proforma avec vos prix',
      'Livrez les matériaux directement sur les chantiers',
    ],
    features: [
      {
        title: 'Réception des Commandes',
        description: 'Recevez des bons de commande sans prix depuis les techniciens ou entreprises.',
        image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3a7a7f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
        imageLow: 'https://images.unsplash.com/photo-1586528116311-ad8dd3a7a7f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=60',
        alt: 'Capture d’écran de la réception des commandes sur TechServices pour quincailleries',
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

// Données des statistiques
const statsData = [
  { value: 50000, label: 'Téléchargements', suffix: '+', icon: <StarIcon className="w-8 h-8 text-yellow-400" /> },
  { value: 20000, label: 'Utilisateurs Actifs', suffix: '+', icon: <StarIcon className="w-8 h-8 text-yellow-400" /> },
  { value: 4.8, label: 'Note Moyenne', suffix: '/5', icon: <StarIcon className="w-8 h-8 text-yellow-400" /> },
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
  hover: { scale: 1.05, backgroundImage: 'linear-gradient(to right, #FBBF24, #FEF08A)' },
  tap: { scale: 0.95 },
};

const Services = () => {
  return (
    <>
      {/* Métadonnées SEO */}
      <head>
        <title>Services TechServices - Plateforme BTP Moderne</title>
        <meta
          name="description"
          content="TechServices connecte clients, artisans, entreprises BTP, et quincailleries pour des projets de construction fluides et efficaces."
        />
        <meta
          name="keywords"
          content="TechServices, application BTP, artisans, quincailleries, entreprises BTP, construction, chantiers, gestion de projets"
        />
        <meta property="og:title" content="Services TechServices - Plateforme BTP" />
        <meta
          property="og:description"
          content="Optimisez vos chantiers avec TechServices : connectez clients, artisans, entreprises, et quincailleries."
        />
        <meta
          property="og:image"
          content="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            serviceType: 'Plateforme BTP',
            provider: {
              '@type': 'Organization',
              name: 'TechServices',
            },
            description:
              'TechServices connecte clients, artisans, entreprises BTP, et quincailleries pour des projets de construction fluides.',
          })}
        </script>
      </head>

      <main className="bg-gray-50">
        <Navbar />
        <PageHeader pageName="SERVICES" />

        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-blue-900 to-blue-600 text-white overflow-hidden">
          <div className="absolute inset-0 bg-noise bg-[length:200px] opacity-10" />
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-br from-yellow-400/20 to-transparent hidden lg:block" />
          <div className="container mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-[clamp(2.5rem,6vw,4.5rem)] font-bold mb-4 font-montserrat leading-tight"
              >
                Révolutionnez Vos Chantiers avec TechServices
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-[clamp(1rem,2vw,1.25rem)] max-w-lg mb-8 font-inter font-medium"
              >
                Connectez clients, artisans, entreprises BTP, et quincailleries pour des projets fluides, livrés à temps.
              </motion.p>
              <motion.a
                href="#download"
                className="inline-block px-10 py-4 bg-yellow-400 text-blue-900 font-semibold rounded-full shadow-lg hover:bg-yellow-300 focus:ring-4 focus:ring-yellow-500/50 focus:outline-none font-inter"
                variants={ctaVariants}
                whileHover="hover"
                whileTap="tap"
                aria-label="Découvrir l’application TechServices"
              >
                Téléchargements sur Android et iOS
              </motion.a>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative hidden lg:block"
            >
              <LazyLoadImage
                src="https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=800"
                srcSet="
                  https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=600 600w,
                  https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=1200 1200w
                "
                sizes="(max-width: 600px) 600px, 1200px"
                alt="Chantier de construction moderne utilisant TechServices"
                className="w-full h-[450px] object-cover rounded-2xl shadow-xl"
                effect="opacity"
                placeholderSrc="https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent rounded-2xl" />
            </motion.div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="container mx-auto px-6 py-28 relative">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[clamp(2rem,4vw,3rem)] font-bold text-center text-blue-900 mb-16 font-montserrat"
          >
            Solutions pour Tous les Acteurs du BTP
          </motion.h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {servicesData.map((service) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-transparent hover:border-yellow-400"
                whileHover={{ y: -8 }}
              >
                <Link to={`/services/${service.id}`}>
                  <div className="relative overflow-hidden rounded-t-2xl">
                    <LazyLoadImage
                      src={service.image}
                      srcSet={`
                        ${service.imageLow} 300w,
                        ${service.image} 1200w
                      `}
                      sizes="(max-width: 600px) 300px, 1200px"
                      alt={service.alt}
                      className="w-full h-60 object-cover transform group-hover:scale-105 transition-transform duration-500"
                      effect="opacity"
                      placeholderSrc={service.imageLow}
                    />
                    <div className="absolute top-4 left-4 bg-blue-900/80 p-2 rounded-full">{service.icon}</div>
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-blue-900 mb-3 font-montserrat">{service.title}</h3>
                    <p className="text-gray-700 mb-4 font-inter">{service.description}</p>
                    <span className="text-yellow-400 font-medium hover:underline focus:outline-none focus:ring-4 focus:ring-yellow-500/50 font-inter">
                      En savoir plus
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Statistiques */}
        <section className="container mx-auto px-6 py-28 text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[clamp(2rem,4vw,3rem)] font-bold text-blue-900 mb-16 font-montserrat"
          >
            TechServices en Chiffres
          </motion.h2>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {statsData.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-2xl shadow-lg p-8 border-t-4 border-yellow-400 hover:bg-yellow-50 transition-colors duration-300"
              >
                <div className="flex justify-center mb-4 transform hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <h3 className="text-4xl font-bold text-blue-900 mb-2 font-montserrat">
                  {stat.value.toLocaleString()}
                  {stat.suffix}
                </h3>
                <p className="text-gray-700 font-inter">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* CTA Section */}
        <section className="relative bg-gradient-to-br from-blue-600 to-yellow-400 text-white py-28 overflow-hidden">
          <div className="absolute inset-0 bg-noise bg-[length:200px] opacity-10" />
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-yellow-400/20 to-transparent" />
          <div className="container mx-auto px-6 text-center relative z-10">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[clamp(2rem,4vw,3rem)] font-bold mb-4 font-montserrat"
            >
              Prenez le Contrôle de Vos Chantiers
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-[clamp(1rem,2vw,1.25rem)] max-w-2xl mx-auto mb-8 font-inter"
            >
              Téléchargez TechServices pour connecter vos équipes, optimiser vos chantiers, et livrer vos projets à temps.
            </motion.p>
            <motion.a
              href="#download"
              className="inline-block px-10 py-4 bg-yellow-400 text-blue-900 font-semibold rounded-full shadow-lg hover:bg-yellow-300 focus:ring-4 focus:ring-yellow-500/50 focus:outline-none font-inter"
              variants={ctaVariants}
              whileHover="hover"
              whileTap="tap"
              aria-label="Télécharger l’application TechServices"
            >
              Téléchargez l’App
            </motion.a>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex justify-center gap-6 mt-8"
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
                  className="h-14 hover:scale-105 transition-transform duration-300"
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
                  className="h-14 hover:scale-105 transition-transform duration-300"
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

export default Services;
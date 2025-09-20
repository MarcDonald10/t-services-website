import { motion, useInView } from "framer-motion";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useRef, useState } from "react";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import '../App.css';

// Section Fonctionnalités Interactive
const FonctionnalitesSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" });

  // Data des fonctionnalités avec srcSet pour les images de fond
  const fonctionnalites = [
    {
      numero: 1,
      titre: "Recherche de technicien",
      texte:
        "Avec TechServices, trouvez facilement un technicien qualifié près de chez vous. En quelques clics seulement, accédez à des professionnels fiables et disponibles pour répondre à vos besoins.",
      imagePhone: "/fonctionnalites/screen1.jpg",
      backgroundImage: {
        default: "/fonctionnalites/background1.jpg",
        webp: "/fonctionnalites/background1.webp",
        srcSet: `/fonctionnalites/background1-sm.webp 640w, /fonctionnalites/background1-md.webp 1024w, /fonctionnalites/background1-lg.webp 1920w`,
      },
    },
    {
      numero: 2,
      titre: "Suivi des demandes",
      texte:
        "Gardez le contrôle sur vos demandes grâce à un suivi en temps réel. Vous savez toujours où en est votre intervention.",
      imagePhone: "/fonctionnalites/screen2.jpg",
      backgroundImage: {
        default: "/fonctionnalites/background2.jpg",
        webp: "/fonctionnalites/background2.webp",
        srcSet: `/fonctionnalites/background2-sm.webp 640w, /fonctionnalites/background2-md.webp 1024w, /fonctionnalites/background2-lg.webp 1920w`,
      },
    },
    {
      numero: 3,
      titre: "Gestion du profil",
      texte:
        "Personnalisez votre profil et vos préférences pour une expérience sur mesure. Vos informations sont toujours sécurisées.",
      imagePhone: "/fonctionnalites/screen3.jpg",
      backgroundImage: {
        default: "/fonctionnalites/background3.jpg",
        webp: "/fonctionnalites/background3.webp",
        srcSet: `/fonctionnalites/background3-sm.webp 640w, /fonctionnalites/background3-md.webp 1024w, /fonctionnalites/background3-lg.webp 1920w`,
      },
    },
    {
      numero: 4,
      titre: "Historique et Paiement",
      texte:
        "Consultez l'historique de vos interventions et gérez vos paiements en toute simplicité.",
      imagePhone: "/fonctionnalites/screen4.jpg",
      backgroundImage: {
        default: "/fonctionnalites/background4.jpg",
        webp: "/fonctionnalites/background4.webp",
        srcSet: `/fonctionnalites/background4-sm.webp 640w, /fonctionnalites/background4-md.webp 1024w, /fonctionnalites/background4-lg.webp 1920w`,
      },
    },
  ];

  const fonctionnaliteActive = fonctionnalites[activeTab];

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden bg-gray-200"
    >
      {/* Image de fond */}
      <div className="absolute inset-0">
        <motion.div
          key={fonctionnaliteActive.numero}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <picture>
            <source
              srcSet={fonctionnaliteActive.backgroundImage.srcSet}
              type="image/webp"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 1920px"
            />
            <LazyLoadImage
              src={fonctionnaliteActive.backgroundImage.default}
              alt={`Background ${fonctionnaliteActive.titre}`}
              className="w-full h-full object-cover object-center background1"
              effect="blur"
              loading="eager"
              placeholderSrc="/placeholder.jpg"
            />
          </picture>
          <div className="absolute inset-0 bg-black/30"></div>
        </motion.div>
      </div>

      {/* Contenu principal */}
      <div className="relative z-10 min-h-screen flex items-center py-6 sm:py-8 lg:py-12 xl:py-16">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 xl:px-8 w-full">
          {/* Carte glassmorphism améliorée */}
          <div className="relative bg-white/8 backdrop-blur-xl rounded-2xl sm:rounded-3xl shadow-2xl border border-white/20 p-4 sm:p-6 lg:p-8 xl:p-10 overflow-hidden">
            {/* Couche glassmorphism principale */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-white/5 to-transparent rounded-2xl sm:rounded-3xl"></div>
            
            {/* Effet de brillance en haut */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
            
            {/* Effet lumineux subtil sur les bords */}
            <div className="absolute inset-0 rounded-2xl sm:rounded-3xl ring-1 ring-inset ring-white/20"></div>
            
            {/* Particules flottantes (cachées sur très petit écran) */}
            <div className="hidden sm:block absolute top-4 right-8 w-2 h-2 bg-white/20 rounded-full animate-pulse"></div>
            <div className="hidden sm:block absolute top-8 sm:top-12 right-12 sm:right-16 w-1 h-1 bg-blue-200/30 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
            <div className="hidden sm:block absolute bottom-6 sm:bottom-8 left-8 sm:left-12 w-1.5 h-1.5 bg-white/15 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
            
            {/* Contenu principal */}
            <div className="relative z-10">
              {/* Grille principale */}
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 items-center">
                {/* GAUCHE - Numéros (caché sur mobile et tablet) */}
                <div className="hidden xl:flex flex-col space-y-4 lg:space-y-6 items-center">
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col gap-3 sm:gap-4 lg:gap-6 items-center"
                  >
                    {fonctionnalites.map((fonc, index) => (
                      <motion.button
                        key={fonc.numero}
                        onClick={() => setActiveTab(index)}
                        aria-label={`Ouvrir la fonctionnalité ${fonc.titre}`}
                        aria-current={activeTab === index ? "true" : "false"}
                        className={`w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full flex items-center justify-center text-sm sm:text-base lg:text-lg xl:text-xl font-bold transition-all duration-300 backdrop-blur-sm ${
                          activeTab === index
                            ? "bg-blue-600 text-white shadow-2xl scale-110 ring-2 ring-blue-300"
                            : "bg-white/90 text-blue-600 hover:bg-white hover:scale-105 shadow-lg"
                        }`}
                        whileHover={{ scale: activeTab === index ? 1.15 : 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {fonc.numero}
                      </motion.button>
                    ))}
                  </motion.div>
                </div>

                {/* DROITE - Texte & Téléphone */}
                <div className="lg:col-span-2 xl:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 xl:gap-12 items-center">
                  {/* Téléphone (premier sur mobile) */}
                  <div className="order-1 md:order-2 flex justify-center">
                    <motion.div
                      key={fonctionnaliteActive.numero}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
                      className="relative w-full max-w-[180px] sm:max-w-[200px] md:max-w-[220px] lg:max-w-[260px] xl:max-w-[300px]"
                    >
                      <div className="relative bg-black rounded-[1.5rem] sm:rounded-[2rem] p-1.5 sm:p-2 lg:p-3 shadow-2xl">
                        <div className="absolute top-2 sm:top-3 lg:top-4 left-1/2 transform -translate-x-1/2 w-16 sm:w-20 lg:w-24 h-4 sm:h-5 lg:h-6 bg-black rounded-full z-20"></div>
                        <div className="relative bg-black rounded-[1.2rem] sm:rounded-[1.5rem] overflow-hidden mt-4 sm:mt-6 lg:mt-8">
                          <div className="w-full aspect-[9/19.5] bg-white relative">
                            <LazyLoadImage
                              src={fonctionnaliteActive.imagePhone}
                              alt={`${fonctionnaliteActive.titre} - Interface TechServices`}
                              className="w-full h-full object-cover object-top"
                              effect="blur"
                              wrapperClassName="w-full h-full"
                              placeholderSrc="/placeholder-phone.jpg"
                              sizes="(max-width: 640px) 60vw, (max-width: 1024px) 40vw, (max-width: 1280px) 30vw, 400px"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="absolute bg-blue-400/20 rounded-[2rem] sm:rounded-[2.5rem] blur-xl -z-10 opacity-60 -inset-3 sm:-inset-4 lg:-inset-6"></div>
                    </motion.div>
                  </div>

                  {/* Texte (deuxième sur mobile) */}
                  <div className="order-2 md:order-1 text-center md:text-left">
                    <motion.div
                      key={fonctionnaliteActive.numero}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                      className="text-white"
                    >
                      <h2 className="font-bold mb-3 sm:mb-4 lg:mb-6 leading-tight text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl drop-shadow-lg">
                        {fonctionnaliteActive.titre}
                      </h2>
                      <div className="mb-4 sm:mb-5 lg:mb-6">
                        <p className="leading-relaxed text-white text-sm sm:text-base md:text-lg lg:text-xl drop-shadow-sm">
                          {fonctionnaliteActive.texte}
                        </p>
                      </div>
                      <motion.button
                        className="bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all shadow-xl hover:shadow-2xl flex items-center gap-2 px-3 sm:px-4 lg:px-6 py-2 sm:py-2.5 lg:py-3 text-xs sm:text-sm lg:text-base mx-auto md:mx-0"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        En savoir plus
                      </motion.button>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Indicateurs en bas pour mobile et tablet */}
      <div className="absolute bottom-3 sm:bottom-4 lg:bottom-6 left-1/2 transform -translate-x-1/2 xl:hidden z-20">
        <div className="flex items-center gap-1.5 sm:gap-2 bg-black/60 backdrop-blur-md rounded-full px-3 sm:px-4 py-1.5 sm:py-2 shadow-xl">
          {fonctionnalites.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`rounded-full transition-all duration-300 ${
                activeTab === index 
                  ? "bg-blue-600 w-4 sm:w-6 h-1.5 sm:h-2" 
                  : "bg-white/60 hover:bg-white/80 w-1.5 sm:w-2 h-1.5 sm:h-2"
              }`}
              aria-label={`Aller à la fonctionnalité ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// Page complète
const TechServicesFonctionnalites = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <FonctionnalitesSection />
      <Footer />
    </div>
  );
};

export default TechServicesFonctionnalites;
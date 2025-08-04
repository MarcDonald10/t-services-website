import { Link, NavLink } from 'react-router-dom';
import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import logo from '../../assets/images/logos/logolong.png'; // Ajustez le chemin si nécessaire

// Données de navigation
const navLinks = [
  { to: '/', label: 'Accueil' },
  { to: '/services', label: 'services' },
  { to: '/features', label: 'Fonctionnalités' },
  { to: '/testimonials', label: 'Témoignages' },
  { to: '/faq', label: 'FAQ' },
  { to: '/contact', label: 'Contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Gestion du défilement pour l'effet de transparence
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fermeture du menu avec la touche Échap
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Fonction de bascule du menu mémorisée
  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  // Variants pour l'animation du menu mobile
  const menuVariants = {
    hidden: { opacity: 0, x: '100%' },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3, ease: 'easeOut' } },
    exit: { opacity: 0, x: '100%', transition: { duration: 0.2, ease: 'easeIn' } },
  };

  return (
    <nav
      className={`fixed w-full z-20 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white shadow-lg'
      }`}
      aria-label="Navigation principale"
    >
      <div className="container mx-auto flex justify-between items-center py-3 px-4 sm:px-6">
        {/* Logo */}
        <Link to="/" aria-label="Retour à la page d'accueil">
          <LazyLoadImage
            src={logo}
            alt="TechServices Logo"
            className="h-8 sm:h-10 w-auto"
            effect="blur"
            placeholderSrc={`${logo}&w=10&q=10`}
          />
        </Link>

        {/* Liens de navigation (Desktop) */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `relative text-gray-600 hover:text-client transition-colors duration-300 ${
                  isActive ? 'text-client font-semibold' : ''
                }`
              }
              aria-current={({ isActive }) => (isActive ? 'page' : undefined)}
            >
              {({ isActive }) => (
                <>
                  {link.label}
                  {/* Soulignement animé */}
                  <span
                    className={`absolute left-0 bottom-0 h-0.5 bg-client transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}
         
        </div>

        {/* Bouton menu mobile */}
        <button
          className="md:hidden text-gray-600 text-2xl focus:outline-none focus:ring-2 focus:ring-client rounded"
          onClick={toggleMenu}
          aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Menu mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden bg-white shadow-lg"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            aria-label="Menu mobile"
          >
            <div className="p-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `block py-3 text-gray-600 hover:text-client transition-colors duration-300 ${
                      isActive ? 'text-client font-semibold border-l-4 border-client pl-3' : ''
                    }`
                  }
                  onClick={() => setIsOpen(false)}
                  aria-current={({ isActive }) => (isActive ? 'page' : undefined)}
                >
                  {link.label}
                </NavLink>
              ))}
              {/* Boutons CTA mobile */}
             
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
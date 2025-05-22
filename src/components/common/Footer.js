import { motion } from 'framer-motion';
import { GlobeAltIcon } from '@heroicons/react/24/solid';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import logo from '../../assets/images/logos/logolong.png'; // Votre logo, à vérifier

const Footer = () => {
  const navLinks = [
    { name: 'À propos', href: '/about' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact', href: '/contact' },
    { name: 'Blog', href: '/blog' },
    { name: 'Conditions d’utilisation', href: '/terms' },
    { name: 'Politique de confidentialité', href: '/privacy' },
  ];

  const socialLinks = [
    {
      name: 'Facebook',
      href: 'https://facebook.com/your-page', // Remplacez par votre URL
      icon: <FaFacebookF className="w-6 h-6" />,
    },
    {
      name: 'X',
      href: 'https://x.com/your-page', // Remplacez par votre URL
      icon: <FaTwitter className="w-6 h-6" />,
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/company/your-page', // Remplacez par votre URL
      icon: <FaLinkedinIn className="w-6 h-6" />,
    },
    {
      name: 'Instagram',
      href: 'https://instagram.com/your-page', // Remplacez par votre URL
      icon: <FaInstagram className="w-6 h-6" />,
    },
  ];

  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16 font-poppins">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo et Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <a href="/" className="inline-block mb-4">
              <img
                src={logo}
                alt="BTP Connect Logo"
                className="h-12 transition-transform duration-300 hover:scale-105"
                onError={(e) => {
                  e.target.src = 'https://placehold.co/150x50.png?text=Logo+BTP+Connect';
                }}
              />
            </a>
            <p className="text-gray-400 mb-4">
              La plateforme qui simplifie vos projets BTP.
            </p>
            <motion.div
              className="inline-flex items-center bg-white/10 rounded-full px-4 py-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <GlobeAltIcon className="w-5 h-5 text-orange mr-2" />
              <span className="text-sm font-semibold text-gray-300">
                Conçu pour l’Afrique
              </span>
            </motion.div>
            <div className="mt-4">
              <p className="text-gray-400">Contactez-nous :</p>
              <a href="mailto:contact@btpconnect.com" className="text-orange hover:underline">
                contact@btpconnect.com
              </a>
              <p className="text-gray-400">+237 6.. ... ...</p>
            </div>
          </motion.div>

          {/* Liens utiles */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-4 text-orange">Liens utiles</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-orange transition duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Suivez-nous */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-xl font-semibold mb-4 text-orange">Suivez-nous</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={`Suivez-nous sur ${social.name}`}
                  className="text-gray-400 hover:text-orange transition duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h3 className="text-xl font-semibold mb-4 text-orange">Restez informé</h3>
            <p className="text-gray-400 mb-4">
              Inscrivez-vous pour recevoir des astuces BTP et nos dernières mises à jour.
            </p>
            <form
              className="flex flex-col sm:flex-row gap-2"
              onSubmit={(e) => {
                e.preventDefault();
                alert('Inscription réussie !');
              }}
            >
              <input
                type="email"
                placeholder="Votre e-mail"
                className="px-4 py-2 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange"
                required
              />
              <motion.button
                type="submit"
                className="bg-orange text-white px-4 py-2 rounded-lg hover:bg-orange-dark transition duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                S’inscrire
              </motion.button>
            </form>
            <div className="mt-4 flex justify-center gap-4">
              <a href="https://play.google.com">
                <img
                  src="https://placehold.co/150x50.png?text=Google+Play"
                  alt="Google Play Store"
                  className="h-10"
                />
              </a>
              <a href="https://www.apple.com/app-store">
                <img
                  src="https://placehold.co/150x50.png?text=App+Store"
                  alt="App Store"
                  className="h-10"
                />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 text-center text-gray-400 border-t border-gray-700 pt-6"
        >
          <p>© 2025 BTP Connect. Tous droits réservés.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
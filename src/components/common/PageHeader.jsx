// src/components/common/PageHeader.jsx
import { motion } from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

// Nouvelle image de fond
const defaultBackgroundImage =
  'https://images.pexels.com/photos/316093/pexels-photo-316093.jpeg?auto=compress&cs=tinysrgb&w=800';

const PageHeader = ({ pageName }) => {
  const variants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="relative h-48 sm:h-64 flex items-center justify-center overflow-hidden">
        
      {/* Image de fond */}
      <div className="absolute inset-0">
        <LazyLoadImage
          src={defaultBackgroundImage}
          alt={`Fond pour la page ${pageName}`}
          className="w-full h-full object-cover opacity-40 filter blur-sm"
          effect="blur"
          aria-hidden="true"
        />
      </div>

      {/* Overlay pour assombrir l'image */}
      <div className="absolute inset-0 bg-gray-900 bg-opacity-50"></div>

      {/* Titre de la page */}
      <motion.div
        className="relative z-10 text-center"
        initial="hidden"
        animate="visible"
        variants={variants}
      >
        <h1
          className="text-3xl sm:text-4xl font-bold text-white"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          {pageName}
        </h1>
      </motion.div>
    </section>
  );
};

export default PageHeader;
import { motion } from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const AppStoreSection = () => (
  <section className="py-12 bg-white">
    <div className="container mx-auto px-4 text-center">
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-2xl font-semibold text-gray-900 mb-6"
      >
        Téléchargez l’app dès maintenant
      </motion.h3>
      <div className="flex justify-center gap-4 flex-wrap">
        <motion.a
          href="https://www.apple.com/app-store/"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <LazyLoadImage
            src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
            alt="Download on the App Store"
            className="h-12"
            effect="blur"
          />
        </motion.a>
        <motion.a
          href="https://play.google.com/store"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <LazyLoadImage
            src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
            alt="Get it on Google Play"
            className="h-12"
            effect="blur"
          />
        </motion.a>
      </div>
    </div>
  </section>
);

export default AppStoreSection;
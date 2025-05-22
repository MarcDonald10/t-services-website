import { motion } from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { PlayIcon } from '@heroicons/react/24/solid';

const VideoExplainerSection = () => (
  <section className="py-20 bg-white">
    <div className="container mx-auto px-4 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-gray-900 mb-6"
      >
        Découvrez l’app en action
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative max-w-4xl mx-auto"
      >
        <LazyLoadImage
          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
          alt="Video Thumbnail"
          className="w-full rounded-2xl shadow-lg"
          effect="blur"
        />
        <motion.a
          href="https://www.youtube.com/watch?v=placeholder" // Replace with actual video URL
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-0 flex items-center justify-center"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
          aria-label="Regarder la vidéo de présentation"
        >
          <PlayIcon className="w-16 h-16 text-white bg-client rounded-full p-4 shadow-lg" />
        </motion.a>
      </motion.div>
    </div>
  </section>
);

export default VideoExplainerSection;
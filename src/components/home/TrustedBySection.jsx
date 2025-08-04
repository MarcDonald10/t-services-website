import { motion, useInView } from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { useEffect, useState, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { useSwipeable } from 'react-swipeable';

// Images des partenaires (remplacez par vos chemins réels)
import partner1 from '../../assets/images/partners/partner1.jpg';
import partner2 from '../../assets/images/partners/partner2.jpg';
import partner3 from '../../assets/images/partners/partner3.jpg';
import partner4 from '../../assets/images/partners/partner4.jpg';

// Simulation de récupération des données des partenaires (remplacez par Firebase si nécessaire)
const fetchPartners = async () => {
  return [
    {
      id: 1,
      src: partner1,
      alt: 'Partenaire 1',
      name: 'Partner 1',
      description: 'Leader en solutions technologiques innovantes.',
    },
    {
      id: 2,
      src: partner2,
      alt: 'Partenaire 2',
      name: 'Partner 2',
      description: 'Expert en services numériques pour l’Afrique.',
    },
    {
      id: 3,
      src: partner3,
      alt: 'Partenaire 3',
      name: 'Partner 3',
      description: 'Spécialiste en développement durable.',
    },
    {
      id: 4,
      src: partner4,
      alt: 'Partenaire 4',
      name: 'Partner 4',
      description: 'Pionnier en intelligence artificielle.',
    },
  ];
};

const TrustedBySection = ({ endCount = 10000, duration = 1500 }) => {
  const [partners, setPartners] = useState([]);
  const [userCount, setUserCount] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const sectionRef = useRef(null);
  const canvasRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  // Récupération des partenaires
  useEffect(() => {
    fetchPartners()
      .then((data) => {
        setPartners(data);
        setLoading(false);
      })
      .catch(() => {
        setError('Erreur lors du chargement des partenaires');
        setLoading(false);
      });
  }, []);

  // Animation du compteur
  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const increment = endCount / (duration / 16);
    const interval = setInterval(() => {
      start += increment;
      if (start >= endCount) {
        start = endCount;
        clearInterval(interval);
      }
      setUserCount(Math.floor(start));
    }, 16);
    return () => clearInterval(interval);
  }, [isInView, endCount, duration]);

  // Défilement automatique du carrousel
  useEffect(() => {
    if (!partners.length) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % partners.length);
    }, 5000); // Change toutes les 5 secondes
    return () => clearInterval(interval);
  }, [partners.length]);

  // Gestion des gestes tactiles
  const handlers = useSwipeable({
    onSwipedLeft: () => setCurrentSlide((prev) => (prev + 1) % partners.length),
    onSwipedRight: () => setCurrentSlide((prev) => (prev - 1 + partners.length) % partners.length),
    trackMouse: true, // Permet le glisser sur desktop
  });

  // Navigation manuelle
  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + partners.length) % partners.length);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % partners.length);
  };

  // Configuration de la sphère 3D décorative
  useEffect(() => {
    if (!canvasRef.current || !THREE) return;

    const isMobile = window.innerWidth < 640;
    const canvasSize = isMobile ? 250 : 350;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true });
    renderer.setSize(canvasSize, canvasSize);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 1.2;
    controls.enableDamping = true;
    controls.dampingFactor = 0.1;

    const geometry = new THREE.SphereGeometry(1.5, 64, 64);
    const material = new THREE.MeshBasicMaterial({
      color: 0x3b82f6,
      wireframe: true,
      transparent: true,
      opacity: 0.2,
    });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    // Particules pour effet visuel
    const particleGeometry = new THREE.BufferGeometry();
    const particleCount = 200;
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      const phi = Math.random() * Math.PI * 2;
      const theta = Math.random() * Math.PI;
      const radius = 1.8 + Math.random() * 0.3;
      positions[i] = radius * Math.sin(theta) * Math.cos(phi);
      positions[i + 1] = radius * Math.sin(theta) * Math.sin(phi);
      positions[i + 2] = radius * Math.cos(theta);
    }
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particleMaterial = new THREE.PointsMaterial({
      color: 0x3b82f6,
      size: 0.05,
      transparent: true,
      opacity: 0.6,
    });
    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    camera.position.z = isMobile ? 4 : 3.5;

    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      particles.rotation.y += 0.002;
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      renderer.dispose();
    };
  }, []);

  // Gestion du mode "mouvement réduit"
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-16 bg-gradient-to-b from-white via-gray-100 to-white"
      aria-labelledby="trusted-by-heading"
    >
      {/* Fond de particules */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%)' }}
        animate={!prefersReducedMotion ? { opacity: [0.5, 0.7, 0.5] } : {}}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
        {/* Titre avec compteur */}
        <motion.h2
          id="trusted-by-heading"
          className="text-4xl sm:text-5xl font-bold text-gray-900"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          +{userCount.toLocaleString()} utilisateurs satisfaits
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Nos partenaires stratégiques nous accompagnent pour garantir une qualité exceptionnelle.
        </motion.p>

        {/* Carrousel des partenaires (1 élément à la fois) */}
        <div className="relative max-w-lg mx-auto" {...handlers}>
          {loading ? (
            <div className="flex justify-center">
              <div className="w-80 h-80 bg-gray-200 rounded-xl animate-pulse" />
            </div>
          ) : error ? (
            <p className="text-red-600">{error}</p>
          ) : (
            <div className="relative">
              <motion.div
                className="flex"
                animate={{ x: `-${currentSlide * 100}%` }}
                transition={{ duration: 0.7, ease: 'easeInOut' }}
                role="region"
                aria-label="Carrousel des partenaires"
              >
                {partners.map((partner) => (
                  <div key={partner.id} className="flex-shrink-0 w-full px-4">
                    <motion.div
                      className="bg-white rounded-xl shadow-md border border-gray-100 p-8 flex flex-col items-center text-center group hover:shadow-lg transition-shadow duration-300"
                      whileHover={{ scale: 1.05 }}
                    >
                      <LazyLoadImage
                        src={partner.src}
                        alt={partner.alt}
                        className="h-32 w-32 object-contain mb-6 rounded-full"
                        effect="blur"
                      />
                      <h3 className="text-2xl font-semibold text-gray-800">{partner.name}</h3>
                      <p className="text-base text-gray-600 mt-3 line-clamp-3">{partner.description}</p>
                    </motion.div>
                  </div>
                ))}
              </motion.div>

              {/* Boutons de navigation */}
              <button
                onClick={handlePrev}
                className="absolute left-0 top-1/2 -translate-y-1/2 bg-blue-600 text-white p-4 rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                aria-label="Partenaire précédent"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={handleNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-blue-600 text-white p-4 rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                aria-label="Partenaire suivant"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Indicateurs de pagination */}
              <div className="flex justify-center mt-6 space-x-3">
                {partners.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full ${
                      currentSlide === index ? 'bg-blue-600' : 'bg-gray-300'
                    } focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors`}
                    aria-label={`Aller au partenaire ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Sphère 3D décorative */}
        <motion.div
          className="relative flex justify-center mt-12"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1 }}
        >
          <canvas
            ref={canvasRef}
            className="w-[250px] h-[250px] sm:w-[350px] sm:h-[350px]"
            aria-label="Sphère décorative animée"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedBySection;
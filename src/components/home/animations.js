export const carouselVariants = {
    container: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { staggerChildren: 0.3, delayChildren: 0.2 },
      },
    },
    slide: {
      hidden: { opacity: 0, x: 100, scale: 0.9 },
      visible: {
        opacity: 1,
        x: 0,
        scale: 1,
        transition: { duration: 1.2, ease: 'easeInOut', type: 'spring' },
      },
    },
  };
  
  export const textVariants = {
    hidden: { opacity: 0, y: 50, rotateX: 15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { duration: 1, ease: 'easeOut', type: 'spring', stiffness: 80 },
    },
  };
  
  export const ctaVariants = {
    hover: { scale: 1.1, boxShadow: '0 0 25px rgba(251, 191, 36, 0.8)' },
    tap: { scale: 0.95 },
  };
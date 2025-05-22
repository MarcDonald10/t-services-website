import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Team = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const team = [
    { name: 'Jean Dupont', role: 'Fondateur', image: '/assets/images/placeholder.jpg' },
    { name: 'Marie Martin', role: 'Responsable Technique', image: '/assets/images/placeholder.jpg' },
    { name: 'Luc Durand', role: 'Designer UX', image: '/assets/images/placeholder.jpg' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <section
      ref={sectionRef}
      className="py-20 sm:py-24 bg-gray-200"
      aria-label="Section équipe"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 text-center mb-12"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          Notre équipe
        </motion.h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10"
        >
          {team.map((member, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gray-50 border border-client/20 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <img
                src={member.image}
                alt={`Portrait de ${member.name}, ${member.role}`}
                className="w-32 h-32 rounded-full mx-auto mb-4 ring-2 ring-transparent hover:ring-technician/50 transition-all duration-300"
              />
              <h3
                className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {member.name}
              </h3>
              <p
                className="text-base sm:text-lg font-medium text-gray-700"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {member.role}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
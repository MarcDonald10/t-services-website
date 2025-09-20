import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import Hero from '../components/home/Hero';
import FeaturesSection from '../components/home/FeaturesSection';
import VideoExplainerSection from '../components/home/VideoExplainerSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import AppStoreSection from '../components/home/AppStoreSection';
import CTASection from '../components/home/CTASection';
import { UserIcon, CheckCircleIcon, LockClosedIcon, CalendarIcon } from '@heroicons/react/24/solid';
import FAQSection from '../components/home/FAQSection';
import HowItWorksSection from '../components/home/HowItWorksSection';
import TrustedBySection from '../components/home/TrustedBySection';

const Home = () => {
  const features = [
    {
      title: 'Techniciens à portée de main',
      description: 'Trouvez des professionnels qualifiés près de chez vous, disponibles 24/7.',
      icon: <UserIcon className="w-8 h-8 text-client" />,
    },
    {
      title: 'Tous vos projets de génie civil',
      description: 'Plomberie, électricité, maçonnerie, peinture : une app pour tout.',
      icon: <CheckCircleIcon className="w-8 h-8 text-client" />,
    },
    {
      title: 'Paiements sécurisés',
      description: 'Payez en toute tranquillité avec notre système crypté.',
      icon: <LockClosedIcon className="w-8 h-8 text-client" />,
    },
    {
      title: 'Outils pour techniciens',
      description: 'Visibilité, gestion des projets, statistiques : boostez votre carrière.',
      icon: <CalendarIcon className="w-8 h-8 text-client" />,
    },
  ];

  const steps = [
    {
      title: 'Recherchez',
      description: 'Indiquez vos besoins et trouvez un technicien qualifié en quelques secondes.',
      icon: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
      color: 'client',
    },
    {
      title: 'Réservez',
      description: 'Choisissez votre technicien et planifiez l’intervention en un clic.',
      icon: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
      color: 'client',
    },
    {
      title: 'Payez & Suivez',
      description: 'Payez en ligne et suivez votre projet en temps réel.',
      icon: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
      color: 'client',
    },
  ];

  const testimonials = [
    {
      name: 'Njassap Yves',
      role: 'Cliente, Douala',
      text: 'Une panne électrique résolue en 2h grâce à l’app ! Service rapide et fiable.',
      avatar: 'https://i.pinimg.com/736x/d5/59/70/d559706c75e71a16149003b270ab6871.jpg',
      rating: 5,
    },
    {
      name: 'Moussango Styves',
      role: 'Maçon, Baffoussam',
      text: 'L’app m’a permis de tripler mes chantiers. Les outils pro sont top !',
      avatar: 'https://i.pinimg.com/736x/d5/5e/a0/d55ea0ee50ac7054aab807e9338c983c.jpg',
      rating: 5,
    },
    {
      name: 'Mbarga Agnes',
      role: 'Entreprise, Douala',
      text: 'Une plateforme intuitive pour gérer nos projets du génie civil efficacement.',
      avatar: 'https://i.pinimg.com/736x/4b/d3/72/4bd372981682df8ccdf699d5e9dbbc05.jpg',
      rating: 6,
    },
    {
      name: 'Aïssatou Fatima',
      role: 'Entreprise, Yaounde',
      text: 'Une plateforme intuitive pour gérer nos projets du génie civil efficacement.',
      avatar: 'https://i.pinimg.com/1200x/00/51/e0/0051e0f5fdcaccce4546c1c73d9905df.jpg',
      rating: 7,
    },
    {
      name: 'ytui B.',
      role: 'Entreprise, Bamako',
      text: 'Une plateforme intuitive pour gérer nos projets du génie civil efficacement.',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
      rating: 8,
    },
    {
      name: 'Aïssatou B.',
      role: 'Entreprise, Bamako',
      text: 'Une plateforme intuitive pour gérer nos projets du génie civil efficacement.',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
      rating: 4,
    },
    {
      name: 'sdtyus B.',
      role: 'Entreprise, Bamako',
      text: 'Une plateforme intuitive pour gérer nos projets du génie civil efficacement.',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
      rating: 9,
    },
  ];

  const faqs = [
    {
      question: 'Comment trouver un technicien qualifié ?',
      answer: 'Entrez vos besoins dans l’app, sélectionnez votre ville, et choisissez parmi les techniciens vérifiés près de chez vous.',
    },
    {
      question: 'Les paiements sont-ils sécurisés ?',
      answer: 'Oui, notre système de paiement crypté garantit la sécurité de vos transactions.',
    },
    {
      question: 'Comment devenir technicien ?',
      answer: 'Inscrivez-vous, soumettez vos qualifications, et commencez à recevoir des projets.',
    },
    {
      question: 'Quels types de projets puis-je réaliser ?',
      answer: 'De la plomberie à la maçonnerie, notre app couvre tous les métiers du génie civil.',
    },
  ];



  return (
    <div className="font-poppins bg-gray-50">
      <Navbar />
      <Hero />
      <TrustedBySection />
      <FeaturesSection features={features} />
      <HowItWorksSection steps={steps} />
      <VideoExplainerSection />
      <TestimonialsSection testimonials={testimonials} />
      <FAQSection faqs={faqs} />
      <AppStoreSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Home;
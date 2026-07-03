import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { PortfolioSection } from './components/PortfolioSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ServiceDetailPage } from './components/ServiceDetailPage';
import { Language, ServicePageId } from './types';

export default function App() {
  const [currentLang, setLang] = useState<Language>('EN');
  const [currentPage, setCurrentPage] = useState<'home' | 'about' | 'portfolio' | 'contact' | ServicePageId>('home');
  const [activeSection, setActiveSection] = useState<string>('home');
  const [selectedService, setSelectedService] = useState<ServicePageId>('architectural-design');
  const [prefilledBrief, setPrefilledBrief] = useState<string>('');

  // Hash router to handle dedicated separate pages and browser history
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      
      if (hash === 'about') {
        setCurrentPage('about');
        setActiveSection('about');
        window.scrollTo({ top: 0 });
      } else if (hash === 'portfolio') {
        setCurrentPage('portfolio');
        setActiveSection('portfolio');
        window.scrollTo({ top: 0 });
      } else if (hash === 'contact') {
        setCurrentPage('contact');
        setActiveSection('contact');
        window.scrollTo({ top: 0 });
      } else if (
        hash === 'architectural-design' || 
        hash === 'interior-design' || 
        hash === 'architecture-build' || 
        hash === 'interiors-build'
      ) {
        setCurrentPage(hash as ServicePageId);
        setActiveSection('services');
        setSelectedService(hash as ServicePageId);
        window.scrollTo({ top: 0 });
      } else {
        setCurrentPage('home');
        if (hash === 'services') {
          setActiveSection('services');
          setTimeout(() => {
            const el = document.getElementById('services');
            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, 100);
        } else if (hash.startsWith('service-')) {
          const srvId = hash.replace('service-', '') as ServicePageId;
          setCurrentPage(srvId);
          setActiveSection('services');
          setSelectedService(srvId);
          window.scrollTo({ top: 0 });
        } else {
          setActiveSection('home');
          if (hash === 'home' || !hash) {
            window.scrollTo({ top: 0 });
          }
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    // Execute initially to parse current URL
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Smooth scroll and navigation helper
  const scrollToSection = (id: string) => {
    if (
      id === 'about' || 
      id === 'portfolio' || 
      id === 'contact' ||
      id === 'architectural-design' || 
      id === 'interior-design' || 
      id === 'architecture-build' || 
      id === 'interiors-build'
    ) {
      window.location.hash = id;
    } else if (id === 'home') {
      if (currentPage !== 'home') {
        window.location.hash = 'home';
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setActiveSection('home');
      }
    } else {
      // For general services
      if (currentPage !== 'home') {
        window.location.hash = 'architectural-design';
      } else {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          setActiveSection('services');
        } else {
          window.location.hash = id;
        }
      }
    }
  };

  // Populate brief with general CTA intent and scroll down
  const handleOpenGeneralConsultation = () => {
    const defaultBriefs: Record<Language, string> = {
      EN: 'Hello spacenine architects, I would like to start a luxury design concept for my space.',
      RU: 'Здравствуйте, spacenine architects! Я бы хотел начать разработку концепта премиального дизайна для моего помещения.',
      ES: 'Hola spacenine architects, me gustaría iniciar un concepto de diseño de lujo para mi espacio.'
    };
    setPrefilledBrief(defaultBriefs[currentLang]);
    window.location.hash = 'contact';
  };

  // Populate brief with estimate calculation and scroll down
  const handleOpenConsultationWithEstimate = (estimateDetails: string) => {
    setPrefilledBrief(estimateDetails);
    window.location.hash = 'contact';
  };

  // Clear brief after successful form reset
  const handleClearPrefilledBrief = () => {
    setPrefilledBrief('');
  };

  // IntersectionObserver to auto-update active nav state based on scroll coordinates (only active on home)
  useEffect(() => {
    if (currentPage !== 'home') return;

    const sections = ['home', 'services'];
    const observers = sections.map((secId) => {
      const element = document.getElementById(secId);
      if (!element) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(secId);
          }
        },
        {
          // Trigger when 40% of the section is visible inside viewport
          threshold: 0.4,
          rootMargin: '-80px 0px 0px 0px' // adjust for Header height
        }
      );

      observer.observe(element);
      return { observer, element };
    });

    return () => {
      observers.forEach((obs) => {
        if (obs) {
          obs.observer.unobserve(obs.element);
        }
      });
    };
  }, [currentPage]);

  return (
    <div className="bg-white dark:bg-zinc-950 min-h-screen font-sans selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black flex flex-col justify-between transition-colors duration-300">
      
      {/* 1. Header Navigation & Language togglers */}
      <Header
        currentLang={currentLang}
        setLang={setLang}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        selectedService={selectedService}
        setSelectedService={setSelectedService}
      />

      {/* Main Content Area with Page Transitions */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          {currentPage === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {/* 2. Full-Screen Interactive Hero Screen with Day/Night light toggler */}
              <Hero
                currentLang={currentLang}
                scrollToSection={scrollToSection}
                onOpenConsultation={handleOpenGeneralConsultation}
              />

              {/* 4. Services Section: Offer lists & Interactive Cost Estimator */}
              <ServicesSection
                currentLang={currentLang}
                onOpenConsultationWithEstimate={handleOpenConsultationWithEstimate}
                selectedService={selectedService}
                setSelectedService={setSelectedService}
              />
            </motion.div>
          )}

          {currentPage === 'about' && (
            <motion.div
              key="about"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="pt-20 md:pt-24"
            >
              {/* 3. About Section: Studio Philosophy, Timelines & Team biography */}
              <AboutSection currentLang={currentLang} />
            </motion.div>
          )}

          {currentPage === 'portfolio' && (
            <motion.div
              key="portfolio"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="pt-20 md:pt-24"
            >
              {/* 5. Portfolio Section: Dynamic categories filter and technical modal spec views */}
              <PortfolioSection currentLang={currentLang} />
            </motion.div>
          )}

          {currentPage === 'contact' && (
            <motion.div
              key="contact"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="pt-20 md:pt-24"
            >
              {/* 6. Contact Section: Social chat links, Brief form & Local history tracker */}
              <ContactSection
                currentLang={currentLang}
                prefilledBrief={prefilledBrief}
                onClearPrefilledBrief={handleClearPrefilledBrief}
              />
            </motion.div>
          )}

          {(currentPage === 'architectural-design' ||
            currentPage === 'interior-design' ||
            currentPage === 'architecture-build' ||
            currentPage === 'interiors-build') && (
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <ServiceDetailPage
                currentLang={currentLang}
                serviceId={currentPage}
                onOpenConsultationWithEstimate={handleOpenConsultationWithEstimate}
                onNavigateToService={(id) => {
                  window.location.hash = id;
                }}
                onBackToHome={() => {
                  window.location.hash = 'home';
                }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* 7. Minimalist footer with details */}
      <Footer
        currentLang={currentLang}
        scrollToSection={scrollToSection}
      />

    </div>
  );
}

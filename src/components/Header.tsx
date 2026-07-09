import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown, Send, MessageSquare } from 'lucide-react';
import { Language, ServicePageId } from '../types';
import { navItems } from '../data';

interface HeaderProps {
  currentLang: Language;
  setLang: (lang: Language) => void;
  activeSection: string;
  scrollToSection: (id: string) => void;
  selectedService: ServicePageId;
  setSelectedService: (service: ServicePageId) => void;
}

const individualServices = [
  {
    id: 'architectural-design' as const,
    label: {
      EN: 'Architectural Design',
      RU: 'Архитектурное проектирование',
      ES: 'Diseño Arquitectónico'
    },
    description: {
      EN: 'Custom spatial planning, master planning, and facade styling.',
      RU: 'Индивидуальное планирование, генеральные планы и дизайн фасадов.',
      ES: 'Planificación espacial a medida, diseño de fachadas y planos.'
    },
    image: "https://vennky.sirv.com/Don't%20Just%20List%20It_%20Visualize%20It_%20(1).jpg"
  },
  {
    id: 'interior-design' as const,
    label: {
      EN: 'Interior Design',
      RU: 'Дизайн интерьера',
      ES: 'Diseño de Interiores'
    },
    description: {
      EN: 'Sleek minimalist penthouses and lounges styled to the millimeter.',
      RU: 'Минималистичные пентхаусы и лаунж-зоны, проработанные до миллиметра.',
      ES: 'Penthouses minimalistas y salones de lujo diseñados al milímetro.'
    },
    image: "https://vennky.sirv.com/ChatGPT%20Image%20Jul%205%2C%202026%2C%2009_20_31%20AM.png"
  },
  {
    id: 'architecture-build' as const,
    label: {
      EN: 'Architecture – Build and Finish',
      RU: 'Строительство и отделка зданий',
      ES: 'Arquitectura: Construcción y Acabado'
    },
    description: {
      EN: 'Precision contracting, concrete framing, masonry, and facades.',
      RU: 'Профессиональный подряд, монолитные работы и премиальные фасады.',
      ES: 'Contratación de precisión, marcos de hormigón y fachadas.'
    },
    image: 'https://vennky.sirv.com/ChatGPT%20Image%20Jul%205%2C%202026%2C%2008_56_57%20PM.png'
  },
  {
    id: 'interiors-build' as const,
    label: {
      EN: 'Interiors – Build and Finish',
      RU: 'Монтаж и чистовая отделка',
      ES: 'Interiores: Construcción y Acabado'
    },
    description: {
      EN: 'Custom millwork, marble cladding, and complete handover.',
      RU: 'Собственное производство мебели, укладка мрамора и сдача под ключ.',
      ES: 'Carpintería a medida, revestimiento de mármol y entrega premium.'
    },
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=400'
  }
];

export const Header: React.FC<HeaderProps> = ({
  currentLang,
  setLang,
  activeSection,
  scrollToSection,
  selectedService,
  setSelectedService,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  const toggleLang = (lang: Language) => {
    setLang(lang);
    setIsLangDropdownOpen(false);
  };

  const handleNavClick = (id: string) => {
    scrollToSection(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-100 transition-colors duration-300">
        <div className="max-w-5xl mx-auto px-6 h-[68px] md:h-[77px] flex items-center justify-between relative">
          
          {/* Logo Brand: New custom brand logo image */}
          <div 
            className="flex flex-col items-center justify-center cursor-pointer group"
            onClick={() => handleNavClick('home')}
            id="logo-container"
          >
            <div className="h-12 md:h-15 overflow-hidden flex items-start justify-center">
              <img 
                src="https://vennky.sirv.com/iron%20spongs/ballari/ChatGPT%20Image%20Jul%207%2C%202026%2C%2006_14_34%20PM.png"
                alt="spacenine architects logo"
                className="h-16 md:h-20 w-auto object-contain transition-opacity duration-300 group-hover:opacity-85 object-top"
                referrerPolicy="no-referrer"
              />
            </div>
            <span className="font-logo text-[9.5px] font-normal tracking-wide text-gray-900 mt-1 lowercase group-hover:text-gray-600 transition-colors duration-300">
              spacenine architects
            </span>
          </div>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center md:absolute md:left-1/2 md:-translate-x-1/2" id="desktop-nav">
            <ul className="flex items-center gap-8">
              {navItems.map((item) => {
                if (item.id === 'services') {
                  return (
                    <li 
                      key={item.id} 
                      className="relative"
                      onMouseEnter={() => setIsServicesDropdownOpen(true)}
                      onMouseLeave={() => setIsServicesDropdownOpen(false)}
                    >
                      <button
                        onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                        id="nav-services"
                        className={`text-xs tracking-widest uppercase transition-colors py-2 px-1 font-medium cursor-pointer relative flex items-center gap-1 ${
                          activeSection === 'services' 
                            ? 'text-black font-semibold' 
                            : 'text-gray-500 hover:text-black'
                        }`}
                      >
                        <span>{item.label[currentLang]}</span>
                        <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${isServicesDropdownOpen ? 'rotate-180' : ''}`} />
                        {activeSection === 'services' && (
                          <motion.div
                            layoutId="navUnderline"
                            className="absolute bottom-0 left-0 w-full h-[2px] bg-black"
                            transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                          />
                        )}
                      </button>

                      <AnimatePresence>
                        {isServicesDropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.98 }}
                            className="absolute left-1/2 -translate-x-1/2 mt-3 w-[680px] bg-white border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.08)] rounded-2xl overflow-hidden z-50 p-5 grid grid-cols-2 gap-4"
                            id="services-dropdown-menu"
                          >
                            {individualServices.map((srv) => (
                              <button
                                key={srv.id}
                                onClick={() => {
                                  scrollToSection(srv.id);
                                  setIsServicesDropdownOpen(false);
                                }}
                                className="group flex items-center gap-4 p-2.5 rounded-xl hover:bg-gray-50/70 border border-transparent hover:border-gray-100 transition-all duration-300 text-left cursor-pointer"
                                id={`srv-opt-${srv.id}`}
                              >
                                {/* Thumbnail Image */}
                                <div className="w-24 h-16 shrink-0 overflow-hidden rounded-lg bg-gray-100 border border-gray-100/60 relative">
                                  <img 
                                    src={srv.image} 
                                    alt={srv.label[currentLang]} 
                                    referrerPolicy="no-referrer"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                  />
                                  <div className="absolute inset-0 bg-black/[0.02] pointer-events-none" />
                                </div>

                                {/* Content */}
                                <div className="space-y-1">
                                  <div className="text-xs font-bold font-mono tracking-wider text-gray-900 group-hover:text-black uppercase flex items-center gap-1.5">
                                    <span>{srv.label[currentLang]}</span>
                                    {selectedService === srv.id && (
                                      <span className="w-1.5 h-1.5 bg-black rounded-full" />
                                    )}
                                  </div>
                                  <p className="text-[10px] text-gray-400 font-light leading-relaxed line-clamp-2">
                                    {srv.description[currentLang]}
                                  </p>
                                </div>
                              </button>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </li>
                  );
                }

                return (
                  <li key={item.id} className="relative">
                    <button
                      onClick={() => handleNavClick(item.id)}
                      id={`nav-${item.id}`}
                      className={`text-xs tracking-widest uppercase transition-colors py-2 px-1 font-medium cursor-pointer relative ${
                        activeSection === item.id 
                          ? 'text-black font-semibold' 
                          : 'text-gray-500 hover:text-black'
                      }`}
                    >
                      {item.label[currentLang]}
                      {activeSection === item.id && (
                        <motion.div
                          layoutId="navUnderline"
                          className="absolute bottom-0 left-0 w-full h-[2px] bg-black"
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Mobile menu trigger */}
          <div className="flex md:hidden items-center space-x-4">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-black focus:outline-none"
              id="mobile-menu-toggle"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden fixed top-[68px] left-0 w-full bg-white z-40 border-b border-gray-200 shadow-xl overflow-hidden"
            id="mobile-menu-panel"
          >
            <div className="px-6 py-8 flex flex-col space-y-6">
              {navItems.map((item) => {
                if (item.id === 'services') {
                  return (
                    <div key={item.id} className="space-y-2">
                      <button
                        onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                        className={`w-full text-left text-base font-medium tracking-wide uppercase flex items-center justify-between ${
                          activeSection === 'services' ? 'text-black border-l-2 border-black pl-3' : 'text-gray-500 pl-3'
                        }`}
                        id="mobile-nav-services"
                      >
                        <span>{item.label[currentLang]}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
                      </button>
                      
                      <AnimatePresence>
                        {isMobileServicesOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="pl-6 space-y-2.5 overflow-hidden pt-1"
                          >
                            {individualServices.map((srv) => (
                              <button
                                key={srv.id}
                                onClick={() => {
                                  scrollToSection(srv.id);
                                  setIsMobileMenuOpen(false);
                                }}
                                className="block text-left text-xs uppercase font-mono tracking-wider text-gray-500 hover:text-black py-1"
                                id={`mobile-srv-${srv.id}`}
                              >
                                {srv.label[currentLang]}
                              </button>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`text-left text-base font-medium tracking-wide uppercase ${
                      activeSection === item.id ? 'text-black border-l-2 border-black pl-3' : 'text-gray-500 pl-3'
                    }`}
                    id={`mobile-nav-${item.id}`}
                  >
                    {item.label[currentLang]}
                  </button>
                );
              })}

              <div className="border-t border-gray-100 pt-6 flex items-center justify-center">
                <div className="flex flex-col items-center">
                  <div className="h-12 overflow-hidden flex items-start justify-center">
                    <img 
                      src="https://vennky.sirv.com/iron%20spongs/ballari/ChatGPT%20Image%20Jul%207%2C%202026%2C%2006_14_34%20PM.png"
                      alt="spacenine architects logo"
                      className="h-16 w-auto object-contain object-top"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <span className="font-logo text-[10px] font-normal tracking-wide text-gray-900 mt-1 lowercase">
                    spacenine architects
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

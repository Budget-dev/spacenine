import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sun, Moon, ArrowDown } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data';

interface HeroProps {
  currentLang: Language;
  scrollToSection: (id: string) => void;
  onOpenConsultation: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  currentLang,
  scrollToSection,
  onOpenConsultation,
}) => {
  const [isNightMode, setIsNightMode] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Swipe and Drag Gesture States
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchStartY, setTouchStartY] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState<number | null>(null);

  // Auto-scroll slides every 8 seconds (restarted when currentSlide changes)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 4);
    }, 8000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
    setTouchStartY(e.touches[0].clientY);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null || touchStartY === null) return;
    const diffX = e.changedTouches[0].clientX - touchStartX;
    const diffY = e.changedTouches[0].clientY - touchStartY;

    // Trigger slide change if horizontal swipe is greater than vertical swipe & exceeds threshold
    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 40) {
      if (diffX > 0) {
        // Swipe Right -> Show Previous Slide
        setCurrentSlide((prev) => (prev - 1 + 4) % 4);
      } else {
        // Swipe Left -> Show Next Slide
        setCurrentSlide((prev) => (prev + 1) % 4);
      }
    }
    setTouchStartX(null);
    setTouchStartY(null);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (e.button !== 0) return; // Only allow left-click dragging
    
    const target = e.target as HTMLElement;
    // Do not initiate drag when interacting with buttons, links, or inputs
    if (target.closest('button') || target.closest('a')) {
      return;
    }

    setIsDragging(true);
    setDragStartX(e.clientX);
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (!isDragging || dragStartX === null) return;
    const diffX = e.clientX - dragStartX;

    if (Math.abs(diffX) > 40) {
      if (diffX > 0) {
        // Drag Right -> Show Previous Slide
        setCurrentSlide((prev) => (prev - 1 + 4) % 4);
      } else {
        // Drag Left -> Show Next Slide
        setCurrentSlide((prev) => (prev + 1) % 4);
      }
    }
    setIsDragging(false);
    setDragStartX(null);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    setDragStartX(null);
  };

  const t = translations.hero;

  // Custom slide-specific titles & subtitles for banners 1, 2, and 3
  const slides = [
    {
      id: 0,
      title: t.title,
      subtitle: t.subtitle,
    },
    {
      id: 1,
      title: {
        EN: 'Culinary Spaces',
        RU: 'Кулинарные пространства',
        ES: 'Espacios Culinarios'
      },
      subtitle: {
        EN: 'Ergonomic integration of premium appliances with natural stone surfaces.',
        RU: 'Эргономичная интеграция премиальной техники и натурального камня.',
        ES: 'Integración ergonómica de electrodomésticos de alta gama.'
      }
    },
    {
      id: 2,
      title: {
        EN: 'Living Lounges',
        RU: 'Гостиные зоны',
        ES: 'Salones de Estar'
      },
      subtitle: {
        EN: 'Panoramic vistas blended with premium Italian fabrics and bespoke joinery.',
        RU: 'Панорамные виды в сочетании с итальянским текстилем и мебелью.',
        ES: 'Vistas panorámicas integradas con telas italianas y carpintería.'
      }
    },
    {
      id: 3,
      title: {
        EN: 'Custom Wardrobes',
        RU: 'Гардеробные комнаты',
        ES: 'Armarios a Medida'
      },
      subtitle: {
        EN: 'Sleek custom glass shelving with integrated warm profile LEDs.',
        RU: 'Стеклянные полки с интегрированными светодиодными профилями.',
        ES: 'Estantes de vidrio con iluminación LED integrada.'
      }
    }
  ];

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 cursor-grab active:cursor-grabbing select-none"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
    >
      {/* Immersive Day/Night Background Image Transitions */}
      <div className="absolute inset-0 z-0 bg-black">
        {/* Slide 0: Day/Night Interactive Background */}
        <div className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${currentSlide === 0 ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          {/* Day Background */}
          <div 
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
              isNightMode ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
            }`}
            style={{
              backgroundImage: `url('https://vennky.sirv.com/ChatGPT%20Image%20Jul%203%2C%202026%2C%2010_58_18%20AM.png')`,
            }}
            aria-hidden="true"
          />

          {/* Night Background (warmer, rich shadows, glowing wardrobes) */}
          <div 
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
              isNightMode ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
            style={{
              backgroundImage: `url('https://vennky.sirv.com/ChatGPT%20Image%20Jul%203%2C%202026%2C%2010_59_34%20AM.png')`,
            }}
            aria-hidden="true"
          />
        </div>

        {/* Slide 1: Modern Culinary Space */}
        <div 
          className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out ${
            currentSlide === 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
          }`}
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1600')`,
          }}
          aria-hidden="true"
        />

        {/* Slide 2: Penthouse Living Lounge */}
        <div 
          className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out ${
            currentSlide === 2 ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
          }`}
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1600')`,
          }}
          aria-hidden="true"
        />

        {/* Slide 3: Custom Oak Wardrobe & Vanity Chamber */}
        <div 
          className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out ${
            currentSlide === 3 ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
          }`}
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=1600')`,
          }}
          aria-hidden="true"
        />

        {/* Cinematic Overlays */}
        {/* Daylight Overlay: Fresh cool vignette (ONLY active for slide 0 in day mode) */}
        <div 
          className={`absolute inset-0 transition-opacity duration-1000 bg-gradient-to-t from-gray-950/80 via-transparent to-gray-950/40 ${
            (currentSlide === 0 && !isNightMode) ? 'opacity-100' : 'opacity-0'
          }`} 
        />
        {/* Nightlight Overlay: Luxurious golden dark vignette (ONLY active for slide 0 in night mode) */}
        <div 
          className={`absolute inset-0 transition-opacity duration-1000 bg-gradient-to-t from-black via-black/45 to-black/55 ${
            (currentSlide === 0 && isNightMode) ? 'opacity-100' : 'opacity-0'
          }`} 
        />

        {/* Ambient Glow behind center console (ONLY active for slide 0 in night mode) */}
        <div 
          className={`absolute bottom-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-white/10 rounded-full blur-3xl transition-opacity duration-1000 ${
            (currentSlide === 0 && isNightMode) ? 'opacity-100' : 'opacity-0'
          }`}
        />
      </div>

      {/* Main Content Layout matching reference spacing */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col justify-between min-h-[calc(100vh-120px)] pb-12">
        
        {/* Spacer to push title down */}
        <div className="h-1" />

        {/* Central visual text console */}
        <div className="max-w-3xl mt-12 md:mt-24">
          <div className="space-y-6" id="hero-content">
            {/* Heading in chosen language */}
            <motion.h1 
              key={`slide-title-${currentSlide}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-serif text-white tracking-tight leading-[1.1] font-medium drop-shadow-md"
            >
              {slides[currentSlide].title[currentLang]}
            </motion.h1>

            {/* Subheading text */}
            <motion.p 
              key={`slide-sub-${currentSlide}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-gray-200/90 text-sm md:text-base leading-relaxed max-w-2xl font-light"
            >
              {slides[currentSlide].subtitle[currentLang]}
            </motion.p>

            {/* Action pill button - ONLY on Slide 0 */}
            <div className="h-16 flex items-center">
              <AnimatePresence mode="wait">
                {currentSlide === 0 && (
                  <motion.div
                    key="start-btn-container"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className="pt-4 flex flex-wrap items-center gap-6"
                  >
                    <button
                      onClick={onOpenConsultation}
                      className="group flex items-center space-x-4 bg-white hover:bg-gray-100 text-gray-900 rounded-full pl-8 pr-3 py-3 font-medium transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 cursor-pointer"
                      id="start-project-cta"
                    >
                      <span className="text-sm tracking-wider uppercase font-semibold">
                        {t.cta[currentLang]}
                      </span>
                      <div className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center transition-transform group-hover:rotate-45 duration-300">
                        <svg 
                          width="14" 
                          height="14" 
                          viewBox="0 0 14 14" 
                          fill="none" 
                          xmlns="http://www.w3.org/2000/svg"
                          className="text-white"
                        >
                          <path d="M1 13L13 1M13 1H4M13 1V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Bottom Interactive Board (Features Lighting scenario changer + scrolling prompt) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end mt-16 border-t border-white/10 pt-8" id="hero-footer-grid">
          
          {/* Column 1: Studio tag line */}
          <div className="text-left hidden md:block">
            <span className="text-gray-400 font-mono text-[10px] tracking-widest uppercase block mb-1">
              ESTABLISHED IN NEW DELHI
            </span>
            <p className="text-white/80 text-xs font-light tracking-wide leading-relaxed">
              Serving premium architectural designs for residential estates & high-end corporate headquarters.
            </p>
          </div>

          {/* Column 2: Interactive Lighting Control Dashboard - Simple & Small (ONLY on Slide 0) */}
          <div className="h-[72px] flex items-end">
            <AnimatePresence mode="wait">
              {currentSlide === 0 ? (
                <motion.div
                  key="lighting-panel"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className="bg-black/40 backdrop-blur-md border border-white/10 px-4 py-3.5 rounded-2xl flex items-center justify-between w-full"
                >
                  <div className="text-left">
                    <span className="text-[10px] font-mono tracking-wider text-white uppercase block font-semibold">
                      {t.lightingControl[currentLang]}
                    </span>
                    <span className="text-white/60 text-[10px] font-light block mt-0.5">
                      {isNightMode 
                        ? (currentLang === 'RU' ? 'Вечерний свет' : currentLang === 'ES' ? 'Modo noche' : 'Evening ambient')
                        : (currentLang === 'RU' ? 'Дневной свет' : currentLang === 'ES' ? 'Modo día' : 'Daylight')}
                    </span>
                  </div>
                  
                  <button
                    onClick={() => {
                      setIsNightMode(!isNightMode);
                    }}
                    className="py-1.5 px-3 bg-white hover:bg-gray-100 text-black text-[9px] uppercase font-mono tracking-widest rounded-lg transition-all flex items-center space-x-1.5 shadow-md font-semibold cursor-pointer"
                    id="toggle-ambient-light"
                  >
                    {isNightMode ? (
                      <>
                        <Sun className="w-3 h-3 text-black" />
                        <span>Day</span>
                      </>
                    ) : (
                      <>
                        <Moon className="w-3 h-3 text-gray-700" />
                        <span>Night</span>
                      </>
                    )}
                  </button>
                </motion.div>
              ) : (
                <div className="w-full h-1" />
              )}
            </AnimatePresence>
          </div>

          {/* Column 3: Scroll Down Link */}
          <div className="flex justify-end">
            <button
              onClick={() => scrollToSection('about')}
              className="group flex items-center space-x-3 text-white/70 hover:text-white transition-colors cursor-pointer"
              id="scroll-to-portfolio"
            >
              <span className="text-xs font-mono tracking-widest uppercase text-right leading-none">
                {t.scrollDown[currentLang]}
              </span>
              <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                <ArrowDown className="w-4 h-4 animate-bounce" />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Slide Indicator Dots on the right side */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 z-20 hidden md:flex flex-col space-y-4 items-center" id="hero-carousel-dots">
        {[0, 1, 2, 3].map((index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className="group relative flex items-center justify-end cursor-pointer"
            id={`hero-slide-dot-${index}`}
            title={`Slide ${index + 1}`}
          >
            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 mr-3 text-[10px] font-mono tracking-widest text-white uppercase bg-black/70 px-2 py-1 rounded border border-white/10 pointer-events-none whitespace-nowrap">
              {index === 0 
                ? (currentLang === 'RU' ? 'Интерактивная студия' : currentLang === 'ES' ? 'Estudio Interactivo' : 'Interactive Studio') 
                : index === 1 
                ? (currentLang === 'RU' ? 'Кулинарное пространство' : currentLang === 'ES' ? 'Espacio Culinario' : 'Culinary Space') 
                : index === 2 
                ? (currentLang === 'RU' ? 'Минималистичный лаунж' : currentLang === 'ES' ? 'Salón Minimalista' : 'Minimalist Lounge') 
                : (currentLang === 'RU' ? 'Представительский офис' : currentLang === 'ES' ? 'Oficina Ejecutiva' : 'Executive HQ')}
            </span>
            <div 
              className={`h-1.5 rounded-full transition-all duration-300 ${
                currentSlide === index ? 'w-8 bg-white' : 'w-1.5 bg-white/40 hover:bg-white/80'
              }`}
            />
          </button>
        ))}
      </div>

      {/* Mobile Slide Indicator Dots */}
      <div className="absolute bottom-28 left-1/2 -translate-x-1/2 z-20 flex md:hidden space-x-2.5 items-center" id="hero-carousel-dots-mobile">
        {[0, 1, 2, 3].map((index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              currentSlide === index ? 'w-6 bg-white' : 'w-1.5 bg-white/40'
            }`}
            id={`hero-slide-dot-mobile-${index}`}
          />
        ))}
      </div>
    </section>
  );
};

import React, { useState, useEffect, useRef } from 'react';
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
  const [mobileSlide, setMobileSlide] = useState(0);
  const t = translations.hero;

  // Sync isNightMode with mobileSlide (0 = Day, 1 = Night)
  useEffect(() => {
    if (mobileSlide === 0 && isNightMode) {
      setIsNightMode(false);
    } else if (mobileSlide === 1 && !isNightMode) {
      setIsNightMode(true);
    }
  }, [mobileSlide]);

  // Sync mobileSlide with isNightMode when toggling on desktop
  useEffect(() => {
    if (isNightMode && mobileSlide === 0) {
      setMobileSlide(1);
    } else if (!isNightMode && mobileSlide === 1) {
      setMobileSlide(0);
    }
  }, [isNightMode]);

  // High-reliability ref-based swipe gesture handlers for mobile devices
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);
  const touchEndRef = useRef<{ x: number; y: number } | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartRef.current = {
      x: e.touches[0].clientX,
      y: e.touches[0].clientY,
    };
    touchEndRef.current = {
      x: e.touches[0].clientX,
      y: e.touches[0].clientY,
    };
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!touchStartRef.current) return;
    touchEndRef.current = {
      x: e.touches[0].clientX,
      y: e.touches[0].clientY,
    };
  };

  const handleTouchEnd = () => {
    if (!touchStartRef.current || !touchEndRef.current) return;

    const diffX = touchEndRef.current.x - touchStartRef.current.x;
    const diffY = touchEndRef.current.y - touchStartRef.current.y;

    // Must be primarily a horizontal swipe and exceed 40px threshold
    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 40) {
      if (diffX > 0) {
        // Swipe Right -> Show Previous Slide
        setMobileSlide((prev) => (prev - 1 + 5) % 5);
      } else {
        // Swipe Left -> Show Next Slide
        setMobileSlide((prev) => (prev + 1) % 5);
      }
    }

    // Reset coordinates
    touchStartRef.current = null;
    touchEndRef.current = null;
  };

  const handleTouchCancel = () => {
    touchStartRef.current = null;
    touchEndRef.current = null;
  };

  // Custom data for the 5 mobile slides
  const mobileSlidesData = [
    {
      title: t.title,
      subtitle: t.subtitle,
    },
    {
      title: t.title,
      subtitle: t.subtitle,
    },
    {
      title: {
        EN: 'Spaces That Inspire.',
        RU: 'Пространства, которые вдохновляют.',
        ES: 'Espacios que inspiran.',
      },
      subtitle: {
        EN: 'Crafting timeless architecture and refined interiors that blend elegance, functionality, and natural light into every space.',
        RU: 'Создание вневременной архитектуры и изысканных интерьеров, гармонично сочетающих элегантность, функциональность и естественный свет в каждом пространстве.',
        ES: 'Creando arquitectura atemporal e interiores refinados que combinan elegancia, funcionalidad y luz natural en cada espacio.',
      }
    },
    {
      title: {
        EN: 'Designed for Beautiful Living.',
        RU: 'Создано для красивой жизни.',
        ES: 'Diseñado para una vida hermosa.',
      },
      subtitle: {
        EN: 'From elegant residences to sophisticated commercial spaces, we create timeless interiors where natural light, premium materials, and thoughtful craftsmanship come together.',
        RU: 'От элегантных резиденций до изысканных коммерческих помещений мы создаем вневременные интерьеры, в которых сочетаются естественный свет, премиальные материалы и продуманное мастерство.',
        ES: 'Desde elegantes residencias hasta sofisticados espacios comerciales, creamos interiores atemporales donde se unen la luz natural, los materiales de primera calidad y una cuidadosa artesanía.',
      }
    },
    {
      title: {
        EN: 'Luxury Architecture & Interior Design',
        RU: 'Роскошная архитектура и дизайн интерьера',
        ES: 'Arquitectura de lujo y diseño de interiores',
      },
      subtitle: {
        EN: 'Where Every Detail Defines Luxury. From iconic architecture to bespoke interiors, we create spaces that blend innovation, craftsmanship, and timeless elegance.',
        RU: 'Где каждая деталь определяет роскошь. От легендарной архитектуры до эксклюзивных интерьеров мы создаем пространства, в которых сочетаются инновации, мастерство и вневременная элегантность.',
        ES: 'Donde cada detalle define el lujo. Desde arquitectura icónica hasta interiores a medida, creamos espacios que combinan innovación, artesanía y elegancia atemporal.',
      }
    }
  ];

  const handleToggleLight = () => {
    const targetNight = !isNightMode;
    setIsNightMode(targetNight);
    setMobileSlide(targetNight ? 1 : 0);
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 select-none cursor-grab active:cursor-grabbing"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onTouchCancel={handleTouchCancel}
    >
      {/* Immersive Day/Night Background Image Transitions */}
      <div className="absolute inset-0 z-0 bg-black">
        {/* DESKTOP IMAGES (hidden on mobile, block on md and larger) */}
        <div className="hidden md:block absolute inset-0">
          {/* Day Background */}
          <div 
            className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out ${
              mobileSlide === 0 ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
            style={{
              backgroundImage: `url('https://vennky.sirv.com/ChatGPT%20Image%20Jul%205%2C%202026%2C%2009_20_31%20AM.png')`,
            }}
            aria-hidden="true"
          />

          {/* Night Background (warmer, rich shadows, glowing wardrobes) */}
          <div 
            className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out ${
              mobileSlide === 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
            style={{
              backgroundImage: `url('https://vennky.sirv.com/ChatGPT%20Image%20Jul%205%2C%202026%2C%2009_30_50%20AM.png')`,
            }}
            aria-hidden="true"
          />

          {/* Inspiring Spaces Background (Slide 2) */}
          <div 
            className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out ${
              mobileSlide === 2 ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
            style={{
              backgroundImage: `url('https://vennky.sirv.com/ChatGPT%20Image%20Jul%205%2C%202026%2C%2012_33_04%20PM.png')`,
            }}
            aria-hidden="true"
          />

          {/* Designed for Beautiful Living Background (Slide 3) */}
          <div 
            className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out ${
              mobileSlide === 3 ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
            style={{
              backgroundImage: `url('https://vennky.sirv.com/WhatsApp%20Image%202026-07-04%20at%208.07.00%20PM%20(2).jpeg')`,
            }}
            aria-hidden="true"
          />

          {/* Luxury Architecture & Interior Design Background (Slide 4) */}
          <div 
            className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out ${
              mobileSlide === 4 ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
            style={{
              backgroundImage: `url('https://vennky.sirv.com/WhatsApp%20Image%202026-07-04%20at%208.07.00%20PM.jpeg')`,
            }}
            aria-hidden="true"
          />
        </div>

        {/* MOBILE IMAGES (block on mobile, hidden on md and larger) */}
        <div className="block md:hidden absolute inset-0">
          {/* Day Background (Slide 0) */}
          <div 
            className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out ${
              mobileSlide === 0 ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
            style={{
              backgroundImage: `url('https://vennky.sirv.com/WhatsApp%20Image%202026-07-04%20at%208.06.59%20PM.jpeg')`,
            }}
            aria-hidden="true"
          />

          {/* Night Background (Slide 1) */}
          <div 
            className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out ${
              mobileSlide === 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
            style={{
              backgroundImage: `url('https://vennky.sirv.com/ChatGPT%20Image%20Jul%205%2C%202026%2C%2010_23_23%20AM.png')`,
            }}
            aria-hidden="true"
          />

          {/* Inspiring Spaces Background (Slide 2) */}
          <div 
            className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out ${
              mobileSlide === 2 ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
            style={{
              backgroundImage: `url('https://vennky.sirv.com/WhatsApp%20Image%202026-07-04%20at%208.07.00%20PM%20(1).jpeg')`,
            }}
            aria-hidden="true"
          />

          {/* Designed for Beautiful Living Background (Slide 3) */}
          <div 
            className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out ${
              mobileSlide === 3 ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
            style={{
              backgroundImage: `url('https://vennky.sirv.com/WhatsApp%20Image%202026-07-04%20at%208.07.00%20PM%20(2).jpeg')`,
            }}
            aria-hidden="true"
          />

          {/* Luxury Architecture & Interior Design Background (Slide 4) */}
          <div 
            className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out ${
              mobileSlide === 4 ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
            style={{
              backgroundImage: `url('https://vennky.sirv.com/WhatsApp%20Image%202026-07-04%20at%208.07.00%20PM.jpeg')`,
            }}
            aria-hidden="true"
          />
        </div>

        {/* Cinematic Overlays */}
        {/* Daylight Overlay: Fresh cool vignette */}
        <div 
          className={`absolute inset-0 transition-opacity duration-1000 bg-gradient-to-t from-gray-950/80 via-transparent to-gray-950/40 ${
            !isNightMode && mobileSlide < 2 ? 'opacity-100' : 'opacity-0'
          }`} 
        />
        {/* Nightlight Overlay: Luxurious golden dark vignette */}
        <div 
          className={`absolute inset-0 transition-opacity duration-1000 bg-gradient-to-t from-black via-black/45 to-black/55 ${
            isNightMode && mobileSlide < 2 ? 'opacity-100' : 'opacity-0'
          }`} 
        />

        {/* Ambient Glow behind center console */}
        <div 
          className={`absolute bottom-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-white/10 rounded-full blur-3xl transition-opacity duration-1000 ${
            isNightMode ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ display: mobileSlide < 2 ? 'block' : 'none' }}
        />
      </div>

      {/* Main Content Layout matching reference spacing */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col justify-between min-h-[calc(100vh-120px)] pb-12">
        
        {/* Spacer to push title down */}
        <div className="h-1" />

        {/* Central visual text console */}
        <div className="max-w-3xl mt-12 md:mt-24">
          <div className="space-y-6" id="hero-content">
            {/* Responsive and Animated Title/Subtitle Console */}
            <div className="min-h-[140px] md:min-h-[185px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`hero-slide-${mobileSlide}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-4 md:space-y-6"
                >
                  <h1 className="text-3xl md:text-6xl font-serif text-white tracking-tight leading-[1.1] font-medium drop-shadow-md">
                    {mobileSlidesData[mobileSlide].title[currentLang]}
                  </h1>

                  <p className="text-gray-200/90 text-xs md:text-base leading-relaxed max-w-2xl font-light">
                    {mobileSlidesData[mobileSlide].subtitle[currentLang]}
                  </p>
                </motion.div>
              </AnimatePresence>

              {mobileSlide >= 2 && (
                <div className="flex space-x-1.5 pt-4 md:pt-6">
                  {[0, 1, 2, 3, 4].map((idx) => (
                    <button
                      key={idx}
                      onClick={() => setMobileSlide(idx)}
                      className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                        mobileSlide === idx ? 'w-4 bg-white' : 'w-1.5 bg-white/30'
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Action pill button */}
            <div className="h-16 flex items-center">
              <div className="pt-4 flex flex-wrap items-center gap-6">
                <button
                  onClick={onOpenConsultation}
                  className="group flex items-center space-x-4 bg-white hover:bg-gray-100 text-gray-900 rounded-full pl-8 pr-3 py-3 font-medium transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 cursor-pointer"
                  id="start-project-cta"
                  aria-label="Start your interior design project with Spacenine Architects"
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
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Interactive Board (Features Lighting scenario changer + scrolling prompt) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end mt-16 border-t border-white/10 pt-8" id="hero-footer-grid">
          
          {/* Column 1: Empty grid slot to keep alignment */}
          <div className="hidden md:block" />

          {/* Column 2: Interactive Lighting Control Dashboard - Simple & Small */}
          <div className="h-[72px] flex items-end">
            <AnimatePresence mode="wait">
              {mobileSlide < 2 && (
                <motion.div
                  key="lighting-panel"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 15 }}
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
                  
                  <div className="flex items-center space-x-3">
                    {/* Slide Dots inside the panel for perfect UI consolidation */}
                    <div className="flex space-x-1.5">
                      {[0, 1, 2, 3, 4].map((idx) => (
                        <button
                          key={idx}
                          onClick={() => setMobileSlide(idx)}
                          className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                            mobileSlide === idx ? 'w-4 bg-white' : 'w-1.5 bg-white/30'
                          }`}
                          aria-label={`Go to slide ${idx + 1}`}
                        />
                      ))}
                    </div>

                    <button
                      onClick={handleToggleLight}
                      className="py-1.5 px-2.5 bg-white hover:bg-gray-100 text-black text-[9px] uppercase font-mono tracking-widest rounded-lg transition-all flex items-center space-x-1 shadow-md font-semibold cursor-pointer"
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
                  </div>
                </motion.div>
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
    </section>
  );
};


import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sun, Moon, ArrowDown, Send, MessageSquare } from 'lucide-react';
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
  const [isNightMode, setIsNightMode] = useState(true);

  const t = translations.hero;

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Immersive Day/Night Background Image Transitions */}
      <div className="absolute inset-0 z-0 bg-black">
        {/* Day Background */}
        <div 
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
            isNightMode ? 'opacity-0 scale-105' : 'opacity-90 scale-100'
          }`}
          style={{
            backgroundImage: `url('https://vennky.sirv.com/ChatGPT%20Image%20Jul%203%2C%202026%2C%2010_58_18%20AM.png')`,
          }}
          aria-hidden="true"
        />

        {/* Night Background (warmer, rich shadows, glowing wardrobes) */}
        <div 
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
            isNightMode ? 'opacity-90 scale-100' : 'opacity-0 scale-95'
          }`}
          style={{
            backgroundImage: `url('https://vennky.sirv.com/ChatGPT%20Image%20Jul%203%2C%202026%2C%2010_59_34%20AM.png')`,
          }}
          aria-hidden="true"
        />

        {/* Cinematic Overlays */}
        {/* Daylight Overlay: Fresh cool vignette */}
        <div 
          className={`absolute inset-0 transition-opacity duration-1000 bg-gradient-to-t from-gray-950/80 via-transparent to-gray-950/40 ${
            isNightMode ? 'opacity-0' : 'opacity-100'
          }`} 
        />
        {/* Nightlight Overlay: Luxurious golden dark vignette */}
        <div 
          className={`absolute inset-0 transition-opacity duration-1000 bg-gradient-to-t from-black via-black/45 to-black/55 ${
            isNightMode ? 'opacity-100' : 'opacity-0'
          }`} 
        />

        {/* Ambient Glow behind center console (Night mode only) */}
        <div 
          className={`absolute bottom-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-white/10 rounded-full blur-3xl transition-opacity duration-1000 ${
            isNightMode ? 'opacity-100' : 'opacity-0'
          }`}
        />
      </div>

      {/* Main Content Layout matching reference spacing */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col justify-between min-h-[calc(100vh-120px)] pb-12">
        
        {/* Spacer to push title down */}
        <div className="h-1" />

        {/* Central visual text console */}
        <div className="max-w-3xl mt-12 md:mt-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
            id="hero-content"
          >
            {/* Heading in chosen language */}
            <h1 className="text-4xl md:text-6xl font-serif text-white tracking-tight leading-[1.1] font-medium drop-shadow-md">
              {t.title[currentLang]}
            </h1>

            {/* Subheading text */}
            <p className="text-gray-200/90 text-sm md:text-base leading-relaxed max-w-2xl font-light">
              {t.subtitle[currentLang]}
            </p>

            {/* Action pill button exactly inspired by reference image */}
            <div className="pt-4 flex flex-wrap items-center gap-6">
              <button
                onClick={onOpenConsultation}
                className="group flex items-center space-x-4 bg-white hover:bg-gray-100 text-gray-900 rounded-full pl-8 pr-3 py-3 font-medium transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
                id="start-project-cta"
              >
                <span className="text-sm tracking-wider uppercase font-semibold">
                  {t.cta[currentLang]}
                </span>
                <div className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center transition-transform group-hover:rotate-45 duration-300">
                  <motion.svg 
                    width="14" 
                    height="14" 
                    viewBox="0 0 14 14" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-white"
                  >
                    <path d="M1 13L13 1M13 1H4M13 1V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </motion.svg>
                </div>
              </button>
            </div>
          </motion.div>
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

          {/* Column 2: Interactive Lighting Control Dashboard - Simple & Small */}
          <div className="bg-black/40 backdrop-blur-md border border-white/10 px-4 py-3.5 rounded-2xl flex items-center justify-between">
            <div className="text-left">
              <span className="text-[10px] font-mono tracking-wider text-white uppercase block">
                {t.lightingControl[currentLang]}
              </span>
              <span className="text-white/60 text-[10px] font-light block mt-0.5">
                {isNightMode 
                  ? (currentLang === 'RU' ? 'Вечерний свет' : currentLang === 'ES' ? 'Modo noche' : 'Evening ambient')
                  : (currentLang === 'RU' ? 'Дневной свет' : currentLang === 'ES' ? 'Modo día' : 'Daylight')}
              </span>
            </div>
            
            <button
              onClick={() => setIsNightMode(!isNightMode)}
              className="py-1.5 px-3 bg-white hover:bg-gray-100 text-black text-[9px] uppercase font-mono tracking-widest rounded-lg transition-all flex items-center space-x-1.5 shadow-md font-semibold"
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

          {/* Column 3: Scroll Down Link */}
          <div className="flex justify-end">
            <button
              onClick={() => scrollToSection('about')}
              className="group flex items-center space-x-3 text-white/70 hover:text-white transition-colors"
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

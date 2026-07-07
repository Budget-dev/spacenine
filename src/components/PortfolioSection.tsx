import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { Language } from '../types';
import { portfolioProjects } from '../data';

interface PortfolioSectionProps {
  currentLang: Language;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ currentLang }) => {
  // Explicit layout headings
  const sectionHeading = {
    EN: 'OUR PROJECTS',
    RU: 'НАШИ ПРОЕКТЫ',
    ES: 'NUESTROS PROYECTOS'
  };

  const handleProjectClick = (projectId: string) => {
    window.location.hash = projectId;
  };

  return (
    <section 
      id="portfolio" 
      className="py-24 md:py-32 bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 border-b border-zinc-100 dark:border-zinc-900 overflow-hidden relative"
    >
      {/* Soft ambient background glow */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none select-none" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-amber-600/5 rounded-full blur-3xl pointer-events-none select-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* DESIGN CONTEXT HEADER WITH METRICS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start mb-24 border-b border-zinc-100 dark:border-zinc-900 pb-16">
          {/* Left Side: Editorial Typography Heading & Statement */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6"
          >
            <h2 className="text-3xl md:text-5xl font-sans font-bold tracking-tight text-zinc-900 dark:text-white leading-tight">
              {currentLang === 'RU' ? 'Жилые пространства, созданные с душой' : currentLang === 'ES' ? 'Espacios habitables creados con intención' : 'Living spaces shaped with intention'}
            </h2>
            
            <p className="text-sm text-zinc-600 dark:text-zinc-300 font-light leading-relaxed max-w-xl">
              {currentLang === 'RU' 
                ? 'Мы проектируем дома, которые выдерживают всю полноту семейной жизни — повседневные привычки, праздники и потребность в тишине. Каждый проект начинается с диалога и завершается зданием, заслужившим свое место.' 
                : currentLang === 'ES' 
                  ? 'Diseñamos hogares que albergan todo el peso de la vida familiar: los hábitos diarios, las celebraciones, la necesidad de paz. Cada proyecto comienza con una conversación y termina con un edificio con identidad propia.' 
                  : 'We design homes that hold the full weight of a family\'s life — the daily habits, the celebrations, the need for quiet. Every project begins with a conversation and ends with a building that earns its place.'}
            </p>
          </motion.div>

          {/* Right Side: High-End Architecture Metrics */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="lg:col-span-5 grid grid-cols-2 gap-x-8 gap-y-10 self-center border-l border-zinc-100 dark:border-zinc-900 lg:pl-10"
          >
            <div className="space-y-1.5">
              <span className="text-2xl md:text-3xl font-mono font-bold text-zinc-900 dark:text-white block tracking-tight">4+</span>
              <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-500 block leading-tight">
                {currentLang === 'RU' ? 'Жилых Проектов' : currentLang === 'ES' ? 'Proyectos Residenciales' : 'Residential Projects'}
              </span>
            </div>
            
            <div className="space-y-1.5">
              <span className="text-2xl md:text-3xl font-mono font-bold text-zinc-900 dark:text-white block tracking-tight">2024—26</span>
              <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-500 block leading-tight">
                {currentLang === 'RU' ? 'Текущий Портфолио' : currentLang === 'ES' ? 'Portafolio Actual' : 'Current Portfolio'}
              </span>
            </div>
            
            <div className="space-y-1.5">
              <span className="text-2xl md:text-3xl font-mono font-bold text-zinc-900 dark:text-white block tracking-tight">3</span>
              <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-500 block leading-tight">
                {currentLang === 'RU' ? 'Районов · Телангана' : currentLang === 'ES' ? 'Distritos · Telangana' : 'Districts · Telangana'}
              </span>
            </div>
            
            <div className="space-y-1.5">
              <span className="text-2xl md:text-3xl font-mono font-bold text-zinc-900 dark:text-white block tracking-tight">01 — 04</span>
              <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-500 block leading-tight">
                {currentLang === 'RU' ? 'Выдающиеся работы' : currentLang === 'ES' ? 'Diseños Destacados' : 'Featured Designs'}
              </span>
            </div>
          </motion.div>
        </div>

        {/* ASYMMETRIC PORTFOLIO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-24 md:gap-y-0" id="portfolio-grid">
          
          {/* LEFT COLUMN */}
          <div className="flex flex-col space-y-24 md:space-y-36">
            
            {/* Project 1: Urban Design */}
            {portfolioProjects[0] && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.7 }}
                className="group relative cursor-pointer"
                onClick={() => handleProjectClick(portfolioProjects[0].id)}
                id="portfolio-item-urban"
              >
                {/* Image Wrap */}
                <div className="relative overflow-hidden aspect-[4/3.3] bg-neutral-100 dark:bg-zinc-900 border border-neutral-200/50 dark:border-zinc-800 rounded-none">
                  <img
                    src={portfolioProjects[0].image}
                    alt={portfolioProjects[0].title[currentLang]}
                    className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  {/* Fine linear gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-40 transition-opacity duration-300" />
                </div>

                {/* Overlapping Caption Box */}
                <div 
                  className="absolute top-[18%] -right-3 sm:-right-6 md:-right-10 z-20 w-[72%] max-w-[250px] bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 p-5 shadow-[0_15px_40px_rgba(0,0,0,0.06)] transition-all duration-500 group-hover:border-[#bca374] rounded-none"
                >
                  <div className="flex items-start justify-between">
                    <span className="text-[#8a6f3e] dark:text-[#d3bc8f] font-semibold tracking-wide text-sm md:text-[15px] font-sans">
                      {portfolioProjects[0].title[currentLang]}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-[#8a6f3e] dark:text-[#d3bc8f] shrink-0 ml-2 mt-0.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                  </div>
                  <p className="mt-2.5 text-neutral-500 dark:text-neutral-400 font-sans text-[10px] md:text-[11px] leading-relaxed font-light line-clamp-2 md:line-clamp-3">
                    {portfolioProjects[0].description[currentLang]}
                  </p>
                </div>
              </motion.div>
            )}

            {/* Project 3: Commercial */}
            {portfolioProjects[2] && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.7 }}
                className="group relative cursor-pointer"
                onClick={() => handleProjectClick(portfolioProjects[2].id)}
                id="portfolio-item-commercial"
              >
                {/* Image Wrap */}
                <div className="relative overflow-hidden aspect-[4/5] bg-neutral-100 dark:bg-zinc-900 border border-neutral-200/50 dark:border-zinc-800 rounded-none">
                  <img
                    src={portfolioProjects[2].image}
                    alt={portfolioProjects[2].title[currentLang]}
                    className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-40 transition-opacity duration-300" />
                </div>

                {/* Overlapping Caption Box */}
                <div 
                  className="absolute top-[22%] -right-3 sm:-right-6 md:-right-10 z-20 w-[72%] max-w-[250px] bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 p-5 shadow-[0_15px_40px_rgba(0,0,0,0.06)] transition-all duration-500 group-hover:border-[#bca374] rounded-none"
                >
                  <div className="flex items-start justify-between">
                    <span className="text-[#8a6f3e] dark:text-[#d3bc8f] font-semibold tracking-wide text-sm md:text-[15px] font-sans">
                      {portfolioProjects[2].title[currentLang]}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-[#8a6f3e] dark:text-[#d3bc8f] shrink-0 ml-2 mt-0.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                  </div>
                  <p className="mt-2.5 text-neutral-500 dark:text-neutral-400 font-sans text-[10px] md:text-[11px] leading-relaxed font-light line-clamp-2 md:line-clamp-3">
                    {portfolioProjects[2].description[currentLang]}
                  </p>
                </div>
              </motion.div>
            )}

          </div>

          {/* RIGHT COLUMN (OFFSET DOWNWARDS) */}
          <div className="flex flex-col space-y-24 md:space-y-36 md:translate-y-28">
            
            {/* Project 2: Interior & Exterior */}
            {portfolioProjects[1] && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.7 }}
                className="group relative cursor-pointer"
                onClick={() => handleProjectClick(portfolioProjects[1].id)}
                id="portfolio-item-interior"
              >
                {/* Image Wrap */}
                <div className="relative overflow-hidden aspect-[4/3.1] bg-neutral-100 dark:bg-zinc-900 border border-neutral-200/50 dark:border-zinc-800 rounded-none">
                  <img
                    src={portfolioProjects[1].image}
                    alt={portfolioProjects[1].title[currentLang]}
                    className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-40 transition-opacity duration-300" />
                </div>

                {/* Overlapping Caption Box */}
                <div 
                  className="absolute bottom-[18%] -left-3 sm:-left-6 md:-left-10 z-20 w-[72%] max-w-[250px] bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 p-5 shadow-[0_15px_40px_rgba(0,0,0,0.06)] transition-all duration-500 group-hover:border-[#bca374] rounded-none"
                >
                  <div className="flex items-start justify-between">
                    <span className="text-[#8a6f3e] dark:text-[#d3bc8f] font-semibold tracking-wide text-sm md:text-[15px] font-sans">
                      {portfolioProjects[1].title[currentLang]}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-[#8a6f3e] dark:text-[#d3bc8f] shrink-0 ml-2 mt-0.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                  </div>
                  <p className="mt-2.5 text-neutral-500 dark:text-neutral-400 font-sans text-[10px] md:text-[11px] leading-relaxed font-light line-clamp-2 md:line-clamp-3">
                    {portfolioProjects[1].description[currentLang]}
                  </p>
                </div>
              </motion.div>
            )}

            {/* Project 4: Innovative Designs */}
            {portfolioProjects[3] && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.7 }}
                className="group relative cursor-pointer"
                onClick={() => handleProjectClick(portfolioProjects[3].id)}
                id="portfolio-item-innovative"
              >
                {/* Image Wrap */}
                <div className="relative overflow-hidden aspect-[3/4.5] bg-neutral-100 dark:bg-zinc-900 border border-neutral-200/50 dark:border-zinc-800 rounded-none">
                  <img
                    src={portfolioProjects[3].image}
                    alt={portfolioProjects[3].title[currentLang]}
                    className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-40 transition-opacity duration-300" />
                </div>

                {/* Overlapping Caption Box */}
                <div 
                  className="absolute bottom-[10%] -right-3 sm:-right-6 md:-right-10 z-20 w-[72%] max-w-[250px] bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 p-5 shadow-[0_15px_40px_rgba(0,0,0,0.06)] transition-all duration-500 group-hover:border-[#bca374] rounded-none"
                >
                  <div className="flex items-start justify-between">
                    <span className="text-[#8a6f3e] dark:text-[#d3bc8f] font-semibold tracking-wide text-sm md:text-[15px] font-sans">
                      {portfolioProjects[3].title[currentLang]}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-[#8a6f3e] dark:text-[#d3bc8f] shrink-0 ml-2 mt-0.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                  </div>
                  <p className="mt-2.5 text-neutral-500 dark:text-neutral-400 font-sans text-[10px] md:text-[11px] leading-relaxed font-light line-clamp-2 md:line-clamp-3">
                    {portfolioProjects[3].description[currentLang]}
                  </p>
                </div>
              </motion.div>
            )}

          </div>

        </div>

        {/* Spacer for offset grid layout */}
        <div className="h-16 md:h-28" />

      </div>
    </section>
  );
};

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, X, CheckSquare, Compass, Star, ArrowUpRight, ArrowLeft } from 'lucide-react';
import { Language, PortfolioProject } from '../types';
import { translations, portfolioProjects, testimonials } from '../data';

interface PortfolioSectionProps {
  currentLang: Language;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ currentLang }) => {
  const t = translations.portfolio;
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);

  // Get matching testimonial if any
  const getProjectTestimonial = (projectId: string) => {
    if (projectId === 'project-1') return testimonials[0];
    if (projectId === 'project-4') return testimonials[1];
    return null;
  };

  // Auto-scroll on project selection
  useEffect(() => {
    if (selectedProject) {
      const el = document.getElementById('portfolio');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [selectedProject]);

  const handleBackToGrid = () => {
    setSelectedProject(null);
    setTimeout(() => {
      const el = document.getElementById('portfolio');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 50);
  };

  const ft = {
    back: {
      EN: '← Back to Projects',
      RU: '← Назад к проектам',
      ES: '← Volver a Proyectos'
    },
    breadcrumbHome: {
      EN: 'Portfolio',
      RU: 'Портфолио',
      ES: 'Portafolio'
    },
    technicalFeatures: {
      EN: 'Project Scope & Deliverables',
      RU: 'Состав проекта и материалы',
      ES: 'Alcance y Entregables'
    },
    specsArea: {
      EN: 'Main Dimension / Concept',
      RU: 'Размер / Концепция',
      ES: 'Dimensión / Concepto'
    },
    specsLocation: {
      EN: 'Location',
      RU: 'Локация',
      ES: 'Ubicación'
    },
    specsYear: {
      EN: 'Year Completed',
      RU: 'Год завершения',
      ES: 'Año de Finalización'
    },
    testimonialTitle: {
      EN: 'Client Testimonial',
      RU: 'Отзыв клиента',
      ES: 'Testimonio del Cliente'
    }
  };

  // Explicit layout headings
  const sectionHeading = {
    EN: 'OUR PROJECTS',
    RU: 'НАШИ ПРОЕКТЫ',
    ES: 'NUESTROS PROYECTOS'
  };

  // Separate Project Detail Page View
  if (selectedProject) {
    const testimonial = getProjectTestimonial(selectedProject.id);
    return (
      <section 
        id="portfolio" 
        className="py-16 md:py-24 bg-white text-zinc-900 border-b border-zinc-100 overflow-hidden relative"
      >
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none select-none" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-amber-600/5 rounded-full blur-3xl pointer-events-none select-none" />

        <div className="max-w-5xl mx-auto px-6 relative z-10" id="portfolio-detail-view">
          
          {/* Top navigation row */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10 pb-6 border-b border-zinc-100">
            <button
              onClick={handleBackToGrid}
              className="group flex items-center space-x-2.5 text-sm font-mono font-bold text-[#8a6f3e] hover:text-[#bca374] transition-colors focus:outline-none cursor-pointer"
              id="back-to-portfolio"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              <span>{ft.back[currentLang]}</span>
            </button>
            
            <div className="text-xs font-mono text-zinc-400 flex items-center space-x-1.5 select-none">
              <span>{ft.breadcrumbHome[currentLang]}</span>
              <span className="text-zinc-300">/</span>
              <span className="text-zinc-600 font-medium">{selectedProject.categoryLabel[currentLang]}</span>
              <span className="text-zinc-300">/</span>
              <span className="text-zinc-900 font-bold">{selectedProject.title[currentLang]}</span>
            </div>
          </div>

          {/* Separate page layout */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16"
          >
            {/* Left Column: Image & caption (occupies 7 columns on desktop) */}
            <div className="md:col-span-7 space-y-6">
              <div className="relative overflow-hidden rounded-3xl aspect-[16/10] sm:aspect-[4/3] bg-neutral-100 border border-neutral-200/60 shadow-[0_20px_50px_rgba(0,0,0,0.04)] group">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title[currentLang]}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-102"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 pointer-events-none" />
                <div className="absolute bottom-6 left-6 text-white z-10">
                  <span className="text-[10px] font-mono tracking-widest text-[#bca374] uppercase font-bold">
                    SPACENINE ARCHITECTS
                  </span>
                  <p className="text-xs font-light mt-1 text-zinc-100">
                    &copy; {selectedProject.year} Premium Site Delivery
                  </p>
                </div>
              </div>

              {/* Extra visual metadata block */}
              <div className="p-6 bg-zinc-50 border border-zinc-100 rounded-2xl space-y-3">
                <div className="flex items-center space-x-2 text-zinc-400">
                  <MapPin className="w-4 h-4 text-[#8a6f3e] shrink-0" />
                  <span className="text-xs font-mono uppercase tracking-wider">{ft.specsLocation[currentLang]}</span>
                </div>
                <p className="text-sm font-medium text-zinc-800 font-serif">
                  {selectedProject.location[currentLang]}
                </p>
              </div>
            </div>

            {/* Right Column: details */}
            <div className="md:col-span-5 space-y-8 bg-white">
              
              {/* Category & Title */}
              <div className="space-y-3">
                <span className="text-xs font-mono font-bold text-[#8a6f3e] tracking-widest uppercase block">
                  {selectedProject.categoryLabel[currentLang]}
                </span>
                <h1 className="text-2xl md:text-3.5xl font-sans font-bold tracking-tight text-zinc-900 leading-tight">
                  {selectedProject.title[currentLang]}
                </h1>
                <div className="h-[2px] w-12 bg-[#bca374] mt-2" />
              </div>

              {/* Specs metadata cards */}
              <div className="grid grid-cols-3 gap-3">
                <div className="p-3 bg-zinc-50/50 border border-zinc-150 rounded-xl text-center">
                  <span className="text-[10px] font-mono text-zinc-400 block uppercase">
                    {ft.specsArea[currentLang]}
                  </span>
                  <span className="text-xs font-bold text-zinc-800 font-mono mt-1 block">
                    {selectedProject.area}
                  </span>
                </div>
                <div className="p-3 bg-zinc-50/50 border border-zinc-150 rounded-xl text-center">
                  <span className="text-[10px] font-mono text-zinc-400 block uppercase">
                    {ft.specsLocation[currentLang]}
                  </span>
                  <span className="text-xs font-bold text-zinc-800 mt-1 block truncate px-1">
                    {selectedProject.location[currentLang].split(',')[0]}
                  </span>
                </div>
                <div className="p-3 bg-zinc-50/50 border border-zinc-150 rounded-xl text-center">
                  <span className="text-[10px] font-mono text-zinc-400 block uppercase">
                    {ft.specsYear[currentLang]}
                  </span>
                  <span className="text-sm font-bold text-zinc-800 font-mono mt-1 block">
                    {selectedProject.year}
                  </span>
                </div>
              </div>

              {/* Description body */}
              <div className="space-y-4">
                <p className="text-sm text-zinc-600 font-light leading-relaxed font-sans">
                  {selectedProject.description[currentLang]}
                </p>
              </div>

              {/* Key Spaces section */}
              {selectedProject.keySpaces && selectedProject.keySpaces.length > 0 && (
                <div className="space-y-4 pt-4 border-t border-zinc-100">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#8a6f3e] font-semibold flex items-center space-x-1.5">
                    <Compass className="w-3.5 h-3.5 text-[#8a6f3e]" />
                    <span>{currentLang === 'RU' ? 'Ключевые пространства' : currentLang === 'ES' ? 'Espacios Clave' : 'Key Spaces'}</span>
                  </span>
                  
                  <div className="grid grid-cols-2 gap-3" id="key-spaces-grid">
                    {selectedProject.keySpaces.map((space, idx) => (
                      <div key={idx} className="p-3 bg-zinc-50 border border-zinc-100 rounded-xl">
                        <span className="text-[11px] font-medium text-zinc-800 block leading-tight">
                          {space.name[currentLang]}
                        </span>
                        <span className="text-xs text-[#8a6f3e] font-mono mt-1 block">
                          {space.size}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Specs check squares */}
              <div className="space-y-4 pt-4 border-t border-zinc-100">
                <span className="text-xs font-mono uppercase tracking-widest text-[#8a6f3e] font-semibold flex items-center space-x-1.5">
                  <CheckSquare className="w-3.5 h-3.5 text-[#8a6f3e]" />
                  <span>{ft.technicalFeatures[currentLang]}</span>
                </span>
                
                <ul className="space-y-3" id="project-specs-list">
                  {selectedProject.details[currentLang].map((detail, idx) => (
                    <li key={idx} className="flex items-start space-x-3 text-xs text-zinc-600 font-sans">
                      <CheckSquare className="w-4 h-4 text-[#8a6f3e] shrink-0 mt-0.5" />
                      <span className="font-light leading-relaxed">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Client testimonial */}
              {testimonial && (
                <div className="bg-amber-50/25 border border-amber-100/50 p-5 rounded-2xl space-y-3 pt-5 relative">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold text-[#8a6f3e] tracking-wider uppercase block">
                      {ft.testimonialTitle[currentLang]}
                    </span>
                    <div className="flex items-center space-x-0.5 text-amber-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-amber-500 text-amber-500" />
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-xs font-serif italic text-zinc-700 leading-relaxed">
                    "{testimonial.text[currentLang]}"
                  </p>
                  
                  <div className="pt-2 border-t border-zinc-200/50 flex items-center justify-between text-[10px] font-mono text-zinc-400">
                    <span className="font-bold text-zinc-600">{testimonial.author}</span>
                    <span>{testimonial.role[currentLang].split('(')[0]}</span>
                  </div>
                </div>
              )}

            </div>
          </motion.div>

        </div>
      </section>
    );
  }

  return (
    <section 
      id="portfolio" 
      className="py-24 md:py-32 bg-white text-zinc-900 border-b border-zinc-100 overflow-hidden relative"
    >
      {/* Soft ambient background glow */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none select-none" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-amber-600/5 rounded-full blur-3xl pointer-events-none select-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* DESIGN CONTEXT HEADER WITH METRICS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start mb-24 border-b border-zinc-100 pb-16">
          {/* Left Side: Editorial Typography Heading & Statement */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-3xl md:text-5xl font-sans font-bold tracking-tight text-zinc-900 leading-tight">
              {currentLang === 'RU' ? 'Жилые пространства, созданные с душой' : currentLang === 'ES' ? 'Espacios habitables creados con intención' : 'Living spaces shaped with intention'}
            </h2>
            
            <p className="text-sm text-zinc-600 font-light leading-relaxed max-w-xl">
              {currentLang === 'RU' 
                ? 'Мы проектируем дома, которые выдерживают всю полноту семейной жизни — повседневные привычки, праздники и потребность в тишине. Каждый проект начинается с диалога и завершается зданием, заслужившим свое место.' 
                : currentLang === 'ES' 
                  ? 'Diseñamos hogares que albergan todo el peso de la vida familiar: los hábitos diarios, las celebraciones, la necesidad de paz. Cada proyecto comienza con una conversación y termina con un edificio con identidad propia.' 
                  : 'We design homes that hold the full weight of a family\'s life — the daily habits, the celebrations, the need for quiet. Every project begins with a conversation and ends with a building that earns its place.'}
            </p>
          </div>

          {/* Right Side: High-End Architecture Metrics */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-x-8 gap-y-10 self-center border-l border-zinc-100 lg:pl-10">
            <div className="space-y-1.5">
              <span className="text-2xl md:text-3xl font-mono font-bold text-zinc-900 block tracking-tight">4+</span>
              <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 block leading-tight">
                {currentLang === 'RU' ? 'Жилых Проектов' : currentLang === 'ES' ? 'Proyectos Residenciales' : 'Residential Projects'}
              </span>
            </div>
            
            <div className="space-y-1.5">
              <span className="text-2xl md:text-3xl font-mono font-bold text-zinc-900 block tracking-tight">2024—26</span>
              <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 block leading-tight">
                {currentLang === 'RU' ? 'Текущий Портфолио' : currentLang === 'ES' ? 'Portafolio Actual' : 'Current Portfolio'}
              </span>
            </div>
            
            <div className="space-y-1.5">
              <span className="text-2xl md:text-3xl font-mono font-bold text-zinc-900 block tracking-tight">3</span>
              <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 block leading-tight">
                {currentLang === 'RU' ? 'Районов · Телангана' : currentLang === 'ES' ? 'Distritos · Telangana' : 'Districts · Telangana'}
              </span>
            </div>
            
            <div className="space-y-1.5">
              <span className="text-2xl md:text-3xl font-mono font-bold text-zinc-900 block tracking-tight">01 — 04</span>
              <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 block leading-tight">
                {currentLang === 'RU' ? 'Избранные Проекты' : currentLang === 'ES' ? 'Proyectos Seleccionados' : 'Selected Projects'}
              </span>
            </div>
          </div>
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
                onClick={() => setSelectedProject(portfolioProjects[0])}
                id="portfolio-item-urban"
              >
                {/* Image Wrap */}
                <div className="relative overflow-hidden aspect-[4/3.3] bg-neutral-100 border border-neutral-200/50">
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
                  className="absolute top-[18%] -right-3 sm:-right-6 md:-right-10 z-20 w-[72%] max-w-[250px] bg-white border border-zinc-100 p-5 shadow-[0_15px_40px_rgba(0,0,0,0.06)] transition-all duration-500 group-hover:border-[#bca374]"
                >
                  <div className="flex items-start justify-between">
                    <span className="text-[#8a6f3e] font-semibold tracking-wide text-sm md:text-[15px] font-sans">
                      {portfolioProjects[0].title[currentLang]}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-[#8a6f3e] shrink-0 ml-2 mt-0.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                  </div>
                  <p className="mt-2.5 text-neutral-500 font-sans text-[10px] md:text-[11px] leading-relaxed font-light line-clamp-2 md:line-clamp-3">
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
                onClick={() => setSelectedProject(portfolioProjects[2])}
                id="portfolio-item-commercial"
              >
                {/* Image Wrap */}
                <div className="relative overflow-hidden aspect-[4/5] bg-neutral-100 border border-neutral-200/50">
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
                  className="absolute top-[22%] -right-3 sm:-right-6 md:-right-10 z-20 w-[72%] max-w-[250px] bg-white border border-zinc-100 p-5 shadow-[0_15px_40px_rgba(0,0,0,0.06)] transition-all duration-500 group-hover:border-[#bca374]"
                >
                  <div className="flex items-start justify-between">
                    <span className="text-[#8a6f3e] font-semibold tracking-wide text-sm md:text-[15px] font-sans">
                      {portfolioProjects[2].title[currentLang]}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-[#8a6f3e] shrink-0 ml-2 mt-0.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                  </div>
                  <p className="mt-2.5 text-neutral-500 font-sans text-[10px] md:text-[11px] leading-relaxed font-light line-clamp-2 md:line-clamp-3">
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
                onClick={() => setSelectedProject(portfolioProjects[1])}
                id="portfolio-item-interior"
              >
                {/* Image Wrap */}
                <div className="relative overflow-hidden aspect-[4/3.1] bg-neutral-100 border border-neutral-200/50">
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
                  className="absolute bottom-[18%] -left-3 sm:-left-6 md:-left-10 z-20 w-[72%] max-w-[250px] bg-white border border-zinc-100 p-5 shadow-[0_15px_40px_rgba(0,0,0,0.06)] transition-all duration-500 group-hover:border-[#bca374]"
                >
                  <div className="flex items-start justify-between">
                    <span className="text-[#8a6f3e] font-semibold tracking-wide text-sm md:text-[15px] font-sans">
                      {portfolioProjects[1].title[currentLang]}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-[#8a6f3e] shrink-0 ml-2 mt-0.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                  </div>
                  <p className="mt-2.5 text-neutral-500 font-sans text-[10px] md:text-[11px] leading-relaxed font-light line-clamp-2 md:line-clamp-3">
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
                onClick={() => setSelectedProject(portfolioProjects[3])}
                id="portfolio-item-innovative"
              >
                {/* Image Wrap */}
                <div className="relative overflow-hidden aspect-[3/4.5] bg-neutral-100 border border-neutral-200/50">
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
                  className="absolute bottom-[10%] -right-3 sm:-right-6 md:-right-10 z-20 w-[72%] max-w-[250px] bg-white border border-zinc-100 p-5 shadow-[0_15px_40px_rgba(0,0,0,0.06)] transition-all duration-500 group-hover:border-[#bca374]"
                >
                  <div className="flex items-start justify-between">
                    <span className="text-[#8a6f3e] font-semibold tracking-wide text-sm md:text-[15px] font-sans">
                      {portfolioProjects[3].title[currentLang]}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-[#8a6f3e] shrink-0 ml-2 mt-0.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                  </div>
                  <p className="mt-2.5 text-neutral-500 font-sans text-[10px] md:text-[11px] leading-relaxed font-light line-clamp-2 md:line-clamp-3">
                    {portfolioProjects[3].description[currentLang]}
                  </p>
                </div>
              </motion.div>
            )}

          </div>

        </div>

        {/* Spacer for offset grid layout */}
        <div className="h-16 md:h-28" />

        {/* IMMERSIVE DETAILED LUXURY DARK OVERLAY MODAL */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
              id="portfolio-modal-overlay"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 50, scale: 0.95 }}
                transition={{ type: 'spring', damping: 25, stiffness: 180 }}
                className="bg-white border border-neutral-200 rounded-3xl overflow-hidden max-w-4xl w-full shadow-2xl relative z-10 my-8 text-zinc-900"
                onClick={(e) => e.stopPropagation()}
                id="portfolio-modal"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 p-2.5 bg-white/80 border border-neutral-200 text-neutral-600 rounded-full hover:bg-neutral-100 hover:text-black transition-all z-20 focus:outline-none cursor-pointer"
                  id="close-portfolio-modal"
                >
                  <X className="w-4 h-4" />
                </button>

                {/* Grid Layout inside Modal */}
                <div className="grid grid-cols-1 md:grid-cols-2">
                  
                  {/* Left Column: Image */}
                  <div className="relative h-64 md:h-full min-h-[340px]">
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title[currentLang]}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent md:bg-gradient-to-r md:from-black/20 md:to-transparent" />
                    <div className="absolute bottom-6 left-6 text-white hidden md:block z-10">
                      <span className="text-[9px] font-mono tracking-widest text-[#bca374] uppercase font-bold">
                        SPACENINE ARCHITECTS
                      </span>
                      <p className="text-xs font-light mt-1 text-neutral-200">
                        {t.specsLocation[currentLang]} {selectedProject.location[currentLang]}
                      </p>
                    </div>
                  </div>

                  {/* Right Column: details */}
                  <div className="p-8 space-y-6 max-h-[85vh] overflow-y-auto bg-white" id="modal-details-scroll">
                    
                    {/* Header */}
                    <div className="space-y-2">
                      <span className="text-xs font-mono font-bold text-[#bca374] tracking-widest uppercase">
                        {selectedProject.categoryLabel[currentLang]}
                      </span>
                      <h3 className="text-xl md:text-2xl font-sans font-bold tracking-wide text-zinc-900 leading-tight">
                        {selectedProject.title[currentLang]}
                      </h3>
                    </div>

                    {/* Metadata chips */}
                    <div className="grid grid-cols-3 gap-2 border-y border-neutral-150 py-3 text-center bg-neutral-50 rounded-xl border border-neutral-200/40">
                      <div>
                        <span className="text-[9px] font-mono text-neutral-400 block uppercase">
                          {t.specsArea[currentLang]}
                        </span>
                        <span className="text-xs font-bold text-zinc-800 font-mono mt-0.5 block">
                          {selectedProject.area}
                        </span>
                      </div>
                      <div>
                        <span className="text-[9px] font-mono text-neutral-400 block uppercase">
                          {t.specsLocation[currentLang]}
                        </span>
                        <span className="text-[10px] font-bold text-zinc-800 mt-0.5 block truncate px-1">
                          {selectedProject.location[currentLang].split(',')[0]}
                        </span>
                      </div>
                      <div>
                        <span className="text-[9px] font-mono text-neutral-400 block uppercase">
                          {t.specsYear[currentLang]}
                        </span>
                        <span className="text-xs font-bold text-zinc-800 font-mono mt-0.5 block">
                          {selectedProject.year}
                        </span>
                      </div>
                    </div>

                    {/* Paragraph description */}
                    <p className="text-xs text-neutral-600 font-light leading-relaxed">
                      {selectedProject.description[currentLang]}
                    </p>

                     {/* Detailed Specifications Checklist */}
                    <div className="space-y-3">
                      <span className="text-xs font-mono uppercase tracking-widest text-[#8a6f3e] font-semibold flex items-center space-x-1.5">
                        <Compass className="w-3.5 h-3.5 text-[#8a6f3e]" />
                        <span>{currentLang === 'RU' ? 'Техническая интеграция' : currentLang === 'ES' ? 'Especificaciones Técnicas' : 'Custom Technical Features'}</span>
                      </span>
                      <ul className="space-y-2.5" id="project-specs-list">
                        {selectedProject.details[currentLang].map((detail, idx) => (
                          <li key={idx} className="flex items-start space-x-2 text-xs text-neutral-600">
                            <CheckSquare className="w-4 h-4 text-[#8a6f3e] shrink-0 mt-0.5" />
                            <span className="font-light">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Associated client testimonial */}
                    {getProjectTestimonial(selectedProject.id) && (
                      <div className="bg-neutral-50 border border-neutral-150 p-4 rounded-2xl space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-mono font-bold text-[#8a6f3e] tracking-wider uppercase">
                            CLIENT TESTIMONIAL
                          </span>
                          <div className="flex items-center space-x-0.5 text-amber-500">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-3 h-3 fill-amber-500 text-amber-500" />
                            ))}
                          </div>
                        </div>
                        <p className="text-xs font-serif italic text-zinc-700 leading-relaxed">
                          "{getProjectTestimonial(selectedProject.id)?.text[currentLang]}"
                        </p>
                        <div className="pt-1.5 border-t border-neutral-200/60 flex items-center justify-between text-[10px] font-mono text-neutral-400">
                          <span className="font-bold text-zinc-600">{getProjectTestimonial(selectedProject.id)?.author}</span>
                          <span>{getProjectTestimonial(selectedProject.id)?.role[currentLang].split('(')[0]}</span>
                        </div>
                      </div>
                    )}

                  </div>

                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

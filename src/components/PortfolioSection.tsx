import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Maximize2, X, Sparkles, Sliders, CheckSquare, Calendar, Compass, Star } from 'lucide-react';
import { Language, PortfolioProject } from '../types';
import { translations, portfolioProjects, testimonials } from '../data';

interface PortfolioSectionProps {
  currentLang: Language;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ currentLang }) => {
  const t = translations.portfolio;
  const [filter, setFilter] = useState<'all' | 'residential' | 'commercial' | 'conceptual'>('all');
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);

  const filteredProjects = portfolioProjects.filter((project) => {
    if (filter === 'all') return true;
    return project.category === filter;
  });

  // Get matching testimonial if any
  const getProjectTestimonial = (projectId: string) => {
    if (projectId === 'project-1') return testimonials[0];
    if (projectId === 'project-4') return testimonials[1];
    return null;
  };

  return (
    <section id="portfolio" className="py-24 bg-white text-gray-900 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* SECTION HEADER */}
        <div className="max-w-3xl mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <span className="text-xs font-mono tracking-widest text-black uppercase block">
              SIGNATURE PROJECTS
            </span>
            <h2 className="text-3xl md:text-5xl font-serif tracking-tight font-medium">
              {t.heading[currentLang]}
            </h2>
            <div className="h-[2px] w-16 bg-black" />
            <p className="text-gray-500 text-sm md:text-base font-light leading-relaxed">
              {t.subheading[currentLang]}
            </p>
          </motion.div>
        </div>

        {/* FILTER NAVIGATION BUTTONS */}
        <div className="flex flex-wrap items-center gap-3 mb-12" id="portfolio-filters">
          <button
            onClick={() => setFilter('all')}
            className={`px-5 py-2.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all relative ${
              filter === 'all' ? 'text-white' : 'text-gray-500 hover:text-black hover:bg-gray-50'
            }`}
          >
            {filter === 'all' && (
              <motion.div
                layoutId="activeFilterBg"
                className="absolute inset-0 bg-black rounded-full z-0"
                transition={{ type: 'spring', stiffness: 380, damping: 30 }}
              />
            )}
            <span className="relative z-10">{t.filterAll[currentLang]}</span>
          </button>

          <button
            onClick={() => setFilter('residential')}
            className={`px-5 py-2.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all relative ${
              filter === 'residential' ? 'text-white' : 'text-gray-500 hover:text-black hover:bg-gray-50'
            }`}
          >
            {filter === 'residential' && (
              <motion.div
                layoutId="activeFilterBg"
                className="absolute inset-0 bg-black rounded-full z-0"
                transition={{ type: 'spring', stiffness: 380, damping: 30 }}
              />
            )}
            <span className="relative z-10">{t.filterResidential[currentLang]}</span>
          </button>

          <button
            onClick={() => setFilter('commercial')}
            className={`px-5 py-2.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all relative ${
              filter === 'commercial' ? 'text-white' : 'text-gray-500 hover:text-black hover:bg-gray-50'
            }`}
          >
            {filter === 'commercial' && (
              <motion.div
                layoutId="activeFilterBg"
                className="absolute inset-0 bg-black rounded-full z-0"
                transition={{ type: 'spring', stiffness: 380, damping: 30 }}
              />
            )}
            <span className="relative z-10">{t.filterCommercial[currentLang]}</span>
          </button>
        </div>

        {/* PORTFOLIO GRID */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          id="portfolio-grid"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.4 }}
                className="group relative bg-gray-50 rounded-3xl overflow-hidden border border-gray-100 cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500"
                onClick={() => setSelectedProject(project)}
                id={`project-card-${project.id}`}
              >
                {/* Image Container with high-end dark glow styling */}
                <div className="aspect-[16/10] overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.title[currentLang]}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-gray-950/10 to-transparent opacity-60 group-hover:opacity-85 transition-opacity duration-300" />
                  
                  {/* Floating Specs Details Overlay */}
                  <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-white">
                    <div className="space-y-1">
                      <span className="text-[10px] font-mono tracking-widest text-white/80 uppercase">
                        {project.categoryLabel[currentLang]}
                      </span>
                      <h3 className="text-lg md:text-xl font-serif font-semibold leading-tight drop-shadow-md">
                        {project.title[currentLang]}
                      </h3>
                    </div>
                    <div className="p-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white hover:bg-white hover:text-black transition-all">
                      <Maximize2 className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Sub-bar text info */}
                <div className="px-6 py-4 flex items-center justify-between text-xs text-gray-500 font-mono border-t border-gray-100 bg-white">
                  <div className="flex items-center space-x-1.5">
                    <MapPin className="w-3.5 h-3.5 text-black" />
                    <span>{project.location[currentLang]}</span>
                  </div>
                  <div className="space-x-4">
                    <span>{project.area}</span>
                    <span>{project.year}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* IMMERSIVE DETAILED OVERLAY MODAL */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
              id="portfolio-modal-overlay"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 50, scale: 0.95 }}
                transition={{ type: 'spring', damping: 25, stiffness: 180 }}
                className="bg-white rounded-3xl overflow-hidden max-w-4xl w-full shadow-2xl relative z-10 my-8"
                onClick={(e) => e.stopPropagation()}
                id="portfolio-modal"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 p-2 bg-black/40 text-white rounded-full hover:bg-black/80 transition-all z-20 focus:outline-none"
                  id="close-portfolio-modal"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Grid Layout inside Modal */}
                <div className="grid grid-cols-1 md:grid-cols-2">
                  
                  {/* Left Column: Huge High-res Image with visual properties */}
                  <div className="relative h-64 md:h-full min-h-[300px]">
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title[currentLang]}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent md:bg-gradient-to-r md:from-black/10 md:to-transparent" />
                    <div className="absolute bottom-6 left-6 text-white hidden md:block">
                      <span className="text-[10px] font-mono tracking-widest text-white uppercase">
                        SPACENINE MASTERPIECE
                      </span>
                      <p className="text-xs font-light mt-1 text-white/80">
                        {t.specsLocation[currentLang]} {selectedProject.location[currentLang]}
                      </p>
                    </div>
                  </div>

                  {/* Right Column: Full technical data sheets */}
                  <div className="p-8 space-y-6 max-h-[85vh] overflow-y-auto" id="modal-details-scroll">
                    
                    {/* Header */}
                    <div className="space-y-2">
                      <span className="text-xs font-mono font-bold text-black tracking-widest uppercase">
                        {selectedProject.categoryLabel[currentLang]}
                      </span>
                      <h3 className="text-2xl font-serif font-bold text-gray-900 leading-tight">
                        {selectedProject.title[currentLang]}
                      </h3>
                    </div>

                    {/* Metadata chips */}
                    <div className="grid grid-cols-3 gap-2 border-y border-gray-100 py-3 text-center bg-gray-50 rounded-xl">
                      <div>
                        <span className="text-[9px] font-mono text-gray-400 block uppercase">
                          {t.specsArea[currentLang]}
                        </span>
                        <span className="text-xs font-bold text-gray-800 font-mono mt-0.5 block">
                          {selectedProject.area}
                        </span>
                      </div>
                      <div>
                        <span className="text-[9px] font-mono text-gray-400 block uppercase">
                          {t.specsLocation[currentLang]}
                        </span>
                        <span className="text-[11px] font-bold text-gray-800 mt-0.5 block truncate px-1">
                          {selectedProject.location[currentLang].split(',')[0]}
                        </span>
                      </div>
                      <div>
                        <span className="text-[9px] font-mono text-gray-400 block uppercase">
                          {t.specsYear[currentLang]}
                        </span>
                        <span className="text-xs font-bold text-gray-800 font-mono mt-0.5 block">
                          {selectedProject.year}
                        </span>
                      </div>
                    </div>

                    {/* Paragraph description */}
                    <p className="text-xs text-gray-600 font-light leading-relaxed">
                      {selectedProject.description[currentLang]}
                    </p>

                     {/* Detailed Specifications Checklist */}
                    <div className="space-y-3">
                      <span className="text-xs font-mono uppercase tracking-widest text-gray-400 font-semibold flex items-center space-x-1.5">
                        <Compass className="w-3.5 h-3.5 text-black" />
                        <span>{currentLang === 'RU' ? 'Техническая интеграция' : currentLang === 'ES' ? 'Especificaciones Técnicas' : 'Custom Technical Features'}</span>
                      </span>
                      <ul className="space-y-2.5" id="project-specs-list">
                        {selectedProject.details[currentLang].map((detail, idx) => (
                          <li key={idx} className="flex items-start space-x-2 text-xs text-gray-600">
                            <CheckSquare className="w-4 h-4 text-black shrink-0 mt-0.5" />
                            <span className="font-light">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Associated client testimonial */}
                    {getProjectTestimonial(selectedProject.id) && (
                      <div className="bg-gray-50 border border-gray-100 p-4 rounded-2xl space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-mono font-bold text-black tracking-wider uppercase">
                            CLIENT TESTIMONIAL
                          </span>
                          <div className="flex items-center space-x-0.5 text-black">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-3 h-3 fill-black text-black" />
                            ))}
                          </div>
                        </div>
                        <p className="text-xs font-serif italic text-gray-700 leading-relaxed">
                          "{getProjectTestimonial(selectedProject.id)?.text[currentLang]}"
                        </p>
                        <div className="pt-1.5 border-t border-gray-100/50 flex items-center justify-between text-[10px] font-mono text-gray-500">
                          <span className="font-bold">{getProjectTestimonial(selectedProject.id)?.author}</span>
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

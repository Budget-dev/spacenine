import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { Language } from '../types';
import { portfolioProjects } from '../data';

interface PortfolioSectionProps {
  currentLang: Language;
}

// Map project IDs to their custom image assets for each of the 4 services
const projectServiceImages: Record<string, Record<string, string>> = {
  'project-1': {
    'architectural-design': 'https://vennky.sirv.com/wetransfer_portfolio_2026-07-02_0759/Narendar/day%20view.jpg',
    'interior-design': 'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&q=80&w=1200',
    'architecture-build': 'https://vennky.sirv.com/wetransfer_portfolio_2026-07-02_0759/Narendar/day%20view.jpg',
    'interiors-build': 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200',
  },
  'project-2': {
    'architectural-design': 'https://vennky.sirv.com/wetransfer_portfolio_2026-07-02_0759/sudeep%20reddy/night%20view.jpg',
    'interior-design': 'https://vennky.sirv.com/wetransfer_portfolio_2026-07-02_0759/sudeep%20reddy/interiors/Enscape_2024-08-29-23-55-39_Enscape%20scene%207.png',
    'architecture-build': 'https://vennky.sirv.com/wetransfer_portfolio_2026-07-02_0759/sudeep%20reddy/night%20view.jpg',
    'interiors-build': 'https://vennky.sirv.com/wetransfer_portfolio_2026-07-02_0759/sudeep%20reddy/interiors/Enscape_2024-08-30-00-04-53_Enscape%20scene%2011.png',
  },
  'project-3': {
    'architectural-design': 'https://vennky.sirv.com/wetransfer_portfolio_2026-07-02_0759/suresh/day%20view1.jpg',
    'interior-design': 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=1200',
    'architecture-build': 'https://vennky.sirv.com/wetransfer_portfolio_2026-07-02_0759/suresh/IMG_3898%20(1).PNG',
    'interiors-build': 'https://images.unsplash.com/photo-1617806118233-18e1db207f62?auto=format&fit=crop&q=80&w=1200',
  },
  'project-4': {
    'architectural-design': 'https://vennky.sirv.com/wetransfer_portfolio_2026-07-02_0759/venkat%20reddy/elevation%202.jpg',
    'interior-design': 'https://vennky.sirv.com/wetransfer_portfolio_2026-07-02_0759/venkat%20reddy/Enscape_2025-05-03-23-53-19_Enscape%20scene%201.png',
    'architecture-build': 'https://vennky.sirv.com/wetransfer_portfolio_2026-07-02_0759/venkat%20reddy/elevation3.jpg',
    'interiors-build': 'https://vennky.sirv.com/wetransfer_portfolio_2026-07-02_0759/venkat%20reddy/Enscape_2025-05-07-13-07-51_Enscape%20scene%2024.jpg',
  },
};

// Supported services for each project
const projectSupportedServices: Record<string, string[]> = {
  'project-1': ['architectural-design'],
  'project-2': ['architectural-design', 'interior-design'],
  'project-3': ['architectural-design'],
  'project-4': ['architectural-design', 'interior-design'],
};

// Concise labels for the project-level buttons in English, Russian, and Spanish
const serviceLabels = {
  'architectural-design': { EN: 'Architecture', RU: 'Архитектура', ES: 'Arq' },
  'interior-design': { EN: 'Interiors', RU: 'Интерьеры', ES: 'Int' }
};

// Project card layout styling configuration to maintain unique editorial proportions for each project
const projectCardStyles: Record<string, { aspect: string; caption: string }> = {
  'project-1': {
    aspect: 'aspect-[4/3.3]',
    caption: 'top-[18%] -right-3 sm:-right-6 md:-right-10'
  },
  'project-2': {
    aspect: 'aspect-[4/3.1]',
    caption: 'bottom-[18%] -left-3 sm:-left-6 md:-left-10'
  },
  'project-3': {
    aspect: 'aspect-[4/5]',
    caption: 'top-[22%] -right-3 sm:-right-6 md:-right-10'
  },
  'project-4': {
    aspect: 'aspect-[3/4.5]',
    caption: 'bottom-[10%] -right-3 sm:-right-6 md:-right-10'
  }
};

// Subcomponent for each Project Card
interface ProjectCardProps {
  project: typeof portfolioProjects[0];
  currentLang: Language;
  globalCategory: string;
  onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, currentLang, globalCategory, onClick }) => {
  const [activeService, setActiveService] = useState<string>('architectural-design');
  const styles = projectCardStyles[project.id] || { aspect: 'aspect-[4/3]', caption: 'bottom-4 right-4' };

  // Synchronize card active service with the globally selected category
  useEffect(() => {
    const supported = projectSupportedServices[project.id] || [];
    if (globalCategory !== 'all' && supported.includes(globalCategory)) {
      setActiveService(globalCategory);
    } else if (supported.length > 0) {
      // Default to the first supported service
      setActiveService(supported[0]);
    }
  }, [globalCategory, project.id]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
      className="group relative cursor-pointer"
      onClick={onClick}
    >
      {/* Dynamic Image frame preserving specific project aspects */}
      <div className={`relative overflow-hidden ${styles.aspect} bg-neutral-100 dark:bg-zinc-900 border border-neutral-200/50 dark:border-zinc-800 rounded-none`}>
        <motion.img
          key={activeService}
          initial={{ opacity: 0.82, scale: 1.01 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          src={projectServiceImages[project.id]?.[activeService] || project.image}
          alt={project.title[currentLang]}
          className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-40 transition-opacity duration-300" />
      </div>

      {/* Floating overlapping Caption Box with individual service switches inside */}
      <div 
        className={`absolute z-20 w-[65%] max-w-[190px] md:max-w-[210px] bg-white/30 dark:bg-zinc-950/40 backdrop-blur-xl border border-white/40 dark:border-white/10 p-4 shadow-[inset_0_1px_2px_rgba(255,255,255,0.4),_0_10px_30px_rgba(0,0,0,0.12)] transition-all duration-500 group-hover:border-[#bca374]/60 rounded-none ${styles.caption}`}
      >
        <div className="flex items-start justify-between">
          <span className="text-[#725a2e] dark:text-[#ebd19f] font-semibold tracking-wide text-xs md:text-sm font-sans">
            {project.title[currentLang]}
          </span>
          <ArrowUpRight className="w-3.5 h-3.5 text-[#725a2e] dark:text-[#ebd19f] shrink-0 ml-1.5 mt-0.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
        </div>
        <p className="mt-1.5 text-neutral-800 dark:text-neutral-200 font-sans text-[10px] md:text-[10.5px] leading-relaxed font-normal line-clamp-2">
          {project.description[currentLang]}
        </p>

        {/* Project level sub-toggles to switch services & images on the fly */}
        <div className="mt-2.5 pt-2 border-t border-white/30 dark:border-white/5">
          <div className="flex flex-wrap gap-1">
            {(projectSupportedServices[project.id] || []).map((srvId) => {
              const isActive = activeService === srvId;
              return (
                <button
                  key={srvId}
                  onClick={(e) => {
                    e.stopPropagation(); // Block opening the project page
                    setActiveService(srvId);
                  }}
                  className={`text-[8.5px] font-sans font-medium tracking-wide px-1.5 py-0.5 uppercase transition-all duration-200 border cursor-pointer ${
                    isActive
                      ? 'bg-[#8a6f3e]/90 text-white border-[#8a6f3e] dark:bg-[#d3bc8f]/90 dark:text-zinc-950 dark:border-[#d3bc8f] font-semibold shadow-sm'
                      : 'bg-white/40 text-zinc-700 border-white/30 dark:bg-black/20 dark:text-zinc-300 dark:border-white/5 hover:bg-white/60 dark:hover:bg-black/45'
                  }`}
                >
                  {serviceLabels[srvId as keyof typeof serviceLabels]?.[currentLang] || srvId}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ currentLang }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: { EN: 'All Projects', RU: 'Все проекты', ES: 'Todos' } },
    { id: 'architectural-design', label: { EN: 'Architecture', RU: 'Архитектура', ES: 'Arquitectura' } },
    { id: 'interior-design', label: { EN: 'Interior Design', RU: 'Дизайн интерьеров', ES: 'Interiores' } }
  ];

  const handleProjectClick = (projectId: string) => {
    window.location.hash = projectId;
  };

  // Filter projects based on top category selection
  const filteredProjects = portfolioProjects.filter((project) => {
    if (selectedCategory === 'all') return true;
    const supported = projectSupportedServices[project.id] || [];
    return supported.includes(selectedCategory);
  });

  // Distribute projects between Left and Right columns dynamically to preserve asymmetrical offsets
  const leftColProjects = filteredProjects.filter((_, i) => i % 2 === 0);
  const rightColProjects = filteredProjects.filter((_, i) => i % 2 !== 0);

  return (
    <section 
      id="portfolio" 
      className="py-12 md:py-16 bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 border-b border-zinc-100 dark:border-zinc-900 overflow-hidden relative"
    >
      {/* Soft ambient background glow */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none select-none" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-amber-600/5 rounded-full blur-3xl pointer-events-none select-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* DESIGN CONTEXT HEADER */}
        <div className="mb-12 border-b border-zinc-100 dark:border-zinc-900 pb-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl space-y-6"
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

          {/* STYLISH MAIN CATEGORY TABS SELECTOR */}
          <div className="mt-10 overflow-x-auto scrollbar-none pb-2 select-none -mx-6 px-6">
            <div className="flex items-center space-x-1 p-1 bg-neutral-100/80 dark:bg-zinc-900/60 rounded-full w-max border border-zinc-200/40 dark:border-zinc-800/80">
              {categories.map((cat) => {
                const isActive = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className="relative px-3.5 text-[11px] sm:text-xs font-sans font-medium uppercase tracking-wider rounded-full transition-all cursor-pointer focus:outline-none whitespace-nowrap flex items-center justify-center h-8"
                    style={{ WebkitTapHighlightColor: 'transparent' }}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="activeCategory"
                        className="absolute inset-0 bg-white dark:bg-zinc-800 shadow-[0_2px_8px_rgba(0,0,0,0.06)] rounded-full z-0"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className={`relative z-10 transition-colors duration-200 ${
                      isActive 
                        ? 'text-zinc-900 dark:text-white font-semibold' 
                        : 'text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-300'
                    }`}>
                      {cat.label[currentLang]}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* ASYMMETRIC PORTFOLIO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 md:gap-y-0" id="portfolio-grid">
          
          {/* LEFT COLUMN */}
          <div className="flex flex-col space-y-12 md:space-y-20">
            {leftColProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                currentLang={currentLang}
                globalCategory={selectedCategory}
                onClick={() => handleProjectClick(project.id)}
              />
            ))}
          </div>

          {/* RIGHT COLUMN (OFFSET DOWNWARDS) */}
          <div className="flex flex-col space-y-12 md:space-y-20 md:translate-y-16">
            {rightColProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                currentLang={currentLang}
                globalCategory={selectedCategory}
                onClick={() => handleProjectClick(project.id)}
              />
            ))}
          </div>

        </div>

        {/* Spacer for offset grid layout */}
        <div className="h-8 md:h-12" />

      </div>
    </section>
  );
};

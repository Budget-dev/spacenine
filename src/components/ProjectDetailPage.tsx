import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, MapPin, Calendar, Compass, Star, CheckSquare, Layers } from 'lucide-react';
import { Language, PortfolioProject } from '../types';
import { portfolioProjects, testimonials, translations } from '../data';

interface ProjectDetailPageProps {
  currentLang: Language;
  projectId: string;
  onBackToPortfolio: () => void;
  onOpenConsultation: (brief: string) => void;
}

export const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({
  currentLang,
  projectId,
  onBackToPortfolio,
  onOpenConsultation,
}) => {
  const project = portfolioProjects.find((p) => p.id === projectId);
  const [activeImage, setActiveImage] = useState<string>('');

  useEffect(() => {
    if (project) {
      setActiveImage(project.image);
    }
  }, [project]);

  if (!project) {
    return (
      <div className="py-32 text-center text-zinc-500">
        Project not found.
        <button onClick={onBackToPortfolio} className="block mx-auto mt-4 text-[#bca374]">
          Back to Portfolio
        </button>
      </div>
    );
  }

  // Get matching testimonial if any
  const getProjectTestimonial = (id: string) => {
    if (id === 'project-1') return testimonials[0];
    if (id === 'project-4') return testimonials[1];
    return null;
  };

  const testimonial = getProjectTestimonial(project.id);
  const t = translations.portfolio;

  const ft = {
    back: {
      EN: 'Back to Portfolio',
      RU: 'Назад в портфолио',
      ES: 'Volver a Portafolio'
    },
    technicalFeatures: {
      EN: 'Project Scope & Deliverables',
      RU: 'Состав проекта и материалы',
      ES: 'Alcance y Entregables'
    },
    specsArea: {
      EN: 'Dimensions',
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
    keySpacesTitle: {
      EN: 'Key Spatial Metrics',
      RU: 'Основные параметры помещений',
      ES: 'Métricas Espaciales Clave'
    },
    ctaTitle: {
      EN: 'Interested in a similar vision?',
      RU: 'Интересует подобное решение?',
      ES: '¿Le interesa una visión similar?'
    },
    ctaDesc: {
      EN: 'Let us coordinate a custom spatial layout aligned with your specific lifestyle needs and building standards.',
      RU: 'Позвольте нам разработать индивидуальное планировочное решение, соответствующее вашему стилю жизни и высоким стандартам качества.',
      ES: 'Permítanos coordinar una distribución espacial personalizada alineada con sus necesidades de estilo de vida.'
    },
    ctaButton: {
      EN: 'Request Custom Proposal',
      RU: 'Запросить коммерческое предложение',
      ES: 'Solicitar Propuesta Personalizada'
    }
  };

  const handleCtaClick = () => {
    const briefText = {
      EN: `Hello spacenine architects, I am inspired by the ${project.title.EN} and would love to request a proposal for a similar design Concept.`,
      RU: `Здравствуйте, spacenine architects! Меня вдохновил проект ${project.title.RU}, и я бы хотел запросить коммерческое предложение на аналогичный проект.`,
      ES: `Hola spacenine architects, me inspira el proyecto ${project.title.ES} y me gustaría solicitar una propuesta para un concepto de diseño similar.`
    };
    onOpenConsultation(briefText[currentLang]);
  };

  return (
    <div className="bg-white dark:bg-zinc-950 min-h-screen text-zinc-900 dark:text-zinc-50 pb-24 relative overflow-hidden">
      
      {/* Ambient backgrounds */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none select-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-600/5 rounded-full blur-3xl pointer-events-none select-none" />

      {/* Floating Header Actions / Breadcrumb */}
      <div className="max-w-5xl mx-auto px-6 pt-8 pb-4">
        <button
          onClick={onBackToPortfolio}
          className="group inline-flex items-center space-x-2.5 text-xs font-mono uppercase tracking-wider text-neutral-500 hover:text-[#bca374] dark:hover:text-[#d3bc8f] transition-colors focus:outline-none cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span>{ft.back[currentLang]}</span>
        </button>
      </div>

      {/* 1. HERO VISUAL SHOWCASE */}
      <div className="max-w-5xl mx-auto px-6 mt-4 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Visual Frame & Thumbnails */}
          <div className="lg:col-span-8 space-y-4">
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative aspect-[16/10] w-full rounded-none overflow-hidden bg-neutral-900 border border-neutral-200/40 dark:border-zinc-800 shadow-xl group"
            >
              <img
                src={activeImage || project.image}
                alt={project.title[currentLang]}
                className="w-full h-full object-cover transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
              
              {/* Architectural Overlay Branding Tag */}
              <div className="absolute top-6 left-6 text-white z-10">
                <span className="text-[9px] font-mono tracking-widest text-[#bca374] uppercase font-bold bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-none border border-white/5">
                  SPACENINE ARCHITECTS · {project.year}
                </span>
              </div>

              {/* Location Tag */}
              <div className="absolute bottom-6 left-6 text-white z-10 flex items-center space-x-2">
                <MapPin className="w-3.5 h-3.5 text-[#bca374]" />
                <p className="text-xs font-light text-neutral-100">
                  {project.location[currentLang]}
                </p>
              </div>
            </motion.div>

            {/* Gallery Thumbnail Row */}
            {project.gallery && project.gallery.length > 1 && (
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="p-3 bg-zinc-50 dark:bg-zinc-900 border border-neutral-200/50 dark:border-zinc-800 rounded-none flex items-center gap-3 overflow-x-auto scrollbar-none"
              >
                {project.gallery.map((imgUrl, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(imgUrl)}
                    className={`relative w-16 h-16 rounded-none overflow-hidden border-2 transition-all flex-shrink-0 cursor-pointer ${
                      activeImage === imgUrl 
                        ? 'border-[#bca374] scale-105 shadow-md' 
                        : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={imgUrl} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </button>
                ))}
              </motion.div>
            )}
          </div>

          {/* Core Info Details Card */}
          <div className="lg:col-span-4 space-y-6">
            <div className="space-y-2">
              <span className="text-[10px] font-mono font-bold text-[#bca374] tracking-widest uppercase block">
                {project.categoryLabel[currentLang]}
              </span>
              <h1 className="text-2xl md:text-3xl font-sans font-bold tracking-tight text-zinc-900 dark:text-white leading-tight">
                {project.title[currentLang]}
              </h1>
            </div>

            {/* Metadata Table */}
            <div className="border-t border-b border-neutral-200/60 dark:border-zinc-800 py-4 space-y-3 font-sans">
              <div className="flex justify-between items-center text-xs">
                <span className="text-neutral-400 font-light">{ft.specsLocation[currentLang]}</span>
                <span className="font-semibold text-zinc-800 dark:text-zinc-200">{project.location[currentLang].split(',')[0]}</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-neutral-400 font-light">{ft.specsArea[currentLang]}</span>
                <span className="font-mono font-semibold text-zinc-800 dark:text-zinc-200">{project.area}</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-neutral-400 font-light">{ft.specsYear[currentLang]}</span>
                <span className="font-mono font-semibold text-zinc-800 dark:text-zinc-200">{project.year}</span>
              </div>
            </div>

            {/* Key Spaces Metric List */}
            {project.keySpaces && project.keySpaces.length > 0 && (
              <div className="space-y-3">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-500 flex items-center space-x-1.5">
                  <Layers className="w-3.5 h-3.5 text-[#bca374]" />
                  <span>{ft.keySpacesTitle[currentLang]}</span>
                </h4>
                <div className="grid grid-cols-2 gap-2 bg-neutral-50 dark:bg-zinc-900 p-4 rounded-none border border-neutral-200/30 dark:border-zinc-800">
                  {project.keySpaces.map((space, idx) => (
                    <div key={idx} className="border-b border-neutral-200/40 dark:border-zinc-800/60 pb-1.5 last:border-0">
                      <span className="text-[10px] text-zinc-400 block font-light leading-tight">
                        {space.name[currentLang]}
                      </span>
                      <span className="text-[11px] font-mono text-zinc-700 dark:text-zinc-200 font-medium block">
                        {space.size}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

        </div>
      </div>

      {/* 2. DESCRIPTION & TECHNICAL SCOPE */}
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 border-t border-zinc-100 dark:border-zinc-900 pt-16">
          
          {/* Left Side: Long Narrative */}
          <div className="md:col-span-7 space-y-6">
            <h3 className="text-lg md:text-xl font-sans font-semibold text-zinc-800 dark:text-zinc-100">
              {currentLang === 'RU' ? 'Концептуальное описание' : currentLang === 'ES' ? 'Descripción del Concepto' : 'The Design Narrative'}
            </h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-300 font-light leading-relaxed">
              {project.description[currentLang]}
            </p>

            {/* Client Testimonial Integration */}
            {testimonial && (
              <div className="bg-amber-500/5 border border-[#bca374]/20 p-6 rounded-none space-y-3 mt-10">
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-mono font-bold text-[#8a6f3e] tracking-widest uppercase">
                    CLIENT TESTIMONIAL
                  </span>
                  <div className="flex items-center space-x-0.5 text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                </div>
                <p className="text-xs md:text-sm font-serif italic text-zinc-700 dark:text-zinc-300 leading-relaxed">
                  "{testimonial.text[currentLang]}"
                </p>
                <div className="pt-3 border-t border-neutral-200/50 dark:border-zinc-800/60 flex items-center justify-between text-[11px] font-mono text-neutral-400">
                  <span className="font-bold text-zinc-700 dark:text-zinc-200">{testimonial.author}</span>
                  <span>{testimonial.role[currentLang].split('(')[0]}</span>
                </div>
              </div>
            )}
          </div>

          {/* Right Side: Scope of Deliverables */}
          <div className="md:col-span-5 space-y-6">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#8a6f3e] flex items-center space-x-2">
              <Compass className="w-4 h-4 text-[#8a6f3e]" />
              <span>{ft.technicalFeatures[currentLang]}</span>
            </h3>
            
            <ul className="space-y-4" id="project-specs-detail-list">
              {(project.deliverables ? project.deliverables[currentLang] : project.details[currentLang]).map((item, idx) => (
                <li key={idx} className="flex items-start space-x-3 text-xs md:text-sm text-neutral-600 dark:text-neutral-300">
                  <CheckSquare className="w-4 h-4 text-[#8a6f3e] shrink-0 mt-0.5" />
                  <span className="font-light">{item}</span>
                </li>
              ))}
            </ul>

            {/* Bottom Proposal CTA inside Column */}
            <div className="pt-6 border-t border-neutral-100 dark:border-zinc-900 mt-8 space-y-4">
              <div>
                <h4 className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">{ft.ctaTitle[currentLang]}</h4>
                <p className="text-[11px] text-zinc-500 leading-normal mt-1">{ft.ctaDesc[currentLang]}</p>
              </div>
              <button
                onClick={handleCtaClick}
                className="w-full py-3 bg-zinc-900 hover:bg-[#bca374] dark:bg-white dark:text-zinc-950 dark:hover:bg-[#bca374] dark:hover:text-white text-white text-xs font-mono uppercase tracking-wider font-semibold rounded-none transition-all shadow-md hover:shadow-lg focus:outline-none cursor-pointer"
              >
                {ft.ctaButton[currentLang]}
              </button>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

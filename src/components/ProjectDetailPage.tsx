import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, MapPin, Calendar, Star, Layers } from 'lucide-react';
import { Language, PortfolioProject } from '../types';
import { portfolioProjects, testimonials, translations } from '../data';

interface ProjectDetailPageProps {
  currentLang: Language;
  projectId: string;
  onBackToPortfolio: () => void;
  onOpenConsultation: (brief: string) => void;
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

const projectSupportedServices: Record<string, string[]> = {
  'project-1': ['architectural-design'],
  'project-2': ['architectural-design', 'interior-design'],
  'project-3': ['architectural-design'],
  'project-4': ['architectural-design', 'interior-design'],
};

const serviceLabels = {
  'architectural-design': { EN: 'Architecture', RU: 'Архитектура', ES: 'Arquitectura' },
  'interior-design': { EN: 'Interior Design', RU: 'Дизайн интерьеров', ES: 'Diseño de Interiores' }
};

export const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({
  currentLang,
  projectId,
  onBackToPortfolio,
  onOpenConsultation,
}) => {
  const project = portfolioProjects.find((p) => p.id === projectId);
  const [activeImage, setActiveImage] = useState<string>('');
  const [activeService, setActiveService] = useState<string>('architectural-design');

  useEffect(() => {
    if (project) {
      const supported = projectSupportedServices[project.id] || [];
      const initialService = supported[0] || 'architectural-design';
      setActiveService(initialService);
      setActiveImage(projectServiceImages[project.id]?.[initialService] || project.image);
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
      EN: 'Scope of Work',
      RU: 'Объем работ',
      ES: 'Alcance del Trabajo'
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
            {/* Service switching tabs */}
            <div className="overflow-x-auto scrollbar-none pb-2 select-none -mx-6 px-6">
              <div className="flex items-center space-x-1 p-1 bg-neutral-100/80 dark:bg-zinc-900/60 rounded-full w-max border border-zinc-200/40 dark:border-zinc-800/80">
                {(projectSupportedServices[project.id] || []).map((srvId) => {
                  const isActive = activeService === srvId;
                  return (
                    <button
                      key={srvId}
                      onClick={() => {
                        setActiveService(srvId);
                        const img = projectServiceImages[project.id]?.[srvId];
                        if (img) setActiveImage(img);
                      }}
                      className="relative px-3.5 text-[11px] sm:text-xs font-sans font-medium uppercase tracking-wider rounded-full transition-all cursor-pointer focus:outline-none whitespace-nowrap flex items-center justify-center h-8"
                      style={{ WebkitTapHighlightColor: 'transparent' }}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="activeDetailService"
                          className="absolute inset-0 bg-white dark:bg-zinc-800 shadow-[0_2px_8px_rgba(0,0,0,0.06)] rounded-full z-0"
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                      )}
                      <span className={`relative z-10 transition-colors duration-200 ${
                        isActive 
                          ? 'text-zinc-900 dark:text-white font-semibold' 
                          : 'text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-300'
                      }`}>
                        {serviceLabels[srvId as keyof typeof serviceLabels]?.[currentLang]}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <motion.div 
              key={activeService}
              initial={{ opacity: 0.95, scale: 0.99 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="relative aspect-[16/10] w-full rounded-none overflow-hidden bg-neutral-900 border border-neutral-200/40 dark:border-zinc-800 shadow-xl group"
            >
              <img
                src={activeImage || project.image}
                alt={`${project.title[currentLang]} - Architectural design by Spacenine Architects`}
                className="w-full h-full object-cover transition-all duration-700"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
              
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
                    <img 
                      src={imgUrl} 
                      className="w-full h-full object-cover" 
                      referrerPolicy="no-referrer" 
                      loading="lazy"
                      alt={`${project.title[currentLang]} gallery image ${i + 1}`}
                    />
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
            </div>


          </div>

        </div>
      </div>

      {/* 2. DESCRIPTION & TECHNICAL SCOPE */}
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 border-t border-zinc-100 dark:border-zinc-900 pt-16">
          
          {/* Left Side: Long Narrative */}
          <div className="md:col-span-8 space-y-6">
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
                  <span>{testimonial.role[currentLang]}</span>
                </div>
              </div>
            )}
          </div>

          {/* Right Side: Proposal CTA Card */}
          <div className="md:col-span-4 space-y-6">
            <div className="p-6 bg-zinc-50 dark:bg-zinc-900 border border-neutral-200/40 dark:border-zinc-800 space-y-4">
              <div>
                <h4 className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">{ft.ctaTitle[currentLang]}</h4>
                <p className="text-[11px] text-zinc-500 leading-normal mt-2">{ft.ctaDesc[currentLang]}</p>
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

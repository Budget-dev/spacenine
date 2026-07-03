import React from 'react';
import { motion } from 'motion/react';
import { Check, ArrowRight, Clock, Box } from 'lucide-react';
import { Language, ServicePageId } from '../types';

interface ServicesSectionProps {
  currentLang: Language;
  onOpenConsultationWithEstimate: (estimateDetails: string) => void;
  selectedService: ServicePageId;
  setSelectedService: (service: ServicePageId) => void;
}

interface ServicePageData {
  id: ServicePageId;
  title: Record<Language, string>;
  subtitle: Record<Language, string>;
  image: string;
  duration: Record<Language, string>;
  deliverables: Record<Language, string[]>;
  process: {
    title: Record<Language, string>;
    desc: Record<Language, string>;
  }[];
}

const servicesData: ServicePageData[] = [
  {
    id: 'architectural-design',
    title: {
      EN: 'Architectural Design',
      RU: 'Архитектурное проектирование',
      ES: 'Diseño Arquitectónico'
    },
    subtitle: {
      EN: 'Custom spatial planning, estate master planning, facade styling, and rigorous structural drafting.',
      RU: 'Индивидуальное планирование, генеральные планы усадеб, дизайн фасадов и конструктивные чертежи.',
      ES: 'Planificación espacial a medida, diseño de fachadas, planos de terrenos y redacción estructural.'
    },
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200',
    duration: { EN: '4-6 Weeks', RU: '4-6 Недель', ES: '4-6 Semanas' },
    deliverables: {
      EN: [
        'Detailed site layout & master planning drawings',
        'Sleek modern facade & exterior visual profiles',
        'Full structural framing blueprints & math calculations',
        'Sunlight orientation grids & thermal boundary planning'
      ],
      RU: [
        'Детальный план участка и концепция генерального плана',
        'Современные фасады и проработка внешних профилей',
        'Полный комплект конструктивных чертежей и расчетов',
        'Анализ инсоляции и теплотехнических границ здания'
      ],
      ES: [
        'Diseño detallado del sitio y planos del plan maestro',
        'Perfiles visuales exteriores y fachadas modernas',
        'Planos estructurales completos y cálculos matemáticos',
        'Redes de orientación de luz solar y aislamiento térmico'
      ]
    },
    process: [
      {
        title: { EN: 'Site Evaluation & Zoning', RU: 'Оценка участка и зонирование', ES: 'Evaluación del Terreno y Zonificación' },
        desc: { EN: 'We analyze terrain topography, sun orientation, and physical context.', RU: 'Анализируем ландшафт, перепады высот и окружение участка.', ES: 'Analizamos la topografía del terreno y la orientación del sol.' }
      },
      {
        title: { EN: 'Volumetric Massing', RU: 'Объемно-пространственное решение', ES: 'Modelado Volumétrico' },
        desc: { EN: 'Drafting initial shapes, functional heights, and core structural connections.', RU: 'Создаем первые формы, габариты и взаимное расположение объемов.', ES: 'Redacción de las formas iniciales y las conexiones estructurales.' }
      },
      {
        title: { EN: 'Technical Blueprinting', RU: 'Рабочая документация', ES: 'Plano Técnico de Construcción' },
        desc: { EN: 'Engineering calculations, structural grids, and complete layout blueprints.', RU: 'Инженерные расчеты, осевые сетки и конструктивные чертежи.', ES: 'Cálculos de ingeniería, redes estructurales y planos completos.' }
      }
    ]
  },
  {
    id: 'interior-design',
    title: {
      EN: 'Interior Design',
      RU: 'Дизайн интерьера',
      ES: 'Diseño de Interiores'
    },
    subtitle: {
      EN: 'Custom residential wardrobes, minimalist penthouses, and executive lounges styled to the millimeter.',
      RU: 'Ультра-премиальные гардеробные, минималистичные пентхаусы и представительские лаунжи.',
      ES: 'Vestidores residenciales a medida, penthouses minimalistas y salones ejecutivos diseñados al milímetro.'
    },
    image: 'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&q=80&w=1200',
    duration: { EN: '3-5 Weeks', RU: '3-5 Недель', ES: '3-5 Semanas' },
    deliverables: {
      EN: [
        'Photorealistic 3D interior renders from multiple angles',
        'Sleek layout profiles, furniture sizing & spatial flow maps',
        'Custom wardrobe & custom cabinet configuration sheets',
        'Intelligent lighting schematics & electrical group plans'
      ],
      RU: [
        'Фотореалистичные 3D-визуализации интерьеров с разных ракурсов',
        'Эргономичные планировки, расстановка мебели и логика движения',
        'Индивидуальные чертежи встроенной мебели и систем хранения',
        'Схемы умного освещения и планы электрических групп'
      ],
      ES: [
        'Renders de interiores fotorrealistas en 3D de múltiples ángulos',
        'Distribución del flujo espacial y dimensionamiento de muebles',
        'Fichas de configuración de armarios y gabinetes personalizados',
        'Esquemas de iluminación inteligente y planos de electricidad'
      ]
    },
    process: [
      {
        title: { EN: 'Concept & Mood boards', RU: 'Концепция и мудборды', ES: 'Concepto y Tablero de Ideas' },
        desc: { EN: 'Selecting material coordinates, key colors, and design style directions.', RU: 'Подбор текстурных координат, ключевых цветов и стиля.', ES: 'Selección de coordenadas de materiales, colores clave y estilo.' }
      },
      {
        title: { EN: '3D Visualization', RU: '3D-Визуализация', ES: 'Visualización 3D' },
        desc: { EN: 'Cinematic rendering of spaces with accurate light physical parameters.', RU: 'Создание фотореалистичных кадров с точным расчетом света.', ES: 'Renderizado cinematográfico de espacios con luz física precisa.' }
      },
      {
        title: { EN: 'Detail Specifications', RU: 'Ведомости и спецификации', ES: 'Especificación de Materiales' },
        desc: { EN: 'Detailed cataloging of exact premium finishes, plumbing, and furnishings.', RU: 'Подробная ведомость чистовых материалов, мебели и сантехники.', ES: 'Catálogo detallado de acabados premium, plomería y mobiliario.' }
      }
    ]
  },
  {
    id: 'architecture-build',
    title: {
      EN: 'Architecture – Build and Finish',
      RU: 'Строительство и отделка зданий',
      ES: 'Arquitectura: Construcción y Acabado'
    },
    subtitle: {
      EN: 'Precision general contracting, concrete framing, insulation, masonry, and exterior facade finishes.',
      RU: 'Профессиональный генеральный подряд, монолитные работы, кирпичная кладка и фасады.',
      ES: 'Contratación general de precisión, marcos de hormigón, mampostería y acabados de fachada.'
    },
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1200',
    duration: { EN: '6-12 Months', RU: '6-12 Месяцев', ES: '6-12 Meses' },
    deliverables: {
      EN: [
        'Premium reinforced concrete structural foundations',
        'Elite brick masonry with high thermal efficiency insulation',
        'Custom natural stone, timber, or composite facade finishes',
        'Full site logistics, material curation, and engineering safety'
      ],
      RU: [
        'Премиальный железобетонный фундамент и несущий каркас',
        'Кладка стен из поризованного кирпича с высокой теплоизоляцией',
        'Облицовка фасадов натуральным камнем или термодеревом',
        'Полная логистика на площадке, контроль поставок и ТБ'
      ],
      ES: [
        'Cimientos estructurales de hormigón armado de primera calidad',
        'Mampostería de ladrillo con aislamiento térmico de alta eficiencia',
        'Acabados de fachadas de piedra natural o compuestos premium',
        'Logística completa del sitio, curación de materiales y seguridad'
      ]
    },
    process: [
      {
        title: { EN: 'Earthwork & Foundation', RU: 'Земляные работы и фундамент', ES: 'Excavación y Cimentación' },
        desc: { EN: 'Site grading, soil stabilization, and reinforced concrete footing.', RU: 'Разметка, подготовка грунта и заливка несущего фундамента.', ES: 'Nivelación del terreno y vertido de cimentación de hormigón.' }
      },
      {
        title: { EN: 'Framing & Masonry', RU: 'Монолитный каркас и стены', ES: 'Estructura y Muros' },
        desc: { EN: 'Erecting structural pillars, slabs, and solid outer partitions.', RU: 'Возведение монолитных колонн, перекрытий и наружных стен.', ES: 'Construcción de columnas, losas y muros exteriores.' }
      },
      {
        title: { EN: 'Facade Finishing', RU: 'Чистовой фасад', ES: 'Acabado de Fachada' },
        desc: { EN: 'Installing premium insulated panels, glass curtain walls, and masonry panels.', RU: 'Утепление, монтаж фасадных систем и панорамного остекления.', ES: 'Instalación de paneles aislantes y revestimiento de piedra.' }
      }
    ]
  },
  {
    id: 'interiors-build',
    title: {
      EN: 'Interiors – Build and Finish',
      RU: 'Монтаж и чистовая отделка',
      ES: 'Interiores: Construcción y Acabado'
    },
    subtitle: {
      EN: 'High-density interior partitions, custom millwork, custom wardrobes, marble cladding, and styling handover.',
      RU: 'Перегородки, собственное мебельное производство, укладка мрамора и сдача под ключ.',
      ES: 'Particiones interiores de alta densidad, carpintería a medida, revestimiento de mármol y entrega.'
    },
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1200',
    duration: { EN: '2-4 Months', RU: '2-4 Месяца', ES: '2-4 Meses' },
    deliverables: {
      EN: [
        'High-density acoustic partitions & gypsum ceiling engineering',
        'Marble, tile, and premium hardwood flooring installation',
        'Assembly & integration of custom luxury cabinets & kitchens',
        'White-glove deep post-build cleaning & custom space perfume styling'
      ],
      RU: [
        'Акустические перегородки и многоуровневые гипсовые потолки',
        'Укладка натурального мрамора, керамогранита и паркетной доски',
        'Сборка и интеграция встроенных премиальных шкафов и кухонь',
        'Глубокий клининг после ремонта и финальная ароматизация комнат'
      ],
      ES: [
        'Tabiques acústicos y diseño de techos de yeso de alta densidad',
        'Instalación de suelos de mármol, baldosas y madera noble premium',
        'Montaje e integración de gabinetes y cocinas de lujo a medida',
        'Limpieza profunda e instalación de fragancias exclusivas'
      ]
    },
    process: [
      {
        title: { EN: 'Rough Installation', RU: 'Черновые работы', ES: 'Instalación de Base' },
        desc: { EN: 'Partition layouts, cable routing, plumbing lines, and plastering.', RU: 'Монтаж перегородок, разводка кабелей, водопровода и штукатурка.', ES: 'Tendido de cables, líneas de plomería, tabiques y yeso.' }
      },
      {
        title: { EN: 'Fine Finishing', RU: 'Чистовая отделка', ES: 'Acabados Finos' },
        desc: { EN: 'Applying custom micro-cement, premium marble cladding, and paint.', RU: 'Укладка плитки, покраска стен, нанесение декоративных покрытий.', ES: 'Instalación de mármol, microcemento y pintura premium.' }
      },
      {
        title: { EN: 'Millwork & Handover', RU: 'Сборка мебели и сдача', ES: 'Montaje y Entrega' },
        desc: { EN: 'Fitting custom timber wardrobes, lighting calibration, and cleaning.', RU: 'Монтаж шкафов, установка розеток, калибровка света и клининг.', ES: 'Ajuste de armarios a medida, calibración de luz y limpieza.' }
      }
    ]
  }
];

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  currentLang,
  onOpenConsultationWithEstimate,
}) => {
  
  const handleInquire = (srv: ServicePageData) => {
    const briefString = currentLang === 'RU'
      ? `Здравствуйте, spacenine architects! Меня интересует комплексная услуга "${srv.title.RU}". Хочу начать совместный проект.`
      : currentLang === 'ES'
      ? `Hola spacenine architects, estoy interesado en el servicio de "${srv.title.ES}". Me gustaría agendar una reunión para iniciar nuestro proyecto.`
      : `Hello spacenine architects, I am interested in the "${srv.title.EN}" service. I would like to schedule a session to start our project.`;
    
    onOpenConsultationWithEstimate(briefString);
    
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="py-24 bg-white border-b border-gray-100 scroll-mt-20" id="services">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* SECTION HEADER */}
        <div className="max-w-3xl mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <span className="text-xs font-mono tracking-widest text-black uppercase block font-semibold">
              OUR SERVICES AND CAPABILITIES
            </span>
            <h2 className="text-3xl md:text-5xl font-serif tracking-tight font-medium text-gray-900">
              {currentLang === 'RU' 
                ? 'Полный цикл архитектурного дизайна и строительства' 
                : currentLang === 'ES' 
                ? 'Servicios Completos de Diseño y Construcción' 
                : 'Complete Design and Build Ecosystem'}
            </h2>
            <div className="h-[2px] w-16 bg-black" />
            <p className="text-gray-500 text-sm md:text-base font-light leading-relaxed">
              {currentLang === 'RU'
                ? 'Премиальное архитектурное проектирование, фотореалистичная 3D-визуализация, детальная рабочая документация и авторское сопровождение под ключ со 100% точностью реализации.'
                : currentLang === 'ES'
                ? 'Planificación de diseño arquitectónico premium, visualización 3D fotorrealista, planos de ingeniería detallados y entrega llave en mano.'
                : 'spacenine architects provides premium architectural layout planning, photorealistic 3D visualization, detailed engineering blueprints, and white-glove site delivery.'}
            </p>
          </motion.div>
        </div>

        {/* SERVICES STACK */}
        <div className="space-y-28">
          {servicesData.map((srv, index) => {
            const isEven = index % 2 === 0;
            return (
              <div 
                key={srv.id} 
                id={`service-${srv.id}`} 
                className="scroll-mt-28 border-b border-gray-100 pb-20 last:border-0 last:pb-0"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                  
                  {/* Image Column - Alternates left/right on large screens */}
                  <div className={`lg:col-span-6 space-y-4 ${!isEven ? 'lg:order-2' : ''}`}>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.98 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, margin: '-50px' }}
                      transition={{ duration: 0.5 }}
                      className="overflow-hidden rounded-3xl aspect-[16/10] relative shadow-lg group bg-gray-100"
                    >
                      <img
                        src={srv.image}
                        alt={srv.title[currentLang]}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent pointer-events-none" />
                    </motion.div>
                  </div>

                  {/* Content Column */}
                  <div className={`lg:col-span-6 space-y-8 ${!isEven ? 'lg:order-1' : ''}`}>
                    <div className="space-y-4">
                      <span className="text-xs font-mono tracking-widest text-black uppercase font-bold block">
                        {srv.id.replace('-', ' ')}
                      </span>
                      <h3 className="text-2xl md:text-3xl font-serif tracking-tight font-medium text-gray-900">
                        {srv.title[currentLang]}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed font-light">
                        {srv.subtitle[currentLang]}
                      </p>
                    </div>

                    {/* Scope / Deliverables List */}
                    <div className="bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-100 space-y-4">
                      <h4 className="text-xs uppercase font-mono tracking-wider font-bold text-gray-900 border-b border-gray-200 pb-2">
                        {currentLang === 'RU' ? 'Что входит в пакет' : currentLang === 'ES' ? 'Qué está Incluido' : 'Scope & Deliverables'}
                      </h4>
                      <ul className="space-y-3">
                        {srv.deliverables[currentLang].map((item, idx) => (
                          <li key={idx} className="flex items-start space-x-3 text-xs md:text-sm text-gray-600">
                            <Check className="w-4 h-4 text-black shrink-0 mt-0.5" />
                            <span className="font-light leading-normal">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Stage Milestones */}
                    <div className="space-y-4">
                      <h4 className="text-xs uppercase font-mono tracking-wider font-bold text-gray-400">
                        {currentLang === 'RU' ? 'Ключевые этапы реализации' : currentLang === 'ES' ? 'Fases de Trabajo Clave' : 'Key Stage Milestones'}
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {srv.process.map((step, idx) => (
                          <div key={idx} className="bg-white border border-gray-100 p-4 rounded-xl relative shadow-sm hover:border-gray-200 transition-colors">
                            <span className="absolute top-2 right-3 text-xl font-serif font-bold text-gray-100">
                              0{idx + 1}
                            </span>
                            <h5 className="text-[10px] font-bold text-gray-900 font-mono uppercase tracking-wider mb-1">
                              {step.title[currentLang]}
                            </h5>
                            <p className="text-[10px] text-gray-500 font-light leading-relaxed">
                              {step.desc[currentLang]}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA Inquiry Link */}
                    <div className="pt-4 flex flex-wrap gap-4">
                      <button
                        onClick={() => handleInquire(srv)}
                        className="py-3 px-6 bg-black hover:bg-gray-800 text-white rounded-xl text-xs uppercase font-mono tracking-widest font-bold transition-all flex items-center justify-center space-x-2 shadow-md group cursor-pointer"
                      >
                        <span>
                          {currentLang === 'RU' 
                            ? 'Начать этот проект' 
                            : currentLang === 'ES' 
                            ? 'Iniciar este servicio' 
                            : 'Start This Project'}
                        </span>
                        <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                      </button>

                      <button
                        onClick={() => {
                          window.location.hash = srv.id;
                        }}
                        className="py-3 px-6 border border-gray-200 hover:border-black text-black rounded-xl text-xs uppercase font-mono tracking-widest font-bold transition-all flex items-center justify-center space-x-2 cursor-pointer"
                      >
                        <span>
                          {currentLang === 'RU' 
                            ? 'Подробнее об услуге' 
                            : currentLang === 'ES' 
                            ? 'Ver detalles' 
                            : 'View Details'}
                        </span>
                      </button>
                    </div>

                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

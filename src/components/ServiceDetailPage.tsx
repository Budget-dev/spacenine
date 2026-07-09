import React from 'react';
import { motion } from 'motion/react';
import { Check, ArrowRight, ArrowLeft } from 'lucide-react';
import { Language, ServicePageId } from '../types';

interface ServiceDetailPageProps {
  currentLang: Language;
  serviceId: ServicePageId;
  onOpenConsultationWithEstimate: (estimateDetails: string) => void;
  onNavigateToService: (id: ServicePageId) => void;
  onBackToHome: () => void;
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
    image: "https://vennky.sirv.com/Don't%20Just%20List%20It_%20Visualize%20It_%20(1).jpg",
    duration: { EN: '4-6 Weeks', RU: '4-6 Недель', ES: '4-6 Semanas' },
    deliverables: {
      EN: [
        'Detailed Site Planning & Master Layout Designs',
        'Modern Facade Design & Exterior Elevation Concepts',
        'Structural Drawings & Engineering Calculations',
        'Sunlight Analysis, Building Orientation & Climate Planning'
      ],
      RU: [
        'Детальное планирование участка и дизайн генерального плана',
        'Современный дизайн фасадов и концепции внешних видов',
        'Конструктивные чертежи и инженерные расчеты',
        'Анализ солнечного света, ориентация здания и климатическое планирование'
      ],
      ES: [
        'Planificación Detallada del Sitio y Diseños de Plan Maestro',
        'Diseño de Fachadas Modernas y Conceptos de Elevación Exterior',
        'Planos Estructurales y Cálculos de Ingeniería',
        'Análisis de Luz Solar, Orientación del Edificio y Planificación Climática'
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
    image: "https://vennky.sirv.com/ChatGPT%20Image%20Jul%205%2C%202026%2C%2009_20_31%20AM.png",
    duration: { EN: '3-5 Weeks', RU: '3-5 Недель', ES: '3-5 Semanas' },
    deliverables: {
      EN: [
        'Photorealistic Interior Design Visualizations',
        'Space Planning & Furniture Layout Design',
        'Custom Wardrobes, Modular Cabinets & Storage Solutions',
        'Lighting, Electrical & False Ceiling Design Plans'
      ],
      RU: [
        'Фотореалистичные 3D-визуализации интерьеров',
        'Планирование пространства и расстановка мебели',
        'Индивидуальные гардеробные, модульные шкафы и системы хранения',
        'Планы освещения, электрики и подвесных потолков'
      ],
      ES: [
        'Visualizaciones Fotorrealistas de Diseño de Interiores',
        'Planificación de Espacios y Diseño de Distribución de Muebles',
        'Armarios a Medida, Gabinetes Modulares y Soluciones de Almacenamiento',
        'Planos de Diseño de Iluminación, Electricidad y Techos Falsos'
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
    image: 'https://vennky.sirv.com/ChatGPT%20Image%20Jul%205%2C%202026%2C%2008_56_57%20PM.png',
    duration: { EN: '6-12 Months', RU: '6-12 Месяцев', ES: '6-12 Meses' },
    deliverables: {
      EN: [
        'Strong Structural Construction with Quality Materials',
        'Expert Building Execution & Durable Finishing',
        'Premium Exterior Finishes & Material Selection',
        'End-to-End Construction Management & Site Supervision'
      ],
      RU: [
        'Прочные строительные конструкции и качественные материалы',
        'Профессиональное возведение зданий и долговечная отделка',
        'Премиальная отделка фасадов и селективные материалы',
        'Комплексное управление строительством и авторский надзор'
      ],
      ES: [
        'Construcción Estructural Fuerte con Materiales de Calidad',
        'Ejecución de Construcción Experta y Acabados Duraderos',
        'Acabados Exteriores Premium y Selección de Materiales',
        'Gestión de Construcción Integral y Supervisión en el Sitio'
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
        'Complete Interior Finishing & Project Handover'
      ],
      RU: [
        'Акустические перегородки и многоуровневые гипсовые потолки',
        'Укладка натурального мрамора, керамогранита и паркетной доски',
        'Сборка и интеграция встроенных премиальных шкафов и кухонь',
        'Полная чистовая отделка интерьера и сдача проекта'
      ],
      ES: [
        'Tabiques acústicos y diseño de techos de yeso de alta densidad',
        'Instalación de suelos de mármol, baldosas y madera noble premium',
        'Montaje e integración de gabinetes y cocinas de lujo a medida',
        'Acabado Interior Completo y Entrega del Proyecto'
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
        desc: { EN: 'Fitting custom timber wardrobes, lighting calibration, and cleaning.', RU: 'Монтаж шкафов, установка розеток, калибровка света и клининг.', ES: 'Mantenimiento e integración de gabinetes y cocinas de lujo.' }
      }
    ]
  }
];

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({
  currentLang,
  serviceId,
  onOpenConsultationWithEstimate,
  onNavigateToService,
  onBackToHome
}) => {
  const service = servicesData.find((s) => s.id === serviceId) || servicesData[0];

  const handleInquire = () => {
    const briefString = currentLang === 'RU'
      ? `Здравствуйте, spacenine architects! Меня интересует комплексная услуга "${service.title.RU}". Хочу начать совместный проект.`
      : currentLang === 'ES'
      ? `Hola spacenine architects, estoy interesado en el servicio de "${service.title.ES}". Me gustaría agendar una reunión para iniciar nuestro proyecto.`
      : `Hello spacenine architects, I am interested in the "${service.title.EN}" service. I would like to schedule a session to start our project.`;
    
    onOpenConsultationWithEstimate(briefString);
  };

  return (
    <div className="bg-white min-h-screen pt-24 pb-20" id="service-detail-page">
      {/* Breadcrumbs and navigation */}
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between text-xs font-sans text-gray-500 uppercase tracking-widest border-b border-gray-100">
        <button 
          onClick={onBackToHome}
          className="flex items-center space-x-2 text-black hover:text-gray-600 transition-colors font-semibold"
          id="btn-back-to-home"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{currentLang === 'RU' ? 'На главную' : currentLang === 'ES' ? 'Inicio' : 'Back to Home'}</span>
        </button>
        <div className="hidden sm:flex items-center space-x-2">
          <span className="text-gray-300">/</span>
          <span>{currentLang === 'RU' ? 'Услуги' : currentLang === 'ES' ? 'Servicios' : 'Services'}</span>
          <span className="text-gray-300">/</span>
          <span className="text-black font-semibold">{service.title[currentLang]}</span>
        </div>
      </div>

      {/* Hero Header Area */}
      <div className="max-w-7xl mx-auto px-6 mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 space-y-6">
          <span className="text-xs font-sans tracking-widest text-gray-400 uppercase font-semibold block">
            {service.id.replace('-', ' ')}
          </span>
          <h1 className="text-4xl md:text-6xl font-serif tracking-tight font-medium text-gray-900 leading-tight">
            {service.title[currentLang]}
          </h1>
          <p className="text-gray-600 text-base md:text-lg font-light leading-relaxed">
            {service.subtitle[currentLang]}
          </p>
        </div>

        <div className="lg:col-span-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden rounded-3xl aspect-[16/10] relative shadow-2xl bg-gray-100 group"
          >
            <img 
              src={service.image} 
              alt={service.title[currentLang]} 
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
          </motion.div>
        </div>
      </div>

      {/* Main content sections */}
      <div className="max-w-7xl mx-auto px-6 mt-20 grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        {/* Left column: Deliverables / What is included */}
        <div className="lg:col-span-7 space-y-8">
          <div className="bg-gray-50 p-8 md:p-10 rounded-3xl border border-gray-100 space-y-6 shadow-sm">
            <h3 className="text-lg font-serif font-medium text-gray-900 border-b border-gray-200 pb-3">
              {currentLang === 'RU' ? 'Объем работ' : currentLang === 'ES' ? 'Alcance del Trabajo' : 'Scope of Work'}
            </h3>
            <ul className="space-y-4">
              {service.deliverables[currentLang].map((item, idx) => (
                <li key={idx} className="flex items-start space-x-3 text-sm md:text-base text-gray-600">
                  <span className="bg-black text-white rounded-full p-1 mt-0.5 shrink-0 flex items-center justify-center w-5 h-5">
                    <Check className="w-3 h-3 text-white" />
                  </span>
                  <span className="font-light leading-normal">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Process Timeline steps */}
          <div className="space-y-6 pt-4">
            <h3 className="text-lg font-serif font-medium text-gray-900">
              {currentLang === 'RU' ? 'Этапы совместной работы' : currentLang === 'ES' ? 'Fases de Trabajo' : 'Work Phases & Process'}
            </h3>
            <div className="space-y-4">
              {service.process.map((step, idx) => (
                <div key={idx} className="bg-white border border-gray-100 p-6 rounded-2xl relative shadow-sm hover:border-gray-200 transition-colors flex gap-6 items-start">
                  <span className="text-3xl font-serif font-bold text-gray-200 shrink-0 leading-none">
                    0{idx + 1}
                  </span>
                  <div className="space-y-1">
                    <h4 className="text-xs font-bold text-gray-900 font-sans uppercase tracking-wider">
                      {step.title[currentLang]}
                    </h4>
                    <p className="text-xs md:text-sm text-gray-500 font-light leading-relaxed">
                      {step.desc[currentLang]}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right column: Sticky Side Card */}
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28 bg-gray-950 text-white p-8 rounded-3xl space-y-6 shadow-xl relative overflow-hidden">
            {/* Background design accents */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-white/5 rounded-full blur-2xl pointer-events-none" />

            <span className="text-[10px] font-sans tracking-widest text-gray-400 uppercase font-semibold block">
              {currentLang === 'RU' ? 'УСЛУГА ПРЕМИУМ КЛАССА' : currentLang === 'ES' ? 'SERVICIO DE ALTA CALIDAD' : 'HIGH END SERVICE'}
            </span>
            
            <h3 className="text-2xl font-serif tracking-tight text-white">
              {service.title[currentLang]}
            </h3>
            
            <p className="text-xs md:text-sm text-gray-400 font-light leading-relaxed">
              {currentLang === 'RU'
                ? 'Начните проектирование или строительство со spacenine architects. Оставьте заявку, и наши ведущие специалисты свяжутся с вами для индивидуальной сессии.'
                : currentLang === 'ES'
                ? 'Comienza tu viaje de diseño o construcción con spacenine architects. Deja tu solicitud y nuestro equipo se comunicará para una sesión de diseño personalizada.'
                : 'Begin your premium design or build journey with spacenine architects. Submit your inquiry to schedule a customized architectural design consultation.'}
            </p>

            <button
              onClick={handleInquire}
              className="w-full py-4 bg-white hover:bg-gray-100 text-black rounded-xl text-xs uppercase font-sans tracking-widest font-bold transition-all flex items-center justify-center space-x-2 shadow-lg group cursor-pointer mt-4"
              id="btn-inquire-service"
            >
              <span>
                {currentLang === 'RU' 
                  ? 'Отправить запрос' 
                  : currentLang === 'ES' 
                  ? 'Enviar Consulta' 
                  : 'Send Inquiry'}
              </span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

      </div>

    </div>
  );
};

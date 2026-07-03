import { Language, NavItem, PortfolioProject, ServiceItem, TeamMember, Testimonial } from './types';

export const navItems: NavItem[] = [
  { id: 'home', label: { EN: 'Home', RU: 'Главная', ES: 'Inicio' } },
  { id: 'about', label: { EN: 'About', RU: 'О нас', ES: 'Nosotros' } },
  { id: 'services', label: { EN: 'Services', RU: 'Услуги', ES: 'Servicios' } },
  { id: 'portfolio', label: { EN: 'Portfolio', RU: 'Портфолио', ES: 'Portafolio' } },
  { id: 'contact', label: { EN: 'Contact', RU: 'Контакты', ES: 'Contacto' } },
];

export const translations = {
  hero: {
    title: {
      EN: 'Design of private and commercial interiors',
      RU: 'Дизайн частных и коммерческих интерьеров',
      ES: 'Diseño de interiores privados y comerciales'
    },
    subtitle: {
      EN: 'spacenine architects — full-cycle interior design studio. We turn spaces into refined, atmospheric stories.',
      RU: 'spacenine architects — студия интерьерного дизайна полного цикла. Мы превращаем пространства в изысканные, атмосферные истории.',
      ES: 'spacenine architects — estudio de diseño de interiores de ciclo completo. Convertimos los espacios en historias refinadas y atmosféricas.'
    },
    cta: {
      EN: 'Start project',
      RU: 'Начать проект',
      ES: 'Iniciar proyecto'
    },
    scrollDown: {
      EN: 'Explore portfolio',
      RU: 'Исследовать портфолио',
      ES: 'Explorar portafolio'
    },
    lightingControl: {
      EN: 'Interactive Lighting',
      RU: 'Интерактивный свет',
      ES: 'Iluminación Interactiva'
    },
    lightingDesc: {
      EN: 'Toggle the virtual ambient environment to preview daytime architectural clarity vs. evening atmospheric warmth.',
      RU: 'Переключайте режимы освещения, чтобы увидеть дневную четкость архитектурных линий или вечерний уют.',
      ES: 'Cambie el modo de luz para ver la claridad del día frente a la calidez del atardecer.'
    }
  },
  about: {
    badge: { EN: 'SPACENINE', RU: 'СПЕЙСНАЙН', ES: 'EL ESTUDIO' },
    title: { EN: 'Custom design, engineered for flawless execution.', RU: 'Эксклюзивный дизайн, созданный для безупречного воплощения.', ES: 'Diseño a medida, diseñado para una ejecución impecable.' },
    heading: {
      EN: 'Custom design, engineered for flawless execution.',
      RU: 'Эксклюзивный дизайн, созданный для безупречного воплощения.',
      ES: 'Diseño a medida, diseñado para una ejecución impecable.'
    },
    subheading: {
      EN: 'For over 12 years, spacenine architects has crafted ultra-high-end private residences, boutique commercial spaces, and custom architectural masterpieces.',
      RU: 'Более 12 лет spacenine architects создает ультра-премиальные частные резиденции, коммерческие интерьеры и авторские архитектурные проекты.',
      ES: 'Durante más de 12 años, spacenine architects ha creado residencias privadas de ultra-gama alta, espacios comerciales boutique y obras maestras arquitectónicas.'
    },
    stat1: {
      EN: 'Projects Delivered',
      RU: 'Сданных объектов',
      ES: 'Proyectos Entregados'
    },
    stat2: {
      EN: 'Years of Craft',
      RU: 'Лет мастерства',
      ES: 'Años de Experiencia'
    },
    stat3: {
      EN: 'Design Awards',
      RU: 'Наград в дизайне',
      ES: 'Premios de Diseño'
    },
    storyTitle: {
      EN: 'The Philosophy of Perfect Execution',
      RU: 'Философия идеального исполнения',
      ES: 'La Filosofía de la Ejecución Perfecta'
    },
    storyText: {
      EN: 'We combine rigorous architectural mathematics with sophisticated interior art. By handling every stage from primary sketch to custom cabinet manufacturing, engineering documentation, and styling delivery, we establish a flawless, turnkey transition to your new luxury environment.',
      RU: 'Мы сочетаем строгую архитектурную математику с изысканным интерьерным искусством. Контролируя каждый этап — от первых эскизов и детальных чертежей до собственного производства мебели и финального декорирования, мы гарантируем комфорт и надежность.',
      ES: 'Combinamos matemáticas arquitectónicas rigurosas con un arte de interiores sofisticado. Al gestionar cada etapa, desde el boceto inicial hasta la fabricación de armarios personalizados, la documentación de ingeniería y la entrega de estilo, establecemos una transición impecable llave en mano.'
    },
    timelineTitle: {
      EN: 'Our Historic Journey',
      RU: 'История нашего развития',
      ES: 'Nuestra Trayectoria Histórica'
    },
    teamTitle: {
      EN: 'The Minds Behind the Masterpieces',
      RU: 'Создатели шедевров',
      ES: 'Las Mentes Detrás de las Obras Maestras'
    },
    text1: {
      EN: 'For over 12 years, spacenine architects has crafted ultra-high-end private residences, boutique commercial spaces, and custom architectural masterworks. Our signature approach is absolute fidelity — delivering spaces that match original design visual concepts down to the millimeter, with zero tolerances for deviation.',
      RU: 'Более 12 лет spacenine architects создает ультра-премиальные частные резиденции, коммерческие интерьеры и авторские архитектурные проекты. Наша визитная карточка — абсолютная точность: реализация объектов на 100% соответствует первоначальным 3D-визуализациям.',
      ES: 'Durante más de 12 años, spacenine architects ha creado residencias privadas de ultra-gama alta, espacios comerciales boutique y obras maestras arquitectónicas personalizadas. Nuestro enfoque distintivo es la fidelidad absoluta: entregar espacios que coincidan con los conceptos visuales originales al milímetro.'
    },
    text2: {
      EN: 'We combine rigorous architectural mathematics with sophisticated interior art. By handling every stage from primary sketch to custom cabinet manufacturing, engineering documentation, and styling delivery, we establish a flawless, turnkey transition to your new luxury environment.',
      RU: 'Мы сочетаем строгую архитектурную математику с изысканным интерьерным искусством. Контролируя каждый этап — от первых эскизов и детальных чертежей до собственного производства мебели и финального декорирования, мы гарантируем комфорт и надежность.',
      ES: 'Combinamos matemáticas arquitectónicas rigurosas con un arte de interiores sofisticado. Al gestionar cada etapa, desde el boceto inicial hasta la fabricación de armarios personalizados, la documentación de ingeniería y la entrega de estilo, establecemos una transición impecable llave en mano.'
    }
  },
  services: {
    badge: { EN: 'SERVICES', RU: 'УСЛУГИ', ES: 'SERVICIOS' },
    title: { EN: 'Complete Design & Build Ecosystem', RU: 'Полная экосистема проектирования и строительства', ES: 'Ecosistema de Diseño y Construcción Completo' },
    subtitle: {
      EN: 'From concept blueprints to high-precision construction and curated premium furniture procurement.',
      RU: 'От рабочих чертежей и 3D-визуализации до высокоточного капитального строительства и полной комплектации.',
      ES: 'Desde planos de concepto hasta construcción de alta precisión y adquisición de muebles premium curados.'
    },
    priceLabel: { EN: 'Investment:', RU: 'Инвестиции:', ES: 'Inверсион:' },
    timeLabel: { EN: 'Timeline:', RU: 'Сроки:', ES: 'Plazo:' },
    cta: { EN: 'Request service detail', RU: 'Запросить детали услуги', ES: 'Solicitar detalles' },
    
    // Calculator-specific translations
    heading: {
      EN: 'Custom Studio Services',
      RU: 'Эксклюзивные услуги бюро',
      ES: 'Servicios de Estudio a Medida'
    },
    subheading: {
      EN: 'spacenine architects provides premium architectural layout planning, photorealistic 3D visualization, detailed engineering blueprints, and white-glove site delivery.',
      RU: 'spacenine architects предоставляет премиальное архитектурное проектирование, фотореалистичную 3D-визуализацию, рабочую документацию и авторское сопровождение под ключ.',
      ES: 'spacenine architects ofrece planificación de diseño arquitectónico premium, visualización 3D fotorrealista, planos de ingeniería detallados y entrega llave en mano.'
    },
    calcTitle: {
      EN: 'Interactive Budget Estimator',
      RU: 'Интерактивный калькулятор бюджета',
      ES: 'Estimador de Presupuesto Interactivo'
    },
    calcIntro: {
      EN: 'Select space type, design package, and area to calculate dynamic investment cost.',
      RU: 'Выберите тип помещения, пакет услуг и площадь для динамического расчета инвестиций.',
      ES: 'Seleccione tipo de espacio, paquete de diseño y área para calcular el costo de inversión.'
    },
    roomType: {
      EN: 'Space Category',
      RU: 'Категория помещения',
      ES: 'Categoría de Espacio'
    },
    roomTypes: {
      residential: {
        EN: 'Residential interior',
        RU: 'Жилой интерьер',
        ES: 'Interior Residencial'
      },
      commercial: {
        EN: 'Commercial space',
        RU: 'Коммерческий объект',
        ES: 'Espacio Comercial'
      }
    },
    packageStyle: {
      EN: 'Service Level Package',
      RU: 'Пакет услуг проектирования',
      ES: 'Paquete de Nivel de Servicio'
    },
    packageStyles: {
      basic: {
        name: {
          EN: 'Concept & Zoning',
          RU: 'Планировка и концепция',
          ES: 'Concepto y Zonificación'
        },
        desc: {
          EN: 'Primary sketches, functional ergonomic layouts, visual mood boards, and aesthetic coordinates.',
          RU: 'Планировочные решения, зонирование, концептуальные коллажи и подбор материалов.',
          ES: 'Bocetos primarios, distribuciones ergonómicas funcionales y tableros de ideas visuales.'
        }
      },
      standard: {
        name: {
          EN: 'Detailed Blueprint Portfolio',
          RU: 'Полный рабочий проект',
          ES: 'Portafolio de Planos Detallados'
        },
        desc: {
          EN: 'Comprehensive engineering blueprints, Photorealistic 3D renders, and finish specifications.',
          RU: 'Рабочие чертежи, полная 3D-визуализация всех комнат и ведомость отделочных материалов.',
          ES: 'Planos de ingeniería completos, renders 3D fotorrealistas y especificaciones de acabados.'
        }
      },
      premium: {
        name: {
          EN: 'Turnkey Author Supervision',
          RU: 'Авторский надзор под ключ',
          ES: 'Supervisión de Autor Llave en Mano'
        },
        desc: {
          EN: 'All standard blueprints plus weekly site supervision visits, custom furniture, and procurement management.',
          RU: 'Полный рабочий проект плюс регулярные выезды на объект, подбор мебели и авторский надзор.',
          ES: 'Todos los planos estándar más visitas semanales de supervisión, muebles a medida y gestión de adquisiciones.'
        }
      }
    },
    spaceArea: {
      EN: 'Estimated Project Area',
      RU: 'Ориентировочная площадь',
      ES: 'Área Estimada del Proyecto'
    },
    estimationResult: {
      EN: 'Estimated Design Investment',
      RU: 'Ориентировочный бюджет проекта',
      ES: 'Inversión de Diseño Estimada'
    },
    estimationDetails: {
      EN: 'Includes exact customized drawings, layouts, material lists, and selected render counts.',
      RU: 'Включает точные чертежи, планировки, ведомость материалов и готовые ракурсы визуализации.',
      ES: 'Includes exact customized drawings, layouts, material lists, and selected render counts.'
    },
    contactForDetailedQuote: {
      EN: 'Submit Estimate for Review',
      RU: 'Отправить расчет на согласование',
      ES: 'Enviar Estimación para Revisión'
    }
  },
  portfolio: {
    badge: { EN: 'PORTFOLIO', RU: 'ПОРТФОЛИО', ES: 'PORTAFOLIO' },
    heading: { EN: 'Featured Masterpieces', RU: 'Реализованные шедевры', ES: 'Obras Maestras Destacadas' },
    subheading: {
      EN: 'Discover our ultra-high-fidelity projects where pixel plans became pristine physical realities.',
      RU: 'Погрузитесь в наши проекты, где чертежи и пиксели превращаются в безупречную физическую реальность.',
      ES: 'Descubra nuestros proyectos de ultra alta fidelidad donde los planos de píxeles se convirtieron en realidades físicas prístinas.'
    },
    filterAll: { EN: 'All Projects', RU: 'Все проекты', ES: 'Todos los Proyectos' },
    filterResidential: { EN: 'Residential', RU: 'Жилые', ES: 'Residencial' },
    filterCommercial: { EN: 'Commercial', RU: 'Коммерческие', ES: 'Comercial' },
    specsArea: { EN: 'Area:', RU: 'Площадь:', ES: 'Área:' },
    specsLocation: { EN: 'Location:', RU: 'Локация:', ES: 'Ubicación:' },
    specsYear: { EN: 'Year Completed:', RU: 'Год завершения:', ES: 'Año de Finalización:' }
  },
  contact: {
    heading: { EN: 'Collaborate with Us', RU: 'Начать совместный проект', ES: 'Colabore con Nosotros' },
    subheading: {
      EN: 'Get in touch with us to schedule a personalized session at our studio or online.',
      RU: 'Свяжитесь с нами, чтобы запланировать персональную консультацию в нашем бюро или онлайн.',
      ES: 'Comuníquese para programar una consulta privada en nuestro estudio o en línea.'
    },
    quickLinks: { EN: 'Direct Messengers', RU: 'Быстрая связь', ES: 'Mensajería Directa' },
    addressLabel: { EN: 'Studio Address', RU: 'Адрес бюро', ES: 'Dirección del Estudio' },
    address: { EN: '9, Amrita Shergill Marg, New Delhi, India', RU: 'Нью-Дели, ул. Амрита Шергилл Марг, д. 9', ES: 'Calle Amrita Shergill Marg, 9, Nueva Delhi' },
    phoneLabel: { EN: 'Direct Line', RU: 'Телефон', ES: 'Teléfono Directo' },
    phone: { EN: '+91 99521 20021', RU: '+91 99521 20021', ES: '+91 99521 20021' },
    emailLabel: { EN: 'General Inquiries', RU: 'Электронная почта', ES: 'Consultas Generales' },
    email: { EN: 'studio@spacenine.design', RU: 'studio@spacenine.design', ES: 'studio@spacenine.design' },
    formName: { EN: 'Your Name', RU: 'Ваше имя', ES: 'Su Nombre' },
    formPhone: { EN: 'Phone Number', RU: 'Номер телефона', ES: 'Número de Teléfono' },
    formEmail: { EN: 'Email Address', RU: 'Электронная почта', ES: 'Correo Electrónico' },
    formMsg: { EN: 'Project Description', RU: 'Описание вашего проекта', ES: 'Descripción del Proyecto' },
    formSubmit: { EN: 'Submit Request', RU: 'Отправить заявку', ES: 'Enviar Solicitud' },
    formSuccess: { EN: 'Thank you! We will contact you within 2 hours.', RU: 'Спасибо! Мы свяжемся с вами в течение 2 часов.', ES: '¡Gracias! Nos pondremos en contacto en 2 horas.' },
    form: {
      name: { EN: 'Your Name', RU: 'Ваше имя', ES: 'Su Nombre' },
      email: { EN: 'Email Address', RU: 'Электронная почта', ES: 'Correo Electrónico' },
      phone: { EN: 'Phone Number', RU: 'Номер телефона', ES: 'Número de Teléfono' },
      message: { EN: 'Project Description', RU: 'Описание вашего проекта', ES: 'Descripción del Proyecto' },
      submit: { EN: 'Submit Request', RU: 'Отправить заявку', ES: 'Enviar Solicitud' },
      sending: { EN: 'Sending...', RU: 'Отправка...', ES: 'Enviando...' },
      success: { EN: 'Thank you! We will contact you within 2 hours.', RU: 'Спасибо! Мы свяжемся с вами в течение 2 часов.', ES: '¡Gracias! Nos pondremos en contacto en 2 horas.' },
      error: { EN: 'An error occurred. Please try again.', RU: 'Произошла ошибка. Пожалуйста, попробуйте еще раз.', ES: 'Ocurrió un error. Inténtelo de nuevo.' }
    },
    info: {
      addressLabel: { EN: 'Studio Address', RU: 'Адрес бюро', ES: 'Dirección del Estudio' },
      address: { EN: '9, Amrita Shergill Marg, New Delhi, India', RU: 'Нью-Дели, ул. Амрита Шергилл Марг, д. 9', ES: 'Calle Amrita Shergill Marg, 9, Nueva Delhi' },
      phoneLabel: { EN: 'Direct Line', RU: 'Телефон', ES: 'Teléfono Directo' },
      emailLabel: { EN: 'General Inquiries', RU: 'Электронная почта', ES: 'Consultas Generales' },
      hoursLabel: { EN: 'Working Hours', RU: 'Часы работы', ES: 'Horario de Atención' },
      hours: { EN: 'Mon - Fri: 10:00 - 20:00', RU: 'Пн - Пт: 10:00 - 20:00', ES: 'Lun - Vie: 10:00 - 20:00' }
    }
  },
  footer: {
    text: {
      EN: 'spacenine architects is a high-end architectural design and full-cycle interior engineering studio. We construct uncompromising, acoustic-perfect, custom-designed spaces.',
      RU: 'spacenine architects — студия архитектурного проектирования и высокоточного строительства полного цикла. Мы создаем бескомпромиссные и технически совершенные интерьеры.',
      ES: 'spacenine architects es un estudio de diseño arquitectónico e ingeniería de interiores de ciclo completo de alta gama. Construimos espacios sin concesiones.'
    },
    rights: {
      EN: 'All rights reserved.',
      RU: 'Все права защищены.',
      ES: 'Todos los derechos reservados.'
    },
    tagline: {
      EN: 'Where spaces become stories.',
      RU: 'Где пространства становятся историями.',
      ES: 'Donde los espacios se convierten en historias.'
    }
  }
};



export const teamMembers: TeamMember[] = [
  {
    name: { EN: 'Rohan Mehta', RU: 'Рохан Мехта', ES: 'Rohan Mehta' },
    role: { EN: 'Founder & Principal Architect', RU: 'Основатель и главный архитектор', ES: 'Fundador y Arquitecto Principal' },
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400',
    bio: {
      EN: '12 years of experience in high-end design, combining elite architectural schools with minimalist functional planning.',
      RU: '12 лет опыта в премиальном дизайне, объединяющий элитные архитектурные школы с минималистичным функциональным планированием.',
      ES: '12 años de experiencia en diseño de alta gama, combinando escuelas de arquitectura de élite con planificación funcional minimalista.'
    }
  },
  {
    name: { EN: 'Priya Sharma', RU: 'Прия Шарма', ES: 'Priya Sharma' },
    role: { EN: 'Lead Interior Stylist & Texture Specialist', RU: 'Ведущий стилист интерьеров и эксперт по материалам', ES: 'Estilista Principal de Interiores' },
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400',
    bio: {
      EN: 'Specializes in creating subtle sensory experiences through premium natural teak, marble textures, and rich custom drapery.',
      RU: 'Специализируется на создании тонкого чувственного опыта за счет премиального тика, текстур мрамора и индивидуального текстиля.',
      ES: 'Se especializa en crear experiencias sensoriales sutiles a través de teca natural premium, texturas de mármol y cortinas personalizadas.'
    }
  },
  {
    name: { EN: 'Arjun Kapoor', RU: 'Арджун Капур', ES: 'Arjun Kapoor' },
    role: { EN: 'Technical Director & Lighting Engineer', RU: 'Технический директор и инженер по свету', ES: 'Director Técnico e Ingeniero de Iluminación' },
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400',
    bio: {
      EN: 'Ensures that every design has impeccable technical documentation, flawless climate control integration, and smart ambient lighting.',
      RU: 'Гарантирует, что каждый проект имеет безупречную рабочую документацию, интеграцию климат-контроля и сценарии умного освещения.',
      ES: 'Garantiza que cada proyecto cuente con documentación técnica impecable, integración de climatización y escenarios de iluminación inteligente.'
    }
  }
];

export const serviceItems: ServiceItem[] = [
  {
    id: 'concept',
    title: { EN: 'Concept Creation & Zoning', RU: 'Разработка концепции и планировки', ES: 'Creación de Concepto y Zonificación' },
    description: {
      EN: 'Primary sketches, functional ergonomic zoning, mood boards, and aesthetic styling coordinates.',
      RU: 'Первичные эскизы, эргономичное функциональное зонирование, мудборды и подбор эстеческих координат.',
      ES: 'Bocetos iniciales, zonificación ergonómica funcional, tableros de ideas y coordenadas de estilo estético.'
    },
    price: { EN: 'from ₹3,500 / sq.m', RU: 'от ₹3 500 / м²', ES: 'desde ₹3.500 / m²' },
    duration: { EN: '2-3 Weeks', RU: '2-3 Недели', ES: '2-3 Semanas' },
    features: {
      EN: ['3 general zoning layouts', 'Visual boards for each room', 'Initial style consultation', 'Material palette preview'],
      RU: ['3 варианта планировочного решения', 'Визуальные мудборды комнат', 'Первичная консультация стилиста', 'Превью палитры материалов'],
      ES: ['3 distribuciones de zonificación', 'Tableros visuales para cada habitación', 'Consulta de estilo inicial', 'Vista previa de la paleta']
    },
    iconName: 'Layout'
  },
  {
    id: 'visuals',
    title: { EN: 'Photorealistic 3D Renders', RU: 'Фотореалистичная 3D-визуализация', ES: 'Renders 3D Fotorrealistas' },
    description: {
      EN: 'High-fidelity cinematic representations of all designed spaces with exact materials, textures, and custom lighting scripts.',
      RU: 'Кинематографичные изображения проектируемых комнат с точным отображением материалов, текстур и сценариев освещения.',
      ES: 'Representaciones cinematográficas de alta fidelidad de todos los espacios diseñados con materiales y luz exacta.'
    },
    price: { EN: 'from ₹5,500 / sq.m', RU: 'от ₹5 500 / м²', ES: 'desde ₹5.500 / m²' },
    duration: { EN: '3-4 Weeks', RU: '3-4 Недели', ES: '3-4 Semanas' },
    features: {
      EN: ['4 angles for every room', 'Panoramic 360 virtual tour', 'Exact light reflection mapping', 'Custom furniture rendering'],
      RU: ['4 ракурса на каждое помещение', 'Панорамный 360° виртуальный тур', 'Точный расчет отражений света', 'Визуализация мебели на заказ'],
      ES: ['4 ángulos para cada habitación', 'Recorrido virtual panorámico 360', 'Mapeo de reflejo de luz exacto', 'Renderizado de muebles a medida']
    },
    iconName: 'Camera'
  },
  {
    id: 'engineering',
    title: { EN: 'Detailed Working Blueprints', RU: 'Рабочая документация и чертежи', ES: 'Planos Detallados de Trabajo' },
    description: {
      EN: 'Complete engineering blueprints, power outlets placement, smart lighting schematics, plumbing, and wall development profiles.',
      RU: 'Полный комплект рабочих чертежей, расстановка розеток, схемы умного освещения, сантехника и развертки стен.',
      ES: 'Planos de ingeniería completos, tomas de corriente, esquemas de iluminación inteligente, plomería y perfiles de muros.'
    },
    price: { EN: 'from ₹4,000 / sq.m', RU: 'от ₹4 000 / м²', ES: 'desde ₹4.000 / m²' },
    duration: { EN: '3 Weeks', RU: '3 Недели', ES: '3 Semanas' },
    features: {
      EN: ['Demolition and construction plans', 'Smart lighting & wiring grids', 'Custom furniture detailing drawings', 'Complete material specification bills'],
      RU: ['Планы демонтажа и монтажа стен', 'Планы розеток, выключателей и групп света', 'Чертежи мебели индивидуального изготовления', 'Полная ведомость отделочных материалов'],
      ES: ['Planos de demolición y construcción', 'Redes de iluminación inteligente', 'Dibujos de detalles de muebles a medida', 'Facturas completas de materiales']
    },
    iconName: 'FileText'
  },
  {
    id: 'supervision',
    title: { EN: 'Authors Supervision under Key', RU: 'Авторский надзор под ключ', ES: 'Supervisión de Autor Llave en Mano' },
    description: {
      EN: 'Regular site visits, coordination with builders, selection of furniture, and handling of complex structural adjustments.',
      RU: 'Регулярные выезды на объект, контроль соответствия работ проекту, подбор мебели, материалов и решение сложных вопросов строителей.',
      ES: 'Visitas regulares a la obra, coordinación con constructores, selección de mobiliario y ajustes estructurales.'
    },
    price: { EN: 'from ₹40,000 / month', RU: 'от ₹40 000 / мес.', ES: 'desde ₹40.000 / mes' },
    duration: { EN: 'During Construction', RU: 'На время стройки', ES: 'Durante la Construcción' },
    features: {
      EN: ['Up to 4 site visits per month', 'Direct communication with general contractor', 'Sourcing custom textiles and art', 'Weekly status video reports'],
      RU: ['До 4 выездов на объект в месяц', 'Прямой контакт с прорабом строителей', 'Подбор текстиля, декора и предметов искусства', 'Еженедельный видеоотчет о ходе работ'],
      ES: ['Hasta 4 visitas a la obra por mes', 'Comunicación directa con contratista', 'Abastecimiento de textiles y arte', 'Informes semanales por video']
    },
    iconName: 'Eye'
  }
];

export const portfolioProjects: PortfolioProject[] = [
  {
    id: 'project-1',
    title: {
      EN: 'Narendar Residence',
      RU: 'Резиденция Нарендара',
      ES: 'Residencia Narendar'
    },
    category: 'residential',
    categoryLabel: { EN: 'Villa', RU: 'Вилла', ES: 'Villa' },
    location: { EN: 'Ramayanpet, Telangana', RU: 'Рамаянпет, Телангана', ES: 'Ramayanpet, Telangana' },
    area: '3 Floors + Lawn',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=1600',
    description: {
      EN: 'A multi-generational home designed to give every member of the household their own ground to stand on. The plan distributes privacy across three floors — ground-level living for parents, upper floors for the younger household — with a private lift threading them together. A 27-foot open lawn anchors the front, bringing sky and garden into the daily experience of the house.',
      RU: 'Дом для нескольких поколений семьи, спроектированный так, чтобы у каждого члена семьи было свое личное пространство. Планировка распределяет приватность по трем этажам: первый этаж отведен для родителей, верхние этажи — для младшего поколения, а соединяет их частный лифт. Открытый газон длиной 27 футов украшает фасад, привнося небо и сад в повседневную жизнь.',
      ES: 'Un hogar multifamiliar diseñado para dar a cada miembro de la casa su propio espacio. El plano distribuye la privacidad en tres plantas: planta baja para los padres y plantas superiores para los jóvenes, conectados por un ascensor privado. Un jardín abierto de 27 pies corona el frente, integrando el cielo y la naturaleza en la vida diaria.'
    },
    details: {
      EN: [
        '4 × Floor Plans',
        'Exterior Render',
        'Construction Drawings',
        'Private Lift'
      ],
      RU: [
        '4 × Планировочных решения',
        'Экстерьерный рендер',
        'Рабочие строительные чертежи',
        'Частный лифт'
      ],
      ES: [
        '4 × Planos de Planta',
        'Render Exterior',
        'Planos de Construcción',
        'Ascensor Privado'
      ]
    },
    keySpaces: [
      { name: { EN: 'Dining & Living', RU: 'Столовая и гостиная', ES: 'Comedor y Estar' }, size: "22'3\" × 13'6\"" },
      { name: { EN: 'Parents Bedroom', RU: 'Спальня родителей', ES: 'Dormitorio de los Padres' }, size: "15'3\" × 13'9\"" },
      { name: { EN: 'Master Bedroom', RU: 'Мастер-спальня', ES: 'Dormitorio Principal' }, size: "15'3\" × 13'9\"" },
      { name: { EN: 'Lawn', RU: 'Газон и сад', ES: 'Césped' }, size: "27'0\" × 18'9\"" },
      { name: { EN: 'Sitout', RU: 'Терраса для отдыха', ES: 'Terraza' }, size: "27'0\" × 8'0\"" },
      { name: { EN: 'Drawing Room', RU: 'Кабинет / Гостиная', ES: 'Sala de Estar' }, size: "10'0\" × 10'3\"" }
    ],
    deliverables: {
      EN: [
        '4 × Floor Plans',
        'Exterior Render',
        'Construction Drawings',
        'Private Lift'
      ],
      RU: [
        '4 × Планировочных решения',
        'Экстерьерный рендер',
        'Рабочие строительные чертежи',
        'Частный лифт'
      ],
      ES: [
        '4 × Planos de Planta',
        'Render Exterior',
        'Planos de Construcción',
        'Ascensor Privado'
      ]
    }
  },
  {
    id: 'project-2',
    title: {
      EN: 'Sudeep Reddy',
      RU: 'Резиденция Судипа Редди',
      ES: 'Residencia Sudeep Reddy'
    },
    category: 'residential',
    categoryLabel: { EN: 'Luxury Villa', RU: 'Роскошная вилла', ES: 'Villa de Lujo' },
    location: { EN: 'Hyderabad, Telangana', RU: 'Хайдарабад, Телангана', ES: 'Hyderabad, Telangana' },
    area: 'Premium Residential Villa',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1600',
    description: {
      EN: 'A residence designed for living at its fullest scale. The 38-foot double-height lounge is the centre of gravity — generously proportioned, lit carefully, and opening directly onto a 34-foot balcony that spans the entire first-floor frontage. Every interior choice was validated through detailed Enscape renders before anything was specified, which is why the finished rooms feel deliberate rather than assembled.',
      RU: 'Резиденция, созданная для масштабной жизни. Двусветная гостиная высотой 38 футов является центром притяжения — просторная, с тщательно продуманным освещением, выходящая на балкон длиной 34 фута во весь фасад второго этажа. Каждая деталь интерьера была проверена в Enscape перед утверждением, поэтому готовые пространства выглядят цельно и гармонично.',
      ES: 'Una residencia diseñada para vivir a gran escala. El salón de doble altura de 38 pies es el centro de gravedad: de proporciones generosas, iluminado cuidadosamente y con salida directa a un balcón de 34 pies que abarca toda la fachada del primer piso. Cada elección interior se validó mediante renders detallados de Enscape.'
    },
    details: {
      EN: [
        '4-Page Presentation',
        '3 × Exterior Renders',
        '5 × Interior Renders',
        'Home Theater',
        'Private Lift'
      ],
      RU: [
        '4-страничная презентация проекта',
        '3 × Экстерьерных рендера',
        '5 × Интерьерных рендеров',
        'Зал домашнего кинотеатра',
        'Частный лифт'
      ],
      ES: [
        'Presentación de 4 Páginas',
        '3 × Renders Exteriores',
        '5 × Renders Interiores',
        'Cine en Casa',
        'Ascensor Privado'
      ]
    },
    keySpaces: [
      { name: { EN: 'Lounge', RU: 'Гостиная-лаунж', ES: 'Salón Principal' }, size: "38'0\" × 14'10\"" },
      { name: { EN: 'Master Bedroom', RU: 'Мастер-спальня', ES: 'Dormitorio Principal' }, size: "16'9\" × 14'0\"" },
      { name: { EN: 'Balcony', RU: 'Панорамный балкон', ES: 'Balcón Grande' }, size: "5'9\" × 34'9\"" },
      { name: { EN: 'Home Theater', RU: 'Домашний кинотеатр', ES: 'Cine en Casa' }, size: "19'3\" × 14'0\"" },
      { name: { EN: 'Ground Bedroom', RU: 'Спальня на 1-м этаже', ES: 'Dormitorio Planta Baja' }, size: "16'9\" × 13'0\"" },
      { name: { EN: 'Sitout', RU: 'Зона отдыха', ES: 'Terraza Estar' }, size: "19'6\" × 13'0\"" }
    ],
    deliverables: {
      EN: [
        '4-Page Presentation',
        '3 × Exterior Renders',
        '5 × Interior Renders',
        'Home Theater',
        'Private Lift'
      ],
      RU: [
        '4-страничная презентация проекта',
        '3 × Экстерьерных рендера',
        '5 × Интерьерных рендеров',
        'Зал домашнего кинотеатра',
        'Частный лифт'
      ],
      ES: [
        'Presentación de 4 Páginas',
        '3 × Renders Exteriores',
        '5 × Renders Interiores',
        'Cine en Casa',
        'Ascensor Privado'
      ]
    }
  },
  {
    id: 'project-3',
    title: {
      EN: 'Suresh Residence',
      RU: 'Резиденция Суреша',
      ES: 'Residencia Suresh'
    },
    category: 'residential',
    categoryLabel: { EN: 'Family Home', RU: 'Семейный дом', ES: 'Casa Familiar' },
    location: { EN: 'Nalgonda, Telangana', RU: 'Налгонда, Телангана', ES: 'Nalgonda, Telangana' },
    area: 'Practical & Warm Estate',
    year: '2026',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1600',
    description: {
      EN: 'A well-resolved family home where every square foot earns its keep. The brief asked for practicality and warmth in equal measure — the floor plan delivers both with a master suite, dedicated puja room, and living spaces that breathe without sprawling. This is a home built for the rhythm of daily life, not for the occasional photograph.',
      RU: 'Рациональный семейный дом, где каждый квадратный метр используется с умом. В задании требовались практичность и теплота в равной степени: планировка обеспечивает и то, и другое благодаря мастер-спальне, выделенной комнате для пуджи и гостиной, которая дышит уютом. Это дом, построенный для ритма повседневной жизни.',
      ES: 'Una casa familiar bien resuelta donde cada metro cuadrado cuenta. El encargo pedía practicidad y calidez por igual: el plano de planta ofrece ambas con una suite principal, sala de puja dedicada y espacios de estar que respiran sin expandirse. Es un hogar construido para el ritmo de la vida diaria.'
    },
    details: {
      EN: [
        'Floor Plan',
        'Exterior Render',
        'Site Documentation'
      ],
      RU: [
        'Чертеж планировки этажа',
        'Экстерьерный 3D-рендер',
        'Исполнительная документация'
      ],
      ES: [
        'Plano de Planta',
        'Render de Exterior',
        'Documentación del Sitio'
      ]
    },
    keySpaces: [
      { name: { EN: 'Master Bedroom', RU: 'Мастер-спальня', ES: 'Dormitorio Principal' }, size: "13'0\" × 15'6\"" },
      { name: { EN: 'Living Area', RU: 'Гостиная зона', ES: 'Área de Estar' }, size: "11'0\" × 13'6\"" },
      { name: { EN: 'Kitchen', RU: 'Кухня', ES: 'Cocina' }, size: "11'0\" × 13'9\"" },
      { name: { EN: 'Puja Room', RU: 'Молельная (Пуджа)', ES: 'Sala de Puja' }, size: "6'0\" × 5'0\"" },
      { name: { EN: 'Balcony', RU: 'Балкон', ES: 'Balcón' }, size: "3'6\" wide" },
      { name: { EN: 'Bedroom', RU: 'Спальня', ES: 'Dormitorio' }, size: "13'0\" × 10'0\"" }
    ],
    deliverables: {
      EN: [
        'Floor Plan',
        'Exterior Render',
        'Site Documentation'
      ],
      RU: [
        'Чертеж планировки этажа',
        'Экстерьерный 3D-рендер',
        'Исполнительная документация'
      ],
      ES: [
        'Plano de Planta',
        'Render de Exterior',
        'Documentación del Sitio'
      ]
    }
  },
  {
    id: 'project-4',
    title: {
      EN: 'Venkat Reddy',
      RU: 'Резиденция Венката Редди',
      ES: 'Residencia Venkat Reddy'
    },
    category: 'residential',
    categoryLabel: { EN: 'Grand Villa', RU: 'Гранд-вилла', ES: 'Gran Villa' },
    location: { EN: 'Hyderabad, Telangana', RU: 'Хайдарабад, Телангана', ES: 'Hyderabad, Telangana' },
    area: 'Studio\'s Most Ambitious Estate',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1600',
    description: {
      EN: "The studio's most ambitious private commission to date. The drawing room makes an impression on arrival; the 24-foot dining hall takes over from there. An 18-square-foot family living room, a full home theater, and a commissioned mural wall round out a home designed for a family that entertains with generosity and retreats with real comfort. Six detailed Enscape renders guided every material decision from stone to joinery.",
      RU: 'Самый амбициозный частный проект студии на сегодняшний день. Просторная приемная впечатляет с порога, за ней следует обеденный зал длиной 24 фута. Семейная гостиная, полноценный домашний кинотеатр и художественная роспись на стене дополняют дом, созданный для семьи, которая любит принимать гостей и ценит настоящий комфорт.',
      ES: 'El encargo privado más ambicioso de nuestro estudio hasta la fecha. La sala de estar impresiona a la llegada y el comedor de 24 pies toma el control desde allí. Una sala de estar familiar, cine en casa completo y una pared con un mural artístico completan una casa diseñada para recibir visitas con generosidad.'
    },
    details: {
      EN: [
        '2 × Floor Plans',
        '2 × Elevations',
        '6 × Enscape Renders',
        'Home Theater',
        'Mural Feature'
      ],
      RU: [
        '2 × Чертежа планировки',
        '2 × Чертежа фасадов',
        '6 × Визуализаций Enscape',
        'Домашний кинотеатр',
        'Авторское настенное панно'
      ],
      ES: [
        '2 × Planos de Planta',
        '2 × Elevaciones',
        '6 × Renders Enscape',
        'Cine en Casa',
        'Mural Artístico'
      ]
    },
    keySpaces: [
      { name: { EN: 'Drawing Room', RU: 'Парадная гостиная', ES: 'Sala de Estar' }, size: "18'8\" × 11'6\"" },
      { name: { EN: 'Dining Area', RU: 'Обеденный зал', ES: 'Comedor Grande' }, size: "24'8\" × 14'10\"" },
      { name: { EN: 'Family Living', RU: 'Семейная гостиная', ES: 'Estar Familiar' }, size: "18'0\" × 18'0\"" },
      { name: { EN: 'P. Bedroom', RU: 'Спальня родителей', ES: 'Dormitorio de Padres' }, size: "18'6\" × 14'0\"" },
      { name: { EN: 'C. Bedroom', RU: 'Детская спальня', ES: 'Dormitorio Infantil' }, size: "16'9\" × 13'0\"" },
      { name: { EN: 'Mural Art Wall', RU: 'Художественное панно', ES: 'Pared de Mural Artístico' }, size: "Feature" }
    ],
    deliverables: {
      EN: [
        '2 × Floor Plans',
        '2 × Elevations',
        '6 × Enscape Renders',
        'Home Theater',
        'Mural Feature'
      ],
      RU: [
        '2 × Чертежа планировки',
        '2 × Чертежа фасадов',
        '6 × Визуализаций Enscape',
        'Домашний кинотеатр',
        'Авторское настенное панно'
      ],
      ES: [
        '2 × Planos de Planta',
        '2 × Elevaciones',
        '6 × Renders Enscape',
        'Cine en Casa',
        'Mural Artístico'
      ]
    }
  }
];

export interface ServiceDivision {
  id: 'design' | 'build' | 'deliver';
  label: Record<Language, string>;
  title: Record<Language, string>;
  tagline: Record<Language, string>;
  description: Record<Language, string>;
  image: string;
  offerings: {
    id: string;
    title: Record<Language, string>;
    description: Record<Language, string>;
    features: Record<Language, string[]>;
  }[];
}

export const serviceDivisions: ServiceDivision[] = [
  {
    id: 'design',
    label: { EN: 'DESIGN', RU: 'ПРОЕКТИРОВАНИЕ', ES: 'DISEÑO' },
    title: { EN: 'Architectural and Interior Design', RU: 'Архитектурное и интерьерное проектирование', ES: 'Diseño Arquitectónico e Interior' },
    tagline: {
      EN: 'Rigorous architectural accuracy meets exquisite interior vision.',
      RU: 'Строгая архитектурная точность сочетается с изысканным видением интерьера.',
      ES: 'La precisión arquitectónica rigurosa se une a una exquisita visión interior.'
    },
    description: {
      EN: 'Before a single brick is laid, we map your entire space down to the millimeter. Our design phase covers spatial volumes, custom furniture configurations, functional zoning, lighting math, and raw physical material coordination.',
      RU: 'Прежде чем положить первый кирпич, мы рассчитываем пространство до миллиметра. Наш этап проектирования охватывает пространственные объемы, конфигурации мебели, функциональное зонирование, расчет освещения и координацию материалов.',
      ES: 'Antes de colocar un solo ladrillo, mapeamos todo su espacio al milímetro. Nuestra fase de diseño abarca volúmenes espaciales, configuraciones de muebles a medida, zonificación funcional, cálculo de iluminación y coordinación de materiales.'
    },
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1200',
    offerings: [
      {
        id: 'arch-design',
        title: { EN: 'Architectural Design', RU: 'Архитектурное проектирование', ES: 'Diseño Arquitectónico' },
        description: {
          EN: 'Creating balanced spatial volumes, customized facade designs, sun-path oriented configurations, and rigorous masterplans that exist in complete organic harmony with the landscape.',
          RU: 'Создание сбалансированных пространственных объемов, индивидуальных фасадов, конфигураций с учетом солнечного света и генеральных планов в гармонии с ландшафтом.',
          ES: 'Creación de volúmenes espaciales equilibrados, diseños de fachadas personalizados, configuraciones orientadas al sol y planos directores rigurosos en armonía con el paisaje.'
        },
        features: {
          EN: [
            'Ergonomic spatial flow layout plans',
            'Full volume drafting & structural alignment',
            'Slick modern facade & envelope configurations',
            'Sunlight exposure mapping & orientation blueprints'
          ],
          RU: [
            'Эргономичные планировочные решения и логика перемещений',
            'Чертежи объемов здания и конструктивная привязка',
            'Современный дизайн фасадов и ограждающих конструкций',
            'Расчет инсоляции и привязка к сторонам света'
          ],
          ES: [
            'Planos de distribución ergonómica del flujo espacial',
            'Redacción de volumen completo y alineación estructural',
            'Diseños modernos de fachadas y envolventes',
            'Mapeo de exposición a la luz solar y planos de orientación'
          ]
        }
      },
      {
        id: 'interior-design',
        title: { EN: 'Interior Design', RU: 'Дизайн интерьера', ES: 'Diseño de Interiores' },
        description: {
          EN: 'Curating subtle, elegant sensory experiences. We combine premium materials, natural textures, customized cabinet systems, and custom details to reflect your unique character.',
          RU: 'Создание тонкого, элегантного чувственного опыта. Мы сочетаем премиальные материалы, натуральные текстуры, индивидуальные мебельные системы и авторские детали, отражающие ваш характер.',
          ES: 'Curaduría de experiencias sensoriales sutiles y elegantes. Combinamos materiales de primera calidad, texturas naturales, sistemas de armarios a medida y detalles exclusivos.'
        },
        features: {
          EN: [
            'Photorealistic 3D cinematic rendering visualizations',
            'Tactile material pairings & custom marble selections',
            'Custom dresser, vanity & integrated kitchen designs',
            'Lighting geometry setups & custom switch plans'
          ],
          RU: [
            'Фотореалистичные кинематографичные 3D-визуализации',
            'Гармоничный подбор тактильных материалов и сортов мрамора',
            'Проектирование индивидуальных кухонь, гардеробных и островов',
            'Сценарии освещения и планы привязки выключателей'
          ],
          ES: [
            'Visualizaciones cinematográficas fotorrealistas en 3D',
            'Combinaciones de materiales táctiles y mármol selecto',
            'Diseños de vestidores, tocadores y cocinas integradas a medida',
            'Configuraciones de geometría de iluminación y esquemas de interruptores'
          ]
        }
      }
    ]
  },
  {
    id: 'build',
    label: { EN: 'BUILD', RU: 'СТРОИТЕЛЬСТВО', ES: 'CONSTRUCCIÓN' },
    title: { EN: 'Architecture and Interiors — Build and Finish', RU: 'Архитектурное и интерьерное проектирование', ES: 'Diseño Arquitectónico e Interior' },
    tagline: {
      EN: 'Flawless physical realization guided by uncompromising engineering.',
      RU: 'Безупречное физическое воплощение под руководством бескомпромиссного инженерного контроля.',
      ES: 'Realización física impecable guiada por una ingeniería sin concesiones.'
    },
    description: {
      EN: 'We transition effortlessly from pixels to physical structures. spacenine architects manages the complete general contracting workflow, utilizing high-density acoustic components, certified engineers, and strict building tolerances.',
      RU: 'Мы легко переходим от пикселей к физическим формам. spacenine architects управляет всем процессом генерального подряда, используя звукоизоляционные материалы высокой плотности, сертифицированных инженеров и строжайшие допуски.',
      ES: 'Hacemos la transición sin esfuerzo de los píxeles a las estructuras físicas. spacenine architects gestiona todo el flujo de trabajo de la contratación general, utilizando componentes acústicos y tolerancias estrictas.'
    },
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=1200',
    offerings: [
      {
        id: 'arch-build',
        title: { EN: 'Architecture – Build and Finish', RU: 'Строительство архитектурных объектов', ES: 'Construcción y Acabado de Arquitectura' },
        description: {
          EN: 'High-end hard construction including deep-set foundation engineering, monolithic concrete framing, structural steel, climate-insulated brickwork, and panoramic minimal-profile glazing installations.',
          RU: 'Премиальное капитальное строительство, включая устройство фундаментов, монолитных железобетонных каркасов, кирпичную кладку и установку панорамного остекления.',
          ES: 'Construcción pesada de alta gama que incluye cimentaciones profundas, estructuras de hormigón monolítico, acero estructural, mampostería termoaislante y acristalamiento panorámico.'
        },
        features: {
          EN: [
            'Deep-set structural foundation engineering',
            'Monolithic concrete frame & pillar erection',
            'High-efficiency insulated brickwork partitions',
            'Panoramic minimal-profile structural glazing'
          ],
          RU: [
            'Устройство фундаментов глубокого заложения',
            'Возведение монолитных каркасов и колонн',
            'Кладка стен со сверхвысокой теплоизоляцией',
            'Монтаж панорамного безрамного остекления'
          ],
          ES: [
            'Ingeniería de cimientos estructurales profundos',
            'Construcción de estructuras y pilares de hormigón',
            'Tabiques de mampostería con aislamiento eficiente',
            'Acristalamiento estructural panorámico de perfil mínimo'
          ]
        }
      },
      {
        id: 'interiors-build',
        title: { EN: 'Interiors – Build and Finish', RU: 'Монтаж и чистовая отделка', ES: 'Construcción y Acabado de Interiores' },
        description: {
          EN: 'High-precision interior finishing and fit-out including premium drywall engineering, custom wood paneling, custom stone installation, and perfect painting and decorative finishes.',
          RU: 'Высокоточная отделка интерьеров премиум-класса, включая сложные гипсокартонные конструкции, монтаж деревянных панелей, обработку натурального камня и идеальную покраску.',
          ES: 'Acabados de interiores de alta precisión que incluyen ingeniería de paneles de yeso premium, paneles de madera a medida, instalación de piedra personalizada y acabados decorativos y de pintura perfectos.'
        },
        features: {
          EN: [
            'Premium drywall systems & acoustic treatment',
            'Custom wall paneling & joinery installations',
            'Expert natural stone & bookmatched marble fitting',
            'Flawless microcement & premium paint finishes'
          ],
          RU: [
            'Высококачественные гипсокартонные системы и шумоизоляция',
            'Монтаж индивидуальных настенных панелей и столярных изделий',
            'Профессиональная укладка натурального камня и мрамора «бабочкой»',
            'Безупречное нанесение микроцемента и премиальной краски'
          ],
          ES: [
            'Sistemas de paneles de yeso premium y tratamiento acústico',
            'Instalaciones de carpintería y paneles de pared a medida',
            'Colocación experta de piedra natural y mármol combinado',
            'Microcemento impecable y acabados de pintura premium'
          ]
        }
      }
    ]
  },
  {
    id: 'deliver',
    label: { EN: 'DELIVER', RU: 'СДАЧА', ES: 'ENTREGA' },
    title: { EN: 'Curated Sourcing & Handover', RU: 'Комплектация и авторская сдача', ES: 'Abastecimiento Curado y Entrega' },
    tagline: {
      EN: 'The seamless transition to your new premium life.',
      RU: 'Безупречный переход к вашей новой изысканной жизни.',
      ES: 'La transición perfecta a su nueva vida a medida.'
    },
    description: {
      EN: 'A magnificent design is nothing without impeccable execution and curated procurement. We source original European furniture directly from manufacturers and deliver a fully cleaned, climate-calibrated, styled space.',
      RU: 'Великолепный дизайн невозможен без безупречного исполнения и профессионального снабжения. Мы привозим оригинальную европейскую мебель напрямую от фабрик и сдаем полностью очищенный и готовый к жизни объект.',
      ES: 'Un diseño magnífico no es solo sobre el concepto; requiere una ejecución impecable y un abastecimiento seleccionado. Importamos mobiliario europeo original directamente de los fabricantes y entregamos un espacio limpio y estilizado.'
    },
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1200',
    offerings: [
      {
        id: 'sourcing',
        title: { EN: 'Custom Furniture Sourcing & Sizing', RU: 'Комплектация мебели и подбор размеров', ES: 'Abastecimiento y Dimensionamiento de Mobiliario' },
        description: {
          EN: 'Direct procurement of high-end Italian, French, and German furniture, textiles, and light fixtures. We adjust scale, verify dimensions, manage logistics, and handle full delivery insurance.',
          RU: 'Прямые поставки мебели, текстиля и светильников ведущих фабрик Италии, Франции и Германии. Мы проверяем все чертежи и размеры, организуем логистику, таможенное оформление и страхование.',
          ES: 'Adquisición directa de muebles, textiles y lámparas de alta gama de marcas italianas y alemanas. Ajustamos la escala, verificamos dimensiones, gestionamos la logística y el seguro de entrega.'
        },
        features: {
          EN: [
            'Direct relations with elite EU manufacturer showrooms',
            'Custom dimension scaling to fit your architectural layout',
            'Premium fabric, leather, and metal finish matching samples',
            'End-to-end import logistics, custom clearance & storage'
          ],
          RU: [
            'Прямые контакты с фабриками и шоурумами Европы',
            'Подбор индивидуальных размеров под вашу планировку',
            'Предоставление живых образцов тканей, кож и металлов',
            'Полный цикл импорта, таможенного оформления и хранения'
          ],
          ES: [
            'Relaciones directas con salas de exhibición de fabricantes de élite de la UE',
            'Escalamiento de dimensiones personalizadas para adaptarse a su distribución',
            'Muestras de combinación de telas, cueros y acabados metálicos premium',
            'Logística de importación de extremo a extremo, despacho de aduana y almacenamiento'
          ]
        }
      },
      {
        id: 'handover',
        title: { EN: 'White-glove Turnkey Handover & Installation', RU: 'Авторская сдача и финальное декорирование', ES: 'Entrega e Instalación con Guante Blanco Llave en Mano' },
        description: {
          EN: 'The ultimate reveal. We assemble and install every luxury item, hang fine art, perform professional deep post-construction cleaning, calibrate lighting coordinates, and apply our signature room perfume styling.',
          RU: 'Момент истинного триумфа. Мы собираем и устанавливаем каждый предмет мебели, развешиваем картины, проводим профессиональный клининг, настраиваем свет и наполняем пространство фирменным ароматом.',
          ES: 'La revelación definitiva. Ensamblamos e instalamos cada artículo de lujo, colgamos obras de arte, realizamos una limpieza pos-obra profunda, calibramos la iluminación y aplicamos perfume de ambiente de autor.'
        },
        features: {
          EN: [
            'Multi-phase detailed quality assurance checklist review',
            'Master-level heavy furniture assembly & anchoring systems',
            'Custom art curation & decorative accessory placement',
            'Post-construction deep clean & signature space fragrance styling'
          ],
          RU: [
            'Многоэтапный чек-лист проверки качества и приемки работ',
            'Профессиональная сборка мебели и надежные скрытые крепления',
            'Арт-банкинг: подбор живописи, скульптур и аксессуаров',
            'Глубокий послестроительный клининг и селективная ароматизация комнат'
          ],
          ES: [
            'Revisión de la lista de verificación de garantía de calidad de varias fases',
            'Sistemas de anclaje y montaje de muebles pesados de nivel maestro',
            'Curaduría de arte a medida y colocación de accesorios decorativos',
            'Limpieza profunda pos-construcción y fragancia exclusiva para espacios'
          ]
        }
      }
    ]
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 'test-1',
    author: 'Dr. Ananya Goel',
    role: { EN: 'Owner of Malabar Hill Mansion, Mumbai', RU: 'Владелец роскошной виллы в Малабар Хиллс, Мумбаи', ES: 'Propietaria de Mansión en Malabar Hill, Mumbai' },
    text: {
      EN: 'Working with spacenine architects was an extraordinary experience. They built our walk-in closet and master bedroom exactly as shown in the 3D visual plans, pin-to-pin, without any variations. The light scenarios are simply divine.',
      RU: 'Сотрудничество с spacenine architects было потрясающим опытом. Они реализовали нашу гардеробную и спальню точно так, как было показано на визуализациях — пиксель в пиксель, без расхождений. Сценарии освещения просто божественны.',
      ES: 'Trabajar con spacenine architects fue una experiencia extraordinaria. Construyeron nuestro vestidor y dormitorio principal exactamente como se mostraba en los planos 3D, clavo a clavo. Las luces son simplemente divinas.'
    },
    rating: 5
  },
  {
    id: 'test-2',
    author: 'Vikramaditya Birla',
    role: { EN: 'Managing Director of Birla & Sons', RU: 'Управляющий директор Birla & Sons', ES: 'Director Gerente de Birla & Sons' },
    text: {
      EN: 'The professional design for our executive lounge exceeded our expectations. The attention to acoustics and the custom meeting furniture represent the exact level of luxury and utility our brand stands for.',
      RU: 'Проект представительского офиса превзошел все ожидания. Внимание к акустике и изготовленная под заказ мебель полностью соответствуют тому уровню роскоши и практичности, к которому стремится наша компания.',
      ES: 'El diseño profesional para nuestro salón ejecutivo superó nuestras expectativas. La atención a la acústica y el mobiliario a medida representan el nivel exacto de lujo de nuestra marca.'
    },
    rating: 5
  }
];

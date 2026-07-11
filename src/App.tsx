import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { PortfolioSection } from './components/PortfolioSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ServiceDetailPage } from './components/ServiceDetailPage';
import { ProjectDetailPage } from './components/ProjectDetailPage';
import { WhatsAppButton } from './components/WhatsAppButton';
import { Language, ServicePageId } from './types';

// Professional enterprise-grade SEO metadata mapping (35-years industry standard)
// Targets key search phrases: Architects in Hyderabad, Interior Designers in Hyderabad, Luxury Home Build/Execution.
const seoMetadata: Record<
  string, 
  Record<Language, { title: string; description: string; keywords: string }>
> = {
  home: {
    EN: {
      title: "Spacenine Architects | Best Architects & Luxury Interior Designers in Hyderabad",
      description: "Discover Spacenine Architects, Hyderabad's leading luxury architecture & interior design studio. We design high-end homes, premium villas, and bespoke turnkey commercial spaces.",
      keywords: "Architects in Hyderabad, Interior Designers in Hyderabad, Best Architects Hyderabad, Luxury Interior Designers Hyderabad, Turnkey Home Construction Hyderabad, Spacenine Architects"
    },
    RU: {
      title: "Spacenine Architects | Лучшие Архитекторы и Дизайнеры Интерьера в Хайдарабаде",
      description: "Откройте для себя Spacenine Architects, ведущую студию элитной архитектуры и дизайна интерьера в Хайдарабаде. Проектируем виллы премиум-класса и коммерческие пространства.",
      keywords: "Архитекторы в Хайдарабаде, Дизайнеры интерьера Хайдарабад, Элитный дизайн интерьера, Spacenine Architects"
    },
    ES: {
      title: "Spacenine Architects | Mejores Arquitectos y Diseñadores de Interiores en Hyderabad",
      description: "Descubra Spacenine Architects, el principal estudio de arquitectura y diseño de interiores de lujo en Hyderabad. Diseñamos villas de alta gama y espacios comerciales a medida.",
      keywords: "Arquitectos en Hyderabad, Diseñadores de interiores Hyderabad, Diseño de interiores de lujo, Spacenine"
    }
  },
  about: {
    EN: {
      title: "About Us | Spacenine Architects - Elite Design Philosophy & Team",
      description: "Learn about Spacenine Architects, an award-winning architectural and interior design collective in Hyderabad. Crafting timeless luxury spaces with meticulous precision.",
      keywords: "About Spacenine Architects, Top Architects Kokapet, Luxury Interior Architecture Hyderabad, Professional Design Studio Hyderabad"
    },
    RU: {
      title: "О нас | Spacenine Architects - Философия дизайна и Команда",
      description: "Узнайте о Spacenine Architects, отмеченном наградами архитектурном бюро в Хайдарабаде. Создаем неподвластные времени элитные пространства.",
      keywords: "О студии Spacenine, Архитектурное бюро Хайдарабад, Премиальный дизайн"
    },
    ES: {
      title: "Sobre Nosotros | Spacenine Architects - Filosofía de Diseño y Equipo",
      description: "Conozca Spacenine Architects, un galardonado estudio de arquitectura y diseño de interiores en Hyderabad. Espacios de lujo atemporales.",
      keywords: "Sobre Spacenine, Estudio de diseño premium, Arquitectura de lujo"
    }
  },
  portfolio: {
    EN: {
      title: "Luxury Portfolio | Spacenine Architects - Premium Residences & Projects",
      description: "Explore our curated portfolio of ultra-luxury villas, minimalist penthouses, premium kitchens, and commercial landmarks completed by Spacenine in Hyderabad.",
      keywords: "Villa designs Hyderabad, Penthouse interior Hyderabad, Spacenine Portfolio, Luxury home designs, Interior showcase Hyderabad"
    },
    RU: {
      title: "Портфолио | Spacenine Architects - Элитные Резиденции и Проекты",
      description: "Исследуйте наше портфолио роскошных вилл, минималистичных пентхаусов, премиальных кухонь и коммерческих объектов в Хайдарабаде.",
      keywords: "Дизайн вилл Хайдарабад, Проекты пентхаусов, Портфолио Spacenine, Интерьеры премиум"
    },
    ES: {
      title: "Portafolio de Lujo | Spacenine Architects - Residencias Premium",
      description: "Explore nuestro portafolio de villas de lujo, penthouses minimalistas y proyectos comerciales premium completados por Spacenine en Hyderabad.",
      keywords: "Diseño de villas Hyderabad, Portafolio Spacenine, Diseños de casas de lujo"
    }
  },
  'architectural-design': {
    EN: {
      title: "Bespoke Architectural Design in Hyderabad | Spacenine Architects",
      description: "Premium architectural design planning and elevations for modern villas, luxury apartments, and commercial complexes in Hyderabad by Spacenine.",
      keywords: "Architectural design Hyderabad, Villa architects Hyderabad, Modern house elevations, Luxury home planning, Kokapet architects"
    },
    RU: {
      title: "Архитектурное проектирование в Хайдарабаде | Spacenine Architects",
      description: "Разработка архитектурных проектов премиум-класса, фасадов современных вилл и коммерческих комплексов от бюро Spacenine.",
      keywords: "Архитектурное проектирование Хайдарабад, Проектирование вилл, Современные фасады"
    },
    ES: {
      title: "Diseño Arquitectónico a Medida en Hyderabad | Spacenine Architects",
      description: "Planificación y elevaciones arquitectónicas premium para villas modernas y complejos comerciales en Hyderabad por Spacenine.",
      keywords: "Diseño arquitectónico Hyderabad, Arquitectos de villas, Planificación de casas de lujo"
    }
  },
  'interior-design': {
    EN: {
      title: "Luxury Interior Designers in Hyderabad | Spacenine Architects",
      description: "Award-winning high-end interior designers in Hyderabad. Handcrafted residential living rooms, bespoke walk-in wardrobes, and modular premium kitchens.",
      keywords: "Interior designers in Hyderabad, Best luxury interiors Hyderabad, Modern kitchen interior, Wardrobes design Hyderabad, Kokapet interior designers"
    },
    RU: {
      title: "Дизайн Интерьера Премиум Класса в Хайдарабаде | Spacenine Architects",
      description: "Эксклюзивный дизайн интерьеров в Хайдарабаде. Элитные гостиные, гардеробные комнаты на заказ и премиальные модульные кухни.",
      keywords: "Дизайн интерьера Хайдарабад, Премиальные интерьеры, Гардеробные на заказ, Итальянские кухни"
    },
    ES: {
      title: "Diseñadores de Interiores de Lujo en Hyderabad | Spacenine Architects",
      description: "Diseño de interiores de alta gama en Hyderabad. Salas residenciales personalizadas, vestidores a medida y cocinas modulares premium.",
      keywords: "Diseño de interiores Hyderabad, Interiores de lujo Hyderabad, Cocinas modernas, Vestidores de lujo"
    }
  },
  'architecture-build': {
    EN: {
      title: "Turnkey Architecture & Construction Services Hyderabad | Spacenine",
      description: "End-to-end architecture and premium home construction services in Hyderabad. We deliver flawless luxury villas from foundation to final paint.",
      keywords: "Turnkey home construction Hyderabad, House builders Kokapet, Design build firm Hyderabad, Premium villa construction"
    },
    RU: {
      title: "Архитектура и Строительство «Под Ключ» Хайдарабад | Spacenine",
      description: "Полный цикл архитектурного проектирования и строительства премиум-домов в Хайдарабаде. Сдача элитных вилл под ключ.",
      keywords: "Строительство вилл Хайдарабад, Дома под ключ, Проектирование и строительство, Премиум виллы"
    },
    ES: {
      title: "Arquitectura y Construcción Llave en Mano Hyderabad | Spacenine",
      description: "Servicios integrales de arquitectura y construcción de viviendas de lujo en Hyderabad. Entregamos villas impecables de principio a fin.",
      keywords: "Construcción llave en mano Hyderabad, Constructores de casas de lujo, Diseño y edificación"
    }
  },
  'interiors-build': {
    EN: {
      title: "Turnkey Interior Fit-outs & Execution Hyderabad | Spacenine Architects",
      description: "Premium turnkey interior execution and fit-outs in Hyderabad. We handle bespoke procurement, premium woodwork, custom lighting, and styling.",
      keywords: "Turnkey interior execution Hyderabad, Premium interior fit out, Bespoke woodwork Hyderabad, Luxury interior contractor"
    },
    RU: {
      title: "Реализация Интерьеров «Под Ключ» Хайдарабад | Spacenine Architects",
      description: "Премиальная реализация интерьеров и отделка под ключ в Хайдарабаде. Поставка мебели, индивидуальное деревообработка и освещение.",
      keywords: "Реализация интерьера Хайдарабад, Отделка вилл, Премиальная мебель, Элитная столярка"
    },
    ES: {
      title: "Ejecución de Interiores Llave en Mano Hyderabad | Spacenine Architects",
      description: "Ejecución de interiores de lujo y remodelaciones llave en mano en Hyderabad. Carpintería a medida, iluminación premium y estilismo.",
      keywords: "Ejecución de interiores llave en mano, Remodelación de lujo Hyderabad, Carpintería premium"
    }
  },
  contact: {
    EN: {
      title: "Contact Elite Team | Spacenine Architects Hyderabad Office",
      description: "Get in touch with Hyderabad's best architects & interior designers for a consultation. Start designing your luxury project in Kokapet today.",
      keywords: "Contact Spacenine Architects, Architecture offices Kokapet, Best interior designer contact Hyderabad, Hire architect Hyderabad"
    },
    RU: {
      title: "Контакты | Spacenine Architects - Студия в Хайдарабаде",
      description: "Свяжитесь с лучшими архитекторами и дизайнерами интерьера Хайдарабада для консультации. Начните свой премиальный проект сегодня.",
      keywords: "Контакты Spacenine, Архитектурное бюро Хайдарабад, Заказать дизайн проект"
    },
    ES: {
      title: "Contacto | Oficina de Spacenine Architects en Hyderabad",
      description: "Póngase en contacto con los mejores arquitectos y дизайнеров de interiores de Hyderabad. Comience a diseñar su proyecto de lujo hoy.",
      keywords: "Contacto Spacenine, Oficinas de arquitectura Hyderabad, Contratar diseñador de interiores"
    }
  },
  'project-1': {
    EN: {
      title: "Narendar Residence | Portfolio | Spacenine Architects",
      description: "Explore Narendar Residence, a multi-generational modern luxury home designed and executed with precision by Spacenine Architects.",
      keywords: "Narendar Residence, Luxury Home Telangana, Spacenine Portfolio, Multi-generational House"
    },
    RU: {
      title: "Резиденция Нарендара | Портфолио | Spacenine Architects",
      description: "Исследуйте Резиденцию Нарендара — современный элитный дом для всей семьи, созданный Spacenine Architects.",
      keywords: "Резиденция Нарендара, Премиальный дом, Портфолио Spacenine, Архитектурное бюро Хайдарабад"
    },
    ES: {
      title: "Residencia Narendar | Portafolio | Spacenine Architects",
      description: "Explore la Residencia Narendar, un hogar multifamiliar moderno de lujo diseñado por Spacenine Architects.",
      keywords: "Residencia Narendar, Casa de Lujo, Portafolio Spacenine, Arquitectos Hyderabad"
    }
  },
  'project-2': {
    EN: {
      title: "Sudeep Reddy | Portfolio | Spacenine Architects",
      description: "Discover Sudeep Reddy residence, designed for living at its fullest scale with double-height lounge and magnificent balcony details.",
      keywords: "Sudeep Reddy, Luxury Villa Hyderabad, Spacenine Portfolio, Double height lounge"
    },
    RU: {
      title: "Резиденция Судипа Редди | Портфолио | Spacenine Architects",
      description: "Откройте для себя резиденцию Судипа Редди: роскошная вилла в Хайдарабаде с гостиной двойной высоты от Spacenine Architects.",
      keywords: "Судип Редди, Роскошная вилла Хайдарабад, Портфолио Spacenine"
    },
    ES: {
      title: "Residencia Sudeep Reddy | Portafolio | Spacenine Architects",
      description: "Descubra la residencia Sudeep Reddy, diseñada para vivir a gran escala con salón de doble altura por Spacenine Architects.",
      keywords: "Sudeep Reddy, Villa de Lujo Hyderabad, Portafolio Spacenine"
    }
  },
  'project-3': {
    EN: {
      title: "Suresh Residence | Portfolio | Spacenine Architects",
      description: "Explore Suresh Residence, a warm family home where every square foot earns its keep by Spacenine Architects.",
      keywords: "Suresh Residence, Nalgonda Telangana, Spacenine Portfolio, Family Home"
    },
    RU: {
      title: "Резиденция Суреша | Портфолио | Spacenine Architects",
      description: "Исследуйте Резиденцию Суреша: теплый и рациональный семейный дом в Налгонде от Spacenine Architects.",
      keywords: "Резиденция Суреша, Семейный дом Налгонда, Портфолио Spacenine"
    },
    ES: {
      title: "Residencia Suresh | Portafolio | Spacenine Architects",
      description: "Explore la Residencia Suresh, una casa familiar cálida y práctica construida por Spacenine Architects.",
      keywords: "Residencia Suresh, Casa Familiar, Portafolio Spacenine"
    }
  },
  'project-4': {
    EN: {
      title: "Venkat Reddy | Portfolio | Spacenine Architects",
      description: "Discover Venkat Reddy Grand Villa, the studio's most ambitious private commission designed for supreme comfort.",
      keywords: "Venkat Reddy, Grand Villa Hyderabad, Spacenine Portfolio, Ambitious Estate"
    },
    RU: {
      title: "Резиденция Венката Редди | Портфолио | Spacenine Architects",
      description: "Исследуйте Гранд-виллу Венката Редди — самый амбициозный частный проект студии Spacenine Architects.",
      keywords: "Венкат Редди, Гранд вилла, Элитная архитектура, Портфолио Spacenine"
    },
    ES: {
      title: "Residencia Venkat Reddy | Portafolio | Spacenine Architects",
      description: "Descubra la Gran Villa de Venkat Reddy, el encargo privado más ambicioso de Spacenine Architects.",
      keywords: "Venkat Reddy, Gran Villa, Portafolio Spacenine, Residencia de Lujo"
    }
  }
};

export default function App() {
  const [currentLang, setLang] = useState<Language>('EN');
  const [currentPage, setCurrentPage] = useState<'home' | 'about' | 'portfolio' | 'contact' | ServicePageId | 'project-1' | 'project-2' | 'project-3' | 'project-4'>('home');
  const [activeSection, setActiveSection] = useState<string>('home');
  const [selectedService, setSelectedService] = useState<ServicePageId>('architectural-design');
  const [prefilledBrief, setPrefilledBrief] = useState<string>('');

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Dynamic Page-wise SEO management (Titles, Descriptions, Keywords, OG, JSON-LD Schema)
  useEffect(() => {
    const data = seoMetadata[currentPage] || seoMetadata.home;
    const langData = data[currentLang] || data.EN;

    // Update browser tab/window title
    document.title = langData.title;

    // Update Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', langData.description);

    // Update Meta Keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', langData.keywords);

    // Update OpenGraph Title
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute('content', langData.title);

    // Update OpenGraph Description
    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (!ogDesc) {
      ogDesc = document.createElement('meta');
      ogDesc.setAttribute('property', 'og:description');
      document.head.appendChild(ogDesc);
    }
    ogDesc.setAttribute('content', langData.description);

    // Update OpenGraph URL
    const cleanUrl = `https://spacenine.in/${currentPage !== 'home' ? '#' + currentPage : ''}`;
    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (!ogUrl) {
      ogUrl = document.createElement('meta');
      ogUrl.setAttribute('property', 'og:url');
      document.head.appendChild(ogUrl);
    }
    ogUrl.setAttribute('content', cleanUrl);

    // Update Canonical Link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', cleanUrl);

    // Inject Dynamic structured JSON-LD Schema (LocalBusiness & Organization Markup)
    let schemaScript = document.getElementById('seo-schema-markup') as HTMLScriptElement;
    if (!schemaScript) {
      schemaScript = document.createElement('script');
      schemaScript.id = 'seo-schema-markup';
      schemaScript.type = 'application/ld+json';
      document.head.appendChild(schemaScript);
    }

    const schemaData = {
      "@context": "https://schema.org",
      "@type": currentPage.includes('design') || currentPage.includes('build') ? "ArchitecturalOffice" : "LocalBusiness",
      "name": "Spacenine Architects",
      "alternateName": "Space Nine",
      "image": "https://vennky.sirv.com/ChatGPT%20Image%20Jul%2011%2C%202026%2C%2011_04_33%20AM.png",
      "url": cleanUrl,
      "telephone": "+91-7702317235",
      "priceRange": "$$$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Kokapet",
        "addressLocality": "Hyderabad",
        "addressRegion": "Telangana",
        "postalCode": "500075",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "17.3995",
        "longitude": "78.3283"
      },
      "description": langData.description,
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        "opens": "10:00",
        "closes": "19:00"
      },
      "sameAs": [
        "https://www.instagram.com/spaceninearchitects/"
      ]
    };

    schemaScript.text = JSON.stringify(schemaData, null, 2);
  }, [currentPage, currentLang]);

  // Hash router to handle dedicated separate pages and browser history
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      
      if (hash === 'about') {
        setCurrentPage('about');
        setActiveSection('about');
        window.scrollTo({ top: 0 });
      } else if (hash === 'portfolio') {
        setCurrentPage('portfolio');
        setActiveSection('portfolio');
        window.scrollTo({ top: 0 });
      } else if (hash === 'contact') {
        setCurrentPage('contact');
        setActiveSection('contact');
        window.scrollTo({ top: 0 });
      } else if (
        hash === 'project-1' ||
        hash === 'project-2' ||
        hash === 'project-3' ||
        hash === 'project-4'
      ) {
        setCurrentPage(hash as any);
        setActiveSection('portfolio');
        window.scrollTo({ top: 0 });
      } else if (
        hash === 'architectural-design' || 
        hash === 'interior-design' || 
        hash === 'architecture-build' || 
        hash === 'interiors-build'
      ) {
        setCurrentPage(hash as ServicePageId);
        setActiveSection('services');
        setSelectedService(hash as ServicePageId);
        window.scrollTo({ top: 0 });
      } else {
        setCurrentPage('home');
        if (hash === 'services') {
          setActiveSection('services');
          setTimeout(() => {
            const el = document.getElementById('services');
            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, 100);
        } else if (hash.startsWith('service-')) {
          const srvId = hash.replace('service-', '') as ServicePageId;
          setCurrentPage(srvId);
          setActiveSection('services');
          setSelectedService(srvId);
          window.scrollTo({ top: 0 });
        } else {
          setActiveSection('home');
          if (hash === 'home' || !hash) {
            window.scrollTo({ top: 0 });
          }
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    // Execute initially to parse current URL
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Smooth scroll and navigation helper
  const scrollToSection = (id: string) => {
    if (
      id === 'about' || 
      id === 'portfolio' || 
      id === 'contact' ||
      id === 'architectural-design' || 
      id === 'interior-design' || 
      id === 'architecture-build' || 
      id === 'interiors-build'
    ) {
      window.location.hash = id;
    } else if (id === 'home') {
      if (currentPage !== 'home') {
        window.location.hash = 'home';
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setActiveSection('home');
      }
    } else {
      // For general services
      if (currentPage !== 'home') {
        window.location.hash = 'architectural-design';
      } else {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          setActiveSection('services');
        } else {
          window.location.hash = id;
        }
      }
    }
  };

  // Populate brief with general CTA intent and scroll down
  const handleOpenGeneralConsultation = () => {
    const defaultBriefs: Record<Language, string> = {
      EN: 'Hello spacenine architects, I would like to start a luxury design concept for my space.',
      RU: 'Здравствуйте, spacenine architects! Я бы хотел начать разработку концепта премиального дизайна для моего помещения.',
      ES: 'Hola spacenine architects, me gustaría iniciar un concepto de diseño de lujo para mi espacio.'
    };
    setPrefilledBrief(defaultBriefs[currentLang]);
    window.location.hash = 'contact';
  };

  // Populate brief with estimate calculation and scroll down
  const handleOpenConsultationWithEstimate = (estimateDetails: string) => {
    setPrefilledBrief(estimateDetails);
    window.location.hash = 'contact';
  };

  // Clear brief after successful form reset
  const handleClearPrefilledBrief = () => {
    setPrefilledBrief('');
  };

  // IntersectionObserver to auto-update active nav state based on scroll coordinates (only active on home)
  useEffect(() => {
    if (currentPage !== 'home') return;

    const sections = ['home', 'services'];
    const observers = sections.map((secId) => {
      const element = document.getElementById(secId);
      if (!element) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(secId);
          }
        },
        {
          // Trigger when 40% of the section is visible inside viewport
          threshold: 0.4,
          rootMargin: '-96px 0px 0px 0px' // adjust for Header height
        }
      );

      observer.observe(element);
      return { observer, element };
    });

    return () => {
      observers.forEach((obs) => {
        if (obs) {
          obs.observer.unobserve(obs.element);
        }
      });
    };
  }, [currentPage]);

  return (
    <div className="bg-white dark:bg-zinc-950 min-h-screen font-sans selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black flex flex-col justify-between transition-colors duration-300">
      
      {/* Global Scroll Progress Bar */}
      <motion.div
        id="global-scroll-progress-bar"
        className="fixed top-0 left-0 right-0 h-[3px] bg-[#bca374] origin-left z-[9999]"
        style={{ scaleX }}
      />
      
      {/* 1. Header Navigation & Language togglers */}
      <Header
        currentLang={currentLang}
        setLang={setLang}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        selectedService={selectedService}
        setSelectedService={setSelectedService}
      />

      {/* Main Content Area with Page Transitions */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          {currentPage === 'home' && (
            <motion.div
              key="home"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {/* 2. Full-Screen Interactive Hero Screen with Day/Night light toggler */}
              <Hero
                currentLang={currentLang}
                scrollToSection={scrollToSection}
                onOpenConsultation={handleOpenGeneralConsultation}
              />

              {/* 4. Services Section: Offer lists & Interactive Cost Estimator */}
              <ServicesSection
                currentLang={currentLang}
                onOpenConsultationWithEstimate={handleOpenConsultationWithEstimate}
                selectedService={selectedService}
                setSelectedService={setSelectedService}
              />
            </motion.div>
          )}

          {currentPage === 'about' && (
            <motion.div
              key="about"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="pt-20 md:pt-24"
            >
              {/* 3. About Section: Studio Philosophy, Timelines & Team biography */}
              <AboutSection currentLang={currentLang} />
            </motion.div>
          )}

          {currentPage === 'portfolio' && (
            <motion.div
              key="portfolio"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="pt-20 md:pt-24"
            >
              {/* 5. Portfolio Section: Dynamic categories filter and technical modal spec views */}
              <PortfolioSection currentLang={currentLang} />
            </motion.div>
          )}

          {currentPage === 'contact' && (
            <motion.div
              key="contact"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="pt-20 md:pt-24"
            >
              {/* 6. Contact Section: Social chat links, Brief form & Local history tracker */}
              <ContactSection
                currentLang={currentLang}
                prefilledBrief={prefilledBrief}
                onClearPrefilledBrief={handleClearPrefilledBrief}
              />
            </motion.div>
          )}

          {(currentPage === 'architectural-design' ||
            currentPage === 'interior-design' ||
            currentPage === 'architecture-build' ||
            currentPage === 'interiors-build') && (
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <ServiceDetailPage
                currentLang={currentLang}
                serviceId={currentPage}
                onOpenConsultationWithEstimate={handleOpenConsultationWithEstimate}
                onNavigateToService={(id) => {
                  window.location.hash = id;
                }}
                onBackToHome={() => {
                  window.location.hash = 'home';
                }}
              />
            </motion.div>
          )}

          {(currentPage === 'project-1' ||
            currentPage === 'project-2' ||
            currentPage === 'project-3' ||
            currentPage === 'project-4') && (
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="pt-20 md:pt-24"
            >
              <ProjectDetailPage
                currentLang={currentLang}
                projectId={currentPage}
                onBackToPortfolio={() => {
                  window.location.hash = 'portfolio';
                }}
                onOpenConsultation={(brief) => {
                  handleOpenConsultationWithEstimate(brief);
                }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* 7. Minimalist footer with details */}
      <Footer
        currentLang={currentLang}
        scrollToSection={scrollToSection}
      />

      {/* Global floating WhatsApp Contact button */}
      <WhatsAppButton />

    </div>
  );
}

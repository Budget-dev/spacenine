import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, ChevronRight } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data';

interface AboutSectionProps {
  currentLang: Language;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ currentLang }) => {
  const t = translations.about;
  const [selectedMilestone, setSelectedMilestone] = useState(0);

  const milestones = [
    {
      year: '2022',
      title: { EN: 'Studio Founded', RU: 'Основание студии', ES: 'Fundación del Estudio' },
      desc: {
        EN: 'Founded with a focus on bespoke residential architecture, minimalist luxury design, and state-of-the-art spatial styling.',
        RU: 'Основание студии со специализацией на авторской жилой архитектуре, изысканном минималистичном дизайне и современном стайлинге.',
        ES: 'Fundado con un enfoque en arquitectura residencial a medida, diseño de lujo minimalista y estilismo espacial de vanguardia.'
      }
    },
    {
      year: '2024',
      title: { EN: 'Commercial & Luxury Expansion', RU: 'Выход в коммерческий сектор', ES: 'Expansión Comercial y de Lujo' },
      desc: {
        EN: 'Expanded our operations to high-end corporate headquarters, premium design offices, and luxury residential estates.',
        RU: 'Расширение портфолио офисами представительского класса, дизайн-студиями премиум-уровня и роскошными резиденциями.',
        ES: 'Ampliación de operaciones a sedes corporativas premium, oficinas de diseño de alta gama y fincas residenciales de lujo.'
      }
    },
    {
      year: '2025',
      title: { EN: 'Virtual Walkthroughs & Renders', RU: 'Виртуальные туры и Enscape-рендеры', ES: 'Recorridos Virtuales y Renders de Enscape' },
      desc: {
        EN: 'Launched digital interior architecture services with immersive VR walk-throughs and detailed Enscape renders.',
        RU: 'Запуск удаленного проектирования с иммерсивными виртуальными турами (VR) и детализированной Enscape-визуализацией.',
        ES: 'Lanzamiento de servicios de arquitectura digital con recorridos inmersivos de RV y renders detallados de Enscape.'
      }
    }
  ];

  return (
    <section id="about" className="py-24 bg-white text-gray-950 border-b border-gray-100 dark:bg-zinc-950 dark:text-zinc-50 dark:border-zinc-900">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* SECTION HEADER */}
        <div className="max-w-3xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <span className="text-xs font-mono tracking-widest text-zinc-400 uppercase block">
              CONCEPT STUDIO
            </span>
            <h2 className="text-3xl md:text-5xl font-sans tracking-tight font-bold">
              {t.heading[currentLang]}
            </h2>
            <div className="h-[2px] w-16 bg-black dark:bg-white" />
            <p className="text-zinc-500 dark:text-zinc-400 text-sm md:text-base font-light leading-relaxed">
              {t.subheading[currentLang]}
            </p>
          </motion.div>
        </div>

        {/* STATS COUNT GRID */}
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15
              }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 py-10 mb-20 border-y border-zinc-100 dark:border-zinc-900" 
          id="about-stats-grid"
        >
          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 30 },
              show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
            }}
            whileHover={{ y: -5 }}
            className="flex flex-col items-center text-center p-6 bg-zinc-50 dark:bg-zinc-900/45 rounded-2xl"
          >
            <span className="text-4xl md:text-5xl font-sans font-extrabold text-zinc-900 dark:text-zinc-50 mb-2">
              30+
            </span>
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">
              {t.stat1[currentLang]}
            </span>
          </motion.div>
          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 30 },
              show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
            }}
            whileHover={{ y: -5 }}
            className="flex flex-col items-center text-center p-6 bg-zinc-50 dark:bg-zinc-900/45 rounded-2xl"
          >
            <span className="text-4xl md:text-5xl font-sans font-extrabold text-zinc-900 dark:text-zinc-50 mb-2">
              4+
            </span>
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">
              {t.stat2[currentLang]}
            </span>
          </motion.div>
        </motion.div>

        {/* MAIN STUDIO STORY & INTERACTIVE TIMELINE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24 items-start">
          
          {/* Philosophy text */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-6"
          >
            <h3 className="text-2xl font-sans text-zinc-900 dark:text-zinc-100 font-bold">
              {t.storyTitle[currentLang]}
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm md:text-base leading-relaxed font-light">
              {t.storyText[currentLang]}
            </p>
            
            {/* Curated points as clean, unified paragraphs */}
            <div className="pt-4 text-zinc-600 dark:text-zinc-400 text-sm md:text-base leading-relaxed font-light space-y-4" id="philosophy-details">
              <p>
                {currentLang === 'RU' 
                  ? 'Наша архитектурная концепция определяется тонкой гармонией богатых природных текстур и точно выверенной световой геометрии. В работе мы отдаем предпочтение исключительно натуральным премиальным материалам — селективному дубу, изысканному мрамору Calacatta и полированной вручную латуни.'
                  : currentLang === 'ES'
                  ? 'Nuestra filosofía se define por una integración armoniosa de ricas texturas naturales y geometría de iluminación avanzada. Priorizamos maderas de roble premium, mármoles Calacatta seleccionados y herrajes de latón macizo encerado a mano.'
                  : 'Our architecture is defined by the seamless integration of rich natural textures and mathematically calculated lighting geometry. We prioritize premium natural materials—such as select oak woodwork, Calacatta marble slabs, and custom hand-waxed solid brass.'
                }
              </p>
              <p>
                {currentLang === 'RU'
                  ? 'Каждая деталь интерьера располагается под идеально рассчитанными углами освещения и скрытыми профилями, что позволяет подчеркнуть глубину текстур, создавая неповторимую атмосферу тепла и уюта во всем пространстве.'
                  : currentLang === 'ES'
                  ? 'Cada elemento se sitúa bajo ángulos de luz perfectamente calculados y perfiles ocultos, realzando la profundidad de los materiales y aportando una calidez sensorial única a cada habitación.'
                  : 'Every architectural element is bathed in mathematically calculated light angles and hidden profiles, elevating material depth and bringing sophisticated sensory warmth to every space.'
                }
              </p>
            </div>
          </motion.div>

          {/* Interactive Timeline Journey */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="lg:col-span-7 bg-zinc-50 dark:bg-zinc-900/30 p-8 rounded-3xl border border-zinc-100 dark:border-zinc-900"
          >
            <h3 className="text-xl font-sans font-bold text-zinc-900 dark:text-zinc-100 mb-6 flex items-center space-x-2">
              <Calendar className="w-5 h-5 text-zinc-900 dark:text-zinc-50" />
              <span>{t.timelineTitle[currentLang]}</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              
              {/* Year list selector */}
              <div className="md:col-span-4 flex flex-row md:flex-col space-x-2 md:space-x-0 md:space-y-2 overflow-x-auto pb-3 md:pb-0" id="timeline-years">
                {milestones.map((milestone, idx) => (
                  <button
                    key={milestone.year}
                    onClick={() => setSelectedMilestone(idx)}
                    className={`px-4 py-3 text-left font-mono text-sm tracking-wider rounded-xl transition-all flex items-center justify-between min-w-[90px] md:min-w-0 ${
                      selectedMilestone === idx
                        ? 'bg-zinc-950 text-white dark:bg-zinc-100 dark:text-zinc-950 font-semibold shadow-md'
                        : 'bg-white hover:bg-zinc-100 text-zinc-400 border border-zinc-100 dark:bg-zinc-900 dark:hover:bg-zinc-800 dark:text-zinc-400 dark:border-zinc-800'
                    }`}
                  >
                    <span>{milestone.year}</span>
                    <ChevronRight className={`w-4 h-4 hidden md:block transition-transform ${selectedMilestone === idx ? 'translate-x-1' : 'opacity-0'}`} />
                  </button>
                ))}
              </div>

              {/* Milestone Details Container */}
              <div className="md:col-span-8 bg-white dark:bg-zinc-900 p-6 rounded-2xl min-h-[160px] flex flex-col justify-between border border-zinc-100 dark:border-zinc-800">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedMilestone}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-3"
                  >
                    <span className="text-xs font-mono font-bold text-zinc-900 dark:text-zinc-50 tracking-widest uppercase">
                      YEAR {milestones[selectedMilestone].year}
                    </span>
                    <h4 className="text-lg font-sans font-bold text-zinc-900 dark:text-zinc-50">
                      {milestones[selectedMilestone].title[currentLang]}
                    </h4>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 font-light leading-relaxed">
                      {milestones[selectedMilestone].desc[currentLang]}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

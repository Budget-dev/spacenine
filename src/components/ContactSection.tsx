import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageSquare, CheckCircle, Clock, Trash2, ShieldCheck, Instagram } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data';

interface ContactSectionProps {
  currentLang: Language;
  prefilledBrief: string;
  onClearPrefilledBrief: () => void;
}

interface SavedInquiry {
  id: string;
  name: string;
  phone: string;
  email: string;
  message: string;
  timestamp: string;
  status: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  currentLang,
  prefilledBrief,
  onClearPrefilledBrief,
}) => {
  const t = translations.contact;

  // Form Fields
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Validation & States
  const [errors, setErrors] = useState<{ name?: string; contact?: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [savedInquiries, setSavedInquiries] = useState<SavedInquiry[]>([]);

  // Load Saved Inquiries on Mount
  useEffect(() => {
    const localData = localStorage.getItem('spacenine_inquiries');
    if (localData) {
      try {
        setSavedInquiries(JSON.parse(localData));
      } catch (err) {
        console.error('Failed to parse inquiries', err);
      }
    }
  }, []);

  // Update Message field if estimator sets it
  useEffect(() => {
    if (prefilledBrief) {
      setMessage(prefilledBrief);
      // Smooth scroll to the contact form so they see it prepopulated
      const contactEl = document.getElementById('contact-form-container');
      if (contactEl) {
        contactEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  }, [prefilledBrief]);

  const validateForm = () => {
    const tempErrors: { name?: string; contact?: string } = {};
    if (!name.trim()) {
      tempErrors.name = currentLang === 'RU' ? 'Пожалуйста, введите ваше имя' : currentLang === 'ES' ? 'Por favor, ingrese su nombre' : 'Name is required';
    }
    if (!phone.trim() && !email.trim()) {
      tempErrors.contact = currentLang === 'RU' ? 'Введите телефон или электронную почту' : currentLang === 'ES' ? 'Ingrese teléfono o correo electrónico' : 'Phone or Email is required';
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Mock network lag
    setTimeout(() => {
      const newInquiry: SavedInquiry = {
        id: `inq-${Date.now()}`,
        name,
        phone,
        email,
        message,
        timestamp: new Date().toLocaleString(),
        status: currentLang === 'RU' ? 'Архитектор назначен' : currentLang === 'ES' ? 'Arquitecto asignado' : 'Architect Assigned'
      };

      const updated = [newInquiry, ...savedInquiries];
      localStorage.setItem('spacenine_inquiries', JSON.stringify(updated));
      setSavedInquiries(updated);

      setIsSubmitting(false);
      setIsSuccess(true);
      onClearPrefilledBrief();

      // Reset form
      setName('');
      setPhone('');
      setEmail('');
      setMessage('');
    }, 1200);
  };

  const handleDeleteInquiry = (id: string) => {
    const filtered = savedInquiries.filter((item) => item.id !== id);
    localStorage.setItem('spacenine_inquiries', JSON.stringify(filtered));
    setSavedInquiries(filtered);
  };

  return (
    <section id="contact" className="py-24 bg-gray-50 text-gray-900">
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
            <span className="text-xs font-mono tracking-widest text-black uppercase block">
              BOOK A CONSULTATION
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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT COLUMN: STUDIO DETAILS & SOCIALS (Col span 5) */}
          <motion.div 
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-8"
          >
            
            {/* Quick Messengers buttons */}
            <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm space-y-4">
              <h3 className="text-sm font-mono tracking-wider text-gray-400 uppercase font-semibold">
                {t.quickLinks[currentLang]}
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3" id="contact-messengers">
                <a
                  href="https://t.me/spacenine"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 bg-sky-50 hover:bg-sky-100 rounded-2xl flex items-center space-x-3 transition-colors text-sky-700"
                >
                  <div className="p-2 bg-sky-500 rounded-xl text-white">
                    <Send className="w-4 h-4 transform rotate-[-25deg] translate-y-[-1px]" />
                  </div>
                  <div>
                    <span className="text-xs font-bold font-mono tracking-wider block">TELEGRAM</span>
                    <span className="text-[10px] text-sky-600/70 block">@spacenine</span>
                  </div>
                </a>

                <a
                  href="https://wa.me/919952120021"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 bg-gray-100 hover:bg-gray-200 rounded-2xl flex items-center space-x-3 transition-colors text-black"
                >
                  <div className="p-2 bg-black rounded-xl text-white">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold font-mono tracking-wider block">WHATSAPP</span>
                    <span className="text-[10px] text-gray-500 block">+91 99521 20021</span>
                  </div>
                </a>

                <a
                  href="https://www.instagram.com/spaceninearchitects?utm_source=qr"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 bg-pink-50 hover:bg-pink-100 rounded-2xl flex items-center space-x-3 transition-colors text-pink-700"
                >
                  <div className="p-2 bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-600 rounded-xl text-white">
                    <Instagram className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold font-mono tracking-wider block">INSTAGRAM</span>
                    <span className="text-[10px] text-pink-600 block">@spaceninearchitects</span>
                  </div>
                </a>
              </div>
            </div>

            {/* Direct Studio details list */}
            <div className="space-y-6" id="contact-info-list">
              
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-white border border-gray-100 rounded-2xl text-black shadow-sm">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase text-gray-400 block tracking-widest font-semibold">
                    {t.addressLabel[currentLang]}
                  </span>
                  <p className="text-sm text-gray-800 font-light mt-1">
                    {t.address[currentLang]}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-white border border-gray-100 rounded-2xl text-black shadow-sm">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase text-gray-400 block tracking-widest font-semibold">
                    {currentLang === 'RU' ? 'Номер телефона' : currentLang === 'ES' ? 'Teléfono Directo' : 'Direct Line'}
                  </span>
                  <a href={`tel:${t.phone[currentLang]}`} className="text-sm text-gray-800 hover:text-black hover:underline font-light mt-1 block">
                    {t.phone[currentLang]}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-white border border-gray-100 rounded-2xl text-black shadow-sm">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase text-gray-400 block tracking-widest font-semibold">
                    {currentLang === 'RU' ? 'Электронная почта' : currentLang === 'ES' ? 'Email de la Oficina' : 'Office Email'}
                  </span>
                  <a href={`mailto:${t.email[currentLang]}`} className="text-sm text-gray-800 hover:text-black hover:underline font-light mt-1 block">
                    {t.email[currentLang]}
                  </a>
                </div>
              </div>

            </div>

            {/* Guarantees Badge */}
            <div className="p-5 bg-white border border-gray-100 rounded-3xl flex items-start space-x-3 shadow-sm">
              <ShieldCheck className="w-5 h-5 text-black shrink-0 mt-0.5" />
              <div className="text-xs text-gray-500 font-light leading-relaxed">
                <span className="font-bold text-gray-900 block mb-0.5">
                  {currentLang === 'RU' ? 'Безопасность и NDA' : currentLang === 'ES' ? 'Confidencialidad Garantizada' : 'Strict Privacy Guaranteed'}
                </span>
                {currentLang === 'RU' ? 'Мы защищаем личную информацию клиентов и подписываем NDA перед разработкой проекта.' : currentLang === 'ES' ? 'Protegemos la información privada del cliente y firmamos acuerdos de confidencialidad antes de iniciar.' : 'We protect client privacy with absolute discretion. All layouts and render specifications are fully secured under NDA.'}
              </div>
            </div>

          </motion.div>

          {/* RIGHT COLUMN: CONSULTATION FORM & SUCCESS CARD (Col span 7) */}
          <motion.div 
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="lg:col-span-7" 
            id="contact-form-container"
          >
            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.form
                  key="contact-form"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  onSubmit={handleSubmit}
                  className="bg-white border border-gray-100 rounded-3xl p-8 shadow-xl space-y-6"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Input 1: Name */}
                    <div className="space-y-2">
                      <label className="text-xs font-mono uppercase text-gray-400 block tracking-wider font-semibold">
                        {t.formName[currentLang]} *
                      </label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. John Doe"
                        className={`w-full p-3.5 bg-gray-50 border rounded-xl text-sm transition-all focus:bg-white focus:ring-2 focus:ring-black/10 focus:outline-none ${
                          errors.name ? 'border-red-500 focus:border-red-500' : 'border-gray-100 focus:border-black'
                        }`}
                        id="form-input-name"
                      />
                      {errors.name && <p className="text-[10px] text-red-500 font-mono">{errors.name}</p>}
                    </div>

                    {/* Input 2: Phone */}
                    <div className="space-y-2">
                      <label className="text-xs font-mono uppercase text-gray-400 block tracking-wider font-semibold">
                        {t.formPhone[currentLang]}
                      </label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+1 (555) 000-0000"
                        className={`w-full p-3.5 bg-gray-50 border border-gray-100 rounded-xl text-sm transition-all focus:bg-white focus:border-black focus:ring-2 focus:ring-black/10 focus:outline-none`}
                        id="form-input-phone"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-6">
                    {/* Input 3: Email */}
                    <div className="space-y-2">
                      <label className="text-xs font-mono uppercase text-gray-400 block tracking-wider font-semibold">
                        {t.formEmail[currentLang]}
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="john@example.com"
                        className="w-full p-3.5 bg-gray-50 border border-gray-100 rounded-xl text-sm transition-all focus:bg-white focus:border-black focus:ring-2 focus:ring-black/10 focus:outline-none"
                        id="form-input-email"
                      />
                      {errors.contact && <p className="text-[10px] text-red-500 font-mono">{errors.contact}</p>}
                    </div>

                    {/* Input 4: Message */}
                    <div className="space-y-2">
                      <label className="text-xs font-mono uppercase text-gray-400 block tracking-wider font-semibold">
                        {t.formMsg[currentLang]}
                      </label>
                      <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        rows={4}
                        placeholder={currentLang === 'RU' ? 'Поделитесь деталями вашего помещения...' : currentLang === 'ES' ? 'Comparta detalles de su espacio...' : 'Share information about your apartment, desired budget, style preferences...'}
                        className="w-full p-3.5 bg-gray-50 border border-gray-100 rounded-xl text-sm transition-all focus:bg-white focus:border-black focus:ring-2 focus:ring-black/10 focus:outline-none resize-none"
                        id="form-input-message"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-black hover:bg-gray-800 text-white rounded-xl text-xs uppercase font-mono tracking-widest font-bold transition-all shadow-lg flex items-center justify-center space-x-2 disabled:bg-gray-400"
                    id="form-submit-btn"
                  >
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <span>{t.formSubmit[currentLang]}</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success-card"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="bg-white border border-gray-100 rounded-3xl p-8 shadow-xl text-center space-y-6"
                  id="form-success-card"
                >
                  <div className="mx-auto w-16 h-16 bg-black/10 text-black rounded-full flex items-center justify-center">
                    <CheckCircle className="w-8 h-8" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-xl font-serif font-bold text-gray-900">
                      {currentLang === 'RU' ? 'Заявка успешно принята' : currentLang === 'ES' ? 'Solicitud Recibida' : 'Inquiry Successfully Sent'}
                    </h3>
                    <p className="text-sm text-gray-500 font-light leading-relaxed max-w-md mx-auto">
                      {t.formSuccess[currentLang]}
                    </p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-xl text-left border border-gray-100 max-w-md mx-auto space-y-2 text-xs font-mono text-gray-600">
                    <span className="font-bold text-gray-900 uppercase text-[10px] block tracking-wider pb-1.5 border-b border-gray-200">
                      DIGITAL RECEIPT
                    </span>
                    <div className="flex justify-between">
                      <span>TIME:</span>
                      <span className="text-gray-900">{new Date().toLocaleTimeString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>ESTIMATE ASSIGNED:</span>
                      <span className="text-black font-bold">YES</span>
                    </div>
                    <div className="flex justify-between">
                      <span>INITIAL NDA SIGN:</span>
                      <span className="text-gray-900">PENDING CONTACT</span>
                    </div>
                  </div>

                  <button
                    onClick={() => setIsSuccess(false)}
                    className="py-3 px-6 bg-black hover:bg-gray-800 text-white rounded-xl text-xs uppercase font-mono tracking-widest font-bold transition-all shadow-md"
                    id="reset-success-btn"
                  >
                    {currentLang === 'RU' ? 'Отправить еще запрос' : currentLang === 'ES' ? 'Enviar otra solicitud' : 'Submit Another Inquiry'}
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

        </div>

        {/* INQUIRY AUDIT TRACKER (LOCAL STORAGE HISTORY) */}
        {savedInquiries.length > 0 && (
          <div className="mt-20 pt-12 border-t border-gray-200" id="inquiry-history-block">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-2.5">
                <Clock className="w-5 h-5 text-black" />
                <h3 className="text-base font-serif font-bold text-gray-900">
                  {currentLang === 'RU' ? 'История ваших запросов' : currentLang === 'ES' ? 'Historial de Consultas' : 'Your Consultation Requests'}
                </h3>
              </div>
              <span className="text-[10px] font-mono text-gray-400">
                {savedInquiries.length} {currentLang === 'RU' ? 'ЗАПРОС(ОВ)' : 'RECORD(S)'}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6" id="saved-inquiries-grid">
              {savedInquiries.map((inq) => (
                <div
                  key={inq.id}
                  className="bg-white p-6 rounded-2xl border border-gray-100 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow relative group"
                  id={`inquiry-card-${inq.id}`}
                >
                  <div className="space-y-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <span className="text-xs font-bold font-serif text-gray-900">{inq.name}</span>
                        <span className="text-[10px] text-gray-400 block font-mono mt-0.5">{inq.timestamp}</span>
                      </div>
                      <span className="px-2.5 py-1 bg-black/10 text-black rounded-full font-mono text-[9px] font-bold uppercase tracking-wider">
                        {inq.status}
                      </span>
                    </div>

                    <div className="space-y-1.5 text-xs text-gray-500">
                      {inq.phone && (
                        <div className="flex items-center space-x-1.5">
                          <Phone className="w-3.5 h-3.5 text-gray-400" />
                          <span>{inq.phone}</span>
                        </div>
                      )}
                      {inq.email && (
                        <div className="flex items-center space-x-1.5">
                          <Mail className="w-3.5 h-3.5 text-gray-400" />
                          <span>{inq.email}</span>
                        </div>
                      )}
                    </div>

                    {inq.message && (
                      <div className="p-3 bg-gray-50 rounded-xl text-xs text-gray-600 font-light italic border border-gray-100 line-clamp-3">
                        "{inq.message}"
                      </div>
                    )}
                  </div>

                  <button
                    onClick={() => handleDeleteInquiry(inq.id)}
                    className="absolute bottom-6 right-6 p-2 bg-red-50 hover:bg-red-100 text-red-500 hover:text-red-700 rounded-xl transition-colors opacity-0 group-hover:opacity-100"
                    title="Delete Request Record"
                    id={`delete-inquiry-${inq.id}`}
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

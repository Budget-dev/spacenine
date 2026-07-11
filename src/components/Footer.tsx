import * as React from 'react';
import { Facebook, Instagram, Linkedin, Moon, Send, Sun, Twitter, Check } from 'lucide-react';
import { Language } from '../types';
import { translations, navItems } from '../data';

interface FooterProps {
  currentLang: Language;
  scrollToSection: (id: string) => void;
}

// 1. Self-contained UI Components to ensure zero build errors & strict visual alignment
const Button = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: 'default' | 'outline' | 'ghost';
    size?: 'default' | 'icon';
  }
>(({ className = '', variant = 'default', size = 'default', ...props }, ref) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-lg text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:pointer-events-none disabled:opacity-50 cursor-pointer';
  
  const variants = {
    default: 'bg-zinc-900 text-zinc-50 shadow hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-950 dark:hover:bg-zinc-200',
    outline: 'border border-zinc-200 bg-white hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:bg-zinc-800 dark:hover:text-zinc-50',
    ghost: 'hover:bg-zinc-100 hover:text-zinc-900 dark:hover:bg-zinc-800 dark:hover:text-zinc-50'
  };

  const sizes = {
    default: 'h-10 px-4 py-2',
    icon: 'h-10 w-10 p-0 rounded-full'
  };

  const finalClass = `${baseStyles} ${variants[variant] || ''} ${sizes[size]} ${className}`;

  return <button ref={ref} className={finalClass} {...props} />;
});
Button.displayName = 'Button';

const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className = '', type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={`flex h-10 w-full rounded-lg border border-zinc-200 bg-white/50 backdrop-blur-sm px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-zinc-400 focus:outline-none focus:ring-1 focus:ring-zinc-900 focus:border-zinc-900 disabled:cursor-not-allowed disabled:opacity-50 dark:border-zinc-800 dark:bg-zinc-950/50 dark:placeholder:text-zinc-500 dark:focus:ring-zinc-300 dark:focus:border-zinc-300 ${className}`}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = 'Input';

const Label = React.forwardRef<
  HTMLLabelElement,
  React.LabelHTMLAttributes<HTMLLabelElement>
>(({ className = '', ...props }, ref) => {
  return (
    <label
      ref={ref}
      className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${className}`}
      {...props}
    />
  );
});
Label.displayName = 'Label';

interface SwitchProps {
  id?: string;
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
}
const Switch: React.FC<SwitchProps> = ({ id, checked = false, onCheckedChange }) => {
  return (
    <button
      type="button"
      id={id}
      role="switch"
      aria-checked={checked}
      onClick={() => onCheckedChange?.(!checked)}
      className={`peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 dark:focus-visible:ring-zinc-300 ${
        checked 
          ? 'bg-zinc-900 dark:bg-zinc-50' 
          : 'bg-zinc-200 dark:bg-zinc-800'
      }`}
    >
      <span
        className={`pointer-events-none block h-4 w-4 rounded-full bg-white dark:bg-zinc-900 shadow-sm ring-0 transition-transform ${
          checked ? 'translate-x-4' : 'translate-x-0'
        }`}
      />
    </button>
  );
};

// 2. Self-contained Tooltip components mapping exactly to requested API
const TooltipProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <>{children}</>;
};

const TooltipContent: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-50 overflow-hidden rounded-md bg-zinc-900 px-3 py-1.5 text-xs text-zinc-50 dark:bg-zinc-50 dark:text-zinc-900 shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
      {children}
    </div>
  );
};

const TooltipTrigger: React.FC<{ asChild?: boolean; children: React.ReactNode }> = ({ children }) => {
  return <>{children}</>;
};

const Tooltip: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="relative inline-block group">
      {children}
    </div>
  );
};

// 3. Multi-language dictionary for the requested Footer layout
const footerTranslations = {
  stayConnected: {
    EN: 'Stay Connected',
    RU: 'Будьте на связи',
    ES: 'Mantente Conectado'
  },
  newsletterDesc: {
    EN: 'Join our newsletter for the latest updates and exclusive offers.',
    RU: 'Подпишитесь на рассылку, чтобы получать новости и специальные предложения.',
    ES: 'Únete a nuestro boletín para recibir noticias y ofertas exclusivas.'
  },
  enterEmail: {
    EN: 'Enter your email',
    RU: 'Введите ваш email',
    ES: 'Introduce tu email'
  },
  subscribe: {
    EN: 'Subscribe',
    RU: 'Подписаться',
    ES: 'Suscribirse'
  },
  quickLinks: {
    EN: 'Quick Links',
    RU: 'Быстрые ссылки',
    ES: 'Enlaces Rápidos'
  },
  contactUs: {
    EN: 'Contact Us',
    RU: 'Контакты',
    ES: 'Contáctenos'
  },
  followUs: {
    EN: 'Follow Us',
    RU: 'Мы в соцсетях',
    ES: 'Síguenos'
  },
  followFB: {
    EN: 'Follow us on Facebook',
    RU: 'Мы в Facebook',
    ES: 'Síguenos en Facebook'
  },
  followTW: {
    EN: 'Follow us on Twitter',
    RU: 'Мы в Twitter',
    ES: 'Síguenos en Twitter'
  },
  followIG: {
    EN: 'Follow us on Instagram',
    RU: 'Мы в Instagram',
    ES: 'Síguenos en Instagram'
  },
  followLN: {
    EN: 'Connect on LinkedIn',
    RU: 'Мы в LinkedIn',
    ES: 'Síguenos en LinkedIn'
  },
  privacy: {
    EN: 'Privacy Policy',
    RU: 'Политика конфиденциальности',
    ES: 'Política de Privacidad'
  },
  terms: {
    EN: 'Terms of Service',
    RU: 'Условия использования',
    ES: 'Términos de Servicio'
  },
  cookies: {
    EN: 'Cookie Settings',
    RU: 'Файлы cookie',
    ES: 'Ajustes de Cookies'
  },
  successSub: {
    EN: 'Thank you for subscribing!',
    RU: 'Спасибо за подписку!',
    ES: '¡Gracias por suscribirte!'
  }
};

export const Footer: React.FC<FooterProps> = ({ currentLang, scrollToSection }) => {
  const [isDarkMode, setIsDarkMode] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const [isSubscribed, setIsSubscribed] = React.useState(false);

  // Initialize and synchronize dark mode state with HTML root element
  React.useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubscribed(true);
    setEmail('');
    setTimeout(() => {
      setIsSubscribed(false);
    }, 5000);
  };

  const ft = footerTranslations;

  return (
    <footer className="relative border-t border-zinc-200/60 dark:border-zinc-800/60 bg-[#fafafa] dark:bg-[#080808] text-zinc-800 dark:text-zinc-300 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          
          {/* 1. Newsletter Column */}
          <div className="relative">
            <h2 className="mb-4 text-xl font-serif tracking-tight font-medium text-zinc-900 dark:text-white">
              {ft.stayConnected[currentLang]}
            </h2>
            <p className="mb-6 text-sm text-zinc-500 dark:text-zinc-400 font-light leading-relaxed">
              {ft.newsletterDesc[currentLang]}
            </p>
            {isSubscribed ? (
              <div className="flex items-center space-x-2 text-emerald-700 dark:text-emerald-400 text-sm py-2 px-3 bg-emerald-50 dark:bg-emerald-950/30 rounded-lg">
                <Check className="w-4 h-4" />
                <span>{ft.successSub[currentLang]}</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="relative z-10">
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={ft.enterEmail[currentLang]}
                  className="pr-12 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 border-zinc-200 dark:border-zinc-800 placeholder:text-zinc-400 focus:ring-zinc-800 dark:focus:ring-zinc-300 focus:border-zinc-800 dark:focus:border-zinc-300"
                  required
                />
                <Button
                  type="submit"
                  size="icon"
                  className="absolute right-1 top-1 h-8 w-8 rounded-full bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 hover:scale-105 hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-transform z-20 cursor-pointer"
                >
                  <Send className="h-4 w-4" />
                  <span className="sr-only">{ft.subscribe[currentLang]}</span>
                </Button>
              </form>
            )}
            <div className="absolute -right-4 top-0 h-24 w-24 rounded-full bg-zinc-200/30 dark:bg-zinc-800/10 blur-2xl pointer-events-none" />
          </div>

          {/* 2. Quick Links Column */}
          <div>
            <h3 className="mb-4 text-xs font-semibold tracking-wider font-mono text-zinc-400 dark:text-zinc-500 uppercase">
              {ft.quickLinks[currentLang]}
            </h3>
            <nav aria-label="Footer quick links" className="space-y-3 text-sm">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollToSection(item.id)}
                  className="block text-left w-full text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors font-medium cursor-pointer"
                >
                  {item.label[currentLang]}
                </button>
              ))}
            </nav>
          </div>

          {/* 3. Contact Us Column */}
          <div>
            <h3 className="mb-4 text-xs font-semibold tracking-wider font-mono text-zinc-400 dark:text-zinc-500 uppercase">
              {ft.contactUs[currentLang]}
            </h3>
            <address className="space-y-3 text-sm not-italic text-zinc-500 dark:text-zinc-400 font-light leading-relaxed">
              <p className="font-serif text-zinc-600 dark:text-zinc-300">{translations.contact.address[currentLang]}</p>
              <p className="font-mono text-zinc-900 dark:text-zinc-100 font-medium">
                {translations.contact.phone[currentLang]}
              </p>
              <p className="font-mono text-zinc-500 dark:text-zinc-400">
                {translations.contact.email[currentLang]}
              </p>
            </address>
          </div>

          {/* 4. Follow Us & Theme Toggle Column */}
          <div className="relative">
            <h3 className="mb-4 text-xs font-semibold tracking-wider font-mono text-zinc-400 dark:text-zinc-500 uppercase">
              {ft.followUs[currentLang]}
            </h3>
            <div className="mb-6 flex space-x-3">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center h-10 w-10 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 hover:bg-zinc-50 dark:hover:bg-zinc-900 hover:text-zinc-900 dark:hover:text-white hover:border-zinc-300 dark:hover:border-zinc-700 transition-all text-zinc-400 dark:text-zinc-500 cursor-pointer"
                    >
                      <Facebook className="h-4.5 w-4.5" />
                      <span className="sr-only">Facebook</span>
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{ft.followFB[currentLang]}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center h-10 w-10 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 hover:bg-zinc-50 dark:hover:bg-zinc-900 hover:text-zinc-900 dark:hover:text-white hover:border-zinc-300 dark:hover:border-zinc-700 transition-all text-zinc-400 dark:text-zinc-500 cursor-pointer"
                    >
                      <Twitter className="h-4.5 w-4.5" />
                      <span className="sr-only">Twitter</span>
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{ft.followTW[currentLang]}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <a
                      href="https://www.instagram.com/spaceninearchitects?utm_source=qr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center h-10 w-10 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 hover:bg-zinc-50 dark:hover:bg-zinc-900 hover:text-zinc-900 dark:hover:text-white hover:border-zinc-300 dark:hover:border-zinc-700 transition-all text-zinc-400 dark:text-zinc-500 cursor-pointer"
                    >
                      <Instagram className="h-4.5 w-4.5" />
                      <span className="sr-only">Instagram</span>
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{ft.followIG[currentLang]}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center h-10 w-10 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 hover:bg-zinc-50 dark:hover:bg-zinc-900 hover:text-zinc-900 dark:hover:text-white hover:border-zinc-300 dark:hover:border-zinc-700 transition-all text-zinc-400 dark:text-zinc-500 cursor-pointer"
                    >
                      <Linkedin className="h-4.5 w-4.5" />
                      <span className="sr-only">LinkedIn</span>
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{ft.followLN[currentLang]}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            
            {/* Theme Switcher Toggle */}
            <div className="flex items-center space-x-2 bg-zinc-100 dark:bg-zinc-900/60 p-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800/80 w-fit">
              <Sun className={`h-4 w-4 transition-colors ${!isDarkMode ? 'text-amber-500' : 'text-zinc-400'}`} />
              <Switch
                id="dark-mode"
                checked={isDarkMode}
                onCheckedChange={setIsDarkMode}
              />
              <Moon className={`h-4 w-4 transition-colors ${isDarkMode ? 'text-indigo-400' : 'text-zinc-400'}`} />
              <Label htmlFor="dark-mode" className="sr-only">
                Toggle dark mode
              </Label>
            </div>
          </div>

        </div>

        {/* Footer Fine Print bottom segment */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-zinc-200/60 dark:border-zinc-800/60 pt-8 text-center md:flex-row">
          <p className="text-xs text-zinc-400 dark:text-zinc-500 font-light">
            &copy; {new Date().getFullYear()} spacenine architects. {translations.footer.rights[currentLang]}
          </p>
          <nav aria-label="Footer legal links" className="flex gap-6 text-xs text-zinc-400 dark:text-zinc-500">
            <a href="#privacy" className="transition-colors hover:text-zinc-900 dark:hover:text-white">
              {ft.privacy[currentLang]}
            </a>
            <a href="#terms" className="transition-colors hover:text-zinc-900 dark:hover:text-white">
              {ft.terms[currentLang]}
            </a>
            <a href="#cookies" className="transition-colors hover:text-zinc-900 dark:hover:text-white">
              {ft.cookies[currentLang]}
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

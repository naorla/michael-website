import { useState } from "react";
import { useLanguage } from "../LanguageContext";

export function Navbar() {
  const { lang, setLang, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "#services", label: t('navServices') },
    { href: "#approach", label: t('apprSubtitle') },
    { href: "#why", label: t('whySubtitle') },
    { href: "#experience", label: t('navExperience') },
    { href: "#testimonials", label: t('navTestimonials') },
    { href: "#gallery", label: t('navGallery') },
    { href: "#about", label: t('navAbout') },
    { href: "#contact", label: t('navContact') },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-[#FAF5EB]/95 backdrop-blur-md border-b border-[#E2D5C0] shadow-xs">
      <div className="max-w-7xl mx-auto px-2.5 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-1.5 sm:gap-4">
        
        {/* לוגו ושם העסק - קומפקטי במובייל כדי למנוע דחיפה של השפות */}
        <a href="#top" className="flex items-center gap-1.5 sm:gap-3 group shrink min-w-0">
          <img
            src="/logo.jpg"
            alt="מיכאל לפושניאנסקי לוגו"
            className="w-8 h-8 sm:w-12 sm:h-12 rounded-full object-cover border border-emerald-600 shadow-2xs shrink-0"
          />
          <div className="flex flex-col min-w-0">
            {/* שם העסק הוקטן במובייל לגודל מדויק של 13px */}
            <span className="font-serif text-[13px] sm:text-base lg:text-xl font-black text-[#1a2e1d] leading-tight truncate group-hover:text-emerald-800 transition-colors">
              {t('brandName')}
            </span>
            
            <div className="flex items-center gap-1 sm:gap-1.5 mt-0.5 text-[10px] sm:text-xs font-semibold text-[#4a554c] whitespace-nowrap">
              <a
                href="tel:0522552487"
                className="inline-flex items-center gap-0.5 font-black text-emerald-700 hover:text-emerald-900 transition-colors text-[10px] sm:text-sm dir-ltr"
                dir="ltr"
              >
                <span>📞</span>
                <span>{t('phoneDisplay')}</span>
              </a>
              <span className="opacity-40 hidden sm:inline">|</span>
              <span className="hidden sm:inline truncate">{t('brandSubtitle')}</span>
            </div>
          </div>
        </a>

        {/* קישורי הניווט - מוצגים רק במסכים רחבים (מחשב) */}
        <nav className="hidden lg:flex items-center justify-center gap-2 xl:gap-3.5 2xl:gap-5 px-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs xl:text-sm font-extrabold text-emerald-700 hover:text-emerald-900 hover:underline underline-offset-4 transition-all duration-200 whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* בורר שפות + כפתור מובייל - תמיד נעול ב-shrink-0 כך שלא ייחתך */}
        <div className="flex items-center gap-1 sm:gap-2 shrink-0">
          
          <div className="flex items-center bg-white/95 p-0.5 sm:p-1 rounded-full border border-[#E2D5C0] shadow-2xs gap-0.5 sm:gap-1">
            <button
              onClick={() => setLang('he')}
              className={`flex items-center gap-1 px-1.5 py-0.5 sm:px-2.5 sm:py-1 text-[11px] sm:text-xs font-bold rounded-full transition-all whitespace-nowrap ${
                lang === 'he' ? 'bg-emerald-600 text-white shadow-xs' : 'text-[#4a554c] hover:text-[#1a2e1d]'
              }`}
            >
              <img src="https://flagcdn.com/w20/il.png" alt="עברית" className="w-3.5 h-2.5 rounded-2xs object-cover" />
              <span>עב</span>
            </button>

            <button
              onClick={() => setLang('en')}
              className={`flex items-center gap-1 px-1.5 py-0.5 sm:px-2.5 sm:py-1 text-[11px] sm:text-xs font-bold rounded-full transition-all whitespace-nowrap ${
                lang === 'en' ? 'bg-emerald-600 text-white shadow-xs' : 'text-[#4a554c] hover:text-[#1a2e1d]'
              }`}
            >
              <img src="https://flagcdn.com/w20/us.png" alt="English" className="w-3.5 h-2.5 rounded-2xs object-cover" />
              <span>EN</span>
            </button>

            <button
              onClick={() => setLang('ru')}
              className={`flex items-center gap-1 px-1.5 py-0.5 sm:px-2.5 sm:py-1 text-[11px] sm:text-xs font-bold rounded-full transition-all whitespace-nowrap ${
                lang === 'ru' ? 'bg-emerald-600 text-white shadow-xs' : 'text-[#4a554c] hover:text-[#1a2e1d]'
              }`}
            >
              <img src="https://flagcdn.com/w20/ru.png" alt="Русский" className="w-3.5 h-2.5 rounded-2xs object-cover" />
              <span>RU</span>
            </button>
          </div>

          {/* כפתור מובייל (המבורגר) - מופיע בטלפונים ובטאבלטים */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1.5 rounded-lg text-[#1a2e1d] bg-white/80 border border-[#E2D5C0] hover:bg-black/5 transition-colors"
            aria-label="תפריט ניווט"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

      </div>

      {/* תפריט מובייל נפתח */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF5EB] border-b border-[#E2D5C0] px-6 py-4 space-y-2.5 shadow-xl max-h-[calc(100vh-5rem)] overflow-y-auto">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-bold text-emerald-700 hover:text-emerald-900 border-b border-[#E2D5C0]/40 text-center"
            >
              {link.label}
            </a>
          ))}

          <div className="pt-2 flex justify-center items-center">
            <a
              href="tel:0522552487"
              className="inline-flex items-center gap-1.5 font-extrabold text-emerald-700 text-sm"
              dir="ltr"
            >
              <span>📞</span>
              <span>{t('phoneDisplay')}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
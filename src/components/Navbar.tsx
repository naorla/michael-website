import { useState } from "react";
import { useLanguage } from "../LanguageContext";

export function Navbar() {
  const { lang, setLang, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "#services", label: t('navServices') },
    { href: "#approach", label: t('apprSubtitle') || "שיטה" },
    { href: "#why", label: t('whySubtitle') || "למה אנחנו" },
    { href: "#experience", label: t('navExperience') },
    { href: "#testimonials", label: t('navTestimonials') },
    { href: "#gallery", label: t('navGallery') },
    { href: "#about", label: t('navAbout') },
    { href: "#contact", label: t('navContact') },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-[#FAF5EB]/95 backdrop-blur-md border-b border-[#E2D5C0] shadow-sm">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-3 lg:gap-6">
        
        {/* לוגו, שם המותג המוגדל ומספר הטלפון */}
        <a href="#top" className="flex items-center gap-2.5 sm:gap-3.5 group shrink-0">
          <img
            src="/logo.jpg"
            alt="מיכאל לפושניאנסקי לוגו"
            className="w-11 h-11 sm:w-14 sm:h-14 rounded-full object-cover border-2 border-emerald-600 shadow-sm shrink-0"
          />
          <div className="flex flex-col min-w-0">
            <span className="font-serif text-base sm:text-2xl font-black text-[#1a2e1d] leading-tight truncate group-hover:text-emerald-800 transition-colors">
              {t('brandName')}
            </span>
            
            <div className="flex items-center gap-2 mt-0.5 text-xs sm:text-sm font-semibold text-[#4a554c] whitespace-nowrap">
              <a
                href="tel:0522552487"
                className="inline-flex items-center gap-1.5 font-black text-emerald-700 hover:text-emerald-900 transition-colors text-xs sm:text-base dir-ltr"
                dir="ltr"
              >
                <span>📞</span>
                <span>{t('phoneDisplay')}</span>
              </a>
              <span className="opacity-40 hidden md:inline">|</span>
              <span className="hidden md:inline truncate">{t('brandSubtitle')}</span>
            </div>
          </div>
        </a>

        {/* קישורי ניווט מוגדלים למחשב */}
        <nav className="hidden xl:flex flex-1 items-center justify-center gap-4 2xl:gap-6 px-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm 2xl:text-base font-extrabold text-emerald-700 hover:text-emerald-900 hover:underline underline-offset-4 transition-all duration-200 whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* בורר שפות מוגדל + כפתור מובייל */}
        <div className="flex items-center gap-2 shrink-0">
          
          <div className="flex items-center bg-white/95 p-1 rounded-full border border-[#E2D5C0] shadow-xs gap-1">
            <button
              onClick={() => setLang('he')}
              className={`flex items-center gap-1.5 px-3 py-1 text-xs sm:text-sm font-bold rounded-full transition-all ${
                lang === 'he' ? 'bg-emerald-600 text-white shadow-xs' : 'text-[#4a554c] hover:text-[#1a2e1d] hover:bg-black/5'
              }`}
            >
              <img src="https://flagcdn.com/w20/il.png" alt="עברית" className="w-4 h-3 rounded-xs object-cover" />
              <span>עב</span>
            </button>

            <button
              onClick={() => setLang('en')}
              className={`flex items-center gap-1.5 px-3 py-1 text-xs sm:text-sm font-bold rounded-full transition-all ${
                lang === 'en' ? 'bg-emerald-600 text-white shadow-xs' : 'text-[#4a554c] hover:text-[#1a2e1d]'
              }`}
            >
              <img src="https://flagcdn.com/w20/us.png" alt="English" className="w-4 h-3 rounded-xs object-cover" />
              <span>EN</span>
            </button>

            <button
              onClick={() => setLang('ru')}
              className={`flex items-center gap-1.5 px-3 py-1 text-xs sm:text-sm font-bold rounded-full transition-all ${
                lang === 'ru' ? 'bg-emerald-600 text-white shadow-xs' : 'text-[#4a554c] hover:text-[#1a2e1d]'
              }`}
            >
              <img src="https://flagcdn.com/w20/ru.png" alt="Русский" className="w-4 h-3 rounded-xs object-cover" />
              <span>RU</span>
            </button>
          </div>

          {/* כפתור תפריט מובייל */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-xl text-[#1a2e1d] bg-white/80 border border-[#E2D5C0] hover:bg-black/5 transition-colors"
            aria-label="תפריט ניווט"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
        <div className="xl:hidden bg-[#FAF5EB] border-b border-[#E2D5C0] px-6 py-5 space-y-3.5 shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-lg font-extrabold text-emerald-700 hover:text-emerald-900 border-b border-[#E2D5C0]/40 text-center"
            >
              {link.label}
            </a>
          ))}

          <div className="pt-2 flex justify-center items-center">
            <a
              href="tel:0522552487"
              className="inline-flex items-center gap-1.5 font-black text-emerald-700 text-base"
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
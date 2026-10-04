import { useState } from "react";
import { useLanguage } from "../LanguageContext";

export function Navbar() {
  const { lang, setLang, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "#about", label: t('navAbout') },
    { href: "#services", label: t('navServices') },
    { href: "#experience", label: t('navExperience') },
    { href: "#testimonials", label: t('navTestimonials') || (lang === 'ru' ? 'Отзывы' : lang === 'en' ? 'Testimonials' : 'המלצות') },
    { href: "#gallery", label: t('navGallery') },
    { href: "#contact", label: t('navContact') },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-[#FAF5EB]/95 backdrop-blur-md border-b border-[#E2D5C0] shadow-xs">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-1.5 sm:gap-4">
        
        {/* לוגו, שם המותג המותאם ומספר הטלפון */}
        <a href="#top" className="flex items-center gap-2 sm:gap-3 group shrink min-w-0">
          <img
            src="/logo.jpg"
            alt="מיכאל לפושניאנסקי לוגו"
            className="w-10 h-10 sm:w-14 sm:h-14 rounded-full object-cover border-2 border-emerald-600 shadow-sm shrink-0"
          />
          <div className="flex flex-col min-w-0">
            {/* השם הוקטן במובייל כדי למנוע צפיפות */}
            <span className="font-serif text-base sm:text-2xl font-extrabold text-[#1a2e1d] leading-tight truncate group-hover:text-emerald-800 transition-colors">
              {t('brandName')}
            </span>
            
            <div className="flex items-center gap-1.5 mt-0.5 text-[11px] sm:text-sm font-medium text-[#4a554c]">
              <a
                href="tel:0522552487"
                className="inline-flex items-center gap-1 font-extrabold text-emerald-700 hover:text-emerald-900 transition-colors text-xs sm:text-base dir-ltr"
                dir="ltr"
              >
                <span>📞</span>
                <span>{t('phoneDisplay')}</span>
              </a>
              <span className="opacity-40 hidden sm:inline">|</span>
              <span className="hidden sm:inline">{t('brandSubtitle')}</span>
            </div>
          </div>
        </a>

        {/* קישורי ניווט ממורכזים בירוק למחשב */}
        <nav className="hidden lg:flex flex-1 items-center justify-center gap-5 xl:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-base font-bold text-emerald-700 hover:text-emerald-900 hover:underline underline-offset-8 transition-all duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* בורר שפות וכפתור תפריט מובייל */}
        <div className="flex items-center gap-1 sm:gap-2 shrink-0">
          
          {/* בורר שפות למחשב (מלא) */}
          <div className="hidden sm:flex items-center bg-white/90 p-1 rounded-full border border-[#E2D5C0] shadow-2xs gap-1">
            <button
              onClick={() => setLang('he')}
              className={`flex items-center gap-1 px-2.5 py-1 text-xs font-bold rounded-full transition-all ${
                lang === 'he' ? 'bg-emerald-600 text-white shadow-xs' : 'text-[#4a554c] hover:text-[#1a2e1d]'
              }`}
            >
              <img src="https://flagcdn.com/w20/il.png" alt="עברית" className="w-3.5 h-2.5 rounded-2xs object-cover" />
              <span>עב</span>
            </button>
            <button
              onClick={() => setLang('en')}
              className={`flex items-center gap-1 px-2.5 py-1 text-xs font-bold rounded-full transition-all ${
                lang === 'en' ? 'bg-emerald-600 text-white shadow-xs' : 'text-[#4a554c] hover:text-[#1a2e1d]'
              }`}
            >
              <img src="https://flagcdn.com/w20/us.png" alt="English" className="w-3.5 h-2.5 rounded-2xs object-cover" />
              <span>EN</span>
            </button>
            <button
              onClick={() => setLang('ru')}
              className={`flex items-center gap-1 px-2.5 py-1 text-xs font-bold rounded-full transition-all ${
                lang === 'ru' ? 'bg-emerald-600 text-white shadow-xs' : 'text-[#4a554c] hover:text-[#1a2e1d]'
              }`}
            >
              <img src="https://flagcdn.com/w20/ru.png" alt="Русский" className="w-3.5 h-2.5 rounded-2xs object-cover" />
              <span>RU</span>
            </button>
          </div>

          {/* בורר שפות קומפקטי למובייל (בלחיצה עובר לשפה הבאה ברצף) */}
          <button
            onClick={() => {
              if (lang === 'he') setLang('en');
              else if (lang === 'en') setLang('ru');
              else setLang('he');
            }}
            className="sm:hidden flex items-center gap-1 bg-white/90 px-2 py-1 rounded-full border border-[#E2D5C0] text-xs font-bold text-emerald-800 shadow-2xs"
            title="החלף שפה"
          >
            <img 
              src={lang === 'he' ? "https://flagcdn.com/w20/il.png" : lang === 'en' ? "https://flagcdn.com/w20/us.png" : "https://flagcdn.com/w20/ru.png"} 
              alt="language" 
              className="w-4 h-3 rounded-2xs object-cover" 
            />
            <span className="uppercase">{lang}</span>
          </button>

          {/* כפתור תפריט מובייל (המבורגר) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1.5 rounded-xl text-[#1a2e1d] bg-white/80 border border-[#E2D5C0] hover:bg-black/5 transition-colors"
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

      {/* תפריט מובייל נפתח הכולל גם בחירת שפה מלאה */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF5EB] border-b border-[#E2D5C0] px-6 py-5 space-y-3.5 shadow-xl">
          
          {/* בורר שפות מלא בתוך התפריט הנפתח */}
          <div className="flex items-center justify-center gap-2 pb-3 border-b border-[#E2D5C0]/60">
            <button
              onClick={() => { setLang('he'); setMobileMenuOpen(false); }}
              className={`flex items-center gap-1.5 px-3 py-1 text-xs font-bold rounded-full transition-all ${
                lang === 'he' ? 'bg-emerald-600 text-white' : 'bg-white text-[#4a554c] border border-[#E2D5C0]'
              }`}
            >
              <img src="https://flagcdn.com/w20/il.png" alt="עב" className="w-3.5 h-2.5 object-cover" />
              <span>עברית</span>
            </button>
            <button
              onClick={() => { setLang('en'); setMobileMenuOpen(false); }}
              className={`flex items-center gap-1.5 px-3 py-1 text-xs font-bold rounded-full transition-all ${
                lang === 'en' ? 'bg-emerald-600 text-white' : 'bg-white text-[#4a554c] border border-[#E2D5C0]'
              }`}
            >
              <img src="https://flagcdn.com/w20/us.png" alt="EN" className="w-3.5 h-2.5 object-cover" />
              <span>English</span>
            </button>
            <button
              onClick={() => { setLang('ru'); setMobileMenuOpen(false); }}
              className={`flex items-center gap-1.5 px-3 py-1 text-xs font-bold rounded-full transition-all ${
                lang === 'ru' ? 'bg-emerald-600 text-white' : 'bg-white text-[#4a554c] border border-[#E2D5C0]'
              }`}
            >
              <img src="https://flagcdn.com/w20/ru.png" alt="RU" className="w-3.5 h-2.5 object-cover" />
              <span>Русский</span>
            </button>
          </div>

          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-lg font-bold text-emerald-700 hover:text-emerald-900 border-b border-[#E2D5C0]/40 text-center"
            >
              {link.label}
            </a>
          ))}

          <div className="pt-2 flex justify-center items-center">
            <a
              href="tel:0522552487"
              className="inline-flex items-center gap-1.5 font-extrabold text-emerald-700 text-base"
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
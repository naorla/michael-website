import { useState } from "react";
import { useLanguage } from "../LanguageContext";

export function Navbar() {
  const { t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "#about", label: t('navAbout') },
    { href: "#services", label: t('navServices') },
    { href: "#experience", label: t('navExperience') },
    { href: "#gallery", label: t('navGallery') },
    { href: "#contact", label: t('navContact') },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-[#FAF5EB]/95 backdrop-blur-md border-b border-[#E2D5C0] shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        
        {/* לוגו, שם המותג ושורת התיאור עם הטלפון */}
        <a href="#top" className="flex items-center gap-3.5 group shrink-0">
          <img
            src="/logo.jpg"
            alt="מיכאל לפושניאנסקי לוגו"
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover border-2 border-emerald-600 shadow-sm shrink-0"
          />
          <div className="flex flex-col">
            <span className="font-serif text-xl sm:text-2xl font-extrabold text-[#1a2e1d] leading-tight group-hover:text-emerald-800 transition-colors">
              {t('brandName')}
            </span>
            
            <div className="flex items-center gap-2 mt-0.5 text-xs sm:text-sm font-medium text-[#4a554c]">
              <span>{t('brandSubtitle')}</span>
              <span className="opacity-40">|</span>
              <a
                href="tel:0522552487"
                className="inline-flex items-center gap-1.5 font-extrabold text-emerald-700 hover:text-emerald-900 transition-colors text-sm sm:text-base dir-ltr"
                dir="ltr"
              >
                <span>📞</span>
                <span>{t('phoneDisplay')}</span>
              </a>
            </div>
          </div>
        </a>

        {/* קישורי ניווט ממורכזים באמצע בירוק */}
        <nav className="hidden lg:flex flex-1 items-center justify-center gap-8">
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

        {/* כפתור תפריט מובייל (מוצג רק במסכים קטנים) */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-xl text-[#1a2e1d] hover:bg-black/5"
          aria-label="תפריט ניווט"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

      </div>

      {/* תפריט מובייל נפתח */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF5EB] border-b border-[#E2D5C0] px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-bold text-emerald-700 hover:text-emerald-900 text-center"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 border-t border-[#E2D5C0] text-center">
            <a
              href="tel:0522552487"
              className="inline-flex items-center justify-center gap-2 font-extrabold text-emerald-700 text-base py-1"
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
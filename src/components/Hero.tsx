import { Reveal } from "./Reveal";
import { useLanguage } from "../LanguageContext";

export function Hero() {
  const { t, lang } = useLanguage();
  const wazeUrl = `https://waze.com/ul?q=${encodeURIComponent("מושב סתריה ליד רחובות ישראל")}&navigate=yes`;

  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden pt-16 md:pt-20 bg-[#FAF5EB]">
      {/* תמונת רקע: מכוילת להורדה קלה של הראש מתחת ל-Navbar במובייל */}
      <img
        src={encodeURI("/מיכאל1.jpg")}
        alt="מיכאל לפושניאנסקי מאמן כלבים"
        className="absolute inset-0 h-full w-full object-cover object-[28%_8%] sm:object-[25%_10%] md:object-[20%_20%] opacity-90 transition-all duration-700"
        fetchPriority="high"
        decoding="async"
      />

      {/* שכבות גרדיאנט: הגרדיאנט במובייל מתחיל רק מאמצע הגובה כדי לחשוף את כל הראש והכתפיים */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#FAF5EB] via-[#FAF5EB]/60 via-40% to-transparent md:bg-gradient-to-l md:from-[#FAF5EB] md:via-[#FAF5EB]/80 md:to-transparent" />

      {/* מיקום פיזי של הכרטיסייה: מורמת במחשב, ומרווחת במדויק בטלפון */}
      <div className="relative mx-auto flex min-h-[calc(100svh-64px)] max-w-7xl items-end md:items-start rtl:justify-start ltr:justify-end px-3 sm:px-4 pb-8 pt-52 sm:pt-56 md:pt-4 md:mt-0 md:px-8">
        <div 
          className="w-full md:max-w-2xl bg-white/95 backdrop-blur-md p-4.5 sm:p-7 md:p-8 rounded-[2rem] sm:rounded-[2.5rem] shadow-2xl border-2 border-[#E2D5C0]"
          dir={lang === 'he' ? 'rtl' : 'ltr'}
        >
          <Reveal>
            <div className="mb-3 flex flex-wrap gap-1.5 sm:gap-2">
              <span className="rounded-full bg-emerald-50 border border-emerald-300 px-3 py-0.5 sm:px-3.5 sm:py-1 text-[11px] sm:text-xs md:text-sm font-bold tracking-wide text-emerald-800 shadow-xs">
                {t('heroBadge1')}
              </span>
              <span className="rounded-full bg-amber-50 border border-amber-300 px-3 py-0.5 sm:px-3.5 sm:py-1 text-[11px] sm:text-xs md:text-sm font-bold tracking-wide text-amber-900 shadow-xs">
                {t('heroBadge2')}
              </span>
            </div>
          </Reveal>

          <Reveal delay={1}>
            <h1 className="flex flex-col gap-1 mb-2.5">
              <span className="font-serif text-2xl sm:text-4xl lg:text-5xl font-black text-emerald-800 leading-tight">
                {t('aboutMainTitle')}
              </span>
              
              <span className="font-serif text-base sm:text-xl lg:text-2xl font-extrabold text-[#1a2e1d] leading-snug">
                {t('heroTitle')}
              </span>
            </h1>

            <p className="mb-2.5 text-[11px] sm:text-xs md:text-sm font-bold tracking-[0.1em] text-amber-900 uppercase">
              {t('heroSubtitle')}
            </p>
          </Reveal>

          <Reveal delay={2}>
            <p className="mt-1 text-xs sm:text-sm md:text-base font-medium text-[#4a554c] leading-relaxed">
              {t('heroDesc')}
            </p>
          </Reveal>

          <Reveal delay={3}>
            <div className="mt-4 sm:mt-6 flex flex-col gap-2">
              {/* שני הכפתורים באותה שורה */}
              <div className="flex flex-row items-center gap-2 w-full">
                <a
                  href="#contact"
                  className="flex-1 text-center cursor-pointer rounded-full bg-emerald-600 px-2.5 sm:px-5 py-2.5 sm:py-3 text-xs sm:text-base font-bold text-white shadow-md transition-transform hover:scale-105 hover:bg-emerald-700 whitespace-nowrap"
                >
                  {t('heroCta1')}
                </a>
                <a
                  href="#about"
                  className="flex-1 text-center cursor-pointer rounded-full bg-transparent border-2 border-[#1a2e1d] px-2.5 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-base font-bold text-[#1a2e1d] transition hover:bg-[#1a2e1d] hover:text-white whitespace-nowrap"
                >
                  {t('heroCta2')}
                </a>
              </div>
              
              {/* כפתור הניווט לוויז */}
              <a
                href={wazeUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-center gap-2 text-[#1a2e1d] bg-[#FAF5EB] px-3.5 py-2 rounded-full font-bold hover:text-blue-600 transition shadow-xs border border-[#E2D5C0] hover:border-blue-400 text-xs sm:text-sm md:text-base text-center"
              >
                <span>🚙</span>
                <span>📍</span>
                <span>{t('heroWaze')}</span>
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
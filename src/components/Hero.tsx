import { Reveal } from "./Reveal";
import { useLanguage } from "../LanguageContext";

export function Hero() {
  const { t, lang } = useLanguage();
  const wazeUrl = `https://waze.com/ul?q=${encodeURIComponent("מושב סתריה ליד רחובות ישראל")}&navigate=yes`;

  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden pt-16 md:pt-14 bg-[#FAF5EB]">
      {/* תמונת רקע */}
      <img
        src={encodeURI("/מיכאל1.jpg")}
        alt="מיכאל לפושניאנסקי מאמן כלבים"
        className="absolute inset-0 h-full w-full object-cover object-[left_15%] md:object-[20%_20%] opacity-90 transition-all duration-700"
        fetchPriority="high"
        decoding="async"
      />

      {/* שכבות גרדיאנט להבטחת קריאות מלאה */}
      <div className="absolute inset-0 bg-gradient-to-l from-[#FAF5EB] via-[#FAF5EB]/80 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#FAF5EB]/90 via-transparent to-transparent" />

      {/* מיקום פיזי מורם של הכרטיסייה */}
      <div className="relative mx-auto flex min-h-[calc(100svh-60px)] max-w-7xl items-start rtl:justify-start ltr:justify-end px-3 sm:px-4 pb-10 pt-4 md:pt-6 md:mt-2 md:px-8">
        <div 
          className="w-full md:max-w-2xl bg-white/94 backdrop-blur-md p-6 sm:p-7 md:p-9 rounded-[2.5rem] shadow-2xl border-2 border-[#E2D5C0]"
          dir={lang === 'he' ? 'rtl' : 'ltr'}
        >
          <Reveal>
            <div className="mb-4 flex flex-wrap gap-2">
              <span className="rounded-full bg-emerald-50 border border-emerald-300 px-3.5 py-1 text-xs md:text-sm font-bold tracking-wide text-emerald-800 shadow-xs">
                {t('heroBadge1')}
              </span>
              <span className="rounded-full bg-amber-50 border border-amber-300 px-3.5 py-1 text-xs md:text-sm font-bold tracking-wide text-amber-900 shadow-xs">
                {t('heroBadge2')}
              </span>
            </div>
          </Reveal>

          <Reveal delay={1}>
            <h1 className="flex flex-col gap-1.5 mb-3.5">
              <span className="font-serif text-3xl sm:text-5xl lg:text-6xl font-black text-emerald-800 leading-[1.12]">
                {t('aboutMainTitle')}
              </span>
              
              <span className="font-serif text-lg sm:text-2xl lg:text-3xl font-extrabold text-[#1a2e1d] leading-tight">
                {t('heroTitle')}
              </span>
            </h1>

            <p className="mb-3.5 text-xs md:text-sm font-bold tracking-[0.12em] text-amber-900 uppercase">
              {t('heroSubtitle')}
            </p>
          </Reveal>

          <Reveal delay={2}>
            <p className="mt-1 text-xs sm:text-sm md:text-base font-medium text-[#4a554c] leading-relaxed">
              {t('heroDesc')}
            </p>
          </Reveal>

          <Reveal delay={3}>
            <div className="mt-6 flex flex-col gap-2.5">
              {/* שני הכפתורים בשורה אחת */}
              <div className="flex flex-row items-center gap-2.5 w-full">
                <a
                  href="#contact"
                  className="flex-1 text-center cursor-pointer rounded-full bg-emerald-600 px-3 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-base font-bold text-white shadow-md transition-transform hover:scale-105 hover:bg-emerald-700 whitespace-nowrap"
                >
                  {t('heroCta1')}
                </a>
                <a
                  href="#about"
                  className="flex-1 text-center cursor-pointer rounded-full bg-transparent border-2 border-[#1a2e1d] px-3 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-base font-bold text-[#1a2e1d] transition hover:bg-[#1a2e1d] hover:text-white whitespace-nowrap"
                >
                  {t('heroCta2')}
                </a>
              </div>
              
              {/* כפתור הניווט לוויז */}
              <a
                href={wazeUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-center gap-2 text-[#1a2e1d] bg-[#FAF5EB] px-4 py-2.5 rounded-full font-bold hover:text-blue-600 transition shadow-xs border border-[#E2D5C0] hover:border-blue-400 text-xs sm:text-sm md:text-base text-center"
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
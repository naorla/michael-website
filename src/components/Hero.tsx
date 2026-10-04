import { Reveal } from "./Reveal";
import { useLanguage } from "../LanguageContext";

export function Hero() {
  const { t, lang } = useLanguage();

  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden pt-20">
      {/* תמונת רקע */}
      <img
        src="/מיכאל1.jpg"
        alt="מיכאל לפושניאנסקי מאמן כלבים"
        className="absolute inset-0 h-full w-full object-cover object-[left_15%] md:object-[20%_20%] opacity-90 transition-all duration-700"
        fetchPriority="high"
      />

      {/* שכבות גרדיאנט קבועות מצד ימין להבטחת קריאות מלאה */}
      <div className="absolute inset-0 bg-gradient-to-l from-[#FAF5EB] via-[#FAF5EB]/80 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#FAF5EB]/90 via-transparent to-transparent" />

      {/* מיקום פיזי של הכרטיסייה בצד ימין */}
      <div className="relative mx-auto flex min-h-[calc(100svh-80px)] max-w-7xl items-end md:items-center rtl:justify-start ltr:justify-end px-4 pb-14 pt-10 md:px-8">
        <div 
          className="w-full md:max-w-2xl bg-white/92 backdrop-blur-md p-7 md:p-10 rounded-[2.5rem] shadow-2xl border-2 border-[#E2D5C0]"
          dir={lang === 'he' ? 'rtl' : 'ltr'}
        >
          <Reveal>
            <div className="mb-6 flex flex-wrap gap-2">
              <span className="rounded-full bg-emerald-50 border border-emerald-300 px-4 py-1.5 text-xs md:text-sm font-bold tracking-wide text-emerald-800 shadow-xs">
                {t('heroBadge1')}
              </span>
              <span className="rounded-full bg-amber-50 border border-amber-300 px-4 py-1.5 text-xs md:text-sm font-bold tracking-wide text-amber-900 shadow-xs">
                {t('heroBadge2')}
              </span>
            </div>
          </Reveal>

          <Reveal delay={1}>
            {/* מבנה כותרות של דף נחיתה - ענק ומרשים */}
            <h1 className="flex flex-col gap-2 mb-5">
              {/* כותרת ראשית ענקית - המרכז להעצמה כלבנית */}
              <span className="font-serif text-4xl sm:text-5xl lg:text-6xl font-black text-emerald-800 leading-[1.1]">
                {t('aboutMainTitle')}
              </span>
              
              {/* כותרת משנה חזקה - מומחיות שנבנתה בשטח... */}
              <span className="font-serif text-2xl sm:text-3xl font-extrabold text-[#1a2e1d] leading-tight">
                {t('heroTitle')}
              </span>
            </h1>

            {/* שורת שירותים (אילוף מתקדם...) */}
            <p className="mb-5 text-xs md:text-sm font-bold tracking-[0.12em] text-amber-900 uppercase">
              {t('heroSubtitle')}
            </p>
          </Reveal>

          <Reveal delay={2}>
            {/* פסקת תיאור */}
            <p className="mt-2 text-sm md:text-base font-medium text-[#4a554c] leading-relaxed">
              {t('heroDesc')}
            </p>
          </Reveal>

          <Reveal delay={3}>
            {/* כפתורי הנעה לפעולה */}
            <div className="mt-8 flex flex-wrap gap-3.5 items-center">
              <a
                href="#contact"
                className="cursor-pointer rounded-full bg-emerald-600 px-8 py-3.5 text-base font-bold text-white shadow-lg transition-transform hover:scale-105 hover:bg-emerald-700 hover:shadow-xl"
              >
                {t('heroCta1')}
              </a>
              <a
                href="#about"
                className="cursor-pointer rounded-full bg-transparent border-2 border-[#1a2e1d] px-8 py-3.5 text-base font-bold text-[#1a2e1d] transition hover:bg-[#1a2e1d] hover:text-white"
              >
                {t('heroCta2')}
              </a>
              <a
                href="https://waze.com/ul?q=%D7%A1%D7%AA%D7%A8%D7%99%D7%94%20%D7%99%D7%A9%D7%A8%D7%90%D7%9C&navigate=yes"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 text-[#1a2e1d] bg-[#FAF5EB] px-5 py-3.5 rounded-full font-bold hover:text-blue-600 transition shadow-xs border border-[#E2D5C0] hover:border-blue-400"
              >
                🚙 {t('heroWaze')}
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
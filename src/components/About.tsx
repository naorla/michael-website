import { Reveal } from "./Reveal";
import { useLanguage } from "../LanguageContext";

export function About() {
  const { t } = useLanguage();

  const stats = [
    { value: t('aboutStat1'), label: t('aboutStat1Text') },
    { value: t('aboutStat2'), label: t('aboutStat2Text') },
    { value: t('aboutStat3'), label: t('aboutStat3Text') },
  ];

  const timeline = [
    {
      year: t('aboutTl1Year'),
      title: t('aboutTl1Title'),
      desc: t('aboutTl1Desc'),
      icon: (
        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-amber-700 shrink-0" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      )
    },
    {
      year: t('aboutTl2Year'),
      title: t('aboutTl2Title'),
      desc: t('aboutTl2Desc'),
      icon: (
        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-700 shrink-0" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
        </svg>
      )
    },
    {
      year: t('aboutTl3Year'),
      title: t('aboutTl3Title'),
      desc: t('aboutTl3Desc'),
      icon: (
        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-amber-800 shrink-0" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z" />
        </svg>
      )
    },
    {
      year: t('aboutTl4Year'),
      title: t('aboutTl4Title'),
      desc: t('aboutTl4Desc'),
      icon: (
        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-800 shrink-0" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
        </svg>
      )
    },
  ];

  return (
    <section id="about" className="scroll-mt-24 bg-[#FAF5EB] py-16 md:py-28 relative overflow-hidden border-b border-[#E2D5C0]">
      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        
        {/* כותרת ראשית ותקציר */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-16">
          <span className="inline-block rounded-full bg-amber-100/80 px-4 py-1.5 text-xs md:text-sm font-bold tracking-[0.18em] text-amber-900 uppercase border border-amber-200/60 shadow-xs mb-4">
            {t('navAbout')}
          </span>
          
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-black text-[#1a2e1d] leading-tight">
            {t('aboutMainTitle')}
          </h2>
          
          <p className="mt-3 text-sm md:text-base font-bold text-emerald-800 tracking-wide">
            {t('aboutSubtitle')}
          </p>

          <div className="mt-6 md:mt-8 bg-white/95 backdrop-blur-md p-6 sm:p-8 rounded-[2rem] border-2 border-[#E2D5C0] shadow-sm">
            <p className="text-sm md:text-base font-medium text-[#3b473d] leading-relaxed">
              {t('aboutMainDesc')}
            </p>
          </div>
        </div>

        {/* סטטיסטיקות */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mb-16 md:mb-20">
          {stats.map((stat, idx) => (
            <Reveal key={idx} delay={((idx % 4) + 1) as 1 | 2 | 3 | 4}>
              <div className="relative overflow-hidden bg-white/95 p-6 sm:p-8 rounded-[2rem] border-2 border-[#E2D5C0] text-center shadow-sm hover:shadow-xl hover:border-emerald-600 transition-all duration-300 group">
                <div className="absolute -top-10 -right-10 w-28 h-28 bg-emerald-50 rounded-full blur-xl group-hover:bg-emerald-100 transition-all" />
                <span className="relative font-serif text-4xl sm:text-6xl font-black text-emerald-700 block mb-2 dir-ltr tracking-tight group-hover:scale-105 transition-transform duration-300">
                  {stat.value}
                </span>
                <span className="relative text-sm sm:text-lg font-bold text-[#1a2e1d]">
                  {stat.label}
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        {/* ציר זמן */}
        <div className="relative mt-8">
          
          {/* כותרת ציר הזמן - מתורגמת בכל השפות */}
          <div className="text-center mb-8 md:mb-12">
            <span className="text-xs md:text-sm font-bold tracking-[0.15em] text-[#718096] uppercase">
              {t('aboutTimelineTrack')}
            </span>
          </div>

          {/* קו אופקי - דסקטופ (lg ומעלה) */}
          <div className="hidden lg:block absolute top-[52px] left-[10%] right-[10%] h-1 bg-gradient-to-r from-amber-300 via-emerald-400 to-emerald-600 rounded-full z-0" />

          {/* קו אנכי - מובייל (מתחת ל-lg) */}
          <div className="lg:hidden absolute top-4 bottom-8 start-5 w-1 bg-gradient-to-b from-amber-400 via-emerald-500 to-emerald-700 rounded-full z-0" />

          {/* גריד התחנות בציר הזמן */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 relative z-10">
            {timeline.map((item, idx) => (
              <Reveal key={idx} delay={((idx % 4) + 1) as 1 | 2 | 3 | 4}>
                <div className="flex flex-row lg:flex-col items-start lg:items-center text-start lg:text-center group h-full gap-3 sm:gap-4 lg:gap-0">
                  
                  {/* אייקון ושנה */}
                  <div className="flex flex-col items-center shrink-0">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-2xl bg-white border-2 border-[#E2D5C0] shadow-md flex items-center justify-center mb-1.5 lg:mb-4 group-hover:border-emerald-600 group-hover:scale-105 transition-all duration-300 bg-gradient-to-br from-white to-[#FAF5EB]">
                      {item.icon}
                    </div>

                    <span className="inline-block px-2 sm:px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-black tracking-wider uppercase mb-0 lg:mb-3 bg-emerald-50 text-emerald-800 border border-emerald-200 shadow-2xs group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                      {item.year}
                    </span>
                  </div>

                  {/* כרטיסיית התוכן עם טיפוגרפיה מותאמת למניעת חריגה */}
                  <div className="w-full min-w-0 bg-white/95 p-3.5 sm:p-4 lg:p-6 rounded-2xl lg:rounded-3xl border border-[#E2D5C0] shadow-xs group-hover:shadow-md group-hover:border-emerald-500/60 transition-all duration-300 flex-1 flex flex-col justify-start">
                    <h3 className="text-xs sm:text-sm lg:text-base font-bold text-[#1a2e1d] mb-1 leading-snug break-words">
                      {item.title}
                    </h3>
                    <p className="text-[11px] sm:text-xs lg:text-sm text-[#4a554c] font-medium leading-relaxed break-words">
                      {item.desc}
                    </p>
                  </div>

                </div>
              </Reveal>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
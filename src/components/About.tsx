import { useLanguage } from "../LanguageContext";

export function About() {
  const { t } = useLanguage();

  const stats = [
    { num: t('aboutStat1'), text: t('aboutStat1Text') },
    { num: t('aboutStat2'), text: t('aboutStat2Text') },
    { num: t('aboutStat3'), text: t('aboutStat3Text') },
  ];

  const timeline = [
    { year: t('aboutTl1Year'), title: t('aboutTl1Title'), desc: t('aboutTl1Desc') },
    { year: t('aboutTl2Year'), title: t('aboutTl2Title'), desc: t('aboutTl2Desc') },
    { year: t('aboutTl3Year'), title: t('aboutTl3Title'), desc: t('aboutTl3Desc') },
    { year: t('aboutTl4Year'), title: t('aboutTl4Title'), desc: t('aboutTl4Desc') },
  ];

  return (
    <section id="about" className="scroll-mt-24 bg-[#FAF5EB] py-20 md:py-28 relative overflow-hidden border-b border-[#E2D5C0]">
      <div className="glow-spot-amber top-10 start-0 opacity-40" />

      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        
        {/* כותרת מלאה וטקסט מוקטן ונוח לקריאה */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="inline-block rounded-full bg-amber-100/80 px-4 py-1.5 text-xs md:text-sm font-bold tracking-[0.2em] text-amber-900 uppercase border border-amber-200/60 shadow-xs mb-4">
            {t('navAbout')}
          </span>
          
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#1a2e1d] leading-tight mb-5">
            {t('brandName')} <br />
            <span className="text-emerald-700 text-2xl md:text-3xl lg:text-4xl mt-1 block">— {t('aboutMainTitle')} —</span>
          </h2>
          
          <p className="mt-4 text-sm md:text-base font-medium text-[#4a554c] leading-relaxed max-w-3xl mx-auto bg-white/60 p-5 md:p-6 rounded-2xl border border-[#E2D5C0] shadow-sm">
            {t('aboutMainDesc')}
          </p>
        </div>

        {/* נתונים - Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white/95 backdrop-blur-xs border-2 border-[#E2D5C0] rounded-3xl p-8 text-center shadow-sm hover:border-gold hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="text-5xl md:text-6xl font-black text-emerald-800 mb-2 font-serif">{stat.num}</div>
              <div className="text-sm font-bold text-amber-800 uppercase tracking-wide">{stat.text}</div>
            </div>
          ))}
        </div>

        {/* ציר זמן - Timeline */}
        <div className="relative border-s-4 border-emerald-200/60 ms-4 md:ms-8">
          {timeline.map((item, idx) => (
            <div key={idx} className="mb-10 ms-8 md:ms-12 relative group">
              <span className="absolute -start-[42px] md:-start-[58px] top-1 flex h-6 w-6 md:h-8 md:w-8 items-center justify-center rounded-full bg-emerald-600 ring-4 ring-[#FAF5EB] transition-transform group-hover:scale-125"></span>
              <span className="inline-block px-3 py-1 bg-amber-100 text-amber-800 text-xs font-bold rounded-full mb-2 border border-amber-200">{item.year}</span>
              <h3 className="text-xl font-bold text-[#1a2e1d] mb-1 font-serif group-hover:text-emerald-700 transition-colors">{item.title}</h3>
              <p className="text-sm font-medium text-[#5a665c] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
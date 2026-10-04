import { useLanguage } from "../LanguageContext";

export function About() {
  const { t } = useLanguage();

  const timeline = [
    { year: t('aboutTl1Year'), title: t('aboutTl1Title'), desc: t('aboutTl1Desc') },
    { year: t('aboutTl2Year'), title: t('aboutTl2Title'), desc: t('aboutTl2Desc') },
    { year: t('aboutTl3Year'), title: t('aboutTl3Title'), desc: t('aboutTl3Desc') },
    { year: t('aboutTl4Year'), title: t('aboutTl4Title'), desc: t('aboutTl4Desc') }
  ];

  return (
    <section id="about" className="scroll-mt-24 bg-[#FAF5EB] py-20 md:py-28 relative overflow-hidden border-y border-[#E2D5C0]">
      <div className="glow-spot-amber -top-20 -start-20" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 md:grid-cols-[1fr_1.25fr] md:items-center md:px-8">
        
        {/* תמונת מיכאל1 ישירות ללא שום טקסט או ריבועים שגויים */}
        <div className="relative">
          <div className="absolute -inset-3 rounded-[2.5rem] bg-gradient-to-tr from-ember/25 to-gold/15 blur-lg -z-10" />
          <img
            src="/מיכאל1.jpg"
            alt="מיכאל לפושניאנסקי"
            className="w-full rounded-[2rem] object-cover object-[center_15%] shadow-2xl aspect-[3/4] border-4 border-white"
          />
        </div>

        {/* תוכן, מדדים וציר זמן */}
        <div className="flex flex-col justify-center">
          
          {/* 3 המדדים */}
          <div className="mb-10 grid grid-cols-3 gap-4 rounded-3xl border-2 border-[#E2D5C0] bg-white/90 backdrop-blur-sm p-6 shadow-sm">
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-black text-gold-2 font-serif">{t('aboutStat1')}</p>
              <p className="mt-1 text-xs md:text-sm font-bold text-muted">{t('aboutStat1Text')}</p>
            </div>
            <div className="text-center border-s-2 border-[#E2D5C0]">
              <p className="text-3xl md:text-4xl font-black text-ember font-serif">{t('aboutStat2')}</p>
              <p className="mt-1 text-xs md:text-sm font-bold text-muted">{t('aboutStat2Text')}</p>
            </div>
            <div className="text-center border-s-2 border-[#E2D5C0]">
              <p className="text-3xl md:text-4xl font-black text-paper font-serif">{t('aboutStat3')}</p>
              <p className="mt-1 text-xs md:text-sm font-bold text-muted">{t('aboutStat3Text')}</p>
            </div>
          </div>

          {/* ציר הזמן */}
          <div className="grid gap-4">
            {timeline.map((item) => (
              <article
                key={item.year}
                className="flex items-start gap-5 rounded-2xl bg-white/90 backdrop-blur-sm p-5 shadow-sm border border-[#E2D5C0] hover:border-gold hover:shadow-md transition-all group"
              >
                <span className="font-serif text-xl md:text-2xl font-black text-ember min-w-[65px] pt-0.5 group-hover:text-gold-2 transition-colors">
                  {item.year}
                </span>
                <div>
                  <h3 className="text-base md:text-lg font-bold text-paper">{item.title}</h3>
                  <p className="mt-1 text-xs md:text-sm font-medium text-muted leading-relaxed">{item.desc}</p>
                </div>
              </article>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
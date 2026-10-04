import { useLanguage } from "../LanguageContext";

export function Testimonials() {
  const { t } = useLanguage();

  const TESTIMONIALS = [
    { role: t('t1Role'), quote: t('t1Quote') },
    { role: t('t2Role'), quote: t('t2Quote') },
    { role: t('t3Role'), quote: t('t3Quote') },
    { role: t('t4Role'), quote: t('t4Quote') },
  ];

  return (
    <section id="testimonials" className="scroll-mt-24 bg-[#FAF5EB] py-20 md:py-28 overflow-hidden relative border-b border-[#E2D5C0]">
      {/* תאורת אווירה עדינה */}
      <div className="glow-spot-amber -top-10 start-1/4 opacity-40" />

      {/* כותרת ממורכזת */}
      <div className="relative mx-auto max-w-7xl px-4 md:px-8 mb-14 text-center">
        <span className="inline-block rounded-full bg-amber-100/80 px-4 py-1.5 text-xs md:text-sm font-bold tracking-[0.2em] text-amber-900 uppercase border border-amber-200/60 shadow-xs">
          {t('testiSubtitle')}
        </span>
        <h2 className="mt-4 font-serif text-3xl font-extrabold text-[#1a2e1d] md:text-5xl leading-tight">
          {t('testiTitle')}
        </h2>
      </div>

      {/* מסלול הגלילה המעגלי האינסופי */}
      <div className="relative w-full overflow-hidden py-4">
        <div className="marquee-wrapper gap-6 px-4">
          {/* הכפלה מדויקת של הרשימה כדי לאפשר לולאת CSS רציפה ללא קפיצות */}
          {[...TESTIMONIALS, ...TESTIMONIALS].map((item, i) => (
            <blockquote
              key={i}
              className="w-[320px] md:w-[360px] shrink-0 rounded-3xl border-2 border-[#E2D5C0] bg-white/95 backdrop-blur-xs shadow-sm hover:shadow-xl hover:border-gold transition-all duration-300 p-8 flex flex-col justify-between cursor-pointer select-none"
            >
              <div>
                <span className="text-4xl text-amber-600 font-serif leading-none block mb-2">“</span>
                <p className="text-base md:text-lg font-medium text-[#2d3a30] leading-relaxed">
                  {item.quote}
                </p>
              </div>

              <footer className="mt-6 pt-4 border-t border-[#F0E6D5] flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-emerald-600 flex items-center justify-center text-white font-bold shadow-xs shrink-0">
                  ★
                </div>
                <span className="text-sm font-bold text-[#1a2e1d]">{item.role}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
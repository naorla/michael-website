import { useLanguage } from "../LanguageContext";

export function Approach() {
  const { t } = useLanguage();

  const steps = [
    {
      num: t('apprStep1Num'),
      title: t('apprStep1Title'),
      desc: t('apprStep1Desc'),
    },
    {
      num: t('apprStep2Num'),
      title: t('apprStep2Title'),
      desc: t('apprStep2Desc'),
    },
    {
      num: t('apprStep3Num'),
      title: t('apprStep3Title'),
      desc: t('apprStep3Desc'),
    },
    {
      num: t('apprStep4Num'),
      title: t('apprStep4Title'),
      desc: t('apprStep4Desc'),
    },
  ];

  return (
    <section id="approach" className="scroll-mt-24 bg-[#FAF5EB] py-20 md:py-28 relative overflow-hidden border-b border-[#E2D5C0]">
      {/* תאורת אווירה עדינה */}
      <div className="glow-spot-green top-10 start-0 opacity-50" />
      <div className="glow-spot-amber bottom-10 end-0 opacity-40" />

      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        
        {/* כותרת הסקשן והסבר המטרה - ממורכז במלואו */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block rounded-full bg-emerald-100/80 px-4 py-1.5 text-xs md:text-sm font-bold tracking-[0.2em] text-emerald-800 uppercase border border-emerald-200/60 shadow-xs">
            {t('apprSubtitle')}
          </span>
          <h2 className="mt-4 font-serif text-3xl font-extrabold text-[#1a2e1d] md:text-5xl leading-tight">
            {t('apprTitle')}
          </h2>
          <p className="mt-5 text-base md:text-lg font-medium text-[#4a554c] leading-relaxed">
            {t('apprDesc')}
          </p>
        </div>

        {/* 4 שלבי העבודה */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, idx) => {
            const isOrange = idx % 2 === 1; // חילופי גוונים בין הכרטיסיות

            return (
              <article
                key={step.num}
                className="group flex flex-col justify-between rounded-3xl border-2 border-[#E2D5C0] bg-white/95 backdrop-blur-xs p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-gold hover:shadow-xl relative overflow-hidden"
              >
                <div>
                  <span
                    className={`text-4xl font-black transition-colors ${
                      isOrange
                        ? "text-amber-600/40 group-hover:text-amber-600"
                        : "text-emerald-700/40 group-hover:text-emerald-700"
                    }`}
                  >
                    {step.num}
                  </span>
                  <h3 className="mt-4 font-serif text-xl font-bold text-[#1a2e1d] leading-snug">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm font-medium text-[#5a665c] leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#F0E6D5] flex items-center gap-2 text-xs font-bold text-amber-800 group-hover:text-emerald-700 transition-colors">
                  <span>✔</span>
                  <span>שלב מובנה בתהליך</span>
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
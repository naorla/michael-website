import { useLanguage } from "../LanguageContext";

export function WhyUs() {
  const { t } = useLanguage();

  const reasons = [
    {
      num: "01",
      title: t('why1Title'),
      text: t('why1Text'),
    },
    {
      num: "02",
      title: t('why2Title'),
      text: t('why2Text'),
    },
    {
      num: "03",
      title: t('why3Title'),
      text: t('why3Text'),
    },
  ];

  return (
    <section id="why" className="scroll-mt-24 bg-[#FAF5EB] py-20 md:py-28 relative overflow-hidden border-b border-[#E2D5C0]">
      {/* תאורת אווירה עדינה ברקע */}
      <div className="glow-spot-green top-10 start-1/3 opacity-40" />

      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        
        {/* כותרת הסקשן - ממורכזת באמצע עם תגית ירוקה */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block rounded-full bg-emerald-100/80 px-4 py-1.5 text-xs md:text-sm font-bold tracking-[0.2em] text-emerald-800 uppercase border border-emerald-200/60 shadow-xs">
            {t('whySubtitle')}
          </span>
          <h2 className="mt-4 font-serif text-3xl font-extrabold text-[#1a2e1d] md:text-5xl leading-tight">
            {t('whyTitle')}
          </h2>
        </div>

        {/* 3 כרטיסיות מיושרות וממורכזות */}
        <div className="grid gap-8 md:grid-cols-3">
          {reasons.map((reason, idx) => {
            const isOrange = idx === 1; // חילוף צבעים עדין במספרים

            return (
              <article
                key={reason.num}
                className="group flex flex-col items-center text-center justify-between rounded-3xl border-2 border-[#E2D5C0] bg-white/95 backdrop-blur-xs p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-gold hover:shadow-xl relative overflow-hidden"
              >
                <div className="flex flex-col items-center w-full">
                  {/* מספר ומסגרת עגולה במרכז */}
                  <div
                    className={`w-14 h-14 rounded-full flex items-center justify-center font-black text-xl mb-6 border transition-colors ${
                      isOrange
                        ? "bg-amber-50 text-amber-700 border-amber-200 group-hover:bg-amber-600 group-hover:text-white"
                        : "bg-emerald-50 text-emerald-800 border-emerald-200 group-hover:bg-emerald-600 group-hover:text-white"
                    }`}
                  >
                    {reason.num}
                  </div>

                  {/* כותרת הכרטיסייה */}
                  <h3 className="font-serif text-2xl font-bold text-[#1a2e1d] leading-snug">
                    {reason.title}
                  </h3>

                  {/* טקסט ההסבר */}
                  <p className="mt-4 text-base font-medium text-[#4a554c] leading-relaxed">
                    {reason.text}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-[#F0E6D5] w-full flex items-center justify-center gap-2 text-xs font-bold text-emerald-800">
                  <span>✔</span>
                  <span>מחויבות לתוצאה</span>
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
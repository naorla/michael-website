import { Reveal } from "./Reveal";
import { useLanguage } from "../LanguageContext";

export function Approach() {
  const { t } = useLanguage();

  const steps = [
    {
      num: t("apprStep1Num") || "01",
      title: t("apprStep1Title") || "אבחון והבנת האופי",
      desc: t("apprStep1Desc") || "מיפוי יסודי של צרכי הכלב, דפוסי ההתנהגות והדינמיקה בבית ובמשפחה.",
      tag: t("apprStep1Tag") || "מיפוי והתאמה אישית",
    },
    {
      num: t("apprStep2Num") || "02",
      title: t("apprStep2Title") || "תקשורת וכבוד הדדי",
      desc: t("apprStep2Desc") || "בניית שפה ברורה בין הבעלים לכלב, מתוך הקשבה ואמון ולא מתוך פחד.",
      tag: t("apprStep2Tag") || "ביסוס שפה משותפת",
    },
    {
      num: t("apprStep3Num") || "03",
      title: t("apprStep3Title") || "תרגול בסביבה האמיתית",
      desc: t("apprStep3Desc") || "יישום המשמעת בבית, ברחוב ובמצבי גירוי שונים עד להטמעה מלאה.",
      tag: t("apprStep3Tag") || "יישום בשטח ובבית",
    },
    {
      num: t("apprStep4Num") || "04",
      title: t("apprStep4Title") || "שקט וביטחון לכל החיים",
      desc: t("apprStep4Desc") || "יצירת שגרה יציבה המעניקה לכלב רוגע ולבעלים שליטה מלאה ובטוחה.",
      tag: t("apprStep4Tag") || "תוצאה שנשמרת לחיים",
    },
  ];

  return (
    <section id="approach" className="scroll-mt-24 bg-[#FAF5EB] py-16 md:py-24 relative overflow-hidden border-b border-[#E2D5C0]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* כותרת הסקשן */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-16">
          <span className="inline-block rounded-full bg-emerald-100/90 px-4 py-1.5 text-xs md:text-sm font-bold tracking-[0.18em] text-emerald-900 uppercase border border-emerald-300/70 shadow-2xs mb-3">
            {t("apprSubtitle") || "שיטת העבודה והאימון"}
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-black text-[#1a2e1d] leading-tight break-words">
            {t("apprTitle") || "עקרונות הברזל שלנו – מהבנה ועד תוצאה מוכחת בשטח"}
          </h2>

          <p className="mt-4 text-xs sm:text-sm md:text-base text-[#4a554c] font-medium leading-relaxed max-w-2xl mx-auto break-words">
            {t("apprDesc") || "אנחנו לא מאמינים בפתרונות קסם שטחיים. תהליך האילוף נשען על קריאה מדויקת של הכלב, בניית אמון ותרגול מובנה שמחזיק מעמד לאורך שנים."}
          </p>
        </div>

        {/* 4 כרטיסי השיטה - כולם בצבע ירוק-אמרלד יוקרתי ואחיד */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <Reveal key={idx} delay={((idx % 4) + 1) as 1 | 2 | 3 | 4}>
              <div className="group h-full bg-white/95 rounded-3xl p-6 sm:p-7 border-2 border-[#E2D5C0] shadow-sm hover:shadow-xl hover:border-emerald-600/60 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between text-start relative overflow-hidden">
                
                <div>
                  {/* מספר שלב ירוק אמרלד אחיד בכל הכרטיסים */}
                  <div className="font-serif text-3xl sm:text-4xl font-black text-emerald-800 tracking-tight mb-4">
                    {step.num}
                  </div>

                  <h3 className="text-base sm:text-lg font-black text-[#1a2e1d] group-hover:text-emerald-950 transition-colors mb-2 leading-snug break-words">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#4a554c] font-medium leading-relaxed break-words">
                    {step.desc}
                  </p>
                </div>

                {/* תגית תחתונה ייעודית לכל שלב, במקום חזרה גנרית */}
                <div className="pt-5 mt-5 border-t border-[#E2D5C0]/60 flex items-center justify-between">
                  <span className="text-[11px] sm:text-xs font-bold text-emerald-800 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                    {step.tag}
                  </span>
                  <span className="text-emerald-700 text-xs font-bold">✓</span>
                </div>

              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
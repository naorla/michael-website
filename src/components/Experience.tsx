import type { ReactElement } from "react";
import { Reveal } from "./Reveal";
import { useLanguage } from "../LanguageContext";

interface MilestoneItem {
  num: string;
  badge: string;
  badgeStyle: string;
  title: string;
  desc: string;
  icon: ReactElement;
}

export function Experience() {
  const { t } = useLanguage();

  const items: MilestoneItem[] = [
    {
      num: "01",
      badge: t('expBadge1') || "מומחיות",
      badgeStyle: "bg-amber-50 text-amber-900 border-amber-200",
      title: t('expCard1Title') || "35+ שנות ניסיון",
      desc: t('expCard1Desc') || "המסע המקצועי החל בשנת 1992 באילוף, פיתוח והכשרת כלבים לכל משימה.",
      icon: (
        <svg className="w-5 h-5 text-amber-700" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      )
    },
    {
      num: "02",
      badge: t('expBadge2') || "פיקוד ומבצעי",
      badgeStyle: "bg-emerald-50 text-emerald-900 border-emerald-200",
      title: t('expCard2Title') || "23 שנות שירות בעוקץ",
      desc: t('expCard2Desc') || "מאמן הכלבים הראשי של יחידת 'עוקץ' בצה״ל – הובלת תורות לחימה והכשרה מבצעית.",
      icon: (
        <svg className="w-5 h-5 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      num: "03",
      badge: t('expBadge3') || "מתחם ייעודי",
      badgeStyle: "bg-teal-50 text-teal-900 border-teal-200",
      title: t('expCard3Title') || "המרכז להעצמה כלבנית",
      desc: t('expCard3Desc') || "מרכז מקצועי לאילוף, הכשרה ופיתוח כלבים וכלבייה מרווחת ומקצועית בסביבה פתוחה בסתריה.",
      icon: (
        <svg className="w-5 h-5 text-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      )
    },
    {
      num: "04",
      badge: t('expBadge4') || "הכרה ממלכתית",
      badgeStyle: "bg-blue-50 text-blue-900 border-blue-200",
      title: t('expCard4Title') || "הכרת משרד הרווחה",
      desc: t('expCard4Desc') || "הכשרת כלבי סיוע בהכרה מלאה של משרד הרווחה והביטחון החברתי.",
      icon: (
        <svg className="w-5 h-5 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    }
  ];

  return (
    <section id="experience" className="scroll-mt-24 bg-[#FAF5EB] py-16 md:py-24 relative overflow-hidden border-b border-[#E2D5C0]">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        {/* כותרת הסקשן */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block rounded-full bg-emerald-100/80 px-4 py-1.5 text-xs md:text-sm font-bold tracking-[0.18em] text-emerald-800 uppercase border border-emerald-200/60 shadow-xs mb-3 break-words">
            {t('expSubtitle') || "שלבי מפתח מקצועיים"}
          </span>
          
          <h2 className="font-serif text-2xl sm:text-3xl md:text-5xl font-black text-[#1a2e1d] leading-tight break-words">
            {t('expTitle') || "דרך וניסיון ללא פשרות"}
          </h2>

          <p className="mt-4 text-xs sm:text-sm md:text-base font-medium text-[#4a554c] leading-relaxed max-w-2xl mx-auto break-words">
            {t('expDesc') || "היסטוריה מקצועית עשירה המובילה את הסטנדרט הגבוה ביותר בעולם הכלבנות."}
          </p>
        </div>

        {/* שורות ההישג האופקיות */}
        <div className="flex flex-col gap-4 sm:gap-5">
          {items.map((item, idx) => (
            <Reveal key={idx} delay={((idx % 4) + 1) as 1 | 2 | 3 | 4}>
              <div className="group relative bg-white/95 rounded-2xl sm:rounded-3xl p-5 sm:p-7 border border-[#E2D5C0] shadow-xs hover:shadow-lg hover:border-emerald-600/50 hover:-translate-y-0.5 transition-all duration-300">
                
                {/* קו הדגשה עדין בצד שנדלק במעבר עכבר */}
                <div className="absolute top-0 bottom-0 start-0 w-1.5 bg-transparent group-hover:bg-emerald-600 rounded-s-2xl sm:rounded-s-3xl transition-colors duration-300" />

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  
                  {/* צד ימין / התחלה: מספר, אייקון וכותרת */}
                  <div className="flex items-start sm:items-center gap-4 min-w-0">
                    
                    {/* תיבת המספר והאייקון */}
                    <div className="relative shrink-0 flex items-center justify-center w-12 h-12 rounded-2xl bg-[#FAF5EB] border border-[#E2D5C0] text-emerald-800 group-hover:bg-emerald-50 group-hover:border-emerald-300 transition-colors">
                      {item.icon}
                    </div>

                    {/* כותרת ותיאור */}
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-mono text-xs font-black text-amber-700/80">
                          {item.num}
                        </span>
                        <h3 className="text-base sm:text-lg font-black text-[#1a2e1d] group-hover:text-emerald-950 transition-colors break-words">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-xs sm:text-sm text-[#4a554c] leading-relaxed break-words">
                        {item.desc}
                      </p>
                    </div>

                  </div>

                  {/* צד שמאל / סוף: תגית הסטטוס */}
                  <div className="shrink-0 self-start sm:self-center ps-16 sm:ps-0">
                    <span className={`inline-block text-[11px] sm:text-xs font-bold px-3 py-1 rounded-full border shadow-2xs whitespace-nowrap ${item.badgeStyle}`}>
                      {item.badge}
                    </span>
                  </div>

                </div>

              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
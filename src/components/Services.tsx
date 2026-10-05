import { Reveal } from "./Reveal";
import { useLanguage } from "../LanguageContext";

export function Services() {
  const { t } = useLanguage();

  const services = [
    {
      title: t("srv1Title") || "כלבי משפחה וחיות מחמד",
      points: [
        t("srv1_1") || "אילוף משמעת בסיסית ומתקדמת",
        t("srv1_2") || "פתרון בעיות התנהגות בבית ובחוץ",
        t("srv1_3") || "אילוף בכלבייה או בבית הלקוח במרכז הארץ",
        t("srv1_4") || "חיבור נכון לילדים ולמשפחה"
      ],
      icon: (
        <svg className="w-6 h-6 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    },
    {
      title: t("srv2Title") || "כלבי סיוע לפוסט טראומה",
      points: [
        t("srv2_1") || "איתור ומיון קפדני של הכלב המתאים",
        t("srv2_2") || "הכשרה לזיהוי והרגעת התקפי חרדה",
        t("srv2_3") || "בניית קשר המעניק ביטחון יומיומי",
        t("srv2_4") || "ליווי הבעלים לחיים עצמאיים"
      ],
      icon: (
        <svg className="w-6 h-6 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      title: t("srv3Title") || "כלבי עבודה ואבטחה",
      points: [
        t("srv3_1") || "הכשרת כלבי הגנה ושמירה",
        t("srv3_2") || "אילוף מתקדם למשימות ייעודיות",
        t("srv3_3") || "ליווי מקצועי לכוחות הביטחון ולארגונים",
        t("srv3_4") || "23 שנות ניסיון כיסוד מקצועי"
      ],
      icon: (
        <svg className="w-6 h-6 text-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      isWorkingDog: true
    }
  ];

  return (
    <section id="services" className="scroll-mt-24 bg-[#FAF5EB] py-16 md:py-24 relative overflow-hidden border-b border-[#E2D5C0]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* כותרת הסקשן */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-16">
          <span className="inline-block rounded-full bg-emerald-100/90 px-4 py-1.5 text-xs md:text-sm font-bold tracking-[0.18em] text-emerald-900 uppercase border border-emerald-300/70 shadow-2xs mb-3">
            {t("srvSubtitle") || "תחומי ההתמחות וההכשרה"}
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-black text-[#1a2e1d] leading-tight break-words">
            {t("srvTitle") || "מהמשפחה בבית ועד למשימות המיוחדות בשטח."}
          </h2>
        </div>

        {/* 3 כרטיסי שירותים */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((srv, idx) => (
            <Reveal key={idx} delay={((idx % 3) + 1) as 1 | 2 | 3}>
              <div className="h-full bg-white/95 rounded-3xl p-6 sm:p-8 border-2 border-[#E2D5C0] shadow-sm hover:shadow-xl hover:border-emerald-600/60 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between text-start relative overflow-hidden group">
                
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#FAF5EB] border border-[#E2D5C0] flex items-center justify-center mb-6 shrink-0 shadow-2xs group-hover:scale-110 group-hover:bg-white group-hover:border-emerald-400 transition-all duration-300">
                    {srv.icon}
                  </div>

                  <h3 className="text-lg sm:text-xl font-black text-[#1a2e1d] mb-4 leading-snug break-words">
                    {srv.title}
                  </h3>

                  <ul className="space-y-3 mb-6">
                    {srv.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#4a554c] font-medium leading-relaxed">
                        <span className="text-emerald-600 font-bold shrink-0 mt-0.5">✓</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* כפתור ייעודי לכלבי עבודה המקשר לאתר Michael K9 */}
                {srv.isWorkingDog ? (
                  <div className="pt-4 border-t border-[#E2D5C0]/60">
                    <a
                      href="https://www.michaelk9.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-between w-full px-4 py-3 rounded-2xl bg-[#FAF5EB] hover:bg-emerald-50 border border-[#E2D5C0] hover:border-emerald-300 text-xs font-black text-emerald-900 transition-all duration-200 group"
                    >
                      <span>{t("k9CardLink") || "למידע מורחב באתר Michael K9"}</span>
                      <span className="text-emerald-700 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform">↗</span>
                    </a>
                  </div>
                ) : (
                  <div className="pt-4 border-t border-[#E2D5C0]/60">
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-1.5 text-xs font-black text-emerald-800 hover:text-emerald-950 transition-colors"
                    >
                      <span>{t("srvLink") || "לפרטים ותיאום"}</span>
                      <span className="rtl:-scale-x-100">→</span>
                    </a>
                  </div>
                )}

              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
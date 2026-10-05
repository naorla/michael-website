import { Reveal } from "./Reveal";
import { useLanguage } from "../LanguageContext";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-[#FAF5EB] pt-24 pb-16 md:pt-32 md:pb-24 border-b border-[#E2D5C0]">
      
      {/* תמונת רקע מוצמדת למעלה כדי למנוע חיתוך (bg-[center_top]) */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-[center_top] bg-no-repeat opacity-60 pointer-events-none transition-all duration-300"
        style={{ backgroundImage: "url('מיכאל1.jpg')" }}
      />

      {/* שכבת הצללה רכה מאחורי הטקסט לשמירה על חדות וקריאות */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#FAF5EB]/90 via-[#FAF5EB]/60 to-transparent pointer-events-none rtl:bg-gradient-to-l" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* עמודת תוכן וכותרות */}
          <div className="lg:col-span-7 text-start flex flex-col justify-center">
            
            {/* תגיות עליונות (Badges) */}
            <Reveal delay={1}>
              <div className="flex flex-wrap items-center gap-2.5 mb-6">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-100/90 text-emerald-900 border border-emerald-300/70 text-xs font-bold tracking-wide shadow-2xs backdrop-blur-xs">
                  <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                  {t("heroBadge1")}
                </span>
                <span className="inline-flex items-center px-3.5 py-1 rounded-full bg-[#F3ECE0]/90 text-amber-950 border border-[#E2D5C0] text-xs font-bold tracking-wide shadow-2xs backdrop-blur-xs">
                  {t("heroBadge2")}
                </span>
              </div>
            </Reveal>

            {/* כותרת H1 סמנטית ונקייה: שם המותג הגדול + המשפט המרכזי */}
            <Reveal delay={2}>
              <h1 className="mb-4">
                {/* 1. מרכז לאילוף והעצמה כלבנית */}
                <span className="block font-serif text-3xl sm:text-5xl md:text-6xl font-black text-emerald-950 leading-[1.15] tracking-tight drop-shadow-2xs">
                  {t("heroMainHeading")}
                </span>
                
                {/* 2. מומחיות שנבנתה בשטח. דיוק שנמדד בתוצאות. */}
                <span className="block text-xl sm:text-2xl md:text-3xl font-black text-[#1a2e1d] leading-snug mt-3">
                  {t("heroTitle")}
                </span>
              </h1>
            </Reveal>

            {/* 3. שורת התחומים החומה */}
            <Reveal delay={2}>
              <p className="text-xs sm:text-sm md:text-base font-bold text-amber-900 tracking-wide mb-5">
                {t("heroSubtitle")}
              </p>
            </Reveal>

            {/* 4. פסקת התוכן המקורית */}
            <Reveal delay={3}>
              <p className="text-sm sm:text-base md:text-lg text-[#2a342c] font-medium leading-relaxed max-w-2xl mb-8">
                {t("heroDesc")}
              </p>
            </Reveal>

            {/* כפתורי הנעה לפעולה (CTA) */}
            <Reveal delay={3}>
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center bg-emerald-800 hover:bg-emerald-700 text-white font-black text-sm sm:text-base px-8 py-4 rounded-2xl shadow-lg hover:shadow-emerald-900/30 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
                >
                  {t("heroCta1")}
                </a>

                <a
                  href="#about"
                  className="inline-flex items-center justify-center bg-white/90 hover:bg-emerald-50 text-[#1a2e1d] border-2 border-[#E2D5C0] hover:border-emerald-600/50 font-black text-sm sm:text-base px-8 py-4 rounded-2xl shadow-xs hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 backdrop-blur-xs"
                >
                  {t("heroCta2")}
                </a>
              </div>
            </Reveal>

            {/* קישור ניווט Waze פעיל */}
            <Reveal delay={4}>
              <a
                href="https://waze.com/ul?ll=31.9056,34.8465&navigate=yes"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-[#F3ECE0]/95 hover:bg-emerald-50 border border-[#E2D5C0] hover:border-emerald-500/60 text-xs sm:text-sm font-bold text-[#1a2e1d] shadow-2xs backdrop-blur-xs transition-all duration-200 active:scale-95"
              >
                <span className="text-base">🚘</span>
                <span>{t("heroWaze")}</span>
              </a>
            </Reveal>

          </div>

          {/* עמודת תמונת הפרופיל של מיכאל */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <Reveal delay={2}>
              <div className="relative w-full max-w-md mx-auto aspect-4/5 rounded-[2.5rem] overflow-hidden border-4 border-white shadow-2xl bg-gray-100">
                <img
                  src="מיכאל1.jpg"
                  alt="מיכאל לפושניאנסקי - מאלף כלבים מקצועי במרכז, לשעבר מאמן ראשי ביחידת עוקץ"
                  loading="eager"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}
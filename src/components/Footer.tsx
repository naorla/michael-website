import { useLanguage } from "../LanguageContext";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#122014] text-white pt-16 pb-12 border-t border-[#1a2e1d] relative overflow-hidden">
      {/* אלומת אור רקע */}
      <div className="absolute top-0 start-1/2 -translate-x-1/2 w-[600px] h-48 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* באנר קישור גדול ובולט לאתר K9 */}
        <div className="mb-16 bg-gradient-to-r from-[#1a2e1d] via-[#1f3723] to-[#1a2e1d] border-2 border-emerald-500/30 rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden group hover:border-emerald-400/60 transition-all duration-300">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            
            <div className="max-w-2xl text-start">
              <span className="inline-block px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-black uppercase tracking-wider border border-emerald-400/30 mb-3">
                {t("k9BannerBadge") || "חטיבת ביטחון ועבודה"}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-black text-white leading-snug">
                {t("k9BannerTitle") || "מחפשים כלבי עבודה, הגנה והכשרות מבצעיות?"}
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-gray-300 leading-relaxed font-medium">
                {t("k9BannerDesc") || "הכירו את Michael K9 — הזרוע הבינלאומית המתמחה באספקה, אילוף והכשרה של כלבי הגנה, שמירה וביטחון לארגונים וכוחות מיוחדים."}
              </p>
            </div>

            <div className="shrink-0 self-start lg:self-center">
              <a
                href="https://www.michaelk9.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-emerald-600 hover:bg-emerald-500 text-white font-black text-sm sm:text-base px-8 py-4 rounded-2xl shadow-lg hover:shadow-emerald-900/50 hover:scale-105 active:scale-95 transition-all duration-300 whitespace-nowrap"
              >
                <span>{t("k9BannerBtn") || "ביקור באתר Michael K9"}</span>
                <svg className="w-5 h-5 rtl:-scale-x-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>

          </div>
        </div>

        {/* שורת קישורי הפוטר וזכויות היוצרים */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-white/10 text-xs sm:text-sm text-gray-400">
          <div className="text-start">
            <span className="font-bold text-white block mb-1">
              {t("brandName") || "מרכז לאילוף והעצמה כלבנית"}
            </span>
            <p>{t("ftDesc") || "אילוף, הכשרה ופיתוח כלבים ברמת מומחה – הגעה לבית הלקוח במרכז, או כלבייה במושב סתריה, ישראל."}</p>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <span>© {new Date().getFullYear()} {t("brandSubtitle") || "מיכאל לפושניאנסקי"}. {t("ftRights") || "כל הזכויות שמורות."}</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
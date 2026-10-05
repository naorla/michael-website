import { useLanguage } from "../LanguageContext";

export function Cta() {
  const { t } = useLanguage();

  return (
    <section className="relative py-24 md:py-32 overflow-hidden flex items-center justify-center bg-gradient-to-r from-[#173327] via-[#234836] to-[#173327] border-y border-[#142d22]">
      {/* 1. הילה זהובה-צהובה חמה במרכז (אלומת אור רכה) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[680px] h-[300px] sm:h-[380px] bg-gradient-to-r from-amber-400/25 via-yellow-300/30 to-amber-500/25 blur-3xl pointer-events-none rounded-full" />

      {/* 2. שכבת ריכוך ירוקה עדינה מסביב לאור הצהוב לעומק נוסף */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] sm:w-[850px] h-[350px] sm:h-[450px] bg-emerald-400/15 blur-[100px] pointer-events-none rounded-full" />

      {/* תוכן המקטע */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 md:px-8 text-center text-white">
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight drop-shadow-md">
          {t('ctaTitle')}
        </h2>

        <p className="mt-4 text-sm sm:text-base md:text-lg font-medium text-emerald-100/90 max-w-2xl mx-auto leading-relaxed drop-shadow-xs">
          {t('ctaDesc')}
        </p>

        <div className="mt-8 flex justify-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm sm:text-base font-black text-[#1a2e1d] shadow-xl hover:bg-amber-50 hover:scale-105 active:scale-95 transition-all duration-300 border-2 border-white/90"
          >
            <span>{t('ctaBtn')}</span>
            <svg className="w-5 h-5 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
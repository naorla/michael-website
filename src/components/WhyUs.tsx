import { useEffect, useRef, useState } from "react";
import { Reveal } from "./Reveal";
import { useLanguage } from "../LanguageContext";

export function WhyUs() {
  const { t } = useLanguage();
  const [activePlayer, setActivePlayer] = useState<0 | 1>(0);
  const player0Ref = useRef<HTMLVideoElement>(null);
  const player1Ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const p0 = player0Ref.current;
    const p1 = player1Ref.current;
    if (!p0 || !p1) return;

    p0.play().catch(() => {});

    // סנכרון חכם: מעבר חלק לנגן השני לפני שהסרטון הראשון מסתיים וקופץ
    const checkP0 = () => {
      if (p0.duration && p0.currentTime >= p0.duration - 0.9) {
        if (activePlayer === 0) {
          p1.currentTime = 0;
          p1.play().catch(() => {});
          setActivePlayer(1);
        }
      }
    };

    const checkP1 = () => {
      if (p1.duration && p1.currentTime >= p1.duration - 0.9) {
        if (activePlayer === 1) {
          p0.currentTime = 0;
          p0.play().catch(() => {});
          setActivePlayer(0);
        }
      }
    };

    p0.addEventListener("timeupdate", checkP0);
    p1.addEventListener("timeupdate", checkP1);

    return () => {
      p0.removeEventListener("timeupdate", checkP0);
      p1.removeEventListener("timeupdate", checkP1);
    };
  }, [activePlayer]);

  const cards = [
    {
      title: t('why1Title'),
      desc: t('why1Text'),
      icon: (
        <svg className="w-6 h-6 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      title: t('why2Title'),
      desc: t('why2Text'),
      icon: (
        <svg className="w-6 h-6 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    },
    {
      title: t('why3Title'),
      desc: t('why3Text'),
      icon: (
        <svg className="w-6 h-6 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: t('why4Title'),
      desc: t('why4Text'),
      icon: (
        <svg className="w-6 h-6 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      )
    }
  ];

  return (
    <section id="why-us" className="scroll-mt-24 bg-[#FAF5EB] py-8 md:py-14 px-1 sm:px-3 md:px-5 border-b border-[#E2D5C0]">
      {/* מסגרת מורחבת (1600 פיקסלים) עם פינות מעוגלות רכות */}
      <div className="relative mx-auto max-w-[1600px] rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden shadow-2xl border-2 border-[#E2D5C0] py-16 md:py-24 px-4 sm:px-8">
        
        {/* נגן וידאו 0 */}
        <video
          ref={player0Ref}
          muted
          playsInline
          preload="auto"
          className={`absolute inset-0 w-full h-full object-cover object-center pointer-events-none transition-opacity duration-700 ease-in-out ${
            activePlayer === 0 ? "opacity-100 z-1" : "opacity-0 z-0"
          }`}
        >
          <source src="/grass.mp4" type="video/mp4" />
        </video>

        {/* נגן וידאו 1 */}
        <video
          ref={player1Ref}
          muted
          playsInline
          preload="auto"
          className={`absolute inset-0 w-full h-full object-cover object-center pointer-events-none transition-opacity duration-700 ease-in-out ${
            activePlayer === 1 ? "opacity-100 z-1" : "opacity-0 z-0"
          }`}
        >
          <source src="/grass.mp4" type="video/mp4" />
        </video>

        {/* שכבת בהירות עדינה ורעננה */}
        <div className="absolute inset-0 bg-white/15 backdrop-brightness-[0.98] pointer-events-none z-2" />

        {/* תוכן הסקשן */}
        <div className="relative z-10 mx-auto max-w-7xl">
          
          {/* כותרת על גבי קפסולת זכוכית יוקרתית */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block bg-white/85 backdrop-blur-md px-6 py-4 rounded-3xl border border-white/80 shadow-md">
              <span className="inline-block rounded-full bg-emerald-100/90 px-4 py-1 text-xs md:text-sm font-bold tracking-[0.18em] text-emerald-800 uppercase border border-emerald-300/60 mb-2">
                {t('whySubtitle')}
              </span>

              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-[#1a2e1d] leading-tight">
                {t('whyTitle')}
              </h2>
            </div>
          </div>

          {/* כרטיסיות המידע */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cards.map((card, idx) => (
              <Reveal key={idx} delay={((idx % 4) + 1) as 1 | 2 | 3 | 4}>
                <div className="h-full bg-white/95 backdrop-blur-lg p-6 sm:p-7 rounded-[2rem] border-2 border-white/90 shadow-xl hover:shadow-2xl hover:border-emerald-500 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-start group">
                  
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200/60 flex items-center justify-center mb-5 shadow-xs group-hover:scale-110 group-hover:bg-emerald-100 transition-all duration-300">
                    {card.icon}
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-[#1a2e1d] mb-2.5 leading-snug group-hover:text-emerald-900 transition-colors">
                    {card.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#4a554c] font-medium leading-relaxed">
                    {card.desc}
                  </p>

                </div>
              </Reveal>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
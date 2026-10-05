import { useEffect, useRef, useState } from "react";
import { Reveal } from "./Reveal";
import { useLanguage } from "../LanguageContext";

function Counter({
  end,
  duration = 1800,
  prefix = "",
  suffix = ""
}: {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true;
          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeOut = 1 - Math.pow(2, -10 * progress);
            setCount(Math.floor(easeOut * end));

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(end);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [end, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}{count}{suffix}
    </span>
  );
}

export function About() {
  const { t } = useLanguage();

  const stats = [
    {
      target: 35,
      suffix: "+",
      label: t("aboutStatExp"),
      sub: t("aboutStatExpSub")
    },
    {
      target: 23,
      suffix: "",
      label: t("aboutStatOketz"),
      sub: t("aboutStatOketzSub")
    },
    {
      target: 1992,
      suffix: "",
      label: t("aboutStatYear"),
      sub: t("aboutStatYearSub")
    }
  ];

  const corePillars = [
    {
      badge: "01",
      icon: (
        <svg className="w-6 h-6 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: t("aboutCore1Title"),
      desc: t("aboutCore1Desc")
    },
    {
      badge: "02",
      icon: (
        <svg className="w-6 h-6 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: t("aboutCore2Title"),
      desc: t("aboutCore2Desc")
    },
    {
      badge: "03",
      icon: (
        <svg className="w-6 h-6 text-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: t("aboutCore3Title"),
      desc: t("aboutCore3Desc"),
      link: "https://www.michaelk9.com/",
      linkText: t("k9CardLink") || "למידע מורחב באתר Michael K9 ↗"
    }
  ];

  const promises = [
    t("aboutPromise1"),
    t("aboutPromise2"),
    t("aboutPromise3")
  ];

  return (
    <section id="about" className="scroll-mt-24 bg-[#FAF5EB] py-16 md:py-24 relative overflow-hidden border-b border-[#E2D5C0]">
      {/* תאורת רקע פרימיום */}
      <div className="absolute top-10 start-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-emerald-100/35 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-10 end-10 w-80 h-80 bg-amber-100/30 rounded-full blur-[90px] pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        {/* כותרת ראשית */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-16">
          <span className="inline-block rounded-full bg-emerald-100/90 px-4 py-1.5 text-xs md:text-sm font-bold tracking-[0.18em] text-emerald-900 uppercase border border-emerald-300/70 shadow-2xs mb-3">
            {t("aboutBadge")}
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-black text-[#1a2e1d] leading-tight break-words">
            {t("aboutHeading")}
          </h2>

          <p className="mt-3 text-sm sm:text-base font-bold text-emerald-800">
            {t("aboutSubheading")}
          </p>
        </div>

        {/* 3 כרטיסי המונים המונפשים */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-14">
          {stats.map((st, idx) => (
            <Reveal key={idx} delay={((idx % 3) + 1) as 1 | 2 | 3}>
              <div className="bg-white/95 rounded-3xl p-6 sm:p-8 border-2 border-[#E2D5C0] shadow-sm hover:shadow-xl hover:border-emerald-600/50 hover:-translate-y-1 transition-all duration-300 text-center">
                <div className="text-4xl sm:text-5xl md:text-6xl font-black text-emerald-800 font-serif leading-none tracking-tight mb-2">
                  <Counter end={st.target} suffix={st.suffix} duration={st.target > 1000 ? 2200 : 1800} />
                </div>
                <div className="text-sm sm:text-base font-black text-[#1a2e1d] mb-0.5">
                  {st.label}
                </div>
                <div className="text-xs text-[#718096] font-medium">
                  {st.sub}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* הסיפור המרכזי והציטוט */}
        <Reveal>
          <div className="bg-white/95 rounded-[2.5rem] p-7 sm:p-10 md:p-12 border-2 border-[#E2D5C0] shadow-md mb-14 sm:mb-16 text-start">
            <div className="max-w-4xl mx-auto">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF5EB] border border-[#E2D5C0] text-xs font-black text-emerald-900 uppercase tracking-wider mb-5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>{t("aboutStoryTitle")}</span>
              </div>

              {/* טקסט סיפור רציף ואחיד ללא רווחי ענק */}
              <p className="text-sm sm:text-base md:text-lg text-[#374151] font-medium leading-relaxed">
                {t("aboutStoryBody")}
              </p>

              {/* ציטוט הפילוסופיה */}
              <div className="pt-6 mt-6 border-t border-[#E2D5C0]/80">
                <p className="text-base sm:text-lg md:text-xl font-serif italic text-emerald-950 leading-relaxed font-bold">
                  {t("aboutPhilosophyQuote")}
                </p>
                <div className="mt-2 text-xs sm:text-sm font-black text-emerald-800 tracking-wide">
                  {t("aboutAuthor")}
                </div>
              </div>

            </div>
          </div>
        </Reveal>

        {/* 3 כרטיסי ליבה משודרגים */}
        <div className="mb-14 sm:mb-16">
          <div className="text-center mb-8">
            <h3 className="font-serif text-2xl sm:text-3xl font-black text-[#1a2e1d]">
              {t("aboutPillarsHeader")}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {corePillars.map((item, idx) => (
              <Reveal key={idx} delay={((idx % 3) + 1) as 1 | 2 | 3}>
                <div className="h-full bg-white/95 rounded-3xl p-6 sm:p-7 border-2 border-[#E2D5C0] shadow-xs hover:shadow-xl hover:border-emerald-600/60 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between text-start relative overflow-hidden group">
                  
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-[#FAF5EB] border border-[#E2D5C0] flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-110 group-hover:bg-white group-hover:border-emerald-400 transition-all duration-300">
                        {item.icon}
                      </div>

                      <span className="font-mono text-xs font-black text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                        {item.badge}
                      </span>
                    </div>

                    <h4 className="text-base sm:text-lg font-black text-[#1a2e1d] mb-2 leading-snug break-words">
                      {item.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-[#4a554c] font-medium leading-relaxed break-words">
                      {item.desc}
                    </p>
                  </div>

                  {item.link && (
                    <div className="pt-4 mt-4 border-t border-[#E2D5C0]/60">
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-black text-emerald-800 hover:text-emerald-950 underline underline-offset-4 transition-colors"
                      >
                        <span>{item.linkText}</span>
                      </a>
                    </div>
                  )}

                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* ההבטחה המקצועית של מיכאל */}
        <Reveal>
          <div className="bg-gradient-to-br from-[#1a2e1d] to-[#122014] text-white rounded-[2.5rem] p-7 sm:p-10 md:p-12 shadow-xl text-start">
            <div className="max-w-4xl mx-auto">
              <h3 className="font-serif text-xl sm:text-2xl md:text-3xl font-black mb-6 text-[#E2D5C0]">
                {t("aboutPromiseTitle")}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {promises.map((prom, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="w-6 h-6 shrink-0 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-400/40 flex items-center justify-center font-bold text-xs">
                      ✓
                    </span>
                    <p className="text-xs sm:text-sm text-gray-200 font-medium leading-relaxed">
                      {prom}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
import { useState, useRef } from "react";
import { Reveal } from "./Reveal";
import { useLanguage } from "../LanguageContext";

export function WhyUs() {
  const { t } = useLanguage();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoFaded, setVideoFaded] = useState(false);

  // האזנה לזמן הריצה של הסרטון ליצירת Fade עדין בסיום ובהתחלה
  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video || !video.duration) return;

    const timeLeft = video.duration - video.currentTime;
    
    if (timeLeft <= 1.0 || video.currentTime < 0.3) {
      setVideoFaded(true);
    } else {
      setVideoFaded(false);
    }
  };

  const advantages = [
    {
      icon: (
        <svg className="w-5 h-5 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      titleKey: "why1Title" as const,
      textKey: "why1Text" as const,
      delay: 1 as const,
    },
    {
      icon: (
        <svg className="w-5 h-5 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      titleKey: "why2Title" as const,
      textKey: "why2Text" as const,
      delay: 2 as const,
    },
    {
      icon: (
        <svg className="w-5 h-5 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      titleKey: "why3Title" as const,
      textKey: "why3Text" as const,
      delay: 3 as const,
    },
    {
      icon: (
        <svg className="w-5 h-5 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      titleKey: "why4Title" as const,
      textKey: "why4Text" as const,
      delay: 4 as const,
    },
  ];

  return (
    <section
      id="why"
      className="py-2 sm:py-3 scroll-mt-20 bg-[#FAF5EB] border-b border-[#E2D5C0]"
    >
      {/* הרחבת הרוחב המקסימלי ל-92rem וצמצום שולי המעטפת */}
      <div className="max-w-[92rem] mx-auto px-2 sm:px-4 lg:px-6">
        
        {/* תיבת המסגרת המתוחה */}
        <div className="relative rounded-[2rem] sm:rounded-[2.75rem] overflow-hidden border-2 sm:border-4 border-white/80 shadow-2xl bg-stone-900 ring-1 ring-[#E2D5C0] px-4 sm:px-8 lg:px-12 py-10 sm:py-14 lg:py-16 min-h-[660px] lg:min-h-[740px] flex items-center justify-center">
          
          {/* סרטון הווידאו ברקע עם מעבר רך */}
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            onTimeUpdate={handleTimeUpdate}
            className={`absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-700 ease-in-out pointer-events-none ${
              videoFaded ? "opacity-20" : "opacity-100"
            }`}
          >
            <source src="/grass.mp4" type="video/mp4" />
          </video>

          {/* שכבת כהות להדגשת הקונטרסט של הכרטיסיות */}
          <div className="absolute inset-0 bg-black/30 z-1 pointer-events-none" />

          {/* תוכן הסקשן מעל הסרטון */}
          <div className="relative z-10 w-full flex flex-col items-center justify-between gap-8 lg:gap-12 my-auto">
            
            {/* כרטיסיית כותרת קומפקטית עליונה */}
            <Reveal delay={1}>
              <div className="bg-white/95 backdrop-blur-md px-5 sm:px-8 py-4 sm:py-5 rounded-2xl sm:rounded-[1.75rem] shadow-xl border border-white/70 text-center max-w-xl mx-auto">
                <span className="inline-block px-3 py-0.5 rounded-full bg-emerald-100/90 text-emerald-900 border border-emerald-300 text-[11px] sm:text-xs font-bold tracking-wide mb-2">
                  {t("whySubtitle")}
                </span>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-[#1a2e1d] leading-snug font-serif">
                  {t("whyTitle")}
                </h2>
              </div>
            </Reveal>

            {/* 4 הכרטיסיות הלבנות בתחתית */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 w-full">
              {advantages.map((item) => (
                <Reveal key={item.titleKey} delay={item.delay}>
                  <div className="bg-white/95 backdrop-blur-md p-5 sm:p-7 rounded-[2rem] shadow-xl border border-white/60 hover:translate-y-[-4px] transition-all duration-300 flex flex-col items-center text-center h-full">
                    
                    {/* אייקון בעיגול ירקרק */}
                    <div className="w-11 h-11 rounded-full bg-emerald-50 border border-emerald-200/70 flex items-center justify-center mb-3.5 shadow-2xs">
                      {item.icon}
                    </div>

                    {/* כותרת הכרטיסייה */}
                    <h3 className="text-base sm:text-lg lg:text-xl font-black text-[#1a2e1d] mb-2">
                      {t(item.titleKey)}
                    </h3>

                    {/* תוכן הכרטיסייה */}
                    <p className="text-xs sm:text-sm text-[#4a554c] leading-relaxed font-medium">
                      {t(item.textKey)}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default WhyUs;
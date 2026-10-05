import type { ReactElement } from "react";
import { Reveal } from "./Reveal";
import { useLanguage } from "../LanguageContext";

interface CredentialItem {
  num: string;
  badge: string;
  badgeColor: string;
  title: string;
  desc: string;
  icon: ReactElement;
}

export function Experience() {
  const { t } = useLanguage();

  const items: CredentialItem[] = [
    {
      num: "01",
      badge: t('expBadge1') || "1992",
      badgeColor: "bg-amber-50 text-amber-900 border-amber-200",
      title: t('expCard1Title'),
      desc: t('expCard1Desc'),
      icon: (
        <svg className="w-5 h-5 text-amber-700" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      )
    },
    {
      num: "02",
      badge: t('expBadge2') || "OKETZ",
      badgeColor: "bg-emerald-50 text-emerald-900 border-emerald-200",
      title: t('expCard2Title'),
      desc: t('expCard2Desc'),
      icon: (
        <svg className="w-5 h-5 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      num: "03",
      badge: t('expBadge3') || "FCI",
      badgeColor: "bg-teal-50 text-teal-900 border-teal-200",
      title: t('expCard3Title'),
      desc: t('expCard3Desc'),
      icon: (
        <svg className="w-5 h-5 text-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      )
    },
    {
      num: "04",
      badge: t('expBadge4') || "TODAY",
      badgeColor: "bg-emerald-50 text-emerald-900 border-emerald-200",
      title: t('expCard4Title'),
      desc: t('expCard4Desc'),
      icon: (
        <svg className="w-5 h-5 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
        </svg>
      )
    }
  ];

  return (
    <section id="experience" className="scroll-mt-24 bg-[#FAF5EB] py-16 md:py-24 relative overflow-hidden border-b border-[#E2D5C0]">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        {/* כותרת מבודדת לחלוטין – לא נחתכת לתוך הפס */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block rounded-full bg-emerald-100/80 px-4 py-1.5 text-xs md:text-sm font-bold tracking-[0.18em] text-emerald-800 uppercase border border-emerald-200/60 shadow-xs mb-3 break-words">
            {t('expSubtitle')}
          </span>
          
          <h2 className="font-serif text-2xl sm:text-3xl md:text-5xl font-black text-[#1a2e1d] leading-tight break-words">
            {t('expTitle')}
          </h2>

          <p className="mt-4 text-xs sm:text-sm md:text-base font-medium text-[#4a554c] leading-relaxed max-w-2xl mx-auto break-words">
            {t('expDesc')}
          </p>
        </div>

        {/* ציר הזמן – מיושר מתמטית לאורך הפס */}
        <div className="relative">
          <div className="flex flex-col gap-6 sm:gap-8">
            {items.map((item, idx) => (
              <Reveal key={idx} delay={((idx % 4) + 1) as 1 | 2 | 3 | 4}>
                <div className="relative flex items-center gap-4 sm:gap-6 w-full">
                  
                  {/* עמודת הציר – רוחב נעול אחיד (w-16 sm:w-20) שבו הפס, העיגול והתגית ממורכזים ב-100% */}
                  <div className="relative shrink-0 w-16 sm:w-20 flex flex-col items-center">
                    
                    {/* הפס הירוק – עובר בול במרכז (left-1/2 -translate-x-1/2) ומחבר בין כל התחנות */}
                    {idx !== items.length - 1 && (
                      <div className="absolute top-12 -bottom-8 w-1 bg-emerald-600/70 left-1/2 -translate-x-1/2 pointer-events-none" />
                    )}

                    {/* העיגול עם האייקון – נעול וממורכז בול מעל הפס */}
                    <div className="relative z-10 w-12 h-12 rounded-full bg-white border-2 border-emerald-600 shadow-md flex items-center justify-center transition-transform hover:scale-105">
                      {item.icon}
                    </div>

                    {/* התגית – ממורכזת בול מתחת לעיגול בלי להזיז את העמודה או את הכרטיס שלידה */}
                    <div className="mt-1.5 flex justify-center w-full">
                      <span className={`text-[10px] sm:text-xs font-bold px-2 py-0.5 rounded-full border shadow-2xs whitespace-nowrap text-center ${item.badgeColor}`}>
                        {item.badge}
                      </span>
                    </div>

                  </div>

                  {/* כרטיסיית התוכן – תופסת את כל שאר הרוחב באופן שווה ואחיד (כולן מתחילות מאותו קו ישר בדיוק) */}
                  <div className="flex-1 min-w-0 bg-white/95 p-5 sm:p-6 rounded-2xl sm:rounded-3xl border border-[#E2D5C0] shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="text-base sm:text-lg font-bold text-[#1a2e1d] mb-1.5 leading-snug break-words">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#4a554c] font-medium leading-relaxed break-words">
                      {item.desc}
                    </p>
                  </div>

                </div>
              </Reveal>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
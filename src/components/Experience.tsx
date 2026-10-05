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
      badge: t('expBadge1'),
      badgeColor: "bg-amber-50 text-amber-900 border-amber-200",
      title: t('expCard1Title'),
      desc: t('expCard1Desc'),
      icon: (
        <svg className="w-5 h-5 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      num: "02",
      badge: t('expBadge2'),
      badgeColor: "bg-emerald-50 text-emerald-900 border-emerald-200",
      title: t('expCard2Title'),
      desc: t('expCard2Desc'),
      icon: (
        <svg className="w-5 h-5 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      num: "03",
      badge: t('expBadge3'),
      badgeColor: "bg-teal-50 text-teal-900 border-teal-200",
      title: t('expCard3Title'),
      desc: t('expCard3Desc'),
      icon: (
        <svg className="w-5 h-5 text-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      num: "04",
      badge: t('expBadge4'),
      badgeColor: "bg-blue-50 text-blue-900 border-blue-200",
      title: t('expCard4Title'),
      desc: t('expCard4Desc'),
      icon: (
        <svg className="w-5 h-5 text-blue-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      num: "05",
      badge: t('expBadge5'),
      badgeColor: "bg-emerald-50 text-emerald-900 border-emerald-200",
      title: t('expCard5Title'),
      desc: t('expCard5Desc'),
      icon: (
        <svg className="w-5 h-5 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      num: "06",
      badge: t('expBadge6'),
      badgeColor: "bg-amber-50 text-amber-900 border-amber-200",
      title: t('expCard6Title'),
      desc: t('expCard6Desc'),
      icon: (
        <svg className="w-5 h-5 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      num: "07",
      badge: t('expBadge7'),
      badgeColor: "bg-teal-50 text-teal-900 border-teal-200",
      title: t('expCard7Title'),
      desc: t('expCard7Desc'),
      icon: (
        <svg className="w-5 h-5 text-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      )
    },
    {
      num: "08",
      badge: t('expBadge8'),
      badgeColor: "bg-amber-50 text-amber-900 border-amber-200",
      title: t('expCard8Title'),
      desc: t('expCard8Desc'),
      icon: (
        <svg className="w-5 h-5 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      )
    },
    {
      num: "09",
      badge: t('expBadge9'),
      badgeColor: "bg-emerald-50 text-emerald-900 border-emerald-200",
      title: t('expCard9Title'),
      desc: t('expCard9Desc'),
      icon: (
        <svg className="w-5 h-5 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      )
    }
  ];

  return (
    <section id="experience" className="scroll-mt-24 bg-[#FAF5EB] py-20 md:py-28 relative overflow-hidden border-b border-[#E2D5C0]">
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-emerald-100/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-amber-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block rounded-full bg-emerald-100/80 px-4 py-1.5 text-xs md:text-sm font-bold tracking-[0.18em] text-emerald-800 uppercase border border-emerald-200/60 shadow-xs mb-4">
            {t('expSubtitle')}
          </span>
          
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-black text-[#1a2e1d] leading-tight">
            {t('expTitle')}
          </h2>

          <p className="mt-4 text-sm md:text-base font-medium text-[#4a554c] leading-relaxed max-w-2xl mx-auto">
            {t('expDesc')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {items.map((item, idx) => (
            <Reveal key={idx} delay={((idx % 4) + 1) as 1 | 2 | 3 | 4}>
              <div className="group relative h-full bg-white/95 rounded-[2rem] p-6 sm:p-7 border-2 border-[#E2D5C0] shadow-sm hover:shadow-xl hover:border-emerald-600/70 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden">
                
                <span className="absolute -top-3 left-4 text-6xl font-black text-[#1a2e1d]/[0.04] group-hover:text-emerald-800/[0.08] transition-colors select-none font-serif">
                  {item.num}
                </span>

                <div>
                  <div className="flex items-center justify-between mb-5 relative z-10">
                    <div className="w-12 h-12 rounded-2xl bg-[#FAF5EB] border border-[#E2D5C0] flex items-center justify-center shadow-2xs group-hover:scale-110 group-hover:border-emerald-400 group-hover:bg-white transition-all duration-300">
                      {item.icon}
                    </div>

                    <div className="flex items-center gap-2">
                      <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border shadow-2xs ${item.badgeColor}`}>
                        {item.badge}
                      </span>
                      <span className="text-sm font-black text-amber-700 tracking-wider">
                        {item.num}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-lg sm:text-xl font-black text-[#1a2e1d] mb-2.5 group-hover:text-emerald-900 transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#4a554c] font-medium leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-[#E2D5C0]/40 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-[#718096] group-hover:text-emerald-700 transition-colors">
                    {t('expFooterTag')}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-emerald-300 group-hover:bg-emerald-600 transition-colors" />
                </div>

              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
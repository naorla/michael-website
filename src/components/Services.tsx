import { Reveal } from "./Reveal";
import { useLanguage } from "../LanguageContext";

export function Services() {
  const { t } = useLanguage();

  const NEW_SERVICES = [
    {
      id: 1,
      title: t('srv1Title'),
      items: [t('srv1_1'), t('srv1_2'), t('srv1_3'), t('srv1_4')],
    },
    {
      id: 2,
      title: t('srv2Title'),
      items: [t('srv2_1'), t('srv2_2'), t('srv2_3'), t('srv2_4')],
    },
    {
      id: 3,
      title: t('srv3Title'),
      items: [t('srv3_1'), t('srv3_2'), t('srv3_3'), t('srv3_4')],
    },
  ];

  return (
    <section id="services" className="scroll-mt-24 bg-[#FAF5EB] py-20 md:py-28 relative overflow-hidden border-b border-[#E2D5C0]">
      {/* תאורת אווירה ענברית חמה בצדדים */}
      <div className="glow-spot-amber -top-10 -start-10 opacity-70" />
      <div className="glow-spot-amber bottom-0 end-0 opacity-50" />

      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block rounded-full bg-amber-100/80 px-4 py-1.5 text-xs md:text-sm font-bold tracking-[0.2em] text-amber-800 uppercase border border-amber-200/60 shadow-xs">
              {t('srvSubtitle')}
            </span>
            <h2 className="mt-4 font-serif text-3xl font-extrabold text-[#1a2e1d] md:text-5xl lg:text-6xl leading-[1.2]">
              {t('srvTitle')}
            </h2>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-8 lg:grid-cols-3 md:grid-cols-2">
          {NEW_SERVICES.map((service, i) => (
            <article
              key={service.id}
              className="group flex flex-col justify-between rounded-[2rem] border-2 border-[#E2D5C0] bg-white/95 backdrop-blur-xs p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-gold hover:shadow-xl relative overflow-hidden"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-4xl md:text-5xl font-black text-amber-700/30 group-hover:text-amber-700/60 transition-colors">
                    0{i + 1}
                  </span>
                  <div className="h-10 w-10 rounded-full bg-amber-50 border border-amber-200/80 flex items-center justify-center text-amber-800 group-hover:bg-gold group-hover:text-white group-hover:border-gold transition-colors font-bold shadow-xs">
                    ✓
                  </div>
                </div>

                <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#1a2e1d] leading-tight">
                  {service.title}
                </h3>

                <ul className="mt-6 grid gap-3.5">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex gap-3 text-sm md:text-base font-medium text-[#3b473d] items-start leading-relaxed">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="#contact"
                className="mt-8 inline-flex items-center gap-2 text-sm md:text-base font-bold text-amber-900 hover:text-emerald-700 transition-colors pt-4 border-t border-[#EFE7D8]"
              >
                <span>←</span>
                <span>{t('srvLink')}</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
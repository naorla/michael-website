import { useLanguage } from "../LanguageContext";

export function Experience() {
  const { lang, t } = useLanguage();

  const expData = {
    he: {
      subtitle: t('expSubtitle'),
      title: t('expTitle'),
      desc: t('expDesc'),
      items: [
        { num: "01", title: "35+ שנות ניסיון", desc: "המסע המקצועי החל בשנת 1992 באילוף והכשרה." },
        { num: "02", title: "23 שנות שירות בעוקץ", desc: "מאמן הכלבים הראשי של יחידת 'עוקץ' בצה״ל." },
        { num: "03", title: "המרכז להעצמה כלבנית", desc: "מרכז מקצועי לאילוף, הכשרה ופיתוח כלבים וכלבייה בסתריה." },
        { num: "04", title: "הכרת משרד הרווחה", desc: "הכשרת כלבי סיוע בהכרה מלאה של משרד הרווחה והביטחון החברתי." },
        { num: "05", title: "כלבי שירות ופוסט טראומה", desc: "התמחות במצבים מורכבים, בדגש על סיוע והרגעה לנפגעי פוסט טראומה (PTSD)." },
        { num: "06", title: "שופט FCI בינלאומי", desc: "שופט מוסמך מטעם הפדרציה הבינלאומית לכלבנות (FCI) לכלבי עבודה." },
        { num: "07", title: "בחירה למשימות מיוחדות", desc: "איתור, הערכה והכשרת כלבים לפי סטנדרטים מהגבוהים ביותר בעולם." },
        { num: "08", title: "פרס הישגי חיים", desc: "הוקרה על תרומה יוצאת דופן לפיתוח תחום הכלבנות המקצועית והביטחונית." },
        { num: "09", title: "פרס ביטחון ישראל", desc: "שותפות בפרויקטים ביטחוניים מורכבים שזכו בפרס ביטחון ישראל." },
      ]
    },
    en: {
      subtitle: t('expSubtitle'),
      title: t('expTitle'),
      desc: t('expDesc'),
      items: [
        { num: "01", title: "35+ Years Experience", desc: "Professional journey began in 1992 in training and development." },
        { num: "02", title: "23 Years in Oketz Unit", desc: "Chief Dog Trainer of the IDF's elite Oketz canine unit." },
        { num: "03", title: "Canine Empowerment Center", desc: "Professional center for training, development, and kennel in Sitria." },
        { num: "04", title: "Ministry of Welfare Certified", desc: "Training assistance dogs fully certified by the Ministry of Welfare." },
        { num: "05", title: "PTSD & Service Dogs", desc: "Specializing in medical conditions and calming PTSD trauma symptoms." },
        { num: "06", title: "International FCI Judge", desc: "Certified working dog judge by the Fédération Cynologique Internationale." },
        { num: "07", title: "Elite Mission Selection", desc: "Screening, evaluating, and training dogs to the world's highest standards." },
        { num: "08", title: "Lifetime Achievement", desc: "Recognized for outstanding contribution to professional dog training." },
        { num: "09", title: "Israel Defense Award", desc: "Contributor to critical security projects awarded the Israel Defense Prize." },
      ]
    },
    ru: {
      subtitle: t('expSubtitle'),
      title: t('expTitle'),
      desc: t('expDesc'),
      items: [
        { num: "01", title: "Более 35 лет опыта", desc: "Профессиональный путь начался в 1992 году." },
        { num: "02", title: "23 года в подразделении «Окец»", desc: "Главный кинолог элитного подразделения ЦАХАЛ «Окец»." },
        { num: "03", title: "Центр развития собак", desc: "Профессиональный центр дрессировки и питомник в мошаве Ситрия." },
        { num: "04", title: "Сертификация Минсоцобеспечения", desc: "Подготовка собак-помощников с официальным признанием министерства." },
        { num: "05", title: "Собаки-помощники при ПТСР", desc: "Специализация на помощи и снижении тревожности при ПТСР." },
        { num: "06", title: "Международный судья FCI", desc: "Сертифицированный судья Международной кинологической федерации (FCI)." },
        { num: "07", title: "Отбор для спецзаданий", desc: "Тестирование и подготовка собак по мировым стандартам." },
        { num: "08", title: "Признание заслуг", desc: "Награда за выдающийся вклад в развитие кинологии." },
        { num: "09", title: "Премия безопасности Израиля", desc: "Участие в проектах, удостоенных высшей государственной награды." },
      ]
    }
  };

  const current = expData[lang as 'he' | 'en' | 'ru'] || expData.he;

  return (
    <section id="experience" className="scroll-mt-24 bg-[#FAF5EB] py-20 md:py-28 relative overflow-hidden border-b border-[#E2D5C0]">
      {/* תאורת אווירה עדינה ברקע */}
      <div className="glow-spot-amber top-10 end-0 opacity-60" />
      <div className="glow-spot-green bottom-10 start-0 opacity-50" />

      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        
        {/* כותרות ופסקה ממורכזות במרכז הדף */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          {/* כותרת משנה בירוק מותג מודגש */}
          <span className="inline-block rounded-full bg-emerald-100/80 px-4 py-1.5 text-xs md:text-sm font-bold tracking-[0.2em] text-emerald-800 uppercase border border-emerald-200/60 shadow-xs">
            {current.subtitle}
          </span>
          
          <h2 className="mt-4 font-serif text-3xl font-extrabold text-[#1a2e1d] md:text-5xl lg:text-6xl leading-[1.25]">
            {current.title}
          </h2>

          {/* פסקת הניסיון ממורכזת בתוך תיבה אלגנטית */}
          <p className="mt-6 text-base md:text-lg font-medium text-[#3b473d] leading-relaxed bg-white/85 backdrop-blur-xs p-6 md:p-8 rounded-3xl border-2 border-[#E2D5C0] shadow-sm max-w-3xl mx-auto">
            {current.desc}
          </p>
        </div>

        {/* גריד 9 הקוביות - עם חילופי צבעים (ירוק / כתום) */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {current.items.map((item, index) => {
            // חילופי צבעים: אי-זוגי כתום/ענבר, זוגי ירוק
            const isOrange = index % 2 === 0;

            return (
              <div
                key={item.num}
                className="bg-white/95 border-2 border-[#E2D5C0] rounded-3xl p-7 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between hover:-translate-y-1.5 hover:border-gold"
              >
                <div>
                  <span
                    className={`text-3xl font-black transition-colors ${
                      isOrange
                        ? "text-amber-600/70 group-hover:text-amber-600"
                        : "text-emerald-700/70 group-hover:text-emerald-700"
                    }`}
                  >
                    {item.num}
                  </span>
                  <h3 className="mt-4 text-xl font-bold text-[#1a2e1d] font-serif group-hover:text-emerald-800 transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm font-medium text-[#5a665c] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
import { useState } from "react";
import { gallery, type GalleryItem } from "../data/gallery";
import { Lightbox } from "./Lightbox";
import { VideoPlaceholder } from "./VideoPlaceholder";
import { useLanguage } from "../LanguageContext";

interface LocalVideoItem {
  id: string;
  source: "youtube" | "tiktok" | "instagram" | "local";
  url?: string;
  title: Record<string, string>;
  description: Record<string, string>;
}

const VIDEO_LIST: LocalVideoItem[] = [
  {
    id: "vid-1",
    source: "youtube",
    title: {
      he: "מאחורי הקלעים של אילוף כלבי עבודה",
      en: "Behind the Scenes of Working Dogs",
      ru: "За кулисами дрессировки служебных собак",
    },
    description: {
      he: "מבט אל תהליך ההכשרה, הדיוק והמשמעת בשטח.",
      en: "A look into field training, precision, and discipline.",
      ru: "Взгляд на полевую подготовку, дисциплину и стандарты.",
    },
  },
  {
    id: "vid-2",
    source: "instagram",
    title: {
      he: "איך בוחרים כלב למשימה?",
      en: "How to Choose a Dog for a Mission?",
      ru: "Как выбрать собаку для спецзадачи?",
    },
    description: {
      he: "הערכת אופי, יכולות והתאמה למשימות מיוחדות.",
      en: "Character evaluation and suitability for tasks.",
      ru: "Оценка характера и проверка пригодности собаки.",
    },
  },
  {
    id: "vid-3",
    source: "tiktok",
    title: {
      he: "טיפ חשוב לכל בעל כלב",
      en: "Essential Tip for Every Dog Owner",
      ru: "Важный совет каждому владельцу собаки",
    },
    description: {
      he: "תקשורת נכונה שמשנה את מערכת היחסים בבית.",
      en: "Proper communication that changes dynamics at home.",
      ru: "Правильная коммуникация, меняющая контакт дома.",
    },
  },
  {
    id: "vid-4",
    source: "youtube",
    title: {
      he: "עבודה עם כלבי שירות",
      en: "Working with Service Dogs",
      ru: "Работа с собаками-помощниками",
    },
    description: {
      he: "הכשרה רגישה ומדויקת לכלבי סיוע.",
      en: "Sensitive and precise assistance dog training.",
      ru: "Точная и бережная подготовка собак-помощников.",
    },
  },
  {
    id: "vid-5",
    source: "instagram",
    title: {
      he: "משמעת שמתחילה באמון",
      en: "Discipline Built on Trust",
      ru: "Дисциплина, основанная на доверии",
    },
    description: {
      he: "איך בונים ביצוע גבוה בלי לאבד את הקשר עם הכלב.",
      en: "High performance while preserving strong connection.",
      ru: "Высокая отдача без потери контакта с собакой.",
    },
  },
  {
    id: "vid-6",
    source: "youtube",
    title: {
      he: "כלבי סיוע לפוסט טראומה",
      en: "PTSD Assistance Dogs",
      ru: "Собаки-помощники при ПТСР",
    },
    description: {
      he: "התמחות במקרים על רקע צבאי וביטחוני.",
      en: "Specialization in military and security trauma cases.",
      ru: "Специализация на случаях боевой и служебной травмы.",
    },
  },
  {
    id: "vid-7",
    source: "tiktok",
    title: {
      he: "35 שנות ניסיון – מה למדתי?",
      en: "35 Years of Experience – Key Lessons",
      ru: "35 лет опыта – главные уроки",
    },
    description: {
      he: "תובנות ולקחים מעולם כלבי העבודה והביטחון.",
      en: "Insights from working and tactical canine handling.",
      ru: "Уроки и выводы из мира служебного собаководства.",
    },
  },
  {
    id: "vid-8",
    source: "instagram",
    title: {
      he: "מיכאל מסביר על התנהגות כלבים",
      en: "Canine Behavior Explained",
      ru: "Поведение собак простыми словами",
    },
    description: {
      he: "קריאה נכונה של הכלב ויישום פתרונות בשטח.",
      en: "Reading dog signals and applying solutions in real life.",
      ru: "Чтение сигналов собаки и решение задач на практике.",
    },
  },
];

export function Gallery() {
  const [openGallery, setOpenGallery] = useState<GalleryItem | null>(null);
  const [activeVideo, setActiveVideo] = useState<{ title: string; description: string; url?: string } | null>(null);
  const { t, lang } = useLanguage();

  const currentLang = (lang as string) || "he";

  return (
    <section id="gallery" className="scroll-mt-24 bg-[#FAF5EB] py-20 md:py-28 relative overflow-hidden border-b border-[#E2D5C0]">
      {/* תאורת אווירה עדינה */}
      <div className="glow-spot-amber top-10 start-1/4 opacity-40" />

      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        
        {/* כותרת הסקשן עם תגית במסגרת מעוגלת */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block rounded-full bg-amber-100/80 px-4 py-1.5 text-xs md:text-sm font-bold tracking-[0.2em] text-amber-900 uppercase border border-amber-200/60 shadow-xs">
            {t('galSubtitle')}
          </span>
          <h2 className="mt-4 font-serif text-4xl font-extrabold text-[#1a2e1d] md:text-5xl leading-tight">
            {t('galTitle')}
          </h2>
          <p className="mt-4 text-base md:text-lg font-medium text-[#4a554c] leading-relaxed">
            {t('galDesc')}
          </p>
        </div>

        {/* 8 כרטיסיות סרטונים */}
        <div className="mb-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {VIDEO_LIST.map((video) => {
            const title = video.title[currentLang] || video.title.he;
            const description = video.description[currentLang] || video.description.he;

            return (
              <article
                key={video.id}
                className="overflow-hidden rounded-3xl border-2 border-[#E2D5C0] bg-white/95 backdrop-blur-xs shadow-sm hover:border-gold hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <VideoPlaceholder
                    title={title}
                    className="aspect-[4/3] w-full object-cover"
                    onPlay={() => setActiveVideo({ title, description, url: video.url })}
                  />
                  <div className="p-5">
                    <p className="text-[11px] font-bold tracking-wide text-amber-800 uppercase">
                      {video.source}
                    </p>
                    <h3 className="mt-2 text-lg font-bold text-[#1a2e1d] leading-snug">
                      {title}
                    </h3>
                    <p className="mt-2 text-sm font-medium text-[#5a665c] leading-relaxed">
                      {description}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* תמונות הגלריה */}
        <div className="columns-1 gap-6 sm:columns-2 lg:columns-3">
          {gallery.map((item, i) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setOpenGallery(item)}
              className="mb-6 block w-full cursor-pointer break-inside-avoid overflow-hidden rounded-3xl border-2 border-[#E2D5C0] hover:border-gold shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className={`w-full object-cover transition duration-500 hover:scale-105 ${
                  i % 3 === 0 ? "aspect-[4/5]" : "aspect-[5/4]"
                }`}
              />
            </button>
          ))}
        </div>
      </div>

      {/* חלון הגדלת תמונה (Lightbox) */}
      {openGallery && <Lightbox item={openGallery} onClose={() => setOpenGallery(null)} />}

      {/* חלון הצגת סרטון */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-[200] grid place-items-center bg-[#1a2e1d]/85 backdrop-blur-sm p-4"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="w-full max-w-4xl overflow-hidden rounded-3xl bg-white shadow-2xl border-4 border-gold"
            onClick={(e) => e.stopPropagation()}
          >
            {activeVideo.url ? (
              <p className="p-6">כאן יוטמע הווידאו: {activeVideo.url}</p>
            ) : (
              <VideoPlaceholder title={activeVideo.title} className="aspect-video w-full" />
            )}
            <div className="p-6 flex justify-between items-center bg-[#FAF5EB] border-t border-[#E2D5C0]">
              <div>
                <h3 className="text-xl font-bold text-[#1a2e1d]">{activeVideo.title}</h3>
                <p className="mt-1 text-sm font-medium text-[#4a554c]">{activeVideo.description}</p>
              </div>
              <button
                className="rounded-full bg-emerald-600 px-6 py-2.5 font-bold text-white hover:bg-emerald-700 transition-colors shadow-sm"
                onClick={() => setActiveVideo(null)}
              >
                סגירה
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
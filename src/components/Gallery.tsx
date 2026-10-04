import { useState, useRef } from "react";
import { useLanguage } from "../LanguageContext";

interface MediaItem {
  id: string;
  type: 'image' | 'video';
  src: string;
  title: string;
  category: 'family' | 'protection' | 'ptsd';
}

const galleryItems: MediaItem[] = [
  {
    id: "g1",
    type: "image",
    src: encodeURI("/מיכאל1.jpg"),
    title: "אימון משמעת מתקדם",
    category: "family"
  },
  {
    id: "g2",
    type: "video",
    src: encodeURI("/סרטון1.mp4"),
    title: "עבודת פוקוס והכשרת הגנה",
    category: "protection"
  },
  {
    id: "g3",
    type: "image",
    src: encodeURI("/מיכאל2.jpg"),
    title: "הכשרת כלבי סיוע לפוסט טראומה",
    category: "ptsd"
  },
  {
    id: "g4",
    type: "video",
    src: encodeURI("/סרטון2.mp4"),
    title: "הטמעת הרגלי התנהגות במרחב האמיתי",
    category: "family"
  }
];

export function Gallery() {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<'all' | 'family' | 'protection' | 'ptsd'>('all');
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);

  const filteredItems = galleryItems.filter(
    item => activeFilter === 'all' || item.category === activeFilter
  );

  return (
    <section id="gallery" className="scroll-mt-24 bg-[#FAF5EB] py-20 md:py-28 relative overflow-hidden border-b border-[#E2D5C0]">
      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        
        {/* כותרת משנה מפורטת */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block rounded-full bg-emerald-100/80 px-4 py-1.5 text-xs md:text-sm font-bold tracking-[0.18em] text-emerald-800 uppercase border border-emerald-200/60 shadow-xs">
            {t('galSubtitle')}
          </span>
          <h2 className="mt-4 font-serif text-3xl font-extrabold text-[#1a2e1d] md:text-5xl leading-tight">
            {t('galTitle')}
          </h2>
          <p className="mt-3 text-sm md:text-base font-medium text-[#4a554c] leading-relaxed">
            {t('galDesc')}
          </p>

          {/* כפתורי סינון */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {[
              { id: 'all', label: 'הכל' },
              { id: 'family', label: 'כלבי משפחה' },
              { id: 'protection', label: 'עבודה והגנה' },
              { id: 'ptsd', label: 'כלבי סיוע' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id as any)}
                className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold transition-all ${
                  activeFilter === tab.id
                    ? 'bg-emerald-700 text-white shadow-sm scale-105'
                    : 'bg-white/80 text-[#3b473d] border border-[#E2D5C0] hover:bg-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* גריד המדיה - מותאם למובייל */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map(item => (
            <div
              key={item.id}
              onClick={() => setSelectedMedia(item)}
              className="group relative h-72 sm:h-80 rounded-3xl overflow-hidden cursor-pointer border-2 border-[#E2D5C0] bg-black/5 shadow-sm hover:shadow-xl hover:border-gold transition-all duration-300"
            >
              {item.type === 'video' ? (
                <div className="relative w-full h-full">
                  <video
                    src={item.src}
                    playsInline
                    muted
                    loop
                    autoPlay
                    preload="metadata"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 end-3 bg-black/60 text-white p-2 rounded-full backdrop-blur-xs">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              ) : (
                <img
                  src={item.src}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              )}

              {/* שכבת כיתוב תחתונה */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex items-end p-5">
                <span className="text-white text-sm sm:text-base font-bold leading-snug drop-shadow-sm">
                  {item.title}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* מודאל צפייה במדיה מלאה */}
        {selectedMedia && (
          <div
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedMedia(null)}
          >
            <div
              className="relative max-w-3xl w-full bg-black rounded-3xl overflow-hidden shadow-2xl"
              onClick={e => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedMedia(null)}
                className="absolute top-4 start-4 z-10 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition-colors"
                aria-label="סגירה"
              >
                ✕
              </button>

              {selectedMedia.type === 'video' ? (
                <video
                  src={selectedMedia.src}
                  controls
                  autoPlay
                  playsInline
                  className="w-full max-h-[80vh] object-contain"
                />
              ) : (
                <img
                  src={selectedMedia.src}
                  alt={selectedMedia.title}
                  className="w-full max-h-[80vh] object-contain"
                />
              )}

              <div className="p-4 bg-[#1a2e1d] text-white text-center font-bold">
                {selectedMedia.title}
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
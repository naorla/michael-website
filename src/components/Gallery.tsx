import { useState, useRef } from "react";
import { useLanguage } from "../LanguageContext";

interface MediaItem {
  id: string;
  type: 'image' | 'video';
  src: string;
  poster?: string;
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
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    poster: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=800&q=80",
    title: "עבודת פוקוס והכשרת הגנה",
    category: "protection"
  },
  {
    id: "g3",
    type: "video",
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    poster: "https://images.unsplash.com/photo-1534361960057-19889db9621e?auto=format&fit=crop&w=800&q=80",
    title: "הטמעת הרגלי התנהגות במרחב האמיתי",
    category: "family"
  },
  {
    id: "g4",
    type: "image",
    src: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=800&q=80",
    title: "הכשרת כלבי סיוע לפוסט טראומה",
    category: "ptsd"
  },
  {
    id: "g5",
    type: "video",
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    poster: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=800&q=80",
    title: "אימוני משמעת ופקודות מרחוק",
    category: "protection"
  },
  {
    id: "g6",
    type: "video",
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyBlazes.mp4",
    poster: "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=800&q=80",
    title: "תרגול רגיעה בסביבת גירויים",
    category: "ptsd"
  },
  {
    id: "g7",
    type: "video",
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
    poster: "https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?auto=format&fit=crop&w=800&q=80",
    title: "עבודה פיזית ופיתוח דרייב נכון",
    category: "protection"
  },
  {
    id: "g8",
    type: "video",
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4",
    poster: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=800&q=80",
    title: "הולכה שקטה ברצועה לצד הבעלים",
    category: "family"
  },
  {
    id: "g9",
    type: "image",
    src: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=800&q=80",
    title: "בניית תקשורת וקשר של אמון הדדי",
    category: "family"
  }
];

export function Gallery() {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<'all' | 'family' | 'protection' | 'ptsd'>('all');
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  const filteredItems = galleryItems.filter(
    item => activeFilter === 'all' || item.category === activeFilter
  );

  // תיקון הגלילה: חישוב מדויק של כיוון RTL מול LTR
  const scroll = (direction: 'prev' | 'next') => {
    if (!sliderRef.current) return;
    
    const slider = sliderRef.current;
    const scrollAmount = slider.clientWidth * 0.75;
    const isRtl = document.documentElement.dir === 'rtl';

    // ב-RTL גלילה קדימה משמעה ערך שלילי של scrollLeft ברוב הדפדפנים המודרניים
    const multiplier = isRtl ? (direction === 'next' ? -1 : 1) : (direction === 'next' ? 1 : -1);

    slider.scrollBy({
      left: scrollAmount * multiplier,
      behavior: 'smooth'
    });
  };

  return (
    <section id="gallery" className="scroll-mt-24 bg-[#FAF5EB] py-20 md:py-28 relative overflow-hidden border-b border-[#E2D5C0]">
      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        
        {/* כותרת ראשית וכותרת משנה */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block rounded-full bg-emerald-100/80 px-4 py-1.5 text-xs md:text-sm font-bold tracking-[0.18em] text-emerald-800 uppercase border border-emerald-200/60 shadow-xs">
            {t('galSubtitle')}
          </span>
          <h2 className="mt-4 font-serif text-3xl font-black text-[#1a2e1d] md:text-5xl leading-tight">
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
                onClick={() => setActiveFilter(tab.id as 'all' | 'family' | 'protection' | 'ptsd')}
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

        {/* מיכל הגלריה עם חיצי הניווט */}
        <div className="relative group/slider">
          
          {/* כפתור חץ ימין (בדפדפן הוא תמיד בצד ימין ומכוון ימינה) */}
          <button
            onClick={() => scroll(document.documentElement.dir === 'rtl' ? 'prev' : 'next')}
            className="absolute -right-2 md:-right-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 md:w-13 md:h-13 bg-white/95 text-emerald-900 border-2 border-[#E2D5C0] rounded-full shadow-xl flex items-center justify-center hover:bg-emerald-700 hover:text-white hover:scale-110 transition-all duration-200"
            aria-label="גלול ימינה"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* כפתור חץ שמאל (בדפדפן הוא תמיד בצד שמאל ומכוון שמאלה) */}
          <button
            onClick={() => scroll(document.documentElement.dir === 'rtl' ? 'next' : 'prev')}
            className="absolute -left-2 md:-left-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 md:w-13 md:h-13 bg-white/95 text-emerald-900 border-2 border-[#E2D5C0] rounded-full shadow-xl flex items-center justify-center hover:bg-emerald-700 hover:text-white hover:scale-110 transition-all duration-200"
            aria-label="גלול שמאלה"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* שורת הגלריה האופקית */}
          <div
            ref={sliderRef}
            className="flex gap-5 overflow-x-auto scroll-smooth pb-6 pt-2 px-1 snap-x snap-mandatory"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {filteredItems.map(item => (
              <div
                key={item.id}
                onClick={() => setSelectedMedia(item)}
                className="group relative flex-none w-[85%] sm:w-[48%] lg:w-[31%] h-72 sm:h-80 rounded-3xl overflow-hidden cursor-pointer border-2 border-[#E2D5C0] bg-black/10 shadow-md hover:shadow-2xl hover:border-emerald-600 transition-all duration-300 snap-center"
              >
                {item.type === 'video' ? (
                  <div className="relative w-full h-full bg-black">
                    <video
                      src={item.src}
                      poster={item.poster}
                      playsInline
                      muted
                      loop
                      autoPlay
                      preload="metadata"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 end-4 bg-black/60 text-white p-2.5 rounded-full backdrop-blur-xs group-hover:scale-110 transition-transform">
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
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=800&q=80";
                    }}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                )}

                {/* כותרת על גבי הכרטיסייה */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent flex items-end p-5">
                  <span className="text-white text-sm sm:text-base font-bold leading-snug drop-shadow-md">
                    {item.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* מודאל צפייה במסך מלא בלחיצה */}
        {selectedMedia && (
          <div
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedMedia(null)}
          >
            <div
              className="relative max-w-3xl w-full bg-black rounded-3xl overflow-hidden shadow-2xl"
              onClick={e => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedMedia(null)}
                className="absolute top-4 start-4 z-10 bg-white/20 hover:bg-white/40 text-white p-2.5 rounded-full transition-colors"
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
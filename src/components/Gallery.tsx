import { useState, useRef } from "react";
import { useLanguage } from "../LanguageContext";

interface MediaItem {
  id: number;
  category: "family" | "working" | "assistance";
  titleKey: 'galCap1' | 'galCap2' | 'galCap3' | 'galCap4' | 'galCap5' | 'galCap6';
  image: string;
  isVideo?: boolean;
}

export function Gallery() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const mediaItems: MediaItem[] = [
    {
      id: 1,
      category: "working",
      titleKey: "galCap1",
      image: "מיכאל1.jpg",
      isVideo: false,
    },
    {
      id: 2,
      category: "working",
      titleKey: "galCap2",
      image: "https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=crop&w=800&q=80",
      isVideo: true,
    },
    {
      id: 3,
      category: "family",
      titleKey: "galCap3",
      image: "https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?auto=format&fit=crop&w=800&q=80",
      isVideo: true,
    },
    {
      id: 4,
      category: "assistance",
      titleKey: "galCap4",
      image: "https://images.unsplash.com/photo-1544568100-847a948585b9?auto=format&fit=crop&w=800&q=80",
      isVideo: false,
    },
    {
      id: 5,
      category: "working",
      titleKey: "galCap5",
      image: "https://images.unsplash.com/photo-1561037404-61cd46aa615b?auto=format&fit=crop&w=800&q=80",
      isVideo: true,
    },
    {
      id: 6,
      category: "family",
      titleKey: "galCap6",
      image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=800&q=80",
      isVideo: false,
    },
  ];

  const filterTabs = [
    { id: "all", label: t("galFilterAll") },
    { id: "family", label: t("galFilterFamily") },
    { id: "working", label: t("galFilterWorking") },
    { id: "assistance", label: t("galFilterAssistance") },
  ];

  const filteredItems =
    activeCategory === "all"
      ? mediaItems
      : mediaItems.filter((item) => item.category === activeCategory);

  const handleScroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -350 : 350;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section id="gallery" className="scroll-mt-24 bg-[#FAF5EB] py-20 md:py-28 relative overflow-hidden border-b border-[#E2D5C0]">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        
        {/* כותרת עליונה מתורגמת */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-block rounded-full bg-emerald-100/80 px-4 py-1.5 text-xs md:text-sm font-bold tracking-[0.18em] text-emerald-800 uppercase border border-emerald-200/60 shadow-xs mb-4">
            {t("galSubtitle")}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-black text-[#1a2e1d] leading-tight">
            {t("galTitle")}
          </h2>
          <p className="mt-3 text-sm md:text-base font-medium text-[#4a554c] leading-relaxed">
            {t("galDesc")}
          </p>
        </div>

        {/* כפתורי סינון מתורגמים */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {filterTabs.map((tab) => {
            const isActive = activeCategory === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 shadow-xs ${
                  isActive
                    ? "bg-emerald-700 text-white shadow-md scale-105"
                    : "bg-white/90 text-[#3b473d] hover:bg-white hover:text-emerald-800 border border-[#E2D5C0]"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* מיכל הגלריה עם כפתורי גלילה */}
        <div className="relative group">
          
          {/* גלילה שמאלה */}
          <button
            onClick={() => handleScroll("left")}
            aria-label="Scroll left"
            className="absolute -left-3 sm:-left-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/95 border border-[#E2D5C0] shadow-md flex items-center justify-center text-[#1a2e1d] hover:bg-emerald-600 hover:text-white hover:scale-110 active:scale-95 transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* כרטיסיות המדיה */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth py-4 px-2"
          >
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="shrink-0 w-[280px] sm:w-[320px] md:w-[350px] group/card relative rounded-[2rem] overflow-hidden border-2 border-[#E2D5C0] bg-white shadow-sm hover:shadow-xl hover:border-emerald-600 transition-all duration-300"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-200">
                  <img
                    src={item.image}
                    alt={t(item.titleKey)}
                    className="w-full h-full object-cover group-hover/card:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />

                  {/* גרדיאנט כהה כדי שהטקסט הלבן יהיה קריא וברור */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />

                  {/* אייקון וידאו */}
                  {item.isVideo && (
                    <div className="absolute top-4 end-4 w-9 h-9 rounded-full bg-black/50 backdrop-blur-md border border-white/30 flex items-center justify-center text-white pointer-events-none">
                      <svg className="w-4 h-4 fill-current translate-x-0.5" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  )}

                  {/* כתובית מתורגמת */}
                  <div className="absolute bottom-0 inset-x-0 p-5 pointer-events-none">
                    <p className="text-white text-sm sm:text-base font-bold drop-shadow-md leading-snug">
                      {t(item.titleKey)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* גלילה ימינה */}
          <button
            onClick={() => handleScroll("right")}
            aria-label="Scroll right"
            className="absolute -right-3 sm:-right-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/95 border border-[#E2D5C0] shadow-md flex items-center justify-center text-[#1a2e1d] hover:bg-emerald-600 hover:text-white hover:scale-110 active:scale-95 transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>

        </div>

      </div>
    </section>
  );
}
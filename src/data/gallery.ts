export type GalleryItem = {
  id: string;
  alt: string;
  src: string;
  category: string;
};

// TODO: replace Unsplash placeholders with original photography of Michael and dogs
export const gallery: GalleryItem[] = [
  {
    id: "g1",
    category: "פורטרט",
    alt: "פורטרט placeholder של מאמן עם כלב עבודה",
    src: "https://images.unsplash.com/photo-1551717743-49959800b1f6?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "g2",
    category: "כלבי עבודה",
    alt: "כלב עבודה בשטח פתוח",
    src: "https://images.unsplash.com/photo-1568572933382-74d440642117?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "g3",
    category: "אימון",
    alt: "רגע מאימון כלבים מקצועי",
    src: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "g4",
    category: "שירות",
    alt: "כלב שירות לצד אדם",
    src: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "g5",
    category: "שטח",
    alt: "עבודה בשטח עם כלב",
    src: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "g6",
    category: "אימון",
    alt: "תרגול דיוק ומשמעת",
    src: "https://images.unsplash.com/photo-1534361960057-19889db9621e?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "g7",
    category: "פורטרט",
    alt: "קשר בין מאמן לכלב",
    src: "https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=crop&w=1100&q=80",
  },
  {
    id: "g8",
    category: "כלבי עבודה",
    alt: "כלב מוכן למשימה",
    src: "https://images.unsplash.com/photo-1477884213360-7e9d7dcc1e48?auto=format&fit=crop&w=900&q=80",
  },
];

export const HERO_IMAGE =
  "https://images.unsplash.com/photo-1551717743-49959800b1f6?auto=format&fit=crop&w=2000&q=80";

export const PORTRAIT_IMAGE =
  "https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&w=1200&q=80";

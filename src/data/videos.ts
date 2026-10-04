export type VideoSource = "youtube" | "tiktok" | "instagram" | "local";

export type VideoItem = {
  id: string;
  title: string;
  description: string;
  source: VideoSource;
  // TODO: add real media URLs when assets are ready
  url: string;
  thumbnail: string;
};

export const videos: VideoItem[] = [
  {
    id: "v1",
    title: "מאחורי הקלעים של אילוף כלבי עבודה",
    description: "מבט אל תהליך ההכשרה, הדיוק והמשמעת בשטח.",
    source: "youtube",
    url: "",
    thumbnail: "",
  },
  {
    id: "v2",
    title: "איך בוחרים כלב למשימה?",
    description: "הערכת אופי, יכולות והתאמה למשימות מיוחדות.",
    source: "instagram",
    url: "",
    thumbnail: "",
  },
  {
    id: "v3",
    title: "טיפ חשוב לכל בעל כלב",
    description: "תקשורת נכונה שמשנה את מערכת היחסים בבית.",
    source: "tiktok",
    url: "",
    thumbnail: "",
  },
  {
    id: "v4",
    title: "עבודה עם כלבי שירות",
    description: "הכשרה רגישה ומדויקת לכלבי סיוע.",
    source: "youtube",
    url: "",
    thumbnail: "",
  },
  {
    id: "v5",
    title: "מיכאל מסביר על התנהגות כלבים",
    description: "קריאה נכונה של הכלב ושל הסיטואציה.",
    source: "instagram",
    url: "",
    thumbnail: "",
  },
  {
    id: "v6",
    title: "30 שנות ניסיון – מה למדתי?",
    description: "לקחים מעולם כלבי העבודה והביטחון.",
    source: "youtube",
    url: "",
    thumbnail: "",
  },
  {
    id: "v7",
    title: "כלבי סיוע לפוסט טראומה",
    description: "התמחות במקרים על רקע צבאי וביטחוני.",
    source: "tiktok",
    url: "",
    thumbnail: "",
  },
  {
    id: "v8",
    title: "משמעת שמתחילה באמון",
    description: "איך בונים ביצוע גבוה בלי לאבד את הקשר.",
    source: "instagram",
    url: "",
    thumbnail: "",
  },
];

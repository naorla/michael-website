export const SITE = {
  brand: "מיכאל לפושניאנסקי",
  center: "המרכז להעצמה כלבנית",
  tagline: "אילוף · הכשרה · פיתוח כלבים",
  // TODO: replace with production domain
  url: "https://example.com/",
  // TODO: replace with real phone number (digits only, with country code)
  phone: "",
  // TODO: replace with real WhatsApp number, e.g. 9725XXXXXXXX
  whatsapp: "",
  // TODO: replace with real email
  email: "",
  social: {
    // TODO: replace empty strings with official profile URLs
    tiktok: "",
    instagram: "",
    youtube: "",
    facebook: "",
  },
} as const;

export const NAV = [
  { href: "#about", label: "אודות" },
  { href: "#services", label: "שירותים" },
  { href: "#experience", label: "ניסיון" },
  { href: "#videos", label: "סרטונים" },
  { href: "#gallery", label: "גלריה" },
  { href: "#contact", label: "צור קשר" },
] as const;

export const SERVICES = [
  {
    id: "training",
    title: "אילוף כלבים",
    items: [
      "אילוף והתנהגות",
      "בניית משמעת",
      "יצירת תקשורת נכונה בין הכלב לבעלים",
    ],
  },
  {
    id: "working",
    title: "כלבי עבודה",
    items: [
      "הכשרה ופיתוח כלבי עבודה",
      "הערכת יכולות",
      "התאמת כלב למשימה",
    ],
  },
  {
    id: "service",
    title: "כלבי שירות",
    items: [
      "הכשרת כלבי שירות",
      "התאמה למצבים רפואיים",
      "תמיכה לאנשים הזקוקים לכלב שירות",
    ],
  },
  {
    id: "ptsd",
    title: "כלבי סיוע לפוסט טראומה",
    items: [
      "התמחות מיוחדת במקרים על רקע צבאי וביטחוני",
      "ליווי תהליך ההתאמה וההכשרה",
      "עבודה רגישה ומדויקת עם הכלב והאדם",
    ],
  },
  {
    id: "selection",
    title: "בחירת כלבים",
    items: ["איתור", "הערכה", "בחירה ורכישה של כלבים למשימות מיוחדות"],
  },
  {
    id: "consulting",
    title: "ייעוץ מקצועי",
    items: [
      "ייעוץ לבעלי כלבים",
      "ייעוץ מקצועי לארגונים",
      "הערכת כלבים והתאמתם לצרכים שונים",
    ],
  },
] as const;

export const PRINCIPLES = [
  { en: "Precision", he: "דיוק" },
  { en: "Discipline", he: "משמעת" },
  { en: "Trust", he: "אמון" },
  { en: "Communication", he: "תקשורת" },
  { en: "Consistency", he: "עקביות" },
  { en: "Performance", he: "ביצוע" },
] as const;

export const WHY = [
  {
    title: "ניסיון יוצא דופן",
    text: "מסע מקצועי שמתחיל ב־1992 וכולל למעלה מ־30 שנות עבודה בשטח.",
  },
  {
    title: "רקע ביחידת עוקץ",
    text: "23 שנים כמאמן הכלבים הראשי של יחידת עוקץ בצה״ל.",
  },
  {
    title: "מומחיות בכלבי עבודה",
    text: "הכשרה, הערכה והתאמה בסביבות מורכבות ובעלות סיכון גבוה.",
  },
  {
    title: "הכשרת כלבי שירות",
    text: "כולל כלבי סיוע בהכרה של משרד הרווחה והביטחון החברתי.",
  },
  {
    title: "סטנדרטים מקצועיים גבוהים",
    text: "שופט כלבי עבודה מוסמך מטעם FCI, עם הקפדה על בחירה והכשרה.",
  },
  {
    title: "גישה אישית",
    text: "כל כלב וכל לקוח מקבלים תהליך מדויק, לא תבנית גנרית.",
  },
] as const;

export const ACHIEVEMENTS = [
  { label: "30+ שנות ניסיון", detail: "המסע המקצועי החל בשנת 1992." },
  { label: "23 שנות שירות", detail: "מאמן הכלבים הראשי של יחידת עוקץ." },
  { label: "המרכז להעצמה כלבנית", detail: "מרכז להכשרה והדרכה של כלבי סיוע." },
  {
    label: "הכרת משרד הרווחה",
    detail: "הכשרת כלבי סיוע בהכרה של משרד הרווחה והביטחון החברתי.",
  },
  {
    label: "כלבי שירות רפואיים",
    detail: "התמחות במצבים רפואיים מגוונים, בדגש על פוסט טראומה.",
  },
  {
    label: "שופט FCI",
    detail: "שופט כלבי עבודה מוסמך מטעם הפדרציה הבינלאומית לכלבנות.",
  },
  {
    label: "בחירה למשימות מיוחדות",
    detail: "איתור, הערכה ורכישה של כלבים לפי סטנדרטים גבוהים.",
  },
  {
    label: "פרס הישגי חיים",
    detail: "מטעם קצין חיל הרגלים והצנחנים הראשי.",
  },
  {
    label: "פרס ביטחון ישראל",
    detail: "השתתפות בפרויקטים שזכו בפרס ביטחון ישראל.",
  },
] as const;

export const TIMELINE = [
  { year: "1992", title: "תחילת הדרך", text: "המסע בעולם הכלבנות המקצועית מתחיל." },
  {
    year: "עוקץ",
    title: "23 שנות פיקוד מקצועי",
    text: "מאמן הכלבים הראשי של יחידת עוקץ בצה״ל.",
  },
  {
    year: "FCI",
    title: "שופט כלבי עבודה",
    text: "הסמכה בינלאומית מטעם הפדרציה הבינלאומית לכלבנות.",
  },
  {
    year: "היום",
    title: "המרכז להעצמה כלבנית",
    text: "הכשרה, ייעוץ ופיתוח כלבים ללקוחות פרטיים ולארגונים.",
  },
] as const;

export const STATS = [
  { value: 30, suffix: "+", label: "שנות ניסיון" },
  { value: 23, suffix: "", label: "שנים ביחידת עוקץ" },
  { value: 1992, suffix: "", label: "תחילת המסע" },
] as const;

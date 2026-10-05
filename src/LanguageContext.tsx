import { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';

export const translations = {
  he: {
    brandName: "מרכז לאילוף והעצמה כלבנית",
    brandSubtitle: "מיכאל לפושניאנסקי",
    phoneDisplay: "052-255-2487",
    skipLink: "דילוג לתוכן",
    
    // Hero
    heroBadge1: "35+ שנות ניסיון",
    heroBadge2: "כלבייה מרווחת ומקצועית",
    heroMainHeading: "מרכז לאילוף והעצמה כלבנית",
    heroTitle: "מומחיות שנבנתה בשטח. דיוק שנמדד בתוצאות.",
    heroSubtitle: "אילוף מתקדם · כלבי משפחה · כלבי סיוע ושירות · הכשרת כלבי עבודה",
    heroDesc: "מיכאל לפושניאנסקי מוביל סטנדרט בלתי מתפשר באילוף, הכשרה ופיתוח כלבים — מחיות מחמד וכלבי משפחה, דרך כלבי סיוע לפוסט טראומה (PTSD), ועד לכלבי עבודה ייעודיים לארגונים. השירות כולל הדרכה מותאמת אישית עם הגעה ישירה לביתכם באזור המרכז, לצד הכשרה מתקדמת בכלבייה המקצועית שלנו במושב סתריה (סמוך לרחובות), ישראל.",
    heroCta1: "לתיאום ייעוץ",
    heroCta2: "הכירו את המרכז",
    heroWaze: "ניווט בוויז: מושב סתריה (ליד רחובות), ישראל",

    // ניווט
    navServices: "שירותים",
    navApproach: "השיטה",
    navWhy: "היתרונות שלנו",
    navExperience: "ניסיון והסמכות",
    navTestimonials: "המלצות",
    navGallery: "גלריה",
    navAbout: "אודות",
    navContact: "צרו קשר",

    // קישורי K9
    k9BannerBadge: "חטיבת ביטחון ועבודה",
    k9BannerTitle: "מחפשים כלבי עבודה, הגנה והכשרות מבצעיות?",
    k9BannerDesc: "הכירו את Michael K9 — הזרוע הבינלאומית המתמחה באספקה, אילוף והכשרה של כלבי הגנה, שמירה וביטחון לארגונים וכוחות מיוחדים.",
    k9BannerBtn: "ביקור באתר Michael K9",
    k9CardLink: "למידע מורחב באתר Michael K9 ↗",
    
    // אודות
    aboutMainTitle: "מרכז לאילוף והעצמה כלבנית",
    aboutBadge: "הסיפור, הדרך והחזון",
    aboutHeading: "מיכאל לפושניאנסקי – למי שמחפש את הטוב ביותר",
    aboutSubheading: "למעלה משלושה עשורים של חיבור עמוק בין האדם לכלב",
    
    // סיפור
    aboutStoryTitle: "הדרך המקצועית ומקור השליחות",
    aboutStoryBody: "עולם הכלבנות עבורי הוא מפעל חיים שהחל כבר בשנת 1992. לאורך 23 שנות שירות כמאמן הכלבים הראשי של יחידת 'עוקץ' בצה״ל, הובלתי את הכשרת הכלבים והלוחמים למשימות המורכבות ביותר בביטחון המדינה, שם נבנתה ההבנה העמוקה שכלב אינו פועל מתוך כפייה, אלא מתוך קשר עמוק ואמון מוחלט במנהיג שלו. עם סיום שירותי הפיקודי, הקמתי את 'המרכז להעצמה כלבנית' במושב סתריה במטרה לקחת את הדיוק, המתודולוגיות והידע המבצעי המעמיק ביותר, ולתרגם אותם לחיים השלווים של המשפחה בבית, לליווי נפגעי פוסט-טראומה ולהכשרת כלבי עבודה ברמה הגבוהה ביותר.",

    // ציטוט
    aboutPhilosophyQuote: "״משמעת אמיתית אינה תוצאה של כוח או שליטה, אלא של ביטחון הדדי ושפה ברורה. כשהאדם לומד להוביל בשקט, הכלב בוחר ללכת בעקבותיו.״",
    aboutAuthor: "מיכאל לפושניאנסקי — מייסד ומנהל מקצועי",

    // מונים
    aboutStatExp: "שנות ניסיון והובלה",
    aboutStatExpSub: "בכלבנות מבצעית, טיפולית ואזרחית",
    aboutStatOketz: "שנים ביחידת עוקץ",
    aboutStatOketzSub: "בפיקוד, מחקר ואימון ראשי",
    aboutStatYear: "שנת תחילת הדרך",
    aboutStatYearSub: "מסורת ומקצועיות רציפה מ-1992",

    // תחומי ליבה
    aboutPillarsHeader: "תחומי המומחיות והליווי במרכז",
    aboutCore1Title: "משפחה וגורים – תקשורת וכבוד",
    aboutCore1Desc: "חינוך גורים והקניית הרגלי יסוד מגיל צעיר ללא הפחדה. בניית שפה משותפת, פתרון משיכות ברצועה והשתלבות בטוחה ונינוחה עם ילדים בבית.",
    aboutCore2Title: "איזון ושיקום התנהגותי מורכב",
    aboutCore2Desc: "אבחון וטיפול מעמיק בחרדות נטישה, תוקפנות, פחדים וקשיי הסתגלות. יישום מתודולוגיות יציבות המייצרות רוגע ומשמעת טבעית ועקבית.",
    aboutCore3Title: "מתחם סתריה – טיפול רגשי וכלבי עבודה",
    aboutCore3Desc: "מתחם כפרי רחב ידיים במושב סתריה, המשלב מרחב פתוח ושקט עם תנאי שטח מגוונים. במתחם פועל מרכז לטיפול והעצמה בעזרת כלבים ומענה רגיש לנפגעי פוסט-טראומה בהכרת משרד הרווחה, לצד הכשרת כלבי עבודה ומשימות ביטחון בסטנדרט המקצועי הגבוה ביותר.",

    // הבטחה
    aboutPromiseTitle: "ההבטחה המקצועית שלי אליכם",
    aboutPromise1: "אבחון שורשי, מעמיק ואמיתי – ללא פתרונות קסם שטחיים, או קיצורי דרך.",
    aboutPromise2: "הדרכה בגובה העיניים, והענקת ארגז כלים מעשי ומובן לכל בני הבית.",
    aboutPromise3: "זמינות, ליווי ותמיכה לאורך כל הדרך, עד להשגת שקט וביטחון מלאים.",

    // ניסיון
    expSubtitle: "ניסיון, הסמכות ורקע ביטחוני",
    expTitle: "עשרות שנות עשייה – מומחיות שנמדדת בתוצאות בשטח",
    expDesc: "הניסיון המקצועי שלנו נשען על למעלה משלושה עשורים של עבודה אינטנסיבית בשטח, מתוכם 23 שנים כמאמן הכלבים הראשי של יחידת 'עוקץ' בצה״ל. את הסטנדרטים הגבוהים, המשמעת וההבנה העמוקה של הפסיכולוגיה הכלבנית אנו רותמים כיום להכשרת חיות מחמד וכלבי משפחה, ליווי כלבי סיוע לפוסט טראומה (PTSD), ואילוף מותאם אישית – הן בהגעה ישירה לבית הלקוח באזור המרכז והן בכלבייה המקצועית שלנו במושב סתריה (סמוך לרחובות), ישראל.",
    expFooterTag: "מרכז לאילוף והעצמה כלבנית",

    // 9 כרטיסיות ניסיון
    expBadge1: "מומחיות",
    expCard1Title: "+35 שנות ניסיון",
    expCard1Desc: "המסע המקצועי החל בשנת 1992 באילוף, פיתוח והכשרת כלבים לכל משימה.",
    expBadge2: "פיקוד ומבצעי",
    expCard2Title: "23 שנות שירות בעוקץ",
    expCard2Desc: "מאמן הכלבים הראשי של יחידת 'עוקץ' בצה״ל – הובלת תורות לחימה והכשרה מבצעית.",
    expBadge3: "מתחם ייעודי",
    expCard3Title: "המרכז להעצמה כלבנית",
    expCard3Desc: "מרכז מקצועי לאילוף, הכשרה ופיתוח כלבים וכלבייה מרווחת ומקצועית בסביבה פתוחה בסתריה.",
    expBadge4: "הכרה ממלכתית",
    expCard4Title: "הכרת משרד הרווחה",
    expCard4Desc: "הכשרת כלבי סיוע בהכרה מלאה של משרד הרווחה והביטחון החברתי.",
    expBadge5: "שיקום ונפש",
    expCard5Title: "כלבי שירות ופוסט טראומה",
    expCard5Desc: "התמחות במצבים מורכבים, בדגש על סיוע, הרגעה והענקת עצמאות לנפגעי פוסט טראומה (PTSD).",
    expBadge6: "בינלאומי",
    expCard6Title: "שופט FCI בינלאומי",
    expCard6Desc: "שופט מוסמך מטעם הפדרציה הבינלאומית לכלבנות (FCI) למבחני כלבי עבודה.",
    expBadge7: "מיונים מתקדמים",
    expCard7Title: "בחירה למשימות מיוחדות",
    expCard7Desc: "איתור, הערכה והכשרת כלבים לפי סטנדרטים מהגבוהים ביותר בעולם הכלבנות המקצועית.",
    expBadge8: "הוקרה מיוחדת",
    expCard8Title: "פרס הישגי חיים",
    expCard8Desc: "הוקרה על תרומה יוצאת דופן לפיתוח תחום הכלבנות המקצועית, האזרחית והביטחונית בישראל.",
    expBadge9: "ביטחון לאומי",
    expCard9Title: "פרס ביטחון ישראל",
    expCard9Desc: "שותפות בפרויקטים ביטחוניים פורצי דרך ומורכבים שזכו בפרס ביטחון ישראל.",

    // גלריה + תגיות ALT
    galSubtitle: "תיעוד והצצה לעשייה בשטח",
    galTitle: "גלריית תמונות וסרטונים",
    galDesc: "הצצה מעשית לשיטות העבודה שלנו עם כלבי משפחה, כלבי עבודה וכלבי סיוע.",
    galFilterAll: "הכל",
    galFilterFamily: "כלבי משפחה",
    galFilterWorking: "עבודה והגנה",
    galFilterAssistance: "כלבי סיוע",
    galCap1: "אימון משמעת מתקדם",
    galAlt1: "מיכאל לפושניאנסקי באימון משמעת מתקדם לכלב משפחה",
    galCap2: "עבודת פוקוס והכשרת הגנה",
    galAlt2: "הכשרת כלבי הגנה ועבודת פוקוס במגרש האילוף במושב סתריה",
    galCap3: "הטמעת הרגלי התנהגות במרחב האמיתי",
    galAlt3: "תרגול הרגלי התנהגות ורצועה לכלב בסביבה עירונית במרכז הארץ",
    galCap4: "ליווי כלב סיוע לפוסט טראומה",
    galAlt4: "הדרכה וליווי של כלב סיוע לפוסט טראומה (PTSD)",
    galCap5: "עבודה מבצעית ומשמעת מדויקת",
    galAlt5: "אילוף כלבי עבודה ומשמעת מדויקת בתנאי שטח",
    galCap6: "התאמת גורים ושילוב במשפחה",
    galAlt6: "חינוך גורים והדרכת שילוב נכון בבית המשפחה",

    // השיטה
    apprSubtitle: "שיטת העבודה והאימון",
    apprTitle: "עקרונות הברזל שלנו – מהבנה ועד תוצאה מוכחת בשטח",
    apprDesc: "אנחנו לא מאמינים בפתרונות קסם שטחיים. תהליך האילוף נשען על קריאה מדויקת של הכלב, בניית אמון ותרגול מובנה שמחזיק מעמד לאורך שנים.",
    apprStep1Num: "01", 
    apprStep1Title: "אבחון והבנת האופי", 
    apprStep1Desc: "מיפוי יסודי של צרכי הכלב, דפוסי ההתנהגות והדינמיקה בבית ובמשפחה.",
    apprStep1Tag: "מיפוי והתאמה אישית",

    apprStep2Num: "02", 
    apprStep2Title: "תקשורת וכבוד הדדי", 
    apprStep2Desc: "בניית שפה ברורה בין הבעלים לכלב, מתוך הקשבה ואמון ולא מתוך פחד.",
    apprStep2Tag: "ביסוס שפה משותפת",

    apprStep3Num: "03", 
    apprStep3Title: "תרגול בסביבה האמיתית", 
    apprStep3Desc: "יישום המשמעת בבית, ברחוב ובמצבי גירוי שונים עד להטמעה מלאה.",
    apprStep3Tag: "יישום בשטח ובבית",

    apprStep4Num: "04", 
    apprStep4Title: "שקט וביטחון לכל החיים", 
    apprStep4Desc: "יצירת שגרה יציבה המעניקה לכלב רוגע ולבעלים שליטה מלאה ובטוחה.",
    apprStep4Tag: "תוצאה שנשמרת לחיים",

    ctaTitle: "כלב עם פוטנציאל הוא רק ההתחלה.",
    ctaDesc: "יחד נבנה את הדרך הנכונה עבורכם ועבור הכלב שלכם – בדיוק, באמון ובסטנדרט שלא מתפשר.",
    ctaBtn: "לתיאום ייעוץ",

    // יצירת קשר
    contactSub: "יצירת קשר ותיאום",
    contactTitle: "לתיאום ייעוץ מקצועי.",
    contactDesc: "ספרו בקצרה מה הצורך – אילוף, כלב עבודה, כלב שירות או בחירת כלב – ונחזור אליכם.",
    contactName: "שם",
    contactNamePlaceholder: "ישראל ישראלי",
    contactPhone: "טלפון",
    contactMessage: "פרטי הפנייה",
    contactMessagePlaceholder: "ספרו בקצרה על הכלב ומה הצורך (אילוף בסיסי, בעיות התנהגות, כלב סיוע, גיל וסוג הכלב)...",
    contactSubmit: "שליחה",
    contactDirectAnswer: "מענה ישיר בוואטסאפ או בטלפון בכל ימות השבוע",

    // המלצות
    testiSubtitle: "המלצות וסיפורי הצלחה מהשטח",
    testiTitle: "קולות שהגיעו מהשטח.",
    t1Role: "כלב פוסט טראומה",
    t1Quote: "מיכאל פשוט שינה לנו את החיים. הכלב עכשיו רגוע, קשוב ומעניק לי ביטחון אמיתי שמלווה אותי כל היום.",
    t2Role: "חיות מחמד - משפחת כהן",
    t2Quote: "ניסינו המון מאלפים לפנינו, אבל הגישה למשמעת וכבוד הדדי פשוט עשתה קסמים עם הרועה הבלגי שלנו.",
    t3Role: "ארגון ביטחוני",
    t3Quote: "הסטנדרט המקצועי הוא חסר פשרות. הכלבים שלנו הגיעו לרמות ביצוע יוצאות דופן בסביבה מורכבת.",
    t4Role: "כלב משפחה",
    t4Quote: "הגעה עד הבית, הסבר סבלני ותוצאות כבר מהמפגש הראשון. עכשיו אפשר לטייל עם הכלב בכיף בלי שהוא ימשוך ברצועה.",

    // יתרונות
    whySubtitle: "היתרון והייחוד שלנו",
    whyTitle: "מומחיות בבניית קשר שמחזיק לכל החיים.",
    why1Title: "החיבור המדויק לאדם",
    why1Text: "כלב הוא לא מכונה. אנו מתמחים בבניית קשר של אמון, כבוד הדדי ומשמעת, שהופכים כל כלב לבן משפחה ממושמע ומאושר.",
    why2Title: "ליווי אישי עד הבית",
    why2Text: "אנו מספקים שירותי אילוף באזור המרכז, מגיעים ישירות לסביבה הטבעית של הכלב כדי לפתור בעיות התנהגות ולבנות שגרה נכונה.",
    why3Title: "מצוינות ללא פשרות",
    why3Text: "הניסיון שנבנה במצבי קיצון וביחידות המיוחדות מיושם כיום באילוף כלבי משפחה, כלבי שירות ופוסט טראומה.",
    why4Title: "מתחם אימונים מרווח",
    why4Text: "הכלבייה שלנו תוכננה בקפידה כדי לספק מרחב בטוח, גדול ומקצועי, המותאם בצורה מושלמת לכל סוגי האילוף.",

    // שירותים
    srvSubtitle: "תחומי ההתמחות וההכשרה",
    srvTitle: "מהמשפחה בבית ועד למשימות המיוחדות בשטח.",
    srv1Title: "כלבי משפחה וחיות מחמד",
    srv1_1: "אילוף משמעת בסיסית ומתקדמת",
    srv1_2: "פתרון בעיות התנהגות בבית ובחוץ",
    srv1_3: "אילוף בכלבייה בסתריה או בבית הלקוח במרכז",
    srv1_4: "חיבור נכון לילדים ולמשפחה",
    srv2Title: "כלבי סיוע לפוסט טראומה",
    srv2_1: "איתור ומיון קפדני של הכלב המתאים",
    srv2_2: "הכשרה לזיהוי והרגעת התקפי חרדה",
    srv2_3: "בניית קשר המעניק ביטחון יומיומי",
    srv2_4: "ליווי אישי לחזרה לחיים עצמאיים",
    srv3Title: "כלבי עבודה ואבטחה",
    srv3_1: "הכשרת כלבי הגנה ושמירה",
    srv3_2: "אילוף מתקדם למשימות ייעודיות",
    srv3_3: "ליווי מקצועי לכוחות הביטחון ולארגונים",
    srv3_4: "23 שנות ניסיון כיסוד מקצועי",
    srvLink: "לפרטים ותיאום",

    // פוטר
    ftDesc: "אילוף כלבים במרכז הארץ – הגעה לבית הלקוח במרכז, או כלבייה במושב סתריה (סמוך לרחובות), ישראל.",
    ftNav: "ניווט מהיר",
    ftSrv: "שירותים",
    ftContact: "צור קשר",
    ftConsult: "לתיאום ייעוץ בוואטסאפ",
    ftRights: "כל הזכויות שמורות.",
    ftSrv1: "אילוף כלבים",
    ftSrv2: "כלבי עבודה",
    ftSrv3: "כלבי שירות",
    ftSrv4: "כלבי סיוע לפוסט טראומה",
    ftSrv5: "בחירת כלבים",
    ftSrv6: "ייעוץ מקצועי",

    whatsappMsg: "היי מיכאל, הגעתי מהאתר ואשמח להתייעץ",
    
   // FAQ (שאלות נפוצות)
   faqBadge: "שאלות נפוצות",
   faqTitle: "כל מה שחשוב לדעת על תהליך האילוף",
   faq1Question: "באילו ערים ואזורים אתם מעניקים שירות?",
   faq1Answer: "מרכז האילוף המקצועי שלנו ממוקם במושב סתריה (סמוך לרחובות), ומספק מרחב אימונים מרווח, בטוח ומאובזר ללקוחות מכל רחבי הארץ. בנוסף, אנו מעניקים שירותי אילוף אישיים עם הגעה ישירה עד בית הלקוח בפריסה רחבה בערים רחובות, נס ציונה, ראשון לציון, באר יעקב, רמלה, יבנה, חולון, בת ים, תל אביב, גבעתיים, רמת גן והסביבה.",   faq2Question: "באיזה גיל מומלץ להתחיל לאלף גור?",
   faq2Answer: "מומלץ להתחיל בחינוך גורים כבר מגיל חודשיים עד שלושה, מרגע ההגעה הביתה. עבודה נכונה על חשיפה סביבתית, חינוך לצרכים והצבת גבולות מונעת בעיות התנהגות קשות בעתיד.",
   faq3Question: "האם ניתן לאלף כלב בוגר עם בעיות התנהגות מורכבות?",
   faq3Answer: "בהחלט. כלבים לומדים בכל גיל. בעזרת אבחון מדויק, שיטות עבודה מוכחות ותקשורת נכונה, ניתן לטפל בחרדות, תוקפנות, משיכות ברצועה והרגלים לא רצויים גם בכלבים בוגרים.",
   faq4Question: "מה היתרון באילוף בבית הלקוח מול אילוף במגרש בסתריה?",
   faq4Answer: "אילוף בבית מתמקד בסביבה הטבעית של הכלב (קבלת אורחים, טיולים ברחוב, שקט בבית). המגרש בסתריה מעניק מרחב מקצועי ומאובטח לעבודה מתקדמת, עבודה עם הסחות דעת, פקודות מרחוק ושיקום התנהגותי מעמיק.",
   faq5Question: "האם יש לכם ניסיון בהכשרת כלבי סיוע לפוסט טראומה (PTSD)?",
  },

  en: {
    brandName: "Canine Empowerment Center",
    brandSubtitle: "Michael Lapushniansky",
    phoneDisplay: "052-255-2487",
    skipLink: "Skip to content",
    
    // Hero
    heroBadge1: "35+ Years Experience",
    heroBadge2: "Spacious and professionally equipped kennel",
    heroMainHeading: "Canine Training & Empowerment Center",
    heroTitle: "Expertise built in the field. Precision measured by results.",
    heroSubtitle: "Advanced Obedience · Family Pets · Service & PTSD Dogs · Working Dog Training",
    heroDesc: "Michael Lapushniansky delivers an uncompromising standard in canine training, conditioning, and development—from family pets and PTSD service dogs to specialized working dogs for organizations. We provide customized training directly at your home across Central Israel, alongside advanced programs at our professional kennel in Moshav Sitria (near Rehovot), Israel.",
    heroCta1: "Book Consultation",
    heroCta2: "Meet Us",
    heroWaze: "Navigate on Waze: Moshav Sitria (near Rehovot), Israel",

    k9BannerBadge: "Security & Tactical Division",
    k9BannerTitle: "Looking for Working, Protection & Tactical Dogs?",
    k9BannerDesc: "Discover Michael K9 — the specialized international division for training and sourcing working, protection, and security dogs for organizations and law enforcement.",
    k9BannerBtn: "Visit Michael K9 Website",
    k9CardLink: "Learn more at Michael K9 ↗",

    navServices: "Services",
    navApproach: "Method",
    navWhy: "Why Us",
    navExperience: "Experience",
    navTestimonials: "Reviews",
    navGallery: "Gallery",
    navAbout: "About",
    navContact: "Contact",

    aboutMainTitle: "Canine Training & Empowerment Center",
    aboutBadge: "Our Story, Heritage & Mission",
    aboutHeading: "Michael Lapushniansky – For Those Who Demand the Best",
    aboutSubheading: "Over Three Decades of Deep Human-Canine Connection",
    
    aboutStoryTitle: "A Life Dedicated to Canine Mastery",
    aboutStoryBody: "The canine world has been my lifelong vocation since 1992. Over 23 years of serving as Chief Dog Trainer of the IDF's elite 'Oketz' unit, I spearheaded operational training for the nation's most sensitive defense missions, where I forged the truth that a dog never works through intimidation, but through mutual calm and total trust. After concluding my command, I established the Canine Empowerment Center in Moshav Sitria to take that uncompromising operational precision, discipline, and behavioral mastery and translate them into peaceful household routines, life-changing PTSD support partnerships, and top-tier working dog training.",

    aboutPhilosophyQuote: "“True discipline is never the result of force or control, but of mutual security and clear communication. When a human leads with calm certainty, the dog naturally chooses to follow.”",
    aboutAuthor: "Michael Lapushniansky — Founder & Head Master Trainer",

    aboutStatExp: "Years of Leadership",
    aboutStatExpSub: "In operational, service, and pet cynology",
    aboutStatOketz: "Years in Oketz Elite Unit",
    aboutStatOketzSub: "Head instructor, tactical research & command",
    aboutStatYear: "Journey Began",
    aboutStatYearSub: "Continuous professional pedigree since 1992",

    aboutPillarsHeader: "Core Pillars of Expertise",
    aboutCore1Title: "Family & Puppies – Trust & Respect",
    aboutCore1Desc: "Early foundation habits without intimidation. Clear shared language, calm leash behavior, and harmonious integration with children at home.",
    aboutCore2Title: "Complex Behavioral Rehabilitation",
    aboutCore2Desc: "Deep assessment and recovery for separation anxiety, reactivity, environmental phobias, and stress, creating lasting emotional stability.",
    aboutCore3Title: "Sitria Center – Emotional Therapy & Working Dogs",
    aboutCore3Desc: "A spacious rural ground in Moshav Sitria combining peaceful nature with varied terrain. The facility houses canine-assisted therapy and emotional empowerment for PTSD individuals accredited by the Ministry of Welfare, alongside advanced working and security dog training at the highest professional standard.",

    aboutPromiseTitle: "Our Professional Commitment to You",
    aboutPromise1: "Thorough root-cause analysis — no superficial quick fixes or temporary shortcuts.",
    aboutPromise2: "Transparent, respectful guidance, equipping your entire family with practical, easy-to-apply tools.",
    aboutPromise3: "Continuous dedication, guidance, and backing along the way, until full household peace and confidence are achieved.",

    expSubtitle: "Field Credentials & Background",
    expTitle: "Decades of Action – Expertise Measured by Field Results",
    expDesc: "Our professional experience is backed by over three decades of rigorous field expertise, including 23 years as the Chief Dog Trainer of the IDF's elite 'Oketz' canine unit. Today, we apply these uncompromising standards to family dogs across Central Israel and at our kennel in Sitria.",
    expFooterTag: "Canine Empowerment Center",

    expBadge1: "Expertise",
    expCard1Title: "35+ Years of Experience",
    expCard1Desc: "The professional journey began in 1992 with comprehensive training, development, and conditioning.",
    expBadge2: "Elite Command",
    expCard2Title: "23 Years of Service in Oketz",
    expCard2Desc: "Chief Dog Trainer of the IDF's elite 'Oketz' canine unit, leading tactical doctrines and operational preparation.",
    expBadge3: "Facility",
    expCard3Title: "Canine Empowerment Center",
    expCard3Desc: "A dedicated center for training, rehabilitation, and boarding in an expansive outdoor setting in Sitria.",
    expBadge4: "Accreditation",
    expCard4Title: "Ministry of Welfare Recognition",
    expCard4Desc: "Full certification and recognition from the Ministry of Welfare and Social Affairs for service dogs.",
    expBadge5: "Specialization",
    expCard5Title: "PTSD & Service Dogs",
    expCard5Desc: "Expertise in complex behavioral support, focusing on calming trauma triggers and restoring independence.",
    expBadge6: "International",
    expCard6Title: "International FCI Judge",
    expCard6Desc: "Certified international judge on behalf of the Fédération Cynologique Internationale (FCI) for working dogs.",
    expBadge7: "Selection",
    expCard7Title: "Elite Mission Selection",
    expCard7Desc: "Sourcing, testing, and training dogs according to the highest global operational standards.",
    expBadge8: "Honors",
    expCard8Title: "Lifetime Achievement Award",
    expCard8Desc: "Awarded for exceptional contributions to the development of civil and security canine fields in Israel.",
    expBadge9: "National Award",
    expCard9Title: "Israel Defense Prize",
    expCard9Desc: "Direct partnership in classified, breakthrough defense projects honored with the Israel Defense Prize.",

    galSubtitle: "Field Actions & Showcase",
    galTitle: "Photo & Video Gallery",
    galDesc: "A glimpse into our working methods with pets, working dogs, and service dogs.",
    galFilterAll: "All",
    galFilterFamily: "Family Dogs",
    galFilterWorking: "Working & Protection",
    galFilterAssistance: "Assistance Dogs",
    galCap1: "Advanced Obedience Training",
    galAlt1: "Michael Lapushniansky conducting advanced obedience training with a family dog",
    galCap2: "Focus Work & Protection Drills",
    galAlt2: "Protection and focus work at the training facility in Sitria",
    galCap3: "Real-World Behavioral Conditioning",
    galAlt3: "Real-world behavioral leash habituation in an urban setting",
    galCap4: "PTSD Assistance Dog Guidance",
    galAlt4: "Guiding and training a PTSD assistance service dog",
    galCap5: "Operational Work & Precision Discipline",
    galAlt5: "Operational working dog training and discipline drills",
    galCap6: "Puppy Selection & Family Integration",
    galAlt6: "Puppy foundation education and family home integration",

    apprSubtitle: "Methodology & Principles",
    apprTitle: "Core Principles – From Understanding to Proven Results",
    apprDesc: "We don't believe in superficial shortcuts. Our training method is grounded in precise behavioral reading, trust-building, and structured practice that lasts.",
    apprStep1Num: "01", 
    apprStep1Title: "Assessment & Diagnosis", 
    apprStep1Desc: "A thorough evaluation of the dog's personality, triggers, and family dynamics.",
    apprStep1Tag: "Assessment & Tailored Plan",

    apprStep2Num: "02", 
    apprStep2Title: "Communication & Trust", 
    apprStep2Desc: "Establishing a clear shared language based on mutual respect rather than fear.",
    apprStep2Tag: "Shared Language & Trust",

    apprStep3Num: "03", 
    apprStep3Title: "Real-World Application", 
    apprStep3Desc: "Implementing habits at home, on the street, and amidst real distractions.",
    apprStep3Tag: "Real-Life Integration",

    apprStep4Num: "04", 
    apprStep4Title: "Lifelong Balance & Peace", 
    apprStep4Desc: "Achieving a calm, reliable dog and complete confidence for the owner.",
    apprStep4Tag: "Lifelong Balance",

    ctaTitle: "A dog with potential is just the beginning.",
    ctaDesc: "Together we will build the right path for you and your dog - with precision, trust, and an uncompromising standard.",
    ctaBtn: "Book Consultation",

    contactSub: "Get In Touch",
    contactTitle: "Book a professional consultation.",
    contactDesc: "Tell us briefly what you need - training, working dog, service dog, or dog selection - and we'll get back to you.",
    contactName: "Name",
    contactNamePlaceholder: "John Doe",
    contactPhone: "Phone",
    contactMessage: "Message / Details",
    contactMessagePlaceholder: "Tell us briefly about your dog and needs...",
    contactSubmit: "Submit",
    contactDirectAnswer: "Direct response via WhatsApp or phone 7 days a week",

    testiSubtitle: "Field Testimonials & Reviews",
    testiTitle: "Voices from the field.",
    t1Role: "PTSD Assistance Dog",
    t1Quote: "Michael simply changed our lives. The dog is now calm, attentive, and gives me real confidence throughout the day.",
    t2Role: "Family Pet - Cohen Family",
    t2Quote: "We tried many trainers before, but this approach to discipline worked magic with our dog.",
    t3Role: "Security Org",
    t3Quote: "The professional standard is uncompromising. Our dogs reached exceptional performance levels.",
    t4Role: "Family Dog",
    t4Quote: "Home visits, patient explanations, and results from the first session. Walking the dog is now a pleasure.",

    whySubtitle: "Our Proven Advantage",
    whyTitle: "Expertise in building a lifelong bond.",
    why1Title: "Perfect Connection",
    why1Text: "A dog is not a machine. We specialize in building a bond of trust, mutual respect, and understanding.",
    why2Title: "In-Home Guidance",
    why2Text: "We provide training services in central Israel directly at your home to solve behavioral issues.",
    why3Title: "Uncompromising Excellence",
    why3Text: "Experience built in extreme situations is now applied to family dogs, service dogs, and PTSD dogs.",
    why4Title: "Spacious Facility",
    why4Text: "Our kennel is meticulously designed to provide a safe, large, and professional space.",

    srvSubtitle: "Specializations & Training",
    srvTitle: "From the family home to special field missions.",
    srv1Title: "Family Dogs & Pets",
    srv1_1: "Basic and advanced obedience",
    srv1_2: "Solving behavioral issues indoors and outdoors",
    srv1_3: "Dog training at the kennel in Sitria or in-home across Central Israel",
    srv1_4: "Proper integration with children and family",
    srv2Title: "PTSD Assistance Dogs",
    srv2_1: "Careful screening and selection of the dog",
    srv2_2: "Training to identify and calm anxiety attacks",
    srv2_3: "Building a bond that provides daily security",
    srv2_4: "Personal guidance for regaining independence",
    srv3Title: "Working & Security Dogs",
    srv3_1: "Training protection and guard dogs",
    srv3_2: "Advanced training for designated missions",
    srv3_3: "Professional guidance for security forces",
    srv3_4: "23 years of experience as a professional foundation",
    srvLink: "Details and consultation",

    ftDesc: "Dog training in Central Israel – in-home visits across the center, or at our facility in Sitria (near Rehovot), Israel.",
    ftNav: "Navigation",
    ftSrv: "Services",
    ftContact: "Contact Us",
    ftConsult: "Book consultation via WhatsApp",
    ftRights: "All rights reserved.",
    ftSrv1: "Dog Training",
    ftSrv2: "Working Dogs",
    ftSrv3: "Service Dogs",
    ftSrv4: "PTSD Dogs",
    ftSrv5: "Dog Selection",
    ftSrv6: "Consulting",

    whatsappMsg: "Hi, I reached you from the website and would like to consult.",
    
    // FAQ
    faqBadge: "Frequently Asked Questions",
    faqTitle: "Everything You Need to Know About the Training Process",
    faq1Question: "Which areas and cities do you serve?",
    faq1Answer: "Our professional training center is located in Moshav Sitria (adjacent to Rehovot), offering an expansive and secure facility for clients nationwide. In addition, we provide personalized in-home dog training services directly at the client's home across Rehovot, Ness Ziona, Rishon LeZion, Beer Yaakov, Ramla, Yavne, Holon, Bat Yam, Tel Aviv, Givatayim, Ramat Gan, and surrounding areas.",    faq2Question: "What is the recommended age to start puppy training?",
    faq2Answer: "We recommend starting as early as 2 to 3 months of age. Early socialization, potty training, and clear boundary setting prevent deep behavioral issues later in life.",
    faq3Question: "Can adult dogs with severe behavioral problems be trained?",
    faq3Answer: "Absolutely. Dogs can learn at any age. With accurate diagnostic assessment and proven positive behavioral conditioning, aggression, anxiety, and leash reactivity can be successfully corrected.",
    faq4Question: "What is the advantage of in-home training vs. our facility in Sitria?",
    faq4Answer: "In-home training tackles real daily habits (door manners, neighborhood leash walks), while our Sitria facility provides a safe, distraction-rich environment for advanced focus and off-leash control.",
    faq5Question: "Do you have experience in PTSD and emotional support service dogs?",
    faq5Answer: "Yes. With over 35 years in canine defense and working dog training, Michael specializes in custom-tailored preparation of PTSD service dogs for anxiety alleviation and personal support.",
  },

  ru: {
    brandName: "Михаэль Лапушнянский",
    brandSubtitle: "Михаэль Лапушнянский",
    phoneDisplay: "052-255-2487",
    skipLink: "Перейти к контенту",
    
    // Hero
    heroBadge1: "Более 35 лет опыта",
    heroBadge2: "Просторный и профессионально оборудованный питомник",
    heroMainHeading: "Центр дрессировки и развития собак",
    heroTitle: "Опыт, созданный на практике. Точность результатов.",
    heroSubtitle: "Профессиональная дрессировка · Семейные собаки · Собаки-помощники · Служебные собаки",
    heroDesc: "Михаэль Лапушнянский задает бескомпромиссный стандарт в дрессировке, подготовке и развитии собак — от домашних питомцев и служебных собак при ПТСР до специализированных рабочих собак для организаций. Услуги включают индивидуальные занятия с выездом на дом в центре Израиля, а также углубленную подготовку в нашем профессиональном питомнике в мошаве Ситрия (возле Реховота), Израиль.",
    heroCta1: "Записаться",
    heroCta2: "О Центре",
    heroWaze: "Waze: Мошав Ситрия (возле Реховота), Израиль",

    k9BannerBadge: "Подразделение безопасности и службы",
    k9BannerTitle: "Ищете рабочих, защитных и караульных собак?",
    k9BannerDesc: "Посетите Michael K9 — международное подразделение по отбору, подготовке и дрессировке рабочих и служебных собак для охранных структур и спецподразделений.",
    k9BannerBtn: "Перейти на сайт Michael K9",
    k9CardLink: "Подробнее на сайте Michael K9 ↗",

    navServices: "Услуги",
    navApproach: "Методика",
    navWhy: "Преимущества",
    navExperience: "Опыт",
    navTestimonials: "Отзывы",
    navGallery: "Галерея",
    navAbout: "О нас",
    navContact: "Контакты",

    aboutMainTitle: "Центр дрессировки и развития собак",
    aboutBadge: "История, путь и призвание",
    aboutHeading: "Михаэль Лапушнянский – Для тех, кто выбирает лучшее",
    aboutSubheading: "Более трех десятилетий глубокого единения человека и собаки",
    
    aboutStoryTitle: "Профессиональный путь и главное призвание",
    aboutStoryBody: "Мир кинологии для меня — дело всей жизни, начатое еще в 1992 году. За 23 года службы главным инструктором элитного спецподразделения ЦАХАЛ «Окец» я руководил подготовкой собак и бойцов к сложнейшим задачам госбезопасности, где сформировалось главное правило: собака работает не из страха, а благодаря искреннему доверию и спокойной уверенности в проводнике. Завершив службу, я открыл «Центр кинологического развития» в Ситрии, чтобы перенести эту высочайшую точность, дисциплину и мастерство в спокойную жизнь семьи, в реабилитацию при ПТСР и в подготовку рабочих собак высочайшего класса.",

    aboutPhilosophyQuote: "«Истинная дисциплина возникает не из силы или контроля, а из взаимного доверия и ясного диалога. Когда человек ведет со спокойной уверенностью, собака сама выбирает следовать за ним.»",
    aboutAuthor: "Михаэль Лапушнянский — основатель и главный тренер",

    aboutStatExp: "Лет опыта и лидерства",
    aboutStatExpSub: "В боевой, служебной и семейной кинологии",
    aboutStatOketz: "Лет в спецназе «Окец»",
    aboutStatOketzSub: "Главный инструктор и командир подготовки",
    aboutStatYear: "Начало пути",
    aboutStatYearSub: "Непрерывный опыт и традиции с 1992 года",

    aboutPillarsHeader: "Ключевые направления работы центра",
    aboutCore1Title: "Семья и щенки – Доверие и контакт",
    aboutCore1Desc: "Воспитание правильных привычек с первых месяцев без запугивания. Общий язык, спокойный поводок и гармоничная жизнь с детьми дома.",
    aboutCore2Title: "Коррекция сложного поведения",
    aboutCore2Desc: "Глубокая работа со страхами, тревогой разлуки и агрессией. Надежные методы, возвращающие собаке эмоциональный баланс и предсказуемость.",
    aboutCore3Title: "База в Ситрии – Терапия и служебные собаки",
    aboutCore3Desc: "Просторный загородный комплекс в Ситрии, объединяющий спокойствие природы и разнообразие рельефа. Здесь действует центр эмоциональной поддержки и канистерапии для людей с ПТСР с признанием Минсобеса, а также ведется подготовка служебных собак на высочайшем профессиональном уровне.",

    aboutPromiseTitle: "Мое профессиональное обязательство перед вами",
    aboutPromise1: "Глубокий анализ истинных причин поведения — без поверхностных иллюзий и коротких путей.",
    aboutPromise2: "Понятные и практичные инструменты для каждого члена вашей семьи, на равных.",
    aboutPromise3: "Постоянное сопровождение и связь на всем пути, до достижения полного спокойствия и уверенности.",

    expSubtitle: "Практический опыт и квалификация",
    expTitle: "Десятилетия практики – Экспертиза, проверенная результатами",
    expDesc: "Наш опыт основан на более чем тридцатилетней практической работе, включая 23 года в должности главного кинолога элитного подразделения ЦАХАЛ «Окец».",
    expFooterTag: "Центр дрессировки и развития собак",

    expBadge1: "Опыт",
    expCard1Title: "Более 35 лет опыта",
    expCard1Desc: "Профессиональный путь начался в 1992 году с дрессировки и подготовки собак для самых сложных задач.",
    expBadge2: "Спецназ",
    expCard2Title: "23 года службы в «Окец»",
    expCard2Desc: "Главный кинолог элитного подразделения ЦАХАЛ «Окец», руководивший разработкой методик и боевой подготовкой.",
    expBadge3: "База",
    expCard3Title: "Центр кинологического развития",
    expCard3Desc: "Профессиональный центр дрессировки и просторный питомник на открытом пространстве в Ситрии.",
    expBadge4: "Лицензия",
    expCard4Title: "Признание Минсобеса Израиля",
    expCard4Desc: "Подготовка собак-помощников с полным официальным признанием Министерства социального обеспечения.",
    expBadge5: "Реабилитация",
    expCard5Title: "Собаки-помощники при ПТСР",
    expCard5Desc: "Специализация на сложных психологических состояниях, помощь в снятии тревоги и обретении независимости.",
    expBadge6: "FCI",
    expCard6Title: "Международный судья FCI",
    expCard6Desc: "Сертифицированный международный судья Международной кинологической федерации (FCI) по рабочим собакам.",
    expBadge7: "Селекция",
    expCard7Title: "Отбор для спецопераций",
    expCard7Desc: "Поиск, оценка и подготовка собак по высочайшим мировым стандартам кинологии.",
    expBadge8: "Награда",
    expCard8Title: "Премия за жизненные достижения",
    expCard8Desc: "Признание выдающегося вклада в развитие профессиональной, гражданской и военной кинологии в Израиле.",
    expBadge9: "Госнаграда",
    expCard9Title: "Премия безопасности Израиля",
    expCard9Desc: "Участие в прорывных оборонных проектах, удостоенных высшей Премии безопасности Израиля.",

    galSubtitle: "Фото и видеоматериалы",
    galTitle: "Документация с мест",
    galDesc: "Взгляд на наши методы работы с питомцами и служебными собаками.",
    galFilterAll: "Все",
    galFilterFamily: "Семейные собаки",
    galFilterWorking: "Работа и защита",
    galFilterAssistance: "Собаки-помощники",
    galCap1: "Продвинутая дрессировка на послушание",
    galAlt1: "Продвинутая дрессировка собаки на послушание с Михаэлем",
    galCap2: "Концентрация внимания и защитная работа",
    galAlt2: "Отработка концентрации и защитной работы на площадке",
    galCap3: "Закрепление привычек в реальной обстановке",
    galAlt3: "Адаптация поведения собаки к городской среде",
    galCap4: "Подготовка собаки-помощника при ПТСР",
    galAlt4: "Подготовка служебной собаки-помощника при ПТСР",
    galCap5: "Оперативная работа и четкая дисциплина",
    galAlt5: "Дрессировка рабочих собак и строгая дисциплина",
    galCap6: "Подбор щенков и социализация в семье",
    galAlt6: "Воспитание щенков и социализация в семье",

    apprSubtitle: "Методика и принципы воспитания",
    apprTitle: "Ключевые принципы – От понимания к стойкому результату",
    apprDesc: "Мы не верим в поверхностные шаблоны. Воспитание собаки строится на точном чтении поведения, доверии и последовательной практике.",
    apprStep1Num: "01", 
    apprStep1Title: "Диагностика и анализ", 
    apprStep1Desc: "Глубокая оценка характера собаки, триггеров и взаимоотношений в семье.",
    apprStep1Tag: "Анализ и индивидуальный план",

    apprStep2Num: "02", 
    apprStep2Title: "Контакт и доверие", 
    apprStep2Desc: "Создание понятного языка общения на основе взаимного уважения, а не страха.",
    apprStep2Tag: "Общий язык и доверие",

    apprStep3Num: "03", 
    apprStep3Title: "Практика в реальной среде", 
    apprStep3Desc: "Закрепление навыков дома, на прогулке и при внешних раздражителях.",
    apprStep3Tag: "Практика в реальной жизни",

    apprStep4Num: "04", 
    apprStep4Title: "Спокойствие на всю жизнь", 
    apprStep4Desc: "Стабильное и предсказуемое поведение собаки, дарящее уверенность владельцу.",
    apprStep4Tag: "Результат на всю жизнь",

    ctaTitle: "Собака с потенциалом — это только начало.",
    ctaDesc: "Вместе мы построим правильный путь для вас и вашей собаки — с точностью, доверием и бескомпромиссным стандартом.",
    ctaBtn: "Записаться на консультацию",

    contactSub: "Контакты и запись",
    contactTitle: "Записаться на профессиональную консультацию.",
    contactDesc: "Коротко расскажите, что вам нужно — дрессировка, служебная собака или выбор щенка.",
    contactName: "Имя",
    contactNamePlaceholder: "Иван Иванов",
    contactPhone: "Телефон",
    contactMessage: "Детали обращения",
    contactMessagePlaceholder: "Кратко расскажите о вашей собаке и пожеланиях...",
    contactSubmit: "Отправить",
    contactDirectAnswer: "Прямая связь в WhatsApp или по телефону всю неделю",

    testiSubtitle: "Реальные отзывы клиентов",
    testiTitle: "Голоса с мест.",
    t1Role: "Собака (ПТСР)",
    t1Quote: "Михаэль изменил нашу жизнь. Собака теперь спокойна и дает мне уверенность на весь день.",
    t2Role: "Питомец",
    t2Quote: "Этот подход к дисциплине сотворил чудо с нашей бельгийской овчаркой.",
    t3Role: "Охрана",
    t3Quote: "Бескомпромиссный стандарт. Собаки достигли исключительных результатов.",
    t4Role: "Семейная собака",
    t4Quote: "Выезд на дом, терпеливые объяснения и результаты с первой встречи. Гулять с собакой теперь удовольствие.",

    whySubtitle: "Ключевые преимущества центра",
    whyTitle: "Опыт в создании связи на всю жизнь.",
    why1Title: "Идеальная связь",
    why1Text: "Собака — не машина. Мы создаем связь на основе доверия, взаимного уважения и дисциплины.",
    why2Title: "На дому",
    why2Text: "Мы предоставляем услуги в центре, приезжая в привычную среду собаки для решения проблем поведения.",
    why3Title: "Бескомпромиссное качество",
    why3Text: "Опыт спецподразделений успешно применяется для семейных собак и собак-помощников.",
    why4Title: "Просторный центр",
    why4Text: "Наш питомник спроектирован так, чтобы обеспечить большое и безопасное пространство.",

    srvSubtitle: "Специализации и программы обучения",
    srvTitle: "От семейного дома до спецзаданий.",
    srv1Title: "Семейные собаки и питомцы",
    srv1_1: "Базовое и продвинутое послушание",
    srv1_2: "Решение проблем поведения дома и на улице",
    srv1_3: "Дрессировка на базе в Ситрии или с выездом на дом в центре",
    srv1_4: "Правильная интеграция с детьми и семьей",
    srv2Title: "Собаки-помощники (ПТСР)",
    srv2_1: "Тщательный отбор подходящей собаки",
    srv2_2: "Обучение распознаванию и успокоению панических атак",
    srv2_3: "Создание связи для ежедневной безопасности",
    srv2_4: "Личное сопровождение для возвращения к самостоятельной жизни",
    srv3Title: "Служебные собаки",
    srv3_1: "Подготовка защитных и караульных собак",
    srv3_2: "Продвинутая дрессировка для спецзадач",
    srv3_3: "Профессиональное сопровождение для спецслужб",
    srv3_4: "23 года опыта как профессиональная база",
    srvLink: "Подробности и консультация",

    ftDesc: "Дрессировка собак в центре Израиля – выезд на дом в центре atau на площадке в Ситрии (возле Реховота).",
    ftNav: "Навигация",
    ftSrv: "Услуги",
    ftContact: "Контакты",
    ftConsult: "Консультация в WhatsApp",
    ftRights: "Все права защищены.",
    ftSrv1: "Дрессировка собак",
    ftSrv2: "Служебные собаки",
    ftSrv3: "Собаки-помощники",
    ftSrv4: "Собаки при ПТСР",
    ftSrv5: "Выбор собаки",
    ftSrv6: "Консультации",

    whatsappMsg: "Здравствуйте, я с сайта и хотел бы проконсультироваться.",

    // FAQ
    faqBadge: "Частые вопросы",
    faqTitle: "Все, что важно знать о процессе дрессировки",
    faq1Question: "В каких городах вы проводите занятия?",
    faq1Answer: "Наш профессиональный кинологический комплекс расположен в мошаве Ситрия (рядом с Реховотом) и предоставляет просторное и безопасное пространство для клиентов со всей страны. Кроме того, мы проводим индивидуальные тренировки с выездом прямо на дом к клиенту в городах: Реховот, Нес-Циона, Ришон-ле-Цион, Беэр-Яаков, Рамла, Явне, Холон, Бат-Ям, Тель-Авив, Гиватаим, Рамат-Ган и окрестностях.",    faq2Answer: "Рекомендуется начинать с 2–3 месяцев, сразу после появления в доме. Своевременная социализация и приучение к чистоплотности предотвращают поведенческие проблемы.",
    faq3Question: "Можно ли обучить взрослую собаку со сложным поведением?",
    faq3Answer: "Да. Собаки обучаются в любом возрасте. Точная диагностика позволяет успешно корректировать страхи, агрессию и привычку тянуть поводок.",
    faq4Question: "В чем разница между занятиями дома и в центре в Ситрии?",
    faq4Answer: "Занятия дома решают бытовые задачи на месте, а площадка в Ситрии обеспечивает работу при внешних раздражителях и отработку команд на дистанции.",
    faq5Question: "Готовите ли вы собак психологической поддержки при ПТСР?",
    faq5Answer: "Да. Михаэль обладает 35-летним опытом и готовит собак поддержки для снижения уровня тревожности и сопровождения ветеранов.",
  }
} as const;

export type Language = 'he' | 'en' | 'ru';
export type TranslationKey = keyof typeof translations['he'];

export interface LanguageContextType {
  lang: Language;
  language: Language;
  setLang: (lang: Language) => void;
  setLanguage: (lang: Language) => void;
  t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Language>(() => {
    const saved = localStorage.getItem('site_lang');
    if (saved === 'he' || saved === 'en' || saved === 'ru') {
      return saved as Language;
    }
    return 'he';
  });

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem('site_lang', newLang);
  };

  useEffect(() => {
    document.documentElement.dir = lang === 'he' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  const t = (key: TranslationKey): string => {
    const activeDict = translations[lang] as Record<string, string>;
    const defaultDict = translations['he'] as Record<string, string>;
    return activeDict[key] || defaultDict[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, language: lang, setLang, setLanguage: setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
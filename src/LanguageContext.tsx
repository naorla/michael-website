import { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';

export const translations = {
  he: {
    brandName: "מרכז לאילוף והעצמה כלבנית",
    brandSubtitle: "מיכאל לפושניאנסקי · מומחה לכלבנות",
    phoneDisplay: "052-255-2487",
    skipLink: "דילוג לתוכן",
    
    heroBadge1: "35+ שנות ניסיון",
    heroBadge2: "שירות אילוף והגעה לבית באזור המרכז",
    heroSubtitle: "אילוף מתקדם · כלבי משפחה · כלבי סיוע ושירות · הכשרת כלבי עבודה",
    heroTitle: "מומחיות שנבנתה בשטח. דיוק שנמדד בתוצאות.",
    heroDesc: "מיכאל לפושניאנסקי מוביל סטנדרט בלתי מתפשר באילוף, הכשרה ופיתוח כלבים — מחיות מחמד וכלבי משפחה, דרך כלבי סיוע לפוסט טראומה (PTSD), ועד לכלבי עבודה ייעודיים לארגונים. השירות כולל הדרכה מותאמת אישית עם הגעה ישירה לביתכם באזור המרכז, לצד הכשרה מתקדמת בכלבייה המקצועית שלנו במושב סתריה (סמוך לרחובות), ישראל.",
    heroCta1: "לתיאום ייעוץ",
    heroCta2: "הכירו את המרכז",
    heroWaze: "ניווט בוויז: מושב סתריה (ליד רחובות), ישראל",

    aboutMainTitle: "מרכז לאילוף והעצמה כלבנית",
    aboutMainDesc: "מרכז לאילוף והעצמה כלבנית בניהולו של מיכאל לפושניאנסקי מוביל סטנדרט חסר פשרות בעולם האילוף. אנו מתמחים בהכשרת כלבי משפחה, כלבי סיוע וכלבי עבודה ייעודיים. התהליך מתבצע תוך התאמה מלאה לצרכיכם, בין אם בהגעה ישירה לבית הלקוח ובין אם במתחם ההכשרה המקצועי שלנו, במטרה להבטיח תוצאות שנשמרות לכל החיים.",
    aboutStat1: "35+", aboutStat1Text: "שנות ניסיון",
    aboutStat2: "23", aboutStat2Text: "שנים ביחידת עוקץ",
    aboutStat3: "1992", aboutStat3Text: "תחילת המסע",
    aboutTl1Year: "1992", aboutTl1Title: "תחילת הדרך", aboutTl1Desc: "המסע בעולם הכלבנות המקצועית מתחיל.",
    aboutTl2Year: "עוקץ", aboutTl2Title: "שנות פיקוד מקצועי 23", aboutTl2Desc: "מאמן הכלבים הראשי של יחידת עוקץ בצה״ל.",
    aboutTl3Year: "FCI", aboutTl3Title: "שופט כלבי עבודה", aboutTl3Desc: "הסמכה בינלאומית מטעם הפדרציה הבינלאומית לכלבנות.",
    aboutTl4Year: "היום", aboutTl4Title: "מרכז לאילוף והעצמה כלבנית", aboutTl4Desc: "הכשרה, ייעוץ ופיתוח כלבים.",

    expSubtitle: "ניסיון",
    expTitle: "עשרות שנות עשייה – מומחיות שנמדדת בתוצאות בשטח",
    expDesc: "הניסיון המקצועי שלנו נשען על למעלה משלושה עשורים של עבודה אינטנסיבית בשטח, מתוכם 23 שנים כמאמן הכלבים הראשי של יחידת 'עוקץ' בצה״ל. את הסטנדרטים הגבוהים, המשמעת וההבנה העמוקה של הפסיכולוגיה הכלבנית אנו רותמים כיום להכשרת חיות מחמד וכלבי משפחה, ליווי כלבי סיוע לפוסט טראומה (PTSD), ואילוף מותאם אישית – הן בהגעה ישירה לבית הלקוח באזור המרכז והן בכלבייה המקצועית שלנו במושב סתריה (סמוך לרחובות), ישראל.",

    apprSubtitle: "שיטה",
    apprTitle: "עקרונות הברזל שלנו – מהבנה ועד תוצאה מוכחת בשטח",
    apprDesc: "אנחנו לא מאמינים בפתרונות קסם שטחיים. תהליך האילוף נשען על קריאה מדויקת של הכלב, בניית אמון ותרגול מובנה שמחזיק מעמד לאורך שנים.",
    apprStep1Num: "01", apprStep1Title: "אבחון והבנת האופי", apprStep1Desc: "מיפוי יסודי של צרכי הכלב, דפוסי ההתנהגות והדינמיקה בבית ובמשפחה.",
    apprStep2Num: "02", apprStep2Title: "תקשורת וכבוד הדדי", apprStep2Desc: "בניית שפה ברורה בין הבעלים לכלב, מתוך הקשבה ואמון ולא מתוך פחד.",
    apprStep3Num: "03", apprStep3Title: "תרגול בסביבה האמיתית", apprStep3Desc: "יישום המשמעת בבית, ברחוב ובמצבי גירוי שונים עד להטמעה מלאה.",
    apprStep4Num: "04", apprStep4Title: "שקט וביטחון לכל החיים", apprStep4Desc: "יצירת שגרה יציבה המעניקה לכלב רוגע ולבעלים שליטה מלאה ובטוחה.",

    ctaTitle: "כלב עם פוטנציאל הוא רק ההתחלה.",
    ctaDesc: "יחד נבנה את הדרך הנכונה עבורכם ועבור הכלב שלכם – בדיוק, באמון ובסטנדרט שלא מתפשר.",
    ctaBtn: "לתיאום ייעוץ",

    contactSub: "צור קשר",
    contactTitle: "לתיאום ייעוץ מקצועי.",
    contactDesc: "ספרו בקצרה מה הצורך – אילוף, כלב עבודה, כלב שירות או בחירת כלב – ונחזור אליכם.",
    contactName: "שם",
    contactPhone: "טלפון",
    contactSubmit: "שליחה",

    testiSubtitle: "המלצות",
    testiTitle: "קולות שהגיעו מהשטח.",
    t1Role: "כלב פוסט טראומה",
    t1Quote: "מיכאל פשוט שינה לנו את החיים. הכלב עכשיו רגוע, קשוב ומעניק לי ביטחון אמיתי שמלווה אותי כל היום.",
    t2Role: "חיות מחמד - משפחת כהן",
    t2Quote: "ניסינו המון מאלפים לפנינו, אבל הגישה למשמעת וכבוד הדדי פשוט עשתה קסמים עם הרועה הבלגי שלנו.",
    t3Role: "ארגון ביטחוני",
    t3Quote: "הסטנדרט המקצועי הוא חסר פשרות. הכלבים שלנו הגיעו לרמות ביצוע יוצאות דופן בסביבה מורכבת.",
    t4Role: "כלב משפחה",
    t4Quote: "הגעה עד הבית, הסבר סבלני ותוצאות כבר מהמפגש הראשון. עכשיו אפשר לטייל עם הכלב בכיף בלי שהוא ימשוך ברצועה.",

    whySubtitle: "יתרונות",
    whyTitle: "מומחיות בבניית קשר שמחזיק לכל החיים.",
    why1Title: "החיבור המדויק לאדם",
    why1Text: "כלב הוא לא מכונה. אנו מתמחים בבניית קשר של אמון, כבוד הדדי ומשמעת, שהופכים כל כלב לבן משפחה ממושמע ומאושר.",
    why2Title: "ליווי אישי עד הבית",
    why2Text: "אנו מספקים שירותי אילוף באזור המרכז, מגיעים ישירות לסביבה הטבעית של הכלב כדי לפתור בעיות התנהגות ולבנות שגרה נכונה.",
    why3Title: "מצוינות ללא פשרות",
    why3Text: "הניסיון שנבנה במצבי קיצון וביחידות המיוחדות מיושם כיום באילוף כלבי משפחה, כלבי שירות ופוסט טראומה.",
    why4Title: "מתחם אימונים מרווח",
    why4Text: "הכלבייה שלנו תוכננה בקפידה כדי לספק מרחב בטוח, גדול ומקצועי, המותאם בצורה מושלמת לכל סוגי האילוף.",

    srvSubtitle: "שירותים",
    srvTitle: "מהמשפחה בבית ועד למשימות המיוחדות בשטח.",
    srv1Title: "כלבי משפחה וחיות מחמד",
    srv1_1: "אילוף משמעת בסיסית ומתקדמת",
    srv1_2: "פתרון בעיות התנהגות בבית ובחוץ",
    srv1_3: "הגעה עד בית הלקוח במרכז או בכלבייה",
    srv1_4: "חיבור נכון לילדים ולמשפחה",
    srv2Title: "כלבי סיוע לפוסט טראומה",
    srv2_1: "איתור ומיון קפדני של הכלב המתאים",
    srv2_2: "הכשרה לזיהוי והרגעת התקפי חרדה",
    srv2_3: "בניית קשר המעניק ביטחון יומיומי",
    srv2_4: "ליווי הבעלים לחיים עצמאיים",
    srv3Title: "כלבי עבודה ואבטחה",
    srv3_1: "הכשרת כלבי הגנה ושמירה",
    srv3_2: "אילוף מתקדם למשימות ייעודיות",
    srv3_3: "ליווי מקצועי לכוחות הביטחון ולארגונים",
    srv3_4: "23 שנות ניסיון כיסוד מקצועי",
    srvLink: "לפרטים ותיאום",

    ftDesc: "אילוף, הכשרה ופיתוח כלבים ברמת מומחה – הגעה לבית הלקוח במרכז, או כלבייה במושב סתריה (ליד רחובות), ישראל.",
    ftNav: "ניווט",
    ftSrv: "שירותים",
    ftContact: "צור קשר",
    ftConsult: "לתיאום ייעוץ בוואטסאפ",
    ftRights: "כל הזכויות שמורות.",
    navAbout: "אודות",
    navServices: "שירותים",
    navExperience: "ניסיון",
    navTestimonials: "המלצות",
    navGallery: "גלריה",
    navContact: "צור קשר",
    ftSrv1: "אילוף כלבים",
    ftSrv2: "כלבי עבודה",
    ftSrv3: "כלבי שירות",
    ftSrv4: "כלבי סיוע לפוסט טראומה",
    ftSrv5: "בחירת כלבים",
    ftSrv6: "ייעוץ מקצועי",

    galSubtitle: "גלריה",
    galTitle: "תיעוד מהשטח",
    galDesc: "הצצה לשיטות העבודה שלנו עם חיות מחמד, כלבי עבודה וכלבי סיוע.",
    whatsappMsg: "היי, הגעתי מהאתר ואשמח להתייעץ"
  },
  en: {
    brandName: "Michael Lapushniansky",
    brandSubtitle: "Canine Specialist",
    phoneDisplay: "052-255-2487",
    skipLink: "Skip to content",
    
    heroBadge1: "35+ Years Experience",
    heroBadge2: "In-Home Sessions in Central Israel",
    heroSubtitle: "Advanced Obedience · Family Pets · Service & PTSD Dogs · Working Dog Training",
    heroTitle: "Expertise built in the field. Precision measured by results.",
    heroDesc: "Michael Lapushniansky delivers an uncompromising standard in canine training, conditioning, and development—from family pets and PTSD service dogs to specialized working dogs for organizations. We provide customized training directly at your home across Central Israel, alongside advanced programs at our professional kennel in Moshav Sitria (near Rehovot), Israel.",
    heroCta1: "Book Consultation",
    heroCta2: "Meet Us",
    heroWaze: "Navigate on Waze: Moshav Sitria (near Rehovot), Israel",

    aboutMainTitle: "Canine Training & Empowerment Center",
    aboutMainDesc: "The Canine Training & Empowerment Center, led by Michael Lapushniansky, sets an uncompromising standard in dog training. We specialize in family pets, assistance dogs, and working dogs. The process is fully customized, whether through direct visits to the client's home or at our professional training facility.",
    aboutStat1: "35+", aboutStat1Text: "Years Experience",
    aboutStat2: "23", aboutStat2Text: "Years in Oketz",
    aboutStat3: "1992", aboutStat3Text: "Journey Began",
    aboutTl1Year: "1992", aboutTl1Title: "The Beginning", aboutTl1Desc: "The journey in professional dog training begins.",
    aboutTl2Year: "Oketz", aboutTl2Title: "23 Years of Command", aboutTl2Desc: "Chief Dog Trainer of the IDF's Oketz unit.",
    aboutTl3Year: "FCI", aboutTl3Title: "Working Dog Judge", aboutTl3Desc: "International certification by the FCI.",
    aboutTl4Year: "Today", aboutTl4Title: "Empowerment Center", aboutTl4Desc: "Training, consultation, and canine development.",

    expSubtitle: "Experience",
    expTitle: "Decades of Action – Expertise Measured by Field Results",
    expDesc: "Our professional experience is backed by over three decades of rigorous field expertise, including 23 years as the Chief Dog Trainer of the IDF's elite 'Oketz' canine unit. Today, we apply these uncompromising standards, discipline, and profound understanding of canine psychology to family pets, PTSD assistance dogs, and customized training—offering both in-home sessions across Central Israel and specialized programs at our kennel in Moshav Sitria (near Rehovot), Israel.",

    apprSubtitle: "Method",
    apprTitle: "Core Principles – From Understanding to Proven Results",
    apprDesc: "We don't believe in superficial shortcuts. Our training method is grounded in precise behavioral reading, trust-building, and structured practice that lasts.",
    apprStep1Num: "01", apprStep1Title: "Assessment & Diagnosis", apprStep1Desc: "A thorough evaluation of the dog's personality, triggers, and family dynamics.",
    apprStep2Num: "02", apprStep2Title: "Communication & Trust", apprStep2Desc: "Establishing a clear shared language based on mutual respect rather than fear.",
    apprStep3Num: "03", apprStep3Title: "Real-World Application", apprStep3Desc: "Implementing habits at home, on the street, and amidst real distractions.",
    apprStep4Num: "04", apprStep4Title: "Lifelong Balance & Peace", apprStep4Desc: "Achieving a calm, reliable dog and complete confidence for the owner.",

    ctaTitle: "A dog with potential is just the beginning.",
    ctaDesc: "Together we will build the right path for you and your dog - with precision, trust, and an uncompromising standard.",
    ctaBtn: "Book Consultation",

    contactSub: "Contact Us",
    contactTitle: "Book a professional consultation.",
    contactDesc: "Tell us briefly what you need - training, working dog, service dog, or dog selection - and we'll get back to you.",
    contactName: "Name",
    contactPhone: "Phone",
    contactSubmit: "Submit",

    testiSubtitle: "Reviews",
    testiTitle: "Voices from the field.",
    t1Role: "PTSD Assistance Dog",
    t1Quote: "Michael simply changed our lives. The dog is now calm, attentive, and gives me real confidence throughout the day.",
    t2Role: "Family Pet - Cohen Family",
    t2Quote: "We tried many trainers before, but this approach to discipline worked magic with our dog.",
    t3Role: "Security Org",
    t3Quote: "The professional standard is uncompromising. Our dogs reached exceptional performance levels.",
    t4Role: "Family Dog",
    t4Quote: "Home visits, patient explanations, and results from the first session. Walking the dog is now a pleasure.",

    whySubtitle: "Why Us",
    whyTitle: "Expertise in building a lifelong bond.",
    why1Title: "Perfect Connection",
    why1Text: "A dog is not a machine. We specialize in building a bond of trust, mutual respect, and understanding.",
    why2Title: "In-Home Guidance",
    why2Text: "We provide training services in central Israel directly at your home to solve behavioral issues.",
    why3Title: "Uncompromising Excellence",
    why3Text: "Experience built in extreme situations is now applied to family dogs, service dogs, and PTSD dogs.",
    why4Title: "Spacious Facility",
    why4Text: "Our kennel is meticulously designed to provide a safe, large, and professional space.",

    srvSubtitle: "Services",
    srvTitle: "From the family home to special field missions.",
    srv1Title: "Family Dogs & Pets",
    srv1_1: "Basic and advanced obedience",
    srv1_2: "Solving behavioral issues indoors and outdoors",
    srv1_3: "Home visits in the center or at our kennel",
    srv1_4: "Proper integration with children and family",
    srv2Title: "PTSD Assistance Dogs",
    srv2_1: "Careful screening and selection of the dog",
    srv2_2: "Training to identify and calm anxiety attacks",
    srv2_3: "Building a bond that provides daily security",
    srv2_4: "Guiding owners to independent living",
    srv3Title: "Working & Security Dogs",
    srv3_1: "Training protection and guard dogs",
    srv3_2: "Advanced training for designated missions",
    srv3_3: "Professional guidance for security forces",
    srv3_4: "23 years of experience as a professional foundation",
    srvLink: "Details and consultation",

    ftDesc: "Expert dog training – Home visits in the center, or kennel in Sitria (near Rehovot), Israel for pets and organizations.",
    ftNav: "Navigation",
    ftSrv: "Services",
    ftContact: "Contact Us",
    ftConsult: "Book consultation via WhatsApp",
    ftRights: "All rights reserved.",
    navAbout: "About",
    navServices: "Services",
    navExperience: "Experience",
    navTestimonials: "Reviews",
    navGallery: "Gallery",
    navContact: "Contact",
    ftSrv1: "Dog Training",
    ftSrv2: "Working Dogs",
    ftSrv3: "Service Dogs",
    ftSrv4: "PTSD Dogs",
    ftSrv5: "Dog Selection",
    ftSrv6: "Consulting",

    galSubtitle: "Gallery",
    galTitle: "Documentation from the field",
    galDesc: "A glimpse into our working methods with pets, working dogs, and service dogs.",
    whatsappMsg: "Hi, I reached you from the website and would like to consult."
  },
  ru: {
    brandName: "Михаэль Лапушнянский",
    brandSubtitle: "Кинолог",
    phoneDisplay: "052-255-2487",
    skipLink: "Перейти к контенту",
    
    heroBadge1: "Более 35 лет опыта",
    heroBadge2: "Дрессировка на дому в центре",
    heroSubtitle: "Профессиональная дрессировка · Семейные собаки · Собаки-помощники · Служебные собаки",
    heroTitle: "Опыт, созданный на практике. Точность результатов.",
    heroDesc: "Михаэль Лапушнянский задает бескомпромиссный стандарт в дрессировке, подготовке и развитии собак — от домашних питомцев и служебных собак при ПТСР до специализированных рабочих собак для организаций. Услуги включают индивидуальные занятия с выездом на дом в центре Израиля, а также углубленную подготовку в нашем профессиональном питомнике в мошаве Ситрия (возле Реховота), Израиль.",
    heroCta1: "Записаться",
    heroCta2: "О Центре",
    heroWaze: "Waze: Мошав Ситрия (возле Реховота), Израиль",

    aboutMainTitle: "Центр дрессировки и развития собак",
    aboutMainDesc: "Центр дрессировки и развития собак под руководством Михаэля Лапушнянского задает бескомпромиссный стандарт дрессировки. Мы специализируемся на семейных собаках, собаках-помощниках и служебных собаках. Обучение адаптируется под ваши нужды, с выездом на дом к клиенту или на базе нашего профессионального центра.",
    aboutStat1: "35+", aboutStat1Text: "Лет опыта",
    aboutStat2: "23", aboutStat2Text: "Года в «Окец»",
    aboutStat3: "1992", aboutStat3Text: "Начало пути",
    aboutTl1Year: "1992", aboutTl1Title: "Начало", aboutTl1Desc: "Начало пути в профессиональной кинологии.",
    aboutTl2Year: "Окец", aboutTl2Title: "23 года командования", aboutTl2Desc: "Главный кинолог подразделения ЦАХАЛ «Окец».",
    aboutTl3Year: "FCI", aboutTl3Title: "Судья рабочих собак", aboutTl3Desc: "Международная сертификация FCI.",
    aboutTl4Year: "Сегодня", aboutTl4Title: "Центр развития", aboutTl4Desc: "Дрессировка, консультации и развитие собак.",

    expSubtitle: "Опыт",
    expTitle: "Десятилетия практики – Экспертиза, проверенная результатами",
    expDesc: "Наш опыт основан на более чем тридцатилетней практической работе, включая 23 года в должности главного кинолога элитного подразделения ЦАХАЛ «Окец». Высочайшие стандарты и глубокое понимание собачьей психологии мы успешно применяем для воспитания домашних питомцев, подготовки собак-помощников при ПТСР и индивидуальной дрессировки в мошаве Ситрия (возле Реховота), Израиль.",

    apprSubtitle: "Методика",
    apprTitle: "Ключевые принципы – От понимания к стойкому результату",
    apprDesc: "Мы не верим в поверхностные шаблоны. Воспитание собаки строится на точном чтении поведения, доверии и последовательной практике.",
    apprStep1Num: "01", apprStep1Title: "Диагностика и анализ", apprStep1Desc: "Глубокая оценка характера собаки, триггеров и взаимоотношений в семье.",
    apprStep2Num: "02", apprStep2Title: "Контакт и доверие", apprStep2Desc: "Создание понятного языка общения на основе взаимного уважения, а не страха.",
    apprStep3Num: "03", apprStep3Title: "Практика в реальной среде", apprStep3Desc: "Закрепление навыков дома, на прогулке и при внешних раздражителях.",
    apprStep4Num: "04", apprStep4Title: "Спокойствие на всю жизнь", apprStep4Desc: "Стабильное и предсказуемое поведение собаки, дарящее уверенность владельцу.",

    ctaTitle: "Собака с потенциалом — это только начало.",
    ctaDesc: "Вместе мы построим правильный путь для вас и вашей собаки — с точностью, доверием и бескомпромиссным стандартом.",
    ctaBtn: "Записаться на консультацию",

    contactSub: "Контакты",
    contactTitle: "Записаться на профессиональную консультацию.",
    contactDesc: "Коротко расскажите, что вам нужно — дрессировка, служебная собака или выбор щенка.",
    contactName: "Имя",
    contactPhone: "Телефон",
    contactSubmit: "Отправить",

    testiSubtitle: "Отзывы",
    testiTitle: "Голоса с мест.",
    t1Role: "Собака (ПТСР)",
    t1Quote: "Михаэль изменил нашу жизнь. Собака теперь спокойна и дает мне уверенность на весь день.",
    t2Role: "Питомец",
    t2Quote: "Этот подход к дисциплине сотворил чудо с нашей бельгийской овчаркой.",
    t3Role: "Охрана",
    t3Quote: "Бескомпромиссный стандарт. Собаки достигли исключительных результатов.",
    t4Role: "Семейная собака",
    t4Quote: "Выезд на дом, терпеливые объяснения и результаты с первой встречи. Гулять с собакой теперь удовольствие.",

    whySubtitle: "Преимущества",
    whyTitle: "Опыт в создании связи на всю жизнь.",
    why1Title: "Идеальная связь",
    why1Text: "Собака — не машина. Мы создаем связь на основе доверия, взаимного уважения и дисциплины.",
    why2Title: "На дому",
    why2Text: "Мы предоставляем услуги в центре, приезжая в привычную среду собаки для решения проблем поведения.",
    why3Title: "Бескомпромиссное качество",
    why3Text: "Опыт спецподразделений успешно применяется для семейных собак и собак-помощников.",
    why4Title: "Просторный центр",
    why4Text: "Наш питомник спроектирован так, чтобы обеспечить большое и безопасное пространство.",

    srvSubtitle: "Услуги",
    srvTitle: "От семейного дома до спецзаданий.",
    srv1Title: "Семейные собаки и питомцы",
    srv1_1: "Базовое и продвинутое послушание",
    srv1_2: "Решение проблем поведения дома и на улице",
    srv1_3: "Выезд на дом в центре или в питомнике",
    srv1_4: "Правильная интеграция с детьми и семьей",
    srv2Title: "Собаки-помощники (ПТСР)",
    srv2_1: "Тщательный отбор подходящей собаки",
    srv2_2: "Обучение распознаванию и успокоению панических атак",
    srv2_3: "Создание связи для ежедневной безопасности",
    srv2_4: "Помощь владельцам в независимой жизни",
    srv3Title: "Служебные собаки",
    srv3_1: "Подготовка защитных и караульных собак",
    srv3_2: "Продвинутая дрессировка для спецзадач",
    srv3_3: "Профессиональное сопровождение для спецслужб",
    srv3_4: "23 года опыта как профессиональная база",
    srvLink: "Подробности и консультация",

    ftDesc: "Дрессировка собак – выезд на дом в центре, питомник в Ситриיה (возле Реховота), Израиль для питомцев и организаций.",
    ftNav: "Навигация",
    ftSrv: "Услуги",
    ftContact: "Контакты",
    ftConsult: "Консультация в WhatsApp",
    ftRights: "Все права защищены.",
    navAbout: "О нас",
    navServices: "Услуги",
    navExperience: "Опыт",
    navTestimonials: "Отзывы",
    navGallery: "Галерея",
    navContact: "Контакты",
    ftSrv1: "Дрессировка собак",
    ftSrv2: "Служебные собаки",
    ftSrv3: "Собаки-помощники",
    ftSrv4: "Собаки при ПТСР",
    ftSrv5: "Выбор собаки",
    ftSrv6: "Консультации",

    galSubtitle: "Галерея",
    galTitle: "Документация с мест",
    galDesc: "Взгляд на наши методы работы с питомцами и служебными собаками.",
    whatsappMsg: "Здравствуйте, я с сайта и хотел бы проконсультироваться."
  }
};

type Language = 'he' | 'en' | 'ru';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: keyof typeof translations['he']) => string;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Language>('he');

  useEffect(() => {
    document.documentElement.dir = lang === 'he' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  const t = (key: keyof typeof translations['he']): string => {
    return translations[lang][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
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
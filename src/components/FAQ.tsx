import { useState } from "react";
import { Reveal } from "./Reveal";
import { useLanguage } from "../LanguageContext";

export function FAQ() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    { q: t("faq1Q"), a: t("faq1A") },
    { q: t("faq2Q"), a: t("faq2A") },
    { q: t("faq3Q"), a: t("faq3A") },
    { q: t("faq4Q"), a: t("faq4A") }
  ].filter(faq => faq.q && faq.a); // מוודא שקיימים נתונים

  if (faqs.length === 0) return null;

  return (
    <section id="faq" className="scroll-mt-24 bg-white py-16 md:py-24 border-b border-[#E2D5C0]">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <span className="inline-block rounded-full bg-emerald-100/90 px-4 py-1.5 text-xs md:text-sm font-bold tracking-[0.18em] text-emerald-900 uppercase border border-emerald-300/70 mb-3">
            {t("faqBadge") || "שאלות נפוצות"}
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-black text-[#1a2e1d]">
            {t("faqTitle") || "מידע נוסף על שירותי האילוף"}
          </h2>
        </div>

        <div className="space-y-4 text-start">
          {faqs.map((faq, idx) => (
            <Reveal key={idx} delay={1}>
              <div 
                className={`border-2 rounded-2xl transition-all duration-300 overflow-hidden ${
                  openIndex === idx ? "border-emerald-500 bg-emerald-50/30" : "border-[#E2D5C0] bg-white hover:border-emerald-300"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="w-full px-6 py-5 text-start flex items-center justify-between font-black text-[#1a2e1d] focus:outline-none"
                  aria-expanded={openIndex === idx}
                >
                  <span className="text-sm sm:text-base pr-2">{faq.q}</span>
                  <span className={`text-emerald-600 transition-transform duration-300 shrink-0 ${openIndex === idx ? "rotate-180" : ""}`}>
                    ▼
                  </span>
                </button>
                <div 
                  className={`px-6 text-sm text-[#4a554c] font-medium transition-all duration-300 ease-in-out ${
                    openIndex === idx ? "pb-5 max-h-40 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
                  }`}
                >
                  <p>{faq.a}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
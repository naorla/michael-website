import { useState } from "react";
import type { FormEvent } from "react";
import { useLanguage } from "../LanguageContext";

export function Contact() {
  const { t } = useLanguage();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // בניית הודעה מסודרת לוואטסאפ
    const intro = t('whatsappMsg');
    const msgBody = `${intro}\n\n👤 *שם:* ${name}\n📞 *טלפון:* ${phone}${message ? `\n📝 *פרטי הפנייה:* ${message}` : ""}`;
    const encoded = encodeURIComponent(msgBody);
    
    // פתיחה ישירה של שיחת וואטסאפ
    window.open(`https://wa.me/972522552487?text=${encoded}`, "_blank");
  };

  return (
    <section id="contact" className="scroll-mt-24 bg-[#FAF5EB] py-20 md:py-28 relative overflow-hidden border-b border-[#E2D5C0]">
      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* תיבת הטופס */}
          <div className="lg:col-span-6 bg-white/90 backdrop-blur-md p-6 sm:p-9 rounded-[2.5rem] border-2 border-[#E2D5C0] shadow-xl">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              
              {/* שדה שם */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs sm:text-sm font-bold text-[#1a2e1d]">
                  {t('contactName')}
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={t('contactNamePlaceholder')}
                  className="w-full px-4 py-3 rounded-2xl border border-[#E2D5C0] bg-white text-[#1a2e1d] text-sm font-medium focus:outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/20 transition-all shadow-2xs"
                />
              </div>

              {/* שדה טלפון */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs sm:text-sm font-bold text-[#1a2e1d]">
                  {t('contactPhone')}
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="05X-XXXXXXX"
                  dir="ltr"
                  className="w-full px-4 py-3 rounded-2xl border border-[#E2D5C0] bg-white text-[#1a2e1d] text-sm font-medium focus:outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/20 transition-all shadow-2xs text-right rtl:text-right ltr:text-left"
                />
              </div>

              {/* תיבת כתיבה מורחבת לפנייה */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs sm:text-sm font-bold text-[#1a2e1d]">
                  {t('contactMessage')}
                </label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={t('contactMessagePlaceholder')}
                  className="w-full px-4 py-3 rounded-2xl border border-[#E2D5C0] bg-white text-[#1a2e1d] text-sm font-medium focus:outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/20 transition-all shadow-2xs resize-none"
                />
              </div>

              {/* כפתור שליחה */}
              <button
                type="submit"
                className="mt-2 w-full py-3.5 px-6 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-base shadow-md hover:shadow-lg transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>💬</span>
                <span>{t('contactSubmit')}</span>
              </button>
            </form>
          </div>

          {/* כותרת והסבר לצד הטופס */}
          <div className="lg:col-span-6 flex flex-col gap-4 text-start">
            <span className="inline-block w-fit rounded-full bg-emerald-100/80 px-4 py-1.5 text-xs sm:text-sm font-bold tracking-[0.16em] text-emerald-800 uppercase border border-emerald-200/60 shadow-xs">
              {t('contactSub')}
            </span>

            <h2 className="font-serif text-3xl sm:text-5xl font-black text-[#1a2e1d] leading-tight">
              {t('contactTitle')}
            </h2>

            <p className="text-base sm:text-lg font-medium text-[#4a554c] leading-relaxed max-w-xl">
              {t('contactDesc')}
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-4 text-[#1a2e1d]">
              <a
                href="tel:0522552487"
                className="inline-flex items-center gap-2 text-base font-bold text-emerald-800 hover:text-emerald-950 transition-colors bg-white/80 px-4 py-2.5 rounded-full border border-[#E2D5C0]"
                dir="ltr"
              >
                <span>📞</span>
                <span>052-255-2487</span>
              </a>

              {/* שורת המענה הישיר מתורגמת כעת במלואה לכל שפה */}
              <span className="text-xs sm:text-sm text-[#4a554c] font-medium">
                {t('contactDirectAnswer')}
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
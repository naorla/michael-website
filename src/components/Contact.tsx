import { useLanguage } from "../LanguageContext";

export function Contact() {
  const { t } = useLanguage();
  return (
    <section id="contact" className="scroll-mt-24 bg-ink py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-16 px-4 md:grid-cols-2 md:px-8">
        <div>
          <p className="text-sm font-bold tracking-[0.2em] text-gold uppercase">{t('contactSub')}</p>
          <h2 className="mt-4 font-serif text-4xl font-extrabold text-paper md:text-5xl">{t('contactTitle')}</h2>
          <p className="mt-6 text-lg text-paper-2">{t('contactDesc')}</p>
        </div>
        <form className="rounded-3xl border-2 border-line bg-ink-2 p-8 shadow-sm">
          <div className="grid gap-6">
            <div><label className="mb-2 block text-sm font-bold text-paper-2">{t('contactName')}</label><input type="text" className="w-full rounded-xl border border-line bg-white p-4 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold" /></div>
            <div><label className="mb-2 block text-sm font-bold text-paper-2">{t('contactPhone')}</label><input type="tel" className="w-full rounded-xl border border-line bg-white p-4 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold" /></div>
            <button type="submit" className="mt-4 w-full rounded-xl bg-gold py-4 font-bold text-white shadow-md transition hover:bg-gold-2">{t('contactSubmit')}</button>
          </div>
        </form>
      </div>
    </section>
  );
}
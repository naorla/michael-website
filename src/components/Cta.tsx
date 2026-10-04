import { useLanguage } from "../LanguageContext";

export function Cta() {
  const { t } = useLanguage();
  return (
    <section className="bg-gold py-24 text-center">
      <div className="mx-auto max-w-4xl px-4 md:px-8">
        <h2 className="font-serif text-4xl font-extrabold text-paper md:text-5xl lg:text-6xl">
          {t('ctaTitle')}
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg font-medium text-paper/90">
          {t('ctaDesc')}
        </p>
        <a
          href="#contact"
          className="mt-10 inline-block rounded-full bg-paper px-10 py-4 font-bold text-white shadow-lg transition hover:scale-105 hover:bg-paper-2"
        >
          {t('ctaBtn')}
        </a>
      </div>
    </section>
  );
}
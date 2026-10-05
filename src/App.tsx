import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import { About } from "./components/About";
import { Approach } from "./components/Approach";
import { Contact } from "./components/Contact";
import { Cta } from "./components/Cta";
import { Experience } from "./components/Experience";
import { Footer } from "./components/Footer";
import { Gallery } from "./components/Gallery";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { Services } from "./components/Services";
import { Testimonials } from "./components/Testimonials";
import { WhyUs } from "./components/WhyUs";
import { LanguageProvider, useLanguage } from "./LanguageContext";
import { FAQ } from './components/FAQ';

function ScrollReveal({ children }: { children: ReactNode }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -50px 0px" }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
      }`}
    >
      {children}
    </div>
  );
}

function MainContent() {
  const { t } = useLanguage();

  return (
    <>
      <a className="skip-link" href="#main">
        {t('skipLink')}
      </a>

      {/* כפתור וואטסאפ צף עם הבזקים פועמים וסמל מלא */}
      <a
        href={`https://wa.me/972522552487?text=${encodeURIComponent(t('whatsappMsg'))}`}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 end-6 z-50 flex items-center justify-center w-16 h-16 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 group border-2 border-white"
        aria-label="WhatsApp"
      >
        {/* אפקט הבזק / פעימה זוהר */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-75 animate-ping pointer-events-none" />
        
        {/* הילה עדינה נוספת */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/40 blur-sm pointer-events-none" />

        {/* סמל וואטסאפ הרשמי */}
        <svg
          className="w-8 h-8 fill-white relative z-10 transition-transform group-hover:rotate-6 drop-shadow-sm"
          viewBox="0 0 24 24"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
        </svg>
      </a>

      <Navbar />

      <main id="main">
        <Hero />

        {/* סדר הסקשנים: השירותים תחילה, והאודות בסוף */}
        <ScrollReveal><Services /></ScrollReveal>
        <ScrollReveal><Approach /></ScrollReveal>
        <ScrollReveal><WhyUs /></ScrollReveal>
        <ScrollReveal><Experience /></ScrollReveal>
        <ScrollReveal><Testimonials /></ScrollReveal>
        <ScrollReveal><Gallery /></ScrollReveal>
        <ScrollReveal><About /></ScrollReveal>
        <ScrollReveal><FAQ /></ScrollReveal>
        <ScrollReveal><Cta /></ScrollReveal>

        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <MainContent />
    </LanguageProvider>
  );
}
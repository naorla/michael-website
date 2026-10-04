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
      <a className="skip-link" href="#main">{t('skipLink')}</a>

      {/* כפתור וואטסאפ צף */}
      <a
        href={`https://wa.me/972522552487?text=${encodeURIComponent(t('whatsappMsg'))}`}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 end-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center"
        aria-label="WhatsApp"
      >
        <svg width="34" height="34" fill="currentColor" viewBox="0 0 16 16">
          <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
        </svg>
      </a>

      <Navbar />
      <main id="main">
        <Hero />
        
        {/* סדר הסקשנים החדש: השירותים תחילה, והאודות בסוף */}
        <ScrollReveal><Services /></ScrollReveal>
        <ScrollReveal><Approach /></ScrollReveal>
        <ScrollReveal><WhyUs /></ScrollReveal>
        <ScrollReveal><Experience /></ScrollReveal>
        <ScrollReveal><Testimonials /></ScrollReveal>
        <ScrollReveal><Gallery /></ScrollReveal>
        <ScrollReveal><About /></ScrollReveal>
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
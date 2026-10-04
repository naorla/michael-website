import { useLanguage } from "../LanguageContext";

function SocialSlot({ label, url }: { label: string; url?: string }) {
  if (!url) return null;
  return (
    <a href={url} target="_blank" rel="noreferrer" className="text-sm text-muted transition hover:text-gold">
      {label}
    </a>
  );
}

export function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="border-t border-line bg-ink-2">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-4 md:px-8">
        <div>
          <p className="font-serif text-2xl font-bold text-paper">מיכאל לפושניאנסקי</p>
          <p className="mt-2 text-sm font-semibold text-gold">המרכז להעצמה כלבנית</p>
          <p className="mt-4 max-w-xs text-sm text-muted">{t('ftDesc')}</p>
        </div>
        <div>
          <p className="mb-3 text-xs font-bold tracking-[0.2em] text-gold">{t('ftNav')}</p>
          <ul className="grid gap-2">
            <li><a href="#about" className="text-sm font-medium text-paper-2 hover:text-gold">{t('navAbout')}</a></li>
            <li><a href="#services" className="text-sm font-medium text-paper-2 hover:text-gold">{t('navServices')}</a></li>
            <li><a href="#experience" className="text-sm font-medium text-paper-2 hover:text-gold">{t('navExperience')}</a></li>
            <li><a href="#gallery" className="text-sm font-medium text-paper-2 hover:text-gold">{t('navGallery')}</a></li>
            <li><a href="#contact" className="text-sm font-medium text-paper-2 hover:text-gold">{t('navContact')}</a></li>
          </ul>
        </div>
        <div>
          <p className="mb-3 text-xs font-bold tracking-[0.2em] text-gold">{t('ftSrv')}</p>
          <ul className="grid gap-2">
            <li><a href="#services" className="text-sm font-medium text-paper-2 hover:text-gold">{t('ftSrv1')}</a></li>
            <li><a href="#services" className="text-sm font-medium text-paper-2 hover:text-gold">{t('ftSrv2')}</a></li>
            <li><a href="#services" className="text-sm font-medium text-paper-2 hover:text-gold">{t('ftSrv3')}</a></li>
            <li><a href="#services" className="text-sm font-medium text-paper-2 hover:text-gold">{t('ftSrv4')}</a></li>
            <li><a href="#services" className="text-sm font-medium text-paper-2 hover:text-gold">{t('ftSrv5')}</a></li>
            <li><a href="#services" className="text-sm font-medium text-paper-2 hover:text-gold">{t('ftSrv6')}</a></li>
          </ul>
        </div>
        <div>
          <p className="mb-3 text-xs font-bold tracking-[0.2em] text-gold">{t('ftContact')}</p>
          <a href="#contact" className="text-sm font-bold text-gold transition hover:text-ember">{t('ftConsult')}</a>
          <div className="mt-6 flex flex-wrap gap-4">
            <SocialSlot label="Facebook" url="https://www.facebook.com/michaelapush/?locale=he_IL" />
            <SocialSlot label="TikTok" url="#" />
            <SocialSlot label="Instagram" url="#" />
          </div>
        </div>
      </div>
      <div className="gold-line" />
      <p className="px-4 py-6 text-center text-xs text-muted">
        © {new Date().getFullYear()} מיכאל לפושניאנסקי. {t('ftRights')}
      </p>
    </footer>
  );
}
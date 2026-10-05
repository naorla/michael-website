import { useLanguage } from "../LanguageContext";

export function WhatsAppButton() {
  const { t } = useLanguage();
  const phone = "972522552487";
  const message = encodeURIComponent(t('whatsappMsg'));
  const whatsappUrl = `https://wa.me/${phone}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="fixed bottom-6 left-6 z-50 flex items-center justify-center w-14 h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 group border-2 border-white/80"
    >
      <span className="absolute inset-0 rounded-full bg-emerald-400 opacity-75 animate-ping pointer-events-none" />

      <svg
        className="w-8 h-8 fill-current relative z-10 transition-transform group-hover:rotate-6"
        viewBox="0 0 24 24"
      >
        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.275.072.376-.044c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824zm-3.395-10.416c-5.518 0-9.998 4.48-9.998 9.998 0 1.761.459 3.479 1.33 4.996l-1.414 5.166 5.291-1.388c1.465.799 3.12 1.224 4.791 1.224 5.517 0 9.997-4.48 9.997-9.998 0-5.517-4.48-9.998-9.997-9.998zm0 18.215c-1.503 0-2.977-.406-4.264-1.175l-.306-.182-3.148.826.84-3.069-.199-.317c-.843-1.343-1.289-2.905-1.289-4.501 0-4.53 3.686-8.216 8.216-8.216 4.53 0 8.216 3.686 8.216 8.216 0 4.53-3.686 8.216-8.216 8.216z" />
      </svg>
    </a>
  );
}
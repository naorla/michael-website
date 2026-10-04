import { useEffect } from "react";
import type { GalleryItem } from "../data/gallery";

type Props = {
  item: GalleryItem;
  onClose: () => void;
};

export function Lightbox({ item, onClose }: Props) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 grid place-items-center bg-ink/90 p-4"
      role="dialog"
      aria-modal="true"
      aria-label={item.alt}
      onClick={onClose}
    >
      <button
        type="button"
        className="absolute start-4 top-4 cursor-pointer rounded-full border border-gold/40 px-4 py-2 text-sm text-paper"
        onClick={onClose}
      >
        סגירה
      </button>
      <img
        src={item.src}
        alt={item.alt}
        className="max-h-[86vh] max-w-full object-contain"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
}

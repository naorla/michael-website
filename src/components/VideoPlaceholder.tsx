import { useId } from "react";

type Props = {
  title: string;
  label?: string;
  className?: string;
  onPlay?: () => void;
};

export function VideoPlaceholder({ title, label = "סרטון", className = "", onPlay }: Props) {
  const id = useId();
  return (
    <div className={`relative overflow-hidden bg-ink-3 ${className}`}>
      {/* TODO: swap this placeholder for a real video poster / player when url is provided */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 30% 20%, rgba(201,162,39,0.18), transparent 40%), linear-gradient(160deg, #1c1917, #0b0a09 60%)",
        }}
      />
      <div className="absolute inset-0 opacity-40" aria-hidden="true">
        <div className="h-full w-full bg-[repeating-linear-gradient(90deg,transparent,transparent_18px,rgba(244,239,228,0.03)_19px)]" />
      </div>
      <button
        type="button"
        className="absolute inset-0 grid cursor-pointer place-items-center"
        onClick={onPlay}
        aria-labelledby={id}
      >
        <span className="relative grid h-16 w-16 place-items-center rounded-full border border-gold/70 bg-ink/70 play-pulse">
          <svg viewBox="0 0 24 24" className="ms-1 h-7 w-7 fill-gold" aria-hidden="true">
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
        <span className="sr-only" id={id}>
          נגן {label}: {title}
        </span>
      </button>
    </div>
  );
}

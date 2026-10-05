interface SectionDividerProps {
    variant?: "wave" | "glow" | "badge";
    label?: string;
  }
  
  export function SectionDivider({ variant = "wave", label }: SectionDividerProps) {
    if (variant === "badge" && label) {
      return (
        <div className="relative py-6 flex items-center justify-center bg-[#FAF5EB]">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-[#E2D5C0]/80"></div>
          </div>
          <div className="relative flex items-center gap-2 bg-[#FAF5EB] px-6 py-1.5 rounded-full border border-[#E2D5C0] shadow-xs text-xs font-black text-emerald-800">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>{label}</span>
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
          </div>
        </div>
      );
    }
  
    return (
      <div className="relative w-full overflow-hidden leading-none bg-[#FAF5EB] py-1 pointer-events-none">
        <svg
          className="w-full h-8 sm:h-12 text-[#EFE7D8]/60 fill-current"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
    );
  }
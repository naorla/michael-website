import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  delay?: 1 | 2 | 3 | 4;
};

export function Reveal({ children, className = "", delay }: Props) {
  return (
    <div className={`reveal ${className}`} data-delay={delay}>
      {children}
    </div>
  );
}

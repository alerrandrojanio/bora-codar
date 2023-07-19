import { ReactNode } from "react";

export interface CardRootProps {
  children: ReactNode;
}

export function CardRoot({ children }: CardRootProps) {
  return (
    <div className="flex flex-col items-center justify-between gap-8 rounded-lg bg-zinc-200 px-6 py-6 sm:flex-row">
      {children}
    </div>
  );
}

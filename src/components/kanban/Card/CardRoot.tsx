import { ReactNode } from "react";

export interface CardRootProps {
  children: ReactNode;
}

export function CardRoot({ children }: CardRootProps) {
  return (
    <div
      id="card"
      className="rounded-xl bg-white px-8 py-6 leading-[130%] shadow-md"
    >
      {children}
    </div>
  );
}

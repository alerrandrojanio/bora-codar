import { ReactNode } from "react";

import Image from "next/image";
import Link from "next/link";

export interface CardRootProps {
  children: ReactNode;
}

export function CardRoot({ children }: CardRootProps) {
  return (
    <div className="flex w-[400px] items-center justify-between rounded-lg border-[1px] border-zinc-500 bg-[#0F172A]/80 px-4 py-3 text-zinc-300">
      {children}
    </div>
  );
}

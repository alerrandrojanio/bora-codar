import Link from "next/link";

import { ArrowRightIcon } from "@heroicons/react/24/solid";

export interface CardActionsProps {
  href: string;
}

export function CardActions({ href }: CardActionsProps) {
  return (
    <div>
      <Link
        href={href}
        className="flex h-10 w-10 items-center justify-center rounded-full bg-[#7C3AED] text-white 
drop-shadow-lg transition hover:scale-105 hover:bg-[#9f67ff] hover:drop-shadow-2xl focus:outline-none focus:ring-2 focus:ring-[#9f67ff] active:ring-[#9f67ff]"
      >
        <ArrowRightIcon className="h-6 w-6" />
      </Link>
    </div>
  );
}

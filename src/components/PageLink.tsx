import { ElementType } from "react";

import Link from "next/link";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import { twMerge } from "tailwind-merge";

export interface PageLinkProps {
  href: string;
}

export function PageLink(
  { href }: PageLinkProps,
  Icon: ElementType,
  className?: string
) {
  href === "/"
    ? ((Icon = ArrowLeftIcon), (className = "absolute left-8 top-10 z-50"))
    : (Icon = ArrowRightIcon);

  return (
    <Link
      href={href}
      className={twMerge(
        "flex h-10 w-10 items-center justify-center rounded-full bg-[#7C3AED] text-white drop-shadow-lg transition hover:scale-105 hover:bg-[#9f67ff] hover:drop-shadow-2xl focus:outline-none focus:ring-2 focus:ring-[#9f67ff] active:ring-[#9f67ff]",
        className
      )}
    >
      <Icon className="h-6 w-6" />
    </Link>
  );
}

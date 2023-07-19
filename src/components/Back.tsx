import Link from "next/link";

import { ArrowLeftIcon } from "@heroicons/react/24/solid";

export function Back() {
  return (
    <Link
      href={"/"}
      className="absolute left-8 top-10 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-[#7C3AED] text-white 
    drop-shadow-lg hover:bg-[#9f67ff] hover:drop-shadow-2xl focus:outline-none focus:ring-2 focus:ring-[#9f67ff] active:ring-[#9f67ff]"
    >
      <ArrowLeftIcon className="h-6 w-6" />
    </Link>
  );
}

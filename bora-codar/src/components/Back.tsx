import { ArrowLeftIcon } from "@heroicons/react/24/solid"
import Link from "next/link"

export function Back() {
  return (
    <Link
      href={"/"}
      className="absolute z-50 top-10 left-8 bg-[#7C3AED] w-10 h-10 rounded-full drop-shadow-lg flex justify-center items-center 
    text-white hover:bg-[#9f67ff] hover:drop-shadow-2xl focus:outline-none focus:ring-2 focus:ring-[#9f67ff] active:ring-[#9f67ff]"
    >
      <ArrowLeftIcon className="w-5 h-5" />
    </Link>
  )
}

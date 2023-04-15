import Link from "next/link"

interface IndexButtonProps {
  text: string
  href: string
}

export function IndexButton({ text, href }: IndexButtonProps) {
  return (
    <Link
      href={href}
      className="w-full bg-violet-600 py-2 px-14 rounded-lg flex justify-center text-white font-semibold text-xl hover:bg-violet-700"
    >
      {text}
    </Link>
  )
}

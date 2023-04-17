import Image, { StaticImageData } from "next/image"
import Link from "next/link"

interface IndexCardProps {
  text: string
  href: string
  image: StaticImageData
}

export function IndexCard({ text, href, image }: IndexCardProps) {
  return (
    <div className="py-6 px-8 bg-purple-100 rounded-lg shadow-lg flex flex-col justify-center items-center gap-4">
      <span className="text-violet-500 py-1 rounded-lg flex justify-center text-2xl font-bold">
        {text}
      </span>
      <Link href={href}>
        <Image
          src={image}
          alt=""
          className="rounded-lg hover:scale-105 transition"
          width={300}
        />
      </Link>
    </div>
  )
}

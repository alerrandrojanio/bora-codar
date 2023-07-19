import Image from "next/image";

export interface CardImageProps {
  src: string;
  alt: string;
}

export function CardImage({ src, alt }: CardImageProps) {
  return src ? (
    <Image
      src={src}
      alt={alt}
      width={200}
      height={100}
      className="aspect-video rounded-lg"
    />
  ) : (
    ""
  );
}

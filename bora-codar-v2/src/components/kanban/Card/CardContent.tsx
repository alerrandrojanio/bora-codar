export interface CardContentProps {
  content: string;
}

export function CardContent({ content }: CardContentProps) {
  return <p className="mt-4 text-sm font-medium text-[#756966]">{content}</p>;
}

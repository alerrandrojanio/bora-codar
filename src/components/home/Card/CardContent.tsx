export interface CardContentProps {
  title: string;
  description: string;
}

export function CardContent({ title, description }: CardContentProps) {
  return (
    <div className="flex w-full flex-col items-center px-2 sm:items-start">
      <span className="text-3xl font-semibold text-[#7C3AED]">{title}</span>
      <span className=" text-violet-400">{description}</span>
    </div>
  );
}

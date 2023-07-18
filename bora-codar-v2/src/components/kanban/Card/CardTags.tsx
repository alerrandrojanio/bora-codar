export interface CardTagsProps {
  tags: string[];
}

export function CardTags({ tags }: CardTagsProps) {
  return (
    <div className="mt-4 flex items-center gap-2 font-medium text-[#7c3aed]">
      {tags.map((tag) => {
        return (
          <span key={tag} className="rounded-lg bg-[#e2e6ff] px-2 py-1 text-xs">
            {tag}
          </span>
        );
      })}
    </div>
  );
}

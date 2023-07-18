interface CardKanbanProps {
  title: string
  text: string
  tags: string[]
}

export function CardKanban({ title, text, tags }: CardKanbanProps) {
  return (
    <div
      id="card"
      className="px-8 py-6 bg-white shadow-md rounded-xl leading-[130%]"
    >
      <h3 className="text-lg text-[#403937] font-bold">{title}</h3>
      <p className="mt-4 font-medium text-sm text-[#756966]">{text}</p>
      <div
        id="tags"
        className="flex items-center gap-2 mt-4 text-[#7c3aed] font-medium"
      >
        {tags.map((tag, index) => {
          return (
            <span
              key={index}
              className="py-1 px-2 bg-[#e2e6ff] rounded-lg text-xs"
            >
              {tag}
            </span>
          )
        })}
      </div>
    </div>
  )
}

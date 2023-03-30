interface CardKanbanProps {
  title: string
  text: string
  tag1: string
  tag2: string
}

export function CardKanban({ title, text, tag1, tag2 }: CardKanbanProps) {
  return (
    <div
      id="card"
      className="p-[2.4rem] bg-white shadow-md rounded-xl leading-[130%]"
    >
      <h3 className="text-lg text-[#403937] font-bold">{title}</h3>
      <p className="mt-4 font-medium text-sm text-[#756966]">{text}</p>
      <div
        id="tags"
        className="flex items-center gap-[0.8rem] mt-4 text-[#7c3aed] font-medium text-"
      >
        <span className="py-1 px-2 bg-[#e2e6ff] rounded-lg text-sm">
          {tag1}
        </span>
        <span className="py-1 px-2 bg-[#e2e6ff] rounded-lg text-sm">
          {tag2}
        </span>
      </div>
    </div>
  )
}

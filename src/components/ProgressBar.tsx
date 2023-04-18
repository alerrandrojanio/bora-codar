import clsx from "clsx"

interface ProgressBarProps {
  progress: number
}

export function ProgressBar({ progress }: ProgressBarProps) {
  return (
    <div className="flex gap-2 items-center leading-[8%] mt-1">
      <div className="w-full h-2 rounded-xl bg-[#e3e3ed] overflow-hidden">
        <div
          role="progressbar"
          aria-valuenow={progress}
          className={clsx("flex-1 h-2 rounded-full  transition-all ", {
            "bg-transparent": progress < 0 || progress > 100,
            "bg-[#7a5fec]": progress >= 0 && progress < 100,
            "bg-[#73b172]": progress === 100,
          })}
          style={{ width: `${progress}%` }}
        />
      </div>
      <span className="">
        {progress >= 0 && progress <= 100 ? progress + "%" : "Erro"}
      </span>
    </div>
  )
}

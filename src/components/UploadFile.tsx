import {
  DocumentIcon,
  XMarkIcon,
  ArrowPathIcon,
} from "@heroicons/react/24/solid"
import { ProgressBar } from "./ProgressBar"
import clsx from "clsx"

interface UploadFileProps {
  name: string
  size: string
  completed?: string
  progress: number
}

export function UploadFile({
  name,
  completed,
  size,
  progress,
}: UploadFileProps) {
  return (
    <div
      id="uploading"
      className="w-full px-4 py-4 bg-white shadow-md flex gap-3 rounded-lg"
    >
      <div
        id="icon"
        className={clsx("rounded py-3 px-3 flex items-center justify-center", {
          "bg-[#f2d9d9]": progress < 0 || progress > 100,
          "bg-[#e9e3f8]": progress >= 0 && progress < 100,
          "bg-[#daf2d9]": progress === 100,
        })}
      >
        <DocumentIcon
          className={clsx("w-8 h-8", {
            "text-[#e36363]": progress < 0 || progress > 100,
            "text-[#ac96e4]": progress >= 0 && progress < 100,
            "text-[#73b172]": progress === 100,
          })}
        />
      </div>

      <div id="info" className="flex-1 flex flex-col justify-between">
        <div id="filename" className="font-bold text-sm text-[#575361]">
          <span>{name}</span>
        </div>

        <div id="filesize" className="text-[#857e95] font-medium text-xs">
          {completed ? <span>{completed} / </span> : null}
          <span>{size}</span>
        </div>

        <ProgressBar progress={progress} />
      </div>

      <div id="action">
        <XMarkIcon
          className={clsx("w-4 h-4 text-black cursor-pointer", {
            hidden: progress < 0 || progress > 100,
          })}
        />
        <ArrowPathIcon
          className={clsx("w-4 h-4 text-black cursor-pointer", {
            hidden: progress >= 0 && progress <= 100,
          })}
        />
      </div>
    </div>
  )
}

import clsx from "clsx";

export interface UploadContentProps {
  name: string;
  progress: number;
  size: string;
}

export function UploadContent({ name, progress, size }: UploadContentProps) {
  return (
    <div id="info" className="flex flex-1 flex-col justify-between">
      <div id="filename" className="text-sm font-bold text-[#575361]">
        <span>{name}</span>
      </div>

      <div id="filesize" className="text-xs font-medium text-[#857e95]">
        {progress === 100 ? <span>100 / </span> : null}
        <span>{size}</span>
      </div>

      <div className="mt-1 flex items-center gap-2 leading-[8%]">
        <div className="h-2 w-full overflow-hidden rounded-xl bg-[#e3e3ed]">
          <div
            role="progressbar"
            aria-valuenow={progress}
            className={clsx("h-2 flex-1 rounded-full  transition-all ", {
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
    </div>
  );
}

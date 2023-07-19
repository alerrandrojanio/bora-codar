import clsx from "clsx";

import { DocumentIcon } from "@heroicons/react/24/solid";

export interface UploadIconProps {
  progress: number;
}

const colors = {
  error: "#e36363",
  process: "#ac96e4",
  accepted: "#73b172",
};

export function UploadIcon({ progress }: UploadIconProps) {
  return (
    <div
      className={clsx("flex items-center justify-center rounded px-3 py-3", {
        "bg-[#f2d9d9]": progress < 0 || progress > 100,
        "bg-[#e9e3f8]": progress >= 0 && progress < 100,
        "bg-[#daf2d9]": progress === 100,
      })}
    >
      <DocumentIcon
        className={clsx("h-8 w-8", {
          "text-[#e36363]": progress < 0 || progress > 100,
          "text-[#ac96e4]": progress >= 0 && progress < 100,
          "text-[#73b172]": progress === 100,
        })}
      />
    </div>
  );
}

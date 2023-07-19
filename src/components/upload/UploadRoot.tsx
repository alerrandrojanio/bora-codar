import { ReactNode } from "react";

export interface UploadRootProps {
  children: ReactNode;
}

export function UploadRoot({ children }: UploadRootProps) {
  return (
    <div className="flex w-full gap-3 rounded-lg bg-white px-4 py-4 shadow-md">
      {children}
    </div>
  );
}

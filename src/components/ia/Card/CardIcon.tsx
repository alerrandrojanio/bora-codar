import { ElementType } from "react";

export interface CardIconProps {
  Icon: ElementType;
}

export function CardIcon({ Icon }: CardIconProps) {
  return (
    <div className="rounded-lg border-[1px] border-zinc-500 bg-[#0F172A]/90 p-2">
      <Icon className="h-6 w-6" />
    </div>
  );
}

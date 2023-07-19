import { ReactNode } from "react";

import { AiOutlineArrowRight } from "react-icons/ai";

export interface CardActionsProps {
  hasAction?: boolean;
}

export function CardActions({ hasAction }: CardActionsProps) {
  return hasAction ? (
    <div>
      <AiOutlineArrowRight className="h-6 w-6 hover:text-zinc-100" />
    </div>
  ) : (
    ""
  );
}

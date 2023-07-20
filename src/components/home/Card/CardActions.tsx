import { PageLink } from "@/components/PageLink";

export interface CardActionsProps {
  href: string;
}

export function CardActions({ href }: CardActionsProps) {
  return (
    <div>
      <PageLink href={href} />
    </div>
  );
}

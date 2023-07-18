import { ReactNode } from "react";

import Image from "next/image";
import Link from "next/link";

export interface CardContentProps {
  text: string;
}

export function CardContent({ text }: CardContentProps) {
  return <div className="w-full px-4">{text}</div>;
}

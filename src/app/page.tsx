import Link from "next/link";

import { DarkModeSwitch } from "@/components/DarkModeSwitch";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { Card } from "@/components/home/Card";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-t from-pink-300 via-purple-300 to-indigo-400 p-8 text-zinc-50 dark:from-gray-700 dark:via-gray-900 dark:to-black">
      <header className="flex w-full items-start justify-end px-8">
        <DarkModeSwitch />
      </header>
      <main className="mt-10 flex flex-col items-center justify-center gap-4 px-4">
        <Card.Root>
          <Card.Image src="/ia.png" alt="ia" />
          <Card.Content
            title="Bora Codar #29"
            description="Uma plataforma de IA"
          />
          <Card.Actions href="/ia" />
        </Card.Root>

        <Card.Root>
          <Card.Image src="/upload.png" alt="upload" />
          <Card.Content title="Upload" description="description" />
          <Card.Actions href="/upload" />
        </Card.Root>

        <Card.Root>
          <Card.Image src="/img.jpg" alt="justice league" />
          <Card.Content title="Kanban" description="description" />
          <Card.Actions href="/kanban" />
        </Card.Root>

        <Card.Root>
          <Card.Image src="/creditcard.png" alt="justice league" />
          <Card.Content title="Credit Card" description="description" />
          <Card.Actions href="/creditcard" />
        </Card.Root>
      </main>
    </div>
  );
}

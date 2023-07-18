import { DarkModeSwitch } from "@/components/DarkModeSwitch";

export default function Home() {
  return (
    <div className="flex min-h-screen bg-gradient-to-t from-pink-300 via-purple-300 to-indigo-400 p-8 text-zinc-50 dark:from-gray-700 dark:via-gray-900 dark:to-black">
      <header className="flex w-full items-start justify-end px-8">
        <DarkModeSwitch />
      </header>
    </div>
  );
}

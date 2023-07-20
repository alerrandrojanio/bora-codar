"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

import { MdLightMode } from "react-icons/md";
import { BsFillMoonFill } from "react-icons/bs";

export function DarkModeSwitch() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    mounted && (
      <div
        className="absolute right-8 top-10 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-[#7C3AED] text-white 
  drop-shadow-lg transition hover:scale-105 hover:bg-[#9f67ff] hover:drop-shadow-2xl focus:outline-none focus:ring-2 focus:ring-[#9f67ff] active:ring-[#9f67ff]"
        onClick={() => setTheme(currentTheme === "light" ? "dark" : "light")}
      >
        {currentTheme === "light" ? (
          <BsFillMoonFill className="h-5 w-5" />
        ) : (
          <MdLightMode className="h-5 w-5" />
        )}
      </div>
    )
  );
}

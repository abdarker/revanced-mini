"use client";
import { SunIcon } from "./sun";
import { MoonIcon } from "./moon";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button
      className="p-2 rounded-xl bg-default-100 hover:bg-default-200"
      onClick={toggleTheme}
    >
      {theme === "light" ? <MoonIcon /> : <SunIcon />}
    </button>
  );
};

export default ThemeSwitch;

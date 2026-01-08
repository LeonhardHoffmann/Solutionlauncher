"use client";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useTheme } from "next-themes";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <RadioGroup 
      value={theme} 
      onValueChange={(v) => setTheme(v)} 
      className="flex max-w-md gap-6 pt-2"
    >
      <label className="flex flex-col cursor-pointer">
        <RadioGroupItem value="light" className="sr-only" />
        <div className={`rounded-lg border-2 p-1 transition-all ${
          theme === "light" ? "border-primary" : "border-transparent hover:border-accent"
        }`}>
          <div className="space-y-2 rounded-lg bg-[#ecedef] p-2">
            <div className="space-y-2 rounded-md bg-white p-2 shadow-xs">
              <div className="h-2 w-[80px] rounded-lg bg-[#ecedef]" />
              <div className="h-2 w-[100px] rounded-lg bg-[#ecedef]" />
            </div>
            <div className="flex items-center space-x-2 rounded-md bg-white p-2 shadow-xs">
              <div className="h-4 w-4 rounded-full bg-[#ecedef]" />
              <div className="h-2 w-[100px] rounded-lg bg-[#ecedef]" />
            </div>
          </div>
        </div>
        <span className="block w-full p-2 text-center text-sm font-normal">Light</span>
      </label>

      <label className="flex flex-col cursor-pointer">
        <RadioGroupItem value="dark" className="sr-only" />
        <div className={`rounded-lg border-2 p-1 transition-all ${
          theme === "dark" ? "border-primary" : "border-transparent hover:border-accent"
        }`}>
          <div className="space-y-2 rounded-lg bg-slate-950 p-2">
            <div className="space-y-2 rounded-md bg-slate-800 p-2 shadow-xs">
              <div className="h-2 w-[80px] rounded-lg bg-slate-400" />
              <div className="h-2 w-[100px] rounded-lg bg-slate-400" />
            </div>
            <div className="flex items-center space-x-2 rounded-md bg-slate-800 p-2 shadow-xs">
              <div className="h-4 w-4 rounded-full bg-slate-400" />
              <div className="h-2 w-[100px] rounded-lg bg-slate-400" />
            </div>
          </div>
        </div>
        <span className="block w-full p-2 text-center text-sm font-normal">Dark</span>
      </label>
    </RadioGroup>
  );
}

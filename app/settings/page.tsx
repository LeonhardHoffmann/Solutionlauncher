"use client";

import { useEffect, useState } from "react";
import { open } from "@tauri-apps/plugin-dialog"; 
import ThemeSwitcher from "@/components/theme-switcher-02";

export default function Settings() {
  const [selectedPath, setSelectedPath] = useState<string | null>(null);

  const handleSelectFolder = async () => {
    try {
      const selected = await open({
        directory: true, 
        multiple: false, 
        title: "Select Project Installation Path"
      });

      if (selected) {
        setSelectedPath(selected);
        localStorage.setItem("selectedPath", selected)
      }
    } catch (error) {
      console.error("Fehler beim Öffnen des Dialogs:", error);
    }
  };

  useEffect(() => {
    if(localStorage.getItem("selectedPath")?.length != 0) {
      setSelectedPath(localStorage.getItem("selectedPath"))
    } 
  }, [])

  return (
    <>
      <div className="w-screen">
        <h1 className="text-primary flex justify-center w-full font-bold text-7xl">
          Settings
        </h1>
      </div>
      <section className="my-5 mx-[300px] border-2 rounded-xl p-10">
        <section className="border-b-2 pb-6">
          <h2 className="font-bold text-2xl">Color theme</h2>
          <ThemeSwitcher />
        </section>
        
        <section className="pt-6">
          <h2 className="font-bold text-2xl">Project installation path</h2>
          <h3 className="text-gray-500 mb-4">Select the path where your projects will be saved</h3>
          
          <div className="flex gap-2">
            <input 
              type="text" 
              value={selectedPath || ""} 
              placeholder="No path selected"
              readOnly
              className="flex-1 p-2 border rounded bg-muted text-sm"
            />
            <button 
              onClick={handleSelectFolder}
              className="bg-primary text-white px-4 py-2 rounded hover:opacity-90 transition"
            >
              Browse
            </button>
          </div>
        </section>
      </section>
    </>
  );
}

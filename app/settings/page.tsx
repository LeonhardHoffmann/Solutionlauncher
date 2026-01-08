"use client";

import ThemeSwitcher from "@/components/theme-switcher-02";

export default function Settings() {
  return (
    <>
      <div className="w-screen">
        <h1 className="text-primary flex justify-center w-full font-bold text-7xl">
          Settings
        </h1>
      </div>
      <section className="my-5 mx-[300] border-3 rounded-xl p-10">
        <h2 className="font-bold text-2xl">Color theme</h2>
        <ThemeSwitcher></ThemeSwitcher>
      </section>
    </>
  );
}

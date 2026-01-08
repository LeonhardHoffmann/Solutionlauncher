"use client";

import { Input } from "@/components/ui/input";
import { useState } from "react";
import { X } from "lucide-react";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  const stopCreation = () => (
    setSearchTerm("")
  )

  return (
    <>
      <div className="w-screen">
        <h1 className="text-primary flex justify-center w-full font-bold text-7xl">
          Create new Project
        </h1>
        <section className="my-5 mx-[300] border-3 rounded-xl p-10">
          <div className="flex flex-row gap-2">
            <Input
              placeholder="search for a frontend technology..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="rounded-xl"
            ></Input>
            <button
              className={`p-1 bg-[red]/30 border-1 border-[red] rounded-xl hover:bg-red-100 ${
                searchTerm.length !== 0 ? "block" : "hidden"
              }`}
              onClick={stopCreation}
            >
              <X className="text-[red]" />
            </button>
          </div>
        </section>
      </div>
    </>
  );
}

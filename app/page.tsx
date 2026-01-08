"use client";

import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Eye, X, Database, Cpu, ServerCog } from "lucide-react";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  const steps = { frontend: true, backend: false, database: false, generation: false };

  const stopCreation = () => (
    setSearchTerm("")
  )

  return (
    <>
      <div className="w-screen">
        <h1 className="text-primary flex justify-center w-full font-bold text-7xl">
          Create new Project
        </h1>
        <section>
          <div>
            <h2 className="text-center text-2xl font-semibold mt-10">
              Select a frontend technology
            </h2>
            <p className="text-center text-md mt-2 text-gray-500">
              Choose from popular frameworks and libraries
            </p>
          </div>
        </section>
        <section className="my-5 mx-[300] border-3 rounded-xl p-10">
          <div className="flex flex-col gap-10">
            <div className="flex flex-row justify-center items-center gap-3">
              <div className="flex flex-col justify-center items-center">
                <Eye />
                <span>Frontend</span>
              </div>
              <hr className="bg-primary py-[2] px-10 rounded-full" />

              <div className="flex flex-col justify-center items-center">
                <ServerCog />
                <span>Backend</span>
              </div>
              <hr className="bg-primary py-[2] px-10 rounded-full" />

              <div className="flex flex-col justify-center items-center">
                <Database />
                <span>Database</span>
              </div>
              <hr className="bg-primary py-[2] px-10 rounded-full" />

              <div className="flex flex-col justify-center items-center">
                <Cpu />
                <span>Generation</span>
              </div>

            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-bold ">Search technologies</h3>
              <div className="flex flex-row gap-2">
                <Input
                  placeholder="search for a frontend technology..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="rounded-xl"
                ></Input>
                <button
                  className={`p-1 bg-[red]/30 border-1 border-[red] rounded-xl hover:bg-red-100 ${searchTerm.length !== 0 ? "block" : "hidden"
                    }`}
                  onClick={stopCreation}
                >
                  <X className="text-[red]" />
                </button>
              </div>
            </div>
          </div>
        </section>
      </div >
    </>
  );
}

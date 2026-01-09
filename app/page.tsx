"use client";

import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Eye, X, Database, Cpu, ServerCog } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  const [steps, setSteps] = useState(0);
  const stopCreation = () => setSearchTerm("");

  type Technology = {
    name: string;
    category: "frontend" | "backend" | "database";
    logoUrl: string;
  }

  const frontendTechnologies: Technology[] = [
    {
      name: "React",
      category: "frontend",
      logoUrl: "/tech-logos/react.svg",
    },
    {
      name: "Vue.js",
      category: "frontend",
      logoUrl: "/logos/vue.png",
    },
  ];

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
              <div className={`flex flex-col justify-center items-center ${steps > 0 ? "text-primary" : "text-black"}`}>
                <Eye />
                <span>Frontend</span>
              </div>
              <hr className={`hidden sm:block h-[2px] w-8 md:w-16 border-none ${steps >= 1 ? "bg-primary" : "bg-black/30"
                }`}
              />

              <div className={`flex flex-col justify-center items-center ${steps >= 2 ? "text-primary" : "text-black"}`}>
                <ServerCog />
                <span>Backend</span>
              </div>
              <hr className={`hidden sm:block h-[2px] w-8 md:w-16 border-none ${steps >= 2 ? "bg-primary" : "bg-black/30"
                }`}
              />

              <div className={`flex flex-col justify-center items-center ${steps >= 3 ? "text-primary" : "text-black"}`}>
                <Database />
                <span>Database</span>
              </div>
              <hr className={`hidden sm:block h-[2px] w-8 md:w-16 border-none ${steps >= 3 ? "bg-primary" : "bg-black/30"
                }`}
              />

              <div className={`flex flex-col justify-center items-center ${steps >= 5 ? "text-primary" : "text-black"}`}>
                <Cpu />
                <span>Generation</span>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-bold ">Search technologies</h3>
              <div className="flex flex-col gap-4">
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
                {/*-- Technology Selection --*/}
                <section className={`${steps === 0 ? "block" : "hidden"}`}>
                  <div className="flex flex-row gap-3">
                    {frontendTechnologies.map(technology => (
                      <div key={technology.name} className="flex flex-col justify-center items-center gap-4 w-30 h-30 border rounded-xl hover:bg-gray-100 cursor-pointer">
                        <img src={technology.logoUrl} alt={`${technology.name} logo`} className="w-10 h-10" />
                        <div>
                          <h4 className="font-bold">{technology.name}</h4>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
                <div className="flex flex-row justify-between">
                  <Button
                    disabled={steps <= 0}
                    className="flex self-end bg-primary text-white rounded-xl px-5 py-2 cursor-pointer"
                    onClick={() => setSteps(steps - 1)}
                  >
                    back
                  </Button>
                  <Button
                    disabled={steps >= 5}
                    className="flex self-end bg-primary text-white rounded-xl px-5 py-2 cursor-pointer"
                    onClick={() => setSteps(steps + 1)}
                  >
                    {steps <= 3 ? "next" : "generate"}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

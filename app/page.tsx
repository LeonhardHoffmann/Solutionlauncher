"use client";

import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Eye, X, Database, Cpu, ServerCog } from "lucide-react";
import { Button } from "@/components/ui/button";
import Techbox from "@/components/techbox";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  const [steps, setSteps] = useState(0);
  const stopCreation = () => setSearchTerm("");
  const [selectedFrontendTechnologys, setSelectedFrontendTechnologys] =
    useState<string[]>([]);
  const [selectedBackendTechnologies, setSelectedBackendTechnologies] =
    useState<string[]>([]);
  const [selectedDatabaseTechnologies, setSelectedDatabaseTechnologies] =
    useState<string[]>([]);
  const [configuration, setConfiguration] = useState<Technology[]>([]);

  const selectedTechnologies = [selectedFrontendTechnologys, selectedBackendTechnologies, selectedDatabaseTechnologies];
  type Technology = {
    name: string;
    category: "frontend" | "backend" | "database";
    logoUrl: string;
  };

  const frontendTechnologies: Technology[] = [
    {
      name: "React",
      category: "frontend",
      logoUrl: "/tech-logos/react.svg",
    },
    {
      name: "Vue.js",
      category: "frontend",
      logoUrl: "/tech-logos/vue.svg",
    },
  ];


  const backendTechnologies: Technology[] = [
    {
      name: "Node.js",
      category: "backend",
      logoUrl: "/tech-logos/node.svg",
    },
  ];

  const databaseTechnologies: Technology[] = [
    {
      name: "MongoDB",
      category: "database",
      logoUrl: "/tech-logos/mongodb.svg",
    },
  ];

  function handleSelect(technology: string) {
    if (steps === 0) {
      if (selectedFrontendTechnologys.includes(technology)) {
        setSelectedFrontendTechnologys(selectedFrontendTechnologys.filter((t) => t !== technology));
      } else {
        setSelectedFrontendTechnologys([...selectedFrontendTechnologys, technology]);
      }
    } else if (steps === 1) {
      if (selectedBackendTechnologies.includes(technology)) {
        setSelectedBackendTechnologies(selectedBackendTechnologies.filter((t) => t !== technology));
      } else {
        setSelectedBackendTechnologies([...selectedBackendTechnologies, technology]);
      }
    } else if (steps === 2) {
      if (selectedDatabaseTechnologies.includes(technology)) {
        setSelectedDatabaseTechnologies(selectedDatabaseTechnologies.filter((t) => t !== technology));
      } else {
        setSelectedDatabaseTechnologies([...selectedDatabaseTechnologies, technology]);
      }
    }
  }
  function handleSearch(searchTerm: string) {
    console.log(frontendTechnologies.some(technology => technology.name.toLowerCase().includes(searchTerm.toLowerCase())));
  }
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
              <div
                className={`flex flex-col justify-center items-center ${steps > 0 ? "text-primary" : "text-foreground"
                  }`}
              >
                <Eye />
                <span>Frontend</span>
              </div>
              <hr
                className={`hidden sm:block h-[2px] w-8 md:w-16 border-none ${steps >= 1 ? "bg-primary" : "bg-foreground"
                  }`}
              />

              <div
                className={`flex flex-col justify-center items-center ${steps >= 2 ? "text-primary" : "text-foreground"
                  }`}
              >
                <ServerCog />
                <span>Backend</span>
              </div>
              <hr
                className={`hidden sm:block h-[2px] w-8 md:w-16 border-none ${steps >= 2 ? "bg-primary" : "bg-foreground"
                  }`}
              />

              <div
                className={`flex flex-col justify-center items-center ${steps >= 3 ? "text-primary" : "text-foreground"
                  }`}
              >
                <Database />
                <span>Database</span>
              </div>
              <hr
                className={`hidden sm:block h-[2px] w-8 md:w-16 border-none ${steps >= 3 ? "bg-primary" : "bg-foreground"
                  }`}
              />

              <div
                className={`flex flex-col justify-center items-center ${steps >= 5 ? "text-primary" : "text-foreground"
                  }`}
              >
                <Cpu />
                <span>Generation</span>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-col gap-4">
                <div className={`${steps >= 3 ? "hidden" : "block"}`}>
                  <h3 className="font-bold ">{steps == 0 ? "Search frontend technologies" : steps == 1 ? "Search backend technologies" : steps == 2 ? "Search database technologies" : ""}</h3>
                  <div className="flex flex-row gap-2">
                    <Input
                      placeholder={steps == 0 ? "search for a frontend technology..." : steps == 1 ? "search for a backend technology..." : "search for a database technology..."}
                      value={searchTerm}
                      onChange={(e) => (
                        setSearchTerm(e.target.value),
                        handleSearch(searchTerm)
                      )}
                      className={`rounded-xl ${steps >= 3 ? "hidden" : "block"}`}
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
                {/*-- Technology Selection --*/}
                <section className={`${steps === 0 ? "block" : "hidden"}`}>
                  <div className="flex flex-row gap-3">
                    {frontendTechnologies.map((technology) => (
                      <Techbox
                        selected={selectedFrontendTechnologys.includes(
                          technology.name
                        )}
                        onSelect={() => handleSelect(technology.name)}
                        key={technology.name}
                        name={technology.name}
                        logoUrl={technology.logoUrl}
                      ></Techbox>
                    ))}
                  </div>
                </section>
                <section className={`${steps === 1 ? "block" : "hidden"}`}>
                  <div className="flex flex-row gap-3">
                    {backendTechnologies.map((technology) => (
                      <Techbox
                        selected={selectedBackendTechnologies.includes(
                          technology.name
                        )}
                        onSelect={() => handleSelect(technology.name)}
                        key={technology.name}
                        name={technology.name}
                        logoUrl={technology.logoUrl}
                      ></Techbox>
                    ))}
                  </div>
                </section>
                <section className={`${steps === 2 ? "block" : "hidden"}`}>
                  <div className="flex flex-row gap-3">
                    {databaseTechnologies.map((technology) => (
                      <Techbox
                        selected={selectedDatabaseTechnologies.includes(
                          technology.name
                        )}
                        onSelect={() => handleSelect(technology.name)}
                        key={technology.name}
                        name={technology.name}
                        logoUrl={technology.logoUrl}
                      ></Techbox>
                    ))}
                  </div>
                </section>
                <section className={`${steps === 3 ? "block" : "hidden"}`}>
                  <div className="flex flex-col gap-2">
                    <h3 className="font-bold ">Selected Technologies:</h3>
                    <h2>{selectedTechnologies[0].map(technology => technology)}</h2>
                    <h2>{selectedTechnologies[1].map(technology => technology)}</h2>
                    <h2>{selectedTechnologies[2].map(technology => technology)}</h2>
                  </div>
                </section>
                <div className="flex flex-row justify-between">
                  <Button
                    disabled={
                      steps <= 0 || selectedFrontendTechnologys.length === 0
                    }
                    className={`flex self-end bg-primary text-white rounded-xl px-5 py-2 cursor-pointer`}
                    onClick={() => setSteps(steps - 1)}
                  >
                    back
                  </Button>
                  <Button
                    disabled={
                      steps >= 4 || selectedFrontendTechnologys.length === 0
                    }
                    className={`flex self-end bg-primary text-white rounded-xl px-5 py-2 cursor-pointer`}
                    onClick={() => {
                      setSteps(steps + 1),
                        setConfiguration(frontendTechnologies)
                    }
                    }
                  >
                    {steps <= 2 ? "next" : "generate"}
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

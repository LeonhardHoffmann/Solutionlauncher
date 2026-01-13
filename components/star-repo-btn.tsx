"use client";

import { Button } from "./ui/button";
import { Star } from "lucide-react";
import { open } from "@tauri-apps/plugin-shell";
import { cn } from "@/lib/utils";

interface ButtonProps {
    className?: string
}

export default function StarRepoBtn({className}: ButtonProps) {
    async function openSiteInDeviceBrowser() {
        await open("https://github.com/LeonhardHoffmann/Solutionlauncher");
    }

    return (
        <Button className={cn("bg-background hover:bg-background hover:cursor-pointer", className)} onClick={openSiteInDeviceBrowser}>
            <Star className="text-[#ffe100] size-9"/>
        </Button>
    );
}
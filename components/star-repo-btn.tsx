"use client";

import { Button } from "./ui/button";
import { Star } from "lucide-react";
import { open } from "@tauri-apps/plugin-shell";

export default function StarRepoBtn() {
    async function openSiteInDeviceBrowser() {
        await open("https://github.com/LeonhardHoffmann/Solutionlauncher");
    }

    return (
        <Button onClick={openSiteInDeviceBrowser}>
            <Star />
        </Button>
    );
}
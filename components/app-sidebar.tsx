import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { BadgePlus, Settings } from "lucide-react";
import Link from "next/link";
import SidebarButton from "./sidebar-btn";

export function AppSidebar() {
  return (
    <Sidebar variant="sidebar">
      <SidebarHeader className="mx-2">
        <Link
          href="/settings"
          className="bg-primary flex flex-row justify-center items-center gap-3 cursor-pointer rounded-xl py-5 mt-3 text-white"
        >
          <BadgePlus />
          <span>New Project</span>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup />
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter className="mx-2">
        <SidebarButton>
          <Link
           href={"/settings"}
           className="flex flex-row gap-2 justify-center"
           >
            <Settings />
            <span>Settings</span>
            </Link>
        </SidebarButton>
      </SidebarFooter>
    </Sidebar>
  );
}

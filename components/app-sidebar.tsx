import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { BadgePlus } from "lucide-react";
import Link from "next/link";

export function AppSidebar() {
  return (
    <Sidebar variant="sidebar">
      <SidebarHeader>
        <Link
          href="/settings"
          className="bg-primary flex flex-row justify-center items-center gap-3 cursor-pointer rounded-xl py-5 mx-2 mt-3 text-background hover:opacity-90 transition-opacity"
        >
          <BadgePlus />
          <span>New Project</span>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup />
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}

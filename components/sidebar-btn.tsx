import { ReactNode } from "react";

interface SidebarButtonProps {
    children: ReactNode
    onClick?: () => void
}

export default function SidebarButton({children, onClick}: SidebarButtonProps) {
  return (
    <>
      <button className="bg-foreground/30 text-foreground rounded-xl cursor-pointer p-3 mb-5 flex flex-row gap-3 w-full justify-center">{children}</button>
    </>
  );
}

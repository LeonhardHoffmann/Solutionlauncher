import { ReactNode } from "react";

interface SidebarButtonProps {
    children: ReactNode
    onClick?: () => void
}

export default function SidebarButton({children, onClick}: SidebarButtonProps) {
  return (
    <>
      <button>{children}</button>
    </>
  );
}

import SideBar from "@/components/SideBar";
import React from "react";

export default function WithSideBarLayout({ children }) {
  return (
    <div className="flex">
      <SideBar />
      <div className="w-full">{children}</div>
    </div>
  );
}

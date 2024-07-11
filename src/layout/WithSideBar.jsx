import SideBar from "@/components/SideBar";
import React from "react";

export default function WithSideBarLayout({ children }) {
  return (
    <div className="flex m-10">
      <SideBar />
      <div className="w-[10%]"></div>
      <div className="w-full">{children}</div>
    </div>
  );
}

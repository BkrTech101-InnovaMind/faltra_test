import Pagination from "@/components/PaginationBar";
import SideBar from "@/components/SideBar";
import React from "react";

export default function WithSideBarLayout({ children }) {
  return (
    <div className="flex gap-x-10 max-h-[98vh] scrollbar-hide">
      <div className=" max-h-[100%] overflow-y-scroll">
        <SideBar />
      </div>
      <div className="flex-1">
        <div className="max-h-[94%] overflow-y-scroll">{children}</div>
        <Pagination />
      </div>
    </div>
  );
}

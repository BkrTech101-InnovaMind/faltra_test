import Pagination from "@/components/PaginationBar";
import SideBar from "@/components/SideBar";
import React from "react";

export default function WithSideBarLayout({ children }) {
  return (
    <div className="flex gap-x-10 max-h-[98vh] scrollbar-hide mx-5">
      <div className=" max-h-[100%] overflow-y-scroll">
        <SideBar />
      </div>
      <div className="flex-1">
        <div className="max-h-[90%] overflow-y-scroll">{children}</div>
        <div className="sticky bottom-0 py-2 bg-white border-t-4">
          <Pagination />
        </div>
      </div>
    </div>
  );
}

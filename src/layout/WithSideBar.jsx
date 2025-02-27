import Pagination from "@/components/PaginationBar";
import SideBar from "@/components/SideBar";

export default function WithSideBarLayout({
  children,
  currentPage,
  totalItems,
  itemsPerPage,
  onPageChange,
  onFilterChange,
}) {
  return (
    <div className="flex gap-x-10 max-h-[98vh] scrollbar-hide mx-5">
      <div className=" max-h-[100%] overflow-y-scroll">
        <SideBar onFilterChange={onFilterChange} />
      </div>
      <div className="flex-1">
        <div className="h-[90%] overflow-y-scroll">{children}</div>
        <div className="sticky bottom-0 py-2 bg-white border-t-4">
          <Pagination
            currentPage={currentPage}
            totalItems={totalItems}
            itemsPerPage={itemsPerPage}
            onPageChange={onPageChange}
          />
        </div>
      </div>
    </div>
  );
}

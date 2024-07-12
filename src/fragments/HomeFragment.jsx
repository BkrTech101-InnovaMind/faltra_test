import DetailsCard from "@/components/DetailsCard";
import WithSideBarLayout from "@/layout/WithSideBar";
import useResponseData from "@/services/useResponseData";
import React, { useMemo, useState } from "react";

export default function HomeFragment() {
  const { data, isLoading, error } = useResponseData();
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({
    bonus: ["all"],
    industry: ["all"],
    location: ["all"],
  });

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    setCurrentPage(1);
  };

  const itemsPerPage = 9;

  const filteredData = useMemo(() => {
    return data.filter((item) => {
      const bonusMatch =
        filters.bonus.includes("all") ||
        (filters.bonus.includes("With Bonus") && item.details.bonus !== "no") ||
        (filters.bonus.includes("Without Bonus") &&
          item.details.bonus === "no");
      const industryMatch =
        filters.industry.includes("all") ||
        filters.industry.includes(item.details.industry);
      const locationMatch =
        filters.location.includes("all") ||
        filters.location.includes(item.details.country);

      return bonusMatch && industryMatch && locationMatch;
    });
  }, [data, filters]);

  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredData.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredData, currentPage]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <WithSideBarLayout
      currentPage={currentPage}
      totalItems={filteredData.length}
      itemsPerPage={itemsPerPage}
      onPageChange={setCurrentPage}
      onFilterChange={handleFilterChange}
    >
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-y-6">
        {paginatedData.map((details) => (
          <DetailsCard key={details.id} details={details.details} />
        ))}
      </section>
    </WithSideBarLayout>
  );
}

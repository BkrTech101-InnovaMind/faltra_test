import DetailsCard from "@/components/DetailsCard";
import PaginationBar from "@/components/PaginationBar";
import WithSideBarLayout from "@/layout/WithSideBar";
import useResponseData from "@/services/useResponseData";
import React from "react";

export default function HomeFragment() {
  const { data, isLoading, error } = useResponseData();
  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <WithSideBarLayout>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((details) => (
          <DetailsCard key={details.id} details={details} />
        ))}
      </section>
      <PaginationBar />
    </WithSideBarLayout>
  );
}

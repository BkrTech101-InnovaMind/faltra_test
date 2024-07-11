import Image from "next/image";
import React from "react";
import RatingStart from "./RatingStart";

export default function DetailsCard({ details }) {
  return (
    <div className="w-[80%] bg-[#F8FAFF] rounded-3xl flex flex-col justify-center items-center object-center shadow-lg  border border-[#E0E6F6] py-5">
      <Image
        className="rounded-full w-[25%]"
        src={details.image}
        alt={details.company_name}
        width={1920}
        height={1080}
        priority={true}
      />
      <div className="text-center w-[90%]">
        <p className="text-xl text-gray-700 font-bold mb-2 truncate">
          {details.company_name}
        </p>
        <p className="flex justify-center items-center">
          <RatingStart rateVal={details.rating} /> {"(65)"}
        </p>
        <p className="text-base text-gray-400 font-normal flex justify-center gap-2">
          <Image
            src="/assets/images/location-pointer.png"
            alt="location pointer"
            width={25}
            height={25}
          />
          {details.country}, {details.brand}
        </p>
      </div>

      <button
        type="button"
        className="py-4 px-5 bg-[#E0E6F6] mt-3 rounded-lg focus:bg-blue-500"
      >
        {details.open_jobs} jobs open
      </button>
    </div>
  );
}

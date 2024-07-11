import Image from "next/image";
import React from "react";

export default function DetailsCard({ details }) {
  return (
    <div className="w-full bg-white rounded-lg flex flex-col justify-center items-center">
      <div className="mb-8">
        <Image
          className="object-center object-cover rounded-full h-36 w-36"
          src={details.details.image}
          alt={details.details.company_name}
          width={1920}
          height={1080}
          priority={true}
        />
      </div>
      <div className="text-center">
        <p className="text-xl text-gray-700 font-bold mb-2">
          {details.details.company_name}
        </p>
        <p className="text-base text-gray-400 font-normal">Software Engineer</p>
      </div>
    </div>
  );
}

import React from "react";

export default function RatingStar({ rateVal }) {
  const totalStars = 5;

  const stars = Array.from({ length: totalStars }, (v, i) => (
    <span key={i} className={i < rateVal ? "text-yellow-500" : "text-gray-300"}>
      ★
    </span>
  ));

  return (
    <div className="flex gap-1 justify-center text-[150%] font-bold">
      {stars}
    </div>
  );
}

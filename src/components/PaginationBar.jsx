import { useState } from "react";
import ArrowIcon from "./ArrowIcon";

export default function Pagination() {
  const [active, setActive] = useState(1);
  const totalItems = 10;

  const getItemProps = (index) => ({
    variant: index,
    onClick: () => setActive(index),
    className:
      active === index
        ? "rounded-full bg-[#E0E6F6] text-[#66789C]  font-bold"
        : "text-[#A0ABB8]",
  });

  const next = () => {
    if (active === totalItems) return;
    setActive(active + 1);
  };

  const prev = () => {
    if (active === 1) return;
    setActive(active - 1);
  };

  const getPaginationRange = () => {
    if (totalItems <= 5) {
      return Array.from({ length: totalItems }, (_, i) => i + 1);
    }

    const start = Math.max(1, active - 2);
    const end = Math.min(totalItems, active + 2);
    const range = [];

    for (let i = start; i <= end; i++) {
      range.push(i);
    }

    while (range.length < 5 && range[0] > 1) {
      range.unshift(range[0] - 1);
    }

    while (range.length < 5 && range[range.length - 1] < totalItems) {
      range.push(range[range.length - 1] + 1);
    }

    return range;
  };

  return (
    <div className="flex items-center gap-4">
      <PaginationArrows rotate={true} onClick={prev} active={active > 1} />
      {getPaginationRange().map((index) => (
        <PaginationButton key={index} {...getItemProps(index)} />
      ))}
      <PaginationArrows onClick={next} active={active < totalItems} />
    </div>
  );
}
function PaginationButton({ variant, onClick, className }) {
  return (
    <button className={`py-2 px-4 rounded-full ${className}`} onClick={onClick}>
      {variant}
    </button>
  );
}

function PaginationArrows({ rotate, active, onClick }) {
  return (
    <button
      onClick={onClick}
      type="button"
      className="p-4 bg-[#E0E6F6] rounded-full object-center focus:bg-blue-500"
    >
      <ArrowIcon rotate={rotate} color={active ? "#fff" : "#A0ABB8"} />
    </button>
  );
}

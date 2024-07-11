import React from "react";

export default function ArrowIcon({ color, size, rotate }) {
  return (
    <svg
      width={size ?? 20}
      height={size ?? 20}
      viewBox="0 0 9 15"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={`rotate-[${rotate ?? 0}deg]`}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.31133 1.09776C1.93855 0.724983 1.33417 0.724983 0.961398 1.09776C0.588625 1.47053 0.588625 2.07491 0.961398 2.44769L6.01371 7.49999L0.961398 12.5523C0.588625 12.9251 0.588625 13.5295 0.961398 13.9022C1.33417 14.275 1.93855 14.275 2.31133 13.9022L8.03861 8.17496C8.41137 7.80218 8.41137 7.1978 8.03861 6.82503L2.31133 1.09776Z"
      />
    </svg>
  );
}

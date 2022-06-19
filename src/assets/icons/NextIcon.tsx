import * as React from "react";

function NextIcon({ color }) {
  return (
    <svg
      width={10}
      height={19}
      viewBox="0 0 16 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 3.089L3.089 0l12.5 12.5L3.089 25 0 21.911 9.411 12.5 0 3.089z"
        fill={color}
      />
    </svg>
  );
}

export default NextIcon;

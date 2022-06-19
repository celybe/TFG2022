import * as React from "react";

function BackIcon({ color }) {
  return (
    <svg
      width={10}
      height={19}
      viewBox="0 0 17 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.294 3.383L13.206.294l-12.5 12.5 12.5 12.5 3.088-3.088-9.41-9.412 9.41-9.41z"
        fill={color}
      />
    </svg>
  );
}

export default BackIcon;

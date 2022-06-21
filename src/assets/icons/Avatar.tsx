import * as React from "react";

function AvatarIcon(props) {
  return (
    <svg
      width={54}
      height={54}
      viewBox="0 0 54 54"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M0 4a4 4 0 014-4h46a4 4 0 014 4v46a4 4 0 01-4 4H4a4 4 0 01-4-4V4z"
        fill="#00D4A1"
        fillOpacity={0.42}
      />
      <path
        d="M27 27c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
        fill="#002A20"
      />
    </svg>
  );
}

export default AvatarIcon;

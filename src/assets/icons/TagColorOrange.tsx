import * as React from "react";
import { Icon } from "@chakra-ui/react";

function TagColorOrange(props, color) {
  return (
    <Icon
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx={10} cy={10} r={10} fill={color} />
    </Icon>
  );
}

export default TagColorOrange;

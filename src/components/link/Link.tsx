import React from "react";
import { Link as RouterLink, To } from "react-router-dom";
import { Link as ChakraLink, useColorModeValue } from "@chakra-ui/react";
type Props = {
  label: string;
  path: To;
  variant?: string;
  display?: number;
  key?: string;
};
const Link = ({ label, path, variant, display, key }: Props) => {
  let link;
  let displayed;
  const bg = useColorModeValue("#00D4A1", "#00FFC1");
  const bgHover = useColorModeValue("#00FFC1", "#00D4A1");
  const bgActive = useColorModeValue("#00D4A1", "#00FFC1");

  if (display === 1) {
    displayed = { base: "none", md: "inline-flex" };
  } else {
  }

  if (variant === "button") {
    link = (
      <ChakraLink
        as={RouterLink}
        to={path}
        backgroundColor={bg}
        borderColor={bg}
        border="1px"
        borderRadius="2px"
        key={key}
        _hover={{
          bg: { bgHover },
        }}
        _active={{
          bg: { bgActive },
          transform: "scale(0.98)",
          borderColor: { bgHover },
        }}
        _focus={{
          boxShadow: "0 0 1px 2px #00D4A1, 0 1px 1px rgba(0, 0, 0, .15)",
        }}
        display={displayed}
      >
        {label}
      </ChakraLink>
    );
  } else {
    <ChakraLink
      as={RouterLink}
      to={path}
      color={bg}
      key={key}
      display={displayed}
    >
      {label}
    </ChakraLink>;
  }

  return <div>{link}</div>;
};

export default Link;

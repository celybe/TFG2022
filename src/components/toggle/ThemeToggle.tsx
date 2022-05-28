import { Button, Flex, Icon, useColorMode } from "@chakra-ui/react";
import { MdOutlineWbSunny } from "react-icons/md";
import { MdNightlight } from "react-icons/md";

export default function ThemeToggle() {
  const { colorMode, toggleColorMode } = useColorMode();

  let icon;
  if (colorMode === "light") {
    icon = <Icon as={MdOutlineWbSunny} w={5} h={5} />;
  } else {
    icon = <Icon as={MdNightlight} w={5} h={5} />;
  }
  return (
    <div>
      <Flex align="center" justify="center" direction="column">
        <Button
          size="sm"
          backgroundColor="transparent"
          _hover={{ bg: "transparent" }}
          _active={{ bg: "transparent" }}
          _focus={{ outline: "none" }}
          onClick={() => toggleColorMode()}
        >
          {icon}
        </Button>
      </Flex>
    </div>
  );
}

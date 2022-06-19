import {
  Flex,
  Grid,
  GridItem,
  Heading,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import GlobalContext from "context/GlobalContext";
import dayjs from "dayjs";
import { useContext, useEffect, useRef } from "react";
const Day = ({ day, rowIdx }) => {
  const { setDaySelected } = useContext(GlobalContext);
  const { monthIndex } = useContext(GlobalContext);
  const bg2 = useColorModeValue("#000A0F", "#ffffff");
  const bg3 = useColorModeValue("teal.50", "teal.900");
  const bg4 = useColorModeValue("teal.600", "teal.400");
  function getCurrentDayClass() {
    return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY") ? true : false;
  }

  return (
    <Grid as={"div"} bg={getCurrentDayClass() ? bg3 : "transparent"} pt="1rem">
      <GridItem>
        <Heading
          size="md"
          as={"h3"}
          mx={3}
          pb={"9rem"}
          color={getCurrentDayClass() ? bg4 : bg2}
        >
          {day.format("DD")}
        </Heading>
      </GridItem>
    </Grid>
  );
};

export default Day;

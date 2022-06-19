import {
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  IconButton,
  SimpleGrid,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import BackIcon from "assets/icons/BackIcon";
import NextIcon from "assets/icons/NextIcon";
import GlobalContext from "context/GlobalContext";
import dayjs from "dayjs";
import React, { useContext } from "react";

const Header = () => {
  const color = useColorModeValue("#00a17a", "#00FFC1");
  const { monthIndex, setMonthIndex } = useContext(GlobalContext);
  function handlePrevMonth() {
    setMonthIndex(monthIndex - 1);
  }
  function handleNextMonth() {
    setMonthIndex(monthIndex + 1);
  }
  function handleReset() {
    setMonthIndex(
      monthIndex === dayjs().month()
        ? monthIndex + Math.random()
        : dayjs().month()
    );
  }
  return (
    <Grid templateColumns="repeat(3, 1fr)" p="4" gap={2}>
      <GridItem>
        <Button size="sm" colorScheme="teal" onClick={handleReset}>
          Today
        </Button>
      </GridItem>

      <Grid templateColumns="repeat(12, 1fr)" gap={1}>
        <GridItem colStart={0} colEnd={2}>
          <IconButton
            bg="transparent"
            aria-label="Previous Month"
            icon={<BackIcon color={color} />}
            onClick={handlePrevMonth}
          />
        </GridItem>
        <GridItem colStart={3} colEnd={10} justifyContent="center">
          <Text fontSize="xl" align="center">
            {dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}
          </Text>
        </GridItem>
        <GridItem colStart={11} colEnd={13}>
          <IconButton
            bg="transparent"
            aria-label="Next Month"
            icon={<NextIcon color={color} />}
            onClick={handleNextMonth}
          />
        </GridItem>
      </Grid>
      <Flex justify="end">
        <Button size="sm" colorScheme="teal" onClick={handleReset}>
          New Event
        </Button>
      </Flex>
    </Grid>
  );
};

export default Header;

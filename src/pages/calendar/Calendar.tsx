import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Heading,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Radio,
  RadioGroup,
  Spinner,
  Stack,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import axios from "axios";
import GlobalContext from "context/GlobalContext";
import dayjs from "dayjs";
import { useContext, useEffect, useState } from "react";
import getMonth from "utils/calendar.utils";
import Header from "./Header";
import Month from "./Month";

const Calendar = () => {
  const userID = localStorage.getItem("userID") || "";
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [color, setColor] = useState(null);
  const [start, setStart] = useState(null);
  const [end, setEnd] = useState(null);

  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex } = useContext(GlobalContext);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { isOpen, onClose } = useDisclosure();
  const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const bg = useColorModeValue("#ffffff", "#000A0F");
  const bg2 = useColorModeValue("#000A0F", "#ffffff");
  const bg3 = useColorModeValue("teal.600", "teal.500");

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);

  useEffect(() => {
    axios("http://localhost:5000/api/events/" + userID)
      .then((res) => {
        let INITIAL_EVENTS = res.data.map((event) => {
          return {
            title: event.Title,
            start: event.Start,
            end: event.End,
            id: event._id,
            color: event.Color,
            description: event.Description,
            allDay: event.AllDay,
          };
        });
        setData(INITIAL_EVENTS);
      })
      .catch((error) => {
        console.log("Error fetching data: ", error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <Flex
        h="100vh"
        w="100vw"
        bg={bg}
        direction="column"
        justify="center"
        align="center"
        gap="4"
      >
        <Heading as="h2" size="xl">
          Loading...
        </Heading>
        <Spinner size="xl" />
      </Flex>
    );
  } else {
    return (
      <Grid h="100%" w="100vw" templateRows="40% 80%" bg={bg}>
        <Grid pos="fixed" bg={bg}>
          <GridItem>
            <Header />
          </GridItem>
          <Grid templateColumns="repeat(7,1fr)">
            {days.map((day, i) => (
              <GridItem key={i}>
                <Heading
                  size="sm"
                  mx={3}
                  py={5}
                  pb={2}
                  borderBottom="1px solid"
                  mb={5}
                  borderColor={"gray.500"}
                  color={
                    dayjs().format("ddd").toLowerCase() === day.toLowerCase()
                      ? bg3
                      : bg2
                  }
                >
                  {day}
                </Heading>
              </GridItem>
            ))}
          </Grid>
        </Grid>

        <GridItem mt={"130px"}>
          <Month month={currentMonth}></Month>
        </GridItem>
        <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Add Event</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Title</FormLabel>
                <Input type="text" />
              </FormControl>
              <FormControl>
                <FormLabel>Description</FormLabel>
                <Input type="text" />
              </FormControl>
              <FormControl>
                <FormLabel>Start</FormLabel>
                <Input type="date" />
              </FormControl>
              <FormControl>
                <FormLabel>End</FormLabel>
                <Input type="date" />
              </FormControl>
              <FormControl>
                <FormLabel>All Day</FormLabel>
                <Input type="checkbox" />
              </FormControl>
              <FormControl>
                <FormLabel>All Day</FormLabel>
                <Input type="checkbox" />
              </FormControl>
              <FormControl>
                <FormLabel>Color Tag</FormLabel>
                <RadioGroup colorScheme="green" defaultValue={"teal"}>
                  <Stack spacing={2} direction={"row"}>
                    <Radio
                      colorScheme={"orange"}
                      size="lg"
                      value="orange"
                      bg="orange.500"
                    ></Radio>
                    <Radio
                      colorScheme={"yellow"}
                      size="lg"
                      value="yellow"
                      bg="yellow.500"
                    ></Radio>
                    <Radio
                      colorScheme={"green"}
                      size="lg"
                      value="green"
                      bg="green.500"
                    ></Radio>
                    <Radio
                      colorScheme={"teal"}
                      size="lg"
                      value="teal"
                      bg="teal.500"
                    ></Radio>
                    <Radio
                      colorScheme={"blue"}
                      size="lg"
                      value="blue"
                      bg="blue.500"
                    ></Radio>
                    <Radio
                      colorScheme={"purple"}
                      size="lg"
                      value="purple"
                      bg="purple.500"
                    ></Radio>
                    <Radio
                      colorScheme={"pink"}
                      size="lg"
                      value="pink"
                      bg="pink.500"
                    ></Radio>
                  </Stack>
                </RadioGroup>
              </FormControl>
            </ModalBody>
            <ModalFooter>
              <Button
                colorScheme="secondary"
                variant="outline"
                mr={3}
                onClick={onClose}
              >
                Cancel
              </Button>
              <Button colorScheme="primary" onClick={onClose}>
                Add
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Grid>
    );
  }
};

export default Calendar;

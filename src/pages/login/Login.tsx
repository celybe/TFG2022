import { Grid } from "@chakra-ui/react";
import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link as ReachLink } from "react-router-dom";

import img2 from "assets/images/Group.png";
const Login = () => {
  const bg = useColorModeValue("#ffffff", "#000A0F");

  return (
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }} bg={bg}>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={4} w={"full"} maxW={"md"}>
          <Heading fontSize={"2xl"}>Log in</Heading>
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input type="email" />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input type="password" />
          </FormControl>
          <Stack spacing={6}>
            <Stack
              direction={{ base: "column", sm: "row" }}
              align={"start"}
              justify={"space-between"}
            >
              <Checkbox>Remember me</Checkbox>
              <Link colorScheme={"teal"}>Forgot password?</Link>
            </Stack>
            <Button
              as={ReachLink}
              to="/main"
              colorScheme={"teal"}
              color={"black"}
              variant={"solid"}
            >
              Sign in
            </Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex
        flex={1}
        backgroundColor={"#0A1418"}
        borderRadius="4px"
        height="80vh"
      >
        <Image
          alt={"Login Image"}
          objectFit={"contain"}
          align="bottom "
          src={img2}
        />
      </Flex>
    </Stack>
  );
};

export default Login;

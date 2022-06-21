import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  Heading,
  HStack,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import img1 from "assets/images/img1.png";
import axios from "axios";
import { useState } from "react";

const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = "http://localhost:5000/api/";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isAgreeNewsletter, setIsAgreeNewsletter] = useState(false);
  const [isAgreeTerms, setIsAgreeTerms] = useState(false);

  const [errMsg, setErrMsg] = useState("");

  const [success, setSuccess] = useState(false);

  const create = async () => {
    try {
      const url = "http://localhost:5000/api/users/";
      console.log(url);
      const res = await axios.post(url, {
        Username: username,
        Email: email,
        Password: password,
        First_Name: firstname,
        Last_Name: lastname,
      });
    } catch (err: any) {
      console.log(err);
    }
  };
  const bg = useColorModeValue("#ffffff", "#000A0F");

  return (
    <Grid w="100vw" h="100vh" bg={bg}>
      <Grid className="register--container" templateColumns="50vw 50vw">
        <Grid className="register--right">
          <Heading className="4xl">
            MAKE EACH <br /> DAY YOUR
            <br /> MASTERPIECE
          </Heading>
          <img className="img1" src={img1} alt="logo" />
        </Grid>
        <Grid className="register--left">
          <Flex minH={"100vh"} align={"center"} justify={"center"}>
            <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
              <Stack align={"center"}>
                <Heading fontSize={"4xl"} textAlign={"center"}>
                  Sign up
                </Heading>
                <Text fontSize={"lg"} color={"gray.600"}>
                  Enter your credentials to access your account ✌️
                </Text>
              </Stack>
              <Box rounded={"lg"} boxShadow={"lg"} p={8}>
                <Stack spacing={4}>
                  <HStack>
                    <Box>
                      <FormControl id="firstName" isRequired>
                        <FormLabel>First Name</FormLabel>
                        <Input type="text" />
                      </FormControl>
                    </Box>
                    <Box>
                      <FormControl id="lastName" isRequired>
                        <FormLabel>Last Name</FormLabel>
                        <Input type="text" />
                      </FormControl>
                    </Box>
                  </HStack>
                  <HStack>
                    <Box>
                      <FormControl id="username" isRequired>
                        <FormLabel>Username</FormLabel>
                        <Input value={username} type="text" />
                      </FormControl>
                    </Box>
                    <Box>
                      <FormControl id="email" isRequired>
                        <FormLabel>Email</FormLabel>
                        <Input type="text" />
                      </FormControl>
                    </Box>
                  </HStack>
                  <HStack>
                    <FormControl id="password" isRequired>
                      <FormLabel>Password</FormLabel>
                      <InputGroup>
                        <Input type={showPassword ? "text" : "password"} />
                        <InputRightElement h={"full"}>
                          <Button
                            variant={"ghost"}
                            onClick={() =>
                              setShowPassword((showPassword) => !showPassword)
                            }
                          >
                            {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                          </Button>
                        </InputRightElement>
                      </InputGroup>
                    </FormControl>
                    <FormControl id="Confirmpassword" isRequired>
                      <FormLabel>Confirm Password</FormLabel>
                      <InputGroup>
                        <Input type={showPassword ? "text" : "password"} />
                        <InputRightElement h={"full"}>
                          <Button
                            variant={"ghost"}
                            onClick={() =>
                              setShowPassword((showPassword) => !showPassword)
                            }
                          >
                            {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                          </Button>
                        </InputRightElement>
                      </InputGroup>
                    </FormControl>
                  </HStack>
                  <Stack>
                    <Checkbox>
                      <Text>Yes, I want to receive Codenotes emails.</Text>
                    </Checkbox>
                    <Checkbox>
                      <Text>
                        I agree with all Terms and Conditions and Privacy
                        Policies of Codenotes
                      </Text>
                    </Checkbox>
                  </Stack>

                  <Stack spacing={10} pt={2}>
                    <Button
                      loadingText="Submitting"
                      size="lg"
                      bg={"#00D4A1"}
                      color={"white"}
                      _hover={{
                        bg: "blue.500",
                      }}
                      onClick={() => create()}
                    >
                      Sign up
                    </Button>
                  </Stack>
                  <Stack pt={6}>
                    <Text align={"center"}>
                      Already a user? <Link color={"#00D4A1"}>Login</Link>
                    </Text>
                  </Stack>
                </Stack>
              </Box>
            </Stack>
          </Flex>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Register;

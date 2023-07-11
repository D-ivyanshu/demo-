import {
  Flex,
  Box,
  FormControl,
  Input,
  InputGroup,
  Checkbox,
  Stack,
  Button,
  Heading,
  Link,
  InputRightElement,
} from "@chakra-ui/react";

// import { CheckIcon } from "@chakra-ui/react"
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

const LoginCard = () => {
  return (
    <Flex minH={"100vh"} align={"center"} justify={"center"}>
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Box
          rounded={"lg"}
          bg="white"
          boxShadow="0px 8px 32px 0px rgba(0, 0, 0, 0.08), 0px 1px 3px 0px rgba(0, 0, 0, 0.08);"
          padding="40px"
          width="656px"
        >
          <Stack spacing={4}>
            <Heading fontSize="40px" mb={6}>
              Sign in to get started
            </Heading>
            <FormControl id="email">
              <Input type="email" placeholder="User name" />
            </FormControl>
            <FormControl id="password">
              <InputGroup>
                <Input type="password" placeholder="Password" />
                <InputRightElement>
                  <ViewIcon />
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Checkbox>Keep Me Login</Checkbox>
                <Link color="black" textDecor={"underline"}>
                  Forgot password?
                </Link>
              </Stack>
              <Button bg="#007AFF" color={"white"}>
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default LoginCard;

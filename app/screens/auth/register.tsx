import type {Route} from "./+types/register";
import {Box, Button, Flex, Heading, TextField} from "@radix-ui/themes";
import {EnvelopeClosedIcon, LockClosedIcon} from "@radix-ui/react-icons";

export function meta({}: Route.MetaArgs) {
  return [
    {title: "Register - SPID",},
    {name: "description", content: "Welcome to React Router!"},
  ];
}

export default function RegisterScreen() {
  return (
    <Flex justify={"center"} height={"100vh"} direction={"column"}>
      <Box py={"6"}>
        <Heading as={"h1"}>Register</Heading>
      </Box>
      <Flex align={"stretch"} justify={"center"} direction={"column"} gap={"3"}>
        <TextField.Root placeholder={"Email"} type={"email"}>
          <TextField.Slot>
            <EnvelopeClosedIcon/>
          </TextField.Slot>
        </TextField.Root>
        <TextField.Root placeholder={"Password"} type={"password"}>
          <TextField.Slot>
            <LockClosedIcon/>
          </TextField.Slot>
        </TextField.Root>
        <TextField.Root placeholder={"Password once more"} type={"password"}>
          <TextField.Slot>
            <LockClosedIcon/>
          </TextField.Slot>
        </TextField.Root>
        <Button variant={"solid"}>Register</Button>
      </Flex>
    </Flex>
  );
}

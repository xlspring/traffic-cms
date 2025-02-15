import type {Route} from "./+types/register";
import {Box, Button, Flex, Heading, TextField} from "@radix-ui/themes";
import {EnvelopeClosedIcon, LockClosedIcon} from "@radix-ui/react-icons";
import {useState} from "react";
import {useNavigate} from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    {title: "Register - SPID",},
    {name: "description", content: "Welcome to React Router!"},
  ];
}

export default function RegisterScreen() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isPasswordValid, setIsPasswordValid] = useState<boolean>(false);

  const navigate = useNavigate();

  const verifyPassword = (confirmation: string) => {
    confirmation === password
      ? setIsPasswordValid(true)
      : setIsPasswordValid(false);
  }

  const tryRegister = async () => {
    console.log(username, password);
    await fetch(`${import.meta.env.VITE_BACKEND_URL}/auth/register`, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({username, password}),
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("Failed to register");
      })
      .then(() => navigate("/auth/login"))
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Flex justify={"center"} height={"100vh"} direction={"column"}>
      <Box py={"6"}>
        <Heading as={"h1"}>Register</Heading>
      </Box>
      <Flex align={"stretch"} justify={"center"} direction={"column"} gap={"3"}>
        <TextField.Root placeholder={"Email"} type={"email"} onChange={(e) => setUsername(e.target.value)}>
          <TextField.Slot>
            <EnvelopeClosedIcon/>
          </TextField.Slot>
        </TextField.Root>
        <TextField.Root placeholder={"Password"} type={"password"} onChange={(e) => setPassword(e.target.value)}>
          <TextField.Slot>
            <LockClosedIcon/>
          </TextField.Slot>
        </TextField.Root>
        <TextField.Root placeholder={"Password once more"} type={"password"}
                        onChange={(e) => verifyPassword(e.target.value)}>
          <TextField.Slot>
            <LockClosedIcon/>
          </TextField.Slot>
        </TextField.Root>
        <Button variant={"solid"} disabled={!isPasswordValid} onClick={tryRegister}>Register</Button>
      </Flex>
    </Flex>
  );
}

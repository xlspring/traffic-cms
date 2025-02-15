import type {Route} from "./+types/login";
import {Box, Button, Flex, Heading, TextField} from "@radix-ui/themes";
import {EnvelopeClosedIcon, LockClosedIcon} from "@radix-ui/react-icons"
import {useState} from "react";
import {useDispatch} from "react-redux";
import {setToken} from "~/redux/slices/preferencesSlice";
import {useNavigate} from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    {title: "Login - SPID",},
    {name: "description", content: "Welcome to React Router!"},
  ];
}

export default function LoginScreen() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const tryLogin = async () => {
    console.log(username, password);
    await fetch(`${import.meta.env.VITE_BACKEND_URL}/auth/login`, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({username, password}),
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("Failed to login");
      })
      .then(data => localStorage.setItem("token", data.token))
      .then(() => navigate("/dashboard"))
      .catch((error) => {
        console.log(error);

        setPassword("");
        setUsername("");
      });
  };

  return (
    <Flex justify={"center"} height={"100vh"} direction={"column"}>
      <Box py={"6"}>
        <Heading as={"h1"}>Login</Heading>
      </Box>
      <Flex align={"stretch"} justify={"center"} direction={"column"} gap={"3"}>
        <TextField.Root placeholder={"Email"} type={"email"} value={username}
                        onChange={(t) => setUsername(t.target.value)}>
          <TextField.Slot>
            <EnvelopeClosedIcon/>
          </TextField.Slot>
        </TextField.Root>
        <TextField.Root placeholder={"Password"} type={"password"} value={password}
                        onChange={(t) => setPassword(t.target.value)}>
          <TextField.Slot>
            <LockClosedIcon/>
          </TextField.Slot>
        </TextField.Root>
        <Button variant={"solid"} onClick={tryLogin}>Login</Button>
      </Flex>
    </Flex>
  );
}

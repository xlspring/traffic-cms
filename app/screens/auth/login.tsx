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
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const tryLogin = () => {
    // TODO write actual login logic when backend is ready

    const promise = new Promise(resolve => {
      if (email && password) {
        // dispatch(setToken("umm-chile-anyways-so"))
        localStorage.setItem("token", "sample-token");
        resolve(true)
      }
    });

    promise.then(() => navigate("/dashboard")).catch((error) => {
      console.log(error)
    });
  };

  return (
    <Flex justify={"center"} height={"100vh"} direction={"column"}>
      <Box py={"6"}>
        <Heading as={"h1"}>Login</Heading>
      </Box>
      <Flex align={"stretch"} justify={"center"} direction={"column"} gap={"3"}>
        <TextField.Root placeholder={"Email"} type={"email"} onChange={(t) => setEmail(t.target.value)}>
          <TextField.Slot>
            <EnvelopeClosedIcon/>
          </TextField.Slot>
        </TextField.Root>
        <TextField.Root placeholder={"Password"} type={"password"} onChange={(t) => setPassword(t.target.value)}>
          <TextField.Slot>
            <LockClosedIcon/>
          </TextField.Slot>
        </TextField.Root>
        <Button variant={"solid"} onClick={tryLogin}>Login</Button>
      </Flex>
    </Flex>
  );
}

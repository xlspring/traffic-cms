import {Container, Flex, Heading, Link, Text, Separator} from "@radix-ui/themes";
import {Outlet, useNavigate} from "react-router";
import Header from "~/components/header";
import Sidebar from "~/components/sidebar";

export default function DashboardLayout() {
  const isLoggedIn = localStorage.getItem("token") !== null;

  if (!isLoggedIn) {
    return (
      <Container size={"1"} height={"100vh"}>
        <Flex direction={"column"} justify={"center"} gap={"5"} height={"100vh"}>
          <Heading as={"h1"}>401. Sashay away</Heading>
          <Text>You're unauthorized or the credentials have expired. Try logging in again</Text>
          <Link href={"/auth/login"}>Login page</Link>
        </Flex>
      </Container>)
  } else {
    return (
      <Flex direction={"column"}>
        <Header/>
        <Flex direction={"row"} align={"stretch"} height={"100%"} gap={"1"}
              style={{boxSizing: "border-box", flexGrow: 1}}>
          <Sidebar/>
          <Outlet/>
        </Flex>
      </Flex>
    )
  }
}
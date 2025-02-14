import {Outlet} from "react-router";
import {Container, Link} from "@radix-ui/themes";

export default function AuthLayout({children}: { children: React.ReactNode }) {
  return (
    <Container size={"1"} height={"100vh"}>
      <Link href={"/"}>⬅️ Back</Link>
      <Outlet/>
    </Container>
  );
}

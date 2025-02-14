import type {Route} from "./+types/index";
import {Box, Card, Flex, Grid, Heading, Separator, Text} from "@radix-ui/themes";
import LightListItem from "~/components/lightListItem.tsx";
import {ListBulletIcon} from "@radix-ui/react-icons";

export function meta({}: Route.MetaArgs) {
  return [
    {title: "List - SPID",},
    {name: "description", content: "Welcome to React Router!"},
  ];
}

export default function ListScreen() {
  return (
    <Flex direction="column" width={"100%"}>
      <Heading as={"h1"} mb={"4"}>List of traffic lights</Heading>
      <Card style={{overflowY: "scroll", height: "100%"}}>
        {
          Array.from(Array(20).keys()).map((_, index) => (
            <>
              <LightListItem id={index}/>
              {

              }
              <Separator size={"4"}/>
            </>
          ))
        }
      </Card>
    </Flex>
  );
}

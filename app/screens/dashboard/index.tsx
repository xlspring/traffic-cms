import type {Route} from "./+types/index";
import {Box, Card, Flex, Grid, Heading, Text} from "@radix-ui/themes";
import {useSelector} from "react-redux";
import type {RootState} from "~/redux/store";
import type {LogsData} from "~/redux/slices/logSlice";
import LogItem from "~/components/logItem";

export function meta({}: Route.MetaArgs) {
  return [
    {title: "Dashboard - SPID",},
    {name: "description", content: "Welcome to React Router!"},
  ];
}

export default function DashboardScreen() {
  const logs = useSelector((state: RootState) => state.logs);

  return (
    <Flex direction={"column"} width={"100%"} p={"2"}>
      <Heading as={"h1"} mb={"4"}>Statistics</Heading>
      <Grid columns={{md: "1", xl: "3"}} gap={"5"}>
        <Card>
          <Text>Total traffic lights in DB</Text>
          <Heading as={"h4"} size={"3"}>123</Heading>
        </Card>
        <Card>
          <Text>Currently working</Text>
          <Heading as={"h4"} size={"3"}>100 (70%)</Heading>
        </Card>
        <Card>
          <Text>Third stat</Text>
          <Heading as={"h4"} size={"3"}>727</Heading>
        </Card>
      </Grid>
      <Heading as={"h1"} my={"4"}>Log</Heading>
      <Card style={{flexGrow: 1, overflowY: "scroll"}}>
        {
          logs.map((log: LogsData) => (
            <LogItem date={log.date} priority={log.priority} message={log.message} key={log.date}/>
          ))
        }
      </Card>
    </Flex>
  );
}

import type {Route} from "./+types/index";
import {Box, Card, Flex, Grid, Heading, Text} from "@radix-ui/themes";
import {useDispatch, useSelector} from "react-redux";
import type {RootState} from "~/redux/store";
import {fetchLogs, type LogsData} from "~/redux/slices/logSlice";
import LogItem from "~/components/logItem";
import {useEffect} from "react";
import {getStats} from "~/redux/slices/statSlice.ts";
import {useAppDispatch} from "~/hooks.ts";

export function meta({}: Route.MetaArgs) {
  return [
    {title: "Dashboard - SPID",},
    {name: "description", content: "Welcome to React Router!"},
  ];
}

export default function DashboardScreen() {
  const logs = useSelector((state: RootState) => state.logs);
  const stats = useSelector((state: RootState) => state.stats);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getStats())
    dispatch(fetchLogs())
  }, [])

  return (
    <Flex direction={"column"} width={"100%"} p={"2"}>
      <Heading as={"h1"} mb={"4"}>Statistics</Heading>
      <Grid columns={{md: "1", xl: "3"}} gap={"5"}>
        <Card>
          <Text>Total traffic lights in DB</Text>
          <Heading as={"h4"} size={"3"}>{stats.total}</Heading>
        </Card>
        <Card>
          <Text>Currently working</Text>
          <Heading as={"h4"} size={"3"}>{stats.working} ({(stats.working / stats.total * 100).toFixed(2)}%)</Heading>
        </Card>
        <Card>
          <Text>Third stat (ain't creative)</Text>
          <Heading as={"h4"} size={"3"}>727</Heading>
        </Card>
      </Grid>
      <Heading as={"h1"} my={"4"}>Database log</Heading>
      <Card style={{flexGrow: 1, overflowY: "scroll"}}>
        {
          logs.isLoaded
            ? (
              logs.data.map((log: LogsData) => (
                  <LogItem time={log.time} priority={log.priority} message={log.message} key={log.time}/>
                )
              )) : (null)
        }
      </Card>
    </Flex>
  );
}

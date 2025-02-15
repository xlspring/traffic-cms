import type {Route} from "./+types/index";
import {Box, Card, Flex, Grid, Heading, IconButton, Separator, Text} from "@radix-ui/themes";
import LightListItem from "~/components/lightListItem.tsx";
import {ArrowLeftIcon, ArrowRightIcon, ExitIcon, ListBulletIcon} from "@radix-ui/react-icons";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import type {RootState} from "~/redux/store.ts";
import {decrementSkipped, fetchSigns, incrementSkipped} from "~/redux/slices/lightSlice.ts";
import {useAppDispatch} from "~/hooks.ts";

export function meta({}: Route.MetaArgs) {
  return [
    {title: "List - SPID",},
    {name: "description", content: "Welcome to React Router!"},
  ];
}

export default function ListScreen() {
  const dispatch = useAppDispatch();

  const trafficLights = useSelector((state: RootState) => state.lights.lights);
  const skipped = useSelector((state: RootState) => state.lights.skipped);

  useEffect(() => {
    dispatch(fetchSigns());
  }, [])

  const increment = () => {
    dispatch(incrementSkipped());
    dispatch(fetchSigns())
  }

  const decrement = () => {
    dispatch(decrementSkipped());
    dispatch(fetchSigns())
  }

  return (
    <Flex direction="column" width={"100%"}>
      <Heading as={"h1"} mb={"4"}>List of traffic lights</Heading>
      <Flex direction={"row"} align={'center'} gap={"3"} mb={"4"}>
        <IconButton onClick={decrement}>
          <ArrowLeftIcon width={"18"} height={"18"}/>
        </IconButton>
        <Text>{skipped / 10 + 1}</Text>
        <IconButton onClick={increment}>
          <ArrowRightIcon width={"18"} height={"18"}/>
        </IconButton>
      </Flex>
      <Card style={{overflowY: "scroll", height: "100%"}}>
        {
          trafficLights.map((light) => (
            <>
              <LightListItem id={light.id} isWorking={light.status} votes={light.votes} street={light.street}
                             key={light.id}/>
              <Separator size={"4"} key={`${light.id}-separator`}/>
            </>
          ))
        }
      </Card>
    </Flex>
  );
}

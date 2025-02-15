import {Flex, Text} from "@radix-ui/themes";
import LogPriority from "~/components/logPriority";

export default function LogItem({time, priority, message}: { time: number, priority: number, message: string }) {

  const unixToDate = (unix: number) => {
    const format = new Intl.DateTimeFormat(navigator.language, {
      dateStyle: "short",
      timeStyle: "short",
    });

    console.log(unix)
    console.log(new Date(unix))

    return format.format(new Date(unix));
  }

  return (
    <Flex direction={"row"}>
      <LogPriority priority={priority}/>
      <Text style={{fontFamily: "monospace"}}>{unixToDate(time)}: {message}</Text>
    </Flex>
  )
}
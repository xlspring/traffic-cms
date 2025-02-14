import {Flex, Text} from "@radix-ui/themes";
import LogPriority from "~/components/logPriority";

export default function LogItem({date, priority, message}: { date: string, priority: number, message: string }) {

  const unixToDate = (unix: string) => {
    const format = new Intl.DateTimeFormat(navigator.language, {
      dateStyle: "short",
      timeStyle: "short",
    });

    return format.format(new Date(+unix));
  }

  return (
    <Flex direction={"row"}>
      <LogPriority priority={priority}/>
      <Text style={{fontFamily: "monospace"}}>{unixToDate(date)}: {message}</Text>
    </Flex>
  )
}
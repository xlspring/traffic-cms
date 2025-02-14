import {Box, Text} from "@radix-ui/themes";
import {useEffect, useState} from "react";

export default function LogPriority({priority}: { priority: number }) {
  const [display, setDisplay] = useState({bg: "", el: ""});

  useEffect(() => {
    switch (priority) {
      case 0:
        setDisplay({
          bg: "lightblue",
          el: "I"
        });
        break;
      case 1:
        setDisplay({
          bg: "yellow",
          el: "W"
        });
        break;
      case 2:
        setDisplay({
          bg: "red",
          el: "E"
        });
        break;
    }
  }, [])

  return (
    <Box width="18px" height={"18px"} mr={"2"} style={{backgroundColor: display.bg, textAlign: "center"}}>
      <Text style={{fontFamily: "monospace", lineHeight: "18px", fontSize: "16px"}}>{display.el}</Text>
    </Box>
  )
}
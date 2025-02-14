import {Box, Flex, Heading, Text} from "@radix-ui/themes";
import {StarIcon} from "@radix-ui/react-icons";

export default function LightListItem({id}: { id: number }) {
  return (
    <Flex direction={"row"} align={"center"} p={"2"} m={"3"} gap={"3"}>
      <Heading as={"h5"} size={"4"}>{id}</Heading>
      <Box px={"2"} style={{backgroundColor: "green", color: "white", borderRadius: "25px"}}>
        <Text size={"1"}>Working</Text>
      </Box>
      <Flex direction={"row"} align={"center"} gap={"1"}>
        <StarIcon/>
        15
      </Flex>
    </Flex>
  );
}
import {Box, Flex, Heading, Text, TextField} from "@radix-ui/themes";
import {StarIcon} from "@radix-ui/react-icons";
import {changeStreetName, toggleSign} from "~/redux/slices/lightSlice.ts";
import {useState} from "react"
import {useAppDispatch} from "~/hooks.ts";

export default function LightListItem({id, isWorking, votes, street}: {
  id: number,
  isWorking: boolean,
  votes: number,
  street: string
}) {
  const dispatch = useAppDispatch();

  const [streetName, setStreetName] = useState(street);

  const sendStreetName = () => dispatch(changeStreetName({id: id, name: streetName}));
  const toggleWorking = () => dispatch(toggleSign(id));
  return (
    <Flex direction={"row"} align={"center"} p={"2"} m={"3"} gap={"3"}>
      <Heading as={"h5"} size={"4"}>{id}</Heading>
      {
        isWorking
          ? (
            <Box px={"2"} onClick={toggleWorking} style={{
              backgroundColor: "green",
              color: "white",
              borderRadius: "25px",
              userSelect: "none",
              cursor: "pointer"
            }}>
              <Text size={"1"}>Working</Text>
            </Box>
          )
          : (
            <Box px={"2"} onClick={toggleWorking} style={{
              backgroundColor: "red",
              color: "white",
              borderRadius: "25px",
              userSelect: "none",
              cursor: "pointer"
            }}>
              <Text size={"1"}>Inactive</Text>
            </Box>
          )
      }
      <Flex direction={"row"} align={"center"} gap={"1"}>
        <StarIcon/>
        {votes}
      </Flex>
      <TextField.Root value={streetName} onChange={(el) => setStreetName(el.target.value)}
                      onBlur={() => sendStreetName()}/>
    </Flex>
  );
}
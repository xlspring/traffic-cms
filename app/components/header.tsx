import {Avatar, Flex, IconButton} from "@radix-ui/themes";
import {HamburgerMenuIcon, UpdateIcon} from "@radix-ui/react-icons";
import {useDispatch} from "react-redux";
import {refreshDB, toggleSidebar} from "~/redux/slices/preferencesSlice";

export default function Header() {
  const dispatch = useDispatch();

  return (
    <Flex direction={"row"} justify={"between"} px={"4"} py={"2"}>
      <IconButton onClick={() => dispatch(toggleSidebar())}>
        <HamburgerMenuIcon width={"18"} height={"18"}/>
      </IconButton>
      <Flex direction={"row"} align={"center"} gap={"3"}>
        <IconButton onClick={() => dispatch(refreshDB())}>
          <UpdateIcon width={"18"} height={"18"}/>
        </IconButton>
        <Avatar fallback={"U"}/>
      </Flex>
    </Flex>
  );
}
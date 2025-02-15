import {Avatar, Flex, IconButton} from "@radix-ui/themes";
import {ExitIcon, HamburgerMenuIcon, UpdateIcon} from "@radix-ui/react-icons";
import {useDispatch} from "react-redux";
import {refreshDB, toggleSidebar} from "~/redux/slices/preferencesSlice";
import {useAppDispatch} from "~/hooks.ts";
import {useNavigate} from "react-router";

export default function Header() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/auth/login");
  }

  return (
    <Flex direction={"row"} justify={"between"} px={"4"} py={"2"}>
      <IconButton onClick={() => dispatch(toggleSidebar())}>
        <HamburgerMenuIcon width={"18"} height={"18"}/>
      </IconButton>
      <Flex direction={"row"} align={"center"} gap={"3"}>
        <IconButton onClick={() => dispatch(refreshDB())}>
          <UpdateIcon width={"18"} height={"18"}/>
        </IconButton>
        <IconButton onClick={() => logout()}>
          <ExitIcon width={"18"} height={"18"}/>
        </IconButton>
        <Avatar fallback={"U"}/>
      </Flex>
    </Flex>
  );
}
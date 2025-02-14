import {Flex, Separator} from "@radix-ui/themes";
import {GlobeIcon, HomeIcon, ListBulletIcon} from "@radix-ui/react-icons";
import SidebarItem from "~/components/sidebarItem";

export default function Sidebar() {
  return (
    <Flex direction={"row"}>
      <Flex direction="column">
        <SidebarItem link={"/dashboard"} name={"Home"} icon={<HomeIcon/>}/>
        <SidebarItem link={"/list"} name={"Traffic light list"} icon={<ListBulletIcon/>}/>
      </Flex>
      <Separator orientation={"vertical"} size={"4"} mr={"4"}/>
    </Flex>
  )
}
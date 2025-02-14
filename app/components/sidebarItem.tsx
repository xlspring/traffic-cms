import React from "react";
import {Flex, Link, Text} from "@radix-ui/themes";
import {useSelector} from "react-redux";
import type {RootState} from "~/redux/store";

export default function SidebarItem({link, name, icon}: { link: string, name: string, icon: React.ReactNode }) {
  const isSidebarCollapsed = useSelector((state: RootState) => state.preferences.isSidebarCollapsed);

  return (
    <Link href={link}>
      <Flex direction={"row"} align={"center"} gap={"2"} px={"4"} py={"2"}>
        <Flex align={"center"} justify={"center"} width={"32px"} height={"32px"}>
          {icon}
        </Flex>
        {
          isSidebarCollapsed ? null : (<Text wrap={"nowrap"}>{name}</Text>)
        }
      </Flex>
    </Link>
  );
}
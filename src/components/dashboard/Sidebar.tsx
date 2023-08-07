import React from "react";
import { MenuBarist } from "../../services/Services";
import Link from "next/link";
import { useRouter } from "next/router";

import {
  WindowsOutlined,
  UsergroupAddOutlined,
  ContactsOutlined,
  PayCircleOutlined,
  OrderedListOutlined,
  MessageOutlined,
  ProfileOutlined,
} from "@ant-design/icons";

const menu: MenuBarist[] = [
  {
    id: 0,
    title: " Workspace",
    icon: <WindowsOutlined />,
    link: "/workspace",
  },
  {
    id: 1,
    title: "Clients",
    icon: <UsergroupAddOutlined />,
    link: "/clients",
  },
  {
    id: 2,
    title: "Schedule Appointment",
    icon: <ContactsOutlined />,
    link: "/apiManagement",
  },
  {
    id: 3,
    title: "Payment",
    icon: <PayCircleOutlined />,
    link: "/merchantManagement",
  },
  {
    id: 4,
    title: "Task",
    icon: <OrderedListOutlined />,
    link: "/usersRole",
  },
  {
    id: 5,
    title: "Message",
    icon: <MessageOutlined />,
    link: "/log",
  },
  {
    id: 6,
    title: "Reports",
    icon: <ProfileOutlined />,
    link: "/financialManagement",
  },
];


export const Sidebar = () => {
  const router = useRouter();
  return (
    <div className="sidebar">
      <div className="pt-10 ">
        <div className=" mx-3 rounded-full bg-[#D9D9D9] w-[59px] h-[59px]"></div>
        <div className="">
          <h3 className="my-10 px-3 text-[16px] tracking-[-0.011em]">Menu</h3>
          <nav className="">
            {menu?.map((list: any) => {
              return (
                <Link
                  key={list.id}
                  href={list.link}
                  className={`${
                    router.pathname === list.link ? "active" : ""
                  } text-[14px] py-2 font-medium cursor-pointer flex mb-5`}
                >
                  <span className="px-3">{list.icon}</span>
                  <span className="tracking-[-0.011em]">{list.title}</span>
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </div>
  );
};

import React from "react";
import { MenuBarist } from "../../services/Services";
import Link from "next/link";
import { useRouter } from "next/router";
const logo = "./assets/images/depositphotos.jpg";

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
    link: "/schedule",
  },
  {
    id: 3,
    title: "Payment",
    icon: <PayCircleOutlined />,
    link: "/payment",
  },
  {
    id: 4,
    title: "Task",
    icon: <OrderedListOutlined />,
    link: "/task",
  },
  {
    id: 5,
    title: "Message",
    icon: <MessageOutlined />,
    link: "/message",
  },
  {
    id: 6,
    title: "Reports",
    icon: <ProfileOutlined />,
    link: "/reports",
  },
];

export const Sidebar = () => {
  const router = useRouter();
  return (
    <div className="sidebar ">
      <div className="pt-10 ">
        <div className=" mx-3 rounded-full bg-[#D9D9D9] w-[59px] h-[59px]">
          <img src={logo} alt="" />
        </div>
        <div className="">
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

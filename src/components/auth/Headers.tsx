import { Input } from "antd";
import React, { useState } from "react";
import {
  BellOutlined,
  MenuOutlined,
  LoginOutlined,
  UserOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";
import { AuthList, MenuBarist } from "../../services/Services";
import Image from "next/image";
const profile = "./images/profile.jpg";
import type { DrawerProps, RadioChangeEvent } from "antd";
import { Drawer } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import type { MenuProps } from "antd";
import { Dropdown } from "antd";

import { usePathname } from "next/navigation";

export const Headers = (props: AuthList) => {
  const router = useRouter;
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState<DrawerProps["placement"]>("left");

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const onChange = (e: RadioChangeEvent) => {
    setPlacement(e.target.value);
  };

  const menu = [
    {
      id: 0,
      title: " Workspace",
      link: "/workspace",
    },
    {
      id: 1,
      title: "Clients",
      link: "/clients",
    },
    {
      id: 2,
      title: "Schedule Appointment",
      link: "/schedule",
    },
    {
      id: 3,
      title: "Payment",
      link: "/payment",
    },
    {
      id: 4,
      title: "Task",
      link: "/task",
    },
    {
      id: 5,
      title: "Message",
      link: "/message",
    },
    {
      id: 6,
      title: "Reports",
      link: "/report",
    },
  ];

  // Proofile dropdown
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <Link href="/clients" className="login-link flex">
          <UsergroupAddOutlined className="mt-2" />
          <span className="text-[16px] font-semibold mx-3 ">Clients</span>
        </Link>
      ),
    },
    {
      key: "2",
      label: (
        <Link href="/workspace" className="login-link flex">
          <UserOutlined className="mt-2" />
          <span className="text-[16px] font-semibold mx-3">Profle</span>
        </Link>
      ),
    },
    {
      key: "3",
      label: (
        <Link href="/" className="login-link  bg-red-200\  flex rounded-md">
          <LoginOutlined className="mt-2 text-red-600" />
          <span className="text-[16px] font-semibold mx-3 text-red-600">
            Log out
          </span>
        </Link>
      ),
    },
  ];

  return (
    <div>
      <div className="header bg-white w-full h-[77px]">
        <header className="flex justify-between px-10 py-5">
          <div className="mobile-menu">
            <MenuOutlined onClick={showDrawer} />
          </div>
          <div></div>
          <div className="flex">
            <div className="relative m-6 mt-3 inline-flex w-fit">
              <div className="absolute bottom-auto left-auto right-0 top-0 z-10 inline-block w-[25px] h-[25px] text-center -translate-y-1/2 translate-x-2/4 rotate-0 skew-x-0 skew-y-0 scale-x-100 scale-y-100 rounded-full bg-pink-700 py-1 text-[10px] text-white">
                3
              </div>

              <BellOutlined style={{ fontSize: "150%" }} />
            </div>
            <span className="text-[#000] font-semibold mx-2 mt-3">Kelin</span>

            <Dropdown menu={{ items }} placement="bottomRight" arrow>
              <Image
                src="/assets/images/profile.jpg"
                width={500}
                height={500}
                className="w-[52px] h-[52px] mx-3 cursor-pointer rounded-full"
                alt="bell"
              />
            </Dropdown>
          </div>
        </header>
      </div>
      <div className="px-10 mt-10">
        <h1 className="text-[24px] font-semibold">{props.title}</h1>
        <p className="text-[#999] text-[14px]">{props.description}</p>
      </div>
      <Drawer
        title="Basic Drawer"
        placement={placement}
        closable={false}
        onClose={onClose}
        open={open}
        key={placement}
      >
        <nav className="">
          {menu?.map((list: any) => {
            return (
              <Link
                key={list.id}
                href={list.link}
                className="text-[14px] py-2 font-medium cursor-pointer flex mb-5"
              >
                <span className="px-3">{list.icon}</span>
                <span className="tracking-[-0.011em]">{list.title}</span>
              </Link>
            );
          })}
        </nav>
      </Drawer>
    </div>
  );
};

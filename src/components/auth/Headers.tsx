import { Input } from "antd";
import React, { useState } from "react";
import { BellOutlined, SearchOutlined } from "@ant-design/icons";
import { AuthList } from "../../services/Services";
// import { AuthNav } from "./AuthNav";
import Image from "next/image";
const profile = "./images/profile.jpg";

export const Headers = (props: AuthList) => {
  return (
    <div>
      <div className="header bg-white w-full h-[77px]">
        <header className="flex justify-between px-10 py-5">
          <div></div>
          <div className="flex">
            <div className="relative m-6 mt-3 inline-flex w-fit">
              <div className="absolute bottom-auto left-auto right-0 top-0 z-10 inline-block w-[25px] h-[25px] text-center -translate-y-1/2 translate-x-2/4 rotate-0 skew-x-0 skew-y-0 scale-x-100 scale-y-100 rounded-full bg-pink-700 py-1 text-[10px] text-white">
                3
              </div>

              <BellOutlined style={{ fontSize: "150%" }} />
            </div>
            <span className="text-[#000] font-semibold mx-2 mt-3">Kelin</span>
            <Image
              src="/../public/assets/images/profile.jpg"
              width={500}
              height={500}
              className="w-[52px] h-[52px] mx-3 cursor-pointer rounded-full"
              alt="bell"
            />
          </div>
        </header>
      </div>
      <div className="px-10 mt-10">
        <h1 className="text-[24px] font-semibold">{props.title}</h1>
        <p className="text-[#999] text-[14px]">{props.description}</p>
      </div>
    </div>
  );
};

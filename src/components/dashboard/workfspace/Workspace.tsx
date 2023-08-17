import React from "react";
import { ArrowRightOutlined } from "@ant-design/icons";

export const Workspace = () => {
  return (
    <div>
      <div className=" w-full">
        <h3 className="text-[16px]">Overview</h3>
        <div className="flex  overview-card">
          <div className="agenda-card mt-5 shadow-md mr-24">
            <div className="bg-red-100 px-3 py-2">
              <span className="text-[14px] font-semibold">Today's Agenda</span>
            </div>
            <div className="text-center flex justify-center mt-10">
              <p className="text-[12px] text-gray-400 ">
                You don't have event schedule for today.
                <span className="text text-[#c3ad2e]"> Add</span>
              </p>
            </div>
          </div>
          <div className="activity-card mt-5 shadow-md">
            <div className="bg-red-100 px-3 py-2 flex justify-between ">
              <span className="text-[14px] font-semibold">Activity Report</span>
              <span className="text-[12px] text-[#c3ad2e] font-normal cursor-pointer">
                View full activity report <ArrowRightOutlined className="ml-2" />
              </span>
            </div>
            <div className="px-3 py-2">
              <div className="flex text-[12px] text-gray-400">
                <p>---------------------- </p>
                <p className=" ml-1 ">Tuesday (18th sept, 2019)</p>
              </div>
              <p className="text-[12px] text-gray-400 ">
                You added a new client
              </p>
              <div className="flex lg:ml-10">
                <div className="flex flex-col">
                  <span className="text-[#c3ad2e] text-[10px]">
                    Odusote Mayokun
                  </span>
                  <span className="bg-red-100 px-1 py-1 status text-gray-400">
                    Status: Pending
                  </span>
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
        <div className="activity-card my-5 pb-7 shadow-md">
          <div className="bg-red-100 px-3 py-2 flex justify-between ">
            <span className="text-[14px] font-semibold">Task that are due</span>
            <span className="text-[12px] text-[#c3ad2e] font-normal cursor-pointer">
              Create Task <ArrowRightOutlined className="ml-2" />
            </span>
          </div>
          <div className="px-3 py-2 ">
            <div className="bg-red-100 px-3 py-2 mt-2">
              <h3 className="text-[12px] font-semibold">
                Follow up with{" "}
                <span className="text-[#c3ad2e] mx-1">Odusote</span>
              </h3>
              <div className="flex font-light text-[12px]">
                <span>Due on: 1/21/2021</span>
                <span>Created on: 1/15/2021</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

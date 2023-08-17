import React, { useState } from "react";
// import { Product } from "../../../interfaces";
import { AddNewClients } from "./AddNewClients";
import { useProductContext } from "@/context/PageContext";
import { ResponseFetchUsers } from "@/services/Services";
import Link from "next/link";
import clients from "@/pages/clients";

// interface IProps {
//   product: Product;
// }
export const ClientTable = ({ props }: any) => {
  const [data, setData] = useState<ResponseFetchUsers[]>([]);
  console.log(data);

  const addToData = (data: ResponseFetchUsers) => {
    setData((x) => [...x, data]);
  };
  // const { products } = useProductContext();
  if (data.length === 0)
    return (
      <div className="my-10 px-10 ">
        <div className="p-5 bg-white">
          <h3 className="text-center text-gray-400 p-5">
            No clients Added Yet!
          </h3>
          <AddNewClients successCallBack={addToData} />
          <div className="w-full  px-3 py-4 mb-5 grid grid-cols-4 rounded-[8px] rounded-b-none border-b-2 border border-x-0 border-t-0 border-[#c3ad2e] bg-red-100 font-semibold text-[14px]">
            <span>Name</span>
            <span>Email</span>
            <span>Phone</span>
            <span> Residential Address</span>
          </div>
        </div>
      </div>
    );

  return (
    <div className="py-10 px-5 w-full client-table bg-white p-5 rounded-md h-full">
      <AddNewClients successCallBack={addToData} />
      {/* <table className="rwd-table w-full">
        <thead>
          <tr className="font-semibold text-[14px]">
            <th>Name</th>
            <th>Email</th>
            <th> Phone</th>
            <th> Residential Address</th>
          </tr>
        </thead>
        {data?.map((list) => {
          return (
            <tbody key={list.id}>
              <tr
                onClick={handleSubmit}
                className="border border-x-0 border-t-0 border-[#f5f5f5] cursor-pointer text-[12px] font-normal list"
              >
                <td className="">{list.name}</td>
                <td>{list.email}</td>
                <td>{list.phone}</td>
                <td className="w-[22em]">{list.address}</td>
              </tr>
            </tbody>
          );
        })}
      </table> */}
      <div className="">
        <div className="w-full  px-3 py-4 mb-5 grid grid-cols-4 rounded-[8px] rounded-b-none border-b-2 border border-x-0 border-t-0 border-[#c3ad2e] bg-red-100 font-semibold text-[14px]">
          <span>Name</span>
          <span>Email</span>
          <span>Phone</span>
          <span> Residential Address</span>
        </div>
        <div className=" cursor-pointer text-[12px] font-semibold">
          {data?.map((list, index) => {
            return (
              <Link
                href={"/clients/" + list.id}
                key={index}
                className="grid grid-cols-4 px-3 list text-[#888] border border-x-0 border-t-0 border-[#f5f5f5] "
              >
                <span className="mt-4">{list.name}</span>
                <span className="mt-4">{list.email}</span>
                <span className="mt-4">{list.phone}</span>
                <span className="w-[20em] mt-4">{list.address}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

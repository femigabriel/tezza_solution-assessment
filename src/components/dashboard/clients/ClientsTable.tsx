import React, { useState } from "react";
import { clientList } from "@/services/clientsList";
import { AddNewClients } from "./AddNewClients";

interface Props {
  onNextClick: () => any;
}

export const ClientsTable = ({ onNextClick }: Props) => {
  const handleSubmit = () => {
    onNextClick();
  };

  return (
    <div className="py-10 px-5 w-full client-table bg-white p-5 rounded-md h-full">
      <AddNewClients />
      <table className="rwd-table w-full">
        <thead>
          <tr className="font-semibold text-[14px]">
            <th>Name</th>
            <th>Email</th>
            <th> Phone</th>
            <th> Residential Address</th>
          </tr>
        </thead>
        {clientList?.map((list) => {
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
      </table>
    </div>
  );
};

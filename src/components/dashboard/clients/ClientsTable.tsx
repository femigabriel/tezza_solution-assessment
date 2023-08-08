import React, { useState } from "react";
import { clientList } from "@/services/clientsList";
import { AddNewClients } from "./AddNewClients";
import { ResponseFetchUsers } from "@/services/Services";

interface Props {
  onNextClick: () => any;
}

export const ClientsTable = ({ onNextClick }: Props) => {
  const [data, setData] = useState<ResponseFetchUsers[]>(clientList);

  const handleSubmit = () => {
    onNextClick();
  };

  // Add new clients 
  const addToData = (data: ResponseFetchUsers) => {
    setData((x) => [...x, data]);
  };

  return (
    <div className="py-10 px-5 w-full client-table bg-white p-5 rounded-md h-full">
      <AddNewClients successCallBack={addToData} />
      <table className="rwd-table w-full">
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
      </table>
    </div>
  );
};
function ResponseFetchUsers(
  clientList: import("../../../services/Services").ResponseFetchUsers[]
) {
  throw new Error("Function not implemented.");
}

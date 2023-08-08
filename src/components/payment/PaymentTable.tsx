import React, { useState } from "react";
import { paymentHistory } from "@/services/paymentHistory";
import { ResponseFetchPaymentHistory } from "@/services/Services";

interface Props {
  onNextClick: () => any;
}

export const PaymentTable = ({ onNextClick }: Props) => {
  const [data, setData] =
    useState<ResponseFetchPaymentHistory[]>(paymentHistory);

  const handleSubmit = () => {
    onNextClick();
  };

  return (
    <div className="py-10 px-5 w-full client-table bg-white p-5 rounded-md h-full">
      {/* <AddNewClients successCallBack={addToData} /> */}
      <table className="rwd-table w-full">
        <thead>
          <tr className="font-semibold text-[14px]">
            <th>Name</th>
            <th>Item</th>
            <th> Created Date</th>
            <th>Amount</th>
            <th>Status</th>
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
                <td>{list.item}</td>
                <td>{list.date}</td>
                <td className="">₦{list.amount}</td>
                <td className="">{list.status}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
};

import React from "react";
import { Product } from "../../../../interfaces";

interface IProps {
  product: Product;
}
export const TableList = ({ product }: IProps) => {
  return (
    <div className="py-10 px-5 w-full client-table p-5 rounded-md h-full">
      <table className="rwd-table w-full">
        <thead>
          <tr className="font-semibold text-[14px]">
            <th>Name</th>
            <th>Email</th>
            <th> Phone</th>
            <th> Residential Address</th>
          </tr>
        </thead>
        <div className=" cursor-pointer text-[12px] font-semibold">
          <div className="grid grid-cols-4 px-3 list text-[#888] border border-x-0 border-t-0 border-[#f5f5f5] ">
            <td className="">{product.name}</td>
            <td>{product.email}</td>
            <td>{product.phone}</td>
            <td className="w-[22em]">{product.address}</td>
          </div>
        </div>
      </table>
    </div>
  );
};

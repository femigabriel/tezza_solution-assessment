import React, { useState } from "react";
import { Select, Input, Button } from "antd";

export const Schedule = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [from, setFromm] = useState("");
  const [to, setTo] = useState("");
  const [consultant, setConsultant] = useState("");
  const [description, setDescription] = useState("");

  const [error, setError] = useState(false);

  const updateTile = (event: any) => {
    setTitle(event.target.value);
  };

  const updateDate = (event: any) => {
    setDate(event.target.value);
  };
  const updateFrom = (event: any) => {
    setFromm(event.target.value);
  };
  const updateTo = (event: any) => {
    setTo(event.target.value);
  };
  const updateConsultant = (event: any) => {
    setConsultant(event.target.value);
  };

  const updateDescription = (event: any) => {
    setDescription(event.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (
      title.length == 0 ||
      date.length == 0 ||
      from.length == 0 ||
      to.length == 0 ||
      consultant.length == 0 ||
      description.length == 0
    ) {
      setError(true);
      return;
    }
    // successCallBack({ name, email, phone, address });
  };
  return (
    <div className="my-10 px-10">
      <div className=" bg-white rounded-[8px] px-7 py-7">
        <h3 className="font-bold text-[16px] my-5 mb-10">
          Enter Appoinment details
        </h3>
        <form action="" className="my-5">
          <div className="flex w-full">
            <div className="w-full mr-5">
              <label htmlFor="" className="text-[14px] mb-5 font-semibold">
                Title
              </label>
              <input className="w-full h-[45px] border rounded-md border-gray-400" />
            </div>
            <div className="w-full mx-5">
              <label htmlFor="" className="text-[14px] mb-5 font-semibold">
                Date
              </label>
              <input className="w-full h-[45px] border rounded-md border-gray-400" />
            </div>
          </div>
          <div className="my-5">
            <p className="text-[12px] text-gray-400 ">Duration</p>
          </div>
          <div className="flex mb-5">
            <div className="flex w-full">
              <div className="mr-3">
                <label htmlFor="" className="text-[14px] mb-5 font-semibold">
                  From
                </label>
                <input className="w-full h-[45px] border rounded-md border-gray-400" />
              </div>
              <div className="mx-3">
                <label htmlFor="" className="text-[14px] mb-5 font-semibold">
                  To
                </label>
                <input className="w-full h-[45px] border rounded-md border-gray-400" />
              </div>
            </div>
            <div className="w-full flex flex-col mx-5">
              <label htmlFor="" className="text-[14px] mb- font-semibold">
                Assign Travel Consultant
              </label>
              {/* <Select
                showSearch
                // style={{ width: 200, height: 45 }}
                className="w-full h-[45px]"
                placeholder="Search to Select"
                optionFilterProp="children"
                filterOption={(input, option) =>
                  (option?.label ?? "").includes(input)
                }
                filterSort={(optionA, optionB) =>
                  (optionA?.label ?? "")
                    .toLowerCase()
                    .localeCompare((optionB?.label ?? "").toLowerCase())
                }
                options={[
                  {
                    value: "1",
                    label: "Osadugbe Ikeoluwa",
                  },
                  {
                    value: "2",
                    label: "Osadugbe Ikeoluwa",
                  },
                  {
                    value: "3",
                    label: "Osadugbe Ikeoluwa",
                  },
                  {
                    value: "4",
                    label: "Osadugbe Ikeoluwa",
                  },
                  //   {
                  //     value: "5",
                  //     label: "Resolved",
                  //   },
                  //   {
                  //     value: "6",
                  //     label: "Cancelled",
                  //   },
                ]}
              /> */}
              <select
                className="w-full px-3 h-[45px] border rounded-md border-gray-400 cursor-pointer"
                name=""
                id=""
              >
                <option value="1" className="">
                  Osadugbe Ikeoluwa
                </option>
                <option value="2" className="">
                  Osadugbe Ikeoluwa
                </option>
                <option value="3" className="">
                  Osadugbe Ikeoluwa
                </option>
                <option value="4" className="">
                  Osadugbe Ikeoluwa
                </option>
              </select>
            </div>
          </div>
          <div className="flex">
            <div className="flex flex-col mt-5">
              <label htmlFor="">Description</label>
              <textarea
                className="w-[480px] h-[105px] border rounded-md border-gray-400"
                name=""
                id=""
                //   cols="30"
                //   rows="10"
              ></textarea>
            </div>
            <div></div>
          </div>
          <div className="flex justify-between mt-5">
            <div></div>
            <Button className="bg-[#c3ad2e] text-white px-10 ">Save</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

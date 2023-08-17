"use client";

import React, { useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Button, Modal, Input, Form, Select } from "antd";
import Link from "next/link";
import { useProductContext } from "@/context/PageContext";
import ImgCrop from "antd-img-crop";
import type { RcFile, UploadFile, UploadProps } from "antd/es/upload/interface";
import type { DatePickerProps } from "antd";
import { Upload, DatePicker } from "antd";

export const AddNewClients = ({ successCallBack }: any) => {
  // export const AddNewClients = () => {
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [address, setAddress] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [occupation, setOccupation] = useState("");
  const [year, setYear] = useState(0);
  const [country, setCountry] = useState("");
  const [dob, setDob] = useState("");
  const [purpose, setPurpose] = useState("");
  const [place, setPlace] = useState("");
  const [interest, setInterest] = useState("");

  const [error, setError] = useState(false);

  const { addProduct } = useProductContext();
  const add = () => {
    addProduct({
      name,
      email,
      address,
      phone,
      title: "",
      description: "",
      agenda: "",
      years: 0,
      country: "",
      dob: "",
      status: "",
      occupation: "",
      interest: "",
      education: "",
      purpose: "",
      place: "",
      profile: undefined,
    });
    setName("");
    setEmail("");
    setAddress("");
    setPhone("");
    setTitle("");
    setDescription("");
    setOccupation("");
    setYear(0);
    setCountry("");
    setDob("");
    setPlace("");
    setInterest("");
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const updateName = (event: any) => {
    setName(event.target.value);
  };

  const updateEmail = (event: any) => {
    setEmail(event.target.value);
  };
  const updatePhone = (event: any) => {
    setPhone(event.target.value);
  };
  const updateAddress = (event: any) => {
    setAddress(event.target.value);
  };

  const updateOccupation = (event: any) => {
    setOccupation(event.target.value);
  };
  const updateDob = (date: any) => {
    console.log(date);
  };

  const updateDescription = (event: any) => {
    setDescription(event.target.value);
  };
  const updatePlace = (event: any) => {
    setPlace(event.target.value);
  };
  const updateInterest = (event: any) => {
    setInterest(event.target.value);
  };

  // Select
  const onSelectChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const onSearch = (value: string) => {
    console.log("search:", value);
  };
  // Date picker
  const onDateChange: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date, dateString);
  };

  const updatePurpose = (event: any) => {
    setPurpose(event.target.value);
  };
  const updateCountry = (event: any) => {
    setCountry(event.target.value);
  };

  // Modal
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (
      name.length == 0 ||
      email.length == 0 ||
      phone.length == 0 ||
      address.length == 0 ||
      phone.length == 0 ||
      place.length == 0 ||
      description.length == 0 ||
      occupation.length == 0 ||
      address.length == 0

      // country.length == 0
    ) {
      setError(true);
      return;
    }
    setIsModalOpen(false);
    successCallBack({
      name,
      email,
      phone,
      address,
      description,
      occupation,
      country,
      dob,
      purpose,
      place,
    });
    console.log(name, phone, email, dob);
  };

  // Image upload
  const [fileList, setFileList] = useState<UploadFile[]>([
    {
      uid: "-1",
      name: "image.png",
      status: "done",
      url: "/assets/images/profile.jpg",
    },
  ]);

  const onChange: UploadProps["onChange"] = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const onPreview = async (file: UploadFile) => {
    let src = file.url as string;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj as RcFile);
        reader.onload = () => resolve(reader.result as string);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit} className="mb-14">
          <div className="flex w-full">
            <Input
              className="w-full h-[40px]"
              placeholder="Search by name, email ..."
              prefix={<SearchOutlined className="text-[#999]" />}
            />
            <Button
              type="primary"
              className="bg-[#c3ad2e] text-[#fff] text-[14px] font-semibold h-[40px] px-5  rounded-[10px] ml-5"
              onClick={showModal}
            >
              Add new Client
            </Button>
          </div>
        </form>
      </div>
      <Modal
        // title="Basic Modal"
        className=""
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        <div>
          <div className="mb-5">
            <div className="p-5 py-7 bg-[#fafafa] rounded-[8px] mb-5 w-full">
              <h3 className="font-semibold text-[14px]">Client's Picture</h3>
              <div>
                <ImgCrop rotationSlider>
                  <Upload
                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                    listType="picture-card"
                    fileList={fileList}
                    onChange={onChange}
                    onPreview={onPreview}
                  >
                    {fileList.length < 5 && "+ Upload"}
                  </Upload>
                </ImgCrop>
              </div>
            </div>
          </div>
          <form className="">
            <div className="w-full flex">
              <div className="mb-5 mr-3">
                <label className="" htmlFor="">
                  Full Name
                </label>
                <Input
                  className=""
                  placeholder=""
                  name="name"
                  onChange={updateName}
                />
                {error && name.length <= 0 ? (
                  <label className="text-red-400 font-normal text-base	">
                    Input can not be empty
                  </label>
                ) : (
                  ""
                )}
              </div>
              <div className="mb-5 ml-3">
                <label htmlFor="">Email</label>
                <Input
                  className=""
                  placeholder=""
                  name="email"
                  onChange={updateEmail}
                />
                {error && email.length <= 0 ? (
                  <label className="text-red-400 font-normal text-base	">
                    Input can not be empty
                  </label>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="flex w-full">
              <div className="mb-5 mr-3">
                <label className="" htmlFor="">
                  Applicant Fullname
                  <span className="text-[12px] text-red-600">
                    (as shown in passport)
                  </span>
                </label>
                <Input
                  className=""
                  placeholder=""
                  name="name"
                  onChange={updateName}
                />
                {error && name.length <= 0 ? (
                  <label className="text-red-400 font-normal text-base	">
                    Input can not be empty
                  </label>
                ) : (
                  ""
                )}
              </div>
              <div className="mb-5 ml-3">
                <label className="" htmlFor="">
                  Gender
                </label>
                <Select
                  showSearch
                  className="w-full"
                  placeholder="Select a person"
                  optionFilterProp="children"
                  onChange={onSelectChange}
                  onSearch={onSearch}
                  filterOption={(input, option) =>
                    (option?.label ?? "")
                      .toLowerCase()
                      .includes(input.toLowerCase())
                  }
                  options={[
                    {
                      value: "female",
                      label: "Female",
                    },
                    {
                      value: "male",
                      label: "Male",
                    },
                  ]}
                />
                {error && name.length <= 0 ? (
                  <label className="text-red-400 font-normal text-base	">
                    Input can not be empty
                  </label>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="flex">
              <div className="mb-5 mr-3">
                <label className="" htmlFor="">
                  Place of Birth
                </label>
                <Input
                  className=""
                  placeholder=""
                  name="name"
                  onChange={updatePlace}
                />
                {error && place.length <= 0 ? (
                  <label className="text-red-400 font-normal text-base	">
                    Input can not be empty
                  </label>
                ) : (
                  ""
                )}
              </div>
              <div className="mb-5 mr-3">
                <label className="" htmlFor="">
                  Date of Birth
                </label>
                <DatePicker
                  format="YYYY/MM/DD"
                  className="font-semibold"
                  onChange={updateDob}
                />
                {/* <DatePicker value={moment(object.startDate, "MM/DD/YYYY")} /> */}

                {/* <DatePicker
                  
                   onChange={(date) => console.log(date)}
                /> */}
                {error && dob.length <= 0 ? (
                  <label className="text-red-400 font-normal text-base	">
                    Input can not be empty
                  </label>
                ) : (
                  ""
                )}
              </div>
              <div className="mb-5 mr-3">
                <label className="" htmlFor="">
                  Country of Citizenship
                </label>
                <Input
                  className=""
                  type="text"
                  placeholder=""
                  name="name"
                  onChange={updateCountry}
                />
                {error && name.length <= 0 ? (
                  <label className="text-red-400 font-normal text-base	">
                    Input can not be empty
                  </label>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="flex w-full">
              <div className=" mr-3">
                <label htmlFor="" className="">
                  Current Occupation
                </label>
                <Input
                  className=""
                  placeholder=""
                  name="phone"
                  onChange={updateOccupation}
                />
                {error && occupation.length <= 0 ? (
                  <label className="text-red-400 font-normal text-base	">
                    Input can not be empty
                  </label>
                ) : (
                  ""
                )}
              </div>
              <div className="ml-3">
                <label htmlFor="" className="">
                  Phone
                </label>
                <Input
                  className=""
                  placeholder=""
                  name="phone"
                  onChange={updatePhone}
                />
                {error && phone.length <= 0 ? (
                  <label className="text-red-400 font-normal text-base	">
                    Input can not be empty
                  </label>
                ) : (
                  ""
                )}
              </div>
            </div>

            <div className="flex w-full mt-5">
              <div className="mb-5 mr-3 flex flex-col">
                <label htmlFor="">Residential Address</label>
                <textarea
                  className="border w-full px-3 py-5 rounded-[4px]"
                  placeholder=""
                  name="name"
                  onChange={updateAddress}
                ></textarea>
                {error && address.length <= 0 ? (
                  <label className="text-red-400 font-normal text-base">
                    Input can not be empty
                  </label>
                ) : (
                  ""
                )}
              </div>
              <div className="mb-5 ml-3 flex flex-col">
                <label htmlFor="">Mailing Address</label>
                <textarea
                  className="border w-full px-3 py-5 rounded-[4px]"
                  placeholder=""
                  name="name"
                  onChange={updateDescription}
                ></textarea>
                {error && description.length <= 0 ? (
                  <label className="text-red-400 font-normal text-base">
                    Input can not be empty
                  </label>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="w-full flex">
              <div className="mb-5 mr-3">
                <label className="" htmlFor="">
                  Country of Interest
                </label>
                <Input
                  className=""
                  placeholder=""
                  name="interest"
                  onChange={updateInterest}
                />
                {error && interest.length <= 0 ? (
                  <label className="text-red-400 font-normal text-base	">
                    Input can not be empty
                  </label>
                ) : (
                  ""
                )}
              </div>
              <div className="mb-5 ml-3">
                <label htmlFor="">Purpose of Traveling</label>
                <Input
                  className=""
                  placeholder=""
                  name="email"
                  onChange={updatePurpose}
                />
                {error && setPurpose.length <= 0 ? (
                  <label className="text-red-400 font-normal text-base	">
                    Input can not be empty
                  </label>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="flex justify-between">
              <div></div>
              <div className="flex justify-between">
                <Button className="bg-[#c3ad2e]" onClick={handleSubmit}>
                  Add new
                </Button>
                <Button className="" onClick={handleOk}>
                  Back
                </Button>
              </div>
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
};

import React, { useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Button, Modal, Input, Form } from "antd";

export const AddNewClients = ({ successCallBack }: any) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState(false);
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
      address.length == 0
    ) {
      setError(true);
      return;
    }
    setIsModalOpen(false);
    successCallBack({ name, email, phone, address });
  };


   // const addCLients = () => {
  //   setAddToClientsIndex((x) => x + 1);
  // };

  // const renderAddToClients = () => {
  //   switch (addtToClientsIndex) {
  //     case 0:
  //       return <AddNewClients />;
  //     case 1:
  //       return <AddNewClientPage />;
  //   }
  // };
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
        title="Basic Modal"
        open={isModalOpen}
        // onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <form className="">
          <div className="mb-5">
            <label className="" htmlFor="">
              Name
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
          <div className="mb-5">
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
          <div className="mb-5">
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
          <div className="mb-5 flex flex-col">
            <label htmlFor="">Residential Address</label>
            <textarea
              className="border px-3 py-5 rounded-[4px]"
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
          <div className="flex justify-between">
            <Button className="bg-[#c3ad2e]" onClick={handleSubmit}>
              Add new
            </Button>
            <Button className="" onClick={handleOk}>
              Back
            </Button>
          </div>
        </form>
      </Modal>
    </>
  );
};

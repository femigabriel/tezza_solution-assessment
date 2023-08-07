import React, { useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Button, Modal, Input, Form } from "antd";

export const AddNewClients = () => {
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
    setPhone(event.target.checked);
  };
  const updateAddress = (event: any) => {
    setAddress(event.target.checked);
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
    if (name.length == 0 || email.length == 0) {
      setError(true);
      //   setIsModalOpen(false);
      return;
    }
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
        title="Basic Modal"
        open={isModalOpen}
        // onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <form onSubmit={handleSubmit} className="">
          <div className="mb-5">
            <label htmlFor="">Name</label>
            <Input
              className=""
              placeholder=""
              name="name"
              onChange={updateName}
            
            />
            {error && name.length <= 0 ? (
              <label className="text-red-400 font-light text-base	">
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
              //   onChange={updateEmail}
              onChange={(e) => setEmail(e.target.value)}
              pattern="^\S+@\S+\.\S+$"
            />
            {error && email.length <= 0 ? (
              <label className="text-red-400 font-light text-base	">
                Input can not be empty
              </label>
            ) : (
              ""
            )}
          </div>
          <div className="mb-5">
            <label htmlFor="">Phone</label>
            <Input
              className=""
              placeholder=""
              name="phone"
              onChange={(e) => setPhone(e.target.value)}
            />
            {error && phone.length <= 0 ? (
              <label className="text-red-400 font-light text-base	">
                Input can not be empty
              </label>
            ) : (
              ""
            )}
          </div>
          <div className="mb-5 flex flex-col">
            <label htmlFor="">Residential Address</label>
            <textarea
              className="border px-3 rounded-[4px]"
              placeholder=""
              name="name"
              //   onChange={updateAddress}
              onChange={(e) => setAddress(e.target.value)}
            ></textarea>
            {error && address.length <= 0 ? (
              <label className="text-red-400 font-light text-base	">
                Input can not be empty
              </label>
            ) : (
              ""
            )}
          </div>
          <div className="flex justify-between">
            <Button className="bg-[#c3ad2e]" 
            // onClick={handleOk}
            >
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

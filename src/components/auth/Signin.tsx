import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import SIgnInForm from "./SigninForm";
const logo = "./assets/images/logo.webp";

export const Signin = () => {
  return (
    <div className="flex justify-center items-center two w-full pt-32">
      <div className="bg-white shadow-sm p-5 px-10 pt-10 w-full max-w-[450px] h-full">
        <div className="flex justify-between mb-5">
          <div>
            <h3 className="text-[16px] font-semibold">Login</h3>
            <p>Login to your account</p>
          </div>
          <div>
            <img src={logo} className="w-[60px] h-[60px]" alt="logo" />
          </div>
        </div>
        <div>
          <SIgnInForm />
        </div>
      </div>
    </div>
  );
};

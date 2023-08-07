import React from "react";
import SIgnInForm from "./SigninForm";
const logo = "./assets/images/depositphotos.jpg";

export const Signin = () => {
  return (
    <div className="flex justify-center items-center login w-full h-screen pt-32">
      <div className="bg-white p-5 px-10 pt-10 w-full max-w-[450px] h-[] shadow-md">
        <div className="flex justify-between mb-5">
          <div className="mt-5">
            <h3 className="text-[16px] font-semibold">Login</h3>
            <p>Login to your account</p>
          </div>
          <div>
            <img src={logo} className="w-[95px] h-[95px] rounded-full" alt="logo" />
          </div>
        </div>
        <div>
          <SIgnInForm />
        </div>
      </div>
    </div>
  );
};

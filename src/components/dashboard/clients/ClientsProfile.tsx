import React from "react";
const profile = "/assets/images/profile.jpg";


import { Button } from "antd";

interface Props {
  // onNextClick: () => any;
  onBackClick: () => any;
}

export const ClientsProfile = ({ onBackClick }: Props) => {


  return (
    <div className="mt-5">
      <div className="bg-white px-5 py-8 rounded-[8px]">
        <div className="p-5 py-7 bg-[#fafafa] rounded-[8px] w-full">
          <h3 className="font-semibold text-[14px]">Client's Picture</h3>
          <div className="py-5 flex">
            <img
              src={profile}
              className="w-[85px] h-[85px] rounded-full"
              alt=""
            />
            <div className="mx-5">
              <h3 className="text-[16px] font-bold">Odunsote Mayokun</h3>
              <p className="text-[12px] font-semibold text-gray-400 my-2">
                adegoketemtope@gmail.com
              </p>
              <div className="flex justify-between text-[12px] font-semibold text-gray-400">
                <p className="">Female</p>
                <p className="">54 years old</p>
                <p className="">Nigeria</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between p-5 pt-16">
          <div className="flex flex-col">
            <div>
              <p className="text-[10px] font-semibold text-gray-400">
                Full Name
              </p>
              <span className="text-[14px] font-bold">Odunsote Mayokun</span>
            </div>
            <div className="mt-5">
              <p className="text-[10px] font-semibold text-gray-400 mb-2">
                Application Full name
                <span className="text-[#c3ad2e]">(as shown in passport)</span>
              </p>
              <span className="text-[14px] font-bold">Odunsote Mayokun</span>
            </div>
            <div className="flex justify-between w-full mt-5">
              <div>
                <p className="text-[10px] font-semibold text-gray-400">
                  Place of Birth
                </p>
                <span className="text-[14px] font-bold">Nigeria</span>
              </div>
              <div>
                <p className="text-[10px] font-semibold text-gray-400">
                  Date of Birth
                </p>
                <span className="text-[14px] font-bold">04/11/2012</span>
              </div>
            </div>
            <div className="mt-5">
              <p className="text-[10px] font-semibold text-gray-400">
                Marital Status
              </p>
              <span className="text-[14px] font-bold">Married</span>
            </div>
            <div className="mt-5">
              <p className="text-[10px] mb-3 font-semibold text-gray-400">
                Current Occupation
              </p>
              <span className="text-[14px] font-bold">Engineer</span>
            </div>
            <div className="mt-5">
              <p className="text-[10px] mb-3 font-semibold text-gray-400">
                Residential Address
              </p>
              <span className="text-[14px] font-bold">
                No 2, Oloro Street Bank Olodo, Ibadan, Oyo State, Nigeria
              </span>
            </div>
            <div className="mt-5">
              <p className="text-[10px] mb-3 font-semibold text-gray-400">
                Country of Interest
              </p>
              <span className="text-[14px] font-bold">Iceland</span>
            </div>
          </div>
          <div className="flex flex-col">
            <div>
              <p className="text-[10px] font-semibold text-gray-400">Email</p>
              <span className="text-[14px] font-bold">adegoke@gmail.com</span>
            </div>
            <div>
              <p className="text-[10px] font-semibold text-gray-400">Gender</p>
              <span className="text-[14px] font-bold">Female</span>
            </div>
            <div>
              <p className="text-[10px] font-semibold text-gray-400">
                Country of Citizenship
              </p>
              <span className="text-[14px] font-bold">Nigeria, Uganda</span>
            </div>
            <div className="mt-5">
              <p className="text-[10px] font-semibold text-gray-400">
                Education
                <span className="text-[#c3ad2e]">
                  (Client's highest level of Education)
                </span>
              </p>
              <span className="text-[14px] font-bold">Barchelor's Degree</span>
            </div>

            <div className="mt-5">
              <p className="text-[10px] font-semibold text-gray-400">
                Phone Number
              </p>
              <span className="text-[14px] font-bold"> +234(0)8123454523</span>
            </div>
            <div className="mt-5">
              <p className="text-[10px] mb-3 font-semibold text-gray-400">
                Mailing Address
              </p>
              <span className="text-[14px] font-bold">
                No 2, Oloro Street Bank Olodo, Ibadan, Oyo State, Nigeria
              </span>
            </div>
            <div className="mt-5">
              <p className="text-[10px] mb-3 font-semibold text-gray-400">
                Purpose of Travaling
              </p>
              <span className="text-[14px] font-bold">Trading</span>
            </div>
          </div>
        </div>
        <div className="flex justify-between mt-3">
          <div></div>
          <Button
            onClick={onBackClick}
            className="bg-[#c3ad2e] text-[14px] text-white px-10 h-[35px]"
          >
            Back
          </Button>
        </div>
      </div>
    </div>
  );
};

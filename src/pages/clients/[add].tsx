import { DashboardLayout } from "@/components/auth/DashboardLayout";
import { Clients } from "@/components/dashboard/clients/Clients";
import { ResponseFetchUsers } from "@/services/Services";
import { clientList } from "@/services/clientsList";
import { Button } from "antd";
import React, { useState } from "react";
const profile = "/assets/images/profile.jpg";
import { useRouter } from "next/router";

export const Add = ({ props }: any) => {
  const defaultLoadCount = 1;
  // const [data, setData] = useState<ResponseFetchUsers[]>(clientList);
  // const [currentSlice, setCurrentSlice] = useState<number>(defaultLoadCount);

  const router = useRouter();

  return (
    <div>
      <DashboardLayout title="Clients" description="Here's the clients list">
        <div className="py-10 px-10 ">
          <h2>{props.post.name}</h2>
          <div className="bg-white px-5 py-8 rounded-[8px]">
            {/* {data?.slice(0, currentSlice).map((list) => {
              return ( */}
                {/* <div>
                  <div className="p-5 py-7 bg-[#fafafa] rounded-[8px] w-full">
                    <h3 className="font-semibold text-[14px]">
                      Client's Picture
                    </h3>

                    <div className="py-5 flex">
                      {list.profile}
                      <div className="mx-5">
                        <h3 className="text-[16px] font-bold">{list.name}</h3>
                        <p className="text-[12px] font-semibold text-gray-400 my-2">
                          {list.email}
                        </p>
                        <div className="flex justify-between text-[12px] font-semibold text-gray-400">
                          <p className="mr-2">{list.agenda}</p>
                          <p className="">{list.years} years old</p>
                          <p className="">{list.country}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between p-5 pt-16">
                    <div className="flex flex-col">
                      <div>
                        <p className="text-[10px] font-semibold text-gray-400">
                          {list.name}
                        </p>
                        <span className="text-[14px] font-bold">
                          {list.name}
                        </span>
                      </div>
                      <div className="mt-5">
                        <p className="text-[10px] font-semibold text-gray-400 mb-2">
                          Application Full name
                          <span className="text-[#c3ad2e]">
                            (as shown in passport)
                          </span>
                        </p>
                        <span className="text-[14px] font-bold">
                          {list.name}
                        </span>
                      </div>
                      <div className="flex justify-between w-full mt-5">
                        <div>
                          <p className="text-[10px] font-semibold text-gray-400">
                            Place of Birth
                          </p>
                          <span className="text-[14px] font-bold">
                            {" "}
                            {list.country}
                          </span>
                        </div>
                        <div>
                          <p className="text-[10px] font-semibold text-gray-400">
                            Date of Birth
                          </p>
                          <span className="text-[14px] font-bold">
                            {list.dob}
                          </span>
                        </div>
                      </div>
                      <div className="mt-5">
                        <p className="text-[10px] font-semibold text-gray-400">
                          Marital Status
                        </p>
                        <span className="text-[14px] font-bold">
                          {" "}
                          {list.status}
                        </span>
                      </div>
                      <div className="mt-5">
                        <p className="text-[10px] mb-3 font-semibold text-gray-400">
                          Current Occupation
                        </p>
                        <span className="text-[14px] font-bold">
                          {list.occupation}
                        </span>
                      </div>
                      <div className="mt-5">
                        <p className="text-[10px] mb-3 font-semibold text-gray-400">
                          Residential Address
                        </p>
                        <span className="text-[14px] font-bold">
                          {list.address}
                        </span>
                      </div>
                      <div className="mt-5">
                        <p className="text-[10px] mb-3 font-semibold text-gray-400">
                          Country of Interest
                        </p>
                        <span className="text-[14px] font-bold">
                          {list.interest}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <div>
                        <p className="text-[10px] font-semibold text-gray-400">
                          Email
                        </p>
                        <span className="text-[14px] font-bold">
                          {list.email}
                        </span>
                      </div>
                      <div>
                        <p className="text-[10px] font-semibold text-gray-400">
                          Gender
                        </p>
                        <span className="text-[14px] font-bold">
                          {list.agenda}
                        </span>
                      </div>
                      <div>
                        <p className="text-[10px] font-semibold text-gray-400">
                          Country of Citizenship
                        </p>
                        <span className="text-[14px] font-bold">
                          {list.country}
                        </span>
                      </div>
                      <div className="mt-5">
                        <p className="text-[10px] font-semibold text-gray-400">
                          Education
                          <span className="text-[#c3ad2e]">
                            (Client's highest level of Education)
                          </span>
                        </p>
                        <span className="text-[14px] font-bold">
                          {list.education}
                        </span>
                      </div>

                      <div className="mt-5">
                        <p className="text-[10px] font-semibold text-gray-400">
                          Phone Number
                        </p>
                        <span className="text-[14px] font-bold">
                          +234{list.phone}
                        </span>
                      </div>
                      <div className="mt-5">
                        <p className="text-[10px] mb-3 font-semibold text-gray-400">
                          Mailing Address
                        </p>
                        <span className="text-[14px] font-bold">
                          {list.address}
                        </span>
                      </div>
                      <div className="mt-5">
                        <p className="text-[10px] mb-3 font-semibold text-gray-400">
                          Purpose of Travaling
                        </p>
                        <span className="text-[14px] font-bold">
                          {list.purpose}
                        </span>
                      </div>
                    </div>
                  </div>
                </div> */}
              {/* );
            })} */}
            <div className="flex justify-between mt-3">
              <div></div>
              <Button
                // onClick={onBackClick}
                className="bg-[#c3ad2e] text-[14px] text-white px-10 h-[35px]"
              >
                Back
              </Button>
            </div>
          </div>
        </div>
        {/* <Clients /> */}
      </DashboardLayout>
    </div>
  );
};

// export default Add;

export async function getStaticPaths() {
  const [data, setData] = useState<ResponseFetchUsers[]>(clientList);

  const thePaths = data.map((list) => {
    return { params: { add: list.add } };
  });

  return {
    paths: thePaths,
    fallback: false,
  };
}

export async function getStaticProps({ context }: any) {
  const [data, setData] = useState<ResponseFetchUsers[]>(clientList);
  const thePost = data.filter((post) => post.add === context.params.add)[0];

  return {
    props: {
      post: thePost,
      title: thePost.title,
    },
  };
}

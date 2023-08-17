import React, { Children } from "react";
import { Sidebar } from "../dashboard/Sidebar";
import { Headers } from "./Headers";
import PageContexttProvider from "@/context/PageContextProvider";

interface Props {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

export const DashboardLayout = ({ children, title, description }: Props) => {
  return (
    <div>
      <div className="flex w-full">
        <Sidebar />
        <div className="w-full">
          <Headers
            title={title || "no title"}
            description={description || "no description"}
          />
          <PageContexttProvider>{children}</PageContexttProvider>
        </div>
      </div>
    </div>
  );
};

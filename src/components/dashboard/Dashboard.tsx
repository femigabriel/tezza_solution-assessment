import React from "react";
import { Workspace } from "./workfspace/Workspace";
import { DashboardLayout } from "../auth/DashboardLayout";

export const Dashboard = () => {
  return (
    <div>
      <DashboardLayout title="Your Workface" description="Welcome, xxx">
        <div className="py-10 px-10 w-full">
          <Workspace />
        </div>
      </DashboardLayout>
    </div>
  );
};

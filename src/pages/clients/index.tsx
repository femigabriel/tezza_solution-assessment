"use client";



import { DashboardLayout } from "@/components/auth/DashboardLayout";
import { Clients } from "@/components/dashboard/clients/Clients";
import { ClientTable } from "@/components/dashboard/clients/ClientsTable";

export default function clients() {


  return (
    <>
      <DashboardLayout title="Clients" description="Here's the clients list">
        {/* <Clients/> */}
        <ClientTable />
      </DashboardLayout>
    </>
  );
}

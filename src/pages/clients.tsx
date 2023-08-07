import { DashboardLayout } from "@/components/auth/DashboardLayout";
import { Clients } from "@/components/dashboard/clients/Clients";

export default function clients() {
  return (
    <>
      <DashboardLayout title="Clients" description="Here's the clients list">
        <Clients />
      </DashboardLayout>
    </>
  );
}

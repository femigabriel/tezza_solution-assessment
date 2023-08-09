import { DashboardLayout } from "@/components/auth/DashboardLayout";
import { Schedule } from "@/components/dashboard/schedule/Schedule";

export default function schedule() {
  return (
    <>
      <DashboardLayout
        title="Add Appointment"
        description="Add a new Appointment here"
      >
        <Schedule />
      </DashboardLayout>
    </>
  );
}

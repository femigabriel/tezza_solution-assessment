import { DashboardLayout } from "@/components/auth/DashboardLayout";
import { Clients } from "@/components/dashboard/clients/Clients";
import { Payment } from "@/components/payment/Payment";

export default function clients() {
  return (
    <>
      <DashboardLayout
        title="Payment"
        description="Here's the history of payment"
      >
        <Payment />
      </DashboardLayout>
    </>
  );
}

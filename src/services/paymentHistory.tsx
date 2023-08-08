import { ResponseFetchPaymentHistory } from "./Services";

export const paymentHistory: ResponseFetchPaymentHistory[] = [
  {
    id: 1,
    name: "Adegoke Oluwadamilare",
    item: "Registration Fee",
    date: "11/4/2021",
    amount: 21000,
    status: (
      <button className="px-3 py-2 bg-red-100 text-[#c3ad2e] text-[12px] rounded-[8px]">
        Pending
      </button>
    ),
  },
];

import { Inter } from "next/font/google";
import { Dashboard } from "@/components/dashboard/Dashboard";

// const inter = Inter({ subsets: ["latin"] });

export default function dashboard() {
  return (
    <div className="workspace">
      <Dashboard />
    </div>
  );
}

import Image from "next/image";
import { Inter } from "next/font/google";
import { Signin } from "@/components/auth/Signin";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Signin />
    </div>
  );
}

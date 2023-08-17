import { DashboardLayout } from "@/components/auth/DashboardLayout";
// import PageContext from "@/context/PageContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;

  //   return (
  //     <PageContext>
  //       {/* <DashboardLayout> */}
  //         <Component {...pageProps} />
  //       {/* </DashboardLayout> */}
  //     </PageContext>
  //   );
}

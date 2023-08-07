import PageContext from "@/context/PageContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PageContext>
      <Component {...pageProps} />
    </PageContext>
  );
}

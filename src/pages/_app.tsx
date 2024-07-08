import "@/styles/globals.css";
import "../styles/style.css";
import type { AppProps } from "next/app";
import Navbar from "../../components/Navbar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />;
    </>
  );
}

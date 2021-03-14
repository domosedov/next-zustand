import { FC } from "react";
import { AppProps } from "next/app";
import "../styles/globals.css";
import { Header } from "../components/header";

const Application: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
};

export default Application;

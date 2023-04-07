import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/components/Layout";
import { themes } from "../context/context";
import { useState, useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [dark, setDark] = useState(false);
  const darkMode = () => {
    if (localStorage.getItem("DarkMode") !== "dark") {
      localStorage.setItem("DarkMode", "dark");
      setDark(true);
    } else {
      localStorage.setItem("DarkMode", "white");
      setDark(false);
    }
  };
  useEffect(() => {
    if (localStorage.getItem("DarkMode") === "dark") {
      setDark(true);
      // console.log("hello1");
    }
    // console.log("hello2");
    // let a = localStorage.getItem("DarkMode") === "dark";
  }, []);
  return (
    <themes.Provider value={{ dark, setDark, darkMode }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </themes.Provider>
  );
}

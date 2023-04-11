import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/components/Layout";
import { themes } from "../context/context";
import { useState, useEffect } from "react";
export default function App({ Component, pageProps }: AppProps) {
  const [score, setScore] = useState(0);
  const [dark, setDark] = useState(false);
  const darkMode = () => {
    if (localStorage.getItem("DarkMode") !== "dark") {
      localStorage.setItem("DarkMode", "dark");
      setDark(true);
      document.body.classList.add("dark");
    } else {
      localStorage.setItem("DarkMode", "white");
      setDark(false);
      document.body.classList.remove("dark");
    }
  };
  useEffect(() => {
    if (localStorage.getItem("DarkMode") === "dark") {
      setDark(true);
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
      setDark(false);
    }
  }, []);
  return (
    <themes.Provider value={{ dark, setDark, darkMode, score, setScore }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </themes.Provider>
  );
}

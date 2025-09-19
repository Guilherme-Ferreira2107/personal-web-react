"use client";

import { Suspense, useState } from "react";
import { ThemeProvider } from "styled-components";

import { darkTheme, GlobalStyles, lightTheme } from "@/styles/theme";

import { Loading } from "@/components/UI/Loading";
import { Header } from "@/components/Layout/Header";
import { Footer } from "@/components/Layout/Footer";
import { Presentation } from "@/components/Layout/Presentation";
import { About } from "@/components/Layout/About";
import { Portfolio } from "@/components/Layout/Portfolio";
import { Contact } from "@/components/Layout/Contact";

export default function Home() {
  const [theme, setTheme] = useState("dark");
  const isDarkTheme = theme === "dark";
  const toggleTheme = () => setTheme(isDarkTheme ? "light" : "dark");

  return (
    <Suspense fallback={<Loading />}>
      <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        <div className="w-full">
          <GlobalStyles />
          <Header toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
          <Presentation />
          <About />
          <Portfolio />
          <Contact />
          <Footer />
        </div>
      </ThemeProvider>
    </Suspense>
  );
}

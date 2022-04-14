import React, { lazy, Suspense, useState } from "react";
import { ThemeProvider } from "styled-components";
import loadable from "@loadable/component";

import { Wrapper } from "./styles";
import { darkTheme, lightTheme, GlobalStyles } from "./styled/theme";

const Header = lazy(() => import("./sections/header/header.page"));
const Presentation = lazy(() =>
  import("./sections/presentation/presentation.page")
);
const About = lazy(() => import("./sections/about/about.page"));
const Portfolio = lazy(() => import("./sections/portfolio/portfolio.page"));
const Footer = lazy(() => import("./sections/footer/footer.page"));
const Contact = lazy(() => import("./sections/contact/contact.page"));
const Loading = loadable(() =>
  import("./components/loading/loading.components")
);

function App() {
  const renderLoader = () => <Loading />;
  const [theme, setTheme] = useState("dark");
  const isDarkTheme = theme === "dark";
  const toggleTheme = () => setTheme(isDarkTheme ? "light" : "dark");

  return (
    <Suspense fallback={renderLoader()}>
      <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
        <Wrapper>
          <GlobalStyles />
          <Header toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
          <Presentation />
          <About />
          <Portfolio />
          <Contact />
          <Footer />
        </Wrapper>
      </ThemeProvider>
    </Suspense>
  );
}

export default App;

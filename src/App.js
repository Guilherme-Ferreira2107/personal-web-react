import React, { lazy, Suspense } from "react";
import loadable from "@loadable/component";

import { Wrapper } from "./styles";

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

  return (
    <Suspense fallback={renderLoader()}>
      <Wrapper>
        <Header />
        <Presentation />
        <About />
        <Portfolio />
        <Contact />
        <Footer />
      </Wrapper>
    </Suspense>
  );
}

export default App;

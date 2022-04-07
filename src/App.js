import {
  Header,
  Presentation,
  About,
  Portfolio,
  Footer,
  Contact,
} from "./sections";
import { Wrapper } from "./styles";

function App() {
  return (
    <Wrapper>
      <Header />
      <Presentation />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </Wrapper>
  );
}

export default App;

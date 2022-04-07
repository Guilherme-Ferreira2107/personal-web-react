import { Header, Presentation, About, Portfolio, Footer } from "./sections";
import { Wrapper } from "./styles";

function App() {
  return (
    <Wrapper>
      <Header />
      <Presentation />
      <About />
      <Portfolio />
      <Footer />
    </Wrapper>
  );
}

export default App;

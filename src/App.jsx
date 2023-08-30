import { GlobalStyle } from "./styles/GlobalStyle";
import Container from "./components/Container";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Main from "./components/Main";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Container>
        <Header />
        <Banner />
        <Main />
        <Footer />
      </Container>
      <GlobalStyle />
    </>
  )
}
import Container from "./components/Container";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Products from "./components/Products";
import Stores from "./components/Stores";
import Subtitle from "./components/Subtitle";
import Title from "./components/Title";

const App = () => {
  return (
    <Container>
      <Header>
        <Title title="Beleza" />
        <img src="/logo.png" />
      </Header>
      <Subtitle text="As lojas Propz agora possuem um espaço de beleza onde você encontra tudo para montar looks únicos. Venha Conhecer!" />
      <Products />
      <Stores />
      <Footer />
    </Container>
  );
};

export default App;

import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import About from "./About";
import Validation from "./Validation";
import "./style.css";
import Seasonal from "./Seasonal";
import ChineseFood from "./ChineseFood";
import Team from "./Team";
import Price from "./Price";
import Form from "./Form";
import Footer from "./Footer";

function App() {
  return (
    <div className="container">
      <Header />
      <div class="space-1"></div>
      <About />
      <div class="space-1"></div>
      <Validation />
      <div class="space-1"></div>
      <Seasonal />
      <div class="space-1"></div>
      <div class="space-1"></div>
      <ChineseFood />
      <div class="space-1"></div>
      <div class="space-1"></div>

      <Team />
      <div class="space-1"></div>
      <Price />
      <div class="space-1"></div>
      <div class="space-1"></div>
      <Form />
      <Footer />
    </div>
  );
}

export default App;

import Animacao from "./Components/Animacao/Animacao";
import NavbarMenu from "./Components/NavbarMenu/NavbarMenu";
import WhatsApp from "./Components/WhatsApp";


import Home from "./Pages/Home";
import About from "./Pages/About";
import Skills from "./Pages/Skills";
import Portfolio from "./Pages/Portfolio";
import Contact from "./Pages/Contact";

function App() {
  return (
    <div className="App">
      <NavbarMenu />
      <Home />
      <Skills />
      <Portfolio />
      <About />
      <Contact />


      <WhatsApp />
      <Animacao />
    </div>
  );
}

export default App;

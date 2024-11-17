import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Services from "./Components/Services";
import Experience from "./Components/Experience";
import Education from "./Components/Education";
import Quotes from "./Components/Quotes";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Services />
      <Experience />
      <Education />
      <Quotes />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

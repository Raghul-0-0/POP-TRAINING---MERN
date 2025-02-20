import Home from "./components/FunctionalComponent/Home";
import Signup from "./components/FunctionalComponent/Signup";
import Gallery from "./components/FunctionalComponent/Gallery";
import Contact from "./components/FunctionalComponent/Contact";
import About from "./components/FunctionalComponent/About";
import Navbar from "./components/FunctionalComponent/Navbar";
import UseEffect from "./components/FunctionalComponent/Hooks/UseEffect";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <main>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home properties="Hello" sjit=" SJIT" />} />
          <Route path="/about" element={<About />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/UseEffect" element={<UseEffect />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;

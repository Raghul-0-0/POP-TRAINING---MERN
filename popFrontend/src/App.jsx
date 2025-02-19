import Home from './components/FunctionalComponent/Home';
import Signup from './components/FunctionalComponent/Signup';
import Gallery from './components/FunctionalComponent/Gallery';
import Contact from './components/FunctionalComponent/Contact';
import About from './components/FunctionalComponent/About';
import Navbar from './components/FunctionalComponent/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <main>
      <BrowserRouter>
      
        <Routes>
          <Route path='/' element={      <Home properties = "Hello" sjit=" SJIT"/>}/>
        </Routes>
      </BrowserRouter>
      <Navbar /> <hr />
      <Home properties = "Hello" sjit=" SJIT"/> <hr />
      <About /> <hr />
      <Signup /> <hr />
      <Gallery /> <hr />
      <Contact /> <hr />
    </main>
  );
}

export default App;

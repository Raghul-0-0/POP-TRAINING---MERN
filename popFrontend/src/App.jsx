import { useState } from 'react';
import reactLogo from './assets/react.svg';
// import viteLogo from './assets/vite.svg';
import './App.css';
import Home from './components/FunctionalComponent/Home';
import ClassCompEg from './components/ClassComponent/ClassCompEG';
function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Home />
      <ClassCompEg/>
    </div>
  );
}

export default App;
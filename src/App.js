import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import './index.css';

function App() {
  const [darkMode, setDarkMode] = useState(false)
  return (
    <div>
      <Navbar title= "Textutils" mode = {darkMode}/>
      <Textform heading= "Enter the text to analyze"/>
      {/* <About/> */}

    </div>
  );
}

export default App;

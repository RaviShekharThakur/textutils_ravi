import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import Textform from './components/Textform';
import React, {userState} from 'react';
import './index.css';

function App() {
  const [mode, setMode] = useState('white')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
  }

  const toggleMode = () => {
    if (mode === 'white'){
      setMode('black')
      document.body.style.backgroundColor = 'black'
      showAlert("dark mode enabled", "black")
    }
    else{
      setMode('white')
      document.body.style.backgroundColor = 'white'
      showAlert("light mode enabled", "black")
    }
  }
  return (
    <div>
      <Navbar title= "Textutils" mode = {mode} toggleMode={toggleMode}/>
      <Textform heading= "Enter the text to analyze"/>
      {/* <About/> */}
      <Alert alert= {alert}/>

    </div>
  );
}

export default App;

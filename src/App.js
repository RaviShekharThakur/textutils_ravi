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
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'white'){
      setMode('#11aad9')
      document.body.style.backgroundColor = '#11aad9'
      showAlert("dark mode enabled", "black")
    }
    else{
      setMode('white')
      document.body.style.backgroundColor = 'white'
      showAlert("light mode enabled", "white")
    }
  }
  return (
    <div>
      <Navbar title= "Textutils" mode = {mode} toggleMode={toggleMode}/>
      <Textform showAlert={showAlert} heading= "Enter the text to analyze"/>
      {/* <About/> */}
      <Alert alert= {alert}/>

    </div>
  );
}

export default App;

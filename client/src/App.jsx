import React, { useState } from 'react';
import Navbar from './components/navbar/Navbar'
import './App.css';

const App = () => {
  const [theme, setTheme] = useState('light'); // initial theme is light

 
  return (
    <div className={theme}>
      <Navbar theme={theme} setTheme={setTheme}/>
    </div>
  )
}

export default App
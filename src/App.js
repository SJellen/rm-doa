import React, { useContext } from 'react'
import './App.css';
import Game from './Game'
import Header from './Header'
import {Context} from './Context'




function App() {

 
  return (
    <div className="App">
    <Header />
    <Game />
    </div>
  );
}

export default App;

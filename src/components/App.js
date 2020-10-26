import React, { useContext } from 'react'
import '../style/App.css';
import Game from './Game'
import Header from './Header'
import {Context} from './Context'
import Start from './Start'
import End from './End'




function App() {

 
  return (
    <div className="App">
    <Header />
    <Game />
    <Start />
    <End />
    </div>
  );
}

export default App;

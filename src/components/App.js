import React, { useContext } from 'react'
import '../style/App.css';
import Game from './Game'
import Header from './Header'
import {Context} from './Context'
import Start from './Start'




function App() {

 
  return (
    <div className="App">
    <Header />
    <Game />
    <Start />
    </div>
  );
}

export default App;

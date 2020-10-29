import React, { useContext } from 'react'
import '../style/Header.css';
import {Context} from './Context'


function Header() {
    const {rickImage, mortyImage} = useContext(Context)

    return (
        <div className="header">
        <img src={rickImage} className="header-image" alt="header character"/>
        <h1 className="title">Rick and Morty Dead or Alive</h1>
        <img src={mortyImage} className="header-image" alt="header character"/>
        </div>

    )
}


export default Header
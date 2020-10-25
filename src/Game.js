import React, { useContext, useState } from 'react'
import './Game.css'
import {Context} from './Context'

function Game() {

    const {currentCharacter, highScore} = useContext(Context)
    const [lives, setLives] = useState(5)

    console.log(currentCharacter)


    return (
        <div className="game-container">
        <div className="game-header">
        <span>High Score: {highScore}</span>
            
            <span>Lives: {lives}</span>    
        </div>

        <img src={currentCharacter.image} alt="character pic" className="character-image"/>
        <div className="info-box">
        <h2>Name: {currentCharacter.name}</h2>
        <h3>Specie: {currentCharacter.species}</h3>
        {currentCharacter.type ? <h3>Type: {currentCharacter.type}</h3> : ''}
        
        <h3>Gender: {currentCharacter.gender}</h3>
        
        {/* <h3>{currentCharacter.origin.name}</h3> 
        <h3>{currentCharacter.location.name}</h3>  */}
        </div>
       

        <div className="choice-box">
        <button className="button">Dead</button>
        <button className="button">Alive</button>
        <button className="button">Unknown</button>

        </div>


            
        </div>
    )
}



export default Game
import React, { useContext, useState } from 'react'
import '../style/Game.css'
import {Context} from './Context'

function Game() {

    const {currentCharacter, highScore, isGameOn} = useContext(Context)
    const [lives, setLives] = useState(5)
    const [score, setScore] = useState(0)
    console.log(currentCharacter)


    return (
        <div>
        { isGameOn ?
        <div className="game-container">
        <div className="game-header">
        <span className="high-score">High Score: {highScore}</span>
            <span className="scoreboard">Score: {score}</span>
            <span className="lives-box">Lives: {lives}</span>    
        </div>

        <img src={currentCharacter.image} alt="character pic" className="character-image"/>
        <div className="info-box">
        <h2>{currentCharacter.name}</h2>
        <h3>Specie: {currentCharacter.species}</h3>
        {currentCharacter.type ? <h3>Type: {currentCharacter.type}</h3> : ''}
        
        <h3>Gender: {currentCharacter.gender}</h3>
        
       {/* {currentCharacter.location.name ? <h3>{currentCharacter.location.name}</h3> : ''}
       {currentCharacter.origin.location ? <h3>{currentCharacter.origin.location}</h3> : ''} */}
        </div>
       

        <div className="choice-box">
        <button className="button">Dead</button>
        <button className="button">Alive</button>
        <button className="button">Unknown</button>

        </div>


            
        </div> : ""
        }
        </div>
    )
}



export default Game
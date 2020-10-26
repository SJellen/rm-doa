import React, { useContext, useState } from 'react'
import '../style/Game.css'
import {Context} from './Context'

function Game() {

    const {currentCharacter, highScore, isGameOn, fetchCharacter, setGameOver, isGameOver, score, setScore} = useContext(Context)
    const [lives, setLives] = useState(5)
    
    console.log(currentCharacter)

    function handleDead() {
        if (currentCharacter.status === "Dead") {
            setScore(prevState => prevState + 1)
            fetchCharacter()
            console.log("dead")
        } else {
            setLives(prevState => prevState -1)
            if (lives <= 0) {
                setGameOver(true)
            }
            fetchCharacter()
        }
    }

    function handleAlive() {
        if (currentCharacter.status === "Alive") {
            setScore(prevState => prevState + 1)
            fetchCharacter()
            console.log("alive")
        } else {
            setLives(prevState => prevState -1)
            if (lives <= 0) {
                setGameOver(true)
            }
            fetchCharacter()
        }
    }

    function handleUnknown() {
        if (currentCharacter.status === "unknown") {
            setScore(prevState => prevState + 1)
            fetchCharacter()
            console.log("unknown")
        } else {
            setLives(prevState => prevState -1)
            if (lives <= 0) {
                setGameOver(true)
            }
            fetchCharacter()
        }
    }


    return (
        <div>
        { isGameOn && !isGameOver ?
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
        <button className="button" onClick={handleDead}>Dead</button>
        <button className="button" onClick={handleAlive}>Alive</button>
        <button className="button" onClick={handleUnknown}>Unknown</button>

        </div>


            
        </div> : ""
        }
        </div>
    )
}



export default Game
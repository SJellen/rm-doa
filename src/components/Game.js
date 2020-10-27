import React, { useContext, useState } from 'react'
import '../style/Game.css'
import {Context} from './Context'

function Game() {

    const {currentCharacter, highScore, isGameOn, fetchCharacter, setGameOver, isGameOver, score, setScore, lives, setLives, setRight, right, setWrong, wrong} = useContext(Context)
    
    
    

    function handleDead() {
        if (currentCharacter.status === "Dead") {
            setScore(prevState => prevState + 100)
            setRight(prevState => prevState + 1)
            fetchCharacter()
            console.log("dead")
        } else {
            setLives(prevState => prevState -1)
            setWrong(prevState => prevState + 1)
            if (lives <= 0) {
                setGameOver(true)
                setWrong(0)
                setRight(0)
            }
            fetchCharacter()
        }
    }

    function handleAlive() {
        if (currentCharacter.status === "Alive") {
            setScore(prevState => prevState + 100)
            setRight(prevState => prevState + 1)
            fetchCharacter()
            console.log("alive")
        } else {
            setLives(prevState => prevState -1)
            setWrong(prevState => prevState + 1)
            if (lives <= 0) {
                setGameOver(true)
                setWrong(0)
                setRight(0)
            }
            fetchCharacter()
        }
    }

    function handleUnknown() {
        if (currentCharacter.status === "unknown") {
            setScore(prevState => prevState + 100)
            setRight(prevState => prevState + 1)
            fetchCharacter()
            console.log("unknown")
        } else {
            setLives(prevState => prevState -1)
            setWrong(prevState => prevState + 1)
            if (lives <= 0) {
                setGameOver(true)
                setWrong(0)
                setRight(0)
            }
            fetchCharacter()
        }
    }


    return (
        <div>
        { isGameOn && !isGameOver ?
        <div className="game-container">
        <div className="game-header">
        
            <span className="right">Right: {right}</span>
            <span className="wrong">Wrong: {wrong}</span>
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

        <div className="game-footer">
        <span className="high-score">High Schmeckles: {highScore}</span>
            <span className="scoreboard">Schmeckles: {score}</span>
        </div>
            
        </div> : ""
        }
        </div>
    )
}



export default Game
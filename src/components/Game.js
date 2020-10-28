import React, { useContext, useState } from 'react'
import '../style/Game.css'
import {Context} from './Context'

function Game() {

    const {currentCharacter, highScore, isGameOn, fetchCharacter, setGameOver, isGameOver, score, setScore, lives, setLives, setRight, right, setWrong, wrong} = useContext(Context)
    
    const {location, origin, image, name, species, type, gender } = currentCharacter
    

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

        <img src={image} alt="character pic" className="character-image"/>
        <div className="info-box">
        <h2>{name}</h2>
        <h3><span className="span-tag">Specie:</span><br></br> {species}</h3>
        {type ? <h3><span className="span-tag">Type:</span><br></br> {type}</h3> : ''}
        
        <h3><span className="span-tag">Gender:</span><br></br> {gender}</h3>
        
       {location.name ? <h3><span className="span-tag">Home location:</span><br></br> {location.name}</h3> : ''}
       {origin.location ? <h3><span className="span-tag">Last know location:</span><br></br> {origin.location}</h3> : ''}
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
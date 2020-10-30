import React, { useContext } from 'react'
import '../style/Game.css'
import {Context} from './Context'
import useGameLogic from '../Logic/useGameLogic'

function Game() {

    const {currentCharacter, highScore, isGameOn, fetchCharacter, isGameOver, score, lives, right, wrong,} = useContext(Context)
    const {handleDead, handleAlive, commaNumbering} = useGameLogic()
    const {location, origin, image, name, species, type, gender } = currentCharacter

    if (currentCharacter.status === "unknown") {
        fetchCharacter()
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
        {image ? <img src={image} alt="character pic" className="character-image"/> : ''}
            <div className="info-box">
                {name ? <h2>{name}</h2> : ''} 
                {species ? <h3><span className="span-tag">Specie:</span><br></br> {species}</h3> : ''} 
                {type ? <h3><span className="span-tag">Type:</span><br></br> {type}</h3> : ''}
                {gender ? <h3><span className="span-tag">Gender:</span><br></br> {gender}</h3> : ''}
                {location.name ? <h3><span className="span-tag">Home location:</span><br></br> {location.name}</h3> : ''}
                {origin.location ? <h3><span className="span-tag">Last know location:</span><br></br> {origin.location}</h3> : ''}
            </div>
            <div className="choice-box">
                <button className="button" onClick={handleDead}>Dead</button>
                <button className="button" onClick={handleAlive}>Alive</button>
            </div>
            <div className="game-footer">
                <span className="high-score">High Schmeckles: {commaNumbering(highScore)}</span>
                <span className="scoreboard">Schmeckles: <br></br>{commaNumbering(score)}</span>
            </div>
        </div> : ""
        }
        </div>
    )
}



export default Game
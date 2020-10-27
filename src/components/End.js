import React, { useContext, useState } from 'react'
import '../style/End.css'
import {Context} from './Context'

function End() {

    const {isGameOver, score, isGameOn, setIsGameOn,setGameOver, setScore, setLives, jerryImage, meeseeksImage} = useContext(Context)

    function handleEndClick() {
        setScore(0)
        setLives(5)
        setGameOver(false)
        // setIsGameOn(true)
    }

    const jerryCard = <div>
                        <img src={jerryImage} className="end-card-image" alt="end card"/>
                        <span className="end-card-text">Hey, you did the best you could. Wanna Smore?</span>
                        </div>

    const meeseeksCard = <div>
                        <img src={meeseeksImage} className="end-card-image" alt="end card"/>
                        <span className="end-card-text">You gotta relax.</span>
                        </div>                

    
    


    return (
        <div>
        { isGameOver ?
        <div className="end-container">

        {score < 500 ? jerryCard : score >= 500 && score < 1000 ? meeseeksCard : ''}
        <h1 className="final-score">Final Schmeckles: {score}</h1>


        <div className="end-button-box"><button onClick={handleEndClick}>Replay</button></div>
        
        </div> : ""
        }
        </div>
    )
}



export default End
import React, { useContext, useState } from 'react'
import '../style/End.css'
import {Context} from './Context'

function End() {

    const {isGameOver, score, isGameOn, setIsGameOn,setGameOver, setScore, setLives} = useContext(Context)

    function handleEndClick() {

        setScore(0)
        setLives(5)
        setGameOver(false)
        // setIsGameOn(true)
        
        
       

    }

    
    


    return (
        <div>
        { isGameOver ?
        <div className="end-container">
        <h1>Final score: {score}</h1>


        <div><button onClick={handleEndClick}>Replay</button></div>
        
        </div> : ""
        }
        </div>
    )
}



export default End
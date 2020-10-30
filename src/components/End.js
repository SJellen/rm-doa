import React, { useContext } from 'react'
import '../style/End.css'
import {Context} from './Context'
import useEndLogic from '../Logic/useEndLogic'
import useGameLogic from '../Logic/useGameLogic'

function End() {

    const {isGameOver, score,longestStreak} = useContext(Context)
    const {handleEndClick, endText} = useEndLogic()
    const {commaNumbering} = useGameLogic()


    return (
        <div>
        { isGameOver ?
        <div className="end-container">
        {endText}
        <h2 className="longest-streak">Longest streak: {longestStreak}</h2>
        <h2 className="final-score">Final Schmeckles: {commaNumbering(score)}</h2>
        <div className="end-button-box"><button onClick={handleEndClick}>Replay</button></div>
        </div> : ""
        }
        </div>
    )
}



export default End
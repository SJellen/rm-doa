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
        <h2 className="longest-streak">Longest streak: <span className="end-longstreak">{longestStreak}</span></h2>
        <h2 className="final-score">Final Schmeckles: <span className="end-score">{commaNumbering(score)}</span></h2>
        <div className="end-button-box"><button onClick={handleEndClick}>Replay</button></div>
        </div> : ""
        }
        </div>
    )
}



export default End
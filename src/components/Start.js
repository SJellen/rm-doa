import React, { useContext, useState } from 'react'
import '../style/Start.css'
import {Context} from './Context'

function Start() {

    const {poopyImage, isGameOn, setIsGameOn, isStartPage, setIsStartPage} = useContext(Context)

    function handleClick() {
        setIsGameOn(true)
        setIsStartPage(false)
    }
    


    return (
        <div>
        { isStartPage ?
        <div className="start-container">
        <img src={poopyImage} alt="mr poopybutthole" className="start-image" />

        <div className="wordballoon">Ooh wee, I sure would like to play a game. Ooh wee.</div>

            <span className="button-box"><button onClick={handleClick}>Start</button></span>
        </div> : ""
        }
        </div>
    )
}



export default Start
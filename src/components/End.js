import React, { useContext, useState } from 'react'
import '../style/End.css'
import {Context} from './Context'

function End() {

    const {isGameOver, score} = useContext(Context)

    
    


    return (
        <div>
        { isGameOver ?
        <div className="end-container">
        <h1>Final score: {score}</h1>
        
        </div> : ""
        }
        </div>
    )
}



export default End
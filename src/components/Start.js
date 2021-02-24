import React, { useContext } from 'react'
import '../style/Start.css'
import {Context} from './Context'
import { motion, useMotionValue, useTransform } from 'framer-motion';

function Start() {

    const {poopyImage, setIsGameOn, isStartPage, setIsStartPage, topLevelLoadingAnimation} = useContext(Context)

    function handleClick() {
        setIsGameOn(true)
        setIsStartPage(false)
    }
    
    return (
        <div>
            { isStartPage ?
            <motion.div 
                initial="hidden"
                animate="visible"
                variants={topLevelLoadingAnimation}
                className="start-container">
                <img src={poopyImage} alt="mr poopybutthole" className="start-image" />
                    <div className="wordballoon">Ooh wee, I sure would like to play a game. Ooh wee.</div>
                <span className="button-box"><button onClick={handleClick}>Start</button></span>
            </motion.div> : ""
            }
        </div>
    )
}

export default Start
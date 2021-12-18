import React, { useContext } from 'react'
import '../style/Header.css';
import {Context} from './Context'
import { motion} from 'framer-motion'

function Header() {
    const {rickImage, mortyImage, topLevelLoadingAnimation} = useContext(Context)
    return (
        <motion.div 
            initial="hidden"
            animate="visible"
            variants={topLevelLoadingAnimation}
            className="header">
        <img src={rickImage} className="header-image" alt="header character"/>
        <h1 className="title">Rick and Morty Dead or Alive</h1>
        <img src={mortyImage} className="header-image" alt="header character"/>
        </motion.div>
    )
}

export default Header
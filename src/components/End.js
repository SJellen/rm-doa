import React, { useContext } from 'react'
import '../style/End.css'
import {Context} from './Context'

function End() {

    const {isGameOver, score,setGameOver, setScore, setLives, jerryImage, meeseeksImage, summerImage, bethImage, pickleImage, setScoreArr,longestStreak} = useContext(Context)


    function handleEndClick() {
        
        setScore(0)
        setLives(5)
        setGameOver(false)
        setScoreArr([])
        // setIsGameOn(true)
    }

    const jerryCard = <div>
                        <img src={jerryImage} className="end-card-image" alt="end card"/>
                        <div className="text-box">
                           <span className="end-card-text">Hey buddy, you did the best you could. Wanna Smore?</span> 
                        </div>
                        
                        </div>

    const meeseeksCard = <div>
                        <img src={meeseeksImage} className="end-card-image" alt="end card"/>
                        <div className="text-box">
                           <span className="end-card-text">You gotta relax.</span> 
                        </div>
                        
                        </div>  
                        
    const summerCard = <div>
                        <img src={summerImage} className="end-card-image" alt="end card"/>
                        <div className="text-box">
                            <span className="end-card-text">We're all reeeaal impressed.</span>
                        </div>
                        
                        </div>                     

    const bethCard = <div>
                        <img src={bethImage} className="end-card-image" alt="end card"/>
                        <div className="text-box">
                          <span className="end-card-text">I'm sorry you feel you deserve an apology.</span>  
                        </div>
                        
                        </div>    

    const pickleCard = <div>
                    <img src={pickleImage} className="end-card-image" alt="end card"/>
                    <div className="text-box">
                    <span className="end-card-text">The reason anyone would do this is, if they could, which they can't, would be because they could, which they can't.</span>  
                    </div>

                    </div>                       



    const endText = score < 500 ? 
    jerryCard : score >= 500 && score < 1500 ? meeseeksCard : score >= 1500 && score < 5000 ? summerCard : score >= 5000 && score < 10000 ? bethCard : pickleCard

    return (
        <div>
        { isGameOver ?
        <div className="end-container">
        {endText}
        <h2 className="longest-streak">Longest streak: {longestStreak}</h2>
        <h2 className="final-score">Final Schmeckles: {score}</h2>
        <div className="end-button-box"><button onClick={handleEndClick}>Replay</button></div>
        </div> : ""
        }
        </div>
    )
}



export default End
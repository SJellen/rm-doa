import { useContext } from 'react'
import {Context} from '../components/Context'


function useEndLogic() {

    const {score,setGameOver, setScore, setLives, jerryImage, meeseeksImage, summerImage, bethImage, pickleImage, setScoreArr} = useContext(Context) 

    function handleEndClick() {
        setScore(0)
        setLives(5)
        setGameOver(false)
        setScoreArr([])
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

    const endText = score < 1000 ? 
    jerryCard : score >= 1000 && score < 10000 ? meeseeksCard : score >= 10000 && score < 50000 ? summerCard : score >= 50000 && score < 150000 ? bethCard : pickleCard






    return {handleEndClick, jerryCard, meeseeksCard, summerCard, bethCard, pickleCard, endText}
}


export default useEndLogic
import { useContext } from 'react'
import {Context} from '../components/Context'

function useGameLogic() {

    const {currentCharacter, fetchCharacter, setGameOver, setScore, lives, setLives, setRight, setWrong, scoreArr, setScoreArr, handleStreaks} = useContext(Context)

    function handleDead() {
        if (currentCharacter.status === "Dead") {
            setScoreArr([...scoreArr, "r"])
            setScore(prevState => prevState + 100)
            setRight(prevState => prevState + 1)
            handleStreaks()
            fetchCharacter()
        } else {
            setScoreArr([...scoreArr, "w"])
            setLives(prevState => prevState -1)
            setWrong(prevState => prevState + 1)
            handleStreaks()
            if (lives <= 0) {
                setGameOver(true)
                setWrong(0)
                setRight(0)
            }
            fetchCharacter()
        }
    }

    function handleAlive() {
        if (currentCharacter.status === "Alive") {
            setScoreArr([...scoreArr, "r"])
            setScore(prevState => prevState + 100)
            setRight(prevState => prevState + 1)
            handleStreaks()
            fetchCharacter()
        } else {
            setScoreArr([...scoreArr, "w"])
            setLives(prevState => prevState -1)
            setWrong(prevState => prevState + 1)
            handleStreaks()
            if (lives <= 0) {
                setGameOver(true)
                setWrong(0)
                setRight(0)
            }
            fetchCharacter()
        }
    }

    return {handleDead, handleAlive}

}


export default useGameLogic
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
            if (lives <= 1) {
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
            if (lives <= 1) {
                setGameOver(true)
                setWrong(0)
                setRight(0)
            }
            fetchCharacter()
        }
    }

    let lastAnswer = scoreArr[scoreArr.length - 1]

    const rightStyle = {color: lastAnswer === "r" ? "green" : ''}
    const wrongStyle = {color: lastAnswer === "w" ? "red" : ''}
    const livesStyle = {color: lives === 1 ? 'red':
                               lives === 2 ? 'orange' :
                               lives === 3 ? 'yellow' : ''}
    


    function commaNumbering(num) {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    }

    return {handleDead, handleAlive, commaNumbering, lastAnswer, rightStyle, wrongStyle, livesStyle}

}


export default useGameLogic
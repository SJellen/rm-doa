import React, {useState, useEffect} from 'react'

let storageScores = localStorage.getItem('myData')
storageScores = JSON.parse(storageScores)

const Context = React.createContext()

// storageScores = localStorage.clear()

function ContextProvider({children}) {

    const [rickImage, setRickImage] = useState()
    const [mortyImage, setMortyImage] = useState()
    const [poopyImage, setPoopyImage] = useState()
    const [jerryImage, setJerryImage] = useState()
    const [meeseeksImage, setMeeseeksImage] = useState()
    const [summerImage, setSummerImage] = useState()
    const [bethImage, setBethImage] = useState()
    const [pickleImage, setPickleImage] = useState()
    const [currentCharacter, setCurrentCharacter] = useState([])
    const [highScore, setHighScore] = useState(storageScores ? storageScores : 0)
    const [isGameOn, setIsGameOn] = useState(false)
    const [isGameOver, setGameOver] = useState(false)
    const [score, setScore] = useState(0)
    const [isGameRestart, setIsGameRestart] = useState(false)
    const [isStartPage, setIsStartPage] = useState(true)
    const [lives, setLives] = useState(5)
    const [right, setRight] = useState(0)
    const [wrong, setWrong] = useState(0)
    const [scoreArr, setScoreArr] = useState([])
    const [longestStreak, setLongestStreak] = useState(0)

    function randomCharacter(min, max) {
        min = Math.ceil(min)
        max = Math.floor(max)
        return Math.floor(Math.random() * (max - min + 1)) + min
    }

    let randomId = randomCharacter(1,671)

    const fetchCharacter = async () => {
        await fetch(`https://rickandmortyapi.com/api/character/${randomId}`)
       .then(res => res.json())
       .then(data => 
        setCurrentCharacter(data)
       )
       .catch(error => console.log(error))
   }

    const fetchRick = async () => {
        await fetch('https://rickandmortyapi.com/api/character/1')
       .then(res => res.json())
       .then(data => 
        setRickImage(data = data.image)
       )
       .catch(error => console.log(error))
   }

   const fetchMorty = async () => {
    await fetch('https://rickandmortyapi.com/api/character/2')
   .then(res => res.json())
   .then(data => 
    setMortyImage(data = data.image)
   )
   .catch(error => console.log(error))
    }

    const fetchJerry = async () => {
    await fetch('https://rickandmortyapi.com/api/character/5')
   .then(res => res.json())
   .then(data => 
    setJerryImage(data = data.image)
   )
   .catch(error => console.log(error))
    }

    const fetchPoopy = async () => {
    await fetch('https://rickandmortyapi.com/api/character/244')
   .then(res => res.json())
   .then(data => 
    setPoopyImage(data = data.image)
   )
   .catch(error => console.log(error))
    }

    const fetchMeeseeks = async () => {
    await fetch('https://rickandmortyapi.com/api/character/242')
   .then(res => res.json())
   .then(data => 
    setMeeseeksImage(data = data.image)
   )
   .catch(error => console.log(error))
    }

    const fetchSummer = async () => {
    await fetch('https://rickandmortyapi.com/api/character/3')
   .then(res => res.json())
   .then(data => 
    setSummerImage(data = data.image)
   )
   .catch(error => console.log(error))
    }

    const fetchBeth = async () => {
        await fetch('https://rickandmortyapi.com/api/character/4')
       .then(res => res.json())
       .then(data => 
        setBethImage(data = data.image)
       )
       .catch(error => console.log(error))
        }

    const fetchPickle = async () => {
        await fetch('https://rickandmortyapi.com/api/character/265')
        .then(res => res.json())
        .then(data => 
        setPickleImage(data = data.image)
        )
        .catch(error => console.log(error))
        }


   useEffect(() => {
    fetchRick()
    fetchMorty()
    fetchCharacter()
    if (currentCharacter.status === "unknown") {
        fetchCharacter()
    }
    fetchPoopy()
    fetchJerry()
    fetchMeeseeks()
    fetchSummer()
    fetchBeth()
    fetchPickle()
     // eslint-disable-next-line react-hooks/exhaustive-deps
   },[highScore, longestStreak, score])



  
    if (score > highScore) {
        setHighScore(score)
        localStorage.setItem('myData', score)
    }

    function handleStreaks() {
        let highStreak = 1
        let currentStreak = 1
        for (let i=0; i< scoreArr.length; i++) {
        if (scoreArr[i] === "r" && scoreArr[i+1] === "r") {
            currentStreak++ 
            if (currentStreak > highStreak)
            highStreak = currentStreak
        } else {
            currentStreak = 1   
        }  
    } 

    if (highStreak >= 5 && highStreak < 10) {
            setScore(prevState => Math.floor(prevState + (prevState * .10)))
    } else if (highStreak >= 10 && highStreak < 15) {
        setScore(prevState => Math.floor(prevState + (prevState * .15)))
    } else if (highStreak >= 15 && highStreak < 25) {
        setScore(prevState => Math.floor(prevState + (prevState * .25)))
    } else if (highStreak >= 25 && highStreak < 50) {
        setScore(prevState => Math.floor(prevState + (prevState * .40)))
    } else if (highStreak >= 50) {
        setScore(prevState => Math.floor(prevState + (prevState * .50)))
    }

    if (!scoreArr.includes('r')) {
        setLongestStreak(0)
    } else {
    setLongestStreak(highStreak)
    }
    
    
    }


    const topLevelLoadingAnimation = {
        hidden: {
            scale: .75,
            opacity: 0
        },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                delay: .4
            }
        }
    }

  

    return (
        <Context.Provider value={{rickImage, mortyImage, currentCharacter, highScore, isGameOn, setIsGameOn,poopyImage, fetchCharacter, isGameOver, setGameOver, score, setScore, setIsGameRestart, isGameRestart, isStartPage, setIsStartPage, lives, setLives, right, setRight, wrong, setWrong, jerryImage, meeseeksImage, summerImage, bethImage, pickleImage, setHighScore, scoreArr, setScoreArr, handleStreaks, longestStreak, topLevelLoadingAnimation}}>
            {children}
        </Context.Provider>
    )
}



export {ContextProvider, Context}
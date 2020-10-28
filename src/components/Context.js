import React, {useState, useEffect} from 'react'


const Context = React.createContext()


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
    const [highScore, setHighScore] = useState(0)
    const [isGameOn, setIsGameOn] = useState(false)
    const [isGameOver, setGameOver] = useState(false)
    const [score, setScore] = useState(0)
    const [isGameRestart, setIsGameRestart] = useState(false)
    const [isStartPage, setIsStartPage] = useState(true)
    const [lives, setLives] = useState(5)
    const [right, setRight] = useState(0)
    const [wrong, setWrong] = useState(0)


    let randomId = Math.floor(Math.random() * 671)

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
    fetchPoopy()
    fetchJerry()
    fetchMeeseeks()
    fetchSummer()
    fetchBeth()
    fetchPickle()
   },[])

   
   
  
   

    return (
        <Context.Provider value={{rickImage, mortyImage, currentCharacter, highScore, isGameOn, setIsGameOn,poopyImage, fetchCharacter, isGameOver, setGameOver, score, setScore, setIsGameRestart, isGameRestart, isStartPage, setIsStartPage, lives, setLives, right, setRight, wrong, setWrong, jerryImage, meeseeksImage, summerImage, bethImage, pickleImage}}>
            {children}
        </Context.Provider>
    )
}












export {ContextProvider, Context}
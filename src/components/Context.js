import React, {useState, useEffect} from 'react'


const Context = React.createContext()


function ContextProvider({children}) {

    const [rickImage, setRickImage] = useState()
    const [mortyImage, setMortyImage] = useState()
    const [poopyImage, setPoopyImage] = useState()
    const [currentCharacter, setCurrentCharacter] = useState([])
    const [highScore, setHighScore] = useState(0)
    const [isGameOn, setIsGameOn] = useState(false)
    const [isGameOver, setGameOver] = useState(false)
    const [score, setScore] = useState(0)




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

const fetchPoopy = async () => {
    await fetch('https://rickandmortyapi.com/api/character/244')
   .then(res => res.json())
   .then(data => 
    setPoopyImage(data = data.image)
    
   )
   .catch(error => console.log(error))
}


   useEffect(() => {
    fetchRick()
    fetchMorty()
    fetchCharacter()
    fetchPoopy()
   },[])

   console.log(rickImage)

    return (
        <Context.Provider value={{rickImage, mortyImage, currentCharacter, highScore, isGameOn, setIsGameOn,poopyImage, fetchCharacter, isGameOver, setGameOver, score, setScore}}>
            {children}
        </Context.Provider>
    )
}












export {ContextProvider, Context}
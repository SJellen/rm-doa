import React, {useState, useEffect} from 'react'


const Context = React.createContext()


function ContextProvider({children}) {

    const [rickImage, setRickImage] = useState()
    const [mortyImage, setMortyImage] = useState()







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


   useEffect(() => {
    fetchRick()
    fetchMorty()
   },[])

   console.log(rickImage)

    return (
        <Context.Provider value={{rickImage, mortyImage}}>
            {children}
        </Context.Provider>
    )
}












export {ContextProvider, Context}
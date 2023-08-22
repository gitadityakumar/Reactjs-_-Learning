import { useState } from 'react'

import './App.css'

function App() {

   let [Counter, setCounter] = useState(0);
   
  const addvalue = ()=> {
      // console.log("value added :", Math.random());
      setCounter(Counter + 1) 
      if(Counter == 100){
        setCounter(100)
      }  
  }
  
  const removevalue = () => {
    setCounter(Counter-1)
    if(Counter == 0){
      setCounter(0);
    }
  }

  return (
    <>
    <h1>React Hooks</h1>
    <p>This counter counts only 100 number </p>
    <h2>Counter value : {Counter}</h2>
    <button onClick={addvalue}>Add value</button> <br/>  <br/> 
    <button onClick={removevalue}>Remove value</button>
    </>
  )
}

export default App

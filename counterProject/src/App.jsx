import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

 const [counter, setCounter] = useState(15)
  
  //let counter = 15
  const addValue = () => {
    counter = counter + 1;
    //console.log(counter)
    setCounter(counter)
  }

  const removeValue = () =>{
    setCounter(counter-1)
  }

  return (
    <>
      <h1>chai our react</h1>
      <h3>Counter value : {counter}</h3>
      <button
      onClick={addValue}
      >add value</button>
      <button
      onClick={removeValue}
      >remove value</button>
    </>
  )
}

export default App

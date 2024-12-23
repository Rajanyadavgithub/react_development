import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import  Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  let myObj ={
    username: "Rajan",
    age: 21,
  }

  let newArr = [1,2,3]

  return (
    <>
      
    <h1 class="bg-orange-500 p-2 rounded-xl mb-4" >hello Rajan</h1>     
    
    <Card username ="chai aur code" btnText="visit CAC" />
    <Card  username="Rajan" btnText="click me"/>
    </>
  )
}

export default App

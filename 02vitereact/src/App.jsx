import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter , setCounter] = useState(0)
  
  // let counter = 20;
const addValue = () => {
  // console.log("add value" , counter);
       
  counter = counter +1;
  setCounter(counter)
  // setCounter(counter => counter +1)
  // setCounter(counter => counter +1)
}
const reMove = () => {
  counter = counter -1;
  setCounter(counter)
}
   
  
  return (
    <>
      <h1>Me or code</h1>
      <h2>Counter value:{counter}</h2>
      <button
      onClick = {addValue}
      >Add value </button>
      <button
      onClick = {reMove} 
      >Remove value </button>
      <p>{counter}</p>
    </>
  )
}

export default App

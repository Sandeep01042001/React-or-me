import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'

function App() {
  

  return (
    <>
      <h1 className='bg-green-400 p-4 rounded-xl mb-4'>Tailwind test</h1>
      <Card username="Sandeep" btnText ="Click me!"/>
      <Card username="SANDEEP" btnText="Learn more" />
    </>
  )
}

export default App

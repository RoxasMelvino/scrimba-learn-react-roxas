import { useState } from 'react'
import Navbar from "./components/Navbar.jsx"
import Meme from "./components/Meme.jsx"
import './App.css'

function App() {

  return (
    <div className='meme-generator__container'>
      <Navbar />
      <Meme />
    </div>
  )
}

export default App

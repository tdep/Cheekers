import { useState } from 'react'
import React from "react"
import BattlePage from './components/BattlePage'
import StartPage from './components/StartPage'
import PlayerPage from './components/PlayerPage'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {

  const [playerOne, setPlayerOne] = useState([])
  const [playerTwo, setPlayerTwo] = useState([])


  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<StartPage />}/>
          <Route path="players" element={<PlayerPage setPlayerOne={setPlayerOne} setPlayerTwo={setPlayerTwo}/>}/>
          <Route path="players/game" element={<BattlePage playerOne={playerOne} playerTwo={playerTwo} />}/>
      </Routes>
    </BrowserRouter>
    // <div >
    //   {/* <Board /> */}
    //   <Message />
    // </div>
  )
}

export default App
